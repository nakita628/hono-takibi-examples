<h1 id="compliance-api">Compliance API v1.4.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Service for providing information to sellers about their listings being non-compliant, or at risk for becoming non-compliant, against eBay listing policies.

Base URLs:

* <a href="https://api.ebay.com/sell/compliance/v1">https://api.ebay.com/sell/compliance/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.inventory|View and manage your inventory and offers|

<h1 id="compliance-api-listingviolation">listing_violation</h1>

## getListingViolations

<a id="opIdgetListingViolations"></a>

> Code samples

```bash
curl https://api.ebay.com/listing_violation \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /listing_violation`

This call returns specific listing violations for the supported listing compliance types. Only one compliance type can be passed in per call, and the response will include all the listing violations for this compliance type, and listing violations are grouped together by eBay listing ID. See ComplianceTypeEnum for more information on the supported listing compliance types. This method also has pagination control. Note: A maximum of 2000 listing violations will be returned in a result set. If the seller has more than 2000 listing violations, some/all of those listing violations must be corrected before additional listing violations will be retrieved. The user should pay attention to the total value in the response. If this value is '2000', it is possible that the seller has more than 2000 listing violations, but this field maxes out at 2000. Note: In a future release of this API, the seller will be able to pass in a specific eBay listing ID as a query parameter to see if this specific listing has any violations. Note: Only mocked non-compliant listing data will be returned for this call in the Sandbox environment, and not specific to the seller. However, the user can still use this mock data to experiment with the compliance type filters and pagination control.

<h3 id="getlistingviolations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|This header is required and is used to specify the eBay marketplace identifier. Supported values for this header can be found in the MarketplaceIdEnum type definition. Note that Version 1.4.0 of the Compliance API is only supported on the US, UK, Australia, Canada {English), and Germany sites.|
|compliance_type|query|string|false|A seller uses this query parameter to retrieve listing violations of a specific compliance type. Only one compliance type value should be passed in here. See ComplianceTypeEnum for more information on the compliance types that can be passed in here. If the listing_id query parameter is used, the compliance_type query parameter {if passed in) will be ignored. This is because all of a listing's policy violations {each compliance type) will be returned if a listing_id is provided. Either the listing_id or a compliance_type query parameter must be used, and if the seller only wants to view listing violations of a specific compliance type, both of these parameters can be used. Note: The listing_id query parameter is not yet available for use, so the seller does not have the ability to retrieve listing violations for one or more specific listings. Until the listing_id query parameter becomes available, the compliance_type query parameter is required with each getListingViolations call.|
|offset|query|string|false|The integer value input into this field controls the first listing violation in the result set that will be displayed at the top of the response. The offset and limit query parameters are used to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves listing violations 11 thru 20 from the resulting set of violations. Note: This feature employs a zero-based index, where the first item in the list has an offset of 0. If the listing_id parameter is included in the request, this parameter will be ignored. Default: 0 {zero)|
|listing_id|query|string|false|Note: This query parameter is not yet supported for the Compliance API. Please note that until this query parameter becomes available, the compliance_type query parameter is required with each getListingViolations call. This query parameter is used if the user wants to view all listing violations for one or more eBay listings. The string value passed into this field is the unique identifier of the listing, sometimes referred to as the Item ID. Either the listing_id or a compliance_type query parameter must be used, and if the seller only wants to view listing violations of a specific compliance type, both of these parameters can be used. Up to 50 listing IDs can be specified with this query parameter, and each unique listing ID is separated with a comma.|
|limit|query|string|false|This query parameter is used if the user wants to set a limit on the number of listing violations that are returned on one page of the result set. This parameter is used in conjunction with the offset parameter to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves listing violations 11 thru 20 from the collection of listing violations that match the value set in the compliance_type parameter. Note: This feature employs a zero-based index, where the first item in the list has an offset of 0. If the listing_id parameter is included in the request, this parameter will be ignored. Default: 100 Maximum: 200|
|filter|query|string|false|This filter allows a user to retrieve only listings that are currently out of compliance, or only listings that are at risk of becoming out of compliance. Although other filters may be added in the future, complianceState is the only supported filter type at this time. The two compliance 'states' are OUT_OF_COMPLIANCE and AT_RISK. Below is an example of how to set up this compliance state filter. Notice that the filter type and filter value are separated with a colon (:) character, and the filter value is wrapped with curly brackets. filter=complianceState:{OUT_OF_COMPLIANCE}|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "listingViolations": [
    {
      "complianceType": "string",
      "listingId": "string",
      "offerId": "string",
      "sku": "string",
      "violations": [
        {
          "complianceState": "string",
          "correctiveRecommendations": {
            "aspectRecommendations": [
              {
                "localizedAspectName": "string",
                "suggestedValues": [
                  "string"
                ]
              }
            ],
            "productRecommendation": {
              "epid": "string"
            }
          },
          "message": "string",
          "reasonCode": "string",
          "variation": {
            "sku": "string",
            "variationAspects": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "violationData": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ]
    }
  ],
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

<h3 id="getlistingviolations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PagedComplianceViolationCollection](#schemapagedcomplianceviolationcollection)|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.inventory )
</aside>

## suppressViolation

<a id="opIdsuppressViolation"></a>

> Code samples

```bash
curl https://api.ebay.com/suppress_listing_violation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "complianceType": "string",
    "listingId": "string"
  }'
```

`POST /suppress_listing_violation`

This call suppresses a listing violation for a specific listing. Only listing violations in the AT_RISK state (returned in the violations.complianceState field of the getListingViolations call) can be suppressed. Note: At this time, the suppressViolation call only supports the suppressing of ASPECTS_ADOPTION listing violations in the AT_RISK state. In the future, it is possible that this method can be used to suppress other listing violation types. A successful call returns a http status code of 204 Success. There is no response payload. If the call is not successful, an error code will be returned stating the issue.

> Body parameter

```json
{
  "complianceType": "string",
  "listingId": "string"
}
```

<h3 id="suppressviolation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SuppressViolationRequest](#schemasuppressviolationrequest)|true|This type is the base request type of the SuppressViolation method.|
|» complianceType|body|string|false|The compliance type of the listing violation to suppress is specified in this field. The compliance type for each listing violation is found in the complianceType field under the listingViolations array in a getListingViolations response. Note: At this time, the suppressViolation method is only used to suppress aspect adoption listing violations in the 'at-risk' state, so ASPECTS_ADOPTION is currently the only supported value for this field. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum'>eBay API documentation</a>|
|» listingId|body|string|false|The unique identifier of the listing with the violation(s) is specified in this field. The unique identifier of the listing with the listing violation(s) is found in the listingId field under the listingViolations array in a getListingViolations response. Note: At this time, the suppressViolation method is only used to suppress aspect adoption listing violations in the 'at-risk' state, so the listing specified in this field should be a listing with an ASPECTS_ADOPTION violation in the 'at-risk' state.|

<h3 id="suppressviolation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.inventory )
</aside>

<h1 id="compliance-api-listingviolationsummary">listing_violation_summary</h1>

## getListingViolationsSummary

<a id="opIdgetListingViolationsSummary"></a>

> Code samples

```bash
curl https://api.ebay.com/listing_violation_summary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /listing_violation_summary`

This call returns listing violation counts for a seller. A user can pass in one or more compliance types through the compliance_type query parameter. See ComplianceTypeEnum for more information on the supported listing compliance types. Listing violations are returned for multiple marketplaces if the seller sells on multiple eBay marketplaces. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.

<h3 id="getlistingviolationssummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-EBAY-C-MARKETPLACE-ID|header|string|false|Use this header to specify the eBay marketplace identifier. Supported values for this header can be found in the MarketplaceIdEnum type definition. Note that Version 1.4.0 of the Compliance API is only supported on the US, UK, Australia, Canada {English), and Germany sites.|
|compliance_type|query|string|false|A user passes in one or more compliance type values through this query parameter. See ComplianceTypeEnum for more information on the supported compliance types that can be passed in here. If more than one compliance type value is used, delimit these values with a comma. If no compliance type values are passed in, the listing count for all compliance types will be returned. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.|

> Example responses

> 200 Response

```json
{
  "violationSummaries": [
    {
      "complianceType": "string",
      "listingCount": 0,
      "marketplaceId": "string"
    }
  ]
}
```

<h3 id="getlistingviolationssummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ComplianceSummary](#schemacompliancesummary)|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.inventory )
</aside>

# Schemas

<h2 id="tocS_AspectRecommendations">AspectRecommendations</h2>
<!-- backwards compatibility -->
<a id="schemaaspectrecommendations"></a>
<a id="schema_AspectRecommendations"></a>
<a id="tocSaspectrecommendations"></a>
<a id="tocsaspectrecommendations"></a>

```json
{
  "localizedAspectName": "string",
  "suggestedValues": [
    "string"
  ]
}
```

This type is used by the aspectsRecommendation container, which is returned if eBay has found a listing with missing or invalid item aspects (ASPECTS_ADOPTION compliance type).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localizedAspectName|string|false|none|The name of the item aspect for which eBay has a recommendation. In many cases, the same item aspect(s) that are returned under the violationData array for ASPECTS_ADOPTION listing violations are also returned here Note: This name is always localized for the specified marketplace.|
|suggestedValues|[string]|false|none|One or more valid values for the corresponding item aspect (in localizedAspectName) are returned here. These suggested values for the item aspect depend on the listing category and on the information specified in the listing. Sellers should confirm accuracy of the values before applying them to the listing. Please use getItemAspectsForCategory in the Taxonomy API or GetCategorySpecifics in the Trading API to get a comprehensive list of required and recommended aspects for a given category and a list of supported aspect values for each.|

<h2 id="tocS_ComplianceDetail">ComplianceDetail</h2>
<!-- backwards compatibility -->
<a id="schemacompliancedetail"></a>
<a id="schema_ComplianceDetail"></a>
<a id="tocScompliancedetail"></a>
<a id="tocscompliancedetail"></a>

```json
{
  "complianceState": "string",
  "correctiveRecommendations": {
    "aspectRecommendations": [
      {
        "localizedAspectName": "string",
        "suggestedValues": [
          "string"
        ]
      }
    ],
    "productRecommendation": {
      "epid": "string"
    }
  },
  "message": "string",
  "reasonCode": "string",
  "variation": {
    "sku": "string",
    "variationAspects": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "violationData": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

This type is used by each listing violation that is returned under the violations container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|complianceState|string|false|none|The enumeration value returned in this field indicates if the listing violation is considered to be OUT_OF_COMPLIANCE with an eBay listing policy, or the listing is considered to be AT_RISK of becoming non-compliant against an eBay listing policy. Generally, OUT_OF_COMPLIANCE policy violations can prevent the seller from revising a listing until the underlying violation(s) can be remedied. When the compliance state is AT_RISK, the seller is not blocked from revising the listing, but the seller should correct the violation to prevent the listing from being blocked for revisions in the future. Note: This field is returned for most violations, but not all. In the case that this field is not returned, it can be assumed that the state of the listing violation is OUT_OF_COMPLIANCE. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceStateEnum'>eBay API documentation</a>|
|correctiveRecommendations|[CorrectiveRecommendations](#schemacorrectiverecommendations)|false|none|This container is returned for ASPECTS_ADOPTION violations if eBay has found one or more item aspect name-value pairs that may be appropriate for the seller's product. In many cases, the missing or incorrect item aspect(s) shown under the corresponding violationData array, will also show up under the aspectRecommendations array with suggested value(s). Note: eBay catalog product adoption is not enforced for any eBay category at this time, so a recommended eBay product ID (aka ePID) will not be returned under the productRecommendation container at this time.|
|message|string|false|none|This field provides a textual summary of the listing violation. A message field is returned for each listing violation. This message will vary widely based on the compliance type and corresponding reason code.|
|reasonCode|string|false|none|This value states the nature of the listing violation. A reasonCode value is returned for each listing violation, and each compliance type can have several reason codes and related messages. The reasonCode values vary by compliance type. The reason codes for each compliance type are summarized below. Aspects adoption The reason codes for ASPECTS_ADOPTION compliance indicate that for the given violation, aspects listed in the violationData container are either missing from the listing or they have invalid values. The reason codes specify whether the violation is for required aspects, recommended (preferred) aspects, or soon to be required aspects. MISSING_OR_INVALID_REQUIRED_ASPECTS MISSING_OR_INVALID_PREFERRED_ASPECTS MISSING_OR_INVALID_SOON_TO_BE_REQUIRED_ASPECTS HTTPS The reason codes for HTTPS compliance identify where in the listing the violation occurs. For HTTPS policy violations, the seller will just need to remove the HTTP link (or update to HTTPS) from the listing details or product details: NON_SECURE_HTTP_LINK_IN_LISTING NON_SECURE_HTTP_LINK_IN_PRODUCT Non-eBay links The reason codes for OUTSIDE_EBAY_BUYING_AND_SELLING compliance identify the specific type of data (e.g., telephone number) that violated the policy. For each of these violations, the seller will just need to revise the listing, removing this information: UNAPPROVED_DOMAIN_WEBLINK_IN_LISTING PHONE_NUMBER_IN_LISTING EMAIL_ADDRESS_IN_LISTING Product adoption Product Adoption is not enforced at this time. Product adoption conformance Product Adoption is not enforced at this time. Returns policy The only RETURNS_POLICY reason code is UNSUPPORTED_RETURNS_PERIOD. The seller will have to revise their listing (or return business policy) with a supported return period for the site and category. The GetCategoryFeatures call of the Trading API can be used to verify the supported return periods for a particular category. For most eBay categories, the minimum return period that can be stated in a Returns Policy is 14 days for domestic and international sales, but some categories require a minimum 30-day return period.|
|variation|[VariationDetails](#schemavariationdetails)|false|none|This container defines the variation within a multiple-variation listing that has the listing violation. This container is only returned if an individual variation within a multiple-variation listing has the listing violation.|
|violationData|[[NameValueList](#schemanamevaluelist)]|false|none|This container provides more information about the listing violation, if applicable. The type of information that appears here will vary based on the compliance type and type of violation. For example, for ASPECTS_ADOPTION violations, this container lists the missing aspect(s) or aspect(s) with invalid values.|

<h2 id="tocS_ComplianceSummary">ComplianceSummary</h2>
<!-- backwards compatibility -->
<a id="schemacompliancesummary"></a>
<a id="schema_ComplianceSummary"></a>
<a id="tocScompliancesummary"></a>
<a id="tocscompliancesummary"></a>

```json
{
  "violationSummaries": [
    {
      "complianceType": "string",
      "listingCount": 0,
      "marketplaceId": "string"
    }
  ]
}
```

This type is the base type for the getListingViolationsSummary response. The violationSummaries container contains an array of policy violation counts for each unique eBay marketplace and compliance type violation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|violationSummaries|[[ComplianceSummaryInfo](#schemacompliancesummaryinfo)]|false|none|This container is an array of one or more policy violation counts. A policy violation count is returned for each unique eBay marketplace and compliance type violation. As long as there is at least one non-compliant listing for the specified compliance type(s), this container will be returned. If no non-compliant listings are found for the specified compliance type(s), an HTTP status code of 204 No Content is returned, and there is no response body.|

<h2 id="tocS_ComplianceSummaryInfo">ComplianceSummaryInfo</h2>
<!-- backwards compatibility -->
<a id="schemacompliancesummaryinfo"></a>
<a id="schema_ComplianceSummaryInfo"></a>
<a id="tocScompliancesummaryinfo"></a>
<a id="tocscompliancesummaryinfo"></a>

```json
{
  "complianceType": "string",
  "listingCount": 0,
  "marketplaceId": "string"
}
```

This type is used by each unique eBay marketplace and compliance type combination that is returned in the getListingViolationsSummary response to indicate the total number of listing violations in regards to that eBay marketplace and compliance type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|complianceType|string|false|none|This enumeration value indicates the type of compliance. See ComplianceTypeEnum for more information on each compliance type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum'>eBay API documentation</a>|
|listingCount|integer(int32)|false|none|This integer value indicates the number of eBay listings that are currently violating the compliance type indicated in the complianceType field, for the eBay marketplace indicated in the marketplaceId field.|
|marketplaceId|string|false|none|This enumeration value indicates the eBay marketplace where the listing violations exist. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/bas:MarketplaceIdEnum'>eBay API documentation</a>|

<h2 id="tocS_ComplianceViolation">ComplianceViolation</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceviolation"></a>
<a id="schema_ComplianceViolation"></a>
<a id="tocScomplianceviolation"></a>
<a id="tocscomplianceviolation"></a>

```json
{
  "complianceType": "string",
  "listingId": "string",
  "offerId": "string",
  "sku": "string",
  "violations": [
    {
      "complianceState": "string",
      "correctiveRecommendations": {
        "aspectRecommendations": [
          {
            "localizedAspectName": "string",
            "suggestedValues": [
              "string"
            ]
          }
        ],
        "productRecommendation": {
          "epid": "string"
        }
      },
      "message": "string",
      "reasonCode": "string",
      "variation": {
        "sku": "string",
        "variationAspects": [
          {
            "name": "string",
            "value": "string"
          }
        ]
      },
      "violationData": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

This type is used by each listing violation that is returned under the listingViolations container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|complianceType|string|false|none|This enumeration value indicates the compliance type of listing violation. See ComplianceTypeEnum for more information on each compliance type. This will always be returned for each listing violation that is found. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum'>eBay API documentation</a>|
|listingId|string|false|none|The unique identifier of the eBay listing that currently has the corresponding listing violation{s). This field will always be returned for each listing that has one or more violations.|
|offerId|string|false|none|Note: This field is for future use, and will not be returned, even for listings created through the Inventory API. The unique identifier of the offer. This field is only applicable and returned for listings that were created through the Inventory API. To convert an Inventory Item object into an eBay listing, an Offer object must be created and published.|
|sku|string|false|none|The seller-defined SKU value of the product in the listing with the violation{s). This field is only returned if defined in the listing. SKU values are optional in listings except when creating listings using the Inventory API model.|
|violations|[[ComplianceDetail](#schemacompliancedetail)]|false|none|This container consists of an array of one or more listing violations applicable to the eBay listing specified in the listingId field. This array is returned for each eBay listing that has one or more violations. For each returned violation, the fields that are returned and the details that are given will depend on the listing violation.|

<h2 id="tocS_CorrectiveRecommendations">CorrectiveRecommendations</h2>
<!-- backwards compatibility -->
<a id="schemacorrectiverecommendations"></a>
<a id="schema_CorrectiveRecommendations"></a>
<a id="tocScorrectiverecommendations"></a>
<a id="tocscorrectiverecommendations"></a>

```json
{
  "aspectRecommendations": [
    {
      "localizedAspectName": "string",
      "suggestedValues": [
        "string"
      ]
    }
  ],
  "productRecommendation": {
    "epid": "string"
  }
}
```

This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspectRecommendations|[[AspectRecommendations](#schemaaspectrecommendations)]|false|none|This container is returned for ASPECTS_ADOPTION violations if eBay has found one or more item aspect name-value pairs that may be appropriate for the seller's product. In many cases, the missing or invalid item aspect(s) shown under the corresponding violationData array, will also show up under this array with suggested value(s).|
|productRecommendation|[ProductRecommendation](#schemaproductrecommendation)|false|none|This container is only applicable (and possibly returned) for the PRODUCT_ADOPTION and PRODUCT_ADOPTION_CONFORMANCE compliance types, and since eBay catalog product adoption is not enforced for any eBay category at this time, the productRecommendation container will not be returned at this time.|

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

<h2 id="tocS_NameValueList">NameValueList</h2>
<!-- backwards compatibility -->
<a id="schemanamevaluelist"></a>
<a id="schema_NameValueList"></a>
<a id="tocSnamevaluelist"></a>
<a id="tocsnamevaluelist"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

This type is used to provide a name-value pair, including the identifying aspects of a product variation through the variationAspects container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|This is the name of the variation aspect, or the name of the category of information that is returned through the name-value pair. The type of information that appears here will vary based on the compliance type and type of violation.|
|value|string|false|none|This is the value of the variation aspect (in name field), or the value of the category of information that is returned through the name-value pair. The type of information that appears here will vary based on the compliance type and type of violation.|

<h2 id="tocS_PagedComplianceViolationCollection">PagedComplianceViolationCollection</h2>
<!-- backwards compatibility -->
<a id="schemapagedcomplianceviolationcollection"></a>
<a id="schema_PagedComplianceViolationCollection"></a>
<a id="tocSpagedcomplianceviolationcollection"></a>
<a id="tocspagedcomplianceviolationcollection"></a>

```json
{
  "href": "string",
  "limit": 0,
  "listingViolations": [
    {
      "complianceType": "string",
      "listingId": "string",
      "offerId": "string",
      "sku": "string",
      "violations": [
        {
          "complianceState": "string",
          "correctiveRecommendations": {
            "aspectRecommendations": [
              {
                "localizedAspectName": "string",
                "suggestedValues": [
                  "string"
                ]
              }
            ],
            "productRecommendation": {
              "epid": "string"
            }
          },
          "message": "string",
          "reasonCode": "string",
          "variation": {
            "sku": "string",
            "variationAspects": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "violationData": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ]
    }
  ],
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

This type is the base response type of the getListingViolations method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the getListingViolations call request that produced the current page of the result set.|
|limit|integer(int32)|false|none|The maximum number of listing violations returned per page of the result set. The limit and offset query parameters are used to control the pagination of the output. Note: If this is the last or only page in the result set, it may contain fewer listing violations than the limit value. To determine the number of pages in the result set, divide this value into the value of total and round up to the next integer. Default: 50 Max: 200|
|listingViolations|[[ComplianceViolation](#schemacomplianceviolation)]|false|none|An array of listing violations that match the criteria in the call request, including pagination control {if set). As long as there is at least one listing violation that matches the input criteria, this container will be returned. If no listing violations are found for the seller, an HTTP status code of 204 No Content is returned, and there is no response body.|
|next|string|false|none|The getListingViolations call URI to use to view the next page of the result set. For example, the following URI returns listing violations 21 thru 30 from the collection of policy violations: path/listing_violation?limit=10&amp;offset=20 This field is only returned if an additional page of listing violations exists.|
|offset|integer(int32)|false|none|This integer value shows the offset of the current page of results. The offset value controls the first listing violation in the result set that will be displayed at the top of the response. The offset and limit query parameters are used to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves listing violations 11 thru 20 from the resulting collection of violations. Note: This feature employs a zero-based index, where the first item in the list has an offset of 0. Default: 0 {zero)|
|prev|string|false|none|The getListingViolations call URI to use to view the previous page of the result set. For example, the following URI returns listing violations 1 thru 10 from the collection of policy violations: path/listing_violation?limit=10&amp;offset=0 This field is only returned if an previous page of listing violations exists.|
|total|integer(int32)|false|none|The total number of listing violations in the result set. If this value is higher than the limit value, there are multiple pages in the result set to view.|

<h2 id="tocS_ProductRecommendation">ProductRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemaproductrecommendation"></a>
<a id="schema_ProductRecommendation"></a>
<a id="tocSproductrecommendation"></a>
<a id="tocsproductrecommendation"></a>

```json
{
  "epid": "string"
}
```

This type is used by the productRecommendation container, which is returned if eBay has found an eBay catalog product that may be a match for the product (or product variation) that has a listing violation. Note: eBay catalog product adoption is not enforced at this time, so product adoption violations are no longer returned. Due to this fact, this type and productRecommendation container are not currently applicable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epid|string|false|none|This field will return the eBay Product ID {ePID) of an eBay Catalog product that eBay recommends that the seller use to make their listing compliant. Note: Product Adoption is not enforced at this time. Product Adoption violations are no longer returned.|

<h2 id="tocS_SuppressViolationRequest">SuppressViolationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasuppressviolationrequest"></a>
<a id="schema_SuppressViolationRequest"></a>
<a id="tocSsuppressviolationrequest"></a>
<a id="tocssuppressviolationrequest"></a>

```json
{
  "complianceType": "string",
  "listingId": "string"
}
```

This is the base request type of the suppressViolation method, and is used to identify the listing violation that the seller wishes to suppress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|complianceType|string|false|none|The compliance type of the listing violation to suppress is specified in this field. The compliance type for each listing violation is found in the complianceType field under the listingViolations array in a getListingViolations response. Note: At this time, the suppressViolation method is only used to suppress aspect adoption listing violations in the 'at-risk' state, so ASPECTS_ADOPTION is currently the only supported value for this field. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum'>eBay API documentation</a>|
|listingId|string|false|none|The unique identifier of the listing with the violation(s) is specified in this field. The unique identifier of the listing with the listing violation(s) is found in the listingId field under the listingViolations array in a getListingViolations response. Note: At this time, the suppressViolation method is only used to suppress aspect adoption listing violations in the 'at-risk' state, so the listing specified in this field should be a listing with an ASPECTS_ADOPTION violation in the 'at-risk' state.|

<h2 id="tocS_VariationDetails">VariationDetails</h2>
<!-- backwards compatibility -->
<a id="schemavariationdetails"></a>
<a id="schema_VariationDetails"></a>
<a id="tocSvariationdetails"></a>
<a id="tocsvariationdetails"></a>

```json
{
  "sku": "string",
  "variationAspects": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

This type is used to identify the product variation that has the listing violation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sku|string|false|none|The seller-defined SKU value of the variation within the multiple-variation listing with the violation{s). This field is only returned if a seller-defined SKU value is defined for the variation. SKU values are optional in listing except when creating listings using the Inventory API.|
|variationAspects|[[NameValueList](#schemanamevaluelist)]|false|none|An array of one or more variation aspects that define a variation within a multiple-variation listing. The aspect{s) returned here define the individual variation, because these aspects will differ for each variation. Common varying aspects include color and size.|
