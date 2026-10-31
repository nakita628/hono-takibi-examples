<h1 id="search-ads-360-reporting-api">Search Ads 360 Reporting API v0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Search Ads 360 API allows developers to automate downloading reports from Search Ads 360.

Base URLs:

* <a href="https://searchads360.googleapis.com/">https://searchads360.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/search-ads/reporting">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/doubleclicksearch|View and manage your advertising data in DoubleClick Search|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/doubleclicksearch|View and manage your advertising data in DoubleClick Search|

<h1 id="search-ads-360-reporting-api-customers">customers</h1>

## searchads360.customers.customColumns.list

<a id="opIdsearchads360.customers.customColumns.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v0/customers/string/customColumns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v0/customers/{customerId}/customColumns`

Returns all the custom columns associated with the customer in full detail.

<h3 id="searchads360customerscustomcolumnslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Required. The ID of the customer to apply the CustomColumn list operation to.|
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
  "customColumns": [
    {
      "description": "string",
      "id": "string",
      "name": "string",
      "queryable": true,
      "referencedSystemColumns": [
        "string"
      ],
      "referencesAttributes": true,
      "referencesMetrics": true,
      "resourceName": "string",
      "valueType": "UNSPECIFIED"
    }
  ]
}
```

<h3 id="searchads360customerscustomcolumnslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAdsSearchads360V0Services__ListCustomColumnsResponse](#schemagoogleadssearchads360v0services__listcustomcolumnsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## searchads360.customers.searchAds360.search

<a id="opIdsearchads360.customers.searchAds360.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v0/customers/string/searchAds360:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pageSize": 0,
    "pageToken": "string",
    "query": "string",
    "returnTotalResultsCount": true,
    "summaryRowSetting": "UNSPECIFIED",
    "validateOnly": true
  }'
```

`POST /v0/customers/{customerId}/searchAds360:search`

Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

> Body parameter

```json
{
  "pageSize": 0,
  "pageToken": "string",
  "query": "string",
  "returnTotalResultsCount": true,
  "summaryRowSetting": "UNSPECIFIED",
  "validateOnly": true
}
```

<h3 id="searchads360customerssearchads360search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Required. The ID of the customer being queried.|
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
|body|body|[GoogleAdsSearchads360V0Services__SearchSearchAds360Request](#schemagoogleadssearchads360v0services__searchsearchads360request)|false|none|
|» pageSize|body|integer(int32)|false|Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.|
|» pageToken|body|string|false|Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.|
|» query|body|string|false|Required. The query string.|
|» returnTotalResultsCount|body|boolean|false|If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false.|
|» summaryRowSetting|body|string|false|Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned.|
|» validateOnly|body|boolean|false|If true, the request is validated but not executed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» summaryRowSetting|UNSPECIFIED|
|» summaryRowSetting|UNKNOWN|
|» summaryRowSetting|NO_SUMMARY_ROW|
|» summaryRowSetting|SUMMARY_ROW_WITH_RESULTS|
|» summaryRowSetting|SUMMARY_ROW_ONLY|

> Example responses

> 200 Response

```json
{
  "customColumnHeaders": [
    {
      "id": "string",
      "name": "string",
      "referencesMetrics": true
    }
  ],
  "fieldMask": "string",
  "nextPageToken": "string",
  "results": [
    {
      "adGroup": {
        "adRotationMode": "UNSPECIFIED",
        "cpcBidMicros": "string",
        "creationTime": "string",
        "endDate": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "id": "string",
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "lastModifiedTime": "string",
        "name": "string",
        "resourceName": "string",
        "startDate": "string",
        "status": "UNSPECIFIED",
        "targetingSetting": {
          "targetRestrictions": [
            {
              "bidOnly": true,
              "targetingDimension": "UNSPECIFIED"
            }
          ]
        },
        "type": "UNSPECIFIED"
      },
      "adGroupAd": {
        "ad": {
          "displayUrl": "string",
          "finalUrls": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "resourceName": "string",
          "type": "UNSPECIFIED"
        },
        "creationTime": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED"
      },
      "adGroupAdLabel": {
        "adGroupAd": "string",
        "label": "string",
        "resourceName": "string"
      },
      "adGroupAudienceView": {
        "resourceName": "string"
      },
      "adGroupBidModifier": {
        "bidModifier": 0,
        "device": {
          "type": "UNSPECIFIED"
        },
        "resourceName": "string"
      },
      "adGroupCriterion": {
        "adGroup": "string",
        "ageRange": {
          "type": "UNSPECIFIED"
        },
        "bidModifier": 0,
        "cpcBidMicros": "string",
        "creationTime": "string",
        "criterionId": "string",
        "effectiveCpcBidMicros": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "finalUrlSuffix": "string",
        "finalUrls": [
          "string"
        ],
        "gender": {
          "type": "UNSPECIFIED"
        },
        "keyword": {
          "matchType": "UNSPECIFIED",
          "text": "string"
        },
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "listingGroup": {
          "type": "UNSPECIFIED"
        },
        "location": {
          "geoTargetConstant": "string"
        },
        "negative": true,
        "qualityInfo": {
          "qualityScore": 0
        },
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "trackingUrlTemplate": "string",
        "type": "UNSPECIFIED",
        "userList": {
          "userList": "string"
        },
        "webpage": {
          "conditions": [
            {
              "argument": "string",
              "operand": "UNSPECIFIED",
              "operator": "UNSPECIFIED"
            }
          ],
          "coveragePercentage": 0,
          "criterionName": "string"
        }
      },
      "adGroupCriterionLabel": {
        "adGroupCriterion": "string",
        "label": "string",
        "resourceName": "string"
      },
      "adGroupLabel": {
        "adGroup": "string",
        "label": "string",
        "resourceName": "string"
      },
      "ageRangeView": {
        "resourceName": "string"
      },
      "biddingStrategy": {
        "campaignCount": "string",
        "currencyCode": "string",
        "effectiveCurrencyCode": "string",
        "enhancedCpc": {},
        "id": "string",
        "maximizeConversionValue": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "maximizeConversions": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "name": "string",
        "nonRemovedCampaignCount": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "targetCpa": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "targetImpressionShare": {
          "cpcBidCeilingMicros": "string",
          "location": "UNSPECIFIED",
          "locationFractionMicros": "string"
        },
        "targetOutrankShare": {
          "cpcBidCeilingMicros": "string"
        },
        "targetRoas": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "targetSpend": {
          "cpcBidCeilingMicros": "string",
          "targetSpendMicros": "string"
        },
        "type": "UNSPECIFIED"
      },
      "campaign": {
        "adServingOptimizationStatus": "UNSPECIFIED",
        "advertisingChannelSubType": "UNSPECIFIED",
        "advertisingChannelType": "UNSPECIFIED",
        "biddingStrategy": "string",
        "biddingStrategySystemStatus": "UNSPECIFIED",
        "biddingStrategyType": "UNSPECIFIED",
        "campaignBudget": "string",
        "createTime": "string",
        "creationTime": "string",
        "dynamicSearchAdsSetting": {
          "domainName": "string",
          "languageCode": "string",
          "useSuppliedUrlsOnly": true
        },
        "endDate": "string",
        "engineId": "string",
        "excludedParentAssetFieldTypes": [
          "UNSPECIFIED"
        ],
        "finalUrlSuffix": "string",
        "frequencyCaps": [
          {}
        ],
        "geoTargetTypeSetting": {
          "negativeGeoTargetType": "UNSPECIFIED",
          "positiveGeoTargetType": "UNSPECIFIED"
        },
        "id": "string",
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "manualCpa": {},
        "manualCpc": {
          "enhancedCpcEnabled": true
        },
        "manualCpm": {},
        "maximizeConversionValue": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "maximizeConversions": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "name": "string",
        "networkSettings": {
          "targetContentNetwork": true,
          "targetGoogleSearch": true,
          "targetPartnerSearchNetwork": true,
          "targetSearchNetwork": true
        },
        "optimizationGoalSetting": {
          "optimizationGoalTypes": [
            "UNSPECIFIED"
          ]
        },
        "percentCpc": {
          "cpcBidCeilingMicros": "string",
          "enhancedCpcEnabled": true
        },
        "realTimeBiddingSetting": {
          "optIn": true
        },
        "resourceName": "string",
        "selectiveOptimization": {
          "conversionActions": [
            "string"
          ]
        },
        "servingStatus": "UNSPECIFIED",
        "shoppingSetting": {
          "campaignPriority": 0,
          "enableLocal": true,
          "feedLabel": "string",
          "merchantId": "string",
          "salesCountry": "string",
          "useVehicleInventory": true
        },
        "startDate": "string",
        "status": "UNSPECIFIED",
        "targetCpa": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "targetCpm": {},
        "targetImpressionShare": {
          "cpcBidCeilingMicros": "string",
          "location": "UNSPECIFIED",
          "locationFractionMicros": "string"
        },
        "targetRoas": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "targetSpend": {
          "cpcBidCeilingMicros": "string",
          "targetSpendMicros": "string"
        },
        "trackingSetting": {
          "trackingUrl": "string"
        },
        "trackingUrlTemplate": "string",
        "urlCustomParameters": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "urlExpansionOptOut": true
      },
      "campaignAudienceView": {
        "resourceName": "string"
      },
      "campaignBudget": {
        "amountMicros": "string",
        "deliveryMethod": "UNSPECIFIED",
        "period": "UNSPECIFIED",
        "resourceName": "string"
      },
      "campaignCriterion": {
        "ageRange": {
          "type": "UNSPECIFIED"
        },
        "bidModifier": 0,
        "criterionId": "string",
        "device": {
          "type": "UNSPECIFIED"
        },
        "displayName": "string",
        "gender": {
          "type": "UNSPECIFIED"
        },
        "keyword": {
          "matchType": "UNSPECIFIED",
          "text": "string"
        },
        "language": {
          "languageConstant": "string"
        },
        "lastModifiedTime": "string",
        "location": {
          "geoTargetConstant": "string"
        },
        "locationGroup": {
          "feedItemSets": [
            "string"
          ],
          "geoTargetConstants": [
            "string"
          ],
          "radius": "string",
          "radiusUnits": "UNSPECIFIED"
        },
        "negative": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "type": "UNSPECIFIED",
        "userList": {
          "userList": "string"
        },
        "webpage": {
          "conditions": [
            {
              "argument": "string",
              "operand": "UNSPECIFIED",
              "operator": "UNSPECIFIED"
            }
          ],
          "coveragePercentage": 0,
          "criterionName": "string"
        }
      },
      "campaignLabel": {
        "campaign": "string",
        "label": "string",
        "resourceName": "string"
      },
      "conversionAction": {
        "appId": "string",
        "attributionModelSettings": {
          "attributionModel": "UNSPECIFIED",
          "dataDrivenModelStatus": "UNSPECIFIED"
        },
        "category": "UNSPECIFIED",
        "clickThroughLookbackWindowDays": "string",
        "creationTime": "string",
        "floodlightSettings": {
          "activityGroupTag": "string",
          "activityId": "string",
          "activityTag": "string"
        },
        "id": "string",
        "includeInClientAccountConversionsMetric": true,
        "includeInConversionsMetric": true,
        "name": "string",
        "ownerCustomer": "string",
        "primaryForGoal": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "type": "UNSPECIFIED",
        "valueSettings": {
          "alwaysUseDefaultValue": true,
          "defaultCurrencyCode": "string",
          "defaultValue": 0
        }
      },
      "customColumns": [
        {
          "booleanValue": true,
          "doubleValue": 0,
          "floatValue": 0,
          "int64Value": "string",
          "stringValue": "string"
        }
      ],
      "customer": {
        "accountStatus": "UNSPECIFIED",
        "accountType": "UNSPECIFIED",
        "autoTaggingEnabled": true,
        "conversionTrackingSetting": {
          "acceptedCustomerDataTerms": true,
          "conversionTrackingId": "string",
          "conversionTrackingStatus": "UNSPECIFIED",
          "crossAccountConversionTrackingId": "string",
          "enhancedConversionsForLeadsEnabled": true,
          "googleAdsConversionCustomer": "string",
          "googleAdsCrossAccountConversionTrackingId": "string"
        },
        "creationTime": "string",
        "currencyCode": "string",
        "descriptiveName": "string",
        "doubleClickCampaignManagerSetting": {
          "advertiserId": "string",
          "networkId": "string",
          "timeZone": "string"
        },
        "engineId": "string",
        "finalUrlSuffix": "string",
        "id": "string",
        "lastModifiedTime": "string",
        "manager": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "timeZone": "string",
        "trackingUrlTemplate": "string"
      },
      "customerClient": {
        "appliedLabels": [
          "string"
        ],
        "clientCustomer": "string",
        "currencyCode": "string",
        "descriptiveName": "string",
        "hidden": true,
        "id": "string",
        "level": "string",
        "manager": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "testAccount": true,
        "timeZone": "string"
      },
      "customerManagerLink": {
        "managerCustomer": "string",
        "managerLinkId": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED"
      },
      "dynamicSearchAdsSearchTermView": {
        "landingPage": "string",
        "resourceName": "string"
      },
      "genderView": {
        "resourceName": "string"
      },
      "keywordView": {
        "resourceName": "string"
      },
      "label": {
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "textLabel": {
          "backgroundColor": "string",
          "description": "string"
        }
      },
      "locationView": {
        "resourceName": "string"
      },
      "metrics": {
        "absoluteTopImpressionPercentage": 0,
        "allConversions": 0,
        "allConversionsByConversionDate": 0,
        "allConversionsFromClickToCall": 0,
        "allConversionsFromDirections": 0,
        "allConversionsFromInteractionsRate": 0,
        "allConversionsFromInteractionsValuePerInteraction": 0,
        "allConversionsFromMenu": 0,
        "allConversionsFromOrder": 0,
        "allConversionsFromOtherEngagement": 0,
        "allConversionsFromStoreVisit": 0,
        "allConversionsFromStoreWebsite": 0,
        "allConversionsValue": 0,
        "allConversionsValueByConversionDate": 0,
        "allConversionsValuePerCost": 0,
        "averageCost": 0,
        "averageCpc": 0,
        "averageCpm": 0,
        "clicks": "string",
        "clientAccountConversions": 0,
        "clientAccountConversionsValue": 0,
        "clientAccountViewThroughConversions": "string",
        "contentBudgetLostImpressionShare": 0,
        "contentImpressionShare": 0,
        "contentRankLostImpressionShare": 0,
        "conversions": 0,
        "conversionsByConversionDate": 0,
        "conversionsFromInteractionsRate": 0,
        "conversionsFromInteractionsValuePerInteraction": 0,
        "conversionsValue": 0,
        "conversionsValueByConversionDate": 0,
        "conversionsValuePerCost": 0,
        "costMicros": "string",
        "costPerAllConversions": 0,
        "costPerConversion": 0,
        "costPerCurrentModelAttributedConversion": 0,
        "crossDeviceConversions": 0,
        "crossDeviceConversionsValue": 0,
        "ctr": 0,
        "historicalCreativeQualityScore": "UNSPECIFIED",
        "historicalLandingPageQualityScore": "UNSPECIFIED",
        "historicalQualityScore": "string",
        "historicalSearchPredictedCtr": "UNSPECIFIED",
        "impressions": "string",
        "interactionEventTypes": [
          "UNSPECIFIED"
        ],
        "interactionRate": 0,
        "interactions": "string",
        "invalidClickRate": 0,
        "invalidClicks": "string",
        "mobileFriendlyClicksPercentage": 0,
        "searchAbsoluteTopImpressionShare": 0,
        "searchBudgetLostAbsoluteTopImpressionShare": 0,
        "searchBudgetLostImpressionShare": 0,
        "searchBudgetLostTopImpressionShare": 0,
        "searchClickShare": 0,
        "searchExactMatchImpressionShare": 0,
        "searchImpressionShare": 0,
        "searchRankLostAbsoluteTopImpressionShare": 0,
        "searchRankLostImpressionShare": 0,
        "searchRankLostTopImpressionShare": 0,
        "searchTopImpressionShare": 0,
        "topImpressionPercentage": 0,
        "valuePerAllConversions": 0,
        "valuePerAllConversionsByConversionDate": 0,
        "valuePerConversion": 0,
        "valuePerConversionsByConversionDate": 0,
        "visits": 0
      },
      "productGroupView": {
        "resourceName": "string"
      },
      "segments": {
        "conversionAction": "string",
        "conversionActionCategory": "UNSPECIFIED",
        "conversionActionName": "string",
        "date": "string",
        "dayOfWeek": "UNSPECIFIED",
        "device": "UNSPECIFIED",
        "month": "string",
        "quarter": "string",
        "week": "string",
        "year": 0
      },
      "userList": {
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "type": "UNSPECIFIED"
      },
      "webpageView": {
        "resourceName": "string"
      }
    }
  ],
  "summaryRow": {
    "adGroup": {
      "adRotationMode": "UNSPECIFIED",
      "cpcBidMicros": "string",
      "creationTime": "string",
      "endDate": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "id": "string",
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "lastModifiedTime": "string",
      "name": "string",
      "resourceName": "string",
      "startDate": "string",
      "status": "UNSPECIFIED",
      "targetingSetting": {
        "targetRestrictions": [
          {
            "bidOnly": true,
            "targetingDimension": "UNSPECIFIED"
          }
        ]
      },
      "type": "UNSPECIFIED"
    },
    "adGroupAd": {
      "ad": {
        "displayUrl": "string",
        "finalUrls": [
          "string"
        ],
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "type": "UNSPECIFIED"
      },
      "creationTime": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED"
    },
    "adGroupAdLabel": {
      "adGroupAd": "string",
      "label": "string",
      "resourceName": "string"
    },
    "adGroupAudienceView": {
      "resourceName": "string"
    },
    "adGroupBidModifier": {
      "bidModifier": 0,
      "device": {
        "type": "UNSPECIFIED"
      },
      "resourceName": "string"
    },
    "adGroupCriterion": {
      "adGroup": "string",
      "ageRange": {
        "type": "UNSPECIFIED"
      },
      "bidModifier": 0,
      "cpcBidMicros": "string",
      "creationTime": "string",
      "criterionId": "string",
      "effectiveCpcBidMicros": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "finalUrlSuffix": "string",
      "finalUrls": [
        "string"
      ],
      "gender": {
        "type": "UNSPECIFIED"
      },
      "keyword": {
        "matchType": "UNSPECIFIED",
        "text": "string"
      },
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "listingGroup": {
        "type": "UNSPECIFIED"
      },
      "location": {
        "geoTargetConstant": "string"
      },
      "negative": true,
      "qualityInfo": {
        "qualityScore": 0
      },
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "trackingUrlTemplate": "string",
      "type": "UNSPECIFIED",
      "userList": {
        "userList": "string"
      },
      "webpage": {
        "conditions": [
          {
            "argument": "string",
            "operand": "UNSPECIFIED",
            "operator": "UNSPECIFIED"
          }
        ],
        "coveragePercentage": 0,
        "criterionName": "string"
      }
    },
    "adGroupCriterionLabel": {
      "adGroupCriterion": "string",
      "label": "string",
      "resourceName": "string"
    },
    "adGroupLabel": {
      "adGroup": "string",
      "label": "string",
      "resourceName": "string"
    },
    "ageRangeView": {
      "resourceName": "string"
    },
    "biddingStrategy": {
      "campaignCount": "string",
      "currencyCode": "string",
      "effectiveCurrencyCode": "string",
      "enhancedCpc": {},
      "id": "string",
      "maximizeConversionValue": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "maximizeConversions": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "name": "string",
      "nonRemovedCampaignCount": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "targetCpa": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "targetImpressionShare": {
        "cpcBidCeilingMicros": "string",
        "location": "UNSPECIFIED",
        "locationFractionMicros": "string"
      },
      "targetOutrankShare": {
        "cpcBidCeilingMicros": "string"
      },
      "targetRoas": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "targetSpend": {
        "cpcBidCeilingMicros": "string",
        "targetSpendMicros": "string"
      },
      "type": "UNSPECIFIED"
    },
    "campaign": {
      "adServingOptimizationStatus": "UNSPECIFIED",
      "advertisingChannelSubType": "UNSPECIFIED",
      "advertisingChannelType": "UNSPECIFIED",
      "biddingStrategy": "string",
      "biddingStrategySystemStatus": "UNSPECIFIED",
      "biddingStrategyType": "UNSPECIFIED",
      "campaignBudget": "string",
      "createTime": "string",
      "creationTime": "string",
      "dynamicSearchAdsSetting": {
        "domainName": "string",
        "languageCode": "string",
        "useSuppliedUrlsOnly": true
      },
      "endDate": "string",
      "engineId": "string",
      "excludedParentAssetFieldTypes": [
        "UNSPECIFIED"
      ],
      "finalUrlSuffix": "string",
      "frequencyCaps": [
        {}
      ],
      "geoTargetTypeSetting": {
        "negativeGeoTargetType": "UNSPECIFIED",
        "positiveGeoTargetType": "UNSPECIFIED"
      },
      "id": "string",
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "manualCpa": {},
      "manualCpc": {
        "enhancedCpcEnabled": true
      },
      "manualCpm": {},
      "maximizeConversionValue": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "maximizeConversions": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "name": "string",
      "networkSettings": {
        "targetContentNetwork": true,
        "targetGoogleSearch": true,
        "targetPartnerSearchNetwork": true,
        "targetSearchNetwork": true
      },
      "optimizationGoalSetting": {
        "optimizationGoalTypes": [
          "UNSPECIFIED"
        ]
      },
      "percentCpc": {
        "cpcBidCeilingMicros": "string",
        "enhancedCpcEnabled": true
      },
      "realTimeBiddingSetting": {
        "optIn": true
      },
      "resourceName": "string",
      "selectiveOptimization": {
        "conversionActions": [
          "string"
        ]
      },
      "servingStatus": "UNSPECIFIED",
      "shoppingSetting": {
        "campaignPriority": 0,
        "enableLocal": true,
        "feedLabel": "string",
        "merchantId": "string",
        "salesCountry": "string",
        "useVehicleInventory": true
      },
      "startDate": "string",
      "status": "UNSPECIFIED",
      "targetCpa": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "targetCpm": {},
      "targetImpressionShare": {
        "cpcBidCeilingMicros": "string",
        "location": "UNSPECIFIED",
        "locationFractionMicros": "string"
      },
      "targetRoas": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "targetSpend": {
        "cpcBidCeilingMicros": "string",
        "targetSpendMicros": "string"
      },
      "trackingSetting": {
        "trackingUrl": "string"
      },
      "trackingUrlTemplate": "string",
      "urlCustomParameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "urlExpansionOptOut": true
    },
    "campaignAudienceView": {
      "resourceName": "string"
    },
    "campaignBudget": {
      "amountMicros": "string",
      "deliveryMethod": "UNSPECIFIED",
      "period": "UNSPECIFIED",
      "resourceName": "string"
    },
    "campaignCriterion": {
      "ageRange": {
        "type": "UNSPECIFIED"
      },
      "bidModifier": 0,
      "criterionId": "string",
      "device": {
        "type": "UNSPECIFIED"
      },
      "displayName": "string",
      "gender": {
        "type": "UNSPECIFIED"
      },
      "keyword": {
        "matchType": "UNSPECIFIED",
        "text": "string"
      },
      "language": {
        "languageConstant": "string"
      },
      "lastModifiedTime": "string",
      "location": {
        "geoTargetConstant": "string"
      },
      "locationGroup": {
        "feedItemSets": [
          "string"
        ],
        "geoTargetConstants": [
          "string"
        ],
        "radius": "string",
        "radiusUnits": "UNSPECIFIED"
      },
      "negative": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "type": "UNSPECIFIED",
      "userList": {
        "userList": "string"
      },
      "webpage": {
        "conditions": [
          {
            "argument": "string",
            "operand": "UNSPECIFIED",
            "operator": "UNSPECIFIED"
          }
        ],
        "coveragePercentage": 0,
        "criterionName": "string"
      }
    },
    "campaignLabel": {
      "campaign": "string",
      "label": "string",
      "resourceName": "string"
    },
    "conversionAction": {
      "appId": "string",
      "attributionModelSettings": {
        "attributionModel": "UNSPECIFIED",
        "dataDrivenModelStatus": "UNSPECIFIED"
      },
      "category": "UNSPECIFIED",
      "clickThroughLookbackWindowDays": "string",
      "creationTime": "string",
      "floodlightSettings": {
        "activityGroupTag": "string",
        "activityId": "string",
        "activityTag": "string"
      },
      "id": "string",
      "includeInClientAccountConversionsMetric": true,
      "includeInConversionsMetric": true,
      "name": "string",
      "ownerCustomer": "string",
      "primaryForGoal": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "type": "UNSPECIFIED",
      "valueSettings": {
        "alwaysUseDefaultValue": true,
        "defaultCurrencyCode": "string",
        "defaultValue": 0
      }
    },
    "customColumns": [
      {
        "booleanValue": true,
        "doubleValue": 0,
        "floatValue": 0,
        "int64Value": "string",
        "stringValue": "string"
      }
    ],
    "customer": {
      "accountStatus": "UNSPECIFIED",
      "accountType": "UNSPECIFIED",
      "autoTaggingEnabled": true,
      "conversionTrackingSetting": {
        "acceptedCustomerDataTerms": true,
        "conversionTrackingId": "string",
        "conversionTrackingStatus": "UNSPECIFIED",
        "crossAccountConversionTrackingId": "string",
        "enhancedConversionsForLeadsEnabled": true,
        "googleAdsConversionCustomer": "string",
        "googleAdsCrossAccountConversionTrackingId": "string"
      },
      "creationTime": "string",
      "currencyCode": "string",
      "descriptiveName": "string",
      "doubleClickCampaignManagerSetting": {
        "advertiserId": "string",
        "networkId": "string",
        "timeZone": "string"
      },
      "engineId": "string",
      "finalUrlSuffix": "string",
      "id": "string",
      "lastModifiedTime": "string",
      "manager": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "timeZone": "string",
      "trackingUrlTemplate": "string"
    },
    "customerClient": {
      "appliedLabels": [
        "string"
      ],
      "clientCustomer": "string",
      "currencyCode": "string",
      "descriptiveName": "string",
      "hidden": true,
      "id": "string",
      "level": "string",
      "manager": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "testAccount": true,
      "timeZone": "string"
    },
    "customerManagerLink": {
      "managerCustomer": "string",
      "managerLinkId": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED"
    },
    "dynamicSearchAdsSearchTermView": {
      "landingPage": "string",
      "resourceName": "string"
    },
    "genderView": {
      "resourceName": "string"
    },
    "keywordView": {
      "resourceName": "string"
    },
    "label": {
      "id": "string",
      "name": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "textLabel": {
        "backgroundColor": "string",
        "description": "string"
      }
    },
    "locationView": {
      "resourceName": "string"
    },
    "metrics": {
      "absoluteTopImpressionPercentage": 0,
      "allConversions": 0,
      "allConversionsByConversionDate": 0,
      "allConversionsFromClickToCall": 0,
      "allConversionsFromDirections": 0,
      "allConversionsFromInteractionsRate": 0,
      "allConversionsFromInteractionsValuePerInteraction": 0,
      "allConversionsFromMenu": 0,
      "allConversionsFromOrder": 0,
      "allConversionsFromOtherEngagement": 0,
      "allConversionsFromStoreVisit": 0,
      "allConversionsFromStoreWebsite": 0,
      "allConversionsValue": 0,
      "allConversionsValueByConversionDate": 0,
      "allConversionsValuePerCost": 0,
      "averageCost": 0,
      "averageCpc": 0,
      "averageCpm": 0,
      "clicks": "string",
      "clientAccountConversions": 0,
      "clientAccountConversionsValue": 0,
      "clientAccountViewThroughConversions": "string",
      "contentBudgetLostImpressionShare": 0,
      "contentImpressionShare": 0,
      "contentRankLostImpressionShare": 0,
      "conversions": 0,
      "conversionsByConversionDate": 0,
      "conversionsFromInteractionsRate": 0,
      "conversionsFromInteractionsValuePerInteraction": 0,
      "conversionsValue": 0,
      "conversionsValueByConversionDate": 0,
      "conversionsValuePerCost": 0,
      "costMicros": "string",
      "costPerAllConversions": 0,
      "costPerConversion": 0,
      "costPerCurrentModelAttributedConversion": 0,
      "crossDeviceConversions": 0,
      "crossDeviceConversionsValue": 0,
      "ctr": 0,
      "historicalCreativeQualityScore": "UNSPECIFIED",
      "historicalLandingPageQualityScore": "UNSPECIFIED",
      "historicalQualityScore": "string",
      "historicalSearchPredictedCtr": "UNSPECIFIED",
      "impressions": "string",
      "interactionEventTypes": [
        "UNSPECIFIED"
      ],
      "interactionRate": 0,
      "interactions": "string",
      "invalidClickRate": 0,
      "invalidClicks": "string",
      "mobileFriendlyClicksPercentage": 0,
      "searchAbsoluteTopImpressionShare": 0,
      "searchBudgetLostAbsoluteTopImpressionShare": 0,
      "searchBudgetLostImpressionShare": 0,
      "searchBudgetLostTopImpressionShare": 0,
      "searchClickShare": 0,
      "searchExactMatchImpressionShare": 0,
      "searchImpressionShare": 0,
      "searchRankLostAbsoluteTopImpressionShare": 0,
      "searchRankLostImpressionShare": 0,
      "searchRankLostTopImpressionShare": 0,
      "searchTopImpressionShare": 0,
      "topImpressionPercentage": 0,
      "valuePerAllConversions": 0,
      "valuePerAllConversionsByConversionDate": 0,
      "valuePerConversion": 0,
      "valuePerConversionsByConversionDate": 0,
      "visits": 0
    },
    "productGroupView": {
      "resourceName": "string"
    },
    "segments": {
      "conversionAction": "string",
      "conversionActionCategory": "UNSPECIFIED",
      "conversionActionName": "string",
      "date": "string",
      "dayOfWeek": "UNSPECIFIED",
      "device": "UNSPECIFIED",
      "month": "string",
      "quarter": "string",
      "week": "string",
      "year": 0
    },
    "userList": {
      "id": "string",
      "name": "string",
      "resourceName": "string",
      "type": "UNSPECIFIED"
    },
    "webpageView": {
      "resourceName": "string"
    }
  },
  "totalResultsCount": "string"
}
```

<h3 id="searchads360customerssearchads360search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAdsSearchads360V0Services__SearchSearchAds360Response](#schemagoogleadssearchads360v0services__searchsearchads360response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## searchads360.customers.searchAds360.searchStream

<a id="opIdsearchads360.customers.searchAds360.searchStream"></a>

> Code samples

```bash
curl https://www.googleapis.com/v0/customers/string/searchAds360:searchStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "batchSize": 0,
    "query": "string",
    "summaryRowSetting": "UNSPECIFIED"
  }'
```

`POST /v0/customers/{customerId}/searchAds360:searchStream`

Returns all rows that match the search stream query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

> Body parameter

```json
{
  "batchSize": 0,
  "query": "string",
  "summaryRowSetting": "UNSPECIFIED"
}
```

<h3 id="searchads360customerssearchads360searchstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Required. The ID of the customer being queried.|
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
|body|body|[GoogleAdsSearchads360V0Services__SearchSearchAds360StreamRequest](#schemagoogleadssearchads360v0services__searchsearchads360streamrequest)|false|none|
|» batchSize|body|integer(int32)|false|The number of rows that are returned in each stream response batch. When too large batch is requested, the server may decide to further limit the number of returned rows.|
|» query|body|string|false|Required. The query string.|
|» summaryRowSetting|body|string|false|Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» summaryRowSetting|UNSPECIFIED|
|» summaryRowSetting|UNKNOWN|
|» summaryRowSetting|NO_SUMMARY_ROW|
|» summaryRowSetting|SUMMARY_ROW_WITH_RESULTS|
|» summaryRowSetting|SUMMARY_ROW_ONLY|

> Example responses

> 200 Response

```json
{
  "customColumnHeaders": [
    {
      "id": "string",
      "name": "string",
      "referencesMetrics": true
    }
  ],
  "fieldMask": "string",
  "requestId": "string",
  "results": [
    {
      "adGroup": {
        "adRotationMode": "UNSPECIFIED",
        "cpcBidMicros": "string",
        "creationTime": "string",
        "endDate": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "id": "string",
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "lastModifiedTime": "string",
        "name": "string",
        "resourceName": "string",
        "startDate": "string",
        "status": "UNSPECIFIED",
        "targetingSetting": {
          "targetRestrictions": [
            {
              "bidOnly": true,
              "targetingDimension": "UNSPECIFIED"
            }
          ]
        },
        "type": "UNSPECIFIED"
      },
      "adGroupAd": {
        "ad": {
          "displayUrl": "string",
          "finalUrls": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "resourceName": "string",
          "type": "UNSPECIFIED"
        },
        "creationTime": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED"
      },
      "adGroupAdLabel": {
        "adGroupAd": "string",
        "label": "string",
        "resourceName": "string"
      },
      "adGroupAudienceView": {
        "resourceName": "string"
      },
      "adGroupBidModifier": {
        "bidModifier": 0,
        "device": {
          "type": "UNSPECIFIED"
        },
        "resourceName": "string"
      },
      "adGroupCriterion": {
        "adGroup": "string",
        "ageRange": {
          "type": "UNSPECIFIED"
        },
        "bidModifier": 0,
        "cpcBidMicros": "string",
        "creationTime": "string",
        "criterionId": "string",
        "effectiveCpcBidMicros": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "finalUrlSuffix": "string",
        "finalUrls": [
          "string"
        ],
        "gender": {
          "type": "UNSPECIFIED"
        },
        "keyword": {
          "matchType": "UNSPECIFIED",
          "text": "string"
        },
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "listingGroup": {
          "type": "UNSPECIFIED"
        },
        "location": {
          "geoTargetConstant": "string"
        },
        "negative": true,
        "qualityInfo": {
          "qualityScore": 0
        },
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "trackingUrlTemplate": "string",
        "type": "UNSPECIFIED",
        "userList": {
          "userList": "string"
        },
        "webpage": {
          "conditions": [
            {
              "argument": "string",
              "operand": "UNSPECIFIED",
              "operator": "UNSPECIFIED"
            }
          ],
          "coveragePercentage": 0,
          "criterionName": "string"
        }
      },
      "adGroupCriterionLabel": {
        "adGroupCriterion": "string",
        "label": "string",
        "resourceName": "string"
      },
      "adGroupLabel": {
        "adGroup": "string",
        "label": "string",
        "resourceName": "string"
      },
      "ageRangeView": {
        "resourceName": "string"
      },
      "biddingStrategy": {
        "campaignCount": "string",
        "currencyCode": "string",
        "effectiveCurrencyCode": "string",
        "enhancedCpc": {},
        "id": "string",
        "maximizeConversionValue": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "maximizeConversions": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "name": "string",
        "nonRemovedCampaignCount": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "targetCpa": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "targetImpressionShare": {
          "cpcBidCeilingMicros": "string",
          "location": "UNSPECIFIED",
          "locationFractionMicros": "string"
        },
        "targetOutrankShare": {
          "cpcBidCeilingMicros": "string"
        },
        "targetRoas": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "targetSpend": {
          "cpcBidCeilingMicros": "string",
          "targetSpendMicros": "string"
        },
        "type": "UNSPECIFIED"
      },
      "campaign": {
        "adServingOptimizationStatus": "UNSPECIFIED",
        "advertisingChannelSubType": "UNSPECIFIED",
        "advertisingChannelType": "UNSPECIFIED",
        "biddingStrategy": "string",
        "biddingStrategySystemStatus": "UNSPECIFIED",
        "biddingStrategyType": "UNSPECIFIED",
        "campaignBudget": "string",
        "createTime": "string",
        "creationTime": "string",
        "dynamicSearchAdsSetting": {
          "domainName": "string",
          "languageCode": "string",
          "useSuppliedUrlsOnly": true
        },
        "endDate": "string",
        "engineId": "string",
        "excludedParentAssetFieldTypes": [
          "UNSPECIFIED"
        ],
        "finalUrlSuffix": "string",
        "frequencyCaps": [
          {}
        ],
        "geoTargetTypeSetting": {
          "negativeGeoTargetType": "UNSPECIFIED",
          "positiveGeoTargetType": "UNSPECIFIED"
        },
        "id": "string",
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "manualCpa": {},
        "manualCpc": {
          "enhancedCpcEnabled": true
        },
        "manualCpm": {},
        "maximizeConversionValue": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "maximizeConversions": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "name": "string",
        "networkSettings": {
          "targetContentNetwork": true,
          "targetGoogleSearch": true,
          "targetPartnerSearchNetwork": true,
          "targetSearchNetwork": true
        },
        "optimizationGoalSetting": {
          "optimizationGoalTypes": [
            "UNSPECIFIED"
          ]
        },
        "percentCpc": {
          "cpcBidCeilingMicros": "string",
          "enhancedCpcEnabled": true
        },
        "realTimeBiddingSetting": {
          "optIn": true
        },
        "resourceName": "string",
        "selectiveOptimization": {
          "conversionActions": [
            "string"
          ]
        },
        "servingStatus": "UNSPECIFIED",
        "shoppingSetting": {
          "campaignPriority": 0,
          "enableLocal": true,
          "feedLabel": "string",
          "merchantId": "string",
          "salesCountry": "string",
          "useVehicleInventory": true
        },
        "startDate": "string",
        "status": "UNSPECIFIED",
        "targetCpa": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "targetCpm": {},
        "targetImpressionShare": {
          "cpcBidCeilingMicros": "string",
          "location": "UNSPECIFIED",
          "locationFractionMicros": "string"
        },
        "targetRoas": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "targetSpend": {
          "cpcBidCeilingMicros": "string",
          "targetSpendMicros": "string"
        },
        "trackingSetting": {
          "trackingUrl": "string"
        },
        "trackingUrlTemplate": "string",
        "urlCustomParameters": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "urlExpansionOptOut": true
      },
      "campaignAudienceView": {
        "resourceName": "string"
      },
      "campaignBudget": {
        "amountMicros": "string",
        "deliveryMethod": "UNSPECIFIED",
        "period": "UNSPECIFIED",
        "resourceName": "string"
      },
      "campaignCriterion": {
        "ageRange": {
          "type": "UNSPECIFIED"
        },
        "bidModifier": 0,
        "criterionId": "string",
        "device": {
          "type": "UNSPECIFIED"
        },
        "displayName": "string",
        "gender": {
          "type": "UNSPECIFIED"
        },
        "keyword": {
          "matchType": "UNSPECIFIED",
          "text": "string"
        },
        "language": {
          "languageConstant": "string"
        },
        "lastModifiedTime": "string",
        "location": {
          "geoTargetConstant": "string"
        },
        "locationGroup": {
          "feedItemSets": [
            "string"
          ],
          "geoTargetConstants": [
            "string"
          ],
          "radius": "string",
          "radiusUnits": "UNSPECIFIED"
        },
        "negative": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "type": "UNSPECIFIED",
        "userList": {
          "userList": "string"
        },
        "webpage": {
          "conditions": [
            {
              "argument": "string",
              "operand": "UNSPECIFIED",
              "operator": "UNSPECIFIED"
            }
          ],
          "coveragePercentage": 0,
          "criterionName": "string"
        }
      },
      "campaignLabel": {
        "campaign": "string",
        "label": "string",
        "resourceName": "string"
      },
      "conversionAction": {
        "appId": "string",
        "attributionModelSettings": {
          "attributionModel": "UNSPECIFIED",
          "dataDrivenModelStatus": "UNSPECIFIED"
        },
        "category": "UNSPECIFIED",
        "clickThroughLookbackWindowDays": "string",
        "creationTime": "string",
        "floodlightSettings": {
          "activityGroupTag": "string",
          "activityId": "string",
          "activityTag": "string"
        },
        "id": "string",
        "includeInClientAccountConversionsMetric": true,
        "includeInConversionsMetric": true,
        "name": "string",
        "ownerCustomer": "string",
        "primaryForGoal": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "type": "UNSPECIFIED",
        "valueSettings": {
          "alwaysUseDefaultValue": true,
          "defaultCurrencyCode": "string",
          "defaultValue": 0
        }
      },
      "customColumns": [
        {
          "booleanValue": true,
          "doubleValue": 0,
          "floatValue": 0,
          "int64Value": "string",
          "stringValue": "string"
        }
      ],
      "customer": {
        "accountStatus": "UNSPECIFIED",
        "accountType": "UNSPECIFIED",
        "autoTaggingEnabled": true,
        "conversionTrackingSetting": {
          "acceptedCustomerDataTerms": true,
          "conversionTrackingId": "string",
          "conversionTrackingStatus": "UNSPECIFIED",
          "crossAccountConversionTrackingId": "string",
          "enhancedConversionsForLeadsEnabled": true,
          "googleAdsConversionCustomer": "string",
          "googleAdsCrossAccountConversionTrackingId": "string"
        },
        "creationTime": "string",
        "currencyCode": "string",
        "descriptiveName": "string",
        "doubleClickCampaignManagerSetting": {
          "advertiserId": "string",
          "networkId": "string",
          "timeZone": "string"
        },
        "engineId": "string",
        "finalUrlSuffix": "string",
        "id": "string",
        "lastModifiedTime": "string",
        "manager": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "timeZone": "string",
        "trackingUrlTemplate": "string"
      },
      "customerClient": {
        "appliedLabels": [
          "string"
        ],
        "clientCustomer": "string",
        "currencyCode": "string",
        "descriptiveName": "string",
        "hidden": true,
        "id": "string",
        "level": "string",
        "manager": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "testAccount": true,
        "timeZone": "string"
      },
      "customerManagerLink": {
        "managerCustomer": "string",
        "managerLinkId": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED"
      },
      "dynamicSearchAdsSearchTermView": {
        "landingPage": "string",
        "resourceName": "string"
      },
      "genderView": {
        "resourceName": "string"
      },
      "keywordView": {
        "resourceName": "string"
      },
      "label": {
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "textLabel": {
          "backgroundColor": "string",
          "description": "string"
        }
      },
      "locationView": {
        "resourceName": "string"
      },
      "metrics": {
        "absoluteTopImpressionPercentage": 0,
        "allConversions": 0,
        "allConversionsByConversionDate": 0,
        "allConversionsFromClickToCall": 0,
        "allConversionsFromDirections": 0,
        "allConversionsFromInteractionsRate": 0,
        "allConversionsFromInteractionsValuePerInteraction": 0,
        "allConversionsFromMenu": 0,
        "allConversionsFromOrder": 0,
        "allConversionsFromOtherEngagement": 0,
        "allConversionsFromStoreVisit": 0,
        "allConversionsFromStoreWebsite": 0,
        "allConversionsValue": 0,
        "allConversionsValueByConversionDate": 0,
        "allConversionsValuePerCost": 0,
        "averageCost": 0,
        "averageCpc": 0,
        "averageCpm": 0,
        "clicks": "string",
        "clientAccountConversions": 0,
        "clientAccountConversionsValue": 0,
        "clientAccountViewThroughConversions": "string",
        "contentBudgetLostImpressionShare": 0,
        "contentImpressionShare": 0,
        "contentRankLostImpressionShare": 0,
        "conversions": 0,
        "conversionsByConversionDate": 0,
        "conversionsFromInteractionsRate": 0,
        "conversionsFromInteractionsValuePerInteraction": 0,
        "conversionsValue": 0,
        "conversionsValueByConversionDate": 0,
        "conversionsValuePerCost": 0,
        "costMicros": "string",
        "costPerAllConversions": 0,
        "costPerConversion": 0,
        "costPerCurrentModelAttributedConversion": 0,
        "crossDeviceConversions": 0,
        "crossDeviceConversionsValue": 0,
        "ctr": 0,
        "historicalCreativeQualityScore": "UNSPECIFIED",
        "historicalLandingPageQualityScore": "UNSPECIFIED",
        "historicalQualityScore": "string",
        "historicalSearchPredictedCtr": "UNSPECIFIED",
        "impressions": "string",
        "interactionEventTypes": [
          "UNSPECIFIED"
        ],
        "interactionRate": 0,
        "interactions": "string",
        "invalidClickRate": 0,
        "invalidClicks": "string",
        "mobileFriendlyClicksPercentage": 0,
        "searchAbsoluteTopImpressionShare": 0,
        "searchBudgetLostAbsoluteTopImpressionShare": 0,
        "searchBudgetLostImpressionShare": 0,
        "searchBudgetLostTopImpressionShare": 0,
        "searchClickShare": 0,
        "searchExactMatchImpressionShare": 0,
        "searchImpressionShare": 0,
        "searchRankLostAbsoluteTopImpressionShare": 0,
        "searchRankLostImpressionShare": 0,
        "searchRankLostTopImpressionShare": 0,
        "searchTopImpressionShare": 0,
        "topImpressionPercentage": 0,
        "valuePerAllConversions": 0,
        "valuePerAllConversionsByConversionDate": 0,
        "valuePerConversion": 0,
        "valuePerConversionsByConversionDate": 0,
        "visits": 0
      },
      "productGroupView": {
        "resourceName": "string"
      },
      "segments": {
        "conversionAction": "string",
        "conversionActionCategory": "UNSPECIFIED",
        "conversionActionName": "string",
        "date": "string",
        "dayOfWeek": "UNSPECIFIED",
        "device": "UNSPECIFIED",
        "month": "string",
        "quarter": "string",
        "week": "string",
        "year": 0
      },
      "userList": {
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "type": "UNSPECIFIED"
      },
      "webpageView": {
        "resourceName": "string"
      }
    }
  ],
  "summaryRow": {
    "adGroup": {
      "adRotationMode": "UNSPECIFIED",
      "cpcBidMicros": "string",
      "creationTime": "string",
      "endDate": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "id": "string",
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "lastModifiedTime": "string",
      "name": "string",
      "resourceName": "string",
      "startDate": "string",
      "status": "UNSPECIFIED",
      "targetingSetting": {
        "targetRestrictions": [
          {
            "bidOnly": true,
            "targetingDimension": "UNSPECIFIED"
          }
        ]
      },
      "type": "UNSPECIFIED"
    },
    "adGroupAd": {
      "ad": {
        "displayUrl": "string",
        "finalUrls": [
          "string"
        ],
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "type": "UNSPECIFIED"
      },
      "creationTime": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED"
    },
    "adGroupAdLabel": {
      "adGroupAd": "string",
      "label": "string",
      "resourceName": "string"
    },
    "adGroupAudienceView": {
      "resourceName": "string"
    },
    "adGroupBidModifier": {
      "bidModifier": 0,
      "device": {
        "type": "UNSPECIFIED"
      },
      "resourceName": "string"
    },
    "adGroupCriterion": {
      "adGroup": "string",
      "ageRange": {
        "type": "UNSPECIFIED"
      },
      "bidModifier": 0,
      "cpcBidMicros": "string",
      "creationTime": "string",
      "criterionId": "string",
      "effectiveCpcBidMicros": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "finalUrlSuffix": "string",
      "finalUrls": [
        "string"
      ],
      "gender": {
        "type": "UNSPECIFIED"
      },
      "keyword": {
        "matchType": "UNSPECIFIED",
        "text": "string"
      },
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "listingGroup": {
        "type": "UNSPECIFIED"
      },
      "location": {
        "geoTargetConstant": "string"
      },
      "negative": true,
      "qualityInfo": {
        "qualityScore": 0
      },
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "trackingUrlTemplate": "string",
      "type": "UNSPECIFIED",
      "userList": {
        "userList": "string"
      },
      "webpage": {
        "conditions": [
          {
            "argument": "string",
            "operand": "UNSPECIFIED",
            "operator": "UNSPECIFIED"
          }
        ],
        "coveragePercentage": 0,
        "criterionName": "string"
      }
    },
    "adGroupCriterionLabel": {
      "adGroupCriterion": "string",
      "label": "string",
      "resourceName": "string"
    },
    "adGroupLabel": {
      "adGroup": "string",
      "label": "string",
      "resourceName": "string"
    },
    "ageRangeView": {
      "resourceName": "string"
    },
    "biddingStrategy": {
      "campaignCount": "string",
      "currencyCode": "string",
      "effectiveCurrencyCode": "string",
      "enhancedCpc": {},
      "id": "string",
      "maximizeConversionValue": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "maximizeConversions": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "name": "string",
      "nonRemovedCampaignCount": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "targetCpa": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "targetImpressionShare": {
        "cpcBidCeilingMicros": "string",
        "location": "UNSPECIFIED",
        "locationFractionMicros": "string"
      },
      "targetOutrankShare": {
        "cpcBidCeilingMicros": "string"
      },
      "targetRoas": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "targetSpend": {
        "cpcBidCeilingMicros": "string",
        "targetSpendMicros": "string"
      },
      "type": "UNSPECIFIED"
    },
    "campaign": {
      "adServingOptimizationStatus": "UNSPECIFIED",
      "advertisingChannelSubType": "UNSPECIFIED",
      "advertisingChannelType": "UNSPECIFIED",
      "biddingStrategy": "string",
      "biddingStrategySystemStatus": "UNSPECIFIED",
      "biddingStrategyType": "UNSPECIFIED",
      "campaignBudget": "string",
      "createTime": "string",
      "creationTime": "string",
      "dynamicSearchAdsSetting": {
        "domainName": "string",
        "languageCode": "string",
        "useSuppliedUrlsOnly": true
      },
      "endDate": "string",
      "engineId": "string",
      "excludedParentAssetFieldTypes": [
        "UNSPECIFIED"
      ],
      "finalUrlSuffix": "string",
      "frequencyCaps": [
        {}
      ],
      "geoTargetTypeSetting": {
        "negativeGeoTargetType": "UNSPECIFIED",
        "positiveGeoTargetType": "UNSPECIFIED"
      },
      "id": "string",
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "manualCpa": {},
      "manualCpc": {
        "enhancedCpcEnabled": true
      },
      "manualCpm": {},
      "maximizeConversionValue": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "maximizeConversions": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "name": "string",
      "networkSettings": {
        "targetContentNetwork": true,
        "targetGoogleSearch": true,
        "targetPartnerSearchNetwork": true,
        "targetSearchNetwork": true
      },
      "optimizationGoalSetting": {
        "optimizationGoalTypes": [
          "UNSPECIFIED"
        ]
      },
      "percentCpc": {
        "cpcBidCeilingMicros": "string",
        "enhancedCpcEnabled": true
      },
      "realTimeBiddingSetting": {
        "optIn": true
      },
      "resourceName": "string",
      "selectiveOptimization": {
        "conversionActions": [
          "string"
        ]
      },
      "servingStatus": "UNSPECIFIED",
      "shoppingSetting": {
        "campaignPriority": 0,
        "enableLocal": true,
        "feedLabel": "string",
        "merchantId": "string",
        "salesCountry": "string",
        "useVehicleInventory": true
      },
      "startDate": "string",
      "status": "UNSPECIFIED",
      "targetCpa": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "targetCpm": {},
      "targetImpressionShare": {
        "cpcBidCeilingMicros": "string",
        "location": "UNSPECIFIED",
        "locationFractionMicros": "string"
      },
      "targetRoas": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "targetSpend": {
        "cpcBidCeilingMicros": "string",
        "targetSpendMicros": "string"
      },
      "trackingSetting": {
        "trackingUrl": "string"
      },
      "trackingUrlTemplate": "string",
      "urlCustomParameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "urlExpansionOptOut": true
    },
    "campaignAudienceView": {
      "resourceName": "string"
    },
    "campaignBudget": {
      "amountMicros": "string",
      "deliveryMethod": "UNSPECIFIED",
      "period": "UNSPECIFIED",
      "resourceName": "string"
    },
    "campaignCriterion": {
      "ageRange": {
        "type": "UNSPECIFIED"
      },
      "bidModifier": 0,
      "criterionId": "string",
      "device": {
        "type": "UNSPECIFIED"
      },
      "displayName": "string",
      "gender": {
        "type": "UNSPECIFIED"
      },
      "keyword": {
        "matchType": "UNSPECIFIED",
        "text": "string"
      },
      "language": {
        "languageConstant": "string"
      },
      "lastModifiedTime": "string",
      "location": {
        "geoTargetConstant": "string"
      },
      "locationGroup": {
        "feedItemSets": [
          "string"
        ],
        "geoTargetConstants": [
          "string"
        ],
        "radius": "string",
        "radiusUnits": "UNSPECIFIED"
      },
      "negative": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "type": "UNSPECIFIED",
      "userList": {
        "userList": "string"
      },
      "webpage": {
        "conditions": [
          {
            "argument": "string",
            "operand": "UNSPECIFIED",
            "operator": "UNSPECIFIED"
          }
        ],
        "coveragePercentage": 0,
        "criterionName": "string"
      }
    },
    "campaignLabel": {
      "campaign": "string",
      "label": "string",
      "resourceName": "string"
    },
    "conversionAction": {
      "appId": "string",
      "attributionModelSettings": {
        "attributionModel": "UNSPECIFIED",
        "dataDrivenModelStatus": "UNSPECIFIED"
      },
      "category": "UNSPECIFIED",
      "clickThroughLookbackWindowDays": "string",
      "creationTime": "string",
      "floodlightSettings": {
        "activityGroupTag": "string",
        "activityId": "string",
        "activityTag": "string"
      },
      "id": "string",
      "includeInClientAccountConversionsMetric": true,
      "includeInConversionsMetric": true,
      "name": "string",
      "ownerCustomer": "string",
      "primaryForGoal": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "type": "UNSPECIFIED",
      "valueSettings": {
        "alwaysUseDefaultValue": true,
        "defaultCurrencyCode": "string",
        "defaultValue": 0
      }
    },
    "customColumns": [
      {
        "booleanValue": true,
        "doubleValue": 0,
        "floatValue": 0,
        "int64Value": "string",
        "stringValue": "string"
      }
    ],
    "customer": {
      "accountStatus": "UNSPECIFIED",
      "accountType": "UNSPECIFIED",
      "autoTaggingEnabled": true,
      "conversionTrackingSetting": {
        "acceptedCustomerDataTerms": true,
        "conversionTrackingId": "string",
        "conversionTrackingStatus": "UNSPECIFIED",
        "crossAccountConversionTrackingId": "string",
        "enhancedConversionsForLeadsEnabled": true,
        "googleAdsConversionCustomer": "string",
        "googleAdsCrossAccountConversionTrackingId": "string"
      },
      "creationTime": "string",
      "currencyCode": "string",
      "descriptiveName": "string",
      "doubleClickCampaignManagerSetting": {
        "advertiserId": "string",
        "networkId": "string",
        "timeZone": "string"
      },
      "engineId": "string",
      "finalUrlSuffix": "string",
      "id": "string",
      "lastModifiedTime": "string",
      "manager": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "timeZone": "string",
      "trackingUrlTemplate": "string"
    },
    "customerClient": {
      "appliedLabels": [
        "string"
      ],
      "clientCustomer": "string",
      "currencyCode": "string",
      "descriptiveName": "string",
      "hidden": true,
      "id": "string",
      "level": "string",
      "manager": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "testAccount": true,
      "timeZone": "string"
    },
    "customerManagerLink": {
      "managerCustomer": "string",
      "managerLinkId": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED"
    },
    "dynamicSearchAdsSearchTermView": {
      "landingPage": "string",
      "resourceName": "string"
    },
    "genderView": {
      "resourceName": "string"
    },
    "keywordView": {
      "resourceName": "string"
    },
    "label": {
      "id": "string",
      "name": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "textLabel": {
        "backgroundColor": "string",
        "description": "string"
      }
    },
    "locationView": {
      "resourceName": "string"
    },
    "metrics": {
      "absoluteTopImpressionPercentage": 0,
      "allConversions": 0,
      "allConversionsByConversionDate": 0,
      "allConversionsFromClickToCall": 0,
      "allConversionsFromDirections": 0,
      "allConversionsFromInteractionsRate": 0,
      "allConversionsFromInteractionsValuePerInteraction": 0,
      "allConversionsFromMenu": 0,
      "allConversionsFromOrder": 0,
      "allConversionsFromOtherEngagement": 0,
      "allConversionsFromStoreVisit": 0,
      "allConversionsFromStoreWebsite": 0,
      "allConversionsValue": 0,
      "allConversionsValueByConversionDate": 0,
      "allConversionsValuePerCost": 0,
      "averageCost": 0,
      "averageCpc": 0,
      "averageCpm": 0,
      "clicks": "string",
      "clientAccountConversions": 0,
      "clientAccountConversionsValue": 0,
      "clientAccountViewThroughConversions": "string",
      "contentBudgetLostImpressionShare": 0,
      "contentImpressionShare": 0,
      "contentRankLostImpressionShare": 0,
      "conversions": 0,
      "conversionsByConversionDate": 0,
      "conversionsFromInteractionsRate": 0,
      "conversionsFromInteractionsValuePerInteraction": 0,
      "conversionsValue": 0,
      "conversionsValueByConversionDate": 0,
      "conversionsValuePerCost": 0,
      "costMicros": "string",
      "costPerAllConversions": 0,
      "costPerConversion": 0,
      "costPerCurrentModelAttributedConversion": 0,
      "crossDeviceConversions": 0,
      "crossDeviceConversionsValue": 0,
      "ctr": 0,
      "historicalCreativeQualityScore": "UNSPECIFIED",
      "historicalLandingPageQualityScore": "UNSPECIFIED",
      "historicalQualityScore": "string",
      "historicalSearchPredictedCtr": "UNSPECIFIED",
      "impressions": "string",
      "interactionEventTypes": [
        "UNSPECIFIED"
      ],
      "interactionRate": 0,
      "interactions": "string",
      "invalidClickRate": 0,
      "invalidClicks": "string",
      "mobileFriendlyClicksPercentage": 0,
      "searchAbsoluteTopImpressionShare": 0,
      "searchBudgetLostAbsoluteTopImpressionShare": 0,
      "searchBudgetLostImpressionShare": 0,
      "searchBudgetLostTopImpressionShare": 0,
      "searchClickShare": 0,
      "searchExactMatchImpressionShare": 0,
      "searchImpressionShare": 0,
      "searchRankLostAbsoluteTopImpressionShare": 0,
      "searchRankLostImpressionShare": 0,
      "searchRankLostTopImpressionShare": 0,
      "searchTopImpressionShare": 0,
      "topImpressionPercentage": 0,
      "valuePerAllConversions": 0,
      "valuePerAllConversionsByConversionDate": 0,
      "valuePerConversion": 0,
      "valuePerConversionsByConversionDate": 0,
      "visits": 0
    },
    "productGroupView": {
      "resourceName": "string"
    },
    "segments": {
      "conversionAction": "string",
      "conversionActionCategory": "UNSPECIFIED",
      "conversionActionName": "string",
      "date": "string",
      "dayOfWeek": "UNSPECIFIED",
      "device": "UNSPECIFIED",
      "month": "string",
      "quarter": "string",
      "week": "string",
      "year": 0
    },
    "userList": {
      "id": "string",
      "name": "string",
      "resourceName": "string",
      "type": "UNSPECIFIED"
    },
    "webpageView": {
      "resourceName": "string"
    }
  }
}
```

<h3 id="searchads360customerssearchads360searchstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAdsSearchads360V0Services__SearchSearchAds360StreamResponse](#schemagoogleadssearchads360v0services__searchsearchads360streamresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

<h1 id="search-ads-360-reporting-api-searchads360fields">searchAds360Fields</h1>

## searchads360.searchAds360Fields.search

<a id="opIdsearchads360.searchAds360Fields.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v0/searchAds360Fields:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pageSize": 0,
    "pageToken": "string",
    "query": "string"
  }'
```

`POST /v0/searchAds360Fields:search`

Returns all fields that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

> Body parameter

```json
{
  "pageSize": 0,
  "pageToken": "string",
  "query": "string"
}
```

<h3 id="searchads360searchads360fieldssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest](#schemagoogleadssearchads360v0services__searchsearchads360fieldsrequest)|false|none|
|» pageSize|body|integer(int32)|false|Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.|
|» pageToken|body|string|false|Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.|
|» query|body|string|false|Required. The query string.|

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
  "results": [
    {
      "attributeResources": [
        "string"
      ],
      "category": "UNSPECIFIED",
      "dataType": "UNSPECIFIED",
      "enumValues": [
        "string"
      ],
      "filterable": true,
      "isRepeated": true,
      "metrics": [
        "string"
      ],
      "name": "string",
      "resourceName": "string",
      "segments": [
        "string"
      ],
      "selectable": true,
      "selectableWith": [
        "string"
      ],
      "sortable": true,
      "typeUrl": "string"
    }
  ],
  "totalResultsCount": "string"
}
```

<h3 id="searchads360searchads360fieldssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse](#schemagoogleadssearchads360v0services__searchsearchads360fieldsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## searchads360.searchAds360Fields.get

<a id="opIdsearchads360.searchAds360Fields.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v0/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v0/{resourceName}`

Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

<h3 id="searchads360searchads360fieldsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceName|path|string|true|Required. The resource name of the field to get.|
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
  "attributeResources": [
    "string"
  ],
  "category": "UNSPECIFIED",
  "dataType": "UNSPECIFIED",
  "enumValues": [
    "string"
  ],
  "filterable": true,
  "isRepeated": true,
  "metrics": [
    "string"
  ],
  "name": "string",
  "resourceName": "string",
  "segments": [
    "string"
  ],
  "selectable": true,
  "selectableWith": [
    "string"
  ],
  "sortable": true,
  "typeUrl": "string"
}
```

<h3 id="searchads360searchads360fieldsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAdsSearchads360V0Resources__SearchAds360Field](#schemagoogleadssearchads360v0resources__searchads360field)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

# Schemas

<h2 id="tocS_GoogleAdsSearchads360V0Common__AgeRangeInfo">GoogleAdsSearchads360V0Common__AgeRangeInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__agerangeinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__AgeRangeInfo"></a>
<a id="tocSgoogleadssearchads360v0common__agerangeinfo"></a>
<a id="tocsgoogleadssearchads360v0common__agerangeinfo"></a>

```json
{
  "type": "UNSPECIFIED"
}
```

An age range criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of the age range.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|AGE_RANGE_18_24|
|type|AGE_RANGE_25_34|
|type|AGE_RANGE_35_44|
|type|AGE_RANGE_45_54|
|type|AGE_RANGE_55_64|
|type|AGE_RANGE_65_UP|
|type|AGE_RANGE_UNDETERMINED|

<h2 id="tocS_GoogleAdsSearchads360V0Common__CustomParameter">GoogleAdsSearchads360V0Common__CustomParameter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__customparameter"></a>
<a id="schema_GoogleAdsSearchads360V0Common__CustomParameter"></a>
<a id="tocSgoogleadssearchads360v0common__customparameter"></a>
<a id="tocsgoogleadssearchads360v0common__customparameter"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key matching the parameter tag name.|
|value|string|false|none|The value to be substituted.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__DeviceInfo">GoogleAdsSearchads360V0Common__DeviceInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__deviceinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__DeviceInfo"></a>
<a id="tocSgoogleadssearchads360v0common__deviceinfo"></a>
<a id="tocsgoogleadssearchads360v0common__deviceinfo"></a>

```json
{
  "type": "UNSPECIFIED"
}
```

A device criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of the device.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|MOBILE|
|type|TABLET|
|type|DESKTOP|
|type|CONNECTED_TV|
|type|OTHER|

<h2 id="tocS_GoogleAdsSearchads360V0Common__EnhancedCpc">GoogleAdsSearchads360V0Common__EnhancedCpc</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__enhancedcpc"></a>
<a id="schema_GoogleAdsSearchads360V0Common__EnhancedCpc"></a>
<a id="tocSgoogleadssearchads360v0common__enhancedcpc"></a>
<a id="tocsgoogleadssearchads360v0common__enhancedcpc"></a>

```json
{}
```

An automated bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely. This bidding strategy is deprecated and cannot be created anymore. Use ManualCpc with enhanced_cpc_enabled set to true for equivalent functionality.

<h2 id="tocS_GoogleAdsSearchads360V0Common__FrequencyCapEntry">GoogleAdsSearchads360V0Common__FrequencyCapEntry</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__frequencycapentry"></a>
<a id="schema_GoogleAdsSearchads360V0Common__FrequencyCapEntry"></a>
<a id="tocSgoogleadssearchads360v0common__frequencycapentry"></a>
<a id="tocsgoogleadssearchads360v0common__frequencycapentry"></a>

```json
{}
```

A rule specifying the maximum number of times an ad (or some set of ads) can be shown to a user over a particular time period.

<h2 id="tocS_GoogleAdsSearchads360V0Common__GenderInfo">GoogleAdsSearchads360V0Common__GenderInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__genderinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__GenderInfo"></a>
<a id="tocSgoogleadssearchads360v0common__genderinfo"></a>
<a id="tocsgoogleadssearchads360v0common__genderinfo"></a>

```json
{
  "type": "UNSPECIFIED"
}
```

A gender criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of the gender.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|MALE|
|type|FEMALE|
|type|UNDETERMINED|

<h2 id="tocS_GoogleAdsSearchads360V0Common__KeywordInfo">GoogleAdsSearchads360V0Common__KeywordInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__keywordinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__KeywordInfo"></a>
<a id="tocSgoogleadssearchads360v0common__keywordinfo"></a>
<a id="tocsgoogleadssearchads360v0common__keywordinfo"></a>

```json
{
  "matchType": "UNSPECIFIED",
  "text": "string"
}
```

A keyword criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchType|string|false|none|The match type of the keyword.|
|text|string|false|none|The text of the keyword (at most 80 characters and 10 words).|

#### Enumerated Values

|Property|Value|
|---|---|
|matchType|UNSPECIFIED|
|matchType|UNKNOWN|
|matchType|EXACT|
|matchType|PHRASE|
|matchType|BROAD|

<h2 id="tocS_GoogleAdsSearchads360V0Common__LanguageInfo">GoogleAdsSearchads360V0Common__LanguageInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__languageinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__LanguageInfo"></a>
<a id="tocSgoogleadssearchads360v0common__languageinfo"></a>
<a id="tocsgoogleadssearchads360v0common__languageinfo"></a>

```json
{
  "languageConstant": "string"
}
```

A language criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageConstant|string|false|none|The language constant resource name.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__ListingGroupInfo">GoogleAdsSearchads360V0Common__ListingGroupInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__listinggroupinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__ListingGroupInfo"></a>
<a id="tocSgoogleadssearchads360v0common__listinggroupinfo"></a>
<a id="tocsgoogleadssearchads360v0common__listinggroupinfo"></a>

```json
{
  "type": "UNSPECIFIED"
}
```

A listing group criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of the listing group.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|SUBDIVISION|
|type|UNIT|

<h2 id="tocS_GoogleAdsSearchads360V0Common__LocationGroupInfo">GoogleAdsSearchads360V0Common__LocationGroupInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__locationgroupinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__LocationGroupInfo"></a>
<a id="tocSgoogleadssearchads360v0common__locationgroupinfo"></a>
<a id="tocsgoogleadssearchads360v0common__locationgroupinfo"></a>

```json
{
  "feedItemSets": [
    "string"
  ],
  "geoTargetConstants": [
    "string"
  ],
  "radius": "string",
  "radiusUnits": "UNSPECIFIED"
}
```

A radius around a list of locations specified through a feed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedItemSets|[string]|false|none|FeedItemSets whose FeedItems are targeted. If multiple IDs are specified, then all items that appear in at least one set are targeted. This field cannot be used with geo_target_constants. This is optional and can only be set in CREATE operations.|
|geoTargetConstants|[string]|false|none|Geo target constant(s) restricting the scope of the geographic area within the feed. Currently only one geo target constant is allowed.|
|radius|string(int64)|false|none|Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations.|
|radiusUnits|string|false|none|Unit of the radius. Miles and meters are supported for geo target constants. Milli miles and meters are supported for feed item sets. This is required and must be set in CREATE operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|radiusUnits|UNSPECIFIED|
|radiusUnits|UNKNOWN|
|radiusUnits|METERS|
|radiusUnits|MILES|
|radiusUnits|MILLI_MILES|

<h2 id="tocS_GoogleAdsSearchads360V0Common__LocationInfo">GoogleAdsSearchads360V0Common__LocationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__locationinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__LocationInfo"></a>
<a id="tocSgoogleadssearchads360v0common__locationinfo"></a>
<a id="tocsgoogleadssearchads360v0common__locationinfo"></a>

```json
{
  "geoTargetConstant": "string"
}
```

A location criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geoTargetConstant|string|false|none|The geo target constant resource name.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__ManualCpa">GoogleAdsSearchads360V0Common__ManualCpa</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__manualcpa"></a>
<a id="schema_GoogleAdsSearchads360V0Common__ManualCpa"></a>
<a id="tocSgoogleadssearchads360v0common__manualcpa"></a>
<a id="tocsgoogleadssearchads360v0common__manualcpa"></a>

```json
{}
```

Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action.

<h2 id="tocS_GoogleAdsSearchads360V0Common__ManualCpc">GoogleAdsSearchads360V0Common__ManualCpc</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__manualcpc"></a>
<a id="schema_GoogleAdsSearchads360V0Common__ManualCpc"></a>
<a id="tocSgoogleadssearchads360v0common__manualcpc"></a>
<a id="tocsgoogleadssearchads360v0common__manualcpc"></a>

```json
{
  "enhancedCpcEnabled": true
}
```

Manual click-based bidding where user pays per click.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enhancedCpcEnabled|boolean|false|none|Whether bids are to be enhanced based on conversion optimizer data.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__ManualCpm">GoogleAdsSearchads360V0Common__ManualCpm</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__manualcpm"></a>
<a id="schema_GoogleAdsSearchads360V0Common__ManualCpm"></a>
<a id="tocSgoogleadssearchads360v0common__manualcpm"></a>
<a id="tocsgoogleadssearchads360v0common__manualcpm"></a>

```json
{}
```

Manual impression-based bidding where user pays per thousand impressions.

<h2 id="tocS_GoogleAdsSearchads360V0Common__MaximizeConversionValue">GoogleAdsSearchads360V0Common__MaximizeConversionValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__maximizeconversionvalue"></a>
<a id="schema_GoogleAdsSearchads360V0Common__MaximizeConversionValue"></a>
<a id="tocSgoogleadssearchads360v0common__maximizeconversionvalue"></a>
<a id="tocsgoogleadssearchads360v0common__maximizeconversionvalue"></a>

```json
{
  "cpcBidCeilingMicros": "string",
  "cpcBidFloorMicros": "string",
  "targetRoas": 0
}
```

An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpcBidCeilingMicros|string(int64)|false|none|Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.|
|cpcBidFloorMicros|string(int64)|false|none|Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.|
|targetRoas|number(double)|false|none|The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__MaximizeConversions">GoogleAdsSearchads360V0Common__MaximizeConversions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__maximizeconversions"></a>
<a id="schema_GoogleAdsSearchads360V0Common__MaximizeConversions"></a>
<a id="tocSgoogleadssearchads360v0common__maximizeconversions"></a>
<a id="tocsgoogleadssearchads360v0common__maximizeconversions"></a>

```json
{
  "cpcBidCeilingMicros": "string",
  "cpcBidFloorMicros": "string",
  "targetCpaMicros": "string"
}
```

An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpcBidCeilingMicros|string(int64)|false|none|Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.|
|cpcBidFloorMicros|string(int64)|false|none|Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.|
|targetCpaMicros|string(int64)|false|none|The target cost-per-action (CPA) option. This is the average amount that you would like to spend per conversion action specified in micro units of the bidding strategy's currency. If set, the bid strategy will get as many conversions as possible at or below the target cost-per-action. If the target CPA is not set, the bid strategy will aim to achieve the lowest possible CPA given the budget.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__Metrics">GoogleAdsSearchads360V0Common__Metrics</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__metrics"></a>
<a id="schema_GoogleAdsSearchads360V0Common__Metrics"></a>
<a id="tocSgoogleadssearchads360v0common__metrics"></a>
<a id="tocsgoogleadssearchads360v0common__metrics"></a>

```json
{
  "absoluteTopImpressionPercentage": 0,
  "allConversions": 0,
  "allConversionsByConversionDate": 0,
  "allConversionsFromClickToCall": 0,
  "allConversionsFromDirections": 0,
  "allConversionsFromInteractionsRate": 0,
  "allConversionsFromInteractionsValuePerInteraction": 0,
  "allConversionsFromMenu": 0,
  "allConversionsFromOrder": 0,
  "allConversionsFromOtherEngagement": 0,
  "allConversionsFromStoreVisit": 0,
  "allConversionsFromStoreWebsite": 0,
  "allConversionsValue": 0,
  "allConversionsValueByConversionDate": 0,
  "allConversionsValuePerCost": 0,
  "averageCost": 0,
  "averageCpc": 0,
  "averageCpm": 0,
  "clicks": "string",
  "clientAccountConversions": 0,
  "clientAccountConversionsValue": 0,
  "clientAccountViewThroughConversions": "string",
  "contentBudgetLostImpressionShare": 0,
  "contentImpressionShare": 0,
  "contentRankLostImpressionShare": 0,
  "conversions": 0,
  "conversionsByConversionDate": 0,
  "conversionsFromInteractionsRate": 0,
  "conversionsFromInteractionsValuePerInteraction": 0,
  "conversionsValue": 0,
  "conversionsValueByConversionDate": 0,
  "conversionsValuePerCost": 0,
  "costMicros": "string",
  "costPerAllConversions": 0,
  "costPerConversion": 0,
  "costPerCurrentModelAttributedConversion": 0,
  "crossDeviceConversions": 0,
  "crossDeviceConversionsValue": 0,
  "ctr": 0,
  "historicalCreativeQualityScore": "UNSPECIFIED",
  "historicalLandingPageQualityScore": "UNSPECIFIED",
  "historicalQualityScore": "string",
  "historicalSearchPredictedCtr": "UNSPECIFIED",
  "impressions": "string",
  "interactionEventTypes": [
    "UNSPECIFIED"
  ],
  "interactionRate": 0,
  "interactions": "string",
  "invalidClickRate": 0,
  "invalidClicks": "string",
  "mobileFriendlyClicksPercentage": 0,
  "searchAbsoluteTopImpressionShare": 0,
  "searchBudgetLostAbsoluteTopImpressionShare": 0,
  "searchBudgetLostImpressionShare": 0,
  "searchBudgetLostTopImpressionShare": 0,
  "searchClickShare": 0,
  "searchExactMatchImpressionShare": 0,
  "searchImpressionShare": 0,
  "searchRankLostAbsoluteTopImpressionShare": 0,
  "searchRankLostImpressionShare": 0,
  "searchRankLostTopImpressionShare": 0,
  "searchTopImpressionShare": 0,
  "topImpressionPercentage": 0,
  "valuePerAllConversions": 0,
  "valuePerAllConversionsByConversionDate": 0,
  "valuePerConversion": 0,
  "valuePerConversionsByConversionDate": 0,
  "visits": 0
}
```

Metrics data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absoluteTopImpressionPercentage|number(double)|false|none|The percent of your ad impressions that are shown as the very first ad above the organic search results.|
|allConversions|number(double)|false|none|The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric.|
|allConversionsByConversionDate|number(double)|false|none|The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.|
|allConversionsFromClickToCall|number(double)|false|none|The number of times people clicked the "Call" button to call a store during or after clicking an ad. This number doesn't include whether or not calls were connected, or the duration of any calls. This metric applies to feed items only.|
|allConversionsFromDirections|number(double)|false|none|The number of times people clicked a "Get directions" button to navigate to a store after clicking an ad. This metric applies to feed items only.|
|allConversionsFromInteractionsRate|number(double)|false|none|All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions.|
|allConversionsFromInteractionsValuePerInteraction|number(double)|false|none|The value of all conversions from interactions divided by the total number of interactions.|
|allConversionsFromMenu|number(double)|false|none|The number of times people clicked a link to view a store's menu after clicking an ad. This metric applies to feed items only.|
|allConversionsFromOrder|number(double)|false|none|The number of times people placed an order at a store after clicking an ad. This metric applies to feed items only.|
|allConversionsFromOtherEngagement|number(double)|false|none|The number of other conversions (for example, posting a review or saving a location for a store) that occurred after people clicked an ad. This metric applies to feed items only.|
|allConversionsFromStoreVisit|number(double)|false|none|Estimated number of times people visited a store after clicking an ad. This metric applies to feed items only.|
|allConversionsFromStoreWebsite|number(double)|false|none|The number of times that people were taken to a store's URL after clicking an ad. This metric applies to feed items only.|
|allConversionsValue|number(double)|false|none|The value of all conversions.|
|allConversionsValueByConversionDate|number(double)|false|none|The value of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.|
|allConversionsValuePerCost|number(double)|false|none|The value of all conversions divided by the total cost of ad interactions (such as clicks for text ads or views for video ads).|
|averageCost|number(double)|false|none|The average amount you pay per interaction. This amount is the total cost of your ads divided by the total number of interactions.|
|averageCpc|number(double)|false|none|The total cost of all clicks divided by the total number of clicks received.|
|averageCpm|number(double)|false|none|Average cost-per-thousand impressions (CPM).|
|clicks|string(int64)|false|none|The number of clicks.|
|clientAccountConversions|number(double)|false|none|The number of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.|
|clientAccountConversionsValue|number(double)|false|none|The value of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.|
|clientAccountViewThroughConversions|string(int64)|false|none|The total number of view-through conversions. These happen when a customer sees an image or rich media ad, then later completes a conversion on your site without interacting with (for example, clicking on) another ad.|
|contentBudgetLostImpressionShare|number(double)|false|none|The estimated percent of times that your ad was eligible to show on the Display Network but didn't because your budget was too low. Note: Content budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.|
|contentImpressionShare|number(double)|false|none|The impressions you've received on the Display Network divided by the estimated number of impressions you were eligible to receive. Note: Content impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.|
|contentRankLostImpressionShare|number(double)|false|none|The estimated percentage of impressions on the Display Network that your ads didn't receive due to poor Ad Rank. Note: Content rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.|
|conversions|number(double)|false|none|The number of conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.|
|conversionsByConversionDate|number(double)|false|none|The sum of conversions by conversion date for biddable conversion types. Can be fractional due to attribution modeling. When this column is selected with date, the values in date column means the conversion date.|
|conversionsFromInteractionsRate|number(double)|false|none|Average biddable conversions (from interaction) per conversion eligible interaction. Shows how often, on average, an ad interaction leads to a biddable conversion.|
|conversionsFromInteractionsValuePerInteraction|number(double)|false|none|The value of conversions from interactions divided by the number of ad interactions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.|
|conversionsValue|number(double)|false|none|The sum of conversion values for the conversions included in the "conversions" field. This metric is useful only if you entered a value for your conversion actions.|
|conversionsValueByConversionDate|number(double)|false|none|The sum of biddable conversions value by conversion date. When this column is selected with date, the values in date column means the conversion date.|
|conversionsValuePerCost|number(double)|false|none|The value of biddable conversion divided by the total cost of conversion eligible interactions.|
|costMicros|string(int64)|false|none|The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period.|
|costPerAllConversions|number(double)|false|none|The cost of ad interactions divided by all conversions.|
|costPerConversion|number(double)|false|none|Average conversion eligible cost per biddable conversion.|
|costPerCurrentModelAttributedConversion|number(double)|false|none|The cost of ad interactions divided by current model attributed conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.|
|crossDeviceConversions|number(double)|false|none|Conversions from when a customer clicks on an ad on one device, then converts on a different device or browser. Cross-device conversions are already included in all_conversions.|
|crossDeviceConversionsValue|number(double)|false|none|The sum of the value of cross-device conversions.|
|ctr|number(double)|false|none|The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions).|
|historicalCreativeQualityScore|string|false|none|The creative historical quality score.|
|historicalLandingPageQualityScore|string|false|none|The quality of historical landing page experience.|
|historicalQualityScore|string(int64)|false|none|The historical quality score.|
|historicalSearchPredictedCtr|string|false|none|The historical search predicted click through rate (CTR).|
|impressions|string(int64)|false|none|Count of how often your ad has appeared on a search results page or website on the Google Network.|
|interactionEventTypes|[string]|false|none|The types of payable and free interactions.|
|interactionRate|number(double)|false|none|How often people interact with your ad after it is shown to them. This is the number of interactions divided by the number of times your ad is shown.|
|interactions|string(int64)|false|none|The number of interactions. An interaction is the main user action associated with an ad format-clicks for text and shopping ads, views for video ads, and so on.|
|invalidClickRate|number(double)|false|none|The percentage of clicks filtered out of your total number of clicks (filtered + non-filtered clicks) during the reporting period.|
|invalidClicks|string(int64)|false|none|Number of clicks Google considers illegitimate and doesn't charge you for.|
|mobileFriendlyClicksPercentage|number(double)|false|none|The percentage of mobile clicks that go to a mobile-friendly page.|
|searchAbsoluteTopImpressionShare|number(double)|false|none|The percentage of the customer's Shopping or Search ad impressions that are shown in the most prominent Shopping position. See https://support.google.com/sa360/answer/9566729 for details. Any value below 0.1 is reported as 0.0999.|
|searchBudgetLostAbsoluteTopImpressionShare|number(double)|false|none|The number estimating how often your ad wasn't the very first ad above the organic search results due to a low budget. Note: Search budget lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.|
|searchBudgetLostImpressionShare|number(double)|false|none|The estimated percent of times that your ad was eligible to show on the Search Network but didn't because your budget was too low. Note: Search budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.|
|searchBudgetLostTopImpressionShare|number(double)|false|none|The number estimating how often your ad didn't show anywhere above the organic search results due to a low budget. Note: Search budget lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.|
|searchClickShare|number(double)|false|none|The number of clicks you've received on the Search Network divided by the estimated number of clicks you were eligible to receive. Note: Search click share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.|
|searchExactMatchImpressionShare|number(double)|false|none|The impressions you've received divided by the estimated number of impressions you were eligible to receive on the Search Network for search terms that matched your keywords exactly (or were close variants of your keyword), regardless of your keyword match types. Note: Search exact match impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.|
|searchImpressionShare|number(double)|false|none|The impressions you've received on the Search Network divided by the estimated number of impressions you were eligible to receive. Note: Search impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.|
|searchRankLostAbsoluteTopImpressionShare|number(double)|false|none|The number estimating how often your ad wasn't the very first ad above the organic search results due to poor Ad Rank. Note: Search rank lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.|
|searchRankLostImpressionShare|number(double)|false|none|The estimated percentage of impressions on the Search Network that your ads didn't receive due to poor Ad Rank. Note: Search rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.|
|searchRankLostTopImpressionShare|number(double)|false|none|The number estimating how often your ad didn't show anywhere above the organic search results due to poor Ad Rank. Note: Search rank lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.|
|searchTopImpressionShare|number(double)|false|none|The impressions you've received in the top location (anywhere above the organic search results) compared to the estimated number of impressions you were eligible to receive in the top location. Note: Search top impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.|
|topImpressionPercentage|number(double)|false|none|The percent of your ad impressions that are shown anywhere above the organic search results.|
|valuePerAllConversions|number(double)|false|none|The value of all conversions divided by the number of all conversions.|
|valuePerAllConversionsByConversionDate|number(double)|false|none|The value of all conversions divided by the number of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.|
|valuePerConversion|number(double)|false|none|The value of biddable conversion divided by the number of biddable conversions. Shows how much, on average, each of the biddable conversions is worth.|
|valuePerConversionsByConversionDate|number(double)|false|none|Biddable conversions value by conversion date divided by biddable conversions by conversion date. Shows how much, on average, each of the biddable conversions is worth (by conversion date). When this column is selected with date, the values in date column means the conversion date.|
|visits|number(double)|false|none|Clicks that Search Ads 360 has successfully recorded and forwarded to an advertiser's landing page.|

#### Enumerated Values

|Property|Value|
|---|---|
|historicalCreativeQualityScore|UNSPECIFIED|
|historicalCreativeQualityScore|UNKNOWN|
|historicalCreativeQualityScore|BELOW_AVERAGE|
|historicalCreativeQualityScore|AVERAGE|
|historicalCreativeQualityScore|ABOVE_AVERAGE|
|historicalLandingPageQualityScore|UNSPECIFIED|
|historicalLandingPageQualityScore|UNKNOWN|
|historicalLandingPageQualityScore|BELOW_AVERAGE|
|historicalLandingPageQualityScore|AVERAGE|
|historicalLandingPageQualityScore|ABOVE_AVERAGE|
|historicalSearchPredictedCtr|UNSPECIFIED|
|historicalSearchPredictedCtr|UNKNOWN|
|historicalSearchPredictedCtr|BELOW_AVERAGE|
|historicalSearchPredictedCtr|AVERAGE|
|historicalSearchPredictedCtr|ABOVE_AVERAGE|
|interactionEventTypes|UNSPECIFIED|
|interactionEventTypes|UNKNOWN|
|interactionEventTypes|CLICK|
|interactionEventTypes|ENGAGEMENT|
|interactionEventTypes|VIDEO_VIEW|
|interactionEventTypes|NONE|

<h2 id="tocS_GoogleAdsSearchads360V0Common__PercentCpc">GoogleAdsSearchads360V0Common__PercentCpc</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__percentcpc"></a>
<a id="schema_GoogleAdsSearchads360V0Common__PercentCpc"></a>
<a id="tocSgoogleadssearchads360v0common__percentcpc"></a>
<a id="tocsgoogleadssearchads360v0common__percentcpc"></a>

```json
{
  "cpcBidCeilingMicros": "string",
  "enhancedCpcEnabled": true
}
```

A bidding strategy where bids are a fraction of the advertised price for some good or service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpcBidCeilingMicros|string(int64)|false|none|Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined.|
|enhancedCpcEnabled|boolean|false|none|Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__RealTimeBiddingSetting">GoogleAdsSearchads360V0Common__RealTimeBiddingSetting</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__realtimebiddingsetting"></a>
<a id="schema_GoogleAdsSearchads360V0Common__RealTimeBiddingSetting"></a>
<a id="tocSgoogleadssearchads360v0common__realtimebiddingsetting"></a>
<a id="tocsgoogleadssearchads360v0common__realtimebiddingsetting"></a>

```json
{
  "optIn": true
}
```

Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|optIn|boolean|false|none|Whether the campaign is opted in to real-time bidding.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__Segments">GoogleAdsSearchads360V0Common__Segments</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__segments"></a>
<a id="schema_GoogleAdsSearchads360V0Common__Segments"></a>
<a id="tocSgoogleadssearchads360v0common__segments"></a>
<a id="tocsgoogleadssearchads360v0common__segments"></a>

```json
{
  "conversionAction": "string",
  "conversionActionCategory": "UNSPECIFIED",
  "conversionActionName": "string",
  "date": "string",
  "dayOfWeek": "UNSPECIFIED",
  "device": "UNSPECIFIED",
  "month": "string",
  "quarter": "string",
  "week": "string",
  "year": 0
}
```

Segment only fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionAction|string|false|none|Resource name of the conversion action.|
|conversionActionCategory|string|false|none|Conversion action category.|
|conversionActionName|string|false|none|Conversion action name.|
|date|string|false|none|Date to which metrics apply. yyyy-MM-dd format, for example, 2018-04-17.|
|dayOfWeek|string|false|none|Day of the week, for example, MONDAY.|
|device|string|false|none|Device to which metrics apply.|
|month|string|false|none|Month as represented by the date of the first day of a month. Formatted as yyyy-MM-dd.|
|quarter|string|false|none|Quarter as represented by the date of the first day of a quarter. Uses the calendar year for quarters, for example, the second quarter of 2018 starts on 2018-04-01. Formatted as yyyy-MM-dd.|
|week|string|false|none|Week as defined as Monday through Sunday, and represented by the date of Monday. Formatted as yyyy-MM-dd.|
|year|integer(int32)|false|none|Year, formatted as yyyy.|

#### Enumerated Values

|Property|Value|
|---|---|
|conversionActionCategory|UNSPECIFIED|
|conversionActionCategory|UNKNOWN|
|conversionActionCategory|DEFAULT|
|conversionActionCategory|PAGE_VIEW|
|conversionActionCategory|PURCHASE|
|conversionActionCategory|SIGNUP|
|conversionActionCategory|LEAD|
|conversionActionCategory|DOWNLOAD|
|conversionActionCategory|ADD_TO_CART|
|conversionActionCategory|BEGIN_CHECKOUT|
|conversionActionCategory|SUBSCRIBE_PAID|
|conversionActionCategory|PHONE_CALL_LEAD|
|conversionActionCategory|IMPORTED_LEAD|
|conversionActionCategory|SUBMIT_LEAD_FORM|
|conversionActionCategory|BOOK_APPOINTMENT|
|conversionActionCategory|REQUEST_QUOTE|
|conversionActionCategory|GET_DIRECTIONS|
|conversionActionCategory|OUTBOUND_CLICK|
|conversionActionCategory|CONTACT|
|conversionActionCategory|ENGAGEMENT|
|conversionActionCategory|STORE_VISIT|
|conversionActionCategory|STORE_SALE|
|conversionActionCategory|QUALIFIED_LEAD|
|conversionActionCategory|CONVERTED_LEAD|
|dayOfWeek|UNSPECIFIED|
|dayOfWeek|UNKNOWN|
|dayOfWeek|MONDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|FRIDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|
|device|UNSPECIFIED|
|device|UNKNOWN|
|device|MOBILE|
|device|TABLET|
|device|DESKTOP|
|device|CONNECTED_TV|
|device|OTHER|

<h2 id="tocS_GoogleAdsSearchads360V0Common__TargetCpa">GoogleAdsSearchads360V0Common__TargetCpa</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__targetcpa"></a>
<a id="schema_GoogleAdsSearchads360V0Common__TargetCpa"></a>
<a id="tocSgoogleadssearchads360v0common__targetcpa"></a>
<a id="tocsgoogleadssearchads360v0common__targetcpa"></a>

```json
{
  "cpcBidCeilingMicros": "string",
  "cpcBidFloorMicros": "string",
  "targetCpaMicros": "string"
}
```

An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpcBidCeilingMicros|string(int64)|false|none|Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.|
|cpcBidFloorMicros|string(int64)|false|none|Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.|
|targetCpaMicros|string(int64)|false|none|Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__TargetCpm">GoogleAdsSearchads360V0Common__TargetCpm</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__targetcpm"></a>
<a id="schema_GoogleAdsSearchads360V0Common__TargetCpm"></a>
<a id="tocSgoogleadssearchads360v0common__targetcpm"></a>
<a id="tocsgoogleadssearchads360v0common__targetcpm"></a>

```json
{}
```

Target CPM (cost per thousand impressions) is an automated bidding strategy that sets bids to optimize performance given the target CPM you set.

<h2 id="tocS_GoogleAdsSearchads360V0Common__TargetImpressionShare">GoogleAdsSearchads360V0Common__TargetImpressionShare</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__targetimpressionshare"></a>
<a id="schema_GoogleAdsSearchads360V0Common__TargetImpressionShare"></a>
<a id="tocSgoogleadssearchads360v0common__targetimpressionshare"></a>
<a id="tocsgoogleadssearchads360v0common__targetimpressionshare"></a>

```json
{
  "cpcBidCeilingMicros": "string",
  "location": "UNSPECIFIED",
  "locationFractionMicros": "string"
}
```

An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpcBidCeilingMicros|string(int64)|false|none|The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros.|
|location|string|false|none|The targeted location on the search results page.|
|locationFractionMicros|string(int64)|false|none|The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000.|

#### Enumerated Values

|Property|Value|
|---|---|
|location|UNSPECIFIED|
|location|UNKNOWN|
|location|ANYWHERE_ON_PAGE|
|location|TOP_OF_PAGE|
|location|ABSOLUTE_TOP_OF_PAGE|

<h2 id="tocS_GoogleAdsSearchads360V0Common__TargetOutrankShare">GoogleAdsSearchads360V0Common__TargetOutrankShare</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__targetoutrankshare"></a>
<a id="schema_GoogleAdsSearchads360V0Common__TargetOutrankShare"></a>
<a id="tocSgoogleadssearchads360v0common__targetoutrankshare"></a>
<a id="tocsgoogleadssearchads360v0common__targetoutrankshare"></a>

```json
{
  "cpcBidCeilingMicros": "string"
}
```

An automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This strategy is deprecated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpcBidCeilingMicros|string(int64)|false|none|Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__TargetRestriction">GoogleAdsSearchads360V0Common__TargetRestriction</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__targetrestriction"></a>
<a id="schema_GoogleAdsSearchads360V0Common__TargetRestriction"></a>
<a id="tocSgoogleadssearchads360v0common__targetrestriction"></a>
<a id="tocsgoogleadssearchads360v0common__targetrestriction"></a>

```json
{
  "bidOnly": true,
  "targetingDimension": "UNSPECIFIED"
}
```

The list of per-targeting-dimension targeting settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidOnly|boolean|false|none|Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of `true` means that these criteria will only apply bid modifiers, and not affect targeting. A value of `false` means that these criteria will restrict targeting as well as applying bid modifiers.|
|targetingDimension|string|false|none|The targeting dimension that these settings apply to.|

#### Enumerated Values

|Property|Value|
|---|---|
|targetingDimension|UNSPECIFIED|
|targetingDimension|UNKNOWN|
|targetingDimension|KEYWORD|
|targetingDimension|AUDIENCE|
|targetingDimension|TOPIC|
|targetingDimension|GENDER|
|targetingDimension|AGE_RANGE|
|targetingDimension|PLACEMENT|
|targetingDimension|PARENTAL_STATUS|
|targetingDimension|INCOME_RANGE|

<h2 id="tocS_GoogleAdsSearchads360V0Common__TargetRoas">GoogleAdsSearchads360V0Common__TargetRoas</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__targetroas"></a>
<a id="schema_GoogleAdsSearchads360V0Common__TargetRoas"></a>
<a id="tocSgoogleadssearchads360v0common__targetroas"></a>
<a id="tocsgoogleadssearchads360v0common__targetroas"></a>

```json
{
  "cpcBidCeilingMicros": "string",
  "cpcBidFloorMicros": "string",
  "targetRoas": 0
}
```

An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpcBidCeilingMicros|string(int64)|false|none|Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.|
|cpcBidFloorMicros|string(int64)|false|none|Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.|
|targetRoas|number(double)|false|none|Required. The chosen revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__TargetSpend">GoogleAdsSearchads360V0Common__TargetSpend</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__targetspend"></a>
<a id="schema_GoogleAdsSearchads360V0Common__TargetSpend"></a>
<a id="tocSgoogleadssearchads360v0common__targetspend"></a>
<a id="tocsgoogleadssearchads360v0common__targetspend"></a>

```json
{
  "cpcBidCeilingMicros": "string",
  "targetSpendMicros": "string"
}
```

An automated bid strategy that sets your bids to help get as many clicks as possible within your budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpcBidCeilingMicros|string(int64)|false|none|Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.|
|targetSpendMicros|string(int64)|false|none|The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__TargetingSetting">GoogleAdsSearchads360V0Common__TargetingSetting</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__targetingsetting"></a>
<a id="schema_GoogleAdsSearchads360V0Common__TargetingSetting"></a>
<a id="tocSgoogleadssearchads360v0common__targetingsetting"></a>
<a id="tocsgoogleadssearchads360v0common__targetingsetting"></a>

```json
{
  "targetRestrictions": [
    {
      "bidOnly": true,
      "targetingDimension": "UNSPECIFIED"
    }
  ]
}
```

Settings for the targeting-related features, at the campaign and ad group levels. For more details about the targeting setting, visit https://support.google.com/google-ads/answer/7365594

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetRestrictions|[[GoogleAdsSearchads360V0Common__TargetRestriction](#schemagoogleadssearchads360v0common__targetrestriction)]|false|none|The per-targeting-dimension setting to restrict the reach of your campaign or ad group.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__TextLabel">GoogleAdsSearchads360V0Common__TextLabel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__textlabel"></a>
<a id="schema_GoogleAdsSearchads360V0Common__TextLabel"></a>
<a id="tocSgoogleadssearchads360v0common__textlabel"></a>
<a id="tocsgoogleadssearchads360v0common__textlabel"></a>

```json
{
  "backgroundColor": "string",
  "description": "string"
}
```

A type of label displaying text on a colored background.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|string|false|none|Background color of the label in RGB format. This string must match the regular expression '^\#([a-fA-F0-9]{6}\|[a-fA-F0-9]{3})$'. Note: The background color may not be visible for manager accounts.|
|description|string|false|none|A short description of the label. The length must be no more than 200 characters.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__UserListInfo">GoogleAdsSearchads360V0Common__UserListInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__userlistinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__UserListInfo"></a>
<a id="tocSgoogleadssearchads360v0common__userlistinfo"></a>
<a id="tocsgoogleadssearchads360v0common__userlistinfo"></a>

```json
{
  "userList": "string"
}
```

A User List criterion. Represents a user list that is defined by the advertiser to be targeted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userList|string|false|none|The User List resource name.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__Value">GoogleAdsSearchads360V0Common__Value</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__value"></a>
<a id="schema_GoogleAdsSearchads360V0Common__Value"></a>
<a id="tocSgoogleadssearchads360v0common__value"></a>
<a id="tocsgoogleadssearchads360v0common__value"></a>

```json
{
  "booleanValue": true,
  "doubleValue": 0,
  "floatValue": 0,
  "int64Value": "string",
  "stringValue": "string"
}
```

A generic data container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|booleanValue|boolean|false|none|A boolean.|
|doubleValue|number(double)|false|none|A double.|
|floatValue|number(float)|false|none|A float.|
|int64Value|string(int64)|false|none|An int64.|
|stringValue|string|false|none|A string.|

<h2 id="tocS_GoogleAdsSearchads360V0Common__WebpageConditionInfo">GoogleAdsSearchads360V0Common__WebpageConditionInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__webpageconditioninfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__WebpageConditionInfo"></a>
<a id="tocSgoogleadssearchads360v0common__webpageconditioninfo"></a>
<a id="tocsgoogleadssearchads360v0common__webpageconditioninfo"></a>

```json
{
  "argument": "string",
  "operand": "UNSPECIFIED",
  "operator": "UNSPECIFIED"
}
```

Logical expression for targeting webpages of an advertiser's website.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|string|false|none|Argument of webpage targeting condition.|
|operand|string|false|none|Operand of webpage targeting condition.|
|operator|string|false|none|Operator of webpage targeting condition.|

#### Enumerated Values

|Property|Value|
|---|---|
|operand|UNSPECIFIED|
|operand|UNKNOWN|
|operand|URL|
|operand|CATEGORY|
|operand|PAGE_TITLE|
|operand|PAGE_CONTENT|
|operand|CUSTOM_LABEL|
|operator|UNSPECIFIED|
|operator|UNKNOWN|
|operator|EQUALS|
|operator|CONTAINS|

<h2 id="tocS_GoogleAdsSearchads360V0Common__WebpageInfo">GoogleAdsSearchads360V0Common__WebpageInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0common__webpageinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Common__WebpageInfo"></a>
<a id="tocSgoogleadssearchads360v0common__webpageinfo"></a>
<a id="tocsgoogleadssearchads360v0common__webpageinfo"></a>

```json
{
  "conditions": [
    {
      "argument": "string",
      "operand": "UNSPECIFIED",
      "operator": "UNSPECIFIED"
    }
  ],
  "coveragePercentage": 0,
  "criterionName": "string"
}
```

Represents a criterion for targeting webpages of an advertiser's website.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[GoogleAdsSearchads360V0Common__WebpageConditionInfo](#schemagoogleadssearchads360v0common__webpageconditioninfo)]|false|none|Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. An empty list of conditions indicates all pages of the campaign's website are targeted. This field is required for CREATE operations and is prohibited on UPDATE operations.|
|coveragePercentage|number(double)|false|none|Website criteria coverage percentage. This is the computed percentage of website coverage based on the website target, negative website target and negative keywords in the ad group and campaign. For instance, when coverage returns as 1, it indicates it has 100% coverage. This field is read-only.|
|criterionName|string|false|none|The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations.|

<h2 id="tocS_GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement">GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0errors_errorlocation_fieldpathelement"></a>
<a id="schema_GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement"></a>
<a id="tocSgoogleadssearchads360v0errors_errorlocation_fieldpathelement"></a>
<a id="tocsgoogleadssearchads360v0errors_errorlocation_fieldpathelement"></a>

```json
{
  "fieldName": "string",
  "index": 0
}
```

A part of a field path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|string|false|none|The name of a field or a oneof|
|index|integer(int32)|false|none|If field_name is a repeated field, this is the element that failed|

<h2 id="tocS_GoogleAdsSearchads360V0Errors__ErrorCode">GoogleAdsSearchads360V0Errors__ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0errors__errorcode"></a>
<a id="schema_GoogleAdsSearchads360V0Errors__ErrorCode"></a>
<a id="tocSgoogleadssearchads360v0errors__errorcode"></a>
<a id="tocsgoogleadssearchads360v0errors__errorcode"></a>

```json
{
  "authenticationError": "UNSPECIFIED",
  "authorizationError": "UNSPECIFIED",
  "dateError": "UNSPECIFIED",
  "dateRangeError": "UNSPECIFIED",
  "distinctError": "UNSPECIFIED",
  "headerError": "UNSPECIFIED",
  "internalError": "UNSPECIFIED",
  "queryError": "UNSPECIFIED",
  "quotaError": "UNSPECIFIED",
  "requestError": "UNSPECIFIED",
  "sizeLimitError": "UNSPECIFIED"
}
```

The error reason represented by type and enum.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationError|string|false|none|Indicates failure to properly authenticate user.|
|authorizationError|string|false|none|An error encountered when trying to authorize a user.|
|dateError|string|false|none|The reasons for the date error|
|dateRangeError|string|false|none|The reasons for the date range error|
|distinctError|string|false|none|The reasons for the distinct error|
|headerError|string|false|none|The reasons for the header error.|
|internalError|string|false|none|An unexpected server-side error.|
|queryError|string|false|none|An error with the query|
|quotaError|string|false|none|An error with the amonut of quota remaining.|
|requestError|string|false|none|An error caused by the request|
|sizeLimitError|string|false|none|The reasons for the size limit error|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationError|UNSPECIFIED|
|authenticationError|UNKNOWN|
|authenticationError|AUTHENTICATION_ERROR|
|authenticationError|CLIENT_CUSTOMER_ID_INVALID|
|authenticationError|CUSTOMER_NOT_FOUND|
|authenticationError|GOOGLE_ACCOUNT_DELETED|
|authenticationError|GOOGLE_ACCOUNT_COOKIE_INVALID|
|authenticationError|GOOGLE_ACCOUNT_AUTHENTICATION_FAILED|
|authenticationError|GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH|
|authenticationError|LOGIN_COOKIE_REQUIRED|
|authenticationError|NOT_ADS_USER|
|authenticationError|OAUTH_TOKEN_INVALID|
|authenticationError|OAUTH_TOKEN_EXPIRED|
|authenticationError|OAUTH_TOKEN_DISABLED|
|authenticationError|OAUTH_TOKEN_REVOKED|
|authenticationError|OAUTH_TOKEN_HEADER_INVALID|
|authenticationError|LOGIN_COOKIE_INVALID|
|authenticationError|USER_ID_INVALID|
|authenticationError|TWO_STEP_VERIFICATION_NOT_ENROLLED|
|authenticationError|ADVANCED_PROTECTION_NOT_ENROLLED|
|authorizationError|UNSPECIFIED|
|authorizationError|UNKNOWN|
|authorizationError|USER_PERMISSION_DENIED|
|authorizationError|PROJECT_DISABLED|
|authorizationError|AUTHORIZATION_ERROR|
|authorizationError|ACTION_NOT_PERMITTED|
|authorizationError|INCOMPLETE_SIGNUP|
|authorizationError|CUSTOMER_NOT_ENABLED|
|authorizationError|MISSING_TOS|
|authorizationError|INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION|
|authorizationError|SERVICE_ACCESS_DENIED|
|authorizationError|ACCESS_DENIED_FOR_ACCOUNT_TYPE|
|authorizationError|METRIC_ACCESS_DENIED|
|dateError|UNSPECIFIED|
|dateError|UNKNOWN|
|dateError|INVALID_FIELD_VALUES_IN_DATE|
|dateError|INVALID_FIELD_VALUES_IN_DATE_TIME|
|dateError|INVALID_STRING_DATE|
|dateError|INVALID_STRING_DATE_TIME_MICROS|
|dateError|INVALID_STRING_DATE_TIME_SECONDS|
|dateError|INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET|
|dateError|EARLIER_THAN_MINIMUM_DATE|
|dateError|LATER_THAN_MAXIMUM_DATE|
|dateError|DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE|
|dateError|DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL|
|dateRangeError|UNSPECIFIED|
|dateRangeError|UNKNOWN|
|dateRangeError|INVALID_DATE|
|dateRangeError|START_DATE_AFTER_END_DATE|
|dateRangeError|CANNOT_SET_DATE_TO_PAST|
|dateRangeError|AFTER_MAXIMUM_ALLOWABLE_DATE|
|dateRangeError|CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED|
|distinctError|UNSPECIFIED|
|distinctError|UNKNOWN|
|distinctError|DUPLICATE_ELEMENT|
|distinctError|DUPLICATE_TYPE|
|headerError|UNSPECIFIED|
|headerError|UNKNOWN|
|headerError|INVALID_USER_SELECTED_CUSTOMER_ID|
|headerError|INVALID_LOGIN_CUSTOMER_ID|
|internalError|UNSPECIFIED|
|internalError|UNKNOWN|
|internalError|INTERNAL_ERROR|
|internalError|ERROR_CODE_NOT_PUBLISHED|
|internalError|TRANSIENT_ERROR|
|internalError|DEADLINE_EXCEEDED|
|queryError|UNSPECIFIED|
|queryError|UNKNOWN|
|queryError|QUERY_ERROR|
|queryError|BAD_ENUM_CONSTANT|
|queryError|BAD_ESCAPE_SEQUENCE|
|queryError|BAD_FIELD_NAME|
|queryError|BAD_LIMIT_VALUE|
|queryError|BAD_NUMBER|
|queryError|BAD_OPERATOR|
|queryError|BAD_PARAMETER_NAME|
|queryError|BAD_PARAMETER_VALUE|
|queryError|BAD_RESOURCE_TYPE_IN_FROM_CLAUSE|
|queryError|BAD_SYMBOL|
|queryError|BAD_VALUE|
|queryError|DATE_RANGE_TOO_WIDE|
|queryError|DATE_RANGE_TOO_NARROW|
|queryError|EXPECTED_AND|
|queryError|EXPECTED_BY|
|queryError|EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE|
|queryError|EXPECTED_FILTERS_ON_DATE_RANGE|
|queryError|EXPECTED_FROM|
|queryError|EXPECTED_LIST|
|queryError|EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE|
|queryError|EXPECTED_SELECT|
|queryError|EXPECTED_SINGLE_VALUE|
|queryError|EXPECTED_VALUE_WITH_BETWEEN_OPERATOR|
|queryError|INVALID_DATE_FORMAT|
|queryError|MISALIGNED_DATE_FOR_FILTER|
|queryError|INVALID_STRING_VALUE|
|queryError|INVALID_VALUE_WITH_BETWEEN_OPERATOR|
|queryError|INVALID_VALUE_WITH_DURING_OPERATOR|
|queryError|INVALID_VALUE_WITH_LIKE_OPERATOR|
|queryError|OPERATOR_FIELD_MISMATCH|
|queryError|PROHIBITED_EMPTY_LIST_IN_CONDITION|
|queryError|PROHIBITED_ENUM_CONSTANT|
|queryError|PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE|
|queryError|PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE|
|queryError|PROHIBITED_FIELD_IN_SELECT_CLAUSE|
|queryError|PROHIBITED_FIELD_IN_WHERE_CLAUSE|
|queryError|PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE|
|queryError|PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE|
|queryError|PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE|
|queryError|PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE|
|queryError|PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE|
|queryError|PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE|
|queryError|LIMIT_VALUE_TOO_LOW|
|queryError|PROHIBITED_NEWLINE_IN_STRING|
|queryError|PROHIBITED_VALUE_COMBINATION_IN_LIST|
|queryError|PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR|
|queryError|STRING_NOT_TERMINATED|
|queryError|TOO_MANY_SEGMENTS|
|queryError|UNEXPECTED_END_OF_QUERY|
|queryError|UNEXPECTED_FROM_CLAUSE|
|queryError|UNRECOGNIZED_FIELD|
|queryError|UNEXPECTED_INPUT|
|queryError|REQUESTED_METRICS_FOR_MANAGER|
|queryError|FILTER_HAS_TOO_MANY_VALUES|
|quotaError|UNSPECIFIED|
|quotaError|UNKNOWN|
|quotaError|RESOURCE_EXHAUSTED|
|quotaError|RESOURCE_TEMPORARILY_EXHAUSTED|
|requestError|UNSPECIFIED|
|requestError|UNKNOWN|
|requestError|RESOURCE_NAME_MISSING|
|requestError|RESOURCE_NAME_MALFORMED|
|requestError|BAD_RESOURCE_ID|
|requestError|INVALID_PRODUCT_NAME|
|requestError|INVALID_CUSTOMER_ID|
|requestError|OPERATION_REQUIRED|
|requestError|RESOURCE_NOT_FOUND|
|requestError|INVALID_PAGE_TOKEN|
|requestError|EXPIRED_PAGE_TOKEN|
|requestError|INVALID_PAGE_SIZE|
|requestError|REQUIRED_FIELD_MISSING|
|requestError|IMMUTABLE_FIELD|
|requestError|TOO_MANY_MUTATE_OPERATIONS|
|requestError|CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT|
|requestError|CANNOT_MODIFY_FOREIGN_FIELD|
|requestError|INVALID_ENUM_VALUE|
|requestError|LOGIN_CUSTOMER_ID_PARAMETER_MISSING|
|requestError|LOGIN_OR_LINKED_CUSTOMER_ID_PARAMETER_REQUIRED|
|requestError|VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN|
|requestError|CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS|
|requestError|CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS|
|requestError|INCONSISTENT_RETURN_SUMMARY_ROW_VALUE|
|requestError|TOTAL_RESULTS_COUNT_NOT_ORIGINALLY_REQUESTED|
|requestError|RPC_DEADLINE_TOO_SHORT|
|requestError|PRODUCT_NOT_SUPPORTED|
|sizeLimitError|UNSPECIFIED|
|sizeLimitError|UNKNOWN|
|sizeLimitError|REQUEST_SIZE_LIMIT_EXCEEDED|
|sizeLimitError|RESPONSE_SIZE_LIMIT_EXCEEDED|

<h2 id="tocS_GoogleAdsSearchads360V0Errors__ErrorDetails">GoogleAdsSearchads360V0Errors__ErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0errors__errordetails"></a>
<a id="schema_GoogleAdsSearchads360V0Errors__ErrorDetails"></a>
<a id="tocSgoogleadssearchads360v0errors__errordetails"></a>
<a id="tocsgoogleadssearchads360v0errors__errordetails"></a>

```json
{
  "quotaErrorDetails": {
    "rateName": "string",
    "rateScope": "UNSPECIFIED",
    "retryDelay": "string"
  },
  "unpublishedErrorCode": "string"
}
```

Additional error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotaErrorDetails|[GoogleAdsSearchads360V0Errors__QuotaErrorDetails](#schemagoogleadssearchads360v0errors__quotaerrordetails)|false|none|Details on the quota error, including the scope (account or developer), the rate bucket name and the retry delay.|
|unpublishedErrorCode|string|false|none|The error code that should have been returned, but wasn't. This is used when the error code is not published in the client specified version.|

<h2 id="tocS_GoogleAdsSearchads360V0Errors__ErrorLocation">GoogleAdsSearchads360V0Errors__ErrorLocation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0errors__errorlocation"></a>
<a id="schema_GoogleAdsSearchads360V0Errors__ErrorLocation"></a>
<a id="tocSgoogleadssearchads360v0errors__errorlocation"></a>
<a id="tocsgoogleadssearchads360v0errors__errorlocation"></a>

```json
{
  "fieldPathElements": [
    {
      "fieldName": "string",
      "index": 0
    }
  ]
}
```

Describes the part of the request proto that caused the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldPathElements|[[GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement](#schemagoogleadssearchads360v0errors_errorlocation_fieldpathelement)]|false|none|A field path that indicates which field was invalid in the request.|

<h2 id="tocS_GoogleAdsSearchads360V0Errors__QuotaErrorDetails">GoogleAdsSearchads360V0Errors__QuotaErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0errors__quotaerrordetails"></a>
<a id="schema_GoogleAdsSearchads360V0Errors__QuotaErrorDetails"></a>
<a id="tocSgoogleadssearchads360v0errors__quotaerrordetails"></a>
<a id="tocsgoogleadssearchads360v0errors__quotaerrordetails"></a>

```json
{
  "rateName": "string",
  "rateScope": "UNSPECIFIED",
  "retryDelay": "string"
}
```

Additional quota error details when there is QuotaError.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateName|string|false|none|The high level description of the quota bucket. Examples are "Get requests for standard access" or "Requests per account".|
|rateScope|string|false|none|The rate scope of the quota limit.|
|retryDelay|string(google-duration)|false|none|Backoff period that customers should wait before sending next request.|

#### Enumerated Values

|Property|Value|
|---|---|
|rateScope|UNSPECIFIED|
|rateScope|UNKNOWN|
|rateScope|ACCOUNT|
|rateScope|DEVELOPER|

<h2 id="tocS_GoogleAdsSearchads360V0Errors__SearchAds360Error">GoogleAdsSearchads360V0Errors__SearchAds360Error</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0errors__searchads360error"></a>
<a id="schema_GoogleAdsSearchads360V0Errors__SearchAds360Error"></a>
<a id="tocSgoogleadssearchads360v0errors__searchads360error"></a>
<a id="tocsgoogleadssearchads360v0errors__searchads360error"></a>

```json
{
  "details": {
    "quotaErrorDetails": {
      "rateName": "string",
      "rateScope": "UNSPECIFIED",
      "retryDelay": "string"
    },
    "unpublishedErrorCode": "string"
  },
  "errorCode": {
    "authenticationError": "UNSPECIFIED",
    "authorizationError": "UNSPECIFIED",
    "dateError": "UNSPECIFIED",
    "dateRangeError": "UNSPECIFIED",
    "distinctError": "UNSPECIFIED",
    "headerError": "UNSPECIFIED",
    "internalError": "UNSPECIFIED",
    "queryError": "UNSPECIFIED",
    "quotaError": "UNSPECIFIED",
    "requestError": "UNSPECIFIED",
    "sizeLimitError": "UNSPECIFIED"
  },
  "location": {
    "fieldPathElements": [
      {
        "fieldName": "string",
        "index": 0
      }
    ]
  },
  "message": "string",
  "trigger": {
    "booleanValue": true,
    "doubleValue": 0,
    "floatValue": 0,
    "int64Value": "string",
    "stringValue": "string"
  }
}
```

SearchAds360-specific error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[GoogleAdsSearchads360V0Errors__ErrorDetails](#schemagoogleadssearchads360v0errors__errordetails)|false|none|Additional error details, which are returned by certain error codes. Most error codes do not include details.|
|errorCode|[GoogleAdsSearchads360V0Errors__ErrorCode](#schemagoogleadssearchads360v0errors__errorcode)|false|none|An enum value that indicates which error occurred.|
|location|[GoogleAdsSearchads360V0Errors__ErrorLocation](#schemagoogleadssearchads360v0errors__errorlocation)|false|none|Describes the part of the request proto that caused the error.|
|message|string|false|none|A human-readable description of the error.|
|trigger|[GoogleAdsSearchads360V0Common__Value](#schemagoogleadssearchads360v0common__value)|false|none|The value that triggered the error.|

<h2 id="tocS_GoogleAdsSearchads360V0Errors__SearchAds360Failure">GoogleAdsSearchads360V0Errors__SearchAds360Failure</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0errors__searchads360failure"></a>
<a id="schema_GoogleAdsSearchads360V0Errors__SearchAds360Failure"></a>
<a id="tocSgoogleadssearchads360v0errors__searchads360failure"></a>
<a id="tocsgoogleadssearchads360v0errors__searchads360failure"></a>

```json
{
  "errors": [
    {
      "details": {
        "quotaErrorDetails": {
          "rateName": "string",
          "rateScope": "UNSPECIFIED",
          "retryDelay": "string"
        },
        "unpublishedErrorCode": "string"
      },
      "errorCode": {
        "authenticationError": "UNSPECIFIED",
        "authorizationError": "UNSPECIFIED",
        "dateError": "UNSPECIFIED",
        "dateRangeError": "UNSPECIFIED",
        "distinctError": "UNSPECIFIED",
        "headerError": "UNSPECIFIED",
        "internalError": "UNSPECIFIED",
        "queryError": "UNSPECIFIED",
        "quotaError": "UNSPECIFIED",
        "requestError": "UNSPECIFIED",
        "sizeLimitError": "UNSPECIFIED"
      },
      "location": {
        "fieldPathElements": [
          {
            "fieldName": "string",
            "index": 0
          }
        ]
      },
      "message": "string",
      "trigger": {
        "booleanValue": true,
        "doubleValue": 0,
        "floatValue": 0,
        "int64Value": "string",
        "stringValue": "string"
      }
    }
  ],
  "requestId": "string"
}
```

Describes how a Search Ads 360 API call failed. It's returned inside google.rpc.Status.details when a call fails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[GoogleAdsSearchads360V0Errors__SearchAds360Error](#schemagoogleadssearchads360v0errors__searchads360error)]|false|none|The list of errors that occurred.|
|requestId|string|false|none|The unique ID of the request that is used for debugging purposes.|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo">GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_adgroupcriterion_qualityinfo"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo"></a>
<a id="tocSgoogleadssearchads360v0resources_adgroupcriterion_qualityinfo"></a>
<a id="tocsgoogleadssearchads360v0resources_adgroupcriterion_qualityinfo"></a>

```json
{
  "qualityScore": 0
}
```

A container for ad group criterion quality information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|qualityScore|integer(int32)|false|read-only|Output only. The quality score. This field may not be populated if Google does not have enough information to determine a value.|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting">GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_campaign_dynamicsearchadssetting"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting"></a>
<a id="tocSgoogleadssearchads360v0resources_campaign_dynamicsearchadssetting"></a>
<a id="tocsgoogleadssearchads360v0resources_campaign_dynamicsearchadssetting"></a>

```json
{
  "domainName": "string",
  "languageCode": "string",
  "useSuppliedUrlsOnly": true
}
```

The setting for controlling Dynamic Search Ads (DSA).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|string|false|none|Required. The Internet domain name that this setting represents, for example, "google.com" or "www.google.com".|
|languageCode|string|false|none|Required. The language code specifying the language of the domain, for example, "en".|
|useSuppliedUrlsOnly|boolean|false|none|Whether the campaign uses advertiser supplied URLs exclusively.|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting">GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_campaign_geotargettypesetting"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting"></a>
<a id="tocSgoogleadssearchads360v0resources_campaign_geotargettypesetting"></a>
<a id="tocsgoogleadssearchads360v0resources_campaign_geotargettypesetting"></a>

```json
{
  "negativeGeoTargetType": "UNSPECIFIED",
  "positiveGeoTargetType": "UNSPECIFIED"
}
```

Represents a collection of settings related to ads geotargeting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|negativeGeoTargetType|string|false|none|The setting used for negative geotargeting in this particular campaign.|
|positiveGeoTargetType|string|false|none|The setting used for positive geotargeting in this particular campaign.|

#### Enumerated Values

|Property|Value|
|---|---|
|negativeGeoTargetType|UNSPECIFIED|
|negativeGeoTargetType|UNKNOWN|
|negativeGeoTargetType|PRESENCE_OR_INTEREST|
|negativeGeoTargetType|PRESENCE|
|positiveGeoTargetType|UNSPECIFIED|
|positiveGeoTargetType|UNKNOWN|
|positiveGeoTargetType|PRESENCE_OR_INTEREST|
|positiveGeoTargetType|SEARCH_INTEREST|
|positiveGeoTargetType|PRESENCE|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings">GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_campaign_networksettings"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings"></a>
<a id="tocSgoogleadssearchads360v0resources_campaign_networksettings"></a>
<a id="tocsgoogleadssearchads360v0resources_campaign_networksettings"></a>

```json
{
  "targetContentNetwork": true,
  "targetGoogleSearch": true,
  "targetPartnerSearchNetwork": true,
  "targetSearchNetwork": true
}
```

The network settings for the campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetContentNetwork|boolean|false|none|Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion.|
|targetGoogleSearch|boolean|false|none|Whether ads will be served with google.com search results.|
|targetPartnerSearchNetwork|boolean|false|none|Whether ads will be served on the Google Partner Network. This is available only to some select Google partner accounts.|
|targetSearchNetwork|boolean|false|none|Whether ads will be served on partner sites in the Google Search Network (requires `target_google_search` to also be `true`).|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting">GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_campaign_optimizationgoalsetting"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting"></a>
<a id="tocSgoogleadssearchads360v0resources_campaign_optimizationgoalsetting"></a>
<a id="tocsgoogleadssearchads360v0resources_campaign_optimizationgoalsetting"></a>

```json
{
  "optimizationGoalTypes": [
    "UNSPECIFIED"
  ]
}
```

Optimization goal setting for this campaign, which includes a set of optimization goal types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|optimizationGoalTypes|[string]|false|none|The list of optimization goal types.|

#### Enumerated Values

|Property|Value|
|---|---|
|optimizationGoalTypes|UNSPECIFIED|
|optimizationGoalTypes|UNKNOWN|
|optimizationGoalTypes|CALL_CLICKS|
|optimizationGoalTypes|DRIVING_DIRECTIONS|
|optimizationGoalTypes|APP_PRE_REGISTRATION|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization">GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_campaign_selectiveoptimization"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization"></a>
<a id="tocSgoogleadssearchads360v0resources_campaign_selectiveoptimization"></a>
<a id="tocsgoogleadssearchads360v0resources_campaign_selectiveoptimization"></a>

```json
{
  "conversionActions": [
    "string"
  ]
}
```

Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionActions|[string]|false|none|The selected set of conversion actions for optimizing this campaign.|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting">GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_campaign_shoppingsetting"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting"></a>
<a id="tocSgoogleadssearchads360v0resources_campaign_shoppingsetting"></a>
<a id="tocsgoogleadssearchads360v0resources_campaign_shoppingsetting"></a>

```json
{
  "campaignPriority": 0,
  "enableLocal": true,
  "feedLabel": "string",
  "merchantId": "string",
  "salesCountry": "string",
  "useVehicleInventory": true
}
```

The setting for Shopping campaigns. Defines the universe of products that can be advertised by the campaign, and how this campaign interacts with other Shopping campaigns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignPriority|integer(int32)|false|none|Priority of the campaign. Campaigns with numerically higher priorities take precedence over those with lower priorities. This field is required for Shopping campaigns, with values between 0 and 2, inclusive. This field is optional for Smart Shopping campaigns, but must be equal to 3 if set.|
|enableLocal|boolean|false|none|Whether to include local products.|
|feedLabel|string|false|none|Feed label of products to include in the campaign. Only one of feed_label or sales_country can be set. If used instead of sales_country, the feed_label field accepts country codes in the same format for example: 'XX'. Otherwise can be any string used for feed label in Google Merchant Center.|
|merchantId|string(int64)|false|none|Immutable. ID of the Merchant Center account. This field is required for create operations. This field is immutable for Shopping campaigns.|
|salesCountry|string|false|none|Sales country of products to include in the campaign. |
|useVehicleInventory|boolean|false|none|Immutable. Whether to target Vehicle Listing inventory.|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting">GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_campaign_trackingsetting"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting"></a>
<a id="tocSgoogleadssearchads360v0resources_campaign_trackingsetting"></a>
<a id="tocsgoogleadssearchads360v0resources_campaign_trackingsetting"></a>

```json
{
  "trackingUrl": "string"
}
```

Campaign-level settings for tracking information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trackingUrl|string|false|read-only|Output only. The url used for dynamic tracking.|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings">GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_conversionaction_attributionmodelsettings"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings"></a>
<a id="tocSgoogleadssearchads360v0resources_conversionaction_attributionmodelsettings"></a>
<a id="tocsgoogleadssearchads360v0resources_conversionaction_attributionmodelsettings"></a>

```json
{
  "attributionModel": "UNSPECIFIED",
  "dataDrivenModelStatus": "UNSPECIFIED"
}
```

Settings related to this conversion action's attribution model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributionModel|string|false|none|The attribution model type of this conversion action.|
|dataDrivenModelStatus|string|false|read-only|Output only. The status of the data-driven attribution model for the conversion action.|

#### Enumerated Values

|Property|Value|
|---|---|
|attributionModel|UNSPECIFIED|
|attributionModel|UNKNOWN|
|attributionModel|EXTERNAL|
|attributionModel|GOOGLE_ADS_LAST_CLICK|
|attributionModel|GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK|
|attributionModel|GOOGLE_SEARCH_ATTRIBUTION_LINEAR|
|attributionModel|GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY|
|attributionModel|GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED|
|attributionModel|GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN|
|dataDrivenModelStatus|UNSPECIFIED|
|dataDrivenModelStatus|UNKNOWN|
|dataDrivenModelStatus|AVAILABLE|
|dataDrivenModelStatus|STALE|
|dataDrivenModelStatus|EXPIRED|
|dataDrivenModelStatus|NEVER_GENERATED|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings">GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_conversionaction_floodlightsettings"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings"></a>
<a id="tocSgoogleadssearchads360v0resources_conversionaction_floodlightsettings"></a>
<a id="tocsgoogleadssearchads360v0resources_conversionaction_floodlightsettings"></a>

```json
{
  "activityGroupTag": "string",
  "activityId": "string",
  "activityTag": "string"
}
```

Settings related to a Floodlight conversion action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityGroupTag|string|false|read-only|Output only. String used to identify a Floodlight activity group when reporting conversions.|
|activityId|string(int64)|false|read-only|Output only. ID of the Floodlight activity in DoubleClick Campaign Manager (DCM).|
|activityTag|string|false|read-only|Output only. String used to identify a Floodlight activity when reporting conversions.|

<h2 id="tocS_GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings">GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources_conversionaction_valuesettings"></a>
<a id="schema_GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings"></a>
<a id="tocSgoogleadssearchads360v0resources_conversionaction_valuesettings"></a>
<a id="tocsgoogleadssearchads360v0resources_conversionaction_valuesettings"></a>

```json
{
  "alwaysUseDefaultValue": true,
  "defaultCurrencyCode": "string",
  "defaultValue": 0
}
```

Settings related to the value for conversion events associated with this conversion action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alwaysUseDefaultValue|boolean|false|none|Controls whether the default value and default currency code are used in place of the value and currency code specified in conversion events for this conversion action.|
|defaultCurrencyCode|string|false|none|The currency code to use when conversion events for this conversion action are sent with an invalid or missing currency code, or when this conversion action is configured to always use the default value.|
|defaultValue|number(double)|false|none|The value to use when conversion events for this conversion action are sent with an invalid, disallowed or missing value, or when this conversion action is configured to always use the default value.|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__Ad">GoogleAdsSearchads360V0Resources__Ad</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__ad"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__Ad"></a>
<a id="tocSgoogleadssearchads360v0resources__ad"></a>
<a id="tocsgoogleadssearchads360v0resources__ad"></a>

```json
{
  "displayUrl": "string",
  "finalUrls": [
    "string"
  ],
  "id": "string",
  "name": "string",
  "resourceName": "string",
  "type": "UNSPECIFIED"
}
```

An ad.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayUrl|string|false|none|The URL that appears in the ad description for some ad formats.|
|finalUrls|[string]|false|none|The list of possible final URLs after all cross-domain redirects for the ad.|
|id|string(int64)|false|read-only|Output only. The ID of the ad.|
|name|string|false|none|Immutable. The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad. The name field is currently only supported for DisplayUploadAd, ImageAd, ShoppingComparisonListingAd and VideoAd.|
|resourceName|string|false|none|Immutable. The resource name of the ad. Ad resource names have the form: `customers/{customer_id}/ads/{ad_id}`|
|type|string|false|read-only|Output only. The type of ad.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|TEXT_AD|
|type|EXPANDED_TEXT_AD|
|type|CALL_ONLY_AD|
|type|EXPANDED_DYNAMIC_SEARCH_AD|
|type|HOTEL_AD|
|type|SHOPPING_SMART_AD|
|type|SHOPPING_PRODUCT_AD|
|type|VIDEO_AD|
|type|GMAIL_AD|
|type|IMAGE_AD|
|type|RESPONSIVE_SEARCH_AD|
|type|LEGACY_RESPONSIVE_DISPLAY_AD|
|type|APP_AD|
|type|LEGACY_APP_INSTALL_AD|
|type|RESPONSIVE_DISPLAY_AD|
|type|LOCAL_AD|
|type|HTML5_UPLOAD_AD|
|type|DYNAMIC_HTML5_AD|
|type|APP_ENGAGEMENT_AD|
|type|SHOPPING_COMPARISON_LISTING_AD|
|type|VIDEO_BUMPER_AD|
|type|VIDEO_NON_SKIPPABLE_IN_STREAM_AD|
|type|VIDEO_OUTSTREAM_AD|
|type|VIDEO_TRUEVIEW_DISCOVERY_AD|
|type|VIDEO_TRUEVIEW_IN_STREAM_AD|
|type|VIDEO_RESPONSIVE_AD|
|type|SMART_CAMPAIGN_AD|
|type|APP_PRE_REGISTRATION_AD|
|type|DISCOVERY_MULTI_ASSET_AD|
|type|DISCOVERY_CAROUSEL_AD|
|type|TRAVEL_AD|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__AdGroup">GoogleAdsSearchads360V0Resources__AdGroup</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__adgroup"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__AdGroup"></a>
<a id="tocSgoogleadssearchads360v0resources__adgroup"></a>
<a id="tocsgoogleadssearchads360v0resources__adgroup"></a>

```json
{
  "adRotationMode": "UNSPECIFIED",
  "cpcBidMicros": "string",
  "creationTime": "string",
  "endDate": "string",
  "engineId": "string",
  "engineStatus": "UNSPECIFIED",
  "id": "string",
  "labels": [
    "string"
  ],
  "languageCode": "string",
  "lastModifiedTime": "string",
  "name": "string",
  "resourceName": "string",
  "startDate": "string",
  "status": "UNSPECIFIED",
  "targetingSetting": {
    "targetRestrictions": [
      {
        "bidOnly": true,
        "targetingDimension": "UNSPECIFIED"
      }
    ]
  },
  "type": "UNSPECIFIED"
}
```

An ad group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adRotationMode|string|false|none|The ad rotation mode of the ad group.|
|cpcBidMicros|string(int64)|false|none|The maximum CPC (cost-per-click) bid.|
|creationTime|string|false|read-only|Output only. The timestamp when this ad_group was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.|
|endDate|string|false|read-only|Output only. Date when the ad group ends serving ads. By default, the ad group ends on the ad group's end date. If this field is set, then the ad group ends at the end of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14|
|engineId|string|false|read-only|Output only. ID of the ad group in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group.id" instead.|
|engineStatus|string|false|read-only|Output only. The Engine Status for ad group.|
|id|string(int64)|false|read-only|Output only. The ID of the ad group.|
|labels|[string]|false|read-only|Output only. The resource names of labels attached to this ad group.|
|languageCode|string|false|read-only|Output only. The language of the ads and keywords in an ad group. This field is only available for Microsoft Advertising accounts. More details: https://docs.microsoft.com/en-us/advertising/guides/ad-languages?view=bingads-13#adlanguage|
|lastModifiedTime|string|false|read-only|Output only. The datetime when this ad group was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.|
|name|string|false|none|The name of the ad group. This field is required and should not be empty when creating new ad groups. It must contain fewer than 255 UTF-8 full-width characters. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters.|
|resourceName|string|false|none|Immutable. The resource name of the ad group. Ad group resource names have the form: `customers/{customer_id}/adGroups/{ad_group_id}`|
|startDate|string|false|read-only|Output only. Date when this ad group starts serving ads. By default, the ad group starts now or the ad group's start date, whichever is later. If this field is set, then the ad group starts at the beginning of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14|
|status|string|false|none|The status of the ad group.|
|targetingSetting|[GoogleAdsSearchads360V0Common__TargetingSetting](#schemagoogleadssearchads360v0common__targetingsetting)|false|none|Setting for targeting related features.|
|type|string|false|none|Immutable. The type of the ad group.|

#### Enumerated Values

|Property|Value|
|---|---|
|adRotationMode|UNSPECIFIED|
|adRotationMode|UNKNOWN|
|adRotationMode|OPTIMIZE|
|adRotationMode|ROTATE_FOREVER|
|engineStatus|UNSPECIFIED|
|engineStatus|UNKNOWN|
|engineStatus|AD_GROUP_ELIGIBLE|
|engineStatus|AD_GROUP_EXPIRED|
|engineStatus|AD_GROUP_REMOVED|
|engineStatus|AD_GROUP_DRAFT|
|engineStatus|AD_GROUP_PAUSED|
|engineStatus|AD_GROUP_SERVING|
|engineStatus|AD_GROUP_SUBMITTED|
|engineStatus|CAMPAIGN_PAUSED|
|engineStatus|ACCOUNT_PAUSED|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|PAUSED|
|status|REMOVED|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|SEARCH_STANDARD|
|type|DISPLAY_STANDARD|
|type|SHOPPING_PRODUCT_ADS|
|type|SHOPPING_SHOWCASE_ADS|
|type|HOTEL_ADS|
|type|SHOPPING_SMART_ADS|
|type|VIDEO_BUMPER|
|type|VIDEO_TRUE_VIEW_IN_STREAM|
|type|VIDEO_TRUE_VIEW_IN_DISPLAY|
|type|VIDEO_NON_SKIPPABLE_IN_STREAM|
|type|VIDEO_OUTSTREAM|
|type|SEARCH_DYNAMIC_ADS|
|type|SHOPPING_COMPARISON_LISTING_ADS|
|type|PROMOTED_HOTEL_ADS|
|type|VIDEO_RESPONSIVE|
|type|VIDEO_EFFICIENT_REACH|
|type|SMART_CAMPAIGN_ADS|
|type|TRAVEL_ADS|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__AdGroupAd">GoogleAdsSearchads360V0Resources__AdGroupAd</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__adgroupad"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__AdGroupAd"></a>
<a id="tocSgoogleadssearchads360v0resources__adgroupad"></a>
<a id="tocsgoogleadssearchads360v0resources__adgroupad"></a>

```json
{
  "ad": {
    "displayUrl": "string",
    "finalUrls": [
      "string"
    ],
    "id": "string",
    "name": "string",
    "resourceName": "string",
    "type": "UNSPECIFIED"
  },
  "creationTime": "string",
  "engineId": "string",
  "engineStatus": "UNSPECIFIED",
  "labels": [
    "string"
  ],
  "lastModifiedTime": "string",
  "resourceName": "string",
  "status": "UNSPECIFIED"
}
```

An ad group ad.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ad|[GoogleAdsSearchads360V0Resources__Ad](#schemagoogleadssearchads360v0resources__ad)|false|none|Immutable. The ad.|
|creationTime|string|false|read-only|Output only. The timestamp when this ad_group_ad was created. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.|
|engineId|string|false|read-only|Output only. ID of the ad in the external engine account. This field is for SearchAds 360 account only, for example, Yahoo Japan, Microsoft, Baidu etc. For non-SearchAds 360 entity, use "ad_group_ad.ad.id" instead.|
|engineStatus|string|false|read-only|Output only. Additional status of the ad in the external engine account. Possible statuses (depending on the type of external account) include active, eligible, pending review, etc.|
|labels|[string]|false|read-only|Output only. The resource names of labels attached to this ad group ad.|
|lastModifiedTime|string|false|read-only|Output only. The datetime when this ad group ad was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.|
|resourceName|string|false|none|Immutable. The resource name of the ad. Ad group ad resource names have the form: `customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}`|
|status|string|false|none|The status of the ad.|

#### Enumerated Values

|Property|Value|
|---|---|
|engineStatus|UNSPECIFIED|
|engineStatus|UNKNOWN|
|engineStatus|AD_GROUP_AD_ELIGIBLE|
|engineStatus|AD_GROUP_AD_INAPPROPRIATE_FOR_CAMPAIGN|
|engineStatus|AD_GROUP_AD_MOBILE_URL_UNDER_REVIEW|
|engineStatus|AD_GROUP_AD_PARTIALLY_INVALID|
|engineStatus|AD_GROUP_AD_TO_BE_ACTIVATED|
|engineStatus|AD_GROUP_AD_NOT_REVIEWED|
|engineStatus|AD_GROUP_AD_ON_HOLD|
|engineStatus|AD_GROUP_AD_PAUSED|
|engineStatus|AD_GROUP_AD_REMOVED|
|engineStatus|AD_GROUP_AD_PENDING_REVIEW|
|engineStatus|AD_GROUP_AD_UNDER_REVIEW|
|engineStatus|AD_GROUP_AD_APPROVED|
|engineStatus|AD_GROUP_AD_DISAPPROVED|
|engineStatus|AD_GROUP_AD_SERVING|
|engineStatus|AD_GROUP_AD_ACCOUNT_PAUSED|
|engineStatus|AD_GROUP_AD_CAMPAIGN_PAUSED|
|engineStatus|AD_GROUP_AD_AD_GROUP_PAUSED|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|PAUSED|
|status|REMOVED|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__AdGroupAdLabel">GoogleAdsSearchads360V0Resources__AdGroupAdLabel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__adgroupadlabel"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__AdGroupAdLabel"></a>
<a id="tocSgoogleadssearchads360v0resources__adgroupadlabel"></a>
<a id="tocsgoogleadssearchads360v0resources__adgroupadlabel"></a>

```json
{
  "adGroupAd": "string",
  "label": "string",
  "resourceName": "string"
}
```

A relationship between an ad group ad and a label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupAd|string|false|none|Immutable. The ad group ad to which the label is attached.|
|label|string|false|none|Immutable. The label assigned to the ad group ad.|
|resourceName|string|false|none|Immutable. The resource name of the ad group ad label. Ad group ad label resource names have the form: `customers/{customer_id}/adGroupAdLabels/{ad_group_id}~{ad_id}~{label_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__AdGroupAudienceView">GoogleAdsSearchads360V0Resources__AdGroupAudienceView</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__adgroupaudienceview"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__AdGroupAudienceView"></a>
<a id="tocSgoogleadssearchads360v0resources__adgroupaudienceview"></a>
<a id="tocsgoogleadssearchads360v0resources__adgroupaudienceview"></a>

```json
{
  "resourceName": "string"
}
```

An ad group audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated at the audience level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|read-only|Output only. The resource name of the ad group audience view. Ad group audience view resource names have the form: `customers/{customer_id}/adGroupAudienceViews/{ad_group_id}~{criterion_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__AdGroupBidModifier">GoogleAdsSearchads360V0Resources__AdGroupBidModifier</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__adgroupbidmodifier"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__AdGroupBidModifier"></a>
<a id="tocSgoogleadssearchads360v0resources__adgroupbidmodifier"></a>
<a id="tocsgoogleadssearchads360v0resources__adgroupbidmodifier"></a>

```json
{
  "bidModifier": 0,
  "device": {
    "type": "UNSPECIFIED"
  },
  "resourceName": "string"
}
```

Represents an ad group bid modifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidModifier|number(double)|false|none|The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. The range is 1.0 - 6.0 for PreferredContent. Use 0 to opt out of a Device type.|
|device|[GoogleAdsSearchads360V0Common__DeviceInfo](#schemagoogleadssearchads360v0common__deviceinfo)|false|none|Immutable. A device criterion.|
|resourceName|string|false|none|Immutable. The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form: `customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__AdGroupCriterion">GoogleAdsSearchads360V0Resources__AdGroupCriterion</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__adgroupcriterion"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__AdGroupCriterion"></a>
<a id="tocSgoogleadssearchads360v0resources__adgroupcriterion"></a>
<a id="tocsgoogleadssearchads360v0resources__adgroupcriterion"></a>

```json
{
  "adGroup": "string",
  "ageRange": {
    "type": "UNSPECIFIED"
  },
  "bidModifier": 0,
  "cpcBidMicros": "string",
  "creationTime": "string",
  "criterionId": "string",
  "effectiveCpcBidMicros": "string",
  "engineId": "string",
  "engineStatus": "UNSPECIFIED",
  "finalUrlSuffix": "string",
  "finalUrls": [
    "string"
  ],
  "gender": {
    "type": "UNSPECIFIED"
  },
  "keyword": {
    "matchType": "UNSPECIFIED",
    "text": "string"
  },
  "labels": [
    "string"
  ],
  "lastModifiedTime": "string",
  "listingGroup": {
    "type": "UNSPECIFIED"
  },
  "location": {
    "geoTargetConstant": "string"
  },
  "negative": true,
  "qualityInfo": {
    "qualityScore": 0
  },
  "resourceName": "string",
  "status": "UNSPECIFIED",
  "trackingUrlTemplate": "string",
  "type": "UNSPECIFIED",
  "userList": {
    "userList": "string"
  },
  "webpage": {
    "conditions": [
      {
        "argument": "string",
        "operand": "UNSPECIFIED",
        "operator": "UNSPECIFIED"
      }
    ],
    "coveragePercentage": 0,
    "criterionName": "string"
  }
}
```

An ad group criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroup|string|false|none|Immutable. The ad group to which the criterion belongs.|
|ageRange|[GoogleAdsSearchads360V0Common__AgeRangeInfo](#schemagoogleadssearchads360v0common__agerangeinfo)|false|none|Immutable. Age range.|
|bidModifier|number(double)|false|none|The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers.|
|cpcBidMicros|string(int64)|false|none|The CPC (cost-per-click) bid.|
|creationTime|string|false|read-only|Output only. The timestamp when this ad group criterion was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.|
|criterionId|string(int64)|false|read-only|Output only. The ID of the criterion.|
|effectiveCpcBidMicros|string(int64)|false|read-only|Output only. The effective CPC (cost-per-click) bid.|
|engineId|string|false|read-only|Output only. ID of the ad group criterion in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group_criterion.criterion_id" instead.|
|engineStatus|string|false|read-only|Output only. The Engine Status for ad group criterion.|
|finalUrlSuffix|string|false|none|URL template for appending params to final URL.|
|finalUrls|[string]|false|none|The list of possible final URLs after all cross-domain redirects for the ad.|
|gender|[GoogleAdsSearchads360V0Common__GenderInfo](#schemagoogleadssearchads360v0common__genderinfo)|false|none|Immutable. Gender.|
|keyword|[GoogleAdsSearchads360V0Common__KeywordInfo](#schemagoogleadssearchads360v0common__keywordinfo)|false|none|Immutable. Keyword.|
|labels|[string]|false|read-only|Output only. The resource names of labels attached to this ad group criterion.|
|lastModifiedTime|string|false|read-only|Output only. The datetime when this ad group criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.|
|listingGroup|[GoogleAdsSearchads360V0Common__ListingGroupInfo](#schemagoogleadssearchads360v0common__listinggroupinfo)|false|none|Immutable. Listing group.|
|location|[GoogleAdsSearchads360V0Common__LocationInfo](#schemagoogleadssearchads360v0common__locationinfo)|false|none|Immutable. Location.|
|negative|boolean|false|none|Immutable. Whether to target (`false`) or exclude (`true`) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it.|
|qualityInfo|[GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo](#schemagoogleadssearchads360v0resources_adgroupcriterion_qualityinfo)|false|none|Output only. Information regarding the quality of the criterion.|
|resourceName|string|false|none|Immutable. The resource name of the ad group criterion. Ad group criterion resource names have the form: `customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}`|
|status|string|false|none|The status of the criterion. This is the status of the ad group criterion entity, set by the client. Note: UI reports may incorporate additional information that affects whether a criterion is eligible to run. In some cases a criterion that's REMOVED in the API can still show as enabled in the UI. For example, campaigns by default show to users of all age ranges unless excluded. The UI will show each age range as "enabled", since they're eligible to see the ads; but AdGroupCriterion.status will show "removed", since no positive criterion was added.|
|trackingUrlTemplate|string|false|none|The URL template for constructing a tracking URL.|
|type|string|false|read-only|Output only. The type of the criterion.|
|userList|[GoogleAdsSearchads360V0Common__UserListInfo](#schemagoogleadssearchads360v0common__userlistinfo)|false|none|Immutable. User List. The Similar Audiences sunset starts May 2023. Refer to https://ads-developers.googleblog.com/2022/11/announcing-deprecation-and-sunset-of.html for other options.|
|webpage|[GoogleAdsSearchads360V0Common__WebpageInfo](#schemagoogleadssearchads360v0common__webpageinfo)|false|none|Immutable. Webpage|

#### Enumerated Values

|Property|Value|
|---|---|
|engineStatus|UNSPECIFIED|
|engineStatus|UNKNOWN|
|engineStatus|AD_GROUP_CRITERION_ELIGIBLE|
|engineStatus|AD_GROUP_CRITERION_INAPPROPRIATE_FOR_CAMPAIGN|
|engineStatus|AD_GROUP_CRITERION_INVALID_MOBILE_SEARCH|
|engineStatus|AD_GROUP_CRITERION_INVALID_PC_SEARCH|
|engineStatus|AD_GROUP_CRITERION_INVALID_SEARCH|
|engineStatus|AD_GROUP_CRITERION_LOW_SEARCH_VOLUME|
|engineStatus|AD_GROUP_CRITERION_MOBILE_URL_UNDER_REVIEW|
|engineStatus|AD_GROUP_CRITERION_PARTIALLY_INVALID|
|engineStatus|AD_GROUP_CRITERION_TO_BE_ACTIVATED|
|engineStatus|AD_GROUP_CRITERION_UNDER_REVIEW|
|engineStatus|AD_GROUP_CRITERION_NOT_REVIEWED|
|engineStatus|AD_GROUP_CRITERION_ON_HOLD|
|engineStatus|AD_GROUP_CRITERION_PENDING_REVIEW|
|engineStatus|AD_GROUP_CRITERION_PAUSED|
|engineStatus|AD_GROUP_CRITERION_REMOVED|
|engineStatus|AD_GROUP_CRITERION_APPROVED|
|engineStatus|AD_GROUP_CRITERION_DISAPPROVED|
|engineStatus|AD_GROUP_CRITERION_SERVING|
|engineStatus|AD_GROUP_CRITERION_ACCOUNT_PAUSED|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|PAUSED|
|status|REMOVED|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|KEYWORD|
|type|PLACEMENT|
|type|MOBILE_APP_CATEGORY|
|type|MOBILE_APPLICATION|
|type|DEVICE|
|type|LOCATION|
|type|LISTING_GROUP|
|type|AD_SCHEDULE|
|type|AGE_RANGE|
|type|GENDER|
|type|INCOME_RANGE|
|type|PARENTAL_STATUS|
|type|YOUTUBE_VIDEO|
|type|YOUTUBE_CHANNEL|
|type|USER_LIST|
|type|PROXIMITY|
|type|TOPIC|
|type|LISTING_SCOPE|
|type|LANGUAGE|
|type|IP_BLOCK|
|type|CONTENT_LABEL|
|type|CARRIER|
|type|USER_INTEREST|
|type|WEBPAGE|
|type|OPERATING_SYSTEM_VERSION|
|type|APP_PAYMENT_MODEL|
|type|MOBILE_DEVICE|
|type|CUSTOM_AFFINITY|
|type|CUSTOM_INTENT|
|type|LOCATION_GROUP|
|type|CUSTOM_AUDIENCE|
|type|COMBINED_AUDIENCE|
|type|KEYWORD_THEME|
|type|AUDIENCE|
|type|LOCAL_SERVICE_ID|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel">GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__adgroupcriterionlabel"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel"></a>
<a id="tocSgoogleadssearchads360v0resources__adgroupcriterionlabel"></a>
<a id="tocsgoogleadssearchads360v0resources__adgroupcriterionlabel"></a>

```json
{
  "adGroupCriterion": "string",
  "label": "string",
  "resourceName": "string"
}
```

A relationship between an ad group criterion and a label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupCriterion|string|false|none|Immutable. The ad group criterion to which the label is attached.|
|label|string|false|none|Immutable. The label assigned to the ad group criterion.|
|resourceName|string|false|none|Immutable. The resource name of the ad group criterion label. Ad group criterion label resource names have the form: `customers/{customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__AdGroupLabel">GoogleAdsSearchads360V0Resources__AdGroupLabel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__adgrouplabel"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__AdGroupLabel"></a>
<a id="tocSgoogleadssearchads360v0resources__adgrouplabel"></a>
<a id="tocsgoogleadssearchads360v0resources__adgrouplabel"></a>

```json
{
  "adGroup": "string",
  "label": "string",
  "resourceName": "string"
}
```

A relationship between an ad group and a label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroup|string|false|none|Immutable. The ad group to which the label is attached.|
|label|string|false|none|Immutable. The label assigned to the ad group.|
|resourceName|string|false|none|Immutable. The resource name of the ad group label. Ad group label resource names have the form: `customers/{customer_id}/adGroupLabels/{ad_group_id}~{label_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__AgeRangeView">GoogleAdsSearchads360V0Resources__AgeRangeView</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__agerangeview"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__AgeRangeView"></a>
<a id="tocSgoogleadssearchads360v0resources__agerangeview"></a>
<a id="tocsgoogleadssearchads360v0resources__agerangeview"></a>

```json
{
  "resourceName": "string"
}
```

An age range view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|read-only|Output only. The resource name of the age range view. Age range view resource names have the form: `customers/{customer_id}/ageRangeViews/{ad_group_id}~{criterion_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__BiddingStrategy">GoogleAdsSearchads360V0Resources__BiddingStrategy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__biddingstrategy"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__BiddingStrategy"></a>
<a id="tocSgoogleadssearchads360v0resources__biddingstrategy"></a>
<a id="tocsgoogleadssearchads360v0resources__biddingstrategy"></a>

```json
{
  "campaignCount": "string",
  "currencyCode": "string",
  "effectiveCurrencyCode": "string",
  "enhancedCpc": {},
  "id": "string",
  "maximizeConversionValue": {
    "cpcBidCeilingMicros": "string",
    "cpcBidFloorMicros": "string",
    "targetRoas": 0
  },
  "maximizeConversions": {
    "cpcBidCeilingMicros": "string",
    "cpcBidFloorMicros": "string",
    "targetCpaMicros": "string"
  },
  "name": "string",
  "nonRemovedCampaignCount": "string",
  "resourceName": "string",
  "status": "UNSPECIFIED",
  "targetCpa": {
    "cpcBidCeilingMicros": "string",
    "cpcBidFloorMicros": "string",
    "targetCpaMicros": "string"
  },
  "targetImpressionShare": {
    "cpcBidCeilingMicros": "string",
    "location": "UNSPECIFIED",
    "locationFractionMicros": "string"
  },
  "targetOutrankShare": {
    "cpcBidCeilingMicros": "string"
  },
  "targetRoas": {
    "cpcBidCeilingMicros": "string",
    "cpcBidFloorMicros": "string",
    "targetRoas": 0
  },
  "targetSpend": {
    "cpcBidCeilingMicros": "string",
    "targetSpendMicros": "string"
  },
  "type": "UNSPECIFIED"
}
```

A bidding strategy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignCount|string(int64)|false|read-only|Output only. The number of campaigns attached to this bidding strategy. This field is read-only.|
|currencyCode|string|false|none|Immutable. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this currency can be set on creation and defaults to the manager customer's currency. For serving customers, this field cannot be set; all strategies in a serving customer implicitly use the serving customer's currency. In all cases the effective_currency_code field returns the currency used by the strategy.|
|effectiveCurrencyCode|string|false|read-only|Output only. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this is the currency set by the advertiser when creating the strategy. For serving customers, this is the customer's currency_code. Bidding strategy metrics are reported in this currency. This field is read-only.|
|enhancedCpc|[GoogleAdsSearchads360V0Common__EnhancedCpc](#schemagoogleadssearchads360v0common__enhancedcpc)|false|none|A bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely.|
|id|string(int64)|false|read-only|Output only. The ID of the bidding strategy.|
|maximizeConversionValue|[GoogleAdsSearchads360V0Common__MaximizeConversionValue](#schemagoogleadssearchads360v0common__maximizeconversionvalue)|false|none|An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.|
|maximizeConversions|[GoogleAdsSearchads360V0Common__MaximizeConversions](#schemagoogleadssearchads360v0common__maximizeconversions)|false|none|An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.|
|name|string|false|none|The name of the bidding strategy. All bidding strategies within an account must be named distinctly. The length of this string should be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed).|
|nonRemovedCampaignCount|string(int64)|false|read-only|Output only. The number of non-removed campaigns attached to this bidding strategy. This field is read-only.|
|resourceName|string|false|none|Immutable. The resource name of the bidding strategy. Bidding strategy resource names have the form: `customers/{customer_id}/biddingStrategies/{bidding_strategy_id}`|
|status|string|false|read-only|Output only. The status of the bidding strategy. This field is read-only.|
|targetCpa|[GoogleAdsSearchads360V0Common__TargetCpa](#schemagoogleadssearchads360v0common__targetcpa)|false|none|A bidding strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.|
|targetImpressionShare|[GoogleAdsSearchads360V0Common__TargetImpressionShare](#schemagoogleadssearchads360v0common__targetimpressionshare)|false|none|A bidding strategy that automatically optimizes towards a chosen percentage of impressions.|
|targetOutrankShare|[GoogleAdsSearchads360V0Common__TargetOutrankShare](#schemagoogleadssearchads360v0common__targetoutrankshare)|false|none|A bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This field is deprecated. Creating a new bidding strategy with this field or attaching bidding strategies with this field to a campaign will fail. Mutates to strategies that already have this scheme populated are allowed.|
|targetRoas|[GoogleAdsSearchads360V0Common__TargetRoas](#schemagoogleadssearchads360v0common__targetroas)|false|none|A bidding strategy that helps you maximize revenue while averaging a specific target Return On Ad Spend (ROAS).|
|targetSpend|[GoogleAdsSearchads360V0Common__TargetSpend](#schemagoogleadssearchads360v0common__targetspend)|false|none|A bid strategy that sets your bids to help get as many clicks as possible within your budget.|
|type|string|false|read-only|Output only. The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme. This field is read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|REMOVED|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|COMMISSION|
|type|ENHANCED_CPC|
|type|INVALID|
|type|MANUAL_CPA|
|type|MANUAL_CPC|
|type|MANUAL_CPM|
|type|MANUAL_CPV|
|type|MAXIMIZE_CONVERSIONS|
|type|MAXIMIZE_CONVERSION_VALUE|
|type|PAGE_ONE_PROMOTED|
|type|PERCENT_CPC|
|type|TARGET_CPA|
|type|TARGET_CPM|
|type|TARGET_IMPRESSION_SHARE|
|type|TARGET_OUTRANK_SHARE|
|type|TARGET_ROAS|
|type|TARGET_SPEND|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__Campaign">GoogleAdsSearchads360V0Resources__Campaign</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__campaign"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__Campaign"></a>
<a id="tocSgoogleadssearchads360v0resources__campaign"></a>
<a id="tocsgoogleadssearchads360v0resources__campaign"></a>

```json
{
  "adServingOptimizationStatus": "UNSPECIFIED",
  "advertisingChannelSubType": "UNSPECIFIED",
  "advertisingChannelType": "UNSPECIFIED",
  "biddingStrategy": "string",
  "biddingStrategySystemStatus": "UNSPECIFIED",
  "biddingStrategyType": "UNSPECIFIED",
  "campaignBudget": "string",
  "createTime": "string",
  "creationTime": "string",
  "dynamicSearchAdsSetting": {
    "domainName": "string",
    "languageCode": "string",
    "useSuppliedUrlsOnly": true
  },
  "endDate": "string",
  "engineId": "string",
  "excludedParentAssetFieldTypes": [
    "UNSPECIFIED"
  ],
  "finalUrlSuffix": "string",
  "frequencyCaps": [
    {}
  ],
  "geoTargetTypeSetting": {
    "negativeGeoTargetType": "UNSPECIFIED",
    "positiveGeoTargetType": "UNSPECIFIED"
  },
  "id": "string",
  "labels": [
    "string"
  ],
  "lastModifiedTime": "string",
  "manualCpa": {},
  "manualCpc": {
    "enhancedCpcEnabled": true
  },
  "manualCpm": {},
  "maximizeConversionValue": {
    "cpcBidCeilingMicros": "string",
    "cpcBidFloorMicros": "string",
    "targetRoas": 0
  },
  "maximizeConversions": {
    "cpcBidCeilingMicros": "string",
    "cpcBidFloorMicros": "string",
    "targetCpaMicros": "string"
  },
  "name": "string",
  "networkSettings": {
    "targetContentNetwork": true,
    "targetGoogleSearch": true,
    "targetPartnerSearchNetwork": true,
    "targetSearchNetwork": true
  },
  "optimizationGoalSetting": {
    "optimizationGoalTypes": [
      "UNSPECIFIED"
    ]
  },
  "percentCpc": {
    "cpcBidCeilingMicros": "string",
    "enhancedCpcEnabled": true
  },
  "realTimeBiddingSetting": {
    "optIn": true
  },
  "resourceName": "string",
  "selectiveOptimization": {
    "conversionActions": [
      "string"
    ]
  },
  "servingStatus": "UNSPECIFIED",
  "shoppingSetting": {
    "campaignPriority": 0,
    "enableLocal": true,
    "feedLabel": "string",
    "merchantId": "string",
    "salesCountry": "string",
    "useVehicleInventory": true
  },
  "startDate": "string",
  "status": "UNSPECIFIED",
  "targetCpa": {
    "cpcBidCeilingMicros": "string",
    "cpcBidFloorMicros": "string",
    "targetCpaMicros": "string"
  },
  "targetCpm": {},
  "targetImpressionShare": {
    "cpcBidCeilingMicros": "string",
    "location": "UNSPECIFIED",
    "locationFractionMicros": "string"
  },
  "targetRoas": {
    "cpcBidCeilingMicros": "string",
    "cpcBidFloorMicros": "string",
    "targetRoas": 0
  },
  "targetSpend": {
    "cpcBidCeilingMicros": "string",
    "targetSpendMicros": "string"
  },
  "trackingSetting": {
    "trackingUrl": "string"
  },
  "trackingUrlTemplate": "string",
  "urlCustomParameters": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "urlExpansionOptOut": true
}
```

A campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adServingOptimizationStatus|string|false|none|The ad serving optimization status of the campaign.|
|advertisingChannelSubType|string|false|none|Immutable. Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed.|
|advertisingChannelType|string|false|none|Immutable. The primary serving target for ads within the campaign. The targeting options can be refined in `network_settings`. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed.|
|biddingStrategy|string|false|none|Portfolio bidding strategy used by campaign.|
|biddingStrategySystemStatus|string|false|read-only|Output only. The system status of the campaign's bidding strategy.|
|biddingStrategyType|string|false|read-only|Output only. The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the `bidding_strategy` field to create a portfolio bidding strategy. This field is read-only.|
|campaignBudget|string|false|none|The budget of the campaign.|
|createTime|string|false|read-only|Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. create_time will be deprecated in v1. Use creation_time instead.|
|creationTime|string|false|read-only|Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.|
|dynamicSearchAdsSetting|[GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting](#schemagoogleadssearchads360v0resources_campaign_dynamicsearchadssetting)|false|none|The setting for controlling Dynamic Search Ads (DSA).|
|endDate|string|false|none|The last day of the campaign in serving customer's timezone in YYYY-MM-DD format. On create, defaults to 2037-12-30, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 2037-12-30.|
|engineId|string|false|read-only|Output only. ID of the campaign in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "campaign.id" instead.|
|excludedParentAssetFieldTypes|[string]|false|none|The asset field types that should be excluded from this campaign. Asset links with these field types will not be inherited by this campaign from the upper level.|
|finalUrlSuffix|string|false|none|Suffix used to append query parameters to landing pages that are served with parallel tracking.|
|frequencyCaps|[[GoogleAdsSearchads360V0Common__FrequencyCapEntry](#schemagoogleadssearchads360v0common__frequencycapentry)]|false|none|A list that limits how often each user will see this campaign's ads.|
|geoTargetTypeSetting|[GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting](#schemagoogleadssearchads360v0resources_campaign_geotargettypesetting)|false|none|The setting for ads geotargeting.|
|id|string(int64)|false|read-only|Output only. The ID of the campaign.|
|labels|[string]|false|read-only|Output only. The resource names of labels attached to this campaign.|
|lastModifiedTime|string|false|read-only|Output only. The datetime when this campaign was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.|
|manualCpa|[GoogleAdsSearchads360V0Common__ManualCpa](#schemagoogleadssearchads360v0common__manualcpa)|false|none|Standard Manual CPA bidding strategy. Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action. Supported only for Local Services campaigns.|
|manualCpc|[GoogleAdsSearchads360V0Common__ManualCpc](#schemagoogleadssearchads360v0common__manualcpc)|false|none|Standard Manual CPC bidding strategy. Manual click-based bidding where user pays per click.|
|manualCpm|[GoogleAdsSearchads360V0Common__ManualCpm](#schemagoogleadssearchads360v0common__manualcpm)|false|none|Standard Manual CPM bidding strategy. Manual impression-based bidding where user pays per thousand impressions.|
|maximizeConversionValue|[GoogleAdsSearchads360V0Common__MaximizeConversionValue](#schemagoogleadssearchads360v0common__maximizeconversionvalue)|false|none|Standard Maximize Conversion Value bidding strategy that automatically sets bids to maximize revenue while spending your budget.|
|maximizeConversions|[GoogleAdsSearchads360V0Common__MaximizeConversions](#schemagoogleadssearchads360v0common__maximizeconversions)|false|none|Standard Maximize Conversions bidding strategy that automatically maximizes number of conversions while spending your budget.|
|name|string|false|none|The name of the campaign. This field is required and should not be empty when creating new campaigns. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters.|
|networkSettings|[GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings](#schemagoogleadssearchads360v0resources_campaign_networksettings)|false|none|The network settings for the campaign.|
|optimizationGoalSetting|[GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting](#schemagoogleadssearchads360v0resources_campaign_optimizationgoalsetting)|false|none|Optimization goal setting for this campaign, which includes a set of optimization goal types.|
|percentCpc|[GoogleAdsSearchads360V0Common__PercentCpc](#schemagoogleadssearchads360v0common__percentcpc)|false|none|Standard Percent Cpc bidding strategy where bids are a fraction of the advertised price for some good or service.|
|realTimeBiddingSetting|[GoogleAdsSearchads360V0Common__RealTimeBiddingSetting](#schemagoogleadssearchads360v0common__realtimebiddingsetting)|false|none|Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network.|
|resourceName|string|false|none|Immutable. The resource name of the campaign. Campaign resource names have the form: `customers/{customer_id}/campaigns/{campaign_id}`|
|selectiveOptimization|[GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization](#schemagoogleadssearchads360v0resources_campaign_selectiveoptimization)|false|none|Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards.|
|servingStatus|string|false|read-only|Output only. The ad serving status of the campaign.|
|shoppingSetting|[GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting](#schemagoogleadssearchads360v0resources_campaign_shoppingsetting)|false|none|The setting for controlling Shopping campaigns.|
|startDate|string|false|none|The date when campaign started in serving customer's timezone in YYYY-MM-DD format.|
|status|string|false|none|The status of the campaign. When a new campaign is added, the status defaults to ENABLED.|
|targetCpa|[GoogleAdsSearchads360V0Common__TargetCpa](#schemagoogleadssearchads360v0common__targetcpa)|false|none|Standard Target CPA bidding strategy that automatically sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.|
|targetCpm|[GoogleAdsSearchads360V0Common__TargetCpm](#schemagoogleadssearchads360v0common__targetcpm)|false|none|A bidding strategy that automatically optimizes cost per thousand impressions.|
|targetImpressionShare|[GoogleAdsSearchads360V0Common__TargetImpressionShare](#schemagoogleadssearchads360v0common__targetimpressionshare)|false|none|Target Impression Share bidding strategy. An automated bidding strategy that sets bids to achieve a chosen percentage of impressions.|
|targetRoas|[GoogleAdsSearchads360V0Common__TargetRoas](#schemagoogleadssearchads360v0common__targetroas)|false|none|Standard Target ROAS bidding strategy that automatically maximizes revenue while averaging a specific target return on ad spend (ROAS).|
|targetSpend|[GoogleAdsSearchads360V0Common__TargetSpend](#schemagoogleadssearchads360v0common__targetspend)|false|none|Standard Target Spend bidding strategy that automatically sets your bids to help get as many clicks as possible within your budget.|
|trackingSetting|[GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting](#schemagoogleadssearchads360v0resources_campaign_trackingsetting)|false|none|Output only. Campaign-level settings for tracking information.|
|trackingUrlTemplate|string|false|none|The URL template for constructing a tracking URL.|
|urlCustomParameters|[[GoogleAdsSearchads360V0Common__CustomParameter](#schemagoogleadssearchads360v0common__customparameter)]|false|none|The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.|
|urlExpansionOptOut|boolean|false|none|Represents opting out of URL expansion to more targeted URLs. If opted out (true), only the final URLs in the asset group or URLs specified in the advertiser's Google Merchant Center or business data feeds are targeted. If opted in (false), the entire domain will be targeted. This field can only be set for Performance Max campaigns, where the default value is false.|

#### Enumerated Values

|Property|Value|
|---|---|
|adServingOptimizationStatus|UNSPECIFIED|
|adServingOptimizationStatus|UNKNOWN|
|adServingOptimizationStatus|OPTIMIZE|
|adServingOptimizationStatus|CONVERSION_OPTIMIZE|
|adServingOptimizationStatus|ROTATE|
|adServingOptimizationStatus|ROTATE_INDEFINITELY|
|adServingOptimizationStatus|UNAVAILABLE|
|advertisingChannelSubType|UNSPECIFIED|
|advertisingChannelSubType|UNKNOWN|
|advertisingChannelSubType|SEARCH_MOBILE_APP|
|advertisingChannelSubType|DISPLAY_MOBILE_APP|
|advertisingChannelSubType|SEARCH_EXPRESS|
|advertisingChannelSubType|DISPLAY_EXPRESS|
|advertisingChannelSubType|SHOPPING_SMART_ADS|
|advertisingChannelSubType|DISPLAY_GMAIL_AD|
|advertisingChannelSubType|DISPLAY_SMART_CAMPAIGN|
|advertisingChannelSubType|VIDEO_OUTSTREAM|
|advertisingChannelSubType|VIDEO_ACTION|
|advertisingChannelSubType|VIDEO_NON_SKIPPABLE|
|advertisingChannelSubType|APP_CAMPAIGN|
|advertisingChannelSubType|APP_CAMPAIGN_FOR_ENGAGEMENT|
|advertisingChannelSubType|LOCAL_CAMPAIGN|
|advertisingChannelSubType|SHOPPING_COMPARISON_LISTING_ADS|
|advertisingChannelSubType|SMART_CAMPAIGN|
|advertisingChannelSubType|VIDEO_SEQUENCE|
|advertisingChannelSubType|APP_CAMPAIGN_FOR_PRE_REGISTRATION|
|advertisingChannelSubType|VIDEO_REACH_TARGET_FREQUENCY|
|advertisingChannelSubType|TRAVEL_ACTIVITIES|
|advertisingChannelType|UNSPECIFIED|
|advertisingChannelType|UNKNOWN|
|advertisingChannelType|SEARCH|
|advertisingChannelType|DISPLAY|
|advertisingChannelType|SHOPPING|
|advertisingChannelType|HOTEL|
|advertisingChannelType|VIDEO|
|advertisingChannelType|MULTI_CHANNEL|
|advertisingChannelType|LOCAL|
|advertisingChannelType|SMART|
|advertisingChannelType|PERFORMANCE_MAX|
|advertisingChannelType|LOCAL_SERVICES|
|advertisingChannelType|DISCOVERY|
|advertisingChannelType|TRAVEL|
|biddingStrategySystemStatus|UNSPECIFIED|
|biddingStrategySystemStatus|UNKNOWN|
|biddingStrategySystemStatus|ENABLED|
|biddingStrategySystemStatus|LEARNING_NEW|
|biddingStrategySystemStatus|LEARNING_SETTING_CHANGE|
|biddingStrategySystemStatus|LEARNING_BUDGET_CHANGE|
|biddingStrategySystemStatus|LEARNING_COMPOSITION_CHANGE|
|biddingStrategySystemStatus|LEARNING_CONVERSION_TYPE_CHANGE|
|biddingStrategySystemStatus|LEARNING_CONVERSION_SETTING_CHANGE|
|biddingStrategySystemStatus|LIMITED_BY_CPC_BID_CEILING|
|biddingStrategySystemStatus|LIMITED_BY_CPC_BID_FLOOR|
|biddingStrategySystemStatus|LIMITED_BY_DATA|
|biddingStrategySystemStatus|LIMITED_BY_BUDGET|
|biddingStrategySystemStatus|LIMITED_BY_LOW_PRIORITY_SPEND|
|biddingStrategySystemStatus|LIMITED_BY_LOW_QUALITY|
|biddingStrategySystemStatus|LIMITED_BY_INVENTORY|
|biddingStrategySystemStatus|MISCONFIGURED_ZERO_ELIGIBILITY|
|biddingStrategySystemStatus|MISCONFIGURED_CONVERSION_TYPES|
|biddingStrategySystemStatus|MISCONFIGURED_CONVERSION_SETTINGS|
|biddingStrategySystemStatus|MISCONFIGURED_SHARED_BUDGET|
|biddingStrategySystemStatus|MISCONFIGURED_STRATEGY_TYPE|
|biddingStrategySystemStatus|PAUSED|
|biddingStrategySystemStatus|UNAVAILABLE|
|biddingStrategySystemStatus|MULTIPLE_LEARNING|
|biddingStrategySystemStatus|MULTIPLE_LIMITED|
|biddingStrategySystemStatus|MULTIPLE_MISCONFIGURED|
|biddingStrategySystemStatus|MULTIPLE|
|biddingStrategyType|UNSPECIFIED|
|biddingStrategyType|UNKNOWN|
|biddingStrategyType|COMMISSION|
|biddingStrategyType|ENHANCED_CPC|
|biddingStrategyType|INVALID|
|biddingStrategyType|MANUAL_CPA|
|biddingStrategyType|MANUAL_CPC|
|biddingStrategyType|MANUAL_CPM|
|biddingStrategyType|MANUAL_CPV|
|biddingStrategyType|MAXIMIZE_CONVERSIONS|
|biddingStrategyType|MAXIMIZE_CONVERSION_VALUE|
|biddingStrategyType|PAGE_ONE_PROMOTED|
|biddingStrategyType|PERCENT_CPC|
|biddingStrategyType|TARGET_CPA|
|biddingStrategyType|TARGET_CPM|
|biddingStrategyType|TARGET_IMPRESSION_SHARE|
|biddingStrategyType|TARGET_OUTRANK_SHARE|
|biddingStrategyType|TARGET_ROAS|
|biddingStrategyType|TARGET_SPEND|
|excludedParentAssetFieldTypes|UNSPECIFIED|
|excludedParentAssetFieldTypes|UNKNOWN|
|excludedParentAssetFieldTypes|HEADLINE|
|excludedParentAssetFieldTypes|DESCRIPTION|
|excludedParentAssetFieldTypes|MANDATORY_AD_TEXT|
|excludedParentAssetFieldTypes|MARKETING_IMAGE|
|excludedParentAssetFieldTypes|MEDIA_BUNDLE|
|excludedParentAssetFieldTypes|YOUTUBE_VIDEO|
|excludedParentAssetFieldTypes|BOOK_ON_GOOGLE|
|excludedParentAssetFieldTypes|LEAD_FORM|
|excludedParentAssetFieldTypes|PROMOTION|
|excludedParentAssetFieldTypes|CALLOUT|
|excludedParentAssetFieldTypes|STRUCTURED_SNIPPET|
|excludedParentAssetFieldTypes|SITELINK|
|excludedParentAssetFieldTypes|MOBILE_APP|
|excludedParentAssetFieldTypes|HOTEL_CALLOUT|
|excludedParentAssetFieldTypes|CALL|
|excludedParentAssetFieldTypes|PRICE|
|excludedParentAssetFieldTypes|LONG_HEADLINE|
|excludedParentAssetFieldTypes|BUSINESS_NAME|
|excludedParentAssetFieldTypes|SQUARE_MARKETING_IMAGE|
|excludedParentAssetFieldTypes|PORTRAIT_MARKETING_IMAGE|
|excludedParentAssetFieldTypes|LOGO|
|excludedParentAssetFieldTypes|LANDSCAPE_LOGO|
|excludedParentAssetFieldTypes|VIDEO|
|excludedParentAssetFieldTypes|CALL_TO_ACTION_SELECTION|
|excludedParentAssetFieldTypes|AD_IMAGE|
|excludedParentAssetFieldTypes|BUSINESS_LOGO|
|excludedParentAssetFieldTypes|HOTEL_PROPERTY|
|servingStatus|UNSPECIFIED|
|servingStatus|UNKNOWN|
|servingStatus|SERVING|
|servingStatus|NONE|
|servingStatus|ENDED|
|servingStatus|PENDING|
|servingStatus|SUSPENDED|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|PAUSED|
|status|REMOVED|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__CampaignAudienceView">GoogleAdsSearchads360V0Resources__CampaignAudienceView</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__campaignaudienceview"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__CampaignAudienceView"></a>
<a id="tocSgoogleadssearchads360v0resources__campaignaudienceview"></a>
<a id="tocsgoogleadssearchads360v0resources__campaignaudienceview"></a>

```json
{
  "resourceName": "string"
}
```

A campaign audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated by campaign and audience criterion. This view only includes audiences attached at the campaign level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|read-only|Output only. The resource name of the campaign audience view. Campaign audience view resource names have the form: `customers/{customer_id}/campaignAudienceViews/{campaign_id}~{criterion_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__CampaignBudget">GoogleAdsSearchads360V0Resources__CampaignBudget</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__campaignbudget"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__CampaignBudget"></a>
<a id="tocSgoogleadssearchads360v0resources__campaignbudget"></a>
<a id="tocsgoogleadssearchads360v0resources__campaignbudget"></a>

```json
{
  "amountMicros": "string",
  "deliveryMethod": "UNSPECIFIED",
  "period": "UNSPECIFIED",
  "resourceName": "string"
}
```

A campaign budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountMicros|string(int64)|false|none|The amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit. Monthly spend is capped at 30.4 times this amount.|
|deliveryMethod|string|false|none|The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation.|
|period|string|false|none|Immutable. Period over which to spend the budget. Defaults to DAILY if not specified.|
|resourceName|string|false|none|Immutable. The resource name of the campaign budget. Campaign budget resource names have the form: `customers/{customer_id}/campaignBudgets/{campaign_budget_id}`|

#### Enumerated Values

|Property|Value|
|---|---|
|deliveryMethod|UNSPECIFIED|
|deliveryMethod|UNKNOWN|
|deliveryMethod|STANDARD|
|deliveryMethod|ACCELERATED|
|period|UNSPECIFIED|
|period|UNKNOWN|
|period|DAILY|
|period|FIXED_DAILY|
|period|CUSTOM_PERIOD|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__CampaignCriterion">GoogleAdsSearchads360V0Resources__CampaignCriterion</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__campaigncriterion"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__CampaignCriterion"></a>
<a id="tocSgoogleadssearchads360v0resources__campaigncriterion"></a>
<a id="tocsgoogleadssearchads360v0resources__campaigncriterion"></a>

```json
{
  "ageRange": {
    "type": "UNSPECIFIED"
  },
  "bidModifier": 0,
  "criterionId": "string",
  "device": {
    "type": "UNSPECIFIED"
  },
  "displayName": "string",
  "gender": {
    "type": "UNSPECIFIED"
  },
  "keyword": {
    "matchType": "UNSPECIFIED",
    "text": "string"
  },
  "language": {
    "languageConstant": "string"
  },
  "lastModifiedTime": "string",
  "location": {
    "geoTargetConstant": "string"
  },
  "locationGroup": {
    "feedItemSets": [
      "string"
    ],
    "geoTargetConstants": [
      "string"
    ],
    "radius": "string",
    "radiusUnits": "UNSPECIFIED"
  },
  "negative": true,
  "resourceName": "string",
  "status": "UNSPECIFIED",
  "type": "UNSPECIFIED",
  "userList": {
    "userList": "string"
  },
  "webpage": {
    "conditions": [
      {
        "argument": "string",
        "operand": "UNSPECIFIED",
        "operator": "UNSPECIFIED"
      }
    ],
    "coveragePercentage": 0,
    "criterionName": "string"
  }
}
```

A campaign criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ageRange|[GoogleAdsSearchads360V0Common__AgeRangeInfo](#schemagoogleadssearchads360v0common__agerangeinfo)|false|none|Immutable. Age range.|
|bidModifier|number(float)|false|none|The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type.|
|criterionId|string(int64)|false|read-only|Output only. The ID of the criterion. This field is ignored during mutate.|
|device|[GoogleAdsSearchads360V0Common__DeviceInfo](#schemagoogleadssearchads360v0common__deviceinfo)|false|none|Immutable. Device.|
|displayName|string|false|read-only|Output only. The display name of the criterion. This field is ignored for mutates.|
|gender|[GoogleAdsSearchads360V0Common__GenderInfo](#schemagoogleadssearchads360v0common__genderinfo)|false|none|Immutable. Gender.|
|keyword|[GoogleAdsSearchads360V0Common__KeywordInfo](#schemagoogleadssearchads360v0common__keywordinfo)|false|none|Immutable. Keyword.|
|language|[GoogleAdsSearchads360V0Common__LanguageInfo](#schemagoogleadssearchads360v0common__languageinfo)|false|none|Immutable. Language.|
|lastModifiedTime|string|false|read-only|Output only. The datetime when this campaign criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.|
|location|[GoogleAdsSearchads360V0Common__LocationInfo](#schemagoogleadssearchads360v0common__locationinfo)|false|none|Immutable. Location.|
|locationGroup|[GoogleAdsSearchads360V0Common__LocationGroupInfo](#schemagoogleadssearchads360v0common__locationgroupinfo)|false|none|Immutable. Location Group|
|negative|boolean|false|none|Immutable. Whether to target (`false`) or exclude (`true`) the criterion.|
|resourceName|string|false|none|Immutable. The resource name of the campaign criterion. Campaign criterion resource names have the form: `customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}`|
|status|string|false|none|The status of the criterion.|
|type|string|false|read-only|Output only. The type of the criterion.|
|userList|[GoogleAdsSearchads360V0Common__UserListInfo](#schemagoogleadssearchads360v0common__userlistinfo)|false|none|Immutable. User List. The Similar Audiences sunset starts May 2023. Refer to https://ads-developers.googleblog.com/2022/11/announcing-deprecation-and-sunset-of.html for other options.|
|webpage|[GoogleAdsSearchads360V0Common__WebpageInfo](#schemagoogleadssearchads360v0common__webpageinfo)|false|none|Immutable. Webpage.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|PAUSED|
|status|REMOVED|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|KEYWORD|
|type|PLACEMENT|
|type|MOBILE_APP_CATEGORY|
|type|MOBILE_APPLICATION|
|type|DEVICE|
|type|LOCATION|
|type|LISTING_GROUP|
|type|AD_SCHEDULE|
|type|AGE_RANGE|
|type|GENDER|
|type|INCOME_RANGE|
|type|PARENTAL_STATUS|
|type|YOUTUBE_VIDEO|
|type|YOUTUBE_CHANNEL|
|type|USER_LIST|
|type|PROXIMITY|
|type|TOPIC|
|type|LISTING_SCOPE|
|type|LANGUAGE|
|type|IP_BLOCK|
|type|CONTENT_LABEL|
|type|CARRIER|
|type|USER_INTEREST|
|type|WEBPAGE|
|type|OPERATING_SYSTEM_VERSION|
|type|APP_PAYMENT_MODEL|
|type|MOBILE_DEVICE|
|type|CUSTOM_AFFINITY|
|type|CUSTOM_INTENT|
|type|LOCATION_GROUP|
|type|CUSTOM_AUDIENCE|
|type|COMBINED_AUDIENCE|
|type|KEYWORD_THEME|
|type|AUDIENCE|
|type|LOCAL_SERVICE_ID|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__CampaignLabel">GoogleAdsSearchads360V0Resources__CampaignLabel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__campaignlabel"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__CampaignLabel"></a>
<a id="tocSgoogleadssearchads360v0resources__campaignlabel"></a>
<a id="tocsgoogleadssearchads360v0resources__campaignlabel"></a>

```json
{
  "campaign": "string",
  "label": "string",
  "resourceName": "string"
}
```

Represents a relationship between a campaign and a label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaign|string|false|none|Immutable. The campaign to which the label is attached.|
|label|string|false|none|Immutable. The label assigned to the campaign.|
|resourceName|string|false|none|Immutable. Name of the resource. Campaign label resource names have the form: `customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__ConversionAction">GoogleAdsSearchads360V0Resources__ConversionAction</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__conversionaction"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__ConversionAction"></a>
<a id="tocSgoogleadssearchads360v0resources__conversionaction"></a>
<a id="tocsgoogleadssearchads360v0resources__conversionaction"></a>

```json
{
  "appId": "string",
  "attributionModelSettings": {
    "attributionModel": "UNSPECIFIED",
    "dataDrivenModelStatus": "UNSPECIFIED"
  },
  "category": "UNSPECIFIED",
  "clickThroughLookbackWindowDays": "string",
  "creationTime": "string",
  "floodlightSettings": {
    "activityGroupTag": "string",
    "activityId": "string",
    "activityTag": "string"
  },
  "id": "string",
  "includeInClientAccountConversionsMetric": true,
  "includeInConversionsMetric": true,
  "name": "string",
  "ownerCustomer": "string",
  "primaryForGoal": true,
  "resourceName": "string",
  "status": "UNSPECIFIED",
  "type": "UNSPECIFIED",
  "valueSettings": {
    "alwaysUseDefaultValue": true,
    "defaultCurrencyCode": "string",
    "defaultValue": 0
  }
}
```

A conversion action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|App ID for an app conversion action.|
|attributionModelSettings|[GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings](#schemagoogleadssearchads360v0resources_conversionaction_attributionmodelsettings)|false|none|Settings related to this conversion action's attribution model.|
|category|string|false|none|The category of conversions reported for this conversion action.|
|clickThroughLookbackWindowDays|string(int64)|false|none|The maximum number of days that may elapse between an interaction (for example, a click) and a conversion event.|
|creationTime|string|false|read-only|Output only. Timestamp of the Floodlight activity's creation, formatted in ISO 8601.|
|floodlightSettings|[GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings](#schemagoogleadssearchads360v0resources_conversionaction_floodlightsettings)|false|none|Output only. Floodlight settings for Floodlight conversion types.|
|id|string(int64)|false|read-only|Output only. The ID of the conversion action.|
|includeInClientAccountConversionsMetric|boolean|false|none|Whether this conversion action should be included in the "client_account_conversions" metric.|
|includeInConversionsMetric|boolean|false|read-only|Output only. Whether this conversion action should be included in the "conversions" metric.|
|name|string|false|none|The name of the conversion action. This field is required and should not be empty when creating new conversion actions.|
|ownerCustomer|string|false|read-only|Output only. The resource name of the conversion action owner customer, or null if this is a system-defined conversion action.|
|primaryForGoal|boolean|false|none|If a conversion action's primary_for_goal bit is false, the conversion action is non-biddable for all campaigns regardless of their customer conversion goal or campaign conversion goal. However, custom conversion goals do not respect primary_for_goal, so if a campaign has a custom conversion goal configured with a primary_for_goal = false conversion action, that conversion action is still biddable. By default, primary_for_goal will be true if not set. In V9, primary_for_goal can only be set to false after creation through an 'update' operation because it's not declared as optional.|
|resourceName|string|false|none|Immutable. The resource name of the conversion action. Conversion action resource names have the form: `customers/{customer_id}/conversionActions/{conversion_action_id}`|
|status|string|false|none|The status of this conversion action for conversion event accrual.|
|type|string|false|none|Immutable. The type of this conversion action.|
|valueSettings|[GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings](#schemagoogleadssearchads360v0resources_conversionaction_valuesettings)|false|none|Settings related to the value for conversion events associated with this conversion action.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|UNSPECIFIED|
|category|UNKNOWN|
|category|DEFAULT|
|category|PAGE_VIEW|
|category|PURCHASE|
|category|SIGNUP|
|category|LEAD|
|category|DOWNLOAD|
|category|ADD_TO_CART|
|category|BEGIN_CHECKOUT|
|category|SUBSCRIBE_PAID|
|category|PHONE_CALL_LEAD|
|category|IMPORTED_LEAD|
|category|SUBMIT_LEAD_FORM|
|category|BOOK_APPOINTMENT|
|category|REQUEST_QUOTE|
|category|GET_DIRECTIONS|
|category|OUTBOUND_CLICK|
|category|CONTACT|
|category|ENGAGEMENT|
|category|STORE_VISIT|
|category|STORE_SALE|
|category|QUALIFIED_LEAD|
|category|CONVERTED_LEAD|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|REMOVED|
|status|HIDDEN|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|AD_CALL|
|type|CLICK_TO_CALL|
|type|GOOGLE_PLAY_DOWNLOAD|
|type|GOOGLE_PLAY_IN_APP_PURCHASE|
|type|UPLOAD_CALLS|
|type|UPLOAD_CLICKS|
|type|WEBPAGE|
|type|WEBSITE_CALL|
|type|STORE_SALES_DIRECT_UPLOAD|
|type|STORE_SALES|
|type|FIREBASE_ANDROID_FIRST_OPEN|
|type|FIREBASE_ANDROID_IN_APP_PURCHASE|
|type|FIREBASE_ANDROID_CUSTOM|
|type|FIREBASE_IOS_FIRST_OPEN|
|type|FIREBASE_IOS_IN_APP_PURCHASE|
|type|FIREBASE_IOS_CUSTOM|
|type|THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN|
|type|THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE|
|type|THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM|
|type|THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN|
|type|THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE|
|type|THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM|
|type|ANDROID_APP_PRE_REGISTRATION|
|type|ANDROID_INSTALLS_ALL_OTHER_APPS|
|type|FLOODLIGHT_ACTION|
|type|FLOODLIGHT_TRANSACTION|
|type|GOOGLE_HOSTED|
|type|LEAD_FORM_SUBMIT|
|type|SALESFORCE|
|type|SEARCH_ADS_360|
|type|SMART_CAMPAIGN_AD_CLICKS_TO_CALL|
|type|SMART_CAMPAIGN_MAP_CLICKS_TO_CALL|
|type|SMART_CAMPAIGN_MAP_DIRECTIONS|
|type|SMART_CAMPAIGN_TRACKED_CALLS|
|type|STORE_VISITS|
|type|WEBPAGE_CODELESS|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__ConversionTrackingSetting">GoogleAdsSearchads360V0Resources__ConversionTrackingSetting</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__conversiontrackingsetting"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__ConversionTrackingSetting"></a>
<a id="tocSgoogleadssearchads360v0resources__conversiontrackingsetting"></a>
<a id="tocsgoogleadssearchads360v0resources__conversiontrackingsetting"></a>

```json
{
  "acceptedCustomerDataTerms": true,
  "conversionTrackingId": "string",
  "conversionTrackingStatus": "UNSPECIFIED",
  "crossAccountConversionTrackingId": "string",
  "enhancedConversionsForLeadsEnabled": true,
  "googleAdsConversionCustomer": "string",
  "googleAdsCrossAccountConversionTrackingId": "string"
}
```

A collection of customer-wide settings related to Search Ads 360 Conversion Tracking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedCustomerDataTerms|boolean|false|read-only|Output only. Whether the customer has accepted customer data terms. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. For more information, see https://support.google.com/adspolicy/answer/7475709.|
|conversionTrackingId|string(int64)|false|read-only|Output only. The conversion tracking id used for this account. This id doesn't indicate whether the customer uses conversion tracking (conversion_tracking_status does). This field is read-only.|
|conversionTrackingStatus|string|false|read-only|Output only. Conversion tracking status. It indicates whether the customer is using conversion tracking, and who is the conversion tracking owner of this customer. If this customer is using cross-account conversion tracking, the value returned will differ based on the `login-customer-id` of the request.|
|crossAccountConversionTrackingId|string(int64)|false|read-only|Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into cross-account conversion tracking, and it overrides conversion_tracking_id.|
|enhancedConversionsForLeadsEnabled|boolean|false|read-only|Output only. Whether the customer is opted-in for enhanced conversions for leads. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only.|
|googleAdsConversionCustomer|string|false|read-only|Output only. The resource name of the customer where conversions are created and managed. This field is read-only.|
|googleAdsCrossAccountConversionTrackingId|string(int64)|false|read-only|Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into conversion tracking, and it overrides conversion_tracking_id. This field can only be managed through the Google Ads UI. This field is read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|conversionTrackingStatus|UNSPECIFIED|
|conversionTrackingStatus|UNKNOWN|
|conversionTrackingStatus|NOT_CONVERSION_TRACKED|
|conversionTrackingStatus|CONVERSION_TRACKING_MANAGED_BY_SELF|
|conversionTrackingStatus|CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER|
|conversionTrackingStatus|CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__CustomColumn">GoogleAdsSearchads360V0Resources__CustomColumn</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__customcolumn"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__CustomColumn"></a>
<a id="tocSgoogleadssearchads360v0resources__customcolumn"></a>
<a id="tocsgoogleadssearchads360v0resources__customcolumn"></a>

```json
{
  "description": "string",
  "id": "string",
  "name": "string",
  "queryable": true,
  "referencedSystemColumns": [
    "string"
  ],
  "referencesAttributes": true,
  "referencesMetrics": true,
  "resourceName": "string",
  "valueType": "UNSPECIFIED"
}
```

A custom column. See Search Ads 360 custom column at https://support.google.com/sa360/answer/9633916

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|read-only|Output only. User-defined description of the custom column.|
|id|string(int64)|false|read-only|Output only. ID of the custom column.|
|name|string|false|read-only|Output only. User-defined name of the custom column.|
|queryable|boolean|false|read-only|Output only. True when the custom column is available to be used in the query of SearchAds360Service.Search and SearchAds360Service.SearchStream.|
|referencedSystemColumns|[string]|false|read-only|Output only. The list of the referenced system columns of this custom column. For example, A custom column "sum of impressions and clicks" has referenced system columns of {"metrics.clicks", "metrics.impressions"}.|
|referencesAttributes|boolean|false|read-only|Output only. True when the custom column is referring to one or more attributes.|
|referencesMetrics|boolean|false|read-only|Output only. True when the custom column is referring to one or more metrics.|
|resourceName|string|false|none|Immutable. The resource name of the custom column. Custom column resource names have the form: `customers/{customer_id}/customColumns/{custom_column_id}`|
|valueType|string|false|read-only|Output only. The type of the result value of the custom column.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|UNSPECIFIED|
|valueType|UNKNOWN|
|valueType|STRING|
|valueType|INT64|
|valueType|DOUBLE|
|valueType|BOOLEAN|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__Customer">GoogleAdsSearchads360V0Resources__Customer</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__customer"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__Customer"></a>
<a id="tocSgoogleadssearchads360v0resources__customer"></a>
<a id="tocsgoogleadssearchads360v0resources__customer"></a>

```json
{
  "accountStatus": "UNSPECIFIED",
  "accountType": "UNSPECIFIED",
  "autoTaggingEnabled": true,
  "conversionTrackingSetting": {
    "acceptedCustomerDataTerms": true,
    "conversionTrackingId": "string",
    "conversionTrackingStatus": "UNSPECIFIED",
    "crossAccountConversionTrackingId": "string",
    "enhancedConversionsForLeadsEnabled": true,
    "googleAdsConversionCustomer": "string",
    "googleAdsCrossAccountConversionTrackingId": "string"
  },
  "creationTime": "string",
  "currencyCode": "string",
  "descriptiveName": "string",
  "doubleClickCampaignManagerSetting": {
    "advertiserId": "string",
    "networkId": "string",
    "timeZone": "string"
  },
  "engineId": "string",
  "finalUrlSuffix": "string",
  "id": "string",
  "lastModifiedTime": "string",
  "manager": true,
  "resourceName": "string",
  "status": "UNSPECIFIED",
  "timeZone": "string",
  "trackingUrlTemplate": "string"
}
```

A customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountStatus|string|false|read-only|Output only. Account status, for example, Enabled, Paused, Removed, etc.|
|accountType|string|false|read-only|Output only. Engine account type, for example, Google Ads, Microsoft Advertising, Yahoo Japan, Baidu, Facebook, Engine Track, etc.|
|autoTaggingEnabled|boolean|false|none|Whether auto-tagging is enabled for the customer.|
|conversionTrackingSetting|[GoogleAdsSearchads360V0Resources__ConversionTrackingSetting](#schemagoogleadssearchads360v0resources__conversiontrackingsetting)|false|none|Output only. Conversion tracking setting for a customer.|
|creationTime|string|false|read-only|Output only. The timestamp when this customer was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.|
|currencyCode|string|false|none|Immutable. The currency in which the account operates. A subset of the currency codes from the ISO 4217 standard is supported.|
|descriptiveName|string|false|none|Optional, non-unique descriptive name of the customer.|
|doubleClickCampaignManagerSetting|[GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting](#schemagoogleadssearchads360v0resources__doubleclickcampaignmanagersetting)|false|none|Output only. DoubleClick Campaign Manager (DCM) setting for a manager customer.|
|engineId|string|false|read-only|Output only. ID of the account in the external engine account.|
|finalUrlSuffix|string|false|none|The URL template for appending params to the final URL.|
|id|string(int64)|false|read-only|Output only. The ID of the customer.|
|lastModifiedTime|string|false|read-only|Output only. The datetime when this customer was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.|
|manager|boolean|false|read-only|Output only. Whether the customer is a manager.|
|resourceName|string|false|none|Immutable. The resource name of the customer. Customer resource names have the form: `customers/{customer_id}`|
|status|string|false|read-only|Output only. The status of the customer.|
|timeZone|string|false|none|Immutable. The local timezone ID of the customer.|
|trackingUrlTemplate|string|false|none|The URL template for constructing a tracking URL out of parameters.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountStatus|UNSPECIFIED|
|accountStatus|UNKNOWN|
|accountStatus|ENABLED|
|accountStatus|PAUSED|
|accountStatus|SUSPENDED|
|accountStatus|REMOVED|
|accountStatus|DRAFT|
|accountType|UNSPECIFIED|
|accountType|UNKNOWN|
|accountType|BAIDU|
|accountType|ENGINE_TRACK|
|accountType|FACEBOOK|
|accountType|FACEBOOK_GATEWAY|
|accountType|GOOGLE_ADS|
|accountType|MICROSOFT|
|accountType|SEARCH_ADS_360|
|accountType|YAHOO_JAPAN|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|CANCELED|
|status|SUSPENDED|
|status|CLOSED|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__CustomerClient">GoogleAdsSearchads360V0Resources__CustomerClient</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__customerclient"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__CustomerClient"></a>
<a id="tocSgoogleadssearchads360v0resources__customerclient"></a>
<a id="tocsgoogleadssearchads360v0resources__customerclient"></a>

```json
{
  "appliedLabels": [
    "string"
  ],
  "clientCustomer": "string",
  "currencyCode": "string",
  "descriptiveName": "string",
  "hidden": true,
  "id": "string",
  "level": "string",
  "manager": true,
  "resourceName": "string",
  "status": "UNSPECIFIED",
  "testAccount": true,
  "timeZone": "string"
}
```

A link between the given customer and a client customer. CustomerClients only exist for manager customers. All direct and indirect client customers are included, as well as the manager itself.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliedLabels|[string]|false|read-only|Output only. The resource names of the labels owned by the requesting customer that are applied to the client customer. Label resource names have the form: `customers/{customer_id}/labels/{label_id}`|
|clientCustomer|string|false|read-only|Output only. The resource name of the client-customer which is linked to the given customer. Read only.|
|currencyCode|string|false|read-only|Output only. Currency code (for example, 'USD', 'EUR') for the client. Read only.|
|descriptiveName|string|false|read-only|Output only. Descriptive name for the client. Read only.|
|hidden|boolean|false|read-only|Output only. Specifies whether this is a hidden account. Read only.|
|id|string(int64)|false|read-only|Output only. The ID of the client customer. Read only.|
|level|string(int64)|false|read-only|Output only. Distance between given customer and client. For self link, the level value will be 0. Read only.|
|manager|boolean|false|read-only|Output only. Identifies if the client is a manager. Read only.|
|resourceName|string|false|read-only|Output only. The resource name of the customer client. CustomerClient resource names have the form: `customers/{customer_id}/customerClients/{client_customer_id}`|
|status|string|false|read-only|Output only. The status of the client customer. Read only.|
|testAccount|boolean|false|read-only|Output only. Identifies if the client is a test account. Read only.|
|timeZone|string|false|read-only|Output only. Common Locale Data Repository (CLDR) string representation of the time zone of the client, for example, America/Los_Angeles. Read only.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|CANCELED|
|status|SUSPENDED|
|status|CLOSED|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__CustomerManagerLink">GoogleAdsSearchads360V0Resources__CustomerManagerLink</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__customermanagerlink"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__CustomerManagerLink"></a>
<a id="tocSgoogleadssearchads360v0resources__customermanagerlink"></a>
<a id="tocsgoogleadssearchads360v0resources__customermanagerlink"></a>

```json
{
  "managerCustomer": "string",
  "managerLinkId": "string",
  "resourceName": "string",
  "status": "UNSPECIFIED"
}
```

Represents customer-manager link relationship.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managerCustomer|string|false|read-only|Output only. The manager customer linked to the customer.|
|managerLinkId|string(int64)|false|read-only|Output only. ID of the customer-manager link. This field is read only.|
|resourceName|string|false|none|Immutable. Name of the resource. CustomerManagerLink resource names have the form: `customers/{customer_id}/customerManagerLinks/{manager_customer_id}~{manager_link_id}`|
|status|string|false|none|Status of the link between the customer and the manager.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ACTIVE|
|status|INACTIVE|
|status|PENDING|
|status|REFUSED|
|status|CANCELED|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting">GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__doubleclickcampaignmanagersetting"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting"></a>
<a id="tocSgoogleadssearchads360v0resources__doubleclickcampaignmanagersetting"></a>
<a id="tocsgoogleadssearchads360v0resources__doubleclickcampaignmanagersetting"></a>

```json
{
  "advertiserId": "string",
  "networkId": "string",
  "timeZone": "string"
}
```

DoubleClick Campaign Manager (DCM) setting for a manager customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertiserId|string(int64)|false|read-only|Output only. ID of the Campaign Manager advertiser associated with this customer.|
|networkId|string(int64)|false|read-only|Output only. ID of the Campaign Manager network associated with this customer.|
|timeZone|string|false|read-only|Output only. Time zone of the Campaign Manager network associated with this customer in IANA Time Zone Database format, such as America/New_York.|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView">GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__dynamicsearchadssearchtermview"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView"></a>
<a id="tocSgoogleadssearchads360v0resources__dynamicsearchadssearchtermview"></a>
<a id="tocsgoogleadssearchads360v0resources__dynamicsearchadssearchtermview"></a>

```json
{
  "landingPage": "string",
  "resourceName": "string"
}
```

A dynamic search ads search term view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|landingPage|string|false|read-only|Output only. The dynamically selected landing page URL of the impression. This field is read-only.|
|resourceName|string|false|read-only|Output only. The resource name of the dynamic search ads search term view. Dynamic search ads search term view resource names have the form: `customers/{customer_id}/dynamicSearchAdsSearchTermViews/{ad_group_id}~{search_term_fingerprint}~{headline_fingerprint}~{landing_page_fingerprint}~{page_url_fingerprint}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__GenderView">GoogleAdsSearchads360V0Resources__GenderView</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__genderview"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__GenderView"></a>
<a id="tocSgoogleadssearchads360v0resources__genderview"></a>
<a id="tocsgoogleadssearchads360v0resources__genderview"></a>

```json
{
  "resourceName": "string"
}
```

A gender view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|read-only|Output only. The resource name of the gender view. Gender view resource names have the form: `customers/{customer_id}/genderViews/{ad_group_id}~{criterion_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__KeywordView">GoogleAdsSearchads360V0Resources__KeywordView</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__keywordview"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__KeywordView"></a>
<a id="tocSgoogleadssearchads360v0resources__keywordview"></a>
<a id="tocsgoogleadssearchads360v0resources__keywordview"></a>

```json
{
  "resourceName": "string"
}
```

A keyword view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|read-only|Output only. The resource name of the keyword view. Keyword view resource names have the form: `customers/{customer_id}/keywordViews/{ad_group_id}~{criterion_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__Label">GoogleAdsSearchads360V0Resources__Label</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__label"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__Label"></a>
<a id="tocSgoogleadssearchads360v0resources__label"></a>
<a id="tocsgoogleadssearchads360v0resources__label"></a>

```json
{
  "id": "string",
  "name": "string",
  "resourceName": "string",
  "status": "UNSPECIFIED",
  "textLabel": {
    "backgroundColor": "string",
    "description": "string"
  }
}
```

A label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(int64)|false|read-only|Output only. ID of the label. Read only.|
|name|string|false|none|The name of the label. This field is required and should not be empty when creating a new label. The length of this string should be between 1 and 80, inclusive.|
|resourceName|string|false|none|Immutable. Name of the resource. Label resource names have the form: `customers/{customer_id}/labels/{label_id}`|
|status|string|false|read-only|Output only. Status of the label. Read only.|
|textLabel|[GoogleAdsSearchads360V0Common__TextLabel](#schemagoogleadssearchads360v0common__textlabel)|false|none|A type of label displaying text on a colored background.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNSPECIFIED|
|status|UNKNOWN|
|status|ENABLED|
|status|REMOVED|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__LocationView">GoogleAdsSearchads360V0Resources__LocationView</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__locationview"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__LocationView"></a>
<a id="tocSgoogleadssearchads360v0resources__locationview"></a>
<a id="tocsgoogleadssearchads360v0resources__locationview"></a>

```json
{
  "resourceName": "string"
}
```

A location view summarizes the performance of campaigns by Location criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|read-only|Output only. The resource name of the location view. Location view resource names have the form: `customers/{customer_id}/locationViews/{campaign_id}~{criterion_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__ProductGroupView">GoogleAdsSearchads360V0Resources__ProductGroupView</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__productgroupview"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__ProductGroupView"></a>
<a id="tocSgoogleadssearchads360v0resources__productgroupview"></a>
<a id="tocsgoogleadssearchads360v0resources__productgroupview"></a>

```json
{
  "resourceName": "string"
}
```

A product group view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|read-only|Output only. The resource name of the product group view. Product group view resource names have the form: `customers/{customer_id}/productGroupViews/{ad_group_id}~{criterion_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__SearchAds360Field">GoogleAdsSearchads360V0Resources__SearchAds360Field</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__searchads360field"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__SearchAds360Field"></a>
<a id="tocSgoogleadssearchads360v0resources__searchads360field"></a>
<a id="tocsgoogleadssearchads360v0resources__searchads360field"></a>

```json
{
  "attributeResources": [
    "string"
  ],
  "category": "UNSPECIFIED",
  "dataType": "UNSPECIFIED",
  "enumValues": [
    "string"
  ],
  "filterable": true,
  "isRepeated": true,
  "metrics": [
    "string"
  ],
  "name": "string",
  "resourceName": "string",
  "segments": [
    "string"
  ],
  "selectable": true,
  "selectableWith": [
    "string"
  ],
  "sortable": true,
  "typeUrl": "string"
}
```

A field or resource (artifact) used by SearchAds360Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeResources|[string]|false|read-only|Output only. The names of all resources that are selectable with the described artifact. Fields from these resources do not segment metrics when included in search queries. This field is only set for artifacts whose category is RESOURCE.|
|category|string|false|read-only|Output only. The category of the artifact.|
|dataType|string|false|read-only|Output only. This field determines the operators that can be used with the artifact in WHERE clauses.|
|enumValues|[string]|false|read-only|Output only. Values the artifact can assume if it is a field of type ENUM. This field is only set for artifacts of category SEGMENT or ATTRIBUTE.|
|filterable|boolean|false|read-only|Output only. Whether the artifact can be used in a WHERE clause in search queries.|
|isRepeated|boolean|false|read-only|Output only. Whether the field artifact is repeated.|
|metrics|[string]|false|read-only|Output only. This field lists the names of all metrics that are selectable with the described artifact when it is used in the FROM clause. It is only set for artifacts whose category is RESOURCE.|
|name|string|false|read-only|Output only. The name of the artifact.|
|resourceName|string|false|read-only|Output only. The resource name of the artifact. Artifact resource names have the form: `SearchAds360Fields/{name}`|
|segments|[string]|false|read-only|Output only. This field lists the names of all artifacts, whether a segment or another resource, that segment metrics when included in search queries and when the described artifact is used in the FROM clause. It is only set for artifacts whose category is RESOURCE.|
|selectable|boolean|false|read-only|Output only. Whether the artifact can be used in a SELECT clause in search queries.|
|selectableWith|[string]|false|read-only|Output only. The names of all resources, segments, and metrics that are selectable with the described artifact.|
|sortable|boolean|false|read-only|Output only. Whether the artifact can be used in a ORDER BY clause in search queries.|
|typeUrl|string|false|read-only|Output only. The URL of proto describing the artifact's data type.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|UNSPECIFIED|
|category|UNKNOWN|
|category|RESOURCE|
|category|ATTRIBUTE|
|category|SEGMENT|
|category|METRIC|
|dataType|UNSPECIFIED|
|dataType|UNKNOWN|
|dataType|BOOLEAN|
|dataType|DATE|
|dataType|DOUBLE|
|dataType|ENUM|
|dataType|FLOAT|
|dataType|INT32|
|dataType|INT64|
|dataType|MESSAGE|
|dataType|RESOURCE_NAME|
|dataType|STRING|
|dataType|UINT64|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__UserList">GoogleAdsSearchads360V0Resources__UserList</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__userlist"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__UserList"></a>
<a id="tocSgoogleadssearchads360v0resources__userlist"></a>
<a id="tocsgoogleadssearchads360v0resources__userlist"></a>

```json
{
  "id": "string",
  "name": "string",
  "resourceName": "string",
  "type": "UNSPECIFIED"
}
```

A user list. This is a list of users a customer may target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(int64)|false|read-only|Output only. Id of the user list.|
|name|string|false|none|Name of this user list. Depending on its access_reason, the user list name may not be unique (for example, if access_reason=SHARED)|
|resourceName|string|false|none|Immutable. The resource name of the user list. User list resource names have the form: `customers/{customer_id}/userLists/{user_list_id}`|
|type|string|false|read-only|Output only. Type of this list. This field is read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED|
|type|UNKNOWN|
|type|REMARKETING|
|type|LOGICAL|
|type|EXTERNAL_REMARKETING|
|type|RULE_BASED|
|type|SIMILAR|
|type|CRM_BASED|

<h2 id="tocS_GoogleAdsSearchads360V0Resources__WebpageView">GoogleAdsSearchads360V0Resources__WebpageView</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0resources__webpageview"></a>
<a id="schema_GoogleAdsSearchads360V0Resources__WebpageView"></a>
<a id="tocSgoogleadssearchads360v0resources__webpageview"></a>
<a id="tocsgoogleadssearchads360v0resources__webpageview"></a>

```json
{
  "resourceName": "string"
}
```

A webpage view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|read-only|Output only. The resource name of the webpage view. Webpage view resource names have the form: `customers/{customer_id}/webpageViews/{ad_group_id}~{criterion_id}`|

<h2 id="tocS_GoogleAdsSearchads360V0Services__CustomColumnHeader">GoogleAdsSearchads360V0Services__CustomColumnHeader</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0services__customcolumnheader"></a>
<a id="schema_GoogleAdsSearchads360V0Services__CustomColumnHeader"></a>
<a id="tocSgoogleadssearchads360v0services__customcolumnheader"></a>
<a id="tocsgoogleadssearchads360v0services__customcolumnheader"></a>

```json
{
  "id": "string",
  "name": "string",
  "referencesMetrics": true
}
```

Message for custom column header.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(int64)|false|none|The custom column ID.|
|name|string|false|none|The user defined name of the custom column.|
|referencesMetrics|boolean|false|none|True when the custom column references metrics.|

<h2 id="tocS_GoogleAdsSearchads360V0Services__ListCustomColumnsResponse">GoogleAdsSearchads360V0Services__ListCustomColumnsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0services__listcustomcolumnsresponse"></a>
<a id="schema_GoogleAdsSearchads360V0Services__ListCustomColumnsResponse"></a>
<a id="tocSgoogleadssearchads360v0services__listcustomcolumnsresponse"></a>
<a id="tocsgoogleadssearchads360v0services__listcustomcolumnsresponse"></a>

```json
{
  "customColumns": [
    {
      "description": "string",
      "id": "string",
      "name": "string",
      "queryable": true,
      "referencedSystemColumns": [
        "string"
      ],
      "referencesAttributes": true,
      "referencesMetrics": true,
      "resourceName": "string",
      "valueType": "UNSPECIFIED"
    }
  ]
}
```

Response message for fetching all custom columns associated with a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customColumns|[[GoogleAdsSearchads360V0Resources__CustomColumn](#schemagoogleadssearchads360v0resources__customcolumn)]|false|none|The CustomColumns owned by the provided customer.|

<h2 id="tocS_GoogleAdsSearchads360V0Services__SearchAds360Row">GoogleAdsSearchads360V0Services__SearchAds360Row</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0services__searchads360row"></a>
<a id="schema_GoogleAdsSearchads360V0Services__SearchAds360Row"></a>
<a id="tocSgoogleadssearchads360v0services__searchads360row"></a>
<a id="tocsgoogleadssearchads360v0services__searchads360row"></a>

```json
{
  "adGroup": {
    "adRotationMode": "UNSPECIFIED",
    "cpcBidMicros": "string",
    "creationTime": "string",
    "endDate": "string",
    "engineId": "string",
    "engineStatus": "UNSPECIFIED",
    "id": "string",
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "lastModifiedTime": "string",
    "name": "string",
    "resourceName": "string",
    "startDate": "string",
    "status": "UNSPECIFIED",
    "targetingSetting": {
      "targetRestrictions": [
        {
          "bidOnly": true,
          "targetingDimension": "UNSPECIFIED"
        }
      ]
    },
    "type": "UNSPECIFIED"
  },
  "adGroupAd": {
    "ad": {
      "displayUrl": "string",
      "finalUrls": [
        "string"
      ],
      "id": "string",
      "name": "string",
      "resourceName": "string",
      "type": "UNSPECIFIED"
    },
    "creationTime": "string",
    "engineId": "string",
    "engineStatus": "UNSPECIFIED",
    "labels": [
      "string"
    ],
    "lastModifiedTime": "string",
    "resourceName": "string",
    "status": "UNSPECIFIED"
  },
  "adGroupAdLabel": {
    "adGroupAd": "string",
    "label": "string",
    "resourceName": "string"
  },
  "adGroupAudienceView": {
    "resourceName": "string"
  },
  "adGroupBidModifier": {
    "bidModifier": 0,
    "device": {
      "type": "UNSPECIFIED"
    },
    "resourceName": "string"
  },
  "adGroupCriterion": {
    "adGroup": "string",
    "ageRange": {
      "type": "UNSPECIFIED"
    },
    "bidModifier": 0,
    "cpcBidMicros": "string",
    "creationTime": "string",
    "criterionId": "string",
    "effectiveCpcBidMicros": "string",
    "engineId": "string",
    "engineStatus": "UNSPECIFIED",
    "finalUrlSuffix": "string",
    "finalUrls": [
      "string"
    ],
    "gender": {
      "type": "UNSPECIFIED"
    },
    "keyword": {
      "matchType": "UNSPECIFIED",
      "text": "string"
    },
    "labels": [
      "string"
    ],
    "lastModifiedTime": "string",
    "listingGroup": {
      "type": "UNSPECIFIED"
    },
    "location": {
      "geoTargetConstant": "string"
    },
    "negative": true,
    "qualityInfo": {
      "qualityScore": 0
    },
    "resourceName": "string",
    "status": "UNSPECIFIED",
    "trackingUrlTemplate": "string",
    "type": "UNSPECIFIED",
    "userList": {
      "userList": "string"
    },
    "webpage": {
      "conditions": [
        {
          "argument": "string",
          "operand": "UNSPECIFIED",
          "operator": "UNSPECIFIED"
        }
      ],
      "coveragePercentage": 0,
      "criterionName": "string"
    }
  },
  "adGroupCriterionLabel": {
    "adGroupCriterion": "string",
    "label": "string",
    "resourceName": "string"
  },
  "adGroupLabel": {
    "adGroup": "string",
    "label": "string",
    "resourceName": "string"
  },
  "ageRangeView": {
    "resourceName": "string"
  },
  "biddingStrategy": {
    "campaignCount": "string",
    "currencyCode": "string",
    "effectiveCurrencyCode": "string",
    "enhancedCpc": {},
    "id": "string",
    "maximizeConversionValue": {
      "cpcBidCeilingMicros": "string",
      "cpcBidFloorMicros": "string",
      "targetRoas": 0
    },
    "maximizeConversions": {
      "cpcBidCeilingMicros": "string",
      "cpcBidFloorMicros": "string",
      "targetCpaMicros": "string"
    },
    "name": "string",
    "nonRemovedCampaignCount": "string",
    "resourceName": "string",
    "status": "UNSPECIFIED",
    "targetCpa": {
      "cpcBidCeilingMicros": "string",
      "cpcBidFloorMicros": "string",
      "targetCpaMicros": "string"
    },
    "targetImpressionShare": {
      "cpcBidCeilingMicros": "string",
      "location": "UNSPECIFIED",
      "locationFractionMicros": "string"
    },
    "targetOutrankShare": {
      "cpcBidCeilingMicros": "string"
    },
    "targetRoas": {
      "cpcBidCeilingMicros": "string",
      "cpcBidFloorMicros": "string",
      "targetRoas": 0
    },
    "targetSpend": {
      "cpcBidCeilingMicros": "string",
      "targetSpendMicros": "string"
    },
    "type": "UNSPECIFIED"
  },
  "campaign": {
    "adServingOptimizationStatus": "UNSPECIFIED",
    "advertisingChannelSubType": "UNSPECIFIED",
    "advertisingChannelType": "UNSPECIFIED",
    "biddingStrategy": "string",
    "biddingStrategySystemStatus": "UNSPECIFIED",
    "biddingStrategyType": "UNSPECIFIED",
    "campaignBudget": "string",
    "createTime": "string",
    "creationTime": "string",
    "dynamicSearchAdsSetting": {
      "domainName": "string",
      "languageCode": "string",
      "useSuppliedUrlsOnly": true
    },
    "endDate": "string",
    "engineId": "string",
    "excludedParentAssetFieldTypes": [
      "UNSPECIFIED"
    ],
    "finalUrlSuffix": "string",
    "frequencyCaps": [
      {}
    ],
    "geoTargetTypeSetting": {
      "negativeGeoTargetType": "UNSPECIFIED",
      "positiveGeoTargetType": "UNSPECIFIED"
    },
    "id": "string",
    "labels": [
      "string"
    ],
    "lastModifiedTime": "string",
    "manualCpa": {},
    "manualCpc": {
      "enhancedCpcEnabled": true
    },
    "manualCpm": {},
    "maximizeConversionValue": {
      "cpcBidCeilingMicros": "string",
      "cpcBidFloorMicros": "string",
      "targetRoas": 0
    },
    "maximizeConversions": {
      "cpcBidCeilingMicros": "string",
      "cpcBidFloorMicros": "string",
      "targetCpaMicros": "string"
    },
    "name": "string",
    "networkSettings": {
      "targetContentNetwork": true,
      "targetGoogleSearch": true,
      "targetPartnerSearchNetwork": true,
      "targetSearchNetwork": true
    },
    "optimizationGoalSetting": {
      "optimizationGoalTypes": [
        "UNSPECIFIED"
      ]
    },
    "percentCpc": {
      "cpcBidCeilingMicros": "string",
      "enhancedCpcEnabled": true
    },
    "realTimeBiddingSetting": {
      "optIn": true
    },
    "resourceName": "string",
    "selectiveOptimization": {
      "conversionActions": [
        "string"
      ]
    },
    "servingStatus": "UNSPECIFIED",
    "shoppingSetting": {
      "campaignPriority": 0,
      "enableLocal": true,
      "feedLabel": "string",
      "merchantId": "string",
      "salesCountry": "string",
      "useVehicleInventory": true
    },
    "startDate": "string",
    "status": "UNSPECIFIED",
    "targetCpa": {
      "cpcBidCeilingMicros": "string",
      "cpcBidFloorMicros": "string",
      "targetCpaMicros": "string"
    },
    "targetCpm": {},
    "targetImpressionShare": {
      "cpcBidCeilingMicros": "string",
      "location": "UNSPECIFIED",
      "locationFractionMicros": "string"
    },
    "targetRoas": {
      "cpcBidCeilingMicros": "string",
      "cpcBidFloorMicros": "string",
      "targetRoas": 0
    },
    "targetSpend": {
      "cpcBidCeilingMicros": "string",
      "targetSpendMicros": "string"
    },
    "trackingSetting": {
      "trackingUrl": "string"
    },
    "trackingUrlTemplate": "string",
    "urlCustomParameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "urlExpansionOptOut": true
  },
  "campaignAudienceView": {
    "resourceName": "string"
  },
  "campaignBudget": {
    "amountMicros": "string",
    "deliveryMethod": "UNSPECIFIED",
    "period": "UNSPECIFIED",
    "resourceName": "string"
  },
  "campaignCriterion": {
    "ageRange": {
      "type": "UNSPECIFIED"
    },
    "bidModifier": 0,
    "criterionId": "string",
    "device": {
      "type": "UNSPECIFIED"
    },
    "displayName": "string",
    "gender": {
      "type": "UNSPECIFIED"
    },
    "keyword": {
      "matchType": "UNSPECIFIED",
      "text": "string"
    },
    "language": {
      "languageConstant": "string"
    },
    "lastModifiedTime": "string",
    "location": {
      "geoTargetConstant": "string"
    },
    "locationGroup": {
      "feedItemSets": [
        "string"
      ],
      "geoTargetConstants": [
        "string"
      ],
      "radius": "string",
      "radiusUnits": "UNSPECIFIED"
    },
    "negative": true,
    "resourceName": "string",
    "status": "UNSPECIFIED",
    "type": "UNSPECIFIED",
    "userList": {
      "userList": "string"
    },
    "webpage": {
      "conditions": [
        {
          "argument": "string",
          "operand": "UNSPECIFIED",
          "operator": "UNSPECIFIED"
        }
      ],
      "coveragePercentage": 0,
      "criterionName": "string"
    }
  },
  "campaignLabel": {
    "campaign": "string",
    "label": "string",
    "resourceName": "string"
  },
  "conversionAction": {
    "appId": "string",
    "attributionModelSettings": {
      "attributionModel": "UNSPECIFIED",
      "dataDrivenModelStatus": "UNSPECIFIED"
    },
    "category": "UNSPECIFIED",
    "clickThroughLookbackWindowDays": "string",
    "creationTime": "string",
    "floodlightSettings": {
      "activityGroupTag": "string",
      "activityId": "string",
      "activityTag": "string"
    },
    "id": "string",
    "includeInClientAccountConversionsMetric": true,
    "includeInConversionsMetric": true,
    "name": "string",
    "ownerCustomer": "string",
    "primaryForGoal": true,
    "resourceName": "string",
    "status": "UNSPECIFIED",
    "type": "UNSPECIFIED",
    "valueSettings": {
      "alwaysUseDefaultValue": true,
      "defaultCurrencyCode": "string",
      "defaultValue": 0
    }
  },
  "customColumns": [
    {
      "booleanValue": true,
      "doubleValue": 0,
      "floatValue": 0,
      "int64Value": "string",
      "stringValue": "string"
    }
  ],
  "customer": {
    "accountStatus": "UNSPECIFIED",
    "accountType": "UNSPECIFIED",
    "autoTaggingEnabled": true,
    "conversionTrackingSetting": {
      "acceptedCustomerDataTerms": true,
      "conversionTrackingId": "string",
      "conversionTrackingStatus": "UNSPECIFIED",
      "crossAccountConversionTrackingId": "string",
      "enhancedConversionsForLeadsEnabled": true,
      "googleAdsConversionCustomer": "string",
      "googleAdsCrossAccountConversionTrackingId": "string"
    },
    "creationTime": "string",
    "currencyCode": "string",
    "descriptiveName": "string",
    "doubleClickCampaignManagerSetting": {
      "advertiserId": "string",
      "networkId": "string",
      "timeZone": "string"
    },
    "engineId": "string",
    "finalUrlSuffix": "string",
    "id": "string",
    "lastModifiedTime": "string",
    "manager": true,
    "resourceName": "string",
    "status": "UNSPECIFIED",
    "timeZone": "string",
    "trackingUrlTemplate": "string"
  },
  "customerClient": {
    "appliedLabels": [
      "string"
    ],
    "clientCustomer": "string",
    "currencyCode": "string",
    "descriptiveName": "string",
    "hidden": true,
    "id": "string",
    "level": "string",
    "manager": true,
    "resourceName": "string",
    "status": "UNSPECIFIED",
    "testAccount": true,
    "timeZone": "string"
  },
  "customerManagerLink": {
    "managerCustomer": "string",
    "managerLinkId": "string",
    "resourceName": "string",
    "status": "UNSPECIFIED"
  },
  "dynamicSearchAdsSearchTermView": {
    "landingPage": "string",
    "resourceName": "string"
  },
  "genderView": {
    "resourceName": "string"
  },
  "keywordView": {
    "resourceName": "string"
  },
  "label": {
    "id": "string",
    "name": "string",
    "resourceName": "string",
    "status": "UNSPECIFIED",
    "textLabel": {
      "backgroundColor": "string",
      "description": "string"
    }
  },
  "locationView": {
    "resourceName": "string"
  },
  "metrics": {
    "absoluteTopImpressionPercentage": 0,
    "allConversions": 0,
    "allConversionsByConversionDate": 0,
    "allConversionsFromClickToCall": 0,
    "allConversionsFromDirections": 0,
    "allConversionsFromInteractionsRate": 0,
    "allConversionsFromInteractionsValuePerInteraction": 0,
    "allConversionsFromMenu": 0,
    "allConversionsFromOrder": 0,
    "allConversionsFromOtherEngagement": 0,
    "allConversionsFromStoreVisit": 0,
    "allConversionsFromStoreWebsite": 0,
    "allConversionsValue": 0,
    "allConversionsValueByConversionDate": 0,
    "allConversionsValuePerCost": 0,
    "averageCost": 0,
    "averageCpc": 0,
    "averageCpm": 0,
    "clicks": "string",
    "clientAccountConversions": 0,
    "clientAccountConversionsValue": 0,
    "clientAccountViewThroughConversions": "string",
    "contentBudgetLostImpressionShare": 0,
    "contentImpressionShare": 0,
    "contentRankLostImpressionShare": 0,
    "conversions": 0,
    "conversionsByConversionDate": 0,
    "conversionsFromInteractionsRate": 0,
    "conversionsFromInteractionsValuePerInteraction": 0,
    "conversionsValue": 0,
    "conversionsValueByConversionDate": 0,
    "conversionsValuePerCost": 0,
    "costMicros": "string",
    "costPerAllConversions": 0,
    "costPerConversion": 0,
    "costPerCurrentModelAttributedConversion": 0,
    "crossDeviceConversions": 0,
    "crossDeviceConversionsValue": 0,
    "ctr": 0,
    "historicalCreativeQualityScore": "UNSPECIFIED",
    "historicalLandingPageQualityScore": "UNSPECIFIED",
    "historicalQualityScore": "string",
    "historicalSearchPredictedCtr": "UNSPECIFIED",
    "impressions": "string",
    "interactionEventTypes": [
      "UNSPECIFIED"
    ],
    "interactionRate": 0,
    "interactions": "string",
    "invalidClickRate": 0,
    "invalidClicks": "string",
    "mobileFriendlyClicksPercentage": 0,
    "searchAbsoluteTopImpressionShare": 0,
    "searchBudgetLostAbsoluteTopImpressionShare": 0,
    "searchBudgetLostImpressionShare": 0,
    "searchBudgetLostTopImpressionShare": 0,
    "searchClickShare": 0,
    "searchExactMatchImpressionShare": 0,
    "searchImpressionShare": 0,
    "searchRankLostAbsoluteTopImpressionShare": 0,
    "searchRankLostImpressionShare": 0,
    "searchRankLostTopImpressionShare": 0,
    "searchTopImpressionShare": 0,
    "topImpressionPercentage": 0,
    "valuePerAllConversions": 0,
    "valuePerAllConversionsByConversionDate": 0,
    "valuePerConversion": 0,
    "valuePerConversionsByConversionDate": 0,
    "visits": 0
  },
  "productGroupView": {
    "resourceName": "string"
  },
  "segments": {
    "conversionAction": "string",
    "conversionActionCategory": "UNSPECIFIED",
    "conversionActionName": "string",
    "date": "string",
    "dayOfWeek": "UNSPECIFIED",
    "device": "UNSPECIFIED",
    "month": "string",
    "quarter": "string",
    "week": "string",
    "year": 0
  },
  "userList": {
    "id": "string",
    "name": "string",
    "resourceName": "string",
    "type": "UNSPECIFIED"
  },
  "webpageView": {
    "resourceName": "string"
  }
}
```

A returned row from the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroup|[GoogleAdsSearchads360V0Resources__AdGroup](#schemagoogleadssearchads360v0resources__adgroup)|false|none|The ad group referenced in the query.|
|adGroupAd|[GoogleAdsSearchads360V0Resources__AdGroupAd](#schemagoogleadssearchads360v0resources__adgroupad)|false|none|The ad referenced in the query.|
|adGroupAdLabel|[GoogleAdsSearchads360V0Resources__AdGroupAdLabel](#schemagoogleadssearchads360v0resources__adgroupadlabel)|false|none|The ad group ad label referenced in the query.|
|adGroupAudienceView|[GoogleAdsSearchads360V0Resources__AdGroupAudienceView](#schemagoogleadssearchads360v0resources__adgroupaudienceview)|false|none|The ad group audience view referenced in the query.|
|adGroupBidModifier|[GoogleAdsSearchads360V0Resources__AdGroupBidModifier](#schemagoogleadssearchads360v0resources__adgroupbidmodifier)|false|none|The bid modifier referenced in the query.|
|adGroupCriterion|[GoogleAdsSearchads360V0Resources__AdGroupCriterion](#schemagoogleadssearchads360v0resources__adgroupcriterion)|false|none|The criterion referenced in the query.|
|adGroupCriterionLabel|[GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel](#schemagoogleadssearchads360v0resources__adgroupcriterionlabel)|false|none|The ad group criterion label referenced in the query.|
|adGroupLabel|[GoogleAdsSearchads360V0Resources__AdGroupLabel](#schemagoogleadssearchads360v0resources__adgrouplabel)|false|none|The ad group label referenced in the query.|
|ageRangeView|[GoogleAdsSearchads360V0Resources__AgeRangeView](#schemagoogleadssearchads360v0resources__agerangeview)|false|none|The age range view referenced in the query.|
|biddingStrategy|[GoogleAdsSearchads360V0Resources__BiddingStrategy](#schemagoogleadssearchads360v0resources__biddingstrategy)|false|none|The bidding strategy referenced in the query.|
|campaign|[GoogleAdsSearchads360V0Resources__Campaign](#schemagoogleadssearchads360v0resources__campaign)|false|none|The campaign referenced in the query.|
|campaignAudienceView|[GoogleAdsSearchads360V0Resources__CampaignAudienceView](#schemagoogleadssearchads360v0resources__campaignaudienceview)|false|none|The campaign audience view referenced in the query.|
|campaignBudget|[GoogleAdsSearchads360V0Resources__CampaignBudget](#schemagoogleadssearchads360v0resources__campaignbudget)|false|none|The campaign budget referenced in the query.|
|campaignCriterion|[GoogleAdsSearchads360V0Resources__CampaignCriterion](#schemagoogleadssearchads360v0resources__campaigncriterion)|false|none|The campaign criterion referenced in the query.|
|campaignLabel|[GoogleAdsSearchads360V0Resources__CampaignLabel](#schemagoogleadssearchads360v0resources__campaignlabel)|false|none|The campaign label referenced in the query.|
|conversionAction|[GoogleAdsSearchads360V0Resources__ConversionAction](#schemagoogleadssearchads360v0resources__conversionaction)|false|none|The conversion action referenced in the query.|
|customColumns|[[GoogleAdsSearchads360V0Common__Value](#schemagoogleadssearchads360v0common__value)]|false|none|The custom columns.|
|customer|[GoogleAdsSearchads360V0Resources__Customer](#schemagoogleadssearchads360v0resources__customer)|false|none|The customer referenced in the query.|
|customerClient|[GoogleAdsSearchads360V0Resources__CustomerClient](#schemagoogleadssearchads360v0resources__customerclient)|false|none|The CustomerClient referenced in the query.|
|customerManagerLink|[GoogleAdsSearchads360V0Resources__CustomerManagerLink](#schemagoogleadssearchads360v0resources__customermanagerlink)|false|none|The CustomerManagerLink referenced in the query.|
|dynamicSearchAdsSearchTermView|[GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView](#schemagoogleadssearchads360v0resources__dynamicsearchadssearchtermview)|false|none|The dynamic search ads search term view referenced in the query.|
|genderView|[GoogleAdsSearchads360V0Resources__GenderView](#schemagoogleadssearchads360v0resources__genderview)|false|none|The gender view referenced in the query.|
|keywordView|[GoogleAdsSearchads360V0Resources__KeywordView](#schemagoogleadssearchads360v0resources__keywordview)|false|none|The keyword view referenced in the query.|
|label|[GoogleAdsSearchads360V0Resources__Label](#schemagoogleadssearchads360v0resources__label)|false|none|The label referenced in the query.|
|locationView|[GoogleAdsSearchads360V0Resources__LocationView](#schemagoogleadssearchads360v0resources__locationview)|false|none|The location view referenced in the query.|
|metrics|[GoogleAdsSearchads360V0Common__Metrics](#schemagoogleadssearchads360v0common__metrics)|false|none|The metrics.|
|productGroupView|[GoogleAdsSearchads360V0Resources__ProductGroupView](#schemagoogleadssearchads360v0resources__productgroupview)|false|none|The product group view referenced in the query.|
|segments|[GoogleAdsSearchads360V0Common__Segments](#schemagoogleadssearchads360v0common__segments)|false|none|The segments.|
|userList|[GoogleAdsSearchads360V0Resources__UserList](#schemagoogleadssearchads360v0resources__userlist)|false|none|The user list referenced in the query.|
|webpageView|[GoogleAdsSearchads360V0Resources__WebpageView](#schemagoogleadssearchads360v0resources__webpageview)|false|none|The webpage view referenced in the query.|

<h2 id="tocS_GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest">GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0services__searchsearchads360fieldsrequest"></a>
<a id="schema_GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest"></a>
<a id="tocSgoogleadssearchads360v0services__searchsearchads360fieldsrequest"></a>
<a id="tocsgoogleadssearchads360v0services__searchsearchads360fieldsrequest"></a>

```json
{
  "pageSize": 0,
  "pageToken": "string",
  "query": "string"
}
```

Request message for SearchAds360FieldService.SearchSearchAds360Fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageSize|integer(int32)|false|none|Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.|
|pageToken|string|false|none|Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.|
|query|string|false|none|Required. The query string.|

<h2 id="tocS_GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse">GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0services__searchsearchads360fieldsresponse"></a>
<a id="schema_GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse"></a>
<a id="tocSgoogleadssearchads360v0services__searchsearchads360fieldsresponse"></a>
<a id="tocsgoogleadssearchads360v0services__searchsearchads360fieldsresponse"></a>

```json
{
  "nextPageToken": "string",
  "results": [
    {
      "attributeResources": [
        "string"
      ],
      "category": "UNSPECIFIED",
      "dataType": "UNSPECIFIED",
      "enumValues": [
        "string"
      ],
      "filterable": true,
      "isRepeated": true,
      "metrics": [
        "string"
      ],
      "name": "string",
      "resourceName": "string",
      "segments": [
        "string"
      ],
      "selectable": true,
      "selectableWith": [
        "string"
      ],
      "sortable": true,
      "typeUrl": "string"
    }
  ],
  "totalResultsCount": "string"
}
```

Response message for SearchAds360FieldService.SearchSearchAds360Fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page.|
|results|[[GoogleAdsSearchads360V0Resources__SearchAds360Field](#schemagoogleadssearchads360v0resources__searchads360field)]|false|none|The list of fields that matched the query.|
|totalResultsCount|string(int64)|false|none|Total number of results that match the query ignoring the LIMIT clause.|

<h2 id="tocS_GoogleAdsSearchads360V0Services__SearchSearchAds360Request">GoogleAdsSearchads360V0Services__SearchSearchAds360Request</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0services__searchsearchads360request"></a>
<a id="schema_GoogleAdsSearchads360V0Services__SearchSearchAds360Request"></a>
<a id="tocSgoogleadssearchads360v0services__searchsearchads360request"></a>
<a id="tocsgoogleadssearchads360v0services__searchsearchads360request"></a>

```json
{
  "pageSize": 0,
  "pageToken": "string",
  "query": "string",
  "returnTotalResultsCount": true,
  "summaryRowSetting": "UNSPECIFIED",
  "validateOnly": true
}
```

Request message for SearchAds360Service.Search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageSize|integer(int32)|false|none|Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.|
|pageToken|string|false|none|Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.|
|query|string|false|none|Required. The query string.|
|returnTotalResultsCount|boolean|false|none|If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false.|
|summaryRowSetting|string|false|none|Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned.|
|validateOnly|boolean|false|none|If true, the request is validated but not executed.|

#### Enumerated Values

|Property|Value|
|---|---|
|summaryRowSetting|UNSPECIFIED|
|summaryRowSetting|UNKNOWN|
|summaryRowSetting|NO_SUMMARY_ROW|
|summaryRowSetting|SUMMARY_ROW_WITH_RESULTS|
|summaryRowSetting|SUMMARY_ROW_ONLY|

<h2 id="tocS_GoogleAdsSearchads360V0Services__SearchSearchAds360Response">GoogleAdsSearchads360V0Services__SearchSearchAds360Response</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0services__searchsearchads360response"></a>
<a id="schema_GoogleAdsSearchads360V0Services__SearchSearchAds360Response"></a>
<a id="tocSgoogleadssearchads360v0services__searchsearchads360response"></a>
<a id="tocsgoogleadssearchads360v0services__searchsearchads360response"></a>

```json
{
  "customColumnHeaders": [
    {
      "id": "string",
      "name": "string",
      "referencesMetrics": true
    }
  ],
  "fieldMask": "string",
  "nextPageToken": "string",
  "results": [
    {
      "adGroup": {
        "adRotationMode": "UNSPECIFIED",
        "cpcBidMicros": "string",
        "creationTime": "string",
        "endDate": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "id": "string",
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "lastModifiedTime": "string",
        "name": "string",
        "resourceName": "string",
        "startDate": "string",
        "status": "UNSPECIFIED",
        "targetingSetting": {
          "targetRestrictions": [
            {
              "bidOnly": true,
              "targetingDimension": "UNSPECIFIED"
            }
          ]
        },
        "type": "UNSPECIFIED"
      },
      "adGroupAd": {
        "ad": {
          "displayUrl": "string",
          "finalUrls": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "resourceName": "string",
          "type": "UNSPECIFIED"
        },
        "creationTime": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED"
      },
      "adGroupAdLabel": {
        "adGroupAd": "string",
        "label": "string",
        "resourceName": "string"
      },
      "adGroupAudienceView": {
        "resourceName": "string"
      },
      "adGroupBidModifier": {
        "bidModifier": 0,
        "device": {
          "type": "UNSPECIFIED"
        },
        "resourceName": "string"
      },
      "adGroupCriterion": {
        "adGroup": "string",
        "ageRange": {
          "type": "UNSPECIFIED"
        },
        "bidModifier": 0,
        "cpcBidMicros": "string",
        "creationTime": "string",
        "criterionId": "string",
        "effectiveCpcBidMicros": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "finalUrlSuffix": "string",
        "finalUrls": [
          "string"
        ],
        "gender": {
          "type": "UNSPECIFIED"
        },
        "keyword": {
          "matchType": "UNSPECIFIED",
          "text": "string"
        },
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "listingGroup": {
          "type": "UNSPECIFIED"
        },
        "location": {
          "geoTargetConstant": "string"
        },
        "negative": true,
        "qualityInfo": {
          "qualityScore": 0
        },
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "trackingUrlTemplate": "string",
        "type": "UNSPECIFIED",
        "userList": {
          "userList": "string"
        },
        "webpage": {
          "conditions": [
            {
              "argument": "string",
              "operand": "UNSPECIFIED",
              "operator": "UNSPECIFIED"
            }
          ],
          "coveragePercentage": 0,
          "criterionName": "string"
        }
      },
      "adGroupCriterionLabel": {
        "adGroupCriterion": "string",
        "label": "string",
        "resourceName": "string"
      },
      "adGroupLabel": {
        "adGroup": "string",
        "label": "string",
        "resourceName": "string"
      },
      "ageRangeView": {
        "resourceName": "string"
      },
      "biddingStrategy": {
        "campaignCount": "string",
        "currencyCode": "string",
        "effectiveCurrencyCode": "string",
        "enhancedCpc": {},
        "id": "string",
        "maximizeConversionValue": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "maximizeConversions": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "name": "string",
        "nonRemovedCampaignCount": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "targetCpa": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "targetImpressionShare": {
          "cpcBidCeilingMicros": "string",
          "location": "UNSPECIFIED",
          "locationFractionMicros": "string"
        },
        "targetOutrankShare": {
          "cpcBidCeilingMicros": "string"
        },
        "targetRoas": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "targetSpend": {
          "cpcBidCeilingMicros": "string",
          "targetSpendMicros": "string"
        },
        "type": "UNSPECIFIED"
      },
      "campaign": {
        "adServingOptimizationStatus": "UNSPECIFIED",
        "advertisingChannelSubType": "UNSPECIFIED",
        "advertisingChannelType": "UNSPECIFIED",
        "biddingStrategy": "string",
        "biddingStrategySystemStatus": "UNSPECIFIED",
        "biddingStrategyType": "UNSPECIFIED",
        "campaignBudget": "string",
        "createTime": "string",
        "creationTime": "string",
        "dynamicSearchAdsSetting": {
          "domainName": "string",
          "languageCode": "string",
          "useSuppliedUrlsOnly": true
        },
        "endDate": "string",
        "engineId": "string",
        "excludedParentAssetFieldTypes": [
          "UNSPECIFIED"
        ],
        "finalUrlSuffix": "string",
        "frequencyCaps": [
          {}
        ],
        "geoTargetTypeSetting": {
          "negativeGeoTargetType": "UNSPECIFIED",
          "positiveGeoTargetType": "UNSPECIFIED"
        },
        "id": "string",
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "manualCpa": {},
        "manualCpc": {
          "enhancedCpcEnabled": true
        },
        "manualCpm": {},
        "maximizeConversionValue": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "maximizeConversions": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "name": "string",
        "networkSettings": {
          "targetContentNetwork": true,
          "targetGoogleSearch": true,
          "targetPartnerSearchNetwork": true,
          "targetSearchNetwork": true
        },
        "optimizationGoalSetting": {
          "optimizationGoalTypes": [
            "UNSPECIFIED"
          ]
        },
        "percentCpc": {
          "cpcBidCeilingMicros": "string",
          "enhancedCpcEnabled": true
        },
        "realTimeBiddingSetting": {
          "optIn": true
        },
        "resourceName": "string",
        "selectiveOptimization": {
          "conversionActions": [
            "string"
          ]
        },
        "servingStatus": "UNSPECIFIED",
        "shoppingSetting": {
          "campaignPriority": 0,
          "enableLocal": true,
          "feedLabel": "string",
          "merchantId": "string",
          "salesCountry": "string",
          "useVehicleInventory": true
        },
        "startDate": "string",
        "status": "UNSPECIFIED",
        "targetCpa": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "targetCpm": {},
        "targetImpressionShare": {
          "cpcBidCeilingMicros": "string",
          "location": "UNSPECIFIED",
          "locationFractionMicros": "string"
        },
        "targetRoas": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "targetSpend": {
          "cpcBidCeilingMicros": "string",
          "targetSpendMicros": "string"
        },
        "trackingSetting": {
          "trackingUrl": "string"
        },
        "trackingUrlTemplate": "string",
        "urlCustomParameters": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "urlExpansionOptOut": true
      },
      "campaignAudienceView": {
        "resourceName": "string"
      },
      "campaignBudget": {
        "amountMicros": "string",
        "deliveryMethod": "UNSPECIFIED",
        "period": "UNSPECIFIED",
        "resourceName": "string"
      },
      "campaignCriterion": {
        "ageRange": {
          "type": "UNSPECIFIED"
        },
        "bidModifier": 0,
        "criterionId": "string",
        "device": {
          "type": "UNSPECIFIED"
        },
        "displayName": "string",
        "gender": {
          "type": "UNSPECIFIED"
        },
        "keyword": {
          "matchType": "UNSPECIFIED",
          "text": "string"
        },
        "language": {
          "languageConstant": "string"
        },
        "lastModifiedTime": "string",
        "location": {
          "geoTargetConstant": "string"
        },
        "locationGroup": {
          "feedItemSets": [
            "string"
          ],
          "geoTargetConstants": [
            "string"
          ],
          "radius": "string",
          "radiusUnits": "UNSPECIFIED"
        },
        "negative": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "type": "UNSPECIFIED",
        "userList": {
          "userList": "string"
        },
        "webpage": {
          "conditions": [
            {
              "argument": "string",
              "operand": "UNSPECIFIED",
              "operator": "UNSPECIFIED"
            }
          ],
          "coveragePercentage": 0,
          "criterionName": "string"
        }
      },
      "campaignLabel": {
        "campaign": "string",
        "label": "string",
        "resourceName": "string"
      },
      "conversionAction": {
        "appId": "string",
        "attributionModelSettings": {
          "attributionModel": "UNSPECIFIED",
          "dataDrivenModelStatus": "UNSPECIFIED"
        },
        "category": "UNSPECIFIED",
        "clickThroughLookbackWindowDays": "string",
        "creationTime": "string",
        "floodlightSettings": {
          "activityGroupTag": "string",
          "activityId": "string",
          "activityTag": "string"
        },
        "id": "string",
        "includeInClientAccountConversionsMetric": true,
        "includeInConversionsMetric": true,
        "name": "string",
        "ownerCustomer": "string",
        "primaryForGoal": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "type": "UNSPECIFIED",
        "valueSettings": {
          "alwaysUseDefaultValue": true,
          "defaultCurrencyCode": "string",
          "defaultValue": 0
        }
      },
      "customColumns": [
        {
          "booleanValue": true,
          "doubleValue": 0,
          "floatValue": 0,
          "int64Value": "string",
          "stringValue": "string"
        }
      ],
      "customer": {
        "accountStatus": "UNSPECIFIED",
        "accountType": "UNSPECIFIED",
        "autoTaggingEnabled": true,
        "conversionTrackingSetting": {
          "acceptedCustomerDataTerms": true,
          "conversionTrackingId": "string",
          "conversionTrackingStatus": "UNSPECIFIED",
          "crossAccountConversionTrackingId": "string",
          "enhancedConversionsForLeadsEnabled": true,
          "googleAdsConversionCustomer": "string",
          "googleAdsCrossAccountConversionTrackingId": "string"
        },
        "creationTime": "string",
        "currencyCode": "string",
        "descriptiveName": "string",
        "doubleClickCampaignManagerSetting": {
          "advertiserId": "string",
          "networkId": "string",
          "timeZone": "string"
        },
        "engineId": "string",
        "finalUrlSuffix": "string",
        "id": "string",
        "lastModifiedTime": "string",
        "manager": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "timeZone": "string",
        "trackingUrlTemplate": "string"
      },
      "customerClient": {
        "appliedLabels": [
          "string"
        ],
        "clientCustomer": "string",
        "currencyCode": "string",
        "descriptiveName": "string",
        "hidden": true,
        "id": "string",
        "level": "string",
        "manager": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "testAccount": true,
        "timeZone": "string"
      },
      "customerManagerLink": {
        "managerCustomer": "string",
        "managerLinkId": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED"
      },
      "dynamicSearchAdsSearchTermView": {
        "landingPage": "string",
        "resourceName": "string"
      },
      "genderView": {
        "resourceName": "string"
      },
      "keywordView": {
        "resourceName": "string"
      },
      "label": {
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "textLabel": {
          "backgroundColor": "string",
          "description": "string"
        }
      },
      "locationView": {
        "resourceName": "string"
      },
      "metrics": {
        "absoluteTopImpressionPercentage": 0,
        "allConversions": 0,
        "allConversionsByConversionDate": 0,
        "allConversionsFromClickToCall": 0,
        "allConversionsFromDirections": 0,
        "allConversionsFromInteractionsRate": 0,
        "allConversionsFromInteractionsValuePerInteraction": 0,
        "allConversionsFromMenu": 0,
        "allConversionsFromOrder": 0,
        "allConversionsFromOtherEngagement": 0,
        "allConversionsFromStoreVisit": 0,
        "allConversionsFromStoreWebsite": 0,
        "allConversionsValue": 0,
        "allConversionsValueByConversionDate": 0,
        "allConversionsValuePerCost": 0,
        "averageCost": 0,
        "averageCpc": 0,
        "averageCpm": 0,
        "clicks": "string",
        "clientAccountConversions": 0,
        "clientAccountConversionsValue": 0,
        "clientAccountViewThroughConversions": "string",
        "contentBudgetLostImpressionShare": 0,
        "contentImpressionShare": 0,
        "contentRankLostImpressionShare": 0,
        "conversions": 0,
        "conversionsByConversionDate": 0,
        "conversionsFromInteractionsRate": 0,
        "conversionsFromInteractionsValuePerInteraction": 0,
        "conversionsValue": 0,
        "conversionsValueByConversionDate": 0,
        "conversionsValuePerCost": 0,
        "costMicros": "string",
        "costPerAllConversions": 0,
        "costPerConversion": 0,
        "costPerCurrentModelAttributedConversion": 0,
        "crossDeviceConversions": 0,
        "crossDeviceConversionsValue": 0,
        "ctr": 0,
        "historicalCreativeQualityScore": "UNSPECIFIED",
        "historicalLandingPageQualityScore": "UNSPECIFIED",
        "historicalQualityScore": "string",
        "historicalSearchPredictedCtr": "UNSPECIFIED",
        "impressions": "string",
        "interactionEventTypes": [
          "UNSPECIFIED"
        ],
        "interactionRate": 0,
        "interactions": "string",
        "invalidClickRate": 0,
        "invalidClicks": "string",
        "mobileFriendlyClicksPercentage": 0,
        "searchAbsoluteTopImpressionShare": 0,
        "searchBudgetLostAbsoluteTopImpressionShare": 0,
        "searchBudgetLostImpressionShare": 0,
        "searchBudgetLostTopImpressionShare": 0,
        "searchClickShare": 0,
        "searchExactMatchImpressionShare": 0,
        "searchImpressionShare": 0,
        "searchRankLostAbsoluteTopImpressionShare": 0,
        "searchRankLostImpressionShare": 0,
        "searchRankLostTopImpressionShare": 0,
        "searchTopImpressionShare": 0,
        "topImpressionPercentage": 0,
        "valuePerAllConversions": 0,
        "valuePerAllConversionsByConversionDate": 0,
        "valuePerConversion": 0,
        "valuePerConversionsByConversionDate": 0,
        "visits": 0
      },
      "productGroupView": {
        "resourceName": "string"
      },
      "segments": {
        "conversionAction": "string",
        "conversionActionCategory": "UNSPECIFIED",
        "conversionActionName": "string",
        "date": "string",
        "dayOfWeek": "UNSPECIFIED",
        "device": "UNSPECIFIED",
        "month": "string",
        "quarter": "string",
        "week": "string",
        "year": 0
      },
      "userList": {
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "type": "UNSPECIFIED"
      },
      "webpageView": {
        "resourceName": "string"
      }
    }
  ],
  "summaryRow": {
    "adGroup": {
      "adRotationMode": "UNSPECIFIED",
      "cpcBidMicros": "string",
      "creationTime": "string",
      "endDate": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "id": "string",
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "lastModifiedTime": "string",
      "name": "string",
      "resourceName": "string",
      "startDate": "string",
      "status": "UNSPECIFIED",
      "targetingSetting": {
        "targetRestrictions": [
          {
            "bidOnly": true,
            "targetingDimension": "UNSPECIFIED"
          }
        ]
      },
      "type": "UNSPECIFIED"
    },
    "adGroupAd": {
      "ad": {
        "displayUrl": "string",
        "finalUrls": [
          "string"
        ],
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "type": "UNSPECIFIED"
      },
      "creationTime": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED"
    },
    "adGroupAdLabel": {
      "adGroupAd": "string",
      "label": "string",
      "resourceName": "string"
    },
    "adGroupAudienceView": {
      "resourceName": "string"
    },
    "adGroupBidModifier": {
      "bidModifier": 0,
      "device": {
        "type": "UNSPECIFIED"
      },
      "resourceName": "string"
    },
    "adGroupCriterion": {
      "adGroup": "string",
      "ageRange": {
        "type": "UNSPECIFIED"
      },
      "bidModifier": 0,
      "cpcBidMicros": "string",
      "creationTime": "string",
      "criterionId": "string",
      "effectiveCpcBidMicros": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "finalUrlSuffix": "string",
      "finalUrls": [
        "string"
      ],
      "gender": {
        "type": "UNSPECIFIED"
      },
      "keyword": {
        "matchType": "UNSPECIFIED",
        "text": "string"
      },
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "listingGroup": {
        "type": "UNSPECIFIED"
      },
      "location": {
        "geoTargetConstant": "string"
      },
      "negative": true,
      "qualityInfo": {
        "qualityScore": 0
      },
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "trackingUrlTemplate": "string",
      "type": "UNSPECIFIED",
      "userList": {
        "userList": "string"
      },
      "webpage": {
        "conditions": [
          {
            "argument": "string",
            "operand": "UNSPECIFIED",
            "operator": "UNSPECIFIED"
          }
        ],
        "coveragePercentage": 0,
        "criterionName": "string"
      }
    },
    "adGroupCriterionLabel": {
      "adGroupCriterion": "string",
      "label": "string",
      "resourceName": "string"
    },
    "adGroupLabel": {
      "adGroup": "string",
      "label": "string",
      "resourceName": "string"
    },
    "ageRangeView": {
      "resourceName": "string"
    },
    "biddingStrategy": {
      "campaignCount": "string",
      "currencyCode": "string",
      "effectiveCurrencyCode": "string",
      "enhancedCpc": {},
      "id": "string",
      "maximizeConversionValue": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "maximizeConversions": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "name": "string",
      "nonRemovedCampaignCount": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "targetCpa": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "targetImpressionShare": {
        "cpcBidCeilingMicros": "string",
        "location": "UNSPECIFIED",
        "locationFractionMicros": "string"
      },
      "targetOutrankShare": {
        "cpcBidCeilingMicros": "string"
      },
      "targetRoas": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "targetSpend": {
        "cpcBidCeilingMicros": "string",
        "targetSpendMicros": "string"
      },
      "type": "UNSPECIFIED"
    },
    "campaign": {
      "adServingOptimizationStatus": "UNSPECIFIED",
      "advertisingChannelSubType": "UNSPECIFIED",
      "advertisingChannelType": "UNSPECIFIED",
      "biddingStrategy": "string",
      "biddingStrategySystemStatus": "UNSPECIFIED",
      "biddingStrategyType": "UNSPECIFIED",
      "campaignBudget": "string",
      "createTime": "string",
      "creationTime": "string",
      "dynamicSearchAdsSetting": {
        "domainName": "string",
        "languageCode": "string",
        "useSuppliedUrlsOnly": true
      },
      "endDate": "string",
      "engineId": "string",
      "excludedParentAssetFieldTypes": [
        "UNSPECIFIED"
      ],
      "finalUrlSuffix": "string",
      "frequencyCaps": [
        {}
      ],
      "geoTargetTypeSetting": {
        "negativeGeoTargetType": "UNSPECIFIED",
        "positiveGeoTargetType": "UNSPECIFIED"
      },
      "id": "string",
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "manualCpa": {},
      "manualCpc": {
        "enhancedCpcEnabled": true
      },
      "manualCpm": {},
      "maximizeConversionValue": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "maximizeConversions": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "name": "string",
      "networkSettings": {
        "targetContentNetwork": true,
        "targetGoogleSearch": true,
        "targetPartnerSearchNetwork": true,
        "targetSearchNetwork": true
      },
      "optimizationGoalSetting": {
        "optimizationGoalTypes": [
          "UNSPECIFIED"
        ]
      },
      "percentCpc": {
        "cpcBidCeilingMicros": "string",
        "enhancedCpcEnabled": true
      },
      "realTimeBiddingSetting": {
        "optIn": true
      },
      "resourceName": "string",
      "selectiveOptimization": {
        "conversionActions": [
          "string"
        ]
      },
      "servingStatus": "UNSPECIFIED",
      "shoppingSetting": {
        "campaignPriority": 0,
        "enableLocal": true,
        "feedLabel": "string",
        "merchantId": "string",
        "salesCountry": "string",
        "useVehicleInventory": true
      },
      "startDate": "string",
      "status": "UNSPECIFIED",
      "targetCpa": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "targetCpm": {},
      "targetImpressionShare": {
        "cpcBidCeilingMicros": "string",
        "location": "UNSPECIFIED",
        "locationFractionMicros": "string"
      },
      "targetRoas": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "targetSpend": {
        "cpcBidCeilingMicros": "string",
        "targetSpendMicros": "string"
      },
      "trackingSetting": {
        "trackingUrl": "string"
      },
      "trackingUrlTemplate": "string",
      "urlCustomParameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "urlExpansionOptOut": true
    },
    "campaignAudienceView": {
      "resourceName": "string"
    },
    "campaignBudget": {
      "amountMicros": "string",
      "deliveryMethod": "UNSPECIFIED",
      "period": "UNSPECIFIED",
      "resourceName": "string"
    },
    "campaignCriterion": {
      "ageRange": {
        "type": "UNSPECIFIED"
      },
      "bidModifier": 0,
      "criterionId": "string",
      "device": {
        "type": "UNSPECIFIED"
      },
      "displayName": "string",
      "gender": {
        "type": "UNSPECIFIED"
      },
      "keyword": {
        "matchType": "UNSPECIFIED",
        "text": "string"
      },
      "language": {
        "languageConstant": "string"
      },
      "lastModifiedTime": "string",
      "location": {
        "geoTargetConstant": "string"
      },
      "locationGroup": {
        "feedItemSets": [
          "string"
        ],
        "geoTargetConstants": [
          "string"
        ],
        "radius": "string",
        "radiusUnits": "UNSPECIFIED"
      },
      "negative": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "type": "UNSPECIFIED",
      "userList": {
        "userList": "string"
      },
      "webpage": {
        "conditions": [
          {
            "argument": "string",
            "operand": "UNSPECIFIED",
            "operator": "UNSPECIFIED"
          }
        ],
        "coveragePercentage": 0,
        "criterionName": "string"
      }
    },
    "campaignLabel": {
      "campaign": "string",
      "label": "string",
      "resourceName": "string"
    },
    "conversionAction": {
      "appId": "string",
      "attributionModelSettings": {
        "attributionModel": "UNSPECIFIED",
        "dataDrivenModelStatus": "UNSPECIFIED"
      },
      "category": "UNSPECIFIED",
      "clickThroughLookbackWindowDays": "string",
      "creationTime": "string",
      "floodlightSettings": {
        "activityGroupTag": "string",
        "activityId": "string",
        "activityTag": "string"
      },
      "id": "string",
      "includeInClientAccountConversionsMetric": true,
      "includeInConversionsMetric": true,
      "name": "string",
      "ownerCustomer": "string",
      "primaryForGoal": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "type": "UNSPECIFIED",
      "valueSettings": {
        "alwaysUseDefaultValue": true,
        "defaultCurrencyCode": "string",
        "defaultValue": 0
      }
    },
    "customColumns": [
      {
        "booleanValue": true,
        "doubleValue": 0,
        "floatValue": 0,
        "int64Value": "string",
        "stringValue": "string"
      }
    ],
    "customer": {
      "accountStatus": "UNSPECIFIED",
      "accountType": "UNSPECIFIED",
      "autoTaggingEnabled": true,
      "conversionTrackingSetting": {
        "acceptedCustomerDataTerms": true,
        "conversionTrackingId": "string",
        "conversionTrackingStatus": "UNSPECIFIED",
        "crossAccountConversionTrackingId": "string",
        "enhancedConversionsForLeadsEnabled": true,
        "googleAdsConversionCustomer": "string",
        "googleAdsCrossAccountConversionTrackingId": "string"
      },
      "creationTime": "string",
      "currencyCode": "string",
      "descriptiveName": "string",
      "doubleClickCampaignManagerSetting": {
        "advertiserId": "string",
        "networkId": "string",
        "timeZone": "string"
      },
      "engineId": "string",
      "finalUrlSuffix": "string",
      "id": "string",
      "lastModifiedTime": "string",
      "manager": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "timeZone": "string",
      "trackingUrlTemplate": "string"
    },
    "customerClient": {
      "appliedLabels": [
        "string"
      ],
      "clientCustomer": "string",
      "currencyCode": "string",
      "descriptiveName": "string",
      "hidden": true,
      "id": "string",
      "level": "string",
      "manager": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "testAccount": true,
      "timeZone": "string"
    },
    "customerManagerLink": {
      "managerCustomer": "string",
      "managerLinkId": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED"
    },
    "dynamicSearchAdsSearchTermView": {
      "landingPage": "string",
      "resourceName": "string"
    },
    "genderView": {
      "resourceName": "string"
    },
    "keywordView": {
      "resourceName": "string"
    },
    "label": {
      "id": "string",
      "name": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "textLabel": {
        "backgroundColor": "string",
        "description": "string"
      }
    },
    "locationView": {
      "resourceName": "string"
    },
    "metrics": {
      "absoluteTopImpressionPercentage": 0,
      "allConversions": 0,
      "allConversionsByConversionDate": 0,
      "allConversionsFromClickToCall": 0,
      "allConversionsFromDirections": 0,
      "allConversionsFromInteractionsRate": 0,
      "allConversionsFromInteractionsValuePerInteraction": 0,
      "allConversionsFromMenu": 0,
      "allConversionsFromOrder": 0,
      "allConversionsFromOtherEngagement": 0,
      "allConversionsFromStoreVisit": 0,
      "allConversionsFromStoreWebsite": 0,
      "allConversionsValue": 0,
      "allConversionsValueByConversionDate": 0,
      "allConversionsValuePerCost": 0,
      "averageCost": 0,
      "averageCpc": 0,
      "averageCpm": 0,
      "clicks": "string",
      "clientAccountConversions": 0,
      "clientAccountConversionsValue": 0,
      "clientAccountViewThroughConversions": "string",
      "contentBudgetLostImpressionShare": 0,
      "contentImpressionShare": 0,
      "contentRankLostImpressionShare": 0,
      "conversions": 0,
      "conversionsByConversionDate": 0,
      "conversionsFromInteractionsRate": 0,
      "conversionsFromInteractionsValuePerInteraction": 0,
      "conversionsValue": 0,
      "conversionsValueByConversionDate": 0,
      "conversionsValuePerCost": 0,
      "costMicros": "string",
      "costPerAllConversions": 0,
      "costPerConversion": 0,
      "costPerCurrentModelAttributedConversion": 0,
      "crossDeviceConversions": 0,
      "crossDeviceConversionsValue": 0,
      "ctr": 0,
      "historicalCreativeQualityScore": "UNSPECIFIED",
      "historicalLandingPageQualityScore": "UNSPECIFIED",
      "historicalQualityScore": "string",
      "historicalSearchPredictedCtr": "UNSPECIFIED",
      "impressions": "string",
      "interactionEventTypes": [
        "UNSPECIFIED"
      ],
      "interactionRate": 0,
      "interactions": "string",
      "invalidClickRate": 0,
      "invalidClicks": "string",
      "mobileFriendlyClicksPercentage": 0,
      "searchAbsoluteTopImpressionShare": 0,
      "searchBudgetLostAbsoluteTopImpressionShare": 0,
      "searchBudgetLostImpressionShare": 0,
      "searchBudgetLostTopImpressionShare": 0,
      "searchClickShare": 0,
      "searchExactMatchImpressionShare": 0,
      "searchImpressionShare": 0,
      "searchRankLostAbsoluteTopImpressionShare": 0,
      "searchRankLostImpressionShare": 0,
      "searchRankLostTopImpressionShare": 0,
      "searchTopImpressionShare": 0,
      "topImpressionPercentage": 0,
      "valuePerAllConversions": 0,
      "valuePerAllConversionsByConversionDate": 0,
      "valuePerConversion": 0,
      "valuePerConversionsByConversionDate": 0,
      "visits": 0
    },
    "productGroupView": {
      "resourceName": "string"
    },
    "segments": {
      "conversionAction": "string",
      "conversionActionCategory": "UNSPECIFIED",
      "conversionActionName": "string",
      "date": "string",
      "dayOfWeek": "UNSPECIFIED",
      "device": "UNSPECIFIED",
      "month": "string",
      "quarter": "string",
      "week": "string",
      "year": 0
    },
    "userList": {
      "id": "string",
      "name": "string",
      "resourceName": "string",
      "type": "UNSPECIFIED"
    },
    "webpageView": {
      "resourceName": "string"
    }
  },
  "totalResultsCount": "string"
}
```

Response message for SearchAds360Service.Search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customColumnHeaders|[[GoogleAdsSearchads360V0Services__CustomColumnHeader](#schemagoogleadssearchads360v0services__customcolumnheader)]|false|none|The headers of the custom columns in the results.|
|fieldMask|string(google-fieldmask)|false|none|FieldMask that represents what fields were requested by the user.|
|nextPageToken|string|false|none|Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page.|
|results|[[GoogleAdsSearchads360V0Services__SearchAds360Row](#schemagoogleadssearchads360v0services__searchads360row)]|false|none|The list of rows that matched the query.|
|summaryRow|[GoogleAdsSearchads360V0Services__SearchAds360Row](#schemagoogleadssearchads360v0services__searchads360row)|false|none|Summary row that contains summary of metrics in results. Summary of metrics means aggregation of metrics across all results, here aggregation could be sum, average, rate, etc.|
|totalResultsCount|string(int64)|false|none|Total number of results that match the query ignoring the LIMIT clause.|

<h2 id="tocS_GoogleAdsSearchads360V0Services__SearchSearchAds360StreamRequest">GoogleAdsSearchads360V0Services__SearchSearchAds360StreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0services__searchsearchads360streamrequest"></a>
<a id="schema_GoogleAdsSearchads360V0Services__SearchSearchAds360StreamRequest"></a>
<a id="tocSgoogleadssearchads360v0services__searchsearchads360streamrequest"></a>
<a id="tocsgoogleadssearchads360v0services__searchsearchads360streamrequest"></a>

```json
{
  "batchSize": 0,
  "query": "string",
  "summaryRowSetting": "UNSPECIFIED"
}
```

Request message for SearchAds360Service.SearchStream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSize|integer(int32)|false|none|The number of rows that are returned in each stream response batch. When too large batch is requested, the server may decide to further limit the number of returned rows.|
|query|string|false|none|Required. The query string.|
|summaryRowSetting|string|false|none|Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned.|

#### Enumerated Values

|Property|Value|
|---|---|
|summaryRowSetting|UNSPECIFIED|
|summaryRowSetting|UNKNOWN|
|summaryRowSetting|NO_SUMMARY_ROW|
|summaryRowSetting|SUMMARY_ROW_WITH_RESULTS|
|summaryRowSetting|SUMMARY_ROW_ONLY|

<h2 id="tocS_GoogleAdsSearchads360V0Services__SearchSearchAds360StreamResponse">GoogleAdsSearchads360V0Services__SearchSearchAds360StreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadssearchads360v0services__searchsearchads360streamresponse"></a>
<a id="schema_GoogleAdsSearchads360V0Services__SearchSearchAds360StreamResponse"></a>
<a id="tocSgoogleadssearchads360v0services__searchsearchads360streamresponse"></a>
<a id="tocsgoogleadssearchads360v0services__searchsearchads360streamresponse"></a>

```json
{
  "customColumnHeaders": [
    {
      "id": "string",
      "name": "string",
      "referencesMetrics": true
    }
  ],
  "fieldMask": "string",
  "requestId": "string",
  "results": [
    {
      "adGroup": {
        "adRotationMode": "UNSPECIFIED",
        "cpcBidMicros": "string",
        "creationTime": "string",
        "endDate": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "id": "string",
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "lastModifiedTime": "string",
        "name": "string",
        "resourceName": "string",
        "startDate": "string",
        "status": "UNSPECIFIED",
        "targetingSetting": {
          "targetRestrictions": [
            {
              "bidOnly": true,
              "targetingDimension": "UNSPECIFIED"
            }
          ]
        },
        "type": "UNSPECIFIED"
      },
      "adGroupAd": {
        "ad": {
          "displayUrl": "string",
          "finalUrls": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "resourceName": "string",
          "type": "UNSPECIFIED"
        },
        "creationTime": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED"
      },
      "adGroupAdLabel": {
        "adGroupAd": "string",
        "label": "string",
        "resourceName": "string"
      },
      "adGroupAudienceView": {
        "resourceName": "string"
      },
      "adGroupBidModifier": {
        "bidModifier": 0,
        "device": {
          "type": "UNSPECIFIED"
        },
        "resourceName": "string"
      },
      "adGroupCriterion": {
        "adGroup": "string",
        "ageRange": {
          "type": "UNSPECIFIED"
        },
        "bidModifier": 0,
        "cpcBidMicros": "string",
        "creationTime": "string",
        "criterionId": "string",
        "effectiveCpcBidMicros": "string",
        "engineId": "string",
        "engineStatus": "UNSPECIFIED",
        "finalUrlSuffix": "string",
        "finalUrls": [
          "string"
        ],
        "gender": {
          "type": "UNSPECIFIED"
        },
        "keyword": {
          "matchType": "UNSPECIFIED",
          "text": "string"
        },
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "listingGroup": {
          "type": "UNSPECIFIED"
        },
        "location": {
          "geoTargetConstant": "string"
        },
        "negative": true,
        "qualityInfo": {
          "qualityScore": 0
        },
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "trackingUrlTemplate": "string",
        "type": "UNSPECIFIED",
        "userList": {
          "userList": "string"
        },
        "webpage": {
          "conditions": [
            {
              "argument": "string",
              "operand": "UNSPECIFIED",
              "operator": "UNSPECIFIED"
            }
          ],
          "coveragePercentage": 0,
          "criterionName": "string"
        }
      },
      "adGroupCriterionLabel": {
        "adGroupCriterion": "string",
        "label": "string",
        "resourceName": "string"
      },
      "adGroupLabel": {
        "adGroup": "string",
        "label": "string",
        "resourceName": "string"
      },
      "ageRangeView": {
        "resourceName": "string"
      },
      "biddingStrategy": {
        "campaignCount": "string",
        "currencyCode": "string",
        "effectiveCurrencyCode": "string",
        "enhancedCpc": {},
        "id": "string",
        "maximizeConversionValue": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "maximizeConversions": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "name": "string",
        "nonRemovedCampaignCount": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "targetCpa": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "targetImpressionShare": {
          "cpcBidCeilingMicros": "string",
          "location": "UNSPECIFIED",
          "locationFractionMicros": "string"
        },
        "targetOutrankShare": {
          "cpcBidCeilingMicros": "string"
        },
        "targetRoas": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "targetSpend": {
          "cpcBidCeilingMicros": "string",
          "targetSpendMicros": "string"
        },
        "type": "UNSPECIFIED"
      },
      "campaign": {
        "adServingOptimizationStatus": "UNSPECIFIED",
        "advertisingChannelSubType": "UNSPECIFIED",
        "advertisingChannelType": "UNSPECIFIED",
        "biddingStrategy": "string",
        "biddingStrategySystemStatus": "UNSPECIFIED",
        "biddingStrategyType": "UNSPECIFIED",
        "campaignBudget": "string",
        "createTime": "string",
        "creationTime": "string",
        "dynamicSearchAdsSetting": {
          "domainName": "string",
          "languageCode": "string",
          "useSuppliedUrlsOnly": true
        },
        "endDate": "string",
        "engineId": "string",
        "excludedParentAssetFieldTypes": [
          "UNSPECIFIED"
        ],
        "finalUrlSuffix": "string",
        "frequencyCaps": [
          {}
        ],
        "geoTargetTypeSetting": {
          "negativeGeoTargetType": "UNSPECIFIED",
          "positiveGeoTargetType": "UNSPECIFIED"
        },
        "id": "string",
        "labels": [
          "string"
        ],
        "lastModifiedTime": "string",
        "manualCpa": {},
        "manualCpc": {
          "enhancedCpcEnabled": true
        },
        "manualCpm": {},
        "maximizeConversionValue": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "maximizeConversions": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "name": "string",
        "networkSettings": {
          "targetContentNetwork": true,
          "targetGoogleSearch": true,
          "targetPartnerSearchNetwork": true,
          "targetSearchNetwork": true
        },
        "optimizationGoalSetting": {
          "optimizationGoalTypes": [
            "UNSPECIFIED"
          ]
        },
        "percentCpc": {
          "cpcBidCeilingMicros": "string",
          "enhancedCpcEnabled": true
        },
        "realTimeBiddingSetting": {
          "optIn": true
        },
        "resourceName": "string",
        "selectiveOptimization": {
          "conversionActions": [
            "string"
          ]
        },
        "servingStatus": "UNSPECIFIED",
        "shoppingSetting": {
          "campaignPriority": 0,
          "enableLocal": true,
          "feedLabel": "string",
          "merchantId": "string",
          "salesCountry": "string",
          "useVehicleInventory": true
        },
        "startDate": "string",
        "status": "UNSPECIFIED",
        "targetCpa": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetCpaMicros": "string"
        },
        "targetCpm": {},
        "targetImpressionShare": {
          "cpcBidCeilingMicros": "string",
          "location": "UNSPECIFIED",
          "locationFractionMicros": "string"
        },
        "targetRoas": {
          "cpcBidCeilingMicros": "string",
          "cpcBidFloorMicros": "string",
          "targetRoas": 0
        },
        "targetSpend": {
          "cpcBidCeilingMicros": "string",
          "targetSpendMicros": "string"
        },
        "trackingSetting": {
          "trackingUrl": "string"
        },
        "trackingUrlTemplate": "string",
        "urlCustomParameters": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "urlExpansionOptOut": true
      },
      "campaignAudienceView": {
        "resourceName": "string"
      },
      "campaignBudget": {
        "amountMicros": "string",
        "deliveryMethod": "UNSPECIFIED",
        "period": "UNSPECIFIED",
        "resourceName": "string"
      },
      "campaignCriterion": {
        "ageRange": {
          "type": "UNSPECIFIED"
        },
        "bidModifier": 0,
        "criterionId": "string",
        "device": {
          "type": "UNSPECIFIED"
        },
        "displayName": "string",
        "gender": {
          "type": "UNSPECIFIED"
        },
        "keyword": {
          "matchType": "UNSPECIFIED",
          "text": "string"
        },
        "language": {
          "languageConstant": "string"
        },
        "lastModifiedTime": "string",
        "location": {
          "geoTargetConstant": "string"
        },
        "locationGroup": {
          "feedItemSets": [
            "string"
          ],
          "geoTargetConstants": [
            "string"
          ],
          "radius": "string",
          "radiusUnits": "UNSPECIFIED"
        },
        "negative": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "type": "UNSPECIFIED",
        "userList": {
          "userList": "string"
        },
        "webpage": {
          "conditions": [
            {
              "argument": "string",
              "operand": "UNSPECIFIED",
              "operator": "UNSPECIFIED"
            }
          ],
          "coveragePercentage": 0,
          "criterionName": "string"
        }
      },
      "campaignLabel": {
        "campaign": "string",
        "label": "string",
        "resourceName": "string"
      },
      "conversionAction": {
        "appId": "string",
        "attributionModelSettings": {
          "attributionModel": "UNSPECIFIED",
          "dataDrivenModelStatus": "UNSPECIFIED"
        },
        "category": "UNSPECIFIED",
        "clickThroughLookbackWindowDays": "string",
        "creationTime": "string",
        "floodlightSettings": {
          "activityGroupTag": "string",
          "activityId": "string",
          "activityTag": "string"
        },
        "id": "string",
        "includeInClientAccountConversionsMetric": true,
        "includeInConversionsMetric": true,
        "name": "string",
        "ownerCustomer": "string",
        "primaryForGoal": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "type": "UNSPECIFIED",
        "valueSettings": {
          "alwaysUseDefaultValue": true,
          "defaultCurrencyCode": "string",
          "defaultValue": 0
        }
      },
      "customColumns": [
        {
          "booleanValue": true,
          "doubleValue": 0,
          "floatValue": 0,
          "int64Value": "string",
          "stringValue": "string"
        }
      ],
      "customer": {
        "accountStatus": "UNSPECIFIED",
        "accountType": "UNSPECIFIED",
        "autoTaggingEnabled": true,
        "conversionTrackingSetting": {
          "acceptedCustomerDataTerms": true,
          "conversionTrackingId": "string",
          "conversionTrackingStatus": "UNSPECIFIED",
          "crossAccountConversionTrackingId": "string",
          "enhancedConversionsForLeadsEnabled": true,
          "googleAdsConversionCustomer": "string",
          "googleAdsCrossAccountConversionTrackingId": "string"
        },
        "creationTime": "string",
        "currencyCode": "string",
        "descriptiveName": "string",
        "doubleClickCampaignManagerSetting": {
          "advertiserId": "string",
          "networkId": "string",
          "timeZone": "string"
        },
        "engineId": "string",
        "finalUrlSuffix": "string",
        "id": "string",
        "lastModifiedTime": "string",
        "manager": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "timeZone": "string",
        "trackingUrlTemplate": "string"
      },
      "customerClient": {
        "appliedLabels": [
          "string"
        ],
        "clientCustomer": "string",
        "currencyCode": "string",
        "descriptiveName": "string",
        "hidden": true,
        "id": "string",
        "level": "string",
        "manager": true,
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "testAccount": true,
        "timeZone": "string"
      },
      "customerManagerLink": {
        "managerCustomer": "string",
        "managerLinkId": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED"
      },
      "dynamicSearchAdsSearchTermView": {
        "landingPage": "string",
        "resourceName": "string"
      },
      "genderView": {
        "resourceName": "string"
      },
      "keywordView": {
        "resourceName": "string"
      },
      "label": {
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "status": "UNSPECIFIED",
        "textLabel": {
          "backgroundColor": "string",
          "description": "string"
        }
      },
      "locationView": {
        "resourceName": "string"
      },
      "metrics": {
        "absoluteTopImpressionPercentage": 0,
        "allConversions": 0,
        "allConversionsByConversionDate": 0,
        "allConversionsFromClickToCall": 0,
        "allConversionsFromDirections": 0,
        "allConversionsFromInteractionsRate": 0,
        "allConversionsFromInteractionsValuePerInteraction": 0,
        "allConversionsFromMenu": 0,
        "allConversionsFromOrder": 0,
        "allConversionsFromOtherEngagement": 0,
        "allConversionsFromStoreVisit": 0,
        "allConversionsFromStoreWebsite": 0,
        "allConversionsValue": 0,
        "allConversionsValueByConversionDate": 0,
        "allConversionsValuePerCost": 0,
        "averageCost": 0,
        "averageCpc": 0,
        "averageCpm": 0,
        "clicks": "string",
        "clientAccountConversions": 0,
        "clientAccountConversionsValue": 0,
        "clientAccountViewThroughConversions": "string",
        "contentBudgetLostImpressionShare": 0,
        "contentImpressionShare": 0,
        "contentRankLostImpressionShare": 0,
        "conversions": 0,
        "conversionsByConversionDate": 0,
        "conversionsFromInteractionsRate": 0,
        "conversionsFromInteractionsValuePerInteraction": 0,
        "conversionsValue": 0,
        "conversionsValueByConversionDate": 0,
        "conversionsValuePerCost": 0,
        "costMicros": "string",
        "costPerAllConversions": 0,
        "costPerConversion": 0,
        "costPerCurrentModelAttributedConversion": 0,
        "crossDeviceConversions": 0,
        "crossDeviceConversionsValue": 0,
        "ctr": 0,
        "historicalCreativeQualityScore": "UNSPECIFIED",
        "historicalLandingPageQualityScore": "UNSPECIFIED",
        "historicalQualityScore": "string",
        "historicalSearchPredictedCtr": "UNSPECIFIED",
        "impressions": "string",
        "interactionEventTypes": [
          "UNSPECIFIED"
        ],
        "interactionRate": 0,
        "interactions": "string",
        "invalidClickRate": 0,
        "invalidClicks": "string",
        "mobileFriendlyClicksPercentage": 0,
        "searchAbsoluteTopImpressionShare": 0,
        "searchBudgetLostAbsoluteTopImpressionShare": 0,
        "searchBudgetLostImpressionShare": 0,
        "searchBudgetLostTopImpressionShare": 0,
        "searchClickShare": 0,
        "searchExactMatchImpressionShare": 0,
        "searchImpressionShare": 0,
        "searchRankLostAbsoluteTopImpressionShare": 0,
        "searchRankLostImpressionShare": 0,
        "searchRankLostTopImpressionShare": 0,
        "searchTopImpressionShare": 0,
        "topImpressionPercentage": 0,
        "valuePerAllConversions": 0,
        "valuePerAllConversionsByConversionDate": 0,
        "valuePerConversion": 0,
        "valuePerConversionsByConversionDate": 0,
        "visits": 0
      },
      "productGroupView": {
        "resourceName": "string"
      },
      "segments": {
        "conversionAction": "string",
        "conversionActionCategory": "UNSPECIFIED",
        "conversionActionName": "string",
        "date": "string",
        "dayOfWeek": "UNSPECIFIED",
        "device": "UNSPECIFIED",
        "month": "string",
        "quarter": "string",
        "week": "string",
        "year": 0
      },
      "userList": {
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "type": "UNSPECIFIED"
      },
      "webpageView": {
        "resourceName": "string"
      }
    }
  ],
  "summaryRow": {
    "adGroup": {
      "adRotationMode": "UNSPECIFIED",
      "cpcBidMicros": "string",
      "creationTime": "string",
      "endDate": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "id": "string",
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "lastModifiedTime": "string",
      "name": "string",
      "resourceName": "string",
      "startDate": "string",
      "status": "UNSPECIFIED",
      "targetingSetting": {
        "targetRestrictions": [
          {
            "bidOnly": true,
            "targetingDimension": "UNSPECIFIED"
          }
        ]
      },
      "type": "UNSPECIFIED"
    },
    "adGroupAd": {
      "ad": {
        "displayUrl": "string",
        "finalUrls": [
          "string"
        ],
        "id": "string",
        "name": "string",
        "resourceName": "string",
        "type": "UNSPECIFIED"
      },
      "creationTime": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED"
    },
    "adGroupAdLabel": {
      "adGroupAd": "string",
      "label": "string",
      "resourceName": "string"
    },
    "adGroupAudienceView": {
      "resourceName": "string"
    },
    "adGroupBidModifier": {
      "bidModifier": 0,
      "device": {
        "type": "UNSPECIFIED"
      },
      "resourceName": "string"
    },
    "adGroupCriterion": {
      "adGroup": "string",
      "ageRange": {
        "type": "UNSPECIFIED"
      },
      "bidModifier": 0,
      "cpcBidMicros": "string",
      "creationTime": "string",
      "criterionId": "string",
      "effectiveCpcBidMicros": "string",
      "engineId": "string",
      "engineStatus": "UNSPECIFIED",
      "finalUrlSuffix": "string",
      "finalUrls": [
        "string"
      ],
      "gender": {
        "type": "UNSPECIFIED"
      },
      "keyword": {
        "matchType": "UNSPECIFIED",
        "text": "string"
      },
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "listingGroup": {
        "type": "UNSPECIFIED"
      },
      "location": {
        "geoTargetConstant": "string"
      },
      "negative": true,
      "qualityInfo": {
        "qualityScore": 0
      },
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "trackingUrlTemplate": "string",
      "type": "UNSPECIFIED",
      "userList": {
        "userList": "string"
      },
      "webpage": {
        "conditions": [
          {
            "argument": "string",
            "operand": "UNSPECIFIED",
            "operator": "UNSPECIFIED"
          }
        ],
        "coveragePercentage": 0,
        "criterionName": "string"
      }
    },
    "adGroupCriterionLabel": {
      "adGroupCriterion": "string",
      "label": "string",
      "resourceName": "string"
    },
    "adGroupLabel": {
      "adGroup": "string",
      "label": "string",
      "resourceName": "string"
    },
    "ageRangeView": {
      "resourceName": "string"
    },
    "biddingStrategy": {
      "campaignCount": "string",
      "currencyCode": "string",
      "effectiveCurrencyCode": "string",
      "enhancedCpc": {},
      "id": "string",
      "maximizeConversionValue": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "maximizeConversions": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "name": "string",
      "nonRemovedCampaignCount": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "targetCpa": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "targetImpressionShare": {
        "cpcBidCeilingMicros": "string",
        "location": "UNSPECIFIED",
        "locationFractionMicros": "string"
      },
      "targetOutrankShare": {
        "cpcBidCeilingMicros": "string"
      },
      "targetRoas": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "targetSpend": {
        "cpcBidCeilingMicros": "string",
        "targetSpendMicros": "string"
      },
      "type": "UNSPECIFIED"
    },
    "campaign": {
      "adServingOptimizationStatus": "UNSPECIFIED",
      "advertisingChannelSubType": "UNSPECIFIED",
      "advertisingChannelType": "UNSPECIFIED",
      "biddingStrategy": "string",
      "biddingStrategySystemStatus": "UNSPECIFIED",
      "biddingStrategyType": "UNSPECIFIED",
      "campaignBudget": "string",
      "createTime": "string",
      "creationTime": "string",
      "dynamicSearchAdsSetting": {
        "domainName": "string",
        "languageCode": "string",
        "useSuppliedUrlsOnly": true
      },
      "endDate": "string",
      "engineId": "string",
      "excludedParentAssetFieldTypes": [
        "UNSPECIFIED"
      ],
      "finalUrlSuffix": "string",
      "frequencyCaps": [
        {}
      ],
      "geoTargetTypeSetting": {
        "negativeGeoTargetType": "UNSPECIFIED",
        "positiveGeoTargetType": "UNSPECIFIED"
      },
      "id": "string",
      "labels": [
        "string"
      ],
      "lastModifiedTime": "string",
      "manualCpa": {},
      "manualCpc": {
        "enhancedCpcEnabled": true
      },
      "manualCpm": {},
      "maximizeConversionValue": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "maximizeConversions": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "name": "string",
      "networkSettings": {
        "targetContentNetwork": true,
        "targetGoogleSearch": true,
        "targetPartnerSearchNetwork": true,
        "targetSearchNetwork": true
      },
      "optimizationGoalSetting": {
        "optimizationGoalTypes": [
          "UNSPECIFIED"
        ]
      },
      "percentCpc": {
        "cpcBidCeilingMicros": "string",
        "enhancedCpcEnabled": true
      },
      "realTimeBiddingSetting": {
        "optIn": true
      },
      "resourceName": "string",
      "selectiveOptimization": {
        "conversionActions": [
          "string"
        ]
      },
      "servingStatus": "UNSPECIFIED",
      "shoppingSetting": {
        "campaignPriority": 0,
        "enableLocal": true,
        "feedLabel": "string",
        "merchantId": "string",
        "salesCountry": "string",
        "useVehicleInventory": true
      },
      "startDate": "string",
      "status": "UNSPECIFIED",
      "targetCpa": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetCpaMicros": "string"
      },
      "targetCpm": {},
      "targetImpressionShare": {
        "cpcBidCeilingMicros": "string",
        "location": "UNSPECIFIED",
        "locationFractionMicros": "string"
      },
      "targetRoas": {
        "cpcBidCeilingMicros": "string",
        "cpcBidFloorMicros": "string",
        "targetRoas": 0
      },
      "targetSpend": {
        "cpcBidCeilingMicros": "string",
        "targetSpendMicros": "string"
      },
      "trackingSetting": {
        "trackingUrl": "string"
      },
      "trackingUrlTemplate": "string",
      "urlCustomParameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "urlExpansionOptOut": true
    },
    "campaignAudienceView": {
      "resourceName": "string"
    },
    "campaignBudget": {
      "amountMicros": "string",
      "deliveryMethod": "UNSPECIFIED",
      "period": "UNSPECIFIED",
      "resourceName": "string"
    },
    "campaignCriterion": {
      "ageRange": {
        "type": "UNSPECIFIED"
      },
      "bidModifier": 0,
      "criterionId": "string",
      "device": {
        "type": "UNSPECIFIED"
      },
      "displayName": "string",
      "gender": {
        "type": "UNSPECIFIED"
      },
      "keyword": {
        "matchType": "UNSPECIFIED",
        "text": "string"
      },
      "language": {
        "languageConstant": "string"
      },
      "lastModifiedTime": "string",
      "location": {
        "geoTargetConstant": "string"
      },
      "locationGroup": {
        "feedItemSets": [
          "string"
        ],
        "geoTargetConstants": [
          "string"
        ],
        "radius": "string",
        "radiusUnits": "UNSPECIFIED"
      },
      "negative": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "type": "UNSPECIFIED",
      "userList": {
        "userList": "string"
      },
      "webpage": {
        "conditions": [
          {
            "argument": "string",
            "operand": "UNSPECIFIED",
            "operator": "UNSPECIFIED"
          }
        ],
        "coveragePercentage": 0,
        "criterionName": "string"
      }
    },
    "campaignLabel": {
      "campaign": "string",
      "label": "string",
      "resourceName": "string"
    },
    "conversionAction": {
      "appId": "string",
      "attributionModelSettings": {
        "attributionModel": "UNSPECIFIED",
        "dataDrivenModelStatus": "UNSPECIFIED"
      },
      "category": "UNSPECIFIED",
      "clickThroughLookbackWindowDays": "string",
      "creationTime": "string",
      "floodlightSettings": {
        "activityGroupTag": "string",
        "activityId": "string",
        "activityTag": "string"
      },
      "id": "string",
      "includeInClientAccountConversionsMetric": true,
      "includeInConversionsMetric": true,
      "name": "string",
      "ownerCustomer": "string",
      "primaryForGoal": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "type": "UNSPECIFIED",
      "valueSettings": {
        "alwaysUseDefaultValue": true,
        "defaultCurrencyCode": "string",
        "defaultValue": 0
      }
    },
    "customColumns": [
      {
        "booleanValue": true,
        "doubleValue": 0,
        "floatValue": 0,
        "int64Value": "string",
        "stringValue": "string"
      }
    ],
    "customer": {
      "accountStatus": "UNSPECIFIED",
      "accountType": "UNSPECIFIED",
      "autoTaggingEnabled": true,
      "conversionTrackingSetting": {
        "acceptedCustomerDataTerms": true,
        "conversionTrackingId": "string",
        "conversionTrackingStatus": "UNSPECIFIED",
        "crossAccountConversionTrackingId": "string",
        "enhancedConversionsForLeadsEnabled": true,
        "googleAdsConversionCustomer": "string",
        "googleAdsCrossAccountConversionTrackingId": "string"
      },
      "creationTime": "string",
      "currencyCode": "string",
      "descriptiveName": "string",
      "doubleClickCampaignManagerSetting": {
        "advertiserId": "string",
        "networkId": "string",
        "timeZone": "string"
      },
      "engineId": "string",
      "finalUrlSuffix": "string",
      "id": "string",
      "lastModifiedTime": "string",
      "manager": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "timeZone": "string",
      "trackingUrlTemplate": "string"
    },
    "customerClient": {
      "appliedLabels": [
        "string"
      ],
      "clientCustomer": "string",
      "currencyCode": "string",
      "descriptiveName": "string",
      "hidden": true,
      "id": "string",
      "level": "string",
      "manager": true,
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "testAccount": true,
      "timeZone": "string"
    },
    "customerManagerLink": {
      "managerCustomer": "string",
      "managerLinkId": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED"
    },
    "dynamicSearchAdsSearchTermView": {
      "landingPage": "string",
      "resourceName": "string"
    },
    "genderView": {
      "resourceName": "string"
    },
    "keywordView": {
      "resourceName": "string"
    },
    "label": {
      "id": "string",
      "name": "string",
      "resourceName": "string",
      "status": "UNSPECIFIED",
      "textLabel": {
        "backgroundColor": "string",
        "description": "string"
      }
    },
    "locationView": {
      "resourceName": "string"
    },
    "metrics": {
      "absoluteTopImpressionPercentage": 0,
      "allConversions": 0,
      "allConversionsByConversionDate": 0,
      "allConversionsFromClickToCall": 0,
      "allConversionsFromDirections": 0,
      "allConversionsFromInteractionsRate": 0,
      "allConversionsFromInteractionsValuePerInteraction": 0,
      "allConversionsFromMenu": 0,
      "allConversionsFromOrder": 0,
      "allConversionsFromOtherEngagement": 0,
      "allConversionsFromStoreVisit": 0,
      "allConversionsFromStoreWebsite": 0,
      "allConversionsValue": 0,
      "allConversionsValueByConversionDate": 0,
      "allConversionsValuePerCost": 0,
      "averageCost": 0,
      "averageCpc": 0,
      "averageCpm": 0,
      "clicks": "string",
      "clientAccountConversions": 0,
      "clientAccountConversionsValue": 0,
      "clientAccountViewThroughConversions": "string",
      "contentBudgetLostImpressionShare": 0,
      "contentImpressionShare": 0,
      "contentRankLostImpressionShare": 0,
      "conversions": 0,
      "conversionsByConversionDate": 0,
      "conversionsFromInteractionsRate": 0,
      "conversionsFromInteractionsValuePerInteraction": 0,
      "conversionsValue": 0,
      "conversionsValueByConversionDate": 0,
      "conversionsValuePerCost": 0,
      "costMicros": "string",
      "costPerAllConversions": 0,
      "costPerConversion": 0,
      "costPerCurrentModelAttributedConversion": 0,
      "crossDeviceConversions": 0,
      "crossDeviceConversionsValue": 0,
      "ctr": 0,
      "historicalCreativeQualityScore": "UNSPECIFIED",
      "historicalLandingPageQualityScore": "UNSPECIFIED",
      "historicalQualityScore": "string",
      "historicalSearchPredictedCtr": "UNSPECIFIED",
      "impressions": "string",
      "interactionEventTypes": [
        "UNSPECIFIED"
      ],
      "interactionRate": 0,
      "interactions": "string",
      "invalidClickRate": 0,
      "invalidClicks": "string",
      "mobileFriendlyClicksPercentage": 0,
      "searchAbsoluteTopImpressionShare": 0,
      "searchBudgetLostAbsoluteTopImpressionShare": 0,
      "searchBudgetLostImpressionShare": 0,
      "searchBudgetLostTopImpressionShare": 0,
      "searchClickShare": 0,
      "searchExactMatchImpressionShare": 0,
      "searchImpressionShare": 0,
      "searchRankLostAbsoluteTopImpressionShare": 0,
      "searchRankLostImpressionShare": 0,
      "searchRankLostTopImpressionShare": 0,
      "searchTopImpressionShare": 0,
      "topImpressionPercentage": 0,
      "valuePerAllConversions": 0,
      "valuePerAllConversionsByConversionDate": 0,
      "valuePerConversion": 0,
      "valuePerConversionsByConversionDate": 0,
      "visits": 0
    },
    "productGroupView": {
      "resourceName": "string"
    },
    "segments": {
      "conversionAction": "string",
      "conversionActionCategory": "UNSPECIFIED",
      "conversionActionName": "string",
      "date": "string",
      "dayOfWeek": "UNSPECIFIED",
      "device": "UNSPECIFIED",
      "month": "string",
      "quarter": "string",
      "week": "string",
      "year": 0
    },
    "userList": {
      "id": "string",
      "name": "string",
      "resourceName": "string",
      "type": "UNSPECIFIED"
    },
    "webpageView": {
      "resourceName": "string"
    }
  }
}
```

Response message for SearchAds360Service.SearchStream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customColumnHeaders|[[GoogleAdsSearchads360V0Services__CustomColumnHeader](#schemagoogleadssearchads360v0services__customcolumnheader)]|false|none|The headers of the custom columns in the results.|
|fieldMask|string(google-fieldmask)|false|none|FieldMask that represents what fields were requested by the user.|
|requestId|string|false|none|The unique id of the request that is used for debugging purposes.|
|results|[[GoogleAdsSearchads360V0Services__SearchAds360Row](#schemagoogleadssearchads360v0services__searchads360row)]|false|none|The list of rows that matched the query.|
|summaryRow|[GoogleAdsSearchads360V0Services__SearchAds360Row](#schemagoogleadssearchads360v0services__searchads360row)|false|none|Summary row that contains summary of metrics in results. Summary of metrics means aggregation of metrics across all results, here aggregation could be sum, average, rate, etc.|
