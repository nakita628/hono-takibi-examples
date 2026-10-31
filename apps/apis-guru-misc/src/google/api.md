<h1 id="travel-partner-api">Travel Partner API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Travel Partner API provides you with a RESTful interface to the Google Hotel Center platform. It enables an app to efficiently retrieve and change Hotel Center data, and is thus suitable for managing large or complex accounts.

Base URLs:

* <a href="https://travelpartner.googleapis.com/">https://travelpartner.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/hotels/hotel-prices/api-reference">External documentation</a>

<h1 id="travel-partner-api-accounts">accounts</h1>

## travelpartner.accounts.hotels.setLiveOnGoogle

<a id="opIdtravelpartner.accounts.hotels.setLiveOnGoogle"></a>

> Code samples

```bash
curl https://example.com/v3/string/hotels:setLiveOnGoogle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "liveOnGoogle": true,
    "partnerHotelIds": [
      "string"
    ]
  }'
```

`POST /v3/{account}/hotels:setLiveOnGoogle`

Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.

> Body parameter

```json
{
  "liveOnGoogle": true,
  "partnerHotelIds": [
    "string"
  ]
}
```

<h3 id="travelpartneraccountshotelssetliveongoogle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Required. The resource name of the account. The format is accounts/{account_id}.|
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
|body|body|[SetLiveOnGoogleRequest](#schemasetliveongooglerequest)|false|none|
|» liveOnGoogle|body|boolean|false|Required. Whether the property will show on Google. When true, Google will show the properties if their integration is complete and the property is available. When false, Google will never show the properties.|
|» partnerHotelIds|body|[string]|false|Required. Identifies the properties to update with the liveOnGoogle setting.|

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
  "failedHotelIds": [
    "string"
  ],
  "updatedHotelIds": [
    "string"
  ]
}
```

<h3 id="travelpartneraccountshotelssetliveongoogle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SetLiveOnGoogleResponse](#schemasetliveongoogleresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.reconciliationReports.get

<a id="opIdtravelpartner.accounts.reconciliationReports.get"></a>

> Code samples

```bash
curl https://example.com/v3/string \
  -H 'Accept: application/json'
```

`GET /v3/{name}`

Returns a reconciliation report.

<h3 id="travelpartneraccountsreconciliationreportsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the reconciliation report to fetch. The format is `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`.|
|includeMatchedPrices|query|boolean|false|Set to true if matched prices are to be added into the report.|
|includeNonScoring|query|boolean|false|Set to true if non-account impacting rows are to be added into the report.|
|includePixels|query|boolean|false|Set to true if pixel signals are to be added into the report.|
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
  "contents": "string",
  "fileName": "string",
  "name": "string"
}
```

<h3 id="travelpartneraccountsreconciliationreportsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReconciliationReport](#schemareconciliationreport)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.accountLinks.delete

<a id="opIdtravelpartner.accounts.accountLinks.delete"></a>

> Code samples

```bash
curl https://example.com/v3/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v3/{name}`

Deletes an account link.

<h3 id="travelpartneraccountsaccountlinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the account link being deleted. The format is `accounts/{account_id}/accountLinks/{account_link_id}`.|
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

<h3 id="travelpartneraccountsaccountlinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.brands.patch

<a id="opIdtravelpartner.accounts.brands.patch"></a>

> Code samples

```bash
curl https://example.com/v3/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "displayNames": [
      {
        "languageCode": "string",
        "text": "string"
      }
    ],
    "icon": "string"
  }'
```

`PATCH /v3/{name}`

Updates a brand.

> Body parameter

```json
{
  "displayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "icon": "string"
}
```

<h3 id="travelpartneraccountsbrandspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name for the brand in the format `accounts/{account_id}/brands/{brand_id}`. The `brand_id` corresponds to the partner's brand identifier used for landing page matching and the property-level brand identifier. A default brand is applied to properties that do not have a brand. The `brand_id` of the default brand is `NO_BRAND_ID`. It can be fetched and updated like any configured brand.|
|allowMissing|query|boolean|false|When true, and the Brand is not found, a new Brand will be created. In this situation, `update_mask` is ignored.|
|updateMask|query|string|false|Required. The field to update. Only the `display_names` and `icon` fields can be updated. Use the syntax shown in the example URI below and provide the new value in the request body. Example request URI and request body: ``` PATCH https://travelpartner.googleapis.com/v3/accounts/123456789/ brands/my-brand?update_mask=brand.display_names ``` ``` { "display_names": [{ "language": "en" "text": "Gilles' Gites" }] } ``` The information above is sufficient for forming the URI and request body. The sentence below is auto-generated, supplemental information about the `FieldMask` format in general.|
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
|body|body|[Brand](#schemabrand)|false|none|
|» displayNames|body|[[LocalizedText](#schemalocalizedtext)]|false|Input only. The name Google displays for the brand's properties. Setting the display names is only necessary if you want to override the landing page display name or account-level display name for the brand. Google reviews the display names for appropriate content. When there are multiple languages, Google will only show the display names once Google approves all the languages.|
|» icon|body|string|false|Input only. The brand's [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource) identifying the brand's icon. The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`.|

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
  "activeDisplayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "activeIcon": "string",
  "activeIconUri": "string",
  "displayNameDisapprovalReason": [
    {
      "disapprovalReason": "DISAPPROVAL_REASON_UNSPECIFIED",
      "languageCode": "string"
    }
  ],
  "displayNameState": "REVIEW_STATE_UNSPECIFIED",
  "displayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "icon": "string",
  "iconDisapprovalReasons": [
    "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED"
  ],
  "iconState": "REVIEW_STATE_UNSPECIFIED",
  "name": "string",
  "propertyCount": "string",
  "submittedDisplayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "submittedIcon": "string"
}
```

<h3 id="travelpartneraccountsbrandspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Brand](#schemabrand)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.freeBookingLinksReportViews.query

<a id="opIdtravelpartner.accounts.freeBookingLinksReportViews.query"></a>

> Code samples

```bash
curl https://example.com/v3/string/freeBookingLinksReportViews:query \
  -H 'Accept: application/json'
```

`GET /v3/{name}/freeBookingLinksReportViews:query`

**DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.

<h3 id="travelpartneraccountsfreebookinglinksreportviewsquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the account being queried. Format: accounts/{account_id}|
|aggregateBy|query|string|false|Specifies how to segment the metrics returned by the query. For example, if `userRegionCode` is specified, the `freeBookingLinksResult` will provide metrics aggregated by user region. The string value is a comma-separated list of fields. Valid fields are: `date`, `userRegionCode`, `deviceType`, `partnerHotelId`, and `partnerHotelDisplayName`. Only fields specified here are included in the FreeBookingLinksResult.|
|filter|query|string|false|The conditions (fields and expressions) used to filter the free booking link metrics for the account being queried. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions can be joined using the `and` operator. The `date` field is required. All other fields are optional. The `date` field values are inclusive and must be in YYYY-MM-DD format. The earliest acceptable date is 2021-03-09; earlier date values will be coerced to 2021-03-09. Values for `partnerHotelDisplayName` are matched case-insensitively. Examples of valid conditions are as follows: * `date = '2021-12-03'` * `date between '2021-12-03' and '2021-12-08'` * `deviceType = 'TABLET'` * `deviceType in ('MOBILE', 'TABLET')` * `partnerHotelId = 'AAA'` * `partnerHotelId in ('AAA', 'BBB')` * `partnerHotelDisplayName = 'hotel A'` * `partnerHotelDisplayName in ('Hotel A', 'HOTEL b')` * `userRegionCode = 'US'` * `userRegionCode in ('US', 'CA')`|
|pageSize|query|integer|false|The maximum number of participation results to return. The service may return fewer than this value. If unspecified, at most 10,000 results will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.|
|pageToken|query|string|false|A page token, received from a previous QueryParticipationReport request. Provide this to receive the subsequent page. When paginating, all other parameters provided to QueryParticipationReport must match the call that provided the page token.|
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
  "results": [
    {
      "clickCount": "string",
      "date": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "deviceType": "DEVICE_UNSPECIFIED",
      "partnerHotelDisplayName": "string",
      "partnerHotelId": "string",
      "userRegionCode": "string"
    }
  ]
}
```

<h3 id="travelpartneraccountsfreebookinglinksreportviewsquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QueryFreeBookingLinksReportResponse](#schemaqueryfreebookinglinksreportresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.participationReportViews.query

<a id="opIdtravelpartner.accounts.participationReportViews.query"></a>

> Code samples

```bash
curl https://example.com/v3/string/participationReportViews:query \
  -H 'Accept: application/json'
```

`GET /v3/{name}/participationReportViews:query`

Provides the ability to query (get, filter, and segment) a participation report for a particular account.

<h3 id="travelpartneraccountsparticipationreportviewsquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
|aggregateBy|query|string|false|Specifies how to segment the metrics returned by the query. For example, if `userRegionCode` is specified as the `aggregate_by` value, the `participationResult` will provide metrics aggregated by user region. The string value is a comma-separated list of fields. Valid fields are: `date`, `userRegionCode`, `deviceType`, `partnerHotelId`, `hotelRegionCode`, `advanceBookingWindow`, `lengthOfStayDays`, `checkinDate`, and `occupancy`. Fields that are not specified are not included in the ParticipationResult. Using an `aggregateBy` specification that produces a large number of rows will cause an error. This is especially true when aggregating by `partnerHotelId` or more than two fields. To reduce the possibiliy of an error, filter by `partnerHotelId` and `date` to only include a select number of hotels and dates. Accounts with a large number of hotels will need to further reduce data with more filtering.|
|filter|query|string|false|The conditions (fields and expressions) used to filter the participation metrics for the account being queried. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions can be joined using the `and` operator. The `date` field is required. All other fields are optional. Examples of valid conditions are as follows: * `advanceBookingWindow = 2` * `advanceBookingWindow >= 0` * `advanceBookingWindow <= 5` * `advanceBookingWindow between 1 and 5` * `checkinDate = '2020-10-01'` * `checkinDate >= '2020-10-01'` * `checkinDate <= '2020-10-01'` * `checkinDate between '2020-10-01' and '2020-10-05'` * `date = '2020-02-04'` * `date between '2020-02-04' and '2020-02-09'` * `deviceType = 'TABLET'` * `deviceType in ('MOBILE', 'TABLET')` * `hotelRegionCode = 'US'` * `hotelRegionCode in ('US', 'CA')` * `lengthOfStayDays = 2` * `lengthOfStayDays >= 0` * `lengthOfStayDays <= 5` * `lengthOfStayDays between 1 and 5` * `occupancy = 2` * `occupancy >= 0` * `occupancy <= 5` * `occupancy between 1 and 5` * `partnerHotelId = 'AAA'` * `partnerHotelId in ('AAA', 'BBB')` * `userRegionCode = 'US'` * `userRegionCode in ('US', 'CA')`|
|pageSize|query|integer|false|The maximum number of participation results to return. The service may return fewer than this value. If unspecified, at most 10,000 results will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.|
|pageToken|query|string|false|A page token, received from a previous QueryParticipationReport request. Provide this to receive the subsequent page. When paginating, all other parameters provided to QueryParticipationReport must match the call that provided the page token.|
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
  "results": [
    {
      "key": {
        "advanceBookingWindow": 0,
        "checkinDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "date": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "deviceType": "DEVICE_UNSPECIFIED",
        "hotelRegionCode": "string",
        "lengthOfStayDays": 0,
        "occupancy": 0,
        "partnerHotelId": "string",
        "userRegionCode": "string"
      },
      "missedParticipationCount": "string",
      "missedParticipationCountDetails": {
        "hotelSuspendedCount": "string",
        "noAvailabilityCount": "string",
        "noLandingPageCount": "string",
        "noPriceCount": "string",
        "noPriceCountDetails": {
          "livePricingConfigIssueCount": "string",
          "livePricingNotAvailableCount": "string",
          "livePricingNotTriggeredCount": "string",
          "livePricingOtherReasonCount": "string",
          "livePricingTechnicalIssueCount": "string"
        },
        "noTaxBreakdownCount": "string",
        "otherReasonCount": "string",
        "priceMissingCount": "string",
        "priceMissingCountDetails": {
          "bandwidthDepletedCount": "string",
          "cacheRateMissingCount": "string",
          "itineraryBlockedCount": "string",
          "livePricingErrorCount": "string",
          "livePricingNotSetupCount": "string",
          "livePricingTimeoutCount": "string"
        },
        "priceProblemCount": "string",
        "priceProblemCountDetails": {
          "hotelSuspendedCount": "string",
          "priceUnusuallyHighCount": "string",
          "priceUnusuallyLowCount": "string",
          "taxesAndFeesMissingCount": "string"
        },
        "priceUnavailableCount": "string",
        "priceUnavailableCountDetails": {
          "participationNotLikelyCount": "string",
          "priceUnavailableCount": "string"
        }
      },
      "opportunityCount": "string",
      "participationCount": "string",
      "participationPercent": 0,
      "partnerHotelDisplayName": "string"
    }
  ]
}
```

<h3 id="travelpartneraccountsparticipationreportviewsquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QueryParticipationReportResponse](#schemaqueryparticipationreportresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.propertyPerformanceReportViews.query

<a id="opIdtravelpartner.accounts.propertyPerformanceReportViews.query"></a>

> Code samples

```bash
curl https://example.com/v3/string/propertyPerformanceReportViews:query \
  -H 'Accept: application/json'
```

`GET /v3/{name}/propertyPerformanceReportViews:query`

Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.

<h3 id="travelpartneraccountspropertyperformancereportviewsquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the account being queried. Format: accounts/{account_id}|
|aggregateBy|query|string|false|Specifies how to segment the metrics returned by the query. For example, if `userRegionCode` is specified, the `PropertyPerformanceResult` will provide metrics aggregated by user region. The string value is a comma-separated list of fields. Valid fields are: `advanceBookingWindow`, `brand`, `date`, `deviceType`, `highIntentUsers`, `lengthOfStay`, `propertyRegionCode`, `occupancy`, `partnerPropertyId`, `partnerPropertyDisplayName`, and `userRegionCode`. Only fields specified here are included in the PropertyPerformanceResult.|
|filter|query|string|false|The conditions (fields and expressions) used to filter the property performance metrics for the account being queried. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions can be joined using the `and` operator. The `date` field is required. All other fields are optional. The `date` field values are inclusive and must be in YYYY-MM-DD format. The earliest acceptable date is 2021-03-09; earlier date values will be coerced to 2021-03-09. Values for `partnerPropertyDisplayName` and `brand` are matched case-insensitively. Examples of valid conditions are as follows: * `advanceBookingWindow = 'ADVANCE_BOOKING_WINDOW_SAME_DAY'` * `advanceBookingWindow in ('ADVANCE_BOOKING_WINDOW_SAME_DAY', 'ADVANCE_BOOKING_WINDOW_DAYS_61_TO_90')` * `brand = 'Brand A'` * `brand in ('Brand A', 'brand B')` * `date = '2021-12-03'` * `date between '2021-12-03' and '2021-12-08'` * `deviceType = 'TABLET'` * `deviceType in ('MOBILE', 'TABLET')` * `highIntentUsers = 'TRUE'` * `highIntentUsers = 'FALSE'` * `lengthOfStay = 'LENGTH_OF_STAY_NIGHTS_2'` * `lengthOfStay in ('LENGTH_OF_STAY_NIGHTS_2', 'LENGTH_OF_STAY_NIGHTS_4_TO_7')` * `propertyRegionCode = 'US'` * `propertyRegionCode in ('US', 'CA')` * `occupancy = 'OCCUPANCY_2'` * `occupancy in ('OCCUPANCY_2', 'OCCUPANCY_OVER_4')` * `partnerPropertyId = 'AAA'` * `partnerPropertyId in ('AAA', 'BBB')` * `partnerPropertyDisplayName = 'hotel A'` * `partnerPropertyDisplayName in ('Hotel A', 'HOTEL b')` * `userRegionCode = 'US'` * `userRegionCode in ('US', 'CA')`|
|pageSize|query|integer|false|The maximum number of participation results to return. The service may return fewer than this value. If unspecified, at most 10,000 results will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.|
|pageToken|query|string|false|A page token, received from a previous QueryParticipationReport request. Provide this to receive the subsequent page. When paginating, all other parameters provided to QueryParticipationReport must match the call that provided the page token.|
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
  "results": [
    {
      "adsClickCount": "string",
      "adsClickthroughRate": 0,
      "adsImpressionCount": "string",
      "advanceBookingWindow": "ADVANCE_BOOKING_WINDOW_UNSPECIFIED",
      "brand": "string",
      "clickCount": "string",
      "clickthroughRate": 0,
      "date": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "deviceType": "DEVICE_UNSPECIFIED",
      "highIntentUsers": true,
      "impressionCount": "string",
      "lengthOfStay": "LENGTH_OF_STAY_UNSPECIFIED",
      "occupancy": "OCCUPANCY_UNSPECIFIED",
      "partnerPropertyDisplayName": "string",
      "partnerPropertyId": "string",
      "propertyRegionCode": "string",
      "userRegionCode": "string"
    }
  ]
}
```

<h3 id="travelpartneraccountspropertyperformancereportviewsquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QueryPropertyPerformanceReportResponse](#schemaquerypropertyperformancereportresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.accountLinks.list

<a id="opIdtravelpartner.accounts.accountLinks.list"></a>

> Code samples

```bash
curl https://example.com/v3/string/accountLinks \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/accountLinks`

Returns the account links for a Hotel Center account.

<h3 id="travelpartneraccountsaccountlinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
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
  "accountLinks": [
    {
      "accountLinkTarget": {
        "allHotels": true,
        "hotelList": {
          "partnerHotelIds": [
            "string"
          ]
        }
      },
      "googleAdsCustomerName": "string",
      "name": "string",
      "status": "ACCOUNT_LINK_STATUS_UNSPECIFIED"
    }
  ]
}
```

<h3 id="travelpartneraccountsaccountlinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAccountLinksResponse](#schemalistaccountlinksresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.accountLinks.create

<a id="opIdtravelpartner.accounts.accountLinks.create"></a>

> Code samples

```bash
curl https://example.com/v3/string/accountLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountLinkTarget": {
      "allHotels": true,
      "hotelList": {
        "partnerHotelIds": [
          "string"
        ]
      }
    },
    "googleAdsCustomerName": "string",
    "name": "string",
    "status": "ACCOUNT_LINK_STATUS_UNSPECIFIED"
  }'
```

`POST /v3/{parent}/accountLinks`

Creates a new account link between a Hotel Center account and a Google Ads account.

> Body parameter

```json
{
  "accountLinkTarget": {
    "allHotels": true,
    "hotelList": {
      "partnerHotelIds": [
        "string"
      ]
    }
  },
  "googleAdsCustomerName": "string",
  "name": "string",
  "status": "ACCOUNT_LINK_STATUS_UNSPECIFIED"
}
```

<h3 id="travelpartneraccountsaccountlinkscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the Hotel Center account being queried. The format is `accounts/{account_id}`.|
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
|body|body|[AccountLink](#schemaaccountlink)|false|none|
|» accountLinkTarget|body|[AccountLinkTarget](#schemaaccountlinktarget)|false|Required for CREATE requests. The properties in the Hotel Center account that can be managed using the linked Google Ads account.|
|» googleAdsCustomerName|body|string|false|Required for CREATE requests. The value representing the Google Ads customer ID in the format `customers/{google_ads_customer_id}`. For example: `customers/0123456789`. Note that the `googleAdsCustomerName` field is not returned in responses to GET requests.|
|» name|body|string|false|The resource name for the account link in the format `accounts/{account_id}/accountLinks/{account_link_id}`.|
|» status|body|string|false|The current status of the account link.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|ACCOUNT_LINK_STATUS_UNSPECIFIED|
|» status|ACCOUNT_LINK_STATUS_UNKNOWN|
|» status|REQUESTED_FROM_HOTEL_CENTER|
|» status|REQUESTED_FROM_GOOGLE_ADS|
|» status|APPROVED|

> Example responses

> 200 Response

```json
{
  "accountLinkTarget": {
    "allHotels": true,
    "hotelList": {
      "partnerHotelIds": [
        "string"
      ]
    }
  },
  "googleAdsCustomerName": "string",
  "name": "string",
  "status": "ACCOUNT_LINK_STATUS_UNSPECIFIED"
}
```

<h3 id="travelpartneraccountsaccountlinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AccountLink](#schemaaccountlink)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.brands.list

<a id="opIdtravelpartner.accounts.brands.list"></a>

> Code samples

```bash
curl https://example.com/v3/string/brands \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/brands`

Returns the brands for a partner account.

<h3 id="travelpartneraccountsbrandslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the account being queried. The format is `accounts/{account_id}`.|
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
  "brands": [
    {
      "activeDisplayNames": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ],
      "activeIcon": "string",
      "activeIconUri": "string",
      "displayNameDisapprovalReason": [
        {
          "disapprovalReason": "DISAPPROVAL_REASON_UNSPECIFIED",
          "languageCode": "string"
        }
      ],
      "displayNameState": "REVIEW_STATE_UNSPECIFIED",
      "displayNames": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ],
      "icon": "string",
      "iconDisapprovalReasons": [
        "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED"
      ],
      "iconState": "REVIEW_STATE_UNSPECIFIED",
      "name": "string",
      "propertyCount": "string",
      "submittedDisplayNames": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ],
      "submittedIcon": "string"
    }
  ]
}
```

<h3 id="travelpartneraccountsbrandslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBrandsResponse](#schemalistbrandsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.brands.create

<a id="opIdtravelpartner.accounts.brands.create"></a>

> Code samples

```bash
curl https://example.com/v3/string/brands \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "displayNames": [
      {
        "languageCode": "string",
        "text": "string"
      }
    ],
    "icon": "string"
  }'
```

`POST /v3/{parent}/brands`

Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.

> Body parameter

```json
{
  "displayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "icon": "string"
}
```

<h3 id="travelpartneraccountsbrandscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the Hotel Center account being queried. The format is `accounts/{account_id}`.|
|brandId|query|string|false|Required. The partner-determined brand identifier.|
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
|body|body|[Brand](#schemabrand)|false|none|
|» displayNames|body|[[LocalizedText](#schemalocalizedtext)]|false|Input only. The name Google displays for the brand's properties. Setting the display names is only necessary if you want to override the landing page display name or account-level display name for the brand. Google reviews the display names for appropriate content. When there are multiple languages, Google will only show the display names once Google approves all the languages.|
|» icon|body|string|false|Input only. The brand's [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource) identifying the brand's icon. The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`.|

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
  "activeDisplayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "activeIcon": "string",
  "activeIconUri": "string",
  "displayNameDisapprovalReason": [
    {
      "disapprovalReason": "DISAPPROVAL_REASON_UNSPECIFIED",
      "languageCode": "string"
    }
  ],
  "displayNameState": "REVIEW_STATE_UNSPECIFIED",
  "displayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "icon": "string",
  "iconDisapprovalReasons": [
    "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED"
  ],
  "iconState": "REVIEW_STATE_UNSPECIFIED",
  "name": "string",
  "propertyCount": "string",
  "submittedDisplayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "submittedIcon": "string"
}
```

<h3 id="travelpartneraccountsbrandscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Brand](#schemabrand)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.hotelViews.list

<a id="opIdtravelpartner.accounts.hotelViews.list"></a>

> Code samples

```bash
curl https://example.com/v3/string/hotelViews \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/hotelViews`

Returns the list of hotel views.

<h3 id="travelpartneraccountshotelviewslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
|filter|query|string|false|Optional. The conditions (fields and expressions) used to filter HotelViews. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions cannot be joined. The `hotelId` field can be used to select specific hotels. The `liveOnGoogle` field can select properties that Google shows, or properties that are omitted in google search results. The `matchStatus` field can be used to filter the list of HotelViews returned for the account. Examples of valid conditions and their syntax are as follows: * `hotelId = 'hotel_ABC'` * `hotelId in ('hotel_ABC', 'hotel_XYZ')` * `liveOnGoogle = 'TRUE'` * `liveOnGoogle = 'FALSE'` * `matchStatus = 'NOT_MATCHED'` * `matchStatus in ('NOT_MATCHED', 'MATCHED', 'MAP_OVERLAP')`|
|pageSize|query|integer|false|Number of elements to retrieve in a single page.|
|pageToken|query|string|false|Token of the page to retrieve.|
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
  "hotelViews": [
    {
      "dataIssueDetail": [
        {
          "dataIssueSeverity": "DATA_ISSUE_SEVERITY_UNSPECIFIED",
          "dataIssueType": "FEED_DATA_ISSUE_UNSPECIFIED",
          "isSelfResolving": true
        }
      ],
      "dataIssues": [
        "FEED_DATA_ISSUE_UNSPECIFIED"
      ],
      "googleClusterId": "string",
      "googleHotelDisplayName": "string",
      "googleHotelId": "string",
      "liveOnGoogle": true,
      "matchStatus": "MATCH_STATUS_UNSPECIFIED",
      "overclusteredPartnerHotelIds": [
        "string"
      ],
      "partnerHotelDisplayName": "string",
      "partnerHotelId": "string",
      "primaryOverclusteredPartnerHotelId": "string",
      "propertyDetails": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="travelpartneraccountshotelviewslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListHotelViewsResponse](#schemalisthotelviewsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.hotelViews.summarize

<a id="opIdtravelpartner.accounts.hotelViews.summarize"></a>

> Code samples

```bash
curl https://example.com/v3/string/hotelViews:summarize \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/hotelViews:summarize`

Returns summarized information about hotels.

<h3 id="travelpartneraccountshotelviewssummarize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
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
  "lastFeedSubmissionTime": "string",
  "lastManifestUpdateTime": "string",
  "liveOnGooglePropertyCount": "string",
  "matchedPropertyCount": "string",
  "overclusteredPropertyCount": "string",
  "overclusteredPropertyWithErrorsCount": "string",
  "unmatchedPropertyCount": "string",
  "unmatchedPropertyWithErrorsCount": "string"
}
```

<h3 id="travelpartneraccountshotelviewssummarize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SummarizeHotelViewsResponse](#schemasummarizehotelviewsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.icons.list

<a id="opIdtravelpartner.accounts.icons.list"></a>

> Code samples

```bash
curl https://example.com/v3/string/icons \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/icons`

Returns the `Icon`s for a partner account.

<h3 id="travelpartneraccountsiconslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the queried partner account. The format is `accounts/{account_id}`.|
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
  "icons": [
    {
      "disapprovalReasons": [
        "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED"
      ],
      "iconUri": "string",
      "imageData": "string",
      "name": "string",
      "reference": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="travelpartneraccountsiconslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListIconsResponse](#schemalisticonsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.icons.create

<a id="opIdtravelpartner.accounts.icons.create"></a>

> Code samples

```bash
curl https://example.com/v3/string/icons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "imageData": "string",
    "reference": "string"
  }'
```

`POST /v3/{parent}/icons`

Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1

> Body parameter

```json
{
  "imageData": "string",
  "reference": "string"
}
```

<h3 id="travelpartneraccountsiconscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the partner account owning the icon. The format is `accounts/{account_id}`.|
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
|body|body|[Icon](#schemaicon)|false|none|
|» imageData|body|string(byte)|false|Required. Input only. The icon contents, which must be in PNG format, or convertible to PNG.|
|» reference|body|string|false|Optional. Value for tracking the icon. It could be the primary key to your icon in your system, or the icon's filename. Google does not use this value.|

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
  "disapprovalReasons": [
    "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED"
  ],
  "iconUri": "string",
  "imageData": "string",
  "name": "string",
  "reference": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="travelpartneraccountsiconscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Icon](#schemaicon)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.listings.verify

<a id="opIdtravelpartner.accounts.listings.verify"></a>

> Code samples

```bash
curl https://example.com/v3/string/listings:verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "xmlListing": "string"
  }'
```

`POST /v3/{parent}/listings:verify`

returns verified listings with data issues and serving eligibilities

> Body parameter

```json
{
  "xmlListing": "string"
}
```

<h3 id="travelpartneraccountslistingsverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
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
|body|body|[VerifyListingsRequest](#schemaverifylistingsrequest)|false|none|
|» xmlListing|body|string|false|A listing that follows the XML format specified in https://developers.google.com/hotels/hotel-prices/xml-reference/hotel-list-feed.|

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
  "parsedListing": {
    "brand": "string",
    "category": [
      {
        "languageCode": "string",
        "text": "string"
      }
    ],
    "dataIssueDetail": [
      {
        "dataIssueSeverity": "DATA_ISSUE_SEVERITY_UNSPECIFIED",
        "dataIssueType": "FEED_DATA_ISSUE_UNSPECIFIED",
        "isSelfResolving": true
      }
    ],
    "description": [
      {
        "languageCode": "string",
        "text": "string"
      }
    ],
    "image": [
      {
        "galleryUri": [
          {
            "languageCode": "string",
            "text": "string"
          }
        ],
        "title": [
          {
            "languageCode": "string",
            "text": "string"
          }
        ],
        "uri": "string"
      }
    ],
    "imprecisionRadiusMeters": 0,
    "isServed": true,
    "listingName": [
      {
        "languageCode": "string",
        "text": "string"
      }
    ],
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "partnerListId": "string",
    "regionCode": "string",
    "review": [
      {
        "author": "string",
        "body": "string",
        "languageCode": "string",
        "link": "string",
        "rating": [
          {
            "ratingScale": 0,
            "score": 0,
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "reviewTime": "string",
        "title": "string",
        "type": "UNKNOWN",
        "visitTime": "string"
      }
    ],
    "unitAttributes": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="travelpartneraccountslistingsverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VerifyListingsResponse](#schemaverifylistingsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.priceAccuracyViews.list

<a id="opIdtravelpartner.accounts.priceAccuracyViews.list"></a>

> Code samples

```bash
curl https://example.com/v3/string/priceAccuracyViews \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/priceAccuracyViews`

Lists the available price accuracy views.

<h3 id="travelpartneraccountspriceaccuracyviewslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
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
  "priceAccuracyViews": [
    {
      "name": "string",
      "results": [
        {
          "adultOccupancy": 0,
          "affectsScore": true,
          "cachedPriceRecord": {
            "basePrice": 0,
            "currencyCode": "string",
            "taxesAndFees": 0,
            "time": "string"
          },
          "checkinDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "childOccupancy": 0,
          "correctionTime": "string",
          "deviceType": "DEVICE_UNSPECIFIED",
          "fetchedPriceRecord": {
            "basePrice": 0,
            "currencyCode": "string",
            "taxesAndFees": 0,
            "time": "string"
          },
          "finalDomain": "string",
          "hotel": "string",
          "hotelCountryCode": "string",
          "lengthOfStayDays": 0,
          "mismatchReason": "MISMATCH_REASON_UNSPECIFIED",
          "rateRuleId": "string",
          "signalSource": "SIGNAL_SOURCE_UNSPECIFIED",
          "url": "string",
          "userRegionCode": "string"
        }
      ]
    }
  ]
}
```

<h3 id="travelpartneraccountspriceaccuracyviewslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPriceAccuracyViewsResponse](#schemalistpriceaccuracyviewsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.priceAccuracyViews.summarize

<a id="opIdtravelpartner.accounts.priceAccuracyViews.summarize"></a>

> Code samples

```bash
curl https://example.com/v3/string/priceAccuracyViews:summarize \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/priceAccuracyViews:summarize`

Returns the price accuracy summary.

<h3 id="travelpartneraccountspriceaccuracyviewssummarize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account that is being queried. The format is `accounts/{account_id}`.|
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
  "currentBookOnGoogleScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "currentOverallScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "currentScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "currentWebsiteScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "predictedBookOnGoogleScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "predictedOverallScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "predictedScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "predictedWebsiteScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="travelpartneraccountspriceaccuracyviewssummarize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SummarizePriceAccuracyResponse](#schemasummarizepriceaccuracyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.priceCoverageViews.list

<a id="opIdtravelpartner.accounts.priceCoverageViews.list"></a>

> Code samples

```bash
curl https://example.com/v3/string/priceCoverageViews \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/priceCoverageViews`

Returns the entire price coverage history.

<h3 id="travelpartneraccountspricecoverageviewslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
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
  "priceCoverageViews": [
    {
      "calculationDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "matchedPropertyCount": 0,
      "priceCoverageBinaryPercent": 0,
      "priceCoverageBuckets": [
        {
          "advanceBookingWindowRange": "ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED",
          "availablePriceCount": "string",
          "lengthOfStayRange": "LENGTH_OF_STAY_RANGE_UNSPECIFIED",
          "priceCoveragePercent": 0
        }
      ],
      "priceCoveragePercent": 0
    }
  ]
}
```

<h3 id="travelpartneraccountspricecoverageviewslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPriceCoverageViewsResponse](#schemalistpricecoverageviewsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.priceCoverageViews.getLatest

<a id="opIdtravelpartner.accounts.priceCoverageViews.getLatest"></a>

> Code samples

```bash
curl https://example.com/v3/string/priceCoverageViews:latest \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/priceCoverageViews:latest`

Returns the latest price coverage view in full detail.

<h3 id="travelpartneraccountspricecoverageviewsgetlatest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
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
  "calculationDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "matchedPropertyCount": 0,
  "priceCoverageBinaryPercent": 0,
  "priceCoverageBuckets": [
    {
      "advanceBookingWindowRange": "ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED",
      "availablePriceCount": "string",
      "lengthOfStayRange": "LENGTH_OF_STAY_RANGE_UNSPECIFIED",
      "priceCoveragePercent": 0
    }
  ],
  "priceCoveragePercent": 0
}
```

<h3 id="travelpartneraccountspricecoverageviewsgetlatest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PriceCoverageView](#schemapricecoverageview)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.reconciliationReports.list

<a id="opIdtravelpartner.accounts.reconciliationReports.list"></a>

> Code samples

```bash
curl https://example.com/v3/string/reconciliationReports \
  -H 'Accept: application/json'
```

`GET /v3/{parent}/reconciliationReports`

Returns a list of the names of created reconciliation reports.

<h3 id="travelpartneraccountsreconciliationreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
|endDate|query|string|false|End of date range to fetch files for. Format is yyyy-mm-dd[THH[:MM[:SS]]]. If empty, reports until the end of time are fetched.|
|startDate|query|string|false|Beginning of date range to fetch files for. Format is yyyy-MM-dd[THH[:mm[:SS]]]. If empty, reports from the beginning of time onwards are fetched.|
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
  "reconciliationReports": [
    {
      "contents": "string",
      "fileName": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="travelpartneraccountsreconciliationreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReconciliationReportsResponse](#schemalistreconciliationreportsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.reconciliationReports.create

<a id="opIdtravelpartner.accounts.reconciliationReports.create"></a>

> Code samples

```bash
curl https://example.com/v3/string/reconciliationReports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contents": "string",
    "fileName": "string",
    "name": "string"
  }'
```

`POST /v3/{parent}/reconciliationReports`

Creates a reconciliation report and uploads it to Google.

> Body parameter

```json
{
  "contents": "string",
  "fileName": "string",
  "name": "string"
}
```

<h3 id="travelpartneraccountsreconciliationreportscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
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
|body|body|[ReconciliationReport](#schemareconciliationreport)|false|none|
|» contents|body|string|false|Required. The contents of the commission report. Report contents must conform to the requirements specified in [Reconciliation reports] (//support.google.com/hotelprices/answer/7019060#creating).|
|» fileName|body|string|false|Required. Desired filename of the reconciliation report.|
|» name|body|string|false|Resource name in the format `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`. The value for `{datetime}` must be from 0001-01-01T00:00:00 to 9999-12-31T23:59:59 inclusive.|

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
  "issues": [
    {
      "description": "string",
      "fieldName": "string",
      "lineNum": 0
    }
  ],
  "reconciliationReport": {
    "contents": "string",
    "fileName": "string",
    "name": "string"
  },
  "successfulRecordCount": 0
}
```

<h3 id="travelpartneraccountsreconciliationreportscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreateReconciliationReportResponse](#schemacreatereconciliationreportresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## travelpartner.accounts.reconciliationReports.validate

<a id="opIdtravelpartner.accounts.reconciliationReports.validate"></a>

> Code samples

```bash
curl https://example.com/v3/string/reconciliationReports:validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contents": "string",
    "fileName": "string",
    "name": "string"
  }'
```

`POST /v3/{parent}/reconciliationReports:validate`

Validates a reconciliation report.

> Body parameter

```json
{
  "contents": "string",
  "fileName": "string",
  "name": "string"
}
```

<h3 id="travelpartneraccountsreconciliationreportsvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the account being queried. The format is `accounts/{account_id}`.|
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
|body|body|[ReconciliationReport](#schemareconciliationreport)|false|none|
|» contents|body|string|false|Required. The contents of the commission report. Report contents must conform to the requirements specified in [Reconciliation reports] (//support.google.com/hotelprices/answer/7019060#creating).|
|» fileName|body|string|false|Required. Desired filename of the reconciliation report.|
|» name|body|string|false|Resource name in the format `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`. The value for `{datetime}` must be from 0001-01-01T00:00:00 to 9999-12-31T23:59:59 inclusive.|

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
  "issues": [
    {
      "description": "string",
      "fieldName": "string",
      "lineNum": 0
    }
  ],
  "successfulRecordCount": 0
}
```

<h3 id="travelpartneraccountsreconciliationreportsvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ValidateReconciliationReportResponse](#schemavalidatereconciliationreportresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccountLink">AccountLink</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlink"></a>
<a id="schema_AccountLink"></a>
<a id="tocSaccountlink"></a>
<a id="tocsaccountlink"></a>

```json
{
  "accountLinkTarget": {
    "allHotels": true,
    "hotelList": {
      "partnerHotelIds": [
        "string"
      ]
    }
  },
  "googleAdsCustomerName": "string",
  "name": "string",
  "status": "ACCOUNT_LINK_STATUS_UNSPECIFIED"
}
```

An account link. Represents the link between a Google Ads customer and a Hotel Ads (Hotel Center) account. An account link defines the set of hotels under the Hotel Center account that is linked to the Google Ads customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountLinkTarget|[AccountLinkTarget](#schemaaccountlinktarget)|false|none|Required for CREATE requests. The properties in the Hotel Center account that can be managed using the linked Google Ads account.|
|googleAdsCustomerName|string|false|none|Required for CREATE requests. The value representing the Google Ads customer ID in the format `customers/{google_ads_customer_id}`. For example: `customers/0123456789`. Note that the `googleAdsCustomerName` field is not returned in responses to GET requests.|
|name|string|false|none|The resource name for the account link in the format `accounts/{account_id}/accountLinks/{account_link_id}`.|
|status|string|false|none|The current status of the account link.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACCOUNT_LINK_STATUS_UNSPECIFIED|
|status|ACCOUNT_LINK_STATUS_UNKNOWN|
|status|REQUESTED_FROM_HOTEL_CENTER|
|status|REQUESTED_FROM_GOOGLE_ADS|
|status|APPROVED|

<h2 id="tocS_AccountLinkTarget">AccountLinkTarget</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlinktarget"></a>
<a id="schema_AccountLinkTarget"></a>
<a id="tocSaccountlinktarget"></a>
<a id="tocsaccountlinktarget"></a>

```json
{
  "allHotels": true,
  "hotelList": {
    "partnerHotelIds": [
      "string"
    ]
  }
}
```

Defines whether all properties or a subset of properties in the Hotel Center account can be managed with the linked Google Ads account. If a subset, the specific properties are specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allHotels|boolean|false|none|True if all properties under the Hotel Center account are made available to the account link. The default is `false`.|
|hotelList|[HotelList](#schemahotellist)|false|none|List of properties that is made available to the account link.|

<h2 id="tocS_Brand">Brand</h2>
<!-- backwards compatibility -->
<a id="schemabrand"></a>
<a id="schema_Brand"></a>
<a id="tocSbrand"></a>
<a id="tocsbrand"></a>

```json
{
  "activeDisplayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "activeIcon": "string",
  "activeIconUri": "string",
  "displayNameDisapprovalReason": [
    {
      "disapprovalReason": "DISAPPROVAL_REASON_UNSPECIFIED",
      "languageCode": "string"
    }
  ],
  "displayNameState": "REVIEW_STATE_UNSPECIFIED",
  "displayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "icon": "string",
  "iconDisapprovalReasons": [
    "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED"
  ],
  "iconState": "REVIEW_STATE_UNSPECIFIED",
  "name": "string",
  "propertyCount": "string",
  "submittedDisplayNames": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "submittedIcon": "string"
}
```

Brand-level icon and display name configuration. Once approved, the icon and display name appear in the search results for properties that the partner has assigned to this brand.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeDisplayNames|[[LocalizedText](#schemalocalizedtext)]|false|read-only|Output only. The brand's active display names in all provided languages, only present if the display name is approved for all provided languages.|
|activeIcon|string|false|read-only|Output only. The brand's active [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. An active icon is one that has been approved.|
|activeIconUri|string|false|read-only|Output only. URL of the active icon, only present when the icon has been approved.|
|displayNameDisapprovalReason|[[DisplayNameDisapprovalReason](#schemadisplaynamedisapprovalreason)]|false|read-only|Output only. Display name's disapproval reason. Only applies to display names with the review state 'REJECTED'.|
|displayNameState|string|false|read-only|Output only. The brand's display names review state, which applies to all display name language entries. If there are both submitted and active display names, this refers to the submitted display names.|
|displayNames|[[LocalizedText](#schemalocalizedtext)]|false|none|Input only. The name Google displays for the brand's properties. Setting the display names is only necessary if you want to override the landing page display name or account-level display name for the brand. Google reviews the display names for appropriate content. When there are multiple languages, Google will only show the display names once Google approves all the languages.|
|icon|string|false|none|Input only. The brand's [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource) identifying the brand's icon. The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`.|
|iconDisapprovalReasons|[string]|false|read-only|Output only. The icon's disapproval reason(s). Only applies to submitted icons with `REJECTED` state.|
|iconState|string|false|read-only|Output only. The brand's icon's review state. If there are both submitted and active icons, this refers to the submitted icon.|
|name|string|false|read-only|Output only. The resource name for the brand in the format `accounts/{account_id}/brands/{brand_id}`. The `brand_id` corresponds to the partner's brand identifier used for landing page matching and the property-level brand identifier. A default brand is applied to properties that do not have a brand. The `brand_id` of the default brand is `NO_BRAND_ID`. It can be fetched and updated like any configured brand.|
|propertyCount|string(int64)|false|read-only|Output only. The number of properties with the corresponding brand ID.|
|submittedDisplayNames|[[LocalizedText](#schemalocalizedtext)]|false|read-only|Output only. The brand's submitted display names in all provided languages, only present if the display name is new or rejected for any language.|
|submittedIcon|string|false|read-only|Output only. The brand's submitted [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. A submitted icon is one that is new or rejected.|

#### Enumerated Values

|Property|Value|
|---|---|
|displayNameState|REVIEW_STATE_UNSPECIFIED|
|displayNameState|REVIEW_STATE_NEW|
|displayNameState|APPROVED|
|displayNameState|REJECTED|
|iconDisapprovalReasons|IMAGE_DISAPPROVAL_REASON_UNSPECIFIED|
|iconDisapprovalReasons|NOT_LIKE_SITE|
|iconDisapprovalReasons|OFFENSIVE|
|iconDisapprovalReasons|LOW_QUALITY|
|iconDisapprovalReasons|ANIMATED|
|iconDisapprovalReasons|BAD_BACKGROUND|
|iconDisapprovalReasons|TEXT_TOO_SMALL|
|iconState|REVIEW_STATE_UNSPECIFIED|
|iconState|REVIEW_STATE_NEW|
|iconState|APPROVED|
|iconState|REJECTED|

<h2 id="tocS_CreateReconciliationReportResponse">CreateReconciliationReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereconciliationreportresponse"></a>
<a id="schema_CreateReconciliationReportResponse"></a>
<a id="tocScreatereconciliationreportresponse"></a>
<a id="tocscreatereconciliationreportresponse"></a>

```json
{
  "issues": [
    {
      "description": "string",
      "fieldName": "string",
      "lineNum": 0
    }
  ],
  "reconciliationReport": {
    "contents": "string",
    "fileName": "string",
    "name": "string"
  },
  "successfulRecordCount": 0
}
```

Response message for ReconciliationReportService.CreateReconciliationReport.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[[ReconciliationReportValidationIssue](#schemareconciliationreportvalidationissue)]|false|none|Issues that were encountered when validating the file.|
|reconciliationReport|[ReconciliationReport](#schemareconciliationreport)|false|none|Resource name of the new reconciliation report. The format is `accounts/{account_id}`.|
|successfulRecordCount|integer(int32)|false|none|The number of commission records that were successfully saved.|

<h2 id="tocS_DataIssueDetail">DataIssueDetail</h2>
<!-- backwards compatibility -->
<a id="schemadataissuedetail"></a>
<a id="schema_DataIssueDetail"></a>
<a id="tocSdataissuedetail"></a>
<a id="tocsdataissuedetail"></a>

```json
{
  "dataIssueSeverity": "DATA_ISSUE_SEVERITY_UNSPECIFIED",
  "dataIssueType": "FEED_DATA_ISSUE_UNSPECIFIED",
  "isSelfResolving": true
}
```

Details on a data issue in the listing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataIssueSeverity|string|false|none|The severity of the data issue.|
|dataIssueType|string|false|none|The type of the data issue.|
|isSelfResolving|boolean|false|none|Whether or not the issue is self-resolving. If true, the issue is expected to resolve itself. If false or not set, action is needed to resolve the issue. Refer to documentation on the data issue’s type for further information.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataIssueSeverity|DATA_ISSUE_SEVERITY_UNSPECIFIED|
|dataIssueSeverity|ERROR|
|dataIssueSeverity|WARNING|
|dataIssueSeverity|INFO|
|dataIssueType|FEED_DATA_ISSUE_UNSPECIFIED|
|dataIssueType|FEED_DATA_ISSUE_UNKNOWN|
|dataIssueType|NO_DATA_ISSUE|
|dataIssueType|DUPLICATE_ADDRESS|
|dataIssueType|MISSING_PHYSICAL_STREET_ADDRESS|
|dataIssueType|MISSING_STREET_NAME|
|dataIssueType|MISSING_STREET_NUMBER|
|dataIssueType|MISSING_ADDRESS|
|dataIssueType|MISSING_COUNTRY|
|dataIssueType|INVALID_POSTAL_CODE|
|dataIssueType|INVALID_POSTAL_CODE_SUFFIX|
|dataIssueType|UNEXPECTED_POSTAL_CODE_SUFFIX|
|dataIssueType|UNEXPECTED_POSTAL_CODE|
|dataIssueType|INVALID_AMENITIES|
|dataIssueType|INVALID_EMAIL_ADDRESS|
|dataIssueType|DUPLICATE_LATLONG|
|dataIssueType|LATLONG_INCONSISTENT_WITH_ADDRESS|
|dataIssueType|MISSING_LATLONG|
|dataIssueType|COULD_NOT_GEOCODE|
|dataIssueType|MISSING_HOTEL_NAME|
|dataIssueType|HOTEL_NAME_EMPTY|
|dataIssueType|INVALID_HOTEL_NAME|
|dataIssueType|HOTEL_NAME_TOO_LONG|
|dataIssueType|PARSE_ERROR_IN_XML|
|dataIssueType|UNEXPECTED_ATTRIBUTE_IN_XML|
|dataIssueType|DUPLICATE_PHONE_NUMBER|
|dataIssueType|MISSING_PHONE_NUMBER|
|dataIssueType|MISSING_VOICE_PHONE_NUMBER|
|dataIssueType|INVALID_PHONE_NUMBER_FORMAT|
|dataIssueType|INVALID_PHONE_NUMBER|
|dataIssueType|INVALID_PHONE_NUMBER_COUNTRY_CODE|
|dataIssueType|PHONE_NUMBER_TOO_LONG|
|dataIssueType|PHONE_NUMBER_TOO_SHORT|
|dataIssueType|INVALID_WEBSITE_URL|
|dataIssueType|ADWORDS_ATTRIBUTE_TOO_LONG|
|dataIssueType|BRAND_NOT_ALLOWED|
|dataIssueType|FLAGGED_DUE_TO_SUSPICIOUS_METADATA|
|dataIssueType|NOT_ENOUGH_IMAGES_PROVIDED|
|dataIssueType|IMAGE_PROCESSING_IN_PROGRESS|
|dataIssueType|CANNOT_FETCH_IMAGES|
|dataIssueType|INCOMPATIBLE_IMAGE_SIZE_OR_LOW_QUALITY|
|dataIssueType|MISSING_LANG_IN_RAW_LISTING|
|dataIssueType|IS_HOTEL|
|dataIssueType|MISSING_REQ_ATTR|
|dataIssueType|MISSING_NAME|
|dataIssueType|MISSING_LANG_IN_NAME|
|dataIssueType|VR_NAME_TOO_LONG|
|dataIssueType|TEST_PROPERTY|
|dataIssueType|NON_VR_ACCOMMODATION_TYPE_BASED_ON_LISTING_NAME|
|dataIssueType|BRAND_NAME_TOO_LONG|
|dataIssueType|MISSING_BRAND_NAME|
|dataIssueType|INVALID_REVIEW_RATING|
|dataIssueType|INVALID_CHECKIN_FORMAT|
|dataIssueType|INVALID_CHECKOUT_FORMAT|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DisplayNameDisapprovalReason">DisplayNameDisapprovalReason</h2>
<!-- backwards compatibility -->
<a id="schemadisplaynamedisapprovalreason"></a>
<a id="schema_DisplayNameDisapprovalReason"></a>
<a id="tocSdisplaynamedisapprovalreason"></a>
<a id="tocsdisplaynamedisapprovalreason"></a>

```json
{
  "disapprovalReason": "DISAPPROVAL_REASON_UNSPECIFIED",
  "languageCode": "string"
}
```

Disapproval reason of the display name in a specific language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disapprovalReason|string|false|none|Disapproval reason.|
|languageCode|string|false|none|Language of the disapproved display name.|

#### Enumerated Values

|Property|Value|
|---|---|
|disapprovalReason|DISAPPROVAL_REASON_UNSPECIFIED|
|disapprovalReason|PUNCTUATION|
|disapprovalReason|MARKETING_LANGUAGE|
|disapprovalReason|LANDING_PAGE_NOT_MATCHED|

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

<h2 id="tocS_FreeBookingLinksResult">FreeBookingLinksResult</h2>
<!-- backwards compatibility -->
<a id="schemafreebookinglinksresult"></a>
<a id="schema_FreeBookingLinksResult"></a>
<a id="tocSfreebookinglinksresult"></a>
<a id="tocsfreebookinglinksresult"></a>

```json
{
  "clickCount": "string",
  "date": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "deviceType": "DEVICE_UNSPECIFIED",
  "partnerHotelDisplayName": "string",
  "partnerHotelId": "string",
  "userRegionCode": "string"
}
```

**DEPRECATED:** Use `PropertyPerformanceResult` with `PropertyPerformanceReportService` instead. Represents a result from querying for free booking link stats for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clickCount|string(int64)|false|none|The total number of clicks that were recorded for this result.|
|date|[Date](#schemadate)|false|none|A date within the requested date range. Only present if `date` is specified in `aggregateBy` in the request.|
|deviceType|string|false|none|The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request.|
|partnerHotelDisplayName|string|false|none|Partner's hotel name. Only present if `partnerHotelDisplayName` is specified in `aggregateBy` in the request.|
|partnerHotelId|string|false|none|Partner's hotel ID. Only present if `partnerHotelId` is specified in `aggregateBy` in the request.|
|userRegionCode|string|false|none|ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request|

#### Enumerated Values

|Property|Value|
|---|---|
|deviceType|DEVICE_UNSPECIFIED|
|deviceType|DEVICE_UNKNOWN|
|deviceType|DESKTOP|
|deviceType|MOBILE|
|deviceType|TABLET|

<h2 id="tocS_HotelList">HotelList</h2>
<!-- backwards compatibility -->
<a id="schemahotellist"></a>
<a id="schema_HotelList"></a>
<a id="tocShotellist"></a>
<a id="tocshotellist"></a>

```json
{
  "partnerHotelIds": [
    "string"
  ]
}
```

The properties in the Hotel Center account that can be managed with the Google Ads account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partnerHotelIds|[string]|false|none|Hotel IDs.|

<h2 id="tocS_HotelPricePerItinerary">HotelPricePerItinerary</h2>
<!-- backwards compatibility -->
<a id="schemahotelpriceperitinerary"></a>
<a id="schema_HotelPricePerItinerary"></a>
<a id="tocShotelpriceperitinerary"></a>
<a id="tocshotelpriceperitinerary"></a>

```json
{
  "checkinDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "currencyCode": "string",
  "fees": 0,
  "lengthOfStayDays": 0,
  "price": 0,
  "taxes": 0,
  "updateTime": "string"
}
```

Hotel price for a given itinerary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkinDate|[Date](#schemadate)|false|none|Check-in date.|
|currencyCode|string|false|none|Currency for `price`, `taxes`, and `fees`.|
|fees|number(float)|false|none|Fees for this itinerary.|
|lengthOfStayDays|integer(int32)|false|none|Number of nights for the itinerary.|
|price|number(float)|false|none|Hotel price for this itinerary.|
|taxes|number(float)|false|none|Taxes for this itinerary.|
|updateTime|string(google-datetime)|false|none|Update timestamp for this hotel price.|

<h2 id="tocS_HotelView">HotelView</h2>
<!-- backwards compatibility -->
<a id="schemahotelview"></a>
<a id="schema_HotelView"></a>
<a id="tocShotelview"></a>
<a id="tocshotelview"></a>

```json
{
  "dataIssueDetail": [
    {
      "dataIssueSeverity": "DATA_ISSUE_SEVERITY_UNSPECIFIED",
      "dataIssueType": "FEED_DATA_ISSUE_UNSPECIFIED",
      "isSelfResolving": true
    }
  ],
  "dataIssues": [
    "FEED_DATA_ISSUE_UNSPECIFIED"
  ],
  "googleClusterId": "string",
  "googleHotelDisplayName": "string",
  "googleHotelId": "string",
  "liveOnGoogle": true,
  "matchStatus": "MATCH_STATUS_UNSPECIFIED",
  "overclusteredPartnerHotelIds": [
    "string"
  ],
  "partnerHotelDisplayName": "string",
  "partnerHotelId": "string",
  "primaryOverclusteredPartnerHotelId": "string",
  "propertyDetails": "string"
}
```

A hotel view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataIssueDetail|[[DataIssueDetail](#schemadataissuedetail)]|false|none|The type and severity of each data quality issue in the feed. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article.|
|dataIssues|[string]|false|none|DEPRECATED. Indicates that the hotel has data quality issues. The value of this field indicates the type of error. This has been replaced with the data_issue_detail field. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article.|
|googleClusterId|string(uint64)|false|none|The Google Maps identifier for the hotel.|
|googleHotelDisplayName|string|false|none|Google's hotel name.|
|googleHotelId|string(uint64)|false|none|Google's canonical ID for the hotel.|
|liveOnGoogle|boolean|false|none|Optional. Whether the hotel appears in Google's hotel booking links. Declaration & behavior to get detection of presence/absence in JSON conversion.|
|matchStatus|string|false|none|Current matching status of the hotel.|
|overclusteredPartnerHotelIds|[string]|false|none|Other hotels with which the hotel is overclustered. If your feed contains overclustered hotels, update the feed and resubmit it. To do this, you can use the manual match tool.|
|partnerHotelDisplayName|string|false|none|Partner's hotel name.|
|partnerHotelId|string|false|none|The unique ID of the hotel that the partner provides in their Hotel List Feed.|
|primaryOverclusteredPartnerHotelId|string|false|none|The primary hotel in the overclustered set.|
|propertyDetails|string|false|none|Optional. A URL to the property on Google. Only available for properties that are listed.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataIssues|FEED_DATA_ISSUE_UNSPECIFIED|
|dataIssues|FEED_DATA_ISSUE_UNKNOWN|
|dataIssues|NO_DATA_ISSUE|
|dataIssues|DUPLICATE_ADDRESS|
|dataIssues|MISSING_PHYSICAL_STREET_ADDRESS|
|dataIssues|MISSING_STREET_NAME|
|dataIssues|MISSING_STREET_NUMBER|
|dataIssues|MISSING_ADDRESS|
|dataIssues|MISSING_COUNTRY|
|dataIssues|INVALID_POSTAL_CODE|
|dataIssues|INVALID_POSTAL_CODE_SUFFIX|
|dataIssues|UNEXPECTED_POSTAL_CODE_SUFFIX|
|dataIssues|UNEXPECTED_POSTAL_CODE|
|dataIssues|INVALID_AMENITIES|
|dataIssues|INVALID_EMAIL_ADDRESS|
|dataIssues|DUPLICATE_LATLONG|
|dataIssues|LATLONG_INCONSISTENT_WITH_ADDRESS|
|dataIssues|MISSING_LATLONG|
|dataIssues|COULD_NOT_GEOCODE|
|dataIssues|MISSING_HOTEL_NAME|
|dataIssues|HOTEL_NAME_EMPTY|
|dataIssues|INVALID_HOTEL_NAME|
|dataIssues|HOTEL_NAME_TOO_LONG|
|dataIssues|PARSE_ERROR_IN_XML|
|dataIssues|UNEXPECTED_ATTRIBUTE_IN_XML|
|dataIssues|DUPLICATE_PHONE_NUMBER|
|dataIssues|MISSING_PHONE_NUMBER|
|dataIssues|MISSING_VOICE_PHONE_NUMBER|
|dataIssues|INVALID_PHONE_NUMBER_FORMAT|
|dataIssues|INVALID_PHONE_NUMBER|
|dataIssues|INVALID_PHONE_NUMBER_COUNTRY_CODE|
|dataIssues|PHONE_NUMBER_TOO_LONG|
|dataIssues|PHONE_NUMBER_TOO_SHORT|
|dataIssues|INVALID_WEBSITE_URL|
|dataIssues|ADWORDS_ATTRIBUTE_TOO_LONG|
|dataIssues|BRAND_NOT_ALLOWED|
|dataIssues|FLAGGED_DUE_TO_SUSPICIOUS_METADATA|
|dataIssues|NOT_ENOUGH_IMAGES_PROVIDED|
|dataIssues|IMAGE_PROCESSING_IN_PROGRESS|
|dataIssues|CANNOT_FETCH_IMAGES|
|dataIssues|INCOMPATIBLE_IMAGE_SIZE_OR_LOW_QUALITY|
|dataIssues|MISSING_LANG_IN_RAW_LISTING|
|dataIssues|IS_HOTEL|
|dataIssues|MISSING_REQ_ATTR|
|dataIssues|MISSING_NAME|
|dataIssues|MISSING_LANG_IN_NAME|
|dataIssues|VR_NAME_TOO_LONG|
|dataIssues|TEST_PROPERTY|
|dataIssues|NON_VR_ACCOMMODATION_TYPE_BASED_ON_LISTING_NAME|
|dataIssues|BRAND_NAME_TOO_LONG|
|dataIssues|MISSING_BRAND_NAME|
|dataIssues|INVALID_REVIEW_RATING|
|dataIssues|INVALID_CHECKIN_FORMAT|
|dataIssues|INVALID_CHECKOUT_FORMAT|
|matchStatus|MATCH_STATUS_UNSPECIFIED|
|matchStatus|MATCH_STATUS_UNKNOWN|
|matchStatus|NOT_MATCHED|
|matchStatus|MATCHED|
|matchStatus|MAP_OVERLAP|

<h2 id="tocS_Icon">Icon</h2>
<!-- backwards compatibility -->
<a id="schemaicon"></a>
<a id="schema_Icon"></a>
<a id="tocSicon"></a>
<a id="tocsicon"></a>

```json
{
  "disapprovalReasons": [
    "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED"
  ],
  "iconUri": "string",
  "imageData": "string",
  "name": "string",
  "reference": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Information about a partner's icon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disapprovalReasons|[string]|false|read-only|Output only. The icon's disapproval reason(s). Only applies to icons with `REJECTED` state.|
|iconUri|string|false|read-only|Output only. The approved icon's Google-hosted URI. Only applies to icons with `APPROVED` state.|
|imageData|string(byte)|false|none|Required. Input only. The icon contents, which must be in PNG format, or convertible to PNG.|
|name|string|false|read-only|Required. Output only. The resource name for the icon in the format `accounts/{account_id}/icons/{icon_id}`. Google generates the `icon_id` during the `create` operation. Use the `icon_id` to associate the icon with a brand using the [accounts.brands](/hotels/hotel-prices/api-reference/rest/v3/accounts.brands#resource:-brand) API.|
|reference|string|false|none|Optional. Value for tracking the icon. It could be the primary key to your icon in your system, or the icon's filename. Google does not use this value.|
|state|string|false|read-only|Output only. The icon's current state.|

#### Enumerated Values

|Property|Value|
|---|---|
|disapprovalReasons|IMAGE_DISAPPROVAL_REASON_UNSPECIFIED|
|disapprovalReasons|NOT_LIKE_SITE|
|disapprovalReasons|OFFENSIVE|
|disapprovalReasons|LOW_QUALITY|
|disapprovalReasons|ANIMATED|
|disapprovalReasons|BAD_BACKGROUND|
|disapprovalReasons|TEXT_TOO_SMALL|
|state|STATE_UNSPECIFIED|
|state|NEW|
|state|APPROVED|
|state|REJECTED|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "galleryUri": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "title": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "uri": "string"
}
```

A single image in a VR Listing. Title and gallery URL are stored per locale. NEXT ID: 4

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|galleryUri|[[LocalizedText](#schemalocalizedtext)]|false|none|URL that is deeplink to the image in a gallery (or a webpage).|
|title|[[LocalizedText](#schemalocalizedtext)]|false|none|Title of the image.|
|uri|string|false|none|URL that points to the binary image content directly.|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{
  "advanceBookingWindow": 0,
  "checkinDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "date": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "deviceType": "DEVICE_UNSPECIFIED",
  "hotelRegionCode": "string",
  "lengthOfStayDays": 0,
  "occupancy": 0,
  "partnerHotelId": "string",
  "userRegionCode": "string"
}
```

Key of a result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanceBookingWindow|integer(int32)|false|none|The number of days in advance the user wants to book the itinerary. If `advanceBookingWindow` is not a value of the `aggregateBy` parameter in the request call, then the `advanceBookingWindow` field is not returned in the `Key`.|
|checkinDate|[Date](#schemadate)|false|none|The check-in date of the itinerary. If `checkinDate` is not a value of the `aggregateBy` parameter in the request call, then the `checkinDate` field is not returned in the `Key`.|
|date|[Date](#schemadate)|false|none|The date for which you are requesting metrics. If `date` is not a value of the `aggregateBy` parameter in the request call, then the `date` field is not returned in the `Key`.|
|deviceType|string|false|none|The user’s device type. If `deviceType` is not a value of the `aggregateBy` parameter in the request call, then the `deviceType` field is not returned in the `Key`.|
|hotelRegionCode|string|false|none|CLDR region code of the country/region of the hotel. If `hotelRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `hotelRegionCode` field is not returned in the `Key`.|
|lengthOfStayDays|integer(int32)|false|none|The number of nights for the itinerary. If `lengthOfStayDays` is not a value of the `aggregateBy` parameter in the request call, then the `lengthOfStayDays` field is not returned in the `Key`.|
|occupancy|integer(int32)|false|none|The total occupancy of the itinerary. If `occupancy` is not a value of the `aggregateBy` parameter in the request call, then the `occupancy` field is not returned in the `Key`.|
|partnerHotelId|string|false|none|Partner's hotel ID. If `partnerHotelId` is not a value of the `aggregateBy` parameter in the request call, then the `partnerHotelId` field is not returned in the `Key`.|
|userRegionCode|string|false|none|ISO 3116 region code of the country/region of the user. If `userRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `userRegionCode` field is not returned in the `Key`.|

#### Enumerated Values

|Property|Value|
|---|---|
|deviceType|DEVICE_UNSPECIFIED|
|deviceType|DEVICE_UNKNOWN|
|deviceType|DESKTOP|
|deviceType|MOBILE|
|deviceType|TABLET|

<h2 id="tocS_LatLng">LatLng</h2>
<!-- backwards compatibility -->
<a id="schemalatlng"></a>
<a id="schema_LatLng"></a>
<a id="tocSlatlng"></a>
<a id="tocslatlng"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|The latitude in degrees. It must be in the range [-90.0, +90.0].|
|longitude|number(double)|false|none|The longitude in degrees. It must be in the range [-180.0, +180.0].|

<h2 id="tocS_ListAccountLinksResponse">ListAccountLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountlinksresponse"></a>
<a id="schema_ListAccountLinksResponse"></a>
<a id="tocSlistaccountlinksresponse"></a>
<a id="tocslistaccountlinksresponse"></a>

```json
{
  "accountLinks": [
    {
      "accountLinkTarget": {
        "allHotels": true,
        "hotelList": {
          "partnerHotelIds": [
            "string"
          ]
        }
      },
      "googleAdsCustomerName": "string",
      "name": "string",
      "status": "ACCOUNT_LINK_STATUS_UNSPECIFIED"
    }
  ]
}
```

Response message for AccountLinkService.ListAccountLinks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountLinks|[[AccountLink](#schemaaccountlink)]|false|none|A list of all account links associated with the Hotel Center account being queried.|

<h2 id="tocS_ListBrandsResponse">ListBrandsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbrandsresponse"></a>
<a id="schema_ListBrandsResponse"></a>
<a id="tocSlistbrandsresponse"></a>
<a id="tocslistbrandsresponse"></a>

```json
{
  "brands": [
    {
      "activeDisplayNames": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ],
      "activeIcon": "string",
      "activeIconUri": "string",
      "displayNameDisapprovalReason": [
        {
          "disapprovalReason": "DISAPPROVAL_REASON_UNSPECIFIED",
          "languageCode": "string"
        }
      ],
      "displayNameState": "REVIEW_STATE_UNSPECIFIED",
      "displayNames": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ],
      "icon": "string",
      "iconDisapprovalReasons": [
        "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED"
      ],
      "iconState": "REVIEW_STATE_UNSPECIFIED",
      "name": "string",
      "propertyCount": "string",
      "submittedDisplayNames": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ],
      "submittedIcon": "string"
    }
  ]
}
```

Response message for BrandService.ListBrands.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brands|[[Brand](#schemabrand)]|false|none|A list of all brands associated with the Hotel Center account being queried.|

<h2 id="tocS_ListHotelViewsResponse">ListHotelViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthotelviewsresponse"></a>
<a id="schema_ListHotelViewsResponse"></a>
<a id="tocSlisthotelviewsresponse"></a>
<a id="tocslisthotelviewsresponse"></a>

```json
{
  "hotelViews": [
    {
      "dataIssueDetail": [
        {
          "dataIssueSeverity": "DATA_ISSUE_SEVERITY_UNSPECIFIED",
          "dataIssueType": "FEED_DATA_ISSUE_UNSPECIFIED",
          "isSelfResolving": true
        }
      ],
      "dataIssues": [
        "FEED_DATA_ISSUE_UNSPECIFIED"
      ],
      "googleClusterId": "string",
      "googleHotelDisplayName": "string",
      "googleHotelId": "string",
      "liveOnGoogle": true,
      "matchStatus": "MATCH_STATUS_UNSPECIFIED",
      "overclusteredPartnerHotelIds": [
        "string"
      ],
      "partnerHotelDisplayName": "string",
      "partnerHotelId": "string",
      "primaryOverclusteredPartnerHotelId": "string",
      "propertyDetails": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for HotelViewService.ListHotelViews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotelViews|[[HotelView](#schemahotelview)]|false|none|The list of rows that match the query.|
|nextPageToken|string|false|none|Pagination token used to retrieve the next page of results.|

<h2 id="tocS_ListIconsResponse">ListIconsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisticonsresponse"></a>
<a id="schema_ListIconsResponse"></a>
<a id="tocSlisticonsresponse"></a>
<a id="tocslisticonsresponse"></a>

```json
{
  "icons": [
    {
      "disapprovalReasons": [
        "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED"
      ],
      "iconUri": "string",
      "imageData": "string",
      "name": "string",
      "reference": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

Response message for IconService.ListIcons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icons|[[Icon](#schemaicon)]|false|none|A list of all icons associated with the queried partner account.|

<h2 id="tocS_ListPriceAccuracyViewsResponse">ListPriceAccuracyViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpriceaccuracyviewsresponse"></a>
<a id="schema_ListPriceAccuracyViewsResponse"></a>
<a id="tocSlistpriceaccuracyviewsresponse"></a>
<a id="tocslistpriceaccuracyviewsresponse"></a>

```json
{
  "priceAccuracyViews": [
    {
      "name": "string",
      "results": [
        {
          "adultOccupancy": 0,
          "affectsScore": true,
          "cachedPriceRecord": {
            "basePrice": 0,
            "currencyCode": "string",
            "taxesAndFees": 0,
            "time": "string"
          },
          "checkinDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "childOccupancy": 0,
          "correctionTime": "string",
          "deviceType": "DEVICE_UNSPECIFIED",
          "fetchedPriceRecord": {
            "basePrice": 0,
            "currencyCode": "string",
            "taxesAndFees": 0,
            "time": "string"
          },
          "finalDomain": "string",
          "hotel": "string",
          "hotelCountryCode": "string",
          "lengthOfStayDays": 0,
          "mismatchReason": "MISMATCH_REASON_UNSPECIFIED",
          "rateRuleId": "string",
          "signalSource": "SIGNAL_SOURCE_UNSPECIFIED",
          "url": "string",
          "userRegionCode": "string"
        }
      ]
    }
  ]
}
```

Response message for PriceAccuracyViewService.ListPriceAccuracyViews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priceAccuracyViews|[[PriceAccuracyView](#schemapriceaccuracyview)]|false|none|The list of rows that match the query.|

<h2 id="tocS_ListPriceCoverageViewsResponse">ListPriceCoverageViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpricecoverageviewsresponse"></a>
<a id="schema_ListPriceCoverageViewsResponse"></a>
<a id="tocSlistpricecoverageviewsresponse"></a>
<a id="tocslistpricecoverageviewsresponse"></a>

```json
{
  "priceCoverageViews": [
    {
      "calculationDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "matchedPropertyCount": 0,
      "priceCoverageBinaryPercent": 0,
      "priceCoverageBuckets": [
        {
          "advanceBookingWindowRange": "ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED",
          "availablePriceCount": "string",
          "lengthOfStayRange": "LENGTH_OF_STAY_RANGE_UNSPECIFIED",
          "priceCoveragePercent": 0
        }
      ],
      "priceCoveragePercent": 0
    }
  ]
}
```

Response message for PriceCoverageViewService.ListPriceCoverageViews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priceCoverageViews|[[PriceCoverageView](#schemapricecoverageview)]|false|none|Hotel price coverage stats.|

<h2 id="tocS_ListReconciliationReportsResponse">ListReconciliationReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreconciliationreportsresponse"></a>
<a id="schema_ListReconciliationReportsResponse"></a>
<a id="tocSlistreconciliationreportsresponse"></a>
<a id="tocslistreconciliationreportsresponse"></a>

```json
{
  "reconciliationReports": [
    {
      "contents": "string",
      "fileName": "string",
      "name": "string"
    }
  ]
}
```

Response message for ReconciliationReportService.ListReconciliationReports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reconciliationReports|[[ReconciliationReport](#schemareconciliationreport)]|false|none|The list of names of reconciliation reports. Note that the `contents` and `fileName` fields of each `ReconciliationReport` object are not returned by this call.|

<h2 id="tocS_LocalizedText">LocalizedText</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedtext"></a>
<a id="schema_LocalizedText"></a>
<a id="tocSlocalizedtext"></a>
<a id="tocslocalizedtext"></a>

```json
{
  "languageCode": "string",
  "text": "string"
}
```

Localized variant of a text in a particular language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|text|string|false|none|Localized string in the language corresponding to `language_code' below.|

<h2 id="tocS_MissedParticipationCountDetails">MissedParticipationCountDetails</h2>
<!-- backwards compatibility -->
<a id="schemamissedparticipationcountdetails"></a>
<a id="schema_MissedParticipationCountDetails"></a>
<a id="tocSmissedparticipationcountdetails"></a>
<a id="tocsmissedparticipationcountdetails"></a>

```json
{
  "hotelSuspendedCount": "string",
  "noAvailabilityCount": "string",
  "noLandingPageCount": "string",
  "noPriceCount": "string",
  "noPriceCountDetails": {
    "livePricingConfigIssueCount": "string",
    "livePricingNotAvailableCount": "string",
    "livePricingNotTriggeredCount": "string",
    "livePricingOtherReasonCount": "string",
    "livePricingTechnicalIssueCount": "string"
  },
  "noTaxBreakdownCount": "string",
  "otherReasonCount": "string",
  "priceMissingCount": "string",
  "priceMissingCountDetails": {
    "bandwidthDepletedCount": "string",
    "cacheRateMissingCount": "string",
    "itineraryBlockedCount": "string",
    "livePricingErrorCount": "string",
    "livePricingNotSetupCount": "string",
    "livePricingTimeoutCount": "string"
  },
  "priceProblemCount": "string",
  "priceProblemCountDetails": {
    "hotelSuspendedCount": "string",
    "priceUnusuallyHighCount": "string",
    "priceUnusuallyLowCount": "string",
    "taxesAndFeesMissingCount": "string"
  },
  "priceUnavailableCount": "string",
  "priceUnavailableCountDetails": {
    "participationNotLikelyCount": "string",
    "priceUnavailableCount": "string"
  }
}
```

Missed participation count broken down by reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotelSuspendedCount|string(int64)|false|none|The total number of missed participations due to one or more of your hotels being suspended due to price accuracy violations.|
|noAvailabilityCount|string(int64)|false|none|The total number of missed participation due to the hotel/itinerary combination being unavailable, or the traveler was ineligible for the rates. To participate in these auctions, you may need to provide more pricing information.|
|noLandingPageCount|string(int64)|false|none|No landing page matched the user.|
|noPriceCount|string(int64)|false|none|The total number of missed participations due to a price not being offered for the requested itinerary.|
|noPriceCountDetails|[NoPriceCountDetails](#schemanopricecountdetails)|false|none|The reasons that contributed to the no price count (for example, live pricing not available) and the total count for each reason.|
|noTaxBreakdownCount|string(int64)|false|none|The total number of missed participation due to one or more of your hotels not specifying taxes and fees separately.|
|otherReasonCount|string(int64)|false|none|Hotel did not participate for an unknown reason.|
|priceMissingCount|string(int64)|false|none|The total number of missed participations due to either a price not being present in Google's cache or failing to successfully respond to live pricing. Comprised of the following: * Bandwidth depleted * Cache rate missing * Itinerary blocked * Live pricing not set up * Live pricing timeout * Live pricing error|
|priceMissingCountDetails|[PriceMissingCountDetails](#schemapricemissingcountdetails)|false|none|The reasons that contributed to the price missing count.|
|priceProblemCount|string(int64)|false|none|The total number of missed participation due to an issue with the accuracy of the price provided for the itinerary. Comprised of the following: * Hotel suspended * Price unusually high * Price unusually low * Taxes and feeds missing|
|priceProblemCountDetails|[PriceProblemCountDetails](#schemapriceproblemcountdetails)|false|none|The reasons that contributed to the price problem count.|
|priceUnavailableCount|string(int64)|false|none|The total number of missed participation due to price listed as unavailable (-1) for the requested itinerary. Comprised of the following: * Price unavailable * Participation not likely * Other|
|priceUnavailableCountDetails|[PriceUnavailableCountDetails](#schemapriceunavailablecountdetails)|false|none|The reasons that contributed to the price unavailable count.|

<h2 id="tocS_NoPriceCountDetails">NoPriceCountDetails</h2>
<!-- backwards compatibility -->
<a id="schemanopricecountdetails"></a>
<a id="schema_NoPriceCountDetails"></a>
<a id="tocSnopricecountdetails"></a>
<a id="tocsnopricecountdetails"></a>

```json
{
  "livePricingConfigIssueCount": "string",
  "livePricingNotAvailableCount": "string",
  "livePricingNotTriggeredCount": "string",
  "livePricingOtherReasonCount": "string",
  "livePricingTechnicalIssueCount": "string"
}
```

The reasons that contributed to the no price count and the total count for each reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|livePricingConfigIssueCount|string(int64)|false|none|The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't have live pricing configured for these searches. * You restricted Google from accessing the hotel itinerary in question.|
|livePricingNotAvailableCount|string(int64)|false|none|The total number of missed participation due to live pricing being unavailable. Live pricing will not be triggered for certain default itineraries or UIs. In this scenario, partners will need a cached price to participate.|
|livePricingNotTriggeredCount|string(int64)|false|none|The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't set a bid. * You didn't have a valid landing page. * There weren't enough prices in the cache.|
|livePricingOtherReasonCount|string(int64)|false|none|The number of missed participations due to other issues with live pricing.|
|livePricingTechnicalIssueCount|string(int64)|false|none|The total number of missed participation due to technical issues with live pricing for any of the following reasons: * You didn’t respond quickly enough and exceeded the response deadline (around 4000 milliseconds). * You returned an error. * Your response was malformed.|

<h2 id="tocS_ParsedListing">ParsedListing</h2>
<!-- backwards compatibility -->
<a id="schemaparsedlisting"></a>
<a id="schema_ParsedListing"></a>
<a id="tocSparsedlisting"></a>
<a id="tocsparsedlisting"></a>

```json
{
  "brand": "string",
  "category": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "dataIssueDetail": [
    {
      "dataIssueSeverity": "DATA_ISSUE_SEVERITY_UNSPECIFIED",
      "dataIssueType": "FEED_DATA_ISSUE_UNSPECIFIED",
      "isSelfResolving": true
    }
  ],
  "description": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "image": [
    {
      "galleryUri": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ],
      "title": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ],
      "uri": "string"
    }
  ],
  "imprecisionRadiusMeters": 0,
  "isServed": true,
  "listingName": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ],
  "location": {
    "latitude": 0,
    "longitude": 0
  },
  "partnerListId": "string",
  "regionCode": "string",
  "review": [
    {
      "author": "string",
      "body": "string",
      "languageCode": "string",
      "link": "string",
      "rating": [
        {
          "ratingScale": 0,
          "score": 0,
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "reviewTime": "string",
      "title": "string",
      "type": "UNKNOWN",
      "visitTime": "string"
    }
  ],
  "unitAttributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

A parsed listing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand|string|false|none|If not empty, it indicates that this listing belongs to a brand of the feed.|
|category|[[LocalizedText](#schemalocalizedtext)]|false|none|The partner provided category (accommodation type) of the property.|
|dataIssueDetail|[[DataIssueDetail](#schemadataissuedetail)]|false|none|Data issues about this listing|
|description|[[LocalizedText](#schemalocalizedtext)]|false|none|Description of the property.|
|image|[[Image](#schemaimage)]|false|none|Images associated with this listing, localized.|
|imprecisionRadiusMeters|integer(int32)|false|none|Represents the accuracy of the location. The listing can be anywhere within the defined circular area.|
|isServed|boolean|false|none|Whether the listing can be served based on non image data alone.|
|listingName|[[LocalizedText](#schemalocalizedtext)]|false|none|List of localized names.|
|location|[LatLng](#schemalatlng)|false|none|Location of listing in lat/lng (degrees).|
|partnerListId|string|false|none|The list id on partner lec feed, provided by partner.|
|regionCode|string|false|none|The country code where the listing is located.|
|review|[[Review](#schemareview)]|false|none|Reviews associated with this listing. Each review proto has a single language attached to it.|
|unitAttributes|object|false|none|VR List attribute.|

<h2 id="tocS_ParticipationResult">ParticipationResult</h2>
<!-- backwards compatibility -->
<a id="schemaparticipationresult"></a>
<a id="schema_ParticipationResult"></a>
<a id="tocSparticipationresult"></a>
<a id="tocsparticipationresult"></a>

```json
{
  "key": {
    "advanceBookingWindow": 0,
    "checkinDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "date": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "deviceType": "DEVICE_UNSPECIFIED",
    "hotelRegionCode": "string",
    "lengthOfStayDays": 0,
    "occupancy": 0,
    "partnerHotelId": "string",
    "userRegionCode": "string"
  },
  "missedParticipationCount": "string",
  "missedParticipationCountDetails": {
    "hotelSuspendedCount": "string",
    "noAvailabilityCount": "string",
    "noLandingPageCount": "string",
    "noPriceCount": "string",
    "noPriceCountDetails": {
      "livePricingConfigIssueCount": "string",
      "livePricingNotAvailableCount": "string",
      "livePricingNotTriggeredCount": "string",
      "livePricingOtherReasonCount": "string",
      "livePricingTechnicalIssueCount": "string"
    },
    "noTaxBreakdownCount": "string",
    "otherReasonCount": "string",
    "priceMissingCount": "string",
    "priceMissingCountDetails": {
      "bandwidthDepletedCount": "string",
      "cacheRateMissingCount": "string",
      "itineraryBlockedCount": "string",
      "livePricingErrorCount": "string",
      "livePricingNotSetupCount": "string",
      "livePricingTimeoutCount": "string"
    },
    "priceProblemCount": "string",
    "priceProblemCountDetails": {
      "hotelSuspendedCount": "string",
      "priceUnusuallyHighCount": "string",
      "priceUnusuallyLowCount": "string",
      "taxesAndFeesMissingCount": "string"
    },
    "priceUnavailableCount": "string",
    "priceUnavailableCountDetails": {
      "participationNotLikelyCount": "string",
      "priceUnavailableCount": "string"
    }
  },
  "opportunityCount": "string",
  "participationCount": "string",
  "participationPercent": 0,
  "partnerHotelDisplayName": "string"
}
```

Represents a result from querying for participation stats for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[Key](#schemakey)|false|none|Key of the result.|
|missedParticipationCount|string(int64)|false|none|The total number of opportunities **not** eligible for the Google Ads auction process. Comprised of the following: * Landing page missing * Price missing * Price problem * Price unavailable * Other|
|missedParticipationCountDetails|[MissedParticipationCountDetails](#schemamissedparticipationcountdetails)|false|none|The reasons that contributed to the missed participation count (for example, no availability) and a total count for each reason.|
|opportunityCount|string(int64)|false|none|For a specific hotel, the total number of opportunities that were available. Opportunities are the total number of instances when a hotel ad could have been displayed to a user.|
|participationCount|string(int64)|false|none|The total number of opportunities for which you were eligible to enter in the Google Ads auction process.|
|participationPercent|number(double)|false|none|The percentage rate of participation where the number of successfully participated opportunities is divided by the total number of opportunities. For example, if a property was eligible to enter the Google Ads auction 90 times out of 100 opportunities, the participation rate is 90%.|
|partnerHotelDisplayName|string|false|none|Partner's hotel display name. This field is only populated when the result is aggregated by `partnerHotelId`.|

<h2 id="tocS_PriceAccuracyRow">PriceAccuracyRow</h2>
<!-- backwards compatibility -->
<a id="schemapriceaccuracyrow"></a>
<a id="schema_PriceAccuracyRow"></a>
<a id="tocSpriceaccuracyrow"></a>
<a id="tocspriceaccuracyrow"></a>

```json
{
  "adultOccupancy": 0,
  "affectsScore": true,
  "cachedPriceRecord": {
    "basePrice": 0,
    "currencyCode": "string",
    "taxesAndFees": 0,
    "time": "string"
  },
  "checkinDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "childOccupancy": 0,
  "correctionTime": "string",
  "deviceType": "DEVICE_UNSPECIFIED",
  "fetchedPriceRecord": {
    "basePrice": 0,
    "currencyCode": "string",
    "taxesAndFees": 0,
    "time": "string"
  },
  "finalDomain": "string",
  "hotel": "string",
  "hotelCountryCode": "string",
  "lengthOfStayDays": 0,
  "mismatchReason": "MISMATCH_REASON_UNSPECIFIED",
  "rateRuleId": "string",
  "signalSource": "SIGNAL_SOURCE_UNSPECIFIED",
  "url": "string",
  "userRegionCode": "string"
}
```

A price accuracy row.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adultOccupancy|integer(int32)|false|none|The number of adults in the occupancy details of the validation query.|
|affectsScore|boolean|false|none|True if this row affects the placement of a price. This field has been renamed to “Affects placement” in Hotel Center.|
|cachedPriceRecord|[PriceRecord](#schemapricerecord)|false|none|Price as advertised.|
|checkinDate|[Date](#schemadate)|false|none|Check-in date.|
|childOccupancy|integer(int32)|false|none|The number of children in the occupancy details of the validation query.|
|correctionTime|string(google-datetime)|false|none|Time at which an incorrect price is updated to a correct price.|
|deviceType|string|false|none|The user's device type.|
|fetchedPriceRecord|[PriceRecord](#schemapricerecord)|false|none|Price as read from the partner website.|
|finalDomain|string|false|none|The domain of the final page from which prices are read.|
|hotel|string|false|none|Partner-defined hotel ID.|
|hotelCountryCode|string|false|none|The country of the hotel (based on address).|
|lengthOfStayDays|integer(int32)|false|none|Length of stay.|
|mismatchReason|string|false|none|The reason why the fetched price didn't match the cached price.|
|rateRuleId|string|false|none|The rate rule of the advertised price for non-public rates.|
|signalSource|string|false|none|Source of the price accuracy signal.|
|url|string|false|none|Initial URL visited on the partner website.|
|userRegionCode|string|false|none|The user's region.|

#### Enumerated Values

|Property|Value|
|---|---|
|deviceType|DEVICE_UNSPECIFIED|
|deviceType|DEVICE_UNKNOWN|
|deviceType|DESKTOP|
|deviceType|MOBILE|
|deviceType|TABLET|
|mismatchReason|MISMATCH_REASON_UNSPECIFIED|
|mismatchReason|MISMATCH_REASON_UNKNOWN|
|mismatchReason|TAX_MISMATCH|
|mismatchReason|ROOM_UNAVAILABLE|
|mismatchReason|SITE_ERROR|
|mismatchReason|PRICE_FEED_DELAYED|
|mismatchReason|DISCOUNT_MISSING|
|mismatchReason|INCORRECT_DISCOUNT_VALUE|
|mismatchReason|WRONG_ITINERARY|
|signalSource|SIGNAL_SOURCE_UNSPECIFIED|
|signalSource|SIGNAL_SOURCE_UNKNOWN|
|signalSource|FETCHED|
|signalSource|PIXEL|

<h2 id="tocS_PriceAccuracyView">PriceAccuracyView</h2>
<!-- backwards compatibility -->
<a id="schemapriceaccuracyview"></a>
<a id="schema_PriceAccuracyView"></a>
<a id="tocSpriceaccuracyview"></a>
<a id="tocspriceaccuracyview"></a>

```json
{
  "name": "string",
  "results": [
    {
      "adultOccupancy": 0,
      "affectsScore": true,
      "cachedPriceRecord": {
        "basePrice": 0,
        "currencyCode": "string",
        "taxesAndFees": 0,
        "time": "string"
      },
      "checkinDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "childOccupancy": 0,
      "correctionTime": "string",
      "deviceType": "DEVICE_UNSPECIFIED",
      "fetchedPriceRecord": {
        "basePrice": 0,
        "currencyCode": "string",
        "taxesAndFees": 0,
        "time": "string"
      },
      "finalDomain": "string",
      "hotel": "string",
      "hotelCountryCode": "string",
      "lengthOfStayDays": 0,
      "mismatchReason": "MISMATCH_REASON_UNSPECIFIED",
      "rateRuleId": "string",
      "signalSource": "SIGNAL_SOURCE_UNSPECIFIED",
      "url": "string",
      "userRegionCode": "string"
    }
  ]
}
```

A price accuracy view. Covers the price accuracy reports functionality in pre-v3.0 API versions. For more information, refer to [Price Accuracy report](https://support.google.com/hotelprices/answer/6318506).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Resource name should be in the format `accounts/{account_id}/priceAccuracyViews/{report_date}`.|
|results|[[PriceAccuracyRow](#schemapriceaccuracyrow)]|false|none|The list of rows that match the query.|

<h2 id="tocS_PriceCoverageBucket">PriceCoverageBucket</h2>
<!-- backwards compatibility -->
<a id="schemapricecoveragebucket"></a>
<a id="schema_PriceCoverageBucket"></a>
<a id="tocSpricecoveragebucket"></a>
<a id="tocspricecoveragebucket"></a>

```json
{
  "advanceBookingWindowRange": "ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED",
  "availablePriceCount": "string",
  "lengthOfStayRange": "LENGTH_OF_STAY_RANGE_UNSPECIFIED",
  "priceCoveragePercent": 0
}
```

Coverage stats for one combination of advance booking window and length of stay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanceBookingWindowRange|string|false|none|Advance booking window range.|
|availablePriceCount|string(int64)|false|none|Number of prices for this advance booking window bucket and length of stay bucket.|
|lengthOfStayRange|string|false|none|Length of stay range.|
|priceCoveragePercent|number(double)|false|none|The percent of itineraries for which you have coverage for this advance booking window bucket and length of stay bucket.|

#### Enumerated Values

|Property|Value|
|---|---|
|advanceBookingWindowRange|ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED|
|advanceBookingWindowRange|ADVANCE_BOOKING_WINDOW_RANGE_UNKNOWN|
|advanceBookingWindowRange|DAYS_0_TO_30|
|advanceBookingWindowRange|DAYS_31_TO_60|
|advanceBookingWindowRange|DAYS_61_TO_90|
|advanceBookingWindowRange|DAYS_91_TO_120|
|advanceBookingWindowRange|DAYS_121_TO_150|
|advanceBookingWindowRange|DAYS_151_TO_180|
|advanceBookingWindowRange|DAYS_181_TO_210|
|advanceBookingWindowRange|DAYS_211_TO_240|
|advanceBookingWindowRange|DAYS_241_TO_270|
|advanceBookingWindowRange|DAYS_271_TO_300|
|advanceBookingWindowRange|DAYS_301_TO_330|
|lengthOfStayRange|LENGTH_OF_STAY_RANGE_UNSPECIFIED|
|lengthOfStayRange|LENGTH_OF_STAY_RANGE_UNKNOWN|
|lengthOfStayRange|LENGTH_OF_STAY_1_TO_7|
|lengthOfStayRange|LENGTH_OF_STAY_8_TO_14|
|lengthOfStayRange|LENGTH_OF_STAY_15_TO_30|

<h2 id="tocS_PriceCoverageView">PriceCoverageView</h2>
<!-- backwards compatibility -->
<a id="schemapricecoverageview"></a>
<a id="schema_PriceCoverageView"></a>
<a id="tocSpricecoverageview"></a>
<a id="tocspricecoverageview"></a>

```json
{
  "calculationDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "matchedPropertyCount": 0,
  "priceCoverageBinaryPercent": 0,
  "priceCoverageBuckets": [
    {
      "advanceBookingWindowRange": "ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED",
      "availablePriceCount": "string",
      "lengthOfStayRange": "LENGTH_OF_STAY_RANGE_UNSPECIFIED",
      "priceCoveragePercent": 0
    }
  ],
  "priceCoveragePercent": 0
}
```

A price coverage view. Covers the `price_coverage_stats` Scorecard functionality in pre-v3.0 API versions. For more information, refer to Price Coverage for Push and Hint partners.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationDate|[Date](#schemadate)|false|none|The date on which the calculations were made.|
|matchedPropertyCount|integer(int32)|false|none|The total number of properties that have prices for the given itineraries.|
|priceCoverageBinaryPercent|number(double)|false|none|The ratio between the number of hotels which have at least one price for the calculation period and `matched_property_count`.|
|priceCoverageBuckets|[[PriceCoverageBucket](#schemapricecoveragebucket)]|false|none|Price coverage stats for combinations of advance booking window and length of stay ranges.|
|priceCoveragePercent|number(double)|false|none|The overall price coverage for an account. This value is the ratio between the number of hotel prices for the calculation booking window and length of stay range divided by the number of all possible prices, which is `matched_property_count` times 330 (for advance book window) times 30 (for length of stay).|

<h2 id="tocS_PriceMissingCountDetails">PriceMissingCountDetails</h2>
<!-- backwards compatibility -->
<a id="schemapricemissingcountdetails"></a>
<a id="schema_PriceMissingCountDetails"></a>
<a id="tocSpricemissingcountdetails"></a>
<a id="tocspricemissingcountdetails"></a>

```json
{
  "bandwidthDepletedCount": "string",
  "cacheRateMissingCount": "string",
  "itineraryBlockedCount": "string",
  "livePricingErrorCount": "string",
  "livePricingNotSetupCount": "string",
  "livePricingTimeoutCount": "string"
}
```

The reasons that contributed to the price missing count and the total count for each reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidthDepletedCount|string(int64)|false|none|No price was cached for this itinerary, and there was no live query quota remaining.|
|cacheRateMissingCount|string(int64)|false|none|No price exists in the cache for this itinerary. A live query was not done due to page constraints.|
|itineraryBlockedCount|string(int64)|false|none|The itinerary was outside of your basic parameters, so no price was pulled for the itinerary from either live query or cache fill.|
|livePricingErrorCount|string(int64)|false|none|No price was cached for this itinerary. A live query did not time out, but your system returned an error.|
|livePricingNotSetupCount|string(int64)|false|none|No price was cached for this itinerary, and live query was not configured for this account.|
|livePricingTimeoutCount|string(int64)|false|none|No price was cached for this itinerary, and a live query sent to your system timed out.|

<h2 id="tocS_PriceProblemCountDetails">PriceProblemCountDetails</h2>
<!-- backwards compatibility -->
<a id="schemapriceproblemcountdetails"></a>
<a id="schema_PriceProblemCountDetails"></a>
<a id="tocSpriceproblemcountdetails"></a>
<a id="tocspriceproblemcountdetails"></a>

```json
{
  "hotelSuspendedCount": "string",
  "priceUnusuallyHighCount": "string",
  "priceUnusuallyLowCount": "string",
  "taxesAndFeesMissingCount": "string"
}
```

The reasons that contributed to the price problem count and the total count for each reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotelSuspendedCount|string(int64)|false|none|The hotel was suspended. This may be due to persistent problems in areas such as incorrect taxes and fees.|
|priceUnusuallyHighCount|string(int64)|false|none|The price given for this itinerary seemed oddly high compared to regional trends.|
|priceUnusuallyLowCount|string(int64)|false|none|The price given for this itinerary seemed oddly low compared to regional trends.|
|taxesAndFeesMissingCount|string(int64)|false|none|Taxes and fees were missing from pricing.|

<h2 id="tocS_PriceRecord">PriceRecord</h2>
<!-- backwards compatibility -->
<a id="schemapricerecord"></a>
<a id="schema_PriceRecord"></a>
<a id="tocSpricerecord"></a>
<a id="tocspricerecord"></a>

```json
{
  "basePrice": 0,
  "currencyCode": "string",
  "taxesAndFees": 0,
  "time": "string"
}
```

A price record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basePrice|number(float)|false|none|Base price.|
|currencyCode|string|false|none|ISO 4217 currency code.|
|taxesAndFees|number(float)|false|none|Taxes and fees.|
|time|string(google-datetime)|false|none|Timestamp of this price record.|

<h2 id="tocS_PriceUnavailableCountDetails">PriceUnavailableCountDetails</h2>
<!-- backwards compatibility -->
<a id="schemapriceunavailablecountdetails"></a>
<a id="schema_PriceUnavailableCountDetails"></a>
<a id="tocSpriceunavailablecountdetails"></a>
<a id="tocspriceunavailablecountdetails"></a>

```json
{
  "participationNotLikelyCount": "string",
  "priceUnavailableCount": "string"
}
```

The reasons that contributed to the price unavailable count and the total count for each reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|participationNotLikelyCount|string(int64)|false|none|No price was cached for this itinerary, and no live query was done because your server usually tells us the hotel is unavailable or sold out.|
|priceUnavailableCount|string(int64)|false|none|Hotel did not participate because it wasn't available for the itinerary dates.|

<h2 id="tocS_PriceView">PriceView</h2>
<!-- backwards compatibility -->
<a id="schemapriceview"></a>
<a id="schema_PriceView"></a>
<a id="tocSpriceview"></a>
<a id="tocspriceview"></a>

```json
{
  "name": "string",
  "perItineraryPrices": [
    {
      "checkinDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "currencyCode": "string",
      "fees": 0,
      "lengthOfStayDays": 0,
      "price": 0,
      "taxes": 0,
      "updateTime": "string"
    }
  ]
}
```

A price view. Covers the Prices functionality in pre-v3.0 API versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Resource name in the format `accounts/{account_id}/priceViews/{partner_hotel_id}`.|
|perItineraryPrices|[[HotelPricePerItinerary](#schemahotelpriceperitinerary)]|false|none|Price for each itinerary.|

<h2 id="tocS_PropertyPerformanceResult">PropertyPerformanceResult</h2>
<!-- backwards compatibility -->
<a id="schemapropertyperformanceresult"></a>
<a id="schema_PropertyPerformanceResult"></a>
<a id="tocSpropertyperformanceresult"></a>
<a id="tocspropertyperformanceresult"></a>

```json
{
  "adsClickCount": "string",
  "adsClickthroughRate": 0,
  "adsImpressionCount": "string",
  "advanceBookingWindow": "ADVANCE_BOOKING_WINDOW_UNSPECIFIED",
  "brand": "string",
  "clickCount": "string",
  "clickthroughRate": 0,
  "date": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "deviceType": "DEVICE_UNSPECIFIED",
  "highIntentUsers": true,
  "impressionCount": "string",
  "lengthOfStay": "LENGTH_OF_STAY_UNSPECIFIED",
  "occupancy": "OCCUPANCY_UNSPECIFIED",
  "partnerPropertyDisplayName": "string",
  "partnerPropertyId": "string",
  "propertyRegionCode": "string",
  "userRegionCode": "string"
}
```

Represents a result from querying for the property performance report for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adsClickCount|string(int64)|false|none|The total number of ad clicks that were recorded for this result.|
|adsClickthroughRate|number(double)|false|none|Equal to `ads_click_count` divided by `ads_impression_count`.|
|adsImpressionCount|string(int64)|false|none|The total number of ad impressions that were recorded for this result.|
|advanceBookingWindow|string|false|none|Difference in days between query date and check-in date in property's local timezone. Only present if `advanceBookingWindow` is specified in `aggregateBy` in the request.|
|brand|string|false|none|Partner-specified brand for the property. Only present if `brand` is specified in `aggregateBy` in the request.|
|clickCount|string(int64)|false|none|The total number of free booking link clicks that were recorded for this result.|
|clickthroughRate|number(double)|false|none|Equal to `click_count` divided by `impression_count`.|
|date|[Date](#schemadate)|false|none|A date within the requested date range. Only present if `date` is specified in `aggregateBy` in the request.|
|deviceType|string|false|none|The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request.|
|highIntentUsers|boolean|false|none|Whether the user’s query indicated a strong interest in booking. Only present if `highIntentUsers` is specified in `aggregateBy` in the request.|
|impressionCount|string(int64)|false|none|The total number of free booking link impressions that were recorded for this result. This value is rounded to preserve user privacy.|
|lengthOfStay|string|false|none|Number of nights between check-in and check-out dates specified by user. Only present if `lengthOfStay` is specified in `aggregateBy` in the request.|
|occupancy|string|false|none|Requested number of people staying at the property. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request.|
|partnerPropertyDisplayName|string|false|none|Partner's property name. Only present if `partnerPropertyDisplayName` is specified in `aggregateBy` in the request.|
|partnerPropertyId|string|false|none|Partner's property ID. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request.|
|propertyRegionCode|string|false|none|ISO 3116 region code of the country/region of the property. Only present if `propertyRegionCode` is specified in `aggregateBy` in the request|
|userRegionCode|string|false|none|ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request|

#### Enumerated Values

|Property|Value|
|---|---|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_UNSPECIFIED|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_SAME_DAY|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_NEXT_DAY|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_DAYS_2_TO_7|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_DAYS_8_TO_14|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_DAYS_15_TO_30|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_DAYS_31_TO_60|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_DAYS_61_TO_90|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_DAYS_91_TO_120|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_DAYS_121_TO_150|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_DAYS_151_TO_180|
|advanceBookingWindow|ADVANCE_BOOKING_WINDOW_DAYS_OVER_180|
|deviceType|DEVICE_UNSPECIFIED|
|deviceType|DEVICE_UNKNOWN|
|deviceType|DESKTOP|
|deviceType|MOBILE|
|deviceType|TABLET|
|lengthOfStay|LENGTH_OF_STAY_UNSPECIFIED|
|lengthOfStay|LENGTH_OF_STAY_NIGHTS_1|
|lengthOfStay|LENGTH_OF_STAY_NIGHTS_2|
|lengthOfStay|LENGTH_OF_STAY_NIGHTS_3|
|lengthOfStay|LENGTH_OF_STAY_NIGHTS_4_TO_7|
|lengthOfStay|LENGTH_OF_STAY_NIGHTS_8_TO_14|
|lengthOfStay|LENGTH_OF_STAY_NIGHTS_15_TO_21|
|lengthOfStay|LENGTH_OF_STAY_NIGHTS_22_TO_30|
|lengthOfStay|LENGTH_OF_STAY_NIGHTS_OVER_30|
|occupancy|OCCUPANCY_UNSPECIFIED|
|occupancy|OCCUPANCY_1|
|occupancy|OCCUPANCY_2|
|occupancy|OCCUPANCY_3|
|occupancy|OCCUPANCY_4|
|occupancy|OCCUPANCY_OVER_4|

<h2 id="tocS_QueryFreeBookingLinksReportResponse">QueryFreeBookingLinksReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryfreebookinglinksreportresponse"></a>
<a id="schema_QueryFreeBookingLinksReportResponse"></a>
<a id="tocSqueryfreebookinglinksreportresponse"></a>
<a id="tocsqueryfreebookinglinksreportresponse"></a>

```json
{
  "nextPageToken": "string",
  "results": [
    {
      "clickCount": "string",
      "date": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "deviceType": "DEVICE_UNSPECIFIED",
      "partnerHotelDisplayName": "string",
      "partnerHotelId": "string",
      "userRegionCode": "string"
    }
  ]
}
```

**DEPRECATED:** Use `QueryPropertyPerformanceReportResponse` with `PropertyPerformanceReportService` instead. Response message for FreeBookingLinksReportService.QueryFreeBookingLinksReport.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages.|
|results|[[FreeBookingLinksResult](#schemafreebookinglinksresult)]|false|none|The list of results that match the query.|

<h2 id="tocS_QueryParticipationReportResponse">QueryParticipationReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryparticipationreportresponse"></a>
<a id="schema_QueryParticipationReportResponse"></a>
<a id="tocSqueryparticipationreportresponse"></a>
<a id="tocsqueryparticipationreportresponse"></a>

```json
{
  "nextPageToken": "string",
  "results": [
    {
      "key": {
        "advanceBookingWindow": 0,
        "checkinDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "date": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "deviceType": "DEVICE_UNSPECIFIED",
        "hotelRegionCode": "string",
        "lengthOfStayDays": 0,
        "occupancy": 0,
        "partnerHotelId": "string",
        "userRegionCode": "string"
      },
      "missedParticipationCount": "string",
      "missedParticipationCountDetails": {
        "hotelSuspendedCount": "string",
        "noAvailabilityCount": "string",
        "noLandingPageCount": "string",
        "noPriceCount": "string",
        "noPriceCountDetails": {
          "livePricingConfigIssueCount": "string",
          "livePricingNotAvailableCount": "string",
          "livePricingNotTriggeredCount": "string",
          "livePricingOtherReasonCount": "string",
          "livePricingTechnicalIssueCount": "string"
        },
        "noTaxBreakdownCount": "string",
        "otherReasonCount": "string",
        "priceMissingCount": "string",
        "priceMissingCountDetails": {
          "bandwidthDepletedCount": "string",
          "cacheRateMissingCount": "string",
          "itineraryBlockedCount": "string",
          "livePricingErrorCount": "string",
          "livePricingNotSetupCount": "string",
          "livePricingTimeoutCount": "string"
        },
        "priceProblemCount": "string",
        "priceProblemCountDetails": {
          "hotelSuspendedCount": "string",
          "priceUnusuallyHighCount": "string",
          "priceUnusuallyLowCount": "string",
          "taxesAndFeesMissingCount": "string"
        },
        "priceUnavailableCount": "string",
        "priceUnavailableCountDetails": {
          "participationNotLikelyCount": "string",
          "priceUnavailableCount": "string"
        }
      },
      "opportunityCount": "string",
      "participationCount": "string",
      "participationPercent": 0,
      "partnerHotelDisplayName": "string"
    }
  ]
}
```

Response message for ParticipationReportService.QueryParticipationReport.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pagination token used to retrieve the next page of results.|
|results|[[ParticipationResult](#schemaparticipationresult)]|false|none|The list of results that matches the query.|

<h2 id="tocS_QueryPropertyPerformanceReportResponse">QueryPropertyPerformanceReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerypropertyperformancereportresponse"></a>
<a id="schema_QueryPropertyPerformanceReportResponse"></a>
<a id="tocSquerypropertyperformancereportresponse"></a>
<a id="tocsquerypropertyperformancereportresponse"></a>

```json
{
  "nextPageToken": "string",
  "results": [
    {
      "adsClickCount": "string",
      "adsClickthroughRate": 0,
      "adsImpressionCount": "string",
      "advanceBookingWindow": "ADVANCE_BOOKING_WINDOW_UNSPECIFIED",
      "brand": "string",
      "clickCount": "string",
      "clickthroughRate": 0,
      "date": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "deviceType": "DEVICE_UNSPECIFIED",
      "highIntentUsers": true,
      "impressionCount": "string",
      "lengthOfStay": "LENGTH_OF_STAY_UNSPECIFIED",
      "occupancy": "OCCUPANCY_UNSPECIFIED",
      "partnerPropertyDisplayName": "string",
      "partnerPropertyId": "string",
      "propertyRegionCode": "string",
      "userRegionCode": "string"
    }
  ]
}
```

Response message for PropertyPerformanceReportService.QueryPropertyPerformanceReport.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages.|
|results|[[PropertyPerformanceResult](#schemapropertyperformanceresult)]|false|none|The list of results that match the query.|

<h2 id="tocS_Rating">Rating</h2>
<!-- backwards compatibility -->
<a id="schemarating"></a>
<a id="schema_Rating"></a>
<a id="tocSrating"></a>
<a id="tocsrating"></a>

```json
{
  "ratingScale": 0,
  "score": 0,
  "type": "TYPE_UNSPECIFIED"
}
```

A rating within a vacation rentals Listing. NEXT ID: 4

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ratingScale|integer(int32)|false|none|Maximum rating possible.|
|score|number(float)|false|none|The rating score. (e.g. 8.5)|
|type|string|false|none|The type of the rating.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|OVERALL|

<h2 id="tocS_ReconciliationReport">ReconciliationReport</h2>
<!-- backwards compatibility -->
<a id="schemareconciliationreport"></a>
<a id="schema_ReconciliationReport"></a>
<a id="tocSreconciliationreport"></a>
<a id="tocsreconciliationreport"></a>

```json
{
  "contents": "string",
  "fileName": "string",
  "name": "string"
}
```

Reconciliation report (Hotel Ads only). Covers the Reconciliation Reports functionality in pre-v3.0 API versions. Lets you see the status, validate, and upload your Commissions reconciliation reports. This only applies if you are in the Google Hotel Ads Commissions Program (GHACP). For more information about working with reconciliation reports in Hotel Center, refer to [Reconciliation reports](//support.google.com/hotelprices/answer/7019060#sending).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|false|none|Required. The contents of the commission report. Report contents must conform to the requirements specified in [Reconciliation reports] (//support.google.com/hotelprices/answer/7019060#creating).|
|fileName|string|false|none|Required. Desired filename of the reconciliation report.|
|name|string|false|none|Resource name in the format `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`. The value for `{datetime}` must be from 0001-01-01T00:00:00 to 9999-12-31T23:59:59 inclusive.|

<h2 id="tocS_ReconciliationReportValidationIssue">ReconciliationReportValidationIssue</h2>
<!-- backwards compatibility -->
<a id="schemareconciliationreportvalidationissue"></a>
<a id="schema_ReconciliationReportValidationIssue"></a>
<a id="tocSreconciliationreportvalidationissue"></a>
<a id="tocsreconciliationreportvalidationissue"></a>

```json
{
  "description": "string",
  "fieldName": "string",
  "lineNum": 0
}
```

Represents an issue encountered when validating a reconciliation report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Text description of the issue, typically including what was seen and why it was invalid.|
|fieldName|string|false|none|Name of the invalid field. If no field name is given, this issue applies to the whole line (or file).|
|lineNum|integer(int32)|false|none|The line number on which the issue was detected. If this field is 0, the issue applies to the whole file.|

<h2 id="tocS_Review">Review</h2>
<!-- backwards compatibility -->
<a id="schemareview"></a>
<a id="schema_Review"></a>
<a id="tocSreview"></a>
<a id="tocsreview"></a>

```json
{
  "author": "string",
  "body": "string",
  "languageCode": "string",
  "link": "string",
  "rating": [
    {
      "ratingScale": 0,
      "score": 0,
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "reviewTime": "string",
  "title": "string",
  "type": "UNKNOWN",
  "visitTime": "string"
}
```

A single review in a VR Listing. NEXT ID: 10

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|The author of the review.|
|body|string|false|none|The body of the review.|
|languageCode|string|false|none|Language of the review, such as "en", "de", etc.|
|link|string|false|none|The url of the review.|
|rating|[[Rating](#schemarating)]|false|none|Any ratings associated with this review. This is repeated because reviews can include ratings on different aspects of a listing, e.g. location, cleanliness, etc.|
|reviewTime|string(google-datetime)|false|none|Unix timestamp (in seconds) of the review, in UTC+0.|
|title|string|false|none|The title of the review, for example: Great three bedrooms.|
|type|string|false|none|The type of the review.|
|visitTime|string(google-datetime)|false|none|Unix timestamp (in seconds) of when the stay was, in UTC+0.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
|type|EDITORIAL|
|type|USER|

<h2 id="tocS_SetLiveOnGoogleRequest">SetLiveOnGoogleRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetliveongooglerequest"></a>
<a id="schema_SetLiveOnGoogleRequest"></a>
<a id="tocSsetliveongooglerequest"></a>
<a id="tocssetliveongooglerequest"></a>

```json
{
  "liveOnGoogle": true,
  "partnerHotelIds": [
    "string"
  ]
}
```

Request message for HotelService.SetLiveOnGoogle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|liveOnGoogle|boolean|false|none|Required. Whether the property will show on Google. When true, Google will show the properties if their integration is complete and the property is available. When false, Google will never show the properties.|
|partnerHotelIds|[string]|false|none|Required. Identifies the properties to update with the liveOnGoogle setting.|

<h2 id="tocS_SetLiveOnGoogleResponse">SetLiveOnGoogleResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetliveongoogleresponse"></a>
<a id="schema_SetLiveOnGoogleResponse"></a>
<a id="tocSsetliveongoogleresponse"></a>
<a id="tocssetliveongoogleresponse"></a>

```json
{
  "failedHotelIds": [
    "string"
  ],
  "updatedHotelIds": [
    "string"
  ]
}
```

Response message for HotelService.SetLiveOnGoogle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedHotelIds|[string]|false|none|Identifies properties that Google could not update.|
|updatedHotelIds|[string]|false|none|Identifies the updated properties.|

<h2 id="tocS_SummarizeHotelViewsResponse">SummarizeHotelViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasummarizehotelviewsresponse"></a>
<a id="schema_SummarizeHotelViewsResponse"></a>
<a id="tocSsummarizehotelviewsresponse"></a>
<a id="tocssummarizehotelviewsresponse"></a>

```json
{
  "lastFeedSubmissionTime": "string",
  "lastManifestUpdateTime": "string",
  "liveOnGooglePropertyCount": "string",
  "matchedPropertyCount": "string",
  "overclusteredPropertyCount": "string",
  "overclusteredPropertyWithErrorsCount": "string",
  "unmatchedPropertyCount": "string",
  "unmatchedPropertyWithErrorsCount": "string"
}
```

Response message for HotelViewService.SummarizeHotelViews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastFeedSubmissionTime|string(google-datetime)|false|none|Timestamp of the last hotel feed submission.|
|lastManifestUpdateTime|string(google-datetime)|false|none|Timestamp of the last hotel manifest update.|
|liveOnGooglePropertyCount|string(int64)|false|none|The number of properties that are Live on Google.|
|matchedPropertyCount|string(int64)|false|none|The number of properties that match Google's manifest.|
|overclusteredPropertyCount|string(int64)|false|none|The number of hotels that are considered overclustered.|
|overclusteredPropertyWithErrorsCount|string(int64)|false|none|The number of overclustered properties that have data-related errors.|
|unmatchedPropertyCount|string(int64)|false|none|The number of properties that are considered unmatched.|
|unmatchedPropertyWithErrorsCount|string(int64)|false|none|The number of unmatched properties that have data-related errors.|

<h2 id="tocS_SummarizePriceAccuracyResponse">SummarizePriceAccuracyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasummarizepriceaccuracyresponse"></a>
<a id="schema_SummarizePriceAccuracyResponse"></a>
<a id="tocSsummarizepriceaccuracyresponse"></a>
<a id="tocssummarizepriceaccuracyresponse"></a>

```json
{
  "currentBookOnGoogleScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "currentOverallScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "currentScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "currentWebsiteScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "predictedBookOnGoogleScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "predictedOverallScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "predictedScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "predictedWebsiteScore": "PRICE_ACCURACY_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Response message for PriceAccuracyViewService.SummarizePriceAccuracy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentBookOnGoogleScore|string|false|none|The current Book on Google price accuracy score.|
|currentOverallScore|string|false|none|The current price accuracy score combining both website and Book on Google scores.|
|currentScore|string|false|none|The current price accuracy score. Contains the same value as `current_website_score`. For clarity, use either `current_website_score` or 'current_overall_score` depending upon which is needed.|
|currentWebsiteScore|string|false|none|The current website price accuracy score.|
|predictedBookOnGoogleScore|string|false|none|The predicted Book on Google price accuracy score.|
|predictedOverallScore|string|false|none|The predicted price accuracy score combining both website and Book on Google scores.|
|predictedScore|string|false|none|The predicted price accuracy score. Contains the same value as `predicted_website_score`. For clarity, use either `predicted_website_score` or 'predicted_overall_score` depending upon which is needed.|
|predictedWebsiteScore|string|false|none|The predicted website price accuracy score.|
|updateTime|string(google-datetime)|false|none|The update timestamp for the current score.|

#### Enumerated Values

|Property|Value|
|---|---|
|currentBookOnGoogleScore|PRICE_ACCURACY_STATE_UNSPECIFIED|
|currentBookOnGoogleScore|PRICE_ACCURACY_STATE_UNKNOWN|
|currentBookOnGoogleScore|EXCELLENT|
|currentBookOnGoogleScore|GOOD|
|currentBookOnGoogleScore|POOR|
|currentBookOnGoogleScore|AT_RISK|
|currentBookOnGoogleScore|FAILED|
|currentOverallScore|PRICE_ACCURACY_STATE_UNSPECIFIED|
|currentOverallScore|PRICE_ACCURACY_STATE_UNKNOWN|
|currentOverallScore|EXCELLENT|
|currentOverallScore|GOOD|
|currentOverallScore|POOR|
|currentOverallScore|AT_RISK|
|currentOverallScore|FAILED|
|currentScore|PRICE_ACCURACY_STATE_UNSPECIFIED|
|currentScore|PRICE_ACCURACY_STATE_UNKNOWN|
|currentScore|EXCELLENT|
|currentScore|GOOD|
|currentScore|POOR|
|currentScore|AT_RISK|
|currentScore|FAILED|
|currentWebsiteScore|PRICE_ACCURACY_STATE_UNSPECIFIED|
|currentWebsiteScore|PRICE_ACCURACY_STATE_UNKNOWN|
|currentWebsiteScore|EXCELLENT|
|currentWebsiteScore|GOOD|
|currentWebsiteScore|POOR|
|currentWebsiteScore|AT_RISK|
|currentWebsiteScore|FAILED|
|predictedBookOnGoogleScore|PRICE_ACCURACY_STATE_UNSPECIFIED|
|predictedBookOnGoogleScore|PRICE_ACCURACY_STATE_UNKNOWN|
|predictedBookOnGoogleScore|EXCELLENT|
|predictedBookOnGoogleScore|GOOD|
|predictedBookOnGoogleScore|POOR|
|predictedBookOnGoogleScore|AT_RISK|
|predictedBookOnGoogleScore|FAILED|
|predictedOverallScore|PRICE_ACCURACY_STATE_UNSPECIFIED|
|predictedOverallScore|PRICE_ACCURACY_STATE_UNKNOWN|
|predictedOverallScore|EXCELLENT|
|predictedOverallScore|GOOD|
|predictedOverallScore|POOR|
|predictedOverallScore|AT_RISK|
|predictedOverallScore|FAILED|
|predictedScore|PRICE_ACCURACY_STATE_UNSPECIFIED|
|predictedScore|PRICE_ACCURACY_STATE_UNKNOWN|
|predictedScore|EXCELLENT|
|predictedScore|GOOD|
|predictedScore|POOR|
|predictedScore|AT_RISK|
|predictedScore|FAILED|
|predictedWebsiteScore|PRICE_ACCURACY_STATE_UNSPECIFIED|
|predictedWebsiteScore|PRICE_ACCURACY_STATE_UNKNOWN|
|predictedWebsiteScore|EXCELLENT|
|predictedWebsiteScore|GOOD|
|predictedWebsiteScore|POOR|
|predictedWebsiteScore|AT_RISK|
|predictedWebsiteScore|FAILED|

<h2 id="tocS_ValidateReconciliationReportResponse">ValidateReconciliationReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidatereconciliationreportresponse"></a>
<a id="schema_ValidateReconciliationReportResponse"></a>
<a id="tocSvalidatereconciliationreportresponse"></a>
<a id="tocsvalidatereconciliationreportresponse"></a>

```json
{
  "issues": [
    {
      "description": "string",
      "fieldName": "string",
      "lineNum": 0
    }
  ],
  "successfulRecordCount": 0
}
```

Response message for ReconciliationReportService.ValidateReconciliationReport.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[[ReconciliationReportValidationIssue](#schemareconciliationreportvalidationissue)]|false|none|Issues that were encountered when validating the file.|
|successfulRecordCount|integer(int32)|false|none|The number of commission records that were successfully validated.|

<h2 id="tocS_VerifyListingsRequest">VerifyListingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifylistingsrequest"></a>
<a id="schema_VerifyListingsRequest"></a>
<a id="tocSverifylistingsrequest"></a>
<a id="tocsverifylistingsrequest"></a>

```json
{
  "xmlListing": "string"
}
```

Request message for VRPartnerListingVerificationService.VerifyPartnerListings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|xmlListing|string|false|none|A listing that follows the XML format specified in https://developers.google.com/hotels/hotel-prices/xml-reference/hotel-list-feed.|

<h2 id="tocS_VerifyListingsResponse">VerifyListingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifylistingsresponse"></a>
<a id="schema_VerifyListingsResponse"></a>
<a id="tocSverifylistingsresponse"></a>
<a id="tocsverifylistingsresponse"></a>

```json
{
  "parsedListing": {
    "brand": "string",
    "category": [
      {
        "languageCode": "string",
        "text": "string"
      }
    ],
    "dataIssueDetail": [
      {
        "dataIssueSeverity": "DATA_ISSUE_SEVERITY_UNSPECIFIED",
        "dataIssueType": "FEED_DATA_ISSUE_UNSPECIFIED",
        "isSelfResolving": true
      }
    ],
    "description": [
      {
        "languageCode": "string",
        "text": "string"
      }
    ],
    "image": [
      {
        "galleryUri": [
          {
            "languageCode": "string",
            "text": "string"
          }
        ],
        "title": [
          {
            "languageCode": "string",
            "text": "string"
          }
        ],
        "uri": "string"
      }
    ],
    "imprecisionRadiusMeters": 0,
    "isServed": true,
    "listingName": [
      {
        "languageCode": "string",
        "text": "string"
      }
    ],
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "partnerListId": "string",
    "regionCode": "string",
    "review": [
      {
        "author": "string",
        "body": "string",
        "languageCode": "string",
        "link": "string",
        "rating": [
          {
            "ratingScale": 0,
            "score": 0,
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "reviewTime": "string",
        "title": "string",
        "type": "UNKNOWN",
        "visitTime": "string"
      }
    ],
    "unitAttributes": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Response message for VRPartnerListingVerificationService.VerifyPartnerListings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parsedListing|[ParsedListing](#schemaparsedlisting)|false|none|The parsed listing output.|
