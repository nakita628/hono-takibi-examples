<h1 id="account-api">Account API v1.9.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The <b>Account API</b> gives sellers the ability to configure their eBay seller accounts, including the seller's policies (eBay business policies and seller-defined custom policies), opt in and out of eBay seller programs, configure sales tax tables, and get account information.  <br/><br/>For details on the availability of the methods in this API, see <a href="/api-docs/sell/account/overview.html#requirements">Account API requirements and restrictions</a>.

Base URLs:

* <a href="https://api.ebay.com/sell/account/v1">https://api.ebay.com/sell/account/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.account|View and manage your account settings|
|https://api.ebay.com/oauth/api_scope/sell.account.readonly|View your account settings|

<h1 id="account-api-advertisingeligibility">advertising_eligibility</h1>

## getAdvertisingEligibility

<a id="opIdgetAdvertisingEligibility"></a>

> Code samples

```bash
curl https://api.ebay.com/advertising_eligibility \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /advertising_eligibility`

This method allows developers to check the seller eligibility status for eBay advertising programs.

<h3 id="getadvertisingeligibility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|program_types|query|string|false|A comma-separated list of eBay advertising programs.<br /><br /><span class="tablenote"><b>Tip:</b> See the <a href="/api-docs/sell/account/types/plser:AdvertisingProgramEnum"> AdvertisingProgramEnum</a> type for possible values.</span><br /><br />If no programs are specified, the results will be returned for all programs.|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|The unique identifier of the eBay marketplace for which the seller eligibility status shall be checked.<br /><br /><span class="tablenote"><b>Note:</b> This value is case-sensitive.</span>|

> Example responses

> 200 Response

```json
{
  "advertisingEligibility": [
    {
      "programType": "string",
      "reason": "string",
      "status": "string"
    }
  ]
}
```

<h3 id="getadvertisingeligibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SellerEligibilityMultiProgramResponse](#schemasellereligibilitymultiprogramresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

<h1 id="account-api-custompolicy">custom_policy</h1>

## getCustomPolicies

<a id="opIdgetCustomPolicies"></a>

> Code samples

```bash
curl https://api.ebay.com/custom_policy/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /custom_policy/`

This method retrieves the list of custom policies specified by the <b>policy_types</b> query parameter for the selected eBay marketplace.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div><br/><br/>For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

<h3 id="getcustompolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policy_types|query|string|false|This query parameter specifies the type of custom policies to be returned.<br /><br />Multiple policy types may be requested in a single call by providing a comma-delimited set of all policy types to be returned.<br/><br/><span class="tablenote"><strong>Note:</strong> Omitting this query parameter from a request will also return policies of all policy types.</span><br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul>|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|This header parameter specifies the eBay marketplace for the custom policy that is being created. Supported values for this header can be found in the <a href="/api-docs/sell/account/types/ba:MarketplaceIdEnum" target="_blank">MarketplaceIdEnum</a> type definition.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span></br><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div>|

> Example responses

> 200 Response

```json
{
  "customPolicies": [
    {
      "customPolicyId": "string",
      "label": "string",
      "name": "string",
      "policyType": "string"
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

<h3 id="getcustompolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomPolicyResponse](#schemacustompolicyresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## createCustomPolicy

<a id="opIdcreateCustomPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/custom_policy/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string' \
  -d '{
    "description": "string",
    "label": "string",
    "name": "string",
    "policyType": "string"
  }'
```

`POST /custom_policy/`

This method creates a new custom policy in which a seller specifies their terms for complying with local governmental regulations. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul>Each Custom Policy targets a <b>policyType</b> and <b>eBay marketplace</b> combination. Multiple policies may be created as follows: <ul><li><b>Product Compliance</b>: a maximum of 10 policies per eBay marketplace may be created</li> <li><b>Takeback</b>: a maximum of 3 policies per eBay marketplace may be created</li></ul>A successful create policy call returns an HTTP status code of <b>201 Created</b> with the system-generated policy ID included in the <b>Location</b> response header.<br/><br/><b>Product Compliance Policy</b><br/><br/>Product Compliance policies disclose product information as required for regulatory compliance.<br/><br/><span class="tablenote"><strong>Note:</strong> A maximum of 10 Product Compliance policies per eBay marketplace may be created.</span> <br/><br/> <b>Takeback Policy</b><br/><br/>Takeback policies describe the seller's legal obligation to take back a previously purchased item when the buyer purchases a new one.<br/><br/><span class="tablenote"><strong>Note:</strong> A maximum of 3 Takeback policies per eBay marketplace may be created.</span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div>

> Body parameter

```json
{
  "description": "string",
  "label": "string",
  "name": "string",
  "policyType": "string"
}
```

<h3 id="createcustompolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|This header parameter specifies the eBay marketplace for the custom policy that is being created. Supported values for this header can be found in the <a href="/api-docs/sell/account/types/ba:MarketplaceIdEnum" target="_blank">MarketplaceIdEnum</a> type definition.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div>|
|body|body|[CustomPolicyCreateRequest](#schemacustompolicycreaterequest)|true|Request to create a new Custom Policy.|
|» description|body|string|false|Details of the seller's specific policy and terms for this policy.<br/><br/><b>Max length:</b> 15,000|
|» label|body|string|false|Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65|
|» name|body|string|false|The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65|
|» policyType|body|string|false|Specifies the type of custom policy being created. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a>|

> Example responses

> 201 Response

```json
{}
```

<h3 id="createcustompolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|Bad Request|None|
|409|Conflict|Policy Name already used/ Maximum no of policies per site reached|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

## getCustomPolicy

<a id="opIdgetCustomPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/custom_policy/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /custom_policy/{custom_policy_id}`

This method retrieves the custom policy specified by the <b>custom_policy_id</b> path parameter for the selected eBay marketplace.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div><br/><br/>For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

<h3 id="getcustompolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|custom_policy_id|path|string|true|This path parameter is the unique custom policy identifier for the policy to be returned.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span>|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|This header parameter specifies the eBay marketplace for the custom policy that is being created. Supported values for this header can be found in the <a href="/api-docs/sell/account/types/ba:MarketplaceIdEnum" target="_blank">MarketplaceIdEnum</a> type definition.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div>|

> Example responses

> 200 Response

```json
{
  "customPolicyId": "string",
  "description": "string",
  "label": "string",
  "name": "string",
  "policyType": "string"
}
```

<h3 id="getcustompolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomPolicy](#schemacustompolicy)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## updateCustomPolicy

<a id="opIdupdateCustomPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/custom_policy/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string' \
  -d '{
    "description": "string",
    "label": "string",
    "name": "string"
  }'
```

`PUT /custom_policy/{custom_policy_id}`

This method updates an existing custom policy specified by the <b>custom_policy_id</b> path parameter for the selected marketplace. This method overwrites the policy's <b>Name</b>, <b>Label</b>, and <b>Description</b> fields. Therefore, the complete, current text of all three policy fields must be included in the request payload even when one or two of these fields will not actually be updated.<br/> <br/>For example, the value for the <b>Label</b> field is to be updated, but the <b>Name</b> and <b>Description</b> values will remain unchanged. The existing <b>Name</b> and <b>Description</b> values, as they are defined in the current policy, must also be passed in. <br/><br/>A successful policy update call returns an HTTP status code of <b>204 No Content</b>.<br/><br/><span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div><br/><br/>For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

> Body parameter

```json
{
  "description": "string",
  "label": "string",
  "name": "string"
}
```

<h3 id="updatecustompolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|custom_policy_id|path|string|true|This path parameter is the unique custom policy identifier for the policy to be returned.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span>|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|This header parameter specifies the eBay marketplace for the custom policy that is being created. Supported values for this header can be found in the <a href="/api-docs/sell/account/types/ba:MarketplaceIdEnum" target="_blank">MarketplaceIdEnum</a> type definition.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div>|
|body|body|[CustomPolicyRequest](#schemacustompolicyrequest)|true|Request to update a current custom policy.|
|» description|body|string|false|Details of the seller's specific policy and terms for this policy.<br/><br/><b>Max length:</b> 15,000|
|» label|body|string|false|Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65|
|» name|body|string|false|The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65|

<h3 id="updatecustompolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Policy Name already used/ Maximum no of policies per site reached|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

<h1 id="account-api-fulfillmentpolicy">fulfillment_policy</h1>

## getFulfillmentPolicies

<a id="opIdgetFulfillmentPolicies"></a>

> Code samples

```bash
curl 'https://api.ebay.com/fulfillment_policy?marketplace_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /fulfillment_policy`

This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

<h3 id="getfulfillmentpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|query|string|true|This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum|

> Example responses

> 200 Response

```json
{
  "fulfillmentPolicies": [
    {
      "categoryTypes": [
        {
          "default": true,
          "name": "string"
        }
      ],
      "description": "string",
      "freightShipping": true,
      "fulfillmentPolicyId": "string",
      "globalShipping": true,
      "handlingTime": {
        "unit": "string",
        "value": 0
      },
      "localPickup": true,
      "marketplaceId": "string",
      "name": "string",
      "pickupDropOff": true,
      "shipToLocations": {
        "regionExcluded": [
          {
            "regionName": "string",
            "regionType": "string"
          }
        ],
        "regionIncluded": [
          {
            "regionName": "string",
            "regionType": "string"
          }
        ]
      },
      "shippingOptions": [
        {
          "costType": "string",
          "insuranceFee": {
            "currency": "string",
            "value": "string"
          },
          "insuranceOffered": true,
          "optionType": "string",
          "packageHandlingCost": {
            "currency": "string",
            "value": "string"
          },
          "rateTableId": "string",
          "shippingDiscountProfileId": "string",
          "shippingPromotionOffered": true,
          "shippingServices": [
            {
              "additionalShippingCost": {
                "currency": "string",
                "value": "string"
              },
              "buyerResponsibleForPickup": true,
              "buyerResponsibleForShipping": true,
              "cashOnDeliveryFee": {
                "currency": "string",
                "value": "string"
              },
              "freeShipping": true,
              "shipToLocations": {
                "regionExcluded": [
                  {
                    "regionName": "string",
                    "regionType": "string"
                  }
                ],
                "regionIncluded": [
                  {
                    "regionName": "string",
                    "regionType": "string"
                  }
                ]
              },
              "shippingCarrierCode": "string",
              "shippingCost": {
                "currency": "string",
                "value": "string"
              },
              "shippingServiceCode": "string",
              "sortOrder": 0,
              "surcharge": {
                "currency": "string",
                "value": "string"
              }
            }
          ]
        }
      ]
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

<h3 id="getfulfillmentpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FulfillmentPolicyResponse](#schemafulfillmentpolicyresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## createFulfillmentPolicy

<a id="opIdcreateFulfillmentPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/fulfillment_policy/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryTypes": [
      {
        "default": true,
        "name": "string"
      }
    ],
    "description": "string",
    "freightShipping": true,
    "globalShipping": true,
    "handlingTime": {
      "unit": "string",
      "value": 0
    },
    "localPickup": true,
    "marketplaceId": "string",
    "name": "string",
    "pickupDropOff": true,
    "shipToLocations": {
      "regionExcluded": [
        {
          "regionName": "string",
          "regionType": "string"
        }
      ],
      "regionIncluded": [
        {
          "regionName": "string",
          "regionType": "string"
        }
      ]
    },
    "shippingOptions": [
      {
        "costType": "string",
        "insuranceFee": {
          "currency": "string",
          "value": "string"
        },
        "insuranceOffered": true,
        "optionType": "string",
        "packageHandlingCost": {
          "currency": "string",
          "value": "string"
        },
        "rateTableId": "string",
        "shippingDiscountProfileId": "string",
        "shippingPromotionOffered": true,
        "shippingServices": [
          {
            "additionalShippingCost": {
              "currency": "string",
              "value": "string"
            },
            "buyerResponsibleForPickup": true,
            "buyerResponsibleForShipping": true,
            "cashOnDeliveryFee": {
              "currency": "string",
              "value": "string"
            },
            "freeShipping": true,
            "shipToLocations": {
              "regionExcluded": [
                {
                  "regionName": "string",
                  "regionType": "string"
                }
              ],
              "regionIncluded": [
                {
                  "regionName": "string",
                  "regionType": "string"
                }
              ]
            },
            "shippingCarrierCode": "string",
            "shippingCost": {
              "currency": "string",
              "value": "string"
            },
            "shippingServiceCode": "string",
            "sortOrder": 0,
            "surcharge": {
              "currency": "string",
              "value": "string"
            }
          }
        ]
      }
    ]
  }'
```

`POST /fulfillment_policy/`

This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using the eBay standard envelope (eSE) service</a>.</p>

> Body parameter

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "freightShipping": true,
  "globalShipping": true,
  "handlingTime": {
    "unit": "string",
    "value": 0
  },
  "localPickup": true,
  "marketplaceId": "string",
  "name": "string",
  "pickupDropOff": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingOptions": [
    {
      "costType": "string",
      "insuranceFee": {
        "currency": "string",
        "value": "string"
      },
      "insuranceOffered": true,
      "optionType": "string",
      "packageHandlingCost": {
        "currency": "string",
        "value": "string"
      },
      "rateTableId": "string",
      "shippingDiscountProfileId": "string",
      "shippingPromotionOffered": true,
      "shippingServices": [
        {
          "additionalShippingCost": {
            "currency": "string",
            "value": "string"
          },
          "buyerResponsibleForPickup": true,
          "buyerResponsibleForShipping": true,
          "cashOnDeliveryFee": {
            "currency": "string",
            "value": "string"
          },
          "freeShipping": true,
          "shipToLocations": {
            "regionExcluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ],
            "regionIncluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ]
          },
          "shippingCarrierCode": "string",
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingServiceCode": "string",
          "sortOrder": 0,
          "surcharge": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  ]
}
```

<h3 id="createfulfillmentpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FulfillmentPolicyRequest](#schemafulfillmentpolicyrequest)|true|Request to create a seller account fulfillment policy.|
|» categoryTypes|body|[[CategoryType](#schemacategorytype)]|false|This container is used to specify whether the fulfillment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|» description|body|string|false|A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|» freightShipping|body|boolean|false|This field is included and set to <code>true</code> if freight shipping is available for the item. Freight shipping can be used for large items over 150 lbs.<br/><br/><b>Default</b>: false|
|» globalShipping|body|boolean|false|This field is included and set to <code>true</code> if the seller wants to use the Global Shipping Program for international shipments. See the <a href="https://pages.ebay.com/help/sell/shipping-globally.html ">Global Shipping Program</a> help topic for more details and requirements on the Global Shipping Program.<br/><br/>It is possible for a seller to use a combination of the Global Shipping Program and other international shipping services. <br/><br/>If this value is set to <code>false</code> or if the field is omitted, the seller is responsible for manually specifying individual international shipping services (if the seller ships internationally)., as described in <a href="https://developer.ebay.com/api-docs/sell/static/seller-accounts/ht_shipping-worldwide.html ">Setting up worldwide shipping</a>. <br/><br/>Sellers can opt in or out of the Global Shipping Program through the Shipping preferences in My eBay.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span><p><b>Default</b>: false</p>|
|» handlingTime|body|[TimeDuration](#schematimeduration)|false|This container is used to specify the maximum number of business days the seller commits to for preparing and shipping an order after receiving a cleared payment for the order. This time does not include the transit time it takes the shipping carrier to deliver the order.<br /><br />Valid values can vary by site and by category. To obtain the supported values for a site, call <b>GeteBayDetails</b> in the Trading API with <b>DetailName</b> set to <code>DispatchTimeMaxDetails</code>, then inspect the <b>DispatchTimeMaxDetails</b> container in the response for the time values supported by the site (typical handling times are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>10</code>, <code>15</code>, and <code>20</code>, but these can vary by site and may change over time.) <p>This field is conditionally required when the seller is offering one or more domestic or international shipping options, but it is not applicable when the item is only available through local pickup (<code>"localPickup": "true"</code>), or if it will be shipped through a freight shipping service (<code>"freightShipping": "true"</code>). </p> <span class="tablenote"><b>Note: </b> Top-Rated sellers must offer same-day or one-day handling for a listing in order for that listing to receive a Top Rated Plus seal on the View Item or Search Results pages. To offer zero-day or one-day handling, set field to '0' or '1', respectively.</span>|
|» localPickup|body|boolean|false|This field should be included and set to <code>true</code> if local pickup is one of the fulfillment options available to the buyer. It is possible for the seller to make local pickup and some shipping service options available to the buyer.<br/><br/>With local pickup, the buyer and seller make arrangements for pickup time and location.<br/><br/><b>Default</b>: <code>false</code>|
|» marketplaceId|body|string|false|The ID of the eBay marketplace to which this fulfillment policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64|
|» pickupDropOff|body|boolean|false|This field should be included and set to <code>true</code> if the seller offers the "Click and Collect" feature for an item. <p>To enable "Click and Collect" on a listing, a seller must be eligible for Click and Collect. Currently, Click and Collect is available to only large retail merchants selling in the eBay AU and UK marketplaces.</p>  <p>In addition to setting this field to <code>true</code>, the merchant must also do the following to enable the "Click and Collect" option on a listing: <ul><li>Have inventory for the product at one or more physical stores tied to the merchant's account. <p>Sellers can use the <b>createInventoryLocaion</b> method in the Inventory API to associate physical stores to their account and they can then can add inventory to specific store locations.</p></li><li>Set an immediate payment requirement on the item. The immediate payment feature requires the seller to: <ul><li>Set the <b>immediatePay</b> flag in the payment policy to 'true'.</li><li>Have a valid store location with a complete street address.</li></ul></li></ul><p>When a merchant successfully lists an item with Click and Collect, prospective buyers within a reasonable distance from one of the merchant's stores (that has stock available) will see the "Available for Click and Collect" option on the listing, along with information on the closest store that has the item.</p><b>Default</b>: false|
|» shipToLocations|body|[RegionSet](#schemaregionset)|false|This container consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which are used to define the geographical regions/countries/states or provinces/domestic regions that a seller does and does not ship to for the associated fulfillment policy. Note that this container can be considered the master list of where the seller ships and does not ship, but there is also a <b>shipToLocations</b> container that can be set at the shipping service option level. <br/><br/>To retrieve the valid geographical shipping region values, two-digit country values, or special domestic regions for an eBay marketplace, call <b>GeteBayDetails</b> with <b>DetailName</b> value set to <code>ExcludeShippingLocationDetails</code>, then review the <b>ExcludeShippingLocationDetails</b> containers in the response for the strings you use in both the <b>regionIncluded.regionName</b> and in the <b>regionExcluded.regionName</b> fields. <br /><br />For valid geographical region names, look for the <code>ExcludeShippingLocationDetails</code> containers in the <b>GeteBayDetails</b> response where the <b>Region</b> value is <code>Worldwide</code>, and the valid values will be shown in the corresponding <b>Location</b> fields. <br /><br />For valid two-digit country codes, look for <code>ExcludeShippingLocationDetails</code> in the <b>GeteBayDetails</b> response where the <b>Region</b> value is one of the defined geographical regions, and the valid values will be shown in the corresponding <b>Location</b> fields. Alternatively, you can find the two-digit country code values in the <a href="/api-docs/sell/account/types/ba:CountryCodeEnum">CountryCodeEnum</a> type definition. For valid domestic region values, look for <code>ExcludeShippingLocationDetails</code> in the <b>GeteBayDetails</b> response where the <b>Region</b> value is either <code>Domestic Location</code> or <code>Additional Locations</code>, and the valid values will be shown in the corresponding <b>Location</b> fields. <br /><br />The <code>STATE_OR_PROVINCE</code> region type is only applicable to the US and Canada, and valid values for US states are the same <a href="https://about.usps.com/who-we-are/postal-history/state-abbreviations.htm ">two-digit abbreviations</a> used by the United States Postal Service, and valid values for Canadian provinces and territories are the same <a href="https://www.canadapost-postescanada.ca/cpc/en/support/articles/addressing-guidelines/symbols-and-abbreviations.page ">two-digit abbreviations</a> used by the Canada Post.|
|» shippingOptions|body|[[ShippingOption](#schemashippingoption)]|false|This array is used to provide detailed information on the domestic and international shipping options available for the policy. <br /><br />A separate <b>ShippingOption</b> object is required for domestic shipping service options and for international shipping service options (if the seller ships to international locations). <ul><li>The <b>optionType</b> field is used to indicate whether the <b>ShippingOption</b> object applies to domestic or international shipping, and the <b>costType</b> field is used to indicate whether flat-rate shipping or calculated shipping will be used.</li> <li>The <b>rateTableId</b> field can be used to associate a defined shipping rate table to the policy, and the <b>packageHandlingCost</b> container can be used to set a handling charge for the policy.</li></ul> <p>A separate <b>ShippingServices</b> object will be used to specify cost and other details for every available domestic and international shipping service option. </p>|

> Example responses

> 201 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "freightShipping": true,
  "fulfillmentPolicyId": "string",
  "globalShipping": true,
  "handlingTime": {
    "unit": "string",
    "value": 0
  },
  "localPickup": true,
  "marketplaceId": "string",
  "name": "string",
  "pickupDropOff": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingOptions": [
    {
      "costType": "string",
      "insuranceFee": {
        "currency": "string",
        "value": "string"
      },
      "insuranceOffered": true,
      "optionType": "string",
      "packageHandlingCost": {
        "currency": "string",
        "value": "string"
      },
      "rateTableId": "string",
      "shippingDiscountProfileId": "string",
      "shippingPromotionOffered": true,
      "shippingServices": [
        {
          "additionalShippingCost": {
            "currency": "string",
            "value": "string"
          },
          "buyerResponsibleForPickup": true,
          "buyerResponsibleForShipping": true,
          "cashOnDeliveryFee": {
            "currency": "string",
            "value": "string"
          },
          "freeShipping": true,
          "shipToLocations": {
            "regionExcluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ],
            "regionIncluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ]
          },
          "shippingCarrierCode": "string",
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingServiceCode": "string",
          "sortOrder": 0,
          "surcharge": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  ],
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

<h3 id="createfulfillmentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[SetFulfillmentPolicyResponse](#schemasetfulfillmentpolicyresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

## getFulfillmentPolicyByName

<a id="opIdgetFulfillmentPolicyByName"></a>

> Code samples

```bash
curl 'https://api.ebay.com/fulfillment_policy/get_by_policy_name?marketplace_id=string&name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /fulfillment_policy/get_by_policy_name`

This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

<h3 id="getfulfillmentpolicybyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|query|string|true|This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum|
|name|query|string|true|This query parameter specifies the seller-defined name of the fulfillment policy you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "freightShipping": true,
  "fulfillmentPolicyId": "string",
  "globalShipping": true,
  "handlingTime": {
    "unit": "string",
    "value": 0
  },
  "localPickup": true,
  "marketplaceId": "string",
  "name": "string",
  "pickupDropOff": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingOptions": [
    {
      "costType": "string",
      "insuranceFee": {
        "currency": "string",
        "value": "string"
      },
      "insuranceOffered": true,
      "optionType": "string",
      "packageHandlingCost": {
        "currency": "string",
        "value": "string"
      },
      "rateTableId": "string",
      "shippingDiscountProfileId": "string",
      "shippingPromotionOffered": true,
      "shippingServices": [
        {
          "additionalShippingCost": {
            "currency": "string",
            "value": "string"
          },
          "buyerResponsibleForPickup": true,
          "buyerResponsibleForShipping": true,
          "cashOnDeliveryFee": {
            "currency": "string",
            "value": "string"
          },
          "freeShipping": true,
          "shipToLocations": {
            "regionExcluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ],
            "regionIncluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ]
          },
          "shippingCarrierCode": "string",
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingServiceCode": "string",
          "sortOrder": 0,
          "surcharge": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  ]
}
```

<h3 id="getfulfillmentpolicybyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FulfillmentPolicy](#schemafulfillmentpolicy)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## getFulfillmentPolicy

<a id="opIdgetFulfillmentPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/fulfillment_policy/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /fulfillment_policy/{fulfillmentPolicyId}`

This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.

<h3 id="getfulfillmentpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fulfillmentPolicyId|path|string|true|This path parameter specifies the ID of the fulfillment policy you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "freightShipping": true,
  "fulfillmentPolicyId": "string",
  "globalShipping": true,
  "handlingTime": {
    "unit": "string",
    "value": 0
  },
  "localPickup": true,
  "marketplaceId": "string",
  "name": "string",
  "pickupDropOff": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingOptions": [
    {
      "costType": "string",
      "insuranceFee": {
        "currency": "string",
        "value": "string"
      },
      "insuranceOffered": true,
      "optionType": "string",
      "packageHandlingCost": {
        "currency": "string",
        "value": "string"
      },
      "rateTableId": "string",
      "shippingDiscountProfileId": "string",
      "shippingPromotionOffered": true,
      "shippingServices": [
        {
          "additionalShippingCost": {
            "currency": "string",
            "value": "string"
          },
          "buyerResponsibleForPickup": true,
          "buyerResponsibleForShipping": true,
          "cashOnDeliveryFee": {
            "currency": "string",
            "value": "string"
          },
          "freeShipping": true,
          "shipToLocations": {
            "regionExcluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ],
            "regionIncluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ]
          },
          "shippingCarrierCode": "string",
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingServiceCode": "string",
          "sortOrder": 0,
          "surcharge": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  ]
}
```

<h3 id="getfulfillmentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FulfillmentPolicy](#schemafulfillmentpolicy)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## updateFulfillmentPolicy

<a id="opIdupdateFulfillmentPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/fulfillment_policy/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryTypes": [
      {
        "default": true,
        "name": "string"
      }
    ],
    "description": "string",
    "freightShipping": true,
    "globalShipping": true,
    "handlingTime": {
      "unit": "string",
      "value": 0
    },
    "localPickup": true,
    "marketplaceId": "string",
    "name": "string",
    "pickupDropOff": true,
    "shipToLocations": {
      "regionExcluded": [
        {
          "regionName": "string",
          "regionType": "string"
        }
      ],
      "regionIncluded": [
        {
          "regionName": "string",
          "regionType": "string"
        }
      ]
    },
    "shippingOptions": [
      {
        "costType": "string",
        "insuranceFee": {
          "currency": "string",
          "value": "string"
        },
        "insuranceOffered": true,
        "optionType": "string",
        "packageHandlingCost": {
          "currency": "string",
          "value": "string"
        },
        "rateTableId": "string",
        "shippingDiscountProfileId": "string",
        "shippingPromotionOffered": true,
        "shippingServices": [
          {
            "additionalShippingCost": {
              "currency": "string",
              "value": "string"
            },
            "buyerResponsibleForPickup": true,
            "buyerResponsibleForShipping": true,
            "cashOnDeliveryFee": {
              "currency": "string",
              "value": "string"
            },
            "freeShipping": true,
            "shipToLocations": {
              "regionExcluded": [
                {
                  "regionName": "string",
                  "regionType": "string"
                }
              ],
              "regionIncluded": [
                {
                  "regionName": "string",
                  "regionType": "string"
                }
              ]
            },
            "shippingCarrierCode": "string",
            "shippingCost": {
              "currency": "string",
              "value": "string"
            },
            "shippingServiceCode": "string",
            "sortOrder": 0,
            "surcharge": {
              "currency": "string",
              "value": "string"
            }
          }
        ]
      }
    ]
  }'
```

`PUT /fulfillment_policy/{fulfillmentPolicyId}`

This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

> Body parameter

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "freightShipping": true,
  "globalShipping": true,
  "handlingTime": {
    "unit": "string",
    "value": 0
  },
  "localPickup": true,
  "marketplaceId": "string",
  "name": "string",
  "pickupDropOff": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingOptions": [
    {
      "costType": "string",
      "insuranceFee": {
        "currency": "string",
        "value": "string"
      },
      "insuranceOffered": true,
      "optionType": "string",
      "packageHandlingCost": {
        "currency": "string",
        "value": "string"
      },
      "rateTableId": "string",
      "shippingDiscountProfileId": "string",
      "shippingPromotionOffered": true,
      "shippingServices": [
        {
          "additionalShippingCost": {
            "currency": "string",
            "value": "string"
          },
          "buyerResponsibleForPickup": true,
          "buyerResponsibleForShipping": true,
          "cashOnDeliveryFee": {
            "currency": "string",
            "value": "string"
          },
          "freeShipping": true,
          "shipToLocations": {
            "regionExcluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ],
            "regionIncluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ]
          },
          "shippingCarrierCode": "string",
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingServiceCode": "string",
          "sortOrder": 0,
          "surcharge": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  ]
}
```

<h3 id="updatefulfillmentpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fulfillmentPolicyId|path|string|true|This path parameter specifies the ID of the fulfillment policy you want to update.|
|body|body|[FulfillmentPolicyRequest](#schemafulfillmentpolicyrequest)|true|Fulfillment policy request|
|» categoryTypes|body|[[CategoryType](#schemacategorytype)]|false|This container is used to specify whether the fulfillment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|» description|body|string|false|A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|» freightShipping|body|boolean|false|This field is included and set to <code>true</code> if freight shipping is available for the item. Freight shipping can be used for large items over 150 lbs.<br/><br/><b>Default</b>: false|
|» globalShipping|body|boolean|false|This field is included and set to <code>true</code> if the seller wants to use the Global Shipping Program for international shipments. See the <a href="https://pages.ebay.com/help/sell/shipping-globally.html ">Global Shipping Program</a> help topic for more details and requirements on the Global Shipping Program.<br/><br/>It is possible for a seller to use a combination of the Global Shipping Program and other international shipping services. <br/><br/>If this value is set to <code>false</code> or if the field is omitted, the seller is responsible for manually specifying individual international shipping services (if the seller ships internationally)., as described in <a href="https://developer.ebay.com/api-docs/sell/static/seller-accounts/ht_shipping-worldwide.html ">Setting up worldwide shipping</a>. <br/><br/>Sellers can opt in or out of the Global Shipping Program through the Shipping preferences in My eBay.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span><p><b>Default</b>: false</p>|
|» handlingTime|body|[TimeDuration](#schematimeduration)|false|This container is used to specify the maximum number of business days the seller commits to for preparing and shipping an order after receiving a cleared payment for the order. This time does not include the transit time it takes the shipping carrier to deliver the order.<br /><br />Valid values can vary by site and by category. To obtain the supported values for a site, call <b>GeteBayDetails</b> in the Trading API with <b>DetailName</b> set to <code>DispatchTimeMaxDetails</code>, then inspect the <b>DispatchTimeMaxDetails</b> container in the response for the time values supported by the site (typical handling times are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>10</code>, <code>15</code>, and <code>20</code>, but these can vary by site and may change over time.) <p>This field is conditionally required when the seller is offering one or more domestic or international shipping options, but it is not applicable when the item is only available through local pickup (<code>"localPickup": "true"</code>), or if it will be shipped through a freight shipping service (<code>"freightShipping": "true"</code>). </p> <span class="tablenote"><b>Note: </b> Top-Rated sellers must offer same-day or one-day handling for a listing in order for that listing to receive a Top Rated Plus seal on the View Item or Search Results pages. To offer zero-day or one-day handling, set field to '0' or '1', respectively.</span>|
|» localPickup|body|boolean|false|This field should be included and set to <code>true</code> if local pickup is one of the fulfillment options available to the buyer. It is possible for the seller to make local pickup and some shipping service options available to the buyer.<br/><br/>With local pickup, the buyer and seller make arrangements for pickup time and location.<br/><br/><b>Default</b>: <code>false</code>|
|» marketplaceId|body|string|false|The ID of the eBay marketplace to which this fulfillment policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64|
|» pickupDropOff|body|boolean|false|This field should be included and set to <code>true</code> if the seller offers the "Click and Collect" feature for an item. <p>To enable "Click and Collect" on a listing, a seller must be eligible for Click and Collect. Currently, Click and Collect is available to only large retail merchants selling in the eBay AU and UK marketplaces.</p>  <p>In addition to setting this field to <code>true</code>, the merchant must also do the following to enable the "Click and Collect" option on a listing: <ul><li>Have inventory for the product at one or more physical stores tied to the merchant's account. <p>Sellers can use the <b>createInventoryLocaion</b> method in the Inventory API to associate physical stores to their account and they can then can add inventory to specific store locations.</p></li><li>Set an immediate payment requirement on the item. The immediate payment feature requires the seller to: <ul><li>Set the <b>immediatePay</b> flag in the payment policy to 'true'.</li><li>Have a valid store location with a complete street address.</li></ul></li></ul><p>When a merchant successfully lists an item with Click and Collect, prospective buyers within a reasonable distance from one of the merchant's stores (that has stock available) will see the "Available for Click and Collect" option on the listing, along with information on the closest store that has the item.</p><b>Default</b>: false|
|» shipToLocations|body|[RegionSet](#schemaregionset)|false|This container consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which are used to define the geographical regions/countries/states or provinces/domestic regions that a seller does and does not ship to for the associated fulfillment policy. Note that this container can be considered the master list of where the seller ships and does not ship, but there is also a <b>shipToLocations</b> container that can be set at the shipping service option level. <br/><br/>To retrieve the valid geographical shipping region values, two-digit country values, or special domestic regions for an eBay marketplace, call <b>GeteBayDetails</b> with <b>DetailName</b> value set to <code>ExcludeShippingLocationDetails</code>, then review the <b>ExcludeShippingLocationDetails</b> containers in the response for the strings you use in both the <b>regionIncluded.regionName</b> and in the <b>regionExcluded.regionName</b> fields. <br /><br />For valid geographical region names, look for the <code>ExcludeShippingLocationDetails</code> containers in the <b>GeteBayDetails</b> response where the <b>Region</b> value is <code>Worldwide</code>, and the valid values will be shown in the corresponding <b>Location</b> fields. <br /><br />For valid two-digit country codes, look for <code>ExcludeShippingLocationDetails</code> in the <b>GeteBayDetails</b> response where the <b>Region</b> value is one of the defined geographical regions, and the valid values will be shown in the corresponding <b>Location</b> fields. Alternatively, you can find the two-digit country code values in the <a href="/api-docs/sell/account/types/ba:CountryCodeEnum">CountryCodeEnum</a> type definition. For valid domestic region values, look for <code>ExcludeShippingLocationDetails</code> in the <b>GeteBayDetails</b> response where the <b>Region</b> value is either <code>Domestic Location</code> or <code>Additional Locations</code>, and the valid values will be shown in the corresponding <b>Location</b> fields. <br /><br />The <code>STATE_OR_PROVINCE</code> region type is only applicable to the US and Canada, and valid values for US states are the same <a href="https://about.usps.com/who-we-are/postal-history/state-abbreviations.htm ">two-digit abbreviations</a> used by the United States Postal Service, and valid values for Canadian provinces and territories are the same <a href="https://www.canadapost-postescanada.ca/cpc/en/support/articles/addressing-guidelines/symbols-and-abbreviations.page ">two-digit abbreviations</a> used by the Canada Post.|
|» shippingOptions|body|[[ShippingOption](#schemashippingoption)]|false|This array is used to provide detailed information on the domestic and international shipping options available for the policy. <br /><br />A separate <b>ShippingOption</b> object is required for domestic shipping service options and for international shipping service options (if the seller ships to international locations). <ul><li>The <b>optionType</b> field is used to indicate whether the <b>ShippingOption</b> object applies to domestic or international shipping, and the <b>costType</b> field is used to indicate whether flat-rate shipping or calculated shipping will be used.</li> <li>The <b>rateTableId</b> field can be used to associate a defined shipping rate table to the policy, and the <b>packageHandlingCost</b> container can be used to set a handling charge for the policy.</li></ul> <p>A separate <b>ShippingServices</b> object will be used to specify cost and other details for every available domestic and international shipping service option. </p>|

> Example responses

> 200 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "freightShipping": true,
  "fulfillmentPolicyId": "string",
  "globalShipping": true,
  "handlingTime": {
    "unit": "string",
    "value": 0
  },
  "localPickup": true,
  "marketplaceId": "string",
  "name": "string",
  "pickupDropOff": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingOptions": [
    {
      "costType": "string",
      "insuranceFee": {
        "currency": "string",
        "value": "string"
      },
      "insuranceOffered": true,
      "optionType": "string",
      "packageHandlingCost": {
        "currency": "string",
        "value": "string"
      },
      "rateTableId": "string",
      "shippingDiscountProfileId": "string",
      "shippingPromotionOffered": true,
      "shippingServices": [
        {
          "additionalShippingCost": {
            "currency": "string",
            "value": "string"
          },
          "buyerResponsibleForPickup": true,
          "buyerResponsibleForShipping": true,
          "cashOnDeliveryFee": {
            "currency": "string",
            "value": "string"
          },
          "freeShipping": true,
          "shipToLocations": {
            "regionExcluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ],
            "regionIncluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ]
          },
          "shippingCarrierCode": "string",
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingServiceCode": "string",
          "sortOrder": 0,
          "surcharge": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  ],
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

<h3 id="updatefulfillmentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SetFulfillmentPolicyResponse](#schemasetfulfillmentpolicyresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

## deleteFulfillmentPolicy

<a id="opIddeleteFulfillmentPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/fulfillment_policy/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /fulfillment_policy/{fulfillmentPolicyId}`

This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.

<h3 id="deletefulfillmentpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fulfillmentPolicyId|path|string|true|This path parameter specifies the ID of the fulfillment policy to delete.|

<h3 id="deletefulfillmentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

<h1 id="account-api-kyc">kyc</h1>

## getKYC

<a id="opIdgetKYC"></a>

> Code samples

```bash
curl https://api.ebay.com/kyc \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /kyc`

<span class="tablenote"><b>Note:</b>This method was originally created to see which onboarding requirements were still pending for sellers being onboarded for eBay managed payments, but now that all seller accounts are onboarded globally, this method should now just returne an empty payload with a <code>204 No Content</code> HTTP status code. </span>

> Example responses

> 200 Response

```json
{
  "kycChecks": [
    {
      "alert": "string",
      "dataRequired": "string",
      "detailMessage": "string",
      "dueDate": "string",
      "remedyUrl": "string"
    }
  ]
}
```

<h3 id="getkyc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[KycResponse](#schemakycresponse)|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

<h1 id="account-api-paymentpolicy">payment_policy</h1>

## getPaymentPolicies

<a id="opIdgetPaymentPolicies"></a>

> Code samples

```bash
curl 'https://api.ebay.com/payment_policy?marketplace_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_policy`

This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

<h3 id="getpaymentpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|query|string|true|This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "paymentPolicies": [
    {
      "categoryTypes": [
        {
          "default": true,
          "name": "string"
        }
      ],
      "deposit": {
        "amount": {
          "currency": "string",
          "value": "string"
        },
        "dueIn": {
          "unit": "string",
          "value": 0
        },
        "paymentMethods": [
          {
            "brands": [
              "string"
            ],
            "paymentMethodType": "string",
            "recipientAccountReference": {
              "referenceId": "string",
              "referenceType": "string"
            }
          }
        ]
      },
      "description": "string",
      "fullPaymentDueIn": {
        "unit": "string",
        "value": 0
      },
      "immediatePay": true,
      "marketplaceId": "string",
      "name": "string",
      "paymentInstructions": "string",
      "paymentMethods": [
        {
          "brands": [
            "string"
          ],
          "paymentMethodType": "string",
          "recipientAccountReference": {
            "referenceId": "string",
            "referenceType": "string"
          }
        }
      ],
      "paymentPolicyId": "string"
    }
  ],
  "prev": "string",
  "total": 0
}
```

<h3 id="getpaymentpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PaymentPolicyResponse](#schemapaymentpolicyresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## createPaymentPolicy

<a id="opIdcreatePaymentPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_policy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryTypes": [
      {
        "default": true,
        "name": "string"
      }
    ],
    "deposit": {
      "amount": {
        "currency": "string",
        "value": "string"
      },
      "dueIn": {
        "unit": "string",
        "value": 0
      },
      "paymentMethods": [
        {
          "brands": [
            "string"
          ],
          "paymentMethodType": "string",
          "recipientAccountReference": {
            "referenceId": "string",
            "referenceType": "string"
          }
        }
      ]
    },
    "description": "string",
    "fullPaymentDueIn": {
      "unit": "string",
      "value": 0
    },
    "immediatePay": true,
    "marketplaceId": "string",
    "name": "string",
    "paymentInstructions": "string",
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  }'
```

`POST /payment_policy`

This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>

> Body parameter

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "deposit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "dueIn": {
      "unit": "string",
      "value": 0
    },
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  },
  "description": "string",
  "fullPaymentDueIn": {
    "unit": "string",
    "value": 0
  },
  "immediatePay": true,
  "marketplaceId": "string",
  "name": "string",
  "paymentInstructions": "string",
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ]
}
```

<h3 id="createpaymentpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentPolicyRequest](#schemapaymentpolicyrequest)|true|Payment policy request|
|» categoryTypes|body|[[CategoryType](#schemacategorytype)]|false|This container is used to specify whether the payment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|» deposit|body|[Deposit](#schemadeposit)|false|This container is used if the seller wants to require an initial deposit on a motor vehicle listing. In this container, the seller sets the deposit amount and the due date for the deposit.<br /><br />Because eBay controls all electronic payment methods, sellers do not need to specify a payment method and the <b>deposit.paymentMethods</b> array is not needed.<p class="tablenote"><b>Note: </b>The 'due date' specified in the <b>deposit</b> container will be overridden if the payment business policy requires immediate payment (in this case, for the deposit), and the buyer commits to purchase the motor vehicle through a fixed-price listing or through the 'Buy it Now' option of an auction listing.</p>|
|» description|body|string|false|A seller-defined description of the payment business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|» fullPaymentDueIn|body|[TimeDuration](#schematimeduration)|false|This container is used to specify the number of days that a buyer has to make their full payment to the seller and close the remaining balance on a motor vehicle transaction. This container must be specified for motor vehicles listings. <br/><br/>The period starts when the buyer commits to buy. The valid values, as specified with <b>TimeDuration</b>, are:<ul><li><code>3 DAYS</code></li><li><code>7 DAYS</code> (the default)</li><li><code>10 DAYS</code></li><li><code>14 DAYS</code></li></ul>In order for a buyer to make a full payment on a motor vehicle, at least one of the following <b>paymentMethods</b> values must be specified for the corresponding payment business policy: <ul> <li><code>CASH_ON_PICKUP</code></li> <li><code>CASHIER_CHECK</code></li> <li><code>MONEY_ORDER</code></li> <li><code>PERSONAL_CHECK</code></li></ul><b>Default:</b> <code>7 DAYS</code>|
|» immediatePay|body|boolean|false|This field should be included and set to <code>true</code> if the seller wants to require immediate payment from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer is using the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br /><b>Default:</b> False|
|» marketplaceId|body|string|false|The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64|
|» paymentInstructions|body|string|false|<p class="tablenote"><b>Note:</b> DO NOT USE THIS FIELD. Payment instructions are no longer supported by payment business policies.</p>A free-form string field that allows sellers to add detailed payment instructions to their listings.|
|» paymentMethods|body|[[PaymentMethod](#schemapaymentmethod)]|false|<p class="tablenote"><b>Note:</b> This field applies only when the seller needs to specify one or more offline payment methods. eBay now manages the electronic payment options available to buyers to pay for the item.</p>This array is used to specify one or more offline payment methods that will be accepted for payment that occurs off of eBay's platform.|

> Example responses

> 201 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "deposit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "dueIn": {
      "unit": "string",
      "value": 0
    },
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  },
  "description": "string",
  "fullPaymentDueIn": {
    "unit": "string",
    "value": 0
  },
  "immediatePay": true,
  "marketplaceId": "string",
  "name": "string",
  "paymentInstructions": "string",
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ],
  "paymentPolicyId": "string",
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

<h3 id="createpaymentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[SetPaymentPolicyResponse](#schemasetpaymentpolicyresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

## getPaymentPolicyByName

<a id="opIdgetPaymentPolicyByName"></a>

> Code samples

```bash
curl 'https://api.ebay.com/payment_policy/get_by_policy_name?marketplace_id=string&name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_policy/get_by_policy_name`

This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

<h3 id="getpaymentpolicybyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|query|string|true|This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum|
|name|query|string|true|This query parameter specifies the seller-defined name of the payment policy you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "deposit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "dueIn": {
      "unit": "string",
      "value": 0
    },
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  },
  "description": "string",
  "fullPaymentDueIn": {
    "unit": "string",
    "value": 0
  },
  "immediatePay": true,
  "marketplaceId": "string",
  "name": "string",
  "paymentInstructions": "string",
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ],
  "paymentPolicyId": "string"
}
```

<h3 id="getpaymentpolicybyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PaymentPolicy](#schemapaymentpolicy)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## getPaymentPolicy

<a id="opIdgetPaymentPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_policy/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_policy/{payment_policy_id}`

This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.

<h3 id="getpaymentpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_policy_id|path|string|true|This path parameter specifies the ID of the payment policy you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "deposit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "dueIn": {
      "unit": "string",
      "value": 0
    },
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  },
  "description": "string",
  "fullPaymentDueIn": {
    "unit": "string",
    "value": 0
  },
  "immediatePay": true,
  "marketplaceId": "string",
  "name": "string",
  "paymentInstructions": "string",
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ],
  "paymentPolicyId": "string"
}
```

<h3 id="getpaymentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PaymentPolicy](#schemapaymentpolicy)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## updatePaymentPolicy

<a id="opIdupdatePaymentPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_policy/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryTypes": [
      {
        "default": true,
        "name": "string"
      }
    ],
    "deposit": {
      "amount": {
        "currency": "string",
        "value": "string"
      },
      "dueIn": {
        "unit": "string",
        "value": 0
      },
      "paymentMethods": [
        {
          "brands": [
            "string"
          ],
          "paymentMethodType": "string",
          "recipientAccountReference": {
            "referenceId": "string",
            "referenceType": "string"
          }
        }
      ]
    },
    "description": "string",
    "fullPaymentDueIn": {
      "unit": "string",
      "value": 0
    },
    "immediatePay": true,
    "marketplaceId": "string",
    "name": "string",
    "paymentInstructions": "string",
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  }'
```

`PUT /payment_policy/{payment_policy_id}`

This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

> Body parameter

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "deposit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "dueIn": {
      "unit": "string",
      "value": 0
    },
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  },
  "description": "string",
  "fullPaymentDueIn": {
    "unit": "string",
    "value": 0
  },
  "immediatePay": true,
  "marketplaceId": "string",
  "name": "string",
  "paymentInstructions": "string",
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ]
}
```

<h3 id="updatepaymentpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_policy_id|path|string|true|This path parameter specifies the ID of the payment policy you want to update.|
|body|body|[PaymentPolicyRequest](#schemapaymentpolicyrequest)|true|Payment policy request|
|» categoryTypes|body|[[CategoryType](#schemacategorytype)]|false|This container is used to specify whether the payment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|» deposit|body|[Deposit](#schemadeposit)|false|This container is used if the seller wants to require an initial deposit on a motor vehicle listing. In this container, the seller sets the deposit amount and the due date for the deposit.<br /><br />Because eBay controls all electronic payment methods, sellers do not need to specify a payment method and the <b>deposit.paymentMethods</b> array is not needed.<p class="tablenote"><b>Note: </b>The 'due date' specified in the <b>deposit</b> container will be overridden if the payment business policy requires immediate payment (in this case, for the deposit), and the buyer commits to purchase the motor vehicle through a fixed-price listing or through the 'Buy it Now' option of an auction listing.</p>|
|» description|body|string|false|A seller-defined description of the payment business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|» fullPaymentDueIn|body|[TimeDuration](#schematimeduration)|false|This container is used to specify the number of days that a buyer has to make their full payment to the seller and close the remaining balance on a motor vehicle transaction. This container must be specified for motor vehicles listings. <br/><br/>The period starts when the buyer commits to buy. The valid values, as specified with <b>TimeDuration</b>, are:<ul><li><code>3 DAYS</code></li><li><code>7 DAYS</code> (the default)</li><li><code>10 DAYS</code></li><li><code>14 DAYS</code></li></ul>In order for a buyer to make a full payment on a motor vehicle, at least one of the following <b>paymentMethods</b> values must be specified for the corresponding payment business policy: <ul> <li><code>CASH_ON_PICKUP</code></li> <li><code>CASHIER_CHECK</code></li> <li><code>MONEY_ORDER</code></li> <li><code>PERSONAL_CHECK</code></li></ul><b>Default:</b> <code>7 DAYS</code>|
|» immediatePay|body|boolean|false|This field should be included and set to <code>true</code> if the seller wants to require immediate payment from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer is using the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br /><b>Default:</b> False|
|» marketplaceId|body|string|false|The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64|
|» paymentInstructions|body|string|false|<p class="tablenote"><b>Note:</b> DO NOT USE THIS FIELD. Payment instructions are no longer supported by payment business policies.</p>A free-form string field that allows sellers to add detailed payment instructions to their listings.|
|» paymentMethods|body|[[PaymentMethod](#schemapaymentmethod)]|false|<p class="tablenote"><b>Note:</b> This field applies only when the seller needs to specify one or more offline payment methods. eBay now manages the electronic payment options available to buyers to pay for the item.</p>This array is used to specify one or more offline payment methods that will be accepted for payment that occurs off of eBay's platform.|

> Example responses

> 200 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "deposit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "dueIn": {
      "unit": "string",
      "value": 0
    },
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  },
  "description": "string",
  "fullPaymentDueIn": {
    "unit": "string",
    "value": 0
  },
  "immediatePay": true,
  "marketplaceId": "string",
  "name": "string",
  "paymentInstructions": "string",
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ],
  "paymentPolicyId": "string",
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

<h3 id="updatepaymentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SetPaymentPolicyResponse](#schemasetpaymentpolicyresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

## deletePaymentPolicy

<a id="opIddeletePaymentPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_policy/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /payment_policy/{payment_policy_id}`

This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter. 

<h3 id="deletepaymentpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_policy_id|path|string|true|This path parameter specifies the ID of the payment policy you want to delete.|

<h3 id="deletepaymentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

<h1 id="account-api-paymentsprogram">payments_program</h1>

## getPaymentsProgram

<a id="opIdgetPaymentsProgram"></a>

> Code samples

```bash
curl https://api.ebay.com/payments_program/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payments_program/{marketplace_id}/{payments_program_type}`

<span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method returns whether or not the user is opted-in to the specified payments program. Sellers opt-in to payments programs by marketplace and you use the <b>marketplace_id</b> path parameter to specify the marketplace of the status flag you want returned.

<h3 id="getpaymentsprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|path|string|true|This path parameter specifies the eBay marketplace of the payments program for which you want to retrieve the seller's status.|
|payments_program_type|path|string|true|This path parameter specifies the payments program whose status is returned by the call.|

> Example responses

> 200 Response

```json
{
  "marketplaceId": "string",
  "paymentsProgramType": "string",
  "status": "string",
  "wasPreviouslyOptedIn": true
}
```

<h3 id="getpaymentsprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PaymentsProgramResponse](#schemapaymentsprogramresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

<h1 id="account-api-onboarding">onboarding</h1>

## getPaymentsProgramOnboarding

<a id="opIdgetPaymentsProgramOnboarding"></a>

> Code samples

```bash
curl https://api.ebay.com/payments_program/string/string/onboarding \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payments_program/{marketplace_id}/{payments_program_type}/onboarding`

<span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method retrieves a seller's onboarding status for a payments program for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned.

<h3 id="getpaymentsprogramonboarding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|path|string|true|The eBay marketplace ID associated with the onboarding status to retrieve.|
|payments_program_type|path|string|true|The type of payments program whose status is returned by the method.|

> Example responses

> 200 Response

```json
{
  "onboardingStatus": "string",
  "steps": [
    {
      "name": "string",
      "status": "string",
      "webUrl": "string"
    }
  ]
}
```

<h3 id="getpaymentsprogramonboarding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PaymentsProgramOnboardingResponse](#schemapaymentsprogramonboardingresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

<h1 id="account-api-privilege">privilege</h1>

## getPrivileges

<a id="opIdgetPrivileges"></a>

> Code samples

```bash
curl https://api.ebay.com/privilege \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /privilege`

This method retrieves the seller's current set of privileges, including whether or not the seller's eBay registration has been completed, as well as the details of their site-wide <b>sellingLimt</b> (the amount and quantity they can sell on a given day).

> Example responses

> 200 Response

```json
{
  "sellerRegistrationCompleted": true,
  "sellingLimit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "quantity": 0
  }
}
```

<h3 id="getprivileges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SellingPrivileges](#schemasellingprivileges)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

<h1 id="account-api-program">program</h1>

## getOptedInPrograms

<a id="opIdgetOptedInPrograms"></a>

> Code samples

```bash
curl https://api.ebay.com/program/get_opted_in_programs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /program/get_opted_in_programs`

This method gets a list of the seller programs that the seller has opted-in to.

> Example responses

> 200 Response

```json
{
  "programs": [
    {
      "programType": "string"
    }
  ]
}
```

<h3 id="getoptedinprograms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Programs](#schemaprograms)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## optInToProgram

<a id="opIdoptInToProgram"></a>

> Code samples

```bash
curl https://api.ebay.com/program/opt_in \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "programType": "string"
  }'
```

`POST /program/opt_in`

This method opts the seller in to an eBay seller program. Refer to the <a href="/api-docs/sell/account/overview.html#opt-in" target="_blank">Account API overview</a> for information about available eBay seller programs.<br /><br /><span class="tablenote"><b>Note:</b> It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the <a href="/api-docs/sell/account/resources/program/methods/getOptedInPrograms" target="_blank">getOptedInPrograms</a> call to check the status of your request after the processing period has passed.</span>

> Body parameter

```json
{
  "programType": "string"
}
```

<h3 id="optintoprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Program](#schemaprogram)|true|Program being opted-in to.|
|» programType|body|string|false|A seller program in to which a seller can opt-in. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ProgramTypeEnum'>eBay API documentation</a>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optintoprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

## optOutOfProgram

<a id="opIdoptOutOfProgram"></a>

> Code samples

```bash
curl https://api.ebay.com/program/opt_out \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "programType": "string"
  }'
```

`POST /program/opt_out`

This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the <b>getOptedInPrograms</b> call.

> Body parameter

```json
{
  "programType": "string"
}
```

<h3 id="optoutofprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Program](#schemaprogram)|true|Program being opted-out of.|
|» programType|body|string|false|A seller program in to which a seller can opt-in. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ProgramTypeEnum'>eBay API documentation</a>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optoutofprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

<h1 id="account-api-ratetable">rate_table</h1>

## getRateTables

<a id="opIdgetRateTables"></a>

> Code samples

```bash
curl https://api.ebay.com/rate_table \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rate_table`

This method retrieves a seller's <i>shipping rate tables</i> for the country specified in the <b>country_code</b> query parameter. If you call this method without specifying a country code, the call returns all of the seller's shipping rate tables.  <br/><br/>The method's response includes a <b>rateTableId</b> for each table defined by the seller. This <b>rateTableId</b> value is used in add/revise item call or in create/update fulfillment business policy call to specify the shipping rate table to use for that policy's domestic or international shipping options. <br/><br/>This call currently supports getting rate tables related to the following marketplaces:<ul><li><code>EBAY_AU</code></li> <li><code>EBAY_CA</code></li> <li><code>EBAY_DE</code></li> <li><code>EBAY_ES</code></li> <li><code>EBAY_FR</code></li> <li><code>EBAY_GB</code></li> <li><code>EBAY_IT</code></li> <li><code>EBAY_US</code></li></ul>  <span class="tablenote"><b>Note:</b> Rate tables created with the Trading API might not have been assigned a <b>rateTableId</b> at the time of their creation. This method can assign and return <b>rateTableId</b> values for rate tables with missing IDs if you make a request using the <b>country_code</b> where the seller has defined rate tables.</span>  <br/><br/>Sellers can define up to 40 shipping rate tables for their account, which lets them set up different rate tables for each of the marketplaces they sell into. Go to <a href="https://www.ebay.com/ship/rt ">Shipping rate tables</a> in  <b>My eBay</b> to create and update rate tables.

<h3 id="getratetables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country_code|query|string|false|This query parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code of country for which you want shipping rate table information. If you do not specify a country code, the request returns all of the seller's defined shipping rate tables for all eBay marketplaces. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum|

> Example responses

> 200 Response

```json
{
  "rateTables": [
    {
      "countryCode": "string",
      "locality": "string",
      "name": "string",
      "rateTableId": "string"
    }
  ]
}
```

<h3 id="getratetables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RateTableResponse](#schemaratetableresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

<h1 id="account-api-returnpolicy">return_policy</h1>

## getReturnPolicies

<a id="opIdgetReturnPolicies"></a>

> Code samples

```bash
curl 'https://api.ebay.com/return_policy?marketplace_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /return_policy`

This method retrieves all the return policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

<h3 id="getreturnpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|query|string|true|This query parameter specifies the ID of the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "returnPolicies": [
    {
      "categoryTypes": [
        {
          "default": true,
          "name": "string"
        }
      ],
      "description": "string",
      "extendedHolidayReturnsOffered": true,
      "internationalOverride": {
        "returnMethod": "string",
        "returnPeriod": {
          "unit": "string",
          "value": 0
        },
        "returnShippingCostPayer": "string",
        "returnsAccepted": true
      },
      "marketplaceId": "string",
      "name": "string",
      "refundMethod": "string",
      "restockingFeePercentage": "string",
      "returnInstructions": "string",
      "returnMethod": "string",
      "returnPeriod": {
        "unit": "string",
        "value": 0
      },
      "returnPolicyId": "string",
      "returnShippingCostPayer": "string",
      "returnsAccepted": true
    }
  ],
  "total": 0
}
```

<h3 id="getreturnpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReturnPolicyResponse](#schemareturnpolicyresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## createReturnPolicy

<a id="opIdcreateReturnPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/return_policy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryTypes": [
      {
        "default": true,
        "name": "string"
      }
    ],
    "description": "string",
    "extendedHolidayReturnsOffered": true,
    "internationalOverride": {
      "returnMethod": "string",
      "returnPeriod": {
        "unit": "string",
        "value": 0
      },
      "returnShippingCostPayer": "string",
      "returnsAccepted": true
    },
    "marketplaceId": "string",
    "name": "string",
    "refundMethod": "string",
    "restockingFeePercentage": "string",
    "returnInstructions": "string",
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  }'
```

`POST /return_policy`

This method creates a new return policy where the policy encapsulates seller's terms for returning items.  <br/><br/>Each policy targets a specific marketplace, and you can create multiple policies for each marketplace. Return policies are not applicable to motor-vehicle listings.<br/><br/>A successful request returns the <b>getReturnPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>

> Body parameter

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "extendedHolidayReturnsOffered": true,
  "internationalOverride": {
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  },
  "marketplaceId": "string",
  "name": "string",
  "refundMethod": "string",
  "restockingFeePercentage": "string",
  "returnInstructions": "string",
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnShippingCostPayer": "string",
  "returnsAccepted": true
}
```

<h3 id="createreturnpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReturnPolicyRequest](#schemareturnpolicyrequest)|true|Return policy request|
|» categoryTypes|body|[[CategoryType](#schemacategorytype)]|false|This container indicates which category group that the return policy applies to.<br/><br/><span class="tablenote"><b>Note</b>: Return business policies are not applicable to motor vehicle listings, so the <b>categoryTypes.name</b> value must be set to <code>ALL_EXCLUDING_MOTORS_VEHICLES</code> for return business policies.</span>|
|» description|body|string|false|A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|» extendedHolidayReturnsOffered|body|boolean|false|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. Any value supplied in this field is neither read nor returned.</p> |
|» internationalOverride|body|[InternationalReturnOverrideType](#schemainternationalreturnoverridetype)|false|This container is used by the seller to specify a separate  international return policy. If a separate international return policy is not defined by a seller, all of the domestic return policy settings will also apply to international orders.|
|» marketplaceId|body|string|false|The ID of the eBay marketplace to which this return business policy applies.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64|
|» refundMethod|body|string|false|This value indicates the refund method that will be used by the seller for buyer returns.<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> If this field is not included in a return business policy, it will default to MONEY_BACK.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a>|
|» restockingFeePercentage|body|string|false|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns. If this field is included, it is ignored.</p>|
|» returnInstructions|body|string|false|This text-based field provides more details on seller-specified return instructions. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE)|
|» returnMethod|body|string|false|This field can be used if the seller is willing and able to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a>|
|» returnPeriod|body|[TimeDuration](#schematimeduration)|false|This container is used to specify the number of days that the buyer has to return an item. The return period begins when the item is marked "delivered" at the buyer's specified ship-to location.  <br/><br/>You must set the value to one that's accepted by the marketplace and category where the item is listed. Most categories support 30-day and 60-day return periods.  <br/><br/>For a definitive list of return periods for one or more categories, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>.<br/><br/>The return period is set using the <b>TimeDuration</b> type, where you set <b>unit</b> to <code>DAY</code> and <b>value</b> to either <code>30</code> or <code>60</code> (or other value, as appropriate).  <br/><br/>Note that this value cannot be modified if the listing has bids or sales, or if the listing ends within 12 hours.  <br/><br/><i>Required if </i> <b>returnsAccepted</b> is set to <code>true</code>.|
|» returnShippingCostPayer|body|string|false|This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for SNAD-related issues.  <br/><br/>This field is conditionally required if <b>returnsAccepted</b> is set to <code>true</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a>|
|» returnsAccepted|body|boolean|false|If set to <code>true</code>, the seller accepts returns. <p><span class="tablenote"><strong>Note:</strong>Top-Rated sellers must accept item returns and the <b>handlingTime</b> should be set to zero days or one day for a listing to receive a Top-Rated Plus badge on the View Item or search result pages. For more information on eBay's Top-Rated seller program, see <a href="http://pages.ebay.com/help/sell/top-rated.html ">Becoming a Top Rated Seller and qualifying for Top Rated Plus benefits</a>.</span></p>|

> Example responses

> 201 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "extendedHolidayReturnsOffered": true,
  "internationalOverride": {
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  },
  "marketplaceId": "string",
  "name": "string",
  "refundMethod": "string",
  "restockingFeePercentage": "string",
  "returnInstructions": "string",
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnPolicyId": "string",
  "returnShippingCostPayer": "string",
  "returnsAccepted": true,
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

<h3 id="createreturnpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[SetReturnPolicyResponse](#schemasetreturnpolicyresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

## getReturnPolicyByName

<a id="opIdgetReturnPolicyByName"></a>

> Code samples

```bash
curl 'https://api.ebay.com/return_policy/get_by_policy_name?marketplace_id=string&name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /return_policy/get_by_policy_name`

This method retrieves the details of a specific return policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

<h3 id="getreturnpolicybyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|query|string|true|This query parameter specifies the ID of the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum|
|name|query|string|true|This query parameter specifies the seller-defined name of the return policy you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "extendedHolidayReturnsOffered": true,
  "internationalOverride": {
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  },
  "marketplaceId": "string",
  "name": "string",
  "refundMethod": "string",
  "restockingFeePercentage": "string",
  "returnInstructions": "string",
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnPolicyId": "string",
  "returnShippingCostPayer": "string",
  "returnsAccepted": true
}
```

<h3 id="getreturnpolicybyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReturnPolicy](#schemareturnpolicy)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## getReturnPolicy

<a id="opIdgetReturnPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/return_policy/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /return_policy/{return_policy_id}`

This method retrieves the complete details of the return policy specified by the <b>returnPolicyId</b> path parameter.

<h3 id="getreturnpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_policy_id|path|string|true|This path parameter specifies the of the return policy you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "extendedHolidayReturnsOffered": true,
  "internationalOverride": {
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  },
  "marketplaceId": "string",
  "name": "string",
  "refundMethod": "string",
  "restockingFeePercentage": "string",
  "returnInstructions": "string",
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnPolicyId": "string",
  "returnShippingCostPayer": "string",
  "returnsAccepted": true
}
```

<h3 id="getreturnpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReturnPolicy](#schemareturnpolicy)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## updateReturnPolicy

<a id="opIdupdateReturnPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/return_policy/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryTypes": [
      {
        "default": true,
        "name": "string"
      }
    ],
    "description": "string",
    "extendedHolidayReturnsOffered": true,
    "internationalOverride": {
      "returnMethod": "string",
      "returnPeriod": {
        "unit": "string",
        "value": 0
      },
      "returnShippingCostPayer": "string",
      "returnsAccepted": true
    },
    "marketplaceId": "string",
    "name": "string",
    "refundMethod": "string",
    "restockingFeePercentage": "string",
    "returnInstructions": "string",
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  }'
```

`PUT /return_policy/{return_policy_id}`

This method updates an existing return policy. Specify the policy you want to update using the <b>return_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

> Body parameter

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "extendedHolidayReturnsOffered": true,
  "internationalOverride": {
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  },
  "marketplaceId": "string",
  "name": "string",
  "refundMethod": "string",
  "restockingFeePercentage": "string",
  "returnInstructions": "string",
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnShippingCostPayer": "string",
  "returnsAccepted": true
}
```

<h3 id="updatereturnpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_policy_id|path|string|true|This path parameter specifies the ID of the return policy you want to update.|
|body|body|[ReturnPolicyRequest](#schemareturnpolicyrequest)|true|Container for a return policy request.|
|» categoryTypes|body|[[CategoryType](#schemacategorytype)]|false|This container indicates which category group that the return policy applies to.<br/><br/><span class="tablenote"><b>Note</b>: Return business policies are not applicable to motor vehicle listings, so the <b>categoryTypes.name</b> value must be set to <code>ALL_EXCLUDING_MOTORS_VEHICLES</code> for return business policies.</span>|
|» description|body|string|false|A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|» extendedHolidayReturnsOffered|body|boolean|false|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. Any value supplied in this field is neither read nor returned.</p> |
|» internationalOverride|body|[InternationalReturnOverrideType](#schemainternationalreturnoverridetype)|false|This container is used by the seller to specify a separate  international return policy. If a separate international return policy is not defined by a seller, all of the domestic return policy settings will also apply to international orders.|
|» marketplaceId|body|string|false|The ID of the eBay marketplace to which this return business policy applies.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64|
|» refundMethod|body|string|false|This value indicates the refund method that will be used by the seller for buyer returns.<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> If this field is not included in a return business policy, it will default to MONEY_BACK.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a>|
|» restockingFeePercentage|body|string|false|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns. If this field is included, it is ignored.</p>|
|» returnInstructions|body|string|false|This text-based field provides more details on seller-specified return instructions. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE)|
|» returnMethod|body|string|false|This field can be used if the seller is willing and able to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a>|
|» returnPeriod|body|[TimeDuration](#schematimeduration)|false|This container is used to specify the number of days that the buyer has to return an item. The return period begins when the item is marked "delivered" at the buyer's specified ship-to location.  <br/><br/>You must set the value to one that's accepted by the marketplace and category where the item is listed. Most categories support 30-day and 60-day return periods.  <br/><br/>For a definitive list of return periods for one or more categories, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>.<br/><br/>The return period is set using the <b>TimeDuration</b> type, where you set <b>unit</b> to <code>DAY</code> and <b>value</b> to either <code>30</code> or <code>60</code> (or other value, as appropriate).  <br/><br/>Note that this value cannot be modified if the listing has bids or sales, or if the listing ends within 12 hours.  <br/><br/><i>Required if </i> <b>returnsAccepted</b> is set to <code>true</code>.|
|» returnShippingCostPayer|body|string|false|This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for SNAD-related issues.  <br/><br/>This field is conditionally required if <b>returnsAccepted</b> is set to <code>true</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a>|
|» returnsAccepted|body|boolean|false|If set to <code>true</code>, the seller accepts returns. <p><span class="tablenote"><strong>Note:</strong>Top-Rated sellers must accept item returns and the <b>handlingTime</b> should be set to zero days or one day for a listing to receive a Top-Rated Plus badge on the View Item or search result pages. For more information on eBay's Top-Rated seller program, see <a href="http://pages.ebay.com/help/sell/top-rated.html ">Becoming a Top Rated Seller and qualifying for Top Rated Plus benefits</a>.</span></p>|

> Example responses

> 200 Response

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "extendedHolidayReturnsOffered": true,
  "internationalOverride": {
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  },
  "marketplaceId": "string",
  "name": "string",
  "refundMethod": "string",
  "restockingFeePercentage": "string",
  "returnInstructions": "string",
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnPolicyId": "string",
  "returnShippingCostPayer": "string",
  "returnsAccepted": true,
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

<h3 id="updatereturnpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SetReturnPolicyResponse](#schemasetreturnpolicyresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

## deleteReturnPolicy

<a id="opIddeleteReturnPolicy"></a>

> Code samples

```bash
curl https://api.ebay.com/return_policy/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /return_policy/{return_policy_id}`

This method deletes a return policy. Supply the ID of the policy you want to delete in the <b>returnPolicyId</b> path parameter.

<h3 id="deletereturnpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_policy_id|path|string|true|This path parameter specifies the ID of the return policy you want to delete.|

<h3 id="deletereturnpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

<h1 id="account-api-salestax">sales_tax</h1>

## getSalesTaxes

<a id="opIdgetSalesTaxes"></a>

> Code samples

```bash
curl 'https://api.ebay.com/sales_tax?country_code=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales_tax`

Use this call to retrieve all sales tax table entries that the seller has defined for a specific country. All four response fields will be returned for each tax jurisdiction that matches the search criteria. <br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>

<h3 id="getsalestaxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country_code|query|string|true|This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country whose tax table you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum|

> Example responses

> 200 Response

```json
{
  "salesTaxes": [
    {
      "countryCode": "string",
      "salesTaxJurisdictionId": "string",
      "salesTaxPercentage": "string",
      "shippingAndHandlingTaxed": true
    }
  ]
}
```

<h3 id="getsalestaxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SalesTaxes](#schemasalestaxes)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## getSalesTax

<a id="opIdgetSalesTax"></a>

> Code samples

```bash
curl https://api.ebay.com/sales_tax/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales_tax/{countryCode}/{jurisdictionId}`

This call gets the current sales tax table entry for a specific tax jurisdiction. Specify the jurisdiction to retrieve using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters. All four response fields will be returned if a sales tax entry exists for the tax jurisdiction. Otherwise, the response will be returned as empty.<br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>

<h3 id="getsalestax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryCode|path|string|true|This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country whose sales tax table you want to retrieve.|
|jurisdictionId|path|string|true|This path parameter specifies the ID of the sales tax jurisdiction for the tax table entry you want to retrieve. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.|

> Example responses

> 200 Response

```json
{
  "countryCode": "string",
  "salesTaxJurisdictionId": "string",
  "salesTaxPercentage": "string",
  "shippingAndHandlingTaxed": true
}
```

<h3 id="getsalestax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SalesTax](#schemasalestax)|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
</aside>

## createOrReplaceSalesTax

<a id="opIdcreateOrReplaceSalesTax"></a>

> Code samples

```bash
curl https://api.ebay.com/sales_tax/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "salesTaxPercentage": "string",
    "shippingAndHandlingTaxed": true
  }'
```

`PUT /sales_tax/{countryCode}/{jurisdictionId}`

This method creates or updates a sales tax table entry for a jurisdiction. Specify the tax table entry you want to configure using the two path parameters: <b>countryCode</b> and <b>jurisdictionId</b>.  <br/><br/>A tax table entry for a jurisdiction is comprised of two fields: one for the jurisdiction's sales-tax rate and another that's a boolean value indicating whether or not shipping and handling are taxed in the jurisdiction.  <br/><br/>You can set up <i>tax tables</i> for countries that support different <i>tax jurisdictions</i>. Currently, only Canada, India, and the US support separate tax jurisdictions. If you sell into any of these countries, you can set up tax tables for any of the country's jurisdictions. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.  <br/><br/>For details on using this call, see <a href="/api-docs/sell/static/seller-accounts/tax-tables.html">Establishing sales-tax tables</a>. <br/><br/><span class="tablenote"><b>Important!</b> In the US, eBay now 'collects and remits' sales tax for every US state except for Missouri (and a few US territories), so sellers can no longer configure sales tax rates for any states except Missouri. With eBay 'collect and remit', eBay calculates the sales tax, collects the sales tax from the buyer, and remits the sales tax to the tax authorities at the buyer's location.</span>

> Body parameter

```json
{
  "salesTaxPercentage": "string",
  "shippingAndHandlingTaxed": true
}
```

<h3 id="createorreplacesalestax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryCode|path|string|true|This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country for which you want to create a sales tax table entry.|
|jurisdictionId|path|string|true|This path parameter specifies the ID of the tax jurisdiction for the table entry you want to create. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.|
|body|body|[SalesTaxBase](#schemasalestaxbase)|true|A container that describes the how the sales tax is calculated.|
|» salesTaxPercentage|body|string|false|This field is used to set the sales tax rate for the tax jurisdiction set in the call URI. When applicable to an order, this sales tax rate will be applied to sales price. The <b>shippingAndHandlingTaxed</b> value will indicate whether or not sales tax is also applied to shipping and handling charges<br><br>Although it is a string, a percentage value is set here, such as <code>7.75</code>.|
|» shippingAndHandlingTaxed|body|boolean|false|This field is set to <code>true</code> if the seller wishes to apply sales tax to shipping and handling charges, and not just the total sales price of the order. Otherwise, this field's value should be set to <code>false</code>.|

<h3 id="createorreplacesalestax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

## deleteSalesTax

<a id="opIddeleteSalesTax"></a>

> Code samples

```bash
curl https://api.ebay.com/sales_tax/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sales_tax/{countryCode}/{jurisdictionId}`

This call deletes a sales tax table entry for a jurisdiction. Specify the jurisdiction to delete using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters.

<h3 id="deletesalestax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryCode|path|string|true|This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country whose sales tax table entry you want to delete.|
|jurisdictionId|path|string|true|This path parameter specifies the ID of the sales tax jurisdiction whose table entry you want to delete. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.|

<h3 id="deletesalestax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account )
</aside>

<h1 id="account-api-subscription">subscription</h1>

## getSubscription

<a id="opIdgetSubscription"></a>

> Code samples

```bash
curl https://api.ebay.com/subscription \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscription`

This method retrieves a list of subscriptions associated with the seller account.

<h3 id="getsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|This field is for future use.|
|continuation_token|query|string|false|This field is for future use.|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "subscriptions": [
    {
      "marketplaceId": "string",
      "subscriptionId": "string",
      "subscriptionLevel": "string",
      "subscriptionType": "string",
      "term": {
        "unit": "string",
        "value": 0
      }
    }
  ],
  "total": 0
}
```

<h3 id="getsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubscriptionResponse](#schemasubscriptionresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.account.readonly )
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

A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The base currency applied to the <b>value</b> field to establish a monetary amount.  <br/><br/>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.<br/><br/><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CurrencyCodeEnum'>eBay API documentation</a>|
|value|string|false|none|The monetary amount in the specified <b>currency</b>.|

<h2 id="tocS_CategoryType">CategoryType</h2>
<!-- backwards compatibility -->
<a id="schemacategorytype"></a>
<a id="schema_CategoryType"></a>
<a id="tocScategorytype"></a>
<a id="tocscategorytype"></a>

```json
{
  "default": true,
  "name": "string"
}
```

The category type discerns whether the policy applies to motor vehicle listings, or to any other items except motor vehicle listings. <br/><br/>Each business policy can be associated with either or both categories ('MOTORS_VEHICLES' and 'ALL_EXCLUDING_MOTORS_VEHICLES'); however, return business policies are not applicable for motor vehicle listings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|boolean|false|none|<span class="tablenote"><strong>Note:</strong> This field has been deprecated and is no longer used.<ul><li>Do not include this field in any <b>create</b> or <b>update</b> method.</li><li>This field may be returned within the payload of a <b>get</b> method, but it can be ignored.</li></ul></span>|
|name|string|false|none|The category type to which the policy applies (motor vehicles or non-motor vehicles). <br /><br />The <code>MOTORS_VEHICLES</code> category type is not valid for return policies. eBay flows do not support the return of motor vehicles. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CategoryTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_CompactCustomPolicyResponse">CompactCustomPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompactcustompolicyresponse"></a>
<a id="schema_CompactCustomPolicyResponse"></a>
<a id="tocScompactcustompolicyresponse"></a>
<a id="tocscompactcustompolicyresponse"></a>

```json
{
  "customPolicyId": "string",
  "label": "string",
  "name": "string",
  "policyType": "string"
}
```

The response payload for requests that return a list of custom policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customPolicyId|string|false|none|The unique custom policy identifier for the policy being returned.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span>|
|label|string|false|none|Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65|
|name|string|false|none|The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br /><br /><b>Max length:</b> 65|
|policyType|string|false|none|Specifies the type of Custom Policy being returned. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_CustomPolicy">CustomPolicy</h2>
<!-- backwards compatibility -->
<a id="schemacustompolicy"></a>
<a id="schema_CustomPolicy"></a>
<a id="tocScustompolicy"></a>
<a id="tocscustompolicy"></a>

```json
{
  "customPolicyId": "string",
  "description": "string",
  "label": "string",
  "name": "string",
  "policyType": "string"
}
```

This container defines a seller's custom policy identified by policy ID for the selected eBay marketplace. A successful call returns the requested policy information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customPolicyId|string|false|none|The unique custom policy identifier for a policy.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span>|
|description|string|false|none|Details of the seller's specific policy and terms associated with the policy. Buyers access this information from the View Item page for items to which the policy has been applied.<br/><br/><b>Max length:</b> 15,000|
|label|string|false|none|Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65|
|name|string|false|none|The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65|
|policyType|string|false|none|Specifies the type of Custom Policy. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_CustomPolicyCreateRequest">CustomPolicyCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacustompolicycreaterequest"></a>
<a id="schema_CustomPolicyCreateRequest"></a>
<a id="tocScustompolicycreaterequest"></a>
<a id="tocscustompolicycreaterequest"></a>

```json
{
  "description": "string",
  "label": "string",
  "name": "string",
  "policyType": "string"
}
```

This type is used by the request payload of the createCustomPolicy method to define a new custom policy for a specific marketplace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Details of the seller's specific policy and terms for this policy.<br/><br/><b>Max length:</b> 15,000|
|label|string|false|none|Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65|
|name|string|false|none|The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65|
|policyType|string|false|none|Specifies the type of custom policy being created. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_CustomPolicyRequest">CustomPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacustompolicyrequest"></a>
<a id="schema_CustomPolicyRequest"></a>
<a id="tocScustompolicyrequest"></a>
<a id="tocscustompolicyrequest"></a>

```json
{
  "description": "string",
  "label": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Details of the seller's specific policy and terms for this policy.<br/><br/><b>Max length:</b> 15,000|
|label|string|false|none|Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65|
|name|string|false|none|The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65|

<h2 id="tocS_CustomPolicyResponse">CustomPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustompolicyresponse"></a>
<a id="schema_CustomPolicyResponse"></a>
<a id="tocScustompolicyresponse"></a>
<a id="tocscustompolicyresponse"></a>

```json
{
  "customPolicies": [
    {
      "customPolicyId": "string",
      "label": "string",
      "name": "string",
      "policyType": "string"
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customPolicies|[[CompactCustomPolicyResponse](#schemacompactcustompolicyresponse)]|false|none|This array contains the custom policies that match the input criteria.|
|href|string|false|none|<i>This field is for future use.</i>|
|limit|integer(int32)|false|none|<i>This field is for future use.</i>|
|next|string|false|none|<i>This field is for future use.</i>|
|offset|integer(int32)|false|none|<i>This field is for future use.</i>|
|prev|string|false|none|<i>This field is for future use.</i>|
|total|integer(int32)|false|none|<i>This field is for future use.</i>|

<h2 id="tocS_Deposit">Deposit</h2>
<!-- backwards compatibility -->
<a id="schemadeposit"></a>
<a id="schema_Deposit"></a>
<a id="tocSdeposit"></a>
<a id="tocsdeposit"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": "string"
  },
  "dueIn": {
    "unit": "string",
    "value": 0
  },
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ]
}
```

This type is used to specify/indicate that an initial deposit is required for a motor vehicle listing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|This value indicates the initial deposit amount required from the buyer in order to purchase a motor vehicle. This value can be as high as $2,000.00 if immediate payment is not required, and up to $500.00 if immediate payment is required.<br/><br/><b>Max</b>: <code>2000.0</code>|
|dueIn|[TimeDuration](#schematimeduration)|false|none|This value indicates the number of hours that the buyer has (after they commit to buy) to pay the initial deposit on a motor vehicle. Valid <b>dueIn</b> times are 24, 48, and 72 hours. <code>HOUR</code> is set as the <b>unit</b> value, and <code>24</code>, <code>48</code> or <code>72</code> are set in the <b>value</b> field.<br /><br /><span class="tablenote"><b>Note</b>: The <b>dueIn</b> value is overridden if the seller has set the motor vehicle listing to require immediate payment. If the listing requires immediate payment, the buyer must pay the deposit immediately in order to be eligible to purchase the motor vehicle.</span><br/><br/><b>Min</b>=24 (hours)<b>Max</b>=72 (hours), <b>Default</b>=48 (hours)|
|paymentMethods|[[PaymentMethod](#schemapaymentmethod)]|false|none|This array is no longer applicable and should not be used since eBay now manages the electronic payment options available to buyers to pay the deposit.|

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
|category|string|false|none|The category type for this error or warning. It is a string that can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul>|
|domain|string|false|none|Name of the domain ,or primary system, of the service or application where the error occurred.|
|errorId|integer(int32)|false|none|A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.|
|inputRefIds|[string]|false|none|Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use <i>JSONPath</i> notation.|
|longMessage|string|false|none|A more detailed explanation of the error than given in the <code>message</code> error field.|
|message|string|false|none|Information on how to correct the problem, in the end user's terms and language where applicable. Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.|
|outputRefIds|[string]|false|none|Identifies specific response elements associated with the error, if any. Path format is the same as <code>inputRefId</code>.|
|parameters|[[ErrorParameter](#schemaerrorparameter)]|false|none|This optional list of name/value pairs that contain context-specific <code>ErrorParameter</code> objects, with each item in the list being a parameter (or input field name) that caused an error condition. Each <code>ErrorParameter</code> object consists of two fields, a <code>name</code> and a <code>value</code>.|
|subdomain|string|false|none|If present, indicates the subsystem in which the error occurred.|

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

A complex type that indicates a parameter that caused an error and the value of the parameter which caused the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the parameter that caused the error.|
|value|string|false|none|The value of the parameter that caused the error.|

<h2 id="tocS_FulfillmentPolicy">FulfillmentPolicy</h2>
<!-- backwards compatibility -->
<a id="schemafulfillmentpolicy"></a>
<a id="schema_FulfillmentPolicy"></a>
<a id="tocSfulfillmentpolicy"></a>
<a id="tocsfulfillmentpolicy"></a>

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "freightShipping": true,
  "fulfillmentPolicyId": "string",
  "globalShipping": true,
  "handlingTime": {
    "unit": "string",
    "value": 0
  },
  "localPickup": true,
  "marketplaceId": "string",
  "name": "string",
  "pickupDropOff": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingOptions": [
    {
      "costType": "string",
      "insuranceFee": {
        "currency": "string",
        "value": "string"
      },
      "insuranceOffered": true,
      "optionType": "string",
      "packageHandlingCost": {
        "currency": "string",
        "value": "string"
      },
      "rateTableId": "string",
      "shippingDiscountProfileId": "string",
      "shippingPromotionOffered": true,
      "shippingServices": [
        {
          "additionalShippingCost": {
            "currency": "string",
            "value": "string"
          },
          "buyerResponsibleForPickup": true,
          "buyerResponsibleForShipping": true,
          "cashOnDeliveryFee": {
            "currency": "string",
            "value": "string"
          },
          "freeShipping": true,
          "shipToLocations": {
            "regionExcluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ],
            "regionIncluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ]
          },
          "shippingCarrierCode": "string",
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingServiceCode": "string",
          "sortOrder": 0,
          "surcharge": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  ]
}
```

This type is used by the <b>fulfillmentPolicy</b> response container, a container which defines a seller's fulfillment policy for a specific marketplace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypes|[[CategoryType](#schemacategorytype)]|false|none|This container indicates whether the fulfillment policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|description|string|false|none|A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250|
|freightShipping|boolean|false|none|If returned as <code>true</code>, the seller offers freight shipping. Freight shipping can be used for large items over 150 lbs.|
|fulfillmentPolicyId|string|false|none|A unique eBay-assigned ID for the fulfillment policy. This ID is generated when the policy is created.|
|globalShipping|boolean|false|none|If returned as <code>true</code>, eBay's Global Shipping Program will be used by the seller to ship items to international locations.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span>|
|handlingTime|[TimeDuration](#schematimeduration)|false|none|Specifies the maximum number of business days the seller commits to for preparing and shipping an order after receiving a cleared payment for the order. This time does not include the transit time it takes the shipping carrier to deliver the order. <p>If only local pickup or freight shipping is available for the item, this container may not get returned.</p>|
|localPickup|boolean|false|none|If returned as <code>true</code>, local pickup is available for this policy.|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which this fulfillment policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64|
|pickupDropOff|boolean|false|none|If returned as <code>true</code>, the seller offers the "Click and Collect" option. <br/><br/>Currently, "Click and Collect" is available only to large retail merchants the eBay AU and UK marketplaces.|
|shipToLocations|[RegionSet](#schemaregionset)|false|none|This container consists of the <b>regionIncluded</b> and <b>regionExcluded</b> containers, which define the geographical regions/countries/states or provinces/domestic regions where the seller does and doesn't ship to with this fulfillment policy.|
|shippingOptions|[[ShippingOption](#schemashippingoption)]|false|none|This array is used to provide detailed information on the domestic and international shipping options available for the policy. A separate <b>ShippingOption</b> object covers domestic shipping service options and international shipping service options (if the seller ships to international locations). <br /><br />The <b>optionType</b> field indicates whether the <b>ShippingOption</b> object applies to domestic or international shipping, and the <b>costType</b> field indicates whether flat-rate shipping or calculated shipping will be used. <p>A separate <b>ShippingServices</b> object is used to specify cost and other details for every available domestic and international shipping service option. </p>|

<h2 id="tocS_FulfillmentPolicyRequest">FulfillmentPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemafulfillmentpolicyrequest"></a>
<a id="schema_FulfillmentPolicyRequest"></a>
<a id="tocSfulfillmentpolicyrequest"></a>
<a id="tocsfulfillmentpolicyrequest"></a>

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "freightShipping": true,
  "globalShipping": true,
  "handlingTime": {
    "unit": "string",
    "value": 0
  },
  "localPickup": true,
  "marketplaceId": "string",
  "name": "string",
  "pickupDropOff": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingOptions": [
    {
      "costType": "string",
      "insuranceFee": {
        "currency": "string",
        "value": "string"
      },
      "insuranceOffered": true,
      "optionType": "string",
      "packageHandlingCost": {
        "currency": "string",
        "value": "string"
      },
      "rateTableId": "string",
      "shippingDiscountProfileId": "string",
      "shippingPromotionOffered": true,
      "shippingServices": [
        {
          "additionalShippingCost": {
            "currency": "string",
            "value": "string"
          },
          "buyerResponsibleForPickup": true,
          "buyerResponsibleForShipping": true,
          "cashOnDeliveryFee": {
            "currency": "string",
            "value": "string"
          },
          "freeShipping": true,
          "shipToLocations": {
            "regionExcluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ],
            "regionIncluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ]
          },
          "shippingCarrierCode": "string",
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingServiceCode": "string",
          "sortOrder": 0,
          "surcharge": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  ]
}
```

This root container defines a seller's fulfillment policy for a specific marketplace and category group. This type is used when creating or updating a fulfillment business policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypes|[[CategoryType](#schemacategorytype)]|false|none|This container is used to specify whether the fulfillment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|description|string|false|none|A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|freightShipping|boolean|false|none|This field is included and set to <code>true</code> if freight shipping is available for the item. Freight shipping can be used for large items over 150 lbs.<br/><br/><b>Default</b>: false|
|globalShipping|boolean|false|none|This field is included and set to <code>true</code> if the seller wants to use the Global Shipping Program for international shipments. See the <a href="https://pages.ebay.com/help/sell/shipping-globally.html ">Global Shipping Program</a> help topic for more details and requirements on the Global Shipping Program.<br/><br/>It is possible for a seller to use a combination of the Global Shipping Program and other international shipping services. <br/><br/>If this value is set to <code>false</code> or if the field is omitted, the seller is responsible for manually specifying individual international shipping services (if the seller ships internationally)., as described in <a href="https://developer.ebay.com/api-docs/sell/static/seller-accounts/ht_shipping-worldwide.html ">Setting up worldwide shipping</a>. <br/><br/>Sellers can opt in or out of the Global Shipping Program through the Shipping preferences in My eBay.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span><p><b>Default</b>: false</p>|
|handlingTime|[TimeDuration](#schematimeduration)|false|none|This container is used to specify the maximum number of business days the seller commits to for preparing and shipping an order after receiving a cleared payment for the order. This time does not include the transit time it takes the shipping carrier to deliver the order.<br /><br />Valid values can vary by site and by category. To obtain the supported values for a site, call <b>GeteBayDetails</b> in the Trading API with <b>DetailName</b> set to <code>DispatchTimeMaxDetails</code>, then inspect the <b>DispatchTimeMaxDetails</b> container in the response for the time values supported by the site (typical handling times are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>10</code>, <code>15</code>, and <code>20</code>, but these can vary by site and may change over time.) <p>This field is conditionally required when the seller is offering one or more domestic or international shipping options, but it is not applicable when the item is only available through local pickup (<code>"localPickup": "true"</code>), or if it will be shipped through a freight shipping service (<code>"freightShipping": "true"</code>). </p> <span class="tablenote"><b>Note: </b> Top-Rated sellers must offer same-day or one-day handling for a listing in order for that listing to receive a Top Rated Plus seal on the View Item or Search Results pages. To offer zero-day or one-day handling, set field to '0' or '1', respectively.</span>|
|localPickup|boolean|false|none|This field should be included and set to <code>true</code> if local pickup is one of the fulfillment options available to the buyer. It is possible for the seller to make local pickup and some shipping service options available to the buyer.<br/><br/>With local pickup, the buyer and seller make arrangements for pickup time and location.<br/><br/><b>Default</b>: <code>false</code>|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which this fulfillment policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64|
|pickupDropOff|boolean|false|none|This field should be included and set to <code>true</code> if the seller offers the "Click and Collect" feature for an item. <p>To enable "Click and Collect" on a listing, a seller must be eligible for Click and Collect. Currently, Click and Collect is available to only large retail merchants selling in the eBay AU and UK marketplaces.</p>  <p>In addition to setting this field to <code>true</code>, the merchant must also do the following to enable the "Click and Collect" option on a listing: <ul><li>Have inventory for the product at one or more physical stores tied to the merchant's account. <p>Sellers can use the <b>createInventoryLocaion</b> method in the Inventory API to associate physical stores to their account and they can then can add inventory to specific store locations.</p></li><li>Set an immediate payment requirement on the item. The immediate payment feature requires the seller to: <ul><li>Set the <b>immediatePay</b> flag in the payment policy to 'true'.</li><li>Have a valid store location with a complete street address.</li></ul></li></ul><p>When a merchant successfully lists an item with Click and Collect, prospective buyers within a reasonable distance from one of the merchant's stores (that has stock available) will see the "Available for Click and Collect" option on the listing, along with information on the closest store that has the item.</p><b>Default</b>: false|
|shipToLocations|[RegionSet](#schemaregionset)|false|none|This container consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which are used to define the geographical regions/countries/states or provinces/domestic regions that a seller does and does not ship to for the associated fulfillment policy. Note that this container can be considered the master list of where the seller ships and does not ship, but there is also a <b>shipToLocations</b> container that can be set at the shipping service option level. <br/><br/>To retrieve the valid geographical shipping region values, two-digit country values, or special domestic regions for an eBay marketplace, call <b>GeteBayDetails</b> with <b>DetailName</b> value set to <code>ExcludeShippingLocationDetails</code>, then review the <b>ExcludeShippingLocationDetails</b> containers in the response for the strings you use in both the <b>regionIncluded.regionName</b> and in the <b>regionExcluded.regionName</b> fields. <br /><br />For valid geographical region names, look for the <code>ExcludeShippingLocationDetails</code> containers in the <b>GeteBayDetails</b> response where the <b>Region</b> value is <code>Worldwide</code>, and the valid values will be shown in the corresponding <b>Location</b> fields. <br /><br />For valid two-digit country codes, look for <code>ExcludeShippingLocationDetails</code> in the <b>GeteBayDetails</b> response where the <b>Region</b> value is one of the defined geographical regions, and the valid values will be shown in the corresponding <b>Location</b> fields. Alternatively, you can find the two-digit country code values in the <a href="/api-docs/sell/account/types/ba:CountryCodeEnum">CountryCodeEnum</a> type definition. For valid domestic region values, look for <code>ExcludeShippingLocationDetails</code> in the <b>GeteBayDetails</b> response where the <b>Region</b> value is either <code>Domestic Location</code> or <code>Additional Locations</code>, and the valid values will be shown in the corresponding <b>Location</b> fields. <br /><br />The <code>STATE_OR_PROVINCE</code> region type is only applicable to the US and Canada, and valid values for US states are the same <a href="https://about.usps.com/who-we-are/postal-history/state-abbreviations.htm ">two-digit abbreviations</a> used by the United States Postal Service, and valid values for Canadian provinces and territories are the same <a href="https://www.canadapost-postescanada.ca/cpc/en/support/articles/addressing-guidelines/symbols-and-abbreviations.page ">two-digit abbreviations</a> used by the Canada Post.|
|shippingOptions|[[ShippingOption](#schemashippingoption)]|false|none|This array is used to provide detailed information on the domestic and international shipping options available for the policy. <br /><br />A separate <b>ShippingOption</b> object is required for domestic shipping service options and for international shipping service options (if the seller ships to international locations). <ul><li>The <b>optionType</b> field is used to indicate whether the <b>ShippingOption</b> object applies to domestic or international shipping, and the <b>costType</b> field is used to indicate whether flat-rate shipping or calculated shipping will be used.</li> <li>The <b>rateTableId</b> field can be used to associate a defined shipping rate table to the policy, and the <b>packageHandlingCost</b> container can be used to set a handling charge for the policy.</li></ul> <p>A separate <b>ShippingServices</b> object will be used to specify cost and other details for every available domestic and international shipping service option. </p>|

<h2 id="tocS_FulfillmentPolicyResponse">FulfillmentPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemafulfillmentpolicyresponse"></a>
<a id="schema_FulfillmentPolicyResponse"></a>
<a id="tocSfulfillmentpolicyresponse"></a>
<a id="tocsfulfillmentpolicyresponse"></a>

```json
{
  "fulfillmentPolicies": [
    {
      "categoryTypes": [
        {
          "default": true,
          "name": "string"
        }
      ],
      "description": "string",
      "freightShipping": true,
      "fulfillmentPolicyId": "string",
      "globalShipping": true,
      "handlingTime": {
        "unit": "string",
        "value": 0
      },
      "localPickup": true,
      "marketplaceId": "string",
      "name": "string",
      "pickupDropOff": true,
      "shipToLocations": {
        "regionExcluded": [
          {
            "regionName": "string",
            "regionType": "string"
          }
        ],
        "regionIncluded": [
          {
            "regionName": "string",
            "regionType": "string"
          }
        ]
      },
      "shippingOptions": [
        {
          "costType": "string",
          "insuranceFee": {
            "currency": "string",
            "value": "string"
          },
          "insuranceOffered": true,
          "optionType": "string",
          "packageHandlingCost": {
            "currency": "string",
            "value": "string"
          },
          "rateTableId": "string",
          "shippingDiscountProfileId": "string",
          "shippingPromotionOffered": true,
          "shippingServices": [
            {
              "additionalShippingCost": {
                "currency": "string",
                "value": "string"
              },
              "buyerResponsibleForPickup": true,
              "buyerResponsibleForShipping": true,
              "cashOnDeliveryFee": {
                "currency": "string",
                "value": "string"
              },
              "freeShipping": true,
              "shipToLocations": {
                "regionExcluded": [
                  {
                    "regionName": "string",
                    "regionType": "string"
                  }
                ],
                "regionIncluded": [
                  {
                    "regionName": "string",
                    "regionType": "string"
                  }
                ]
              },
              "shippingCarrierCode": "string",
              "shippingCost": {
                "currency": "string",
                "value": "string"
              },
              "shippingServiceCode": "string",
              "sortOrder": 0,
              "surcharge": {
                "currency": "string",
                "value": "string"
              }
            }
          ]
        }
      ]
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

The response payload for the <b>getFulfillmentPolicies</b> method.<br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getFulfillmentPolicies</b>, so all of the pagination-related fields are for future use.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fulfillmentPolicies|[[FulfillmentPolicy](#schemafulfillmentpolicy)]|false|none|A list of all of the seller's fulfillment policies defined for the specified marketplace. This array will be returned as empty if no fulfillment policies are defined for the specified marketplace.|
|href|string|false|none|This field is for future use.|
|limit|integer(int32)|false|none|This field is for future use.|
|next|string|false|none|This field is for future use.|
|offset|integer(int32)|false|none|This field is for future use.|
|prev|string|false|none|This field is for future use.|
|total|integer(int32)|false|none|The total number of fulfillment policies retrieved in the result set.  <br/><br/>If no fulfillment policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.|

<h2 id="tocS_InternationalReturnOverrideType">InternationalReturnOverrideType</h2>
<!-- backwards compatibility -->
<a id="schemainternationalreturnoverridetype"></a>
<a id="schema_InternationalReturnOverrideType"></a>
<a id="tocSinternationalreturnoverridetype"></a>
<a id="tocsinternationalreturnoverridetype"></a>

```json
{
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnShippingCostPayer": "string",
  "returnsAccepted": true
}
```

This type defines the fields for a seller's international return policy. Sellers have the ability to set separate domestic and international return policies, but if an international return policy is not set, the same return policy settings specified for the domestic return policy are also used for returns for international buyers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnMethod|string|false|none|This field sets/indicates if the seller offers replacement items to the buyer in the case of an international return. The buyer must be willing to accept a replacement item; otherwise, the seller will need to issue a refund for a return. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a>|
|returnPeriod|[TimeDuration](#schematimeduration)|false|none|This container indicates the number of calendar days that the buyer has to return an item. The return period begins when the item is marked "delivered" at the buyer's specified ship-to location.  <br/><br/>You must set the value to one that's accepted by the marketplace and category where the item is listed. Most categories support 30-day and 60-day return periods. For a definitive list of return periods for one or more categories, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. <br/><br/>The <b>TimeDuration</b> type is used to set/indicate the return period, and you set the <b>unit</b> value to <code>DAY</code> and the <b>value</b> field to either <code>30</code> or <code>60</code> (or other value, as appropriate).  <br/><br/>Note that this value cannot be modified if the listing has bids or sales, or if the listing ends within 12 hours.  <br/><br/>This field is conditionally required if the <b>internationalOverride.returnsAccepted</b> field is set to <code>true</code>.|
|returnShippingCostPayer|string|false|none|This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for 'significantly not as described' (SNAD) issues.  <br/><br/>This field is conditionally required if the <b>internationalOverride.returnsAccepted</b> field is set to <code>true</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a>|
|returnsAccepted|boolean|false|none|If set to <code>true</code>, the seller accepts international returns. If set to <code>false</code>, the seller does not accept international returns.  <br/><br/>This field is conditionally required if the seller chooses to have a separate international return policy.|

<h2 id="tocS_KycCheck">KycCheck</h2>
<!-- backwards compatibility -->
<a id="schemakyccheck"></a>
<a id="schema_KycCheck"></a>
<a id="tocSkyccheck"></a>
<a id="tocskyccheck"></a>

```json
{
  "alert": "string",
  "dataRequired": "string",
  "detailMessage": "string",
  "dueDate": "string",
  "remedyUrl": "string"
}
```

This type is used to provide details about any KYC check that is applicable to the managed payments seller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alert|string|false|none|This field gives a short summary of what is required from the seller. An example might be, '<code>Upload bank document now.</code>'. The <b>detailMessage</b> field will often provide more details on what is required of the seller.|
|dataRequired|string|false|none|The enumeration value returned in this field categorizes the type of details needed for the KYC check. More information about the check is shown in the <b>detailMessage</b> and other applicable, corresponding fields. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/kyc:DetailsType'>eBay API documentation</a>|
|detailMessage|string|false|none|This field gives a detailed message about what is required from the seller. An example might be, '<code>Please upload a bank document by 2020-08-01 to get your account back in good standing.</code>'.|
|dueDate|string|false|none|The timestamp in this field indicates the date by which the seller should resolve the KYC requirement.<br><br>The timestamp in this field uses the UTC date and time format described in the <a href="https://www.iso.org/iso-8601-date-and-time-format.html" target="_blank">ISO 8601 Standard</a>. See below for this format and an example: <br><br><i>MM-DD-YYYY HH:MM:SS</i><br/><code>06-05-2020 10:34:18</code>|
|remedyUrl|string|false|none|If applicable and available, a URL will be returned in this field, and the link will take the seller to an eBay page where they can provide the requested information.|

<h2 id="tocS_KycResponse">KycResponse</h2>
<!-- backwards compatibility -->
<a id="schemakycresponse"></a>
<a id="schema_KycResponse"></a>
<a id="tocSkycresponse"></a>
<a id="tocskycresponse"></a>

```json
{
  "kycChecks": [
    {
      "alert": "string",
      "dataRequired": "string",
      "detailMessage": "string",
      "dueDate": "string",
      "remedyUrl": "string"
    }
  ]
}
```

This is the base response type of the <b>getKYC</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kycChecks|[[KycCheck](#schemakyccheck)]|false|none|This array contains one or more KYC checks required from a managed payments seller. The seller may need to provide more documentation and/or information about themselves, their company, or the bank account they are using for seller payouts.<br/><br/>If no KYC checks are currently required from the seller, this array is not returned, and the seller only receives a <code>204 No Content</code> HTTP status code.|

<h2 id="tocS_PaymentMethod">PaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethod"></a>
<a id="schema_PaymentMethod"></a>
<a id="tocSpaymentmethod"></a>
<a id="tocspaymentmethod"></a>

```json
{
  "brands": [
    "string"
  ],
  "paymentMethodType": "string",
  "recipientAccountReference": {
    "referenceId": "string",
    "referenceType": "string"
  }
}
```

This type is used by the <b>paymentMethods</b> container, which is used by the seller to specify one or more offline payment methods. <br /><br /> <span class="tablenote"><b>Note</b>: eBay now controls all electronic payment methods available for a marketplace, so a seller will no longer use this type to specify any electronic payment methods.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brands|[string]|false|none|<span class="tablenote"><b>Note</b>: This array is no longer applicable and should not be used. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods, including any credit card brands accepted. </span>|
|paymentMethodType|string|false|none|eBay now controls all electronic payment methods available for a marketplace, so only offline payment method enum values may be used in this field, and offline payment methods will only be applicable to listings that require or support offline payments. See the <b>PaymentMethodTypeEnum</b> type for supported offline payment method enum values. </p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentMethodTypeEnum'>eBay API documentation</a>|
|recipientAccountReference|[RecipientAccountReference](#schemarecipientaccountreference)|false|none|<span class="tablenote"><b>Note</b>: This container is no longer applicable and should not be used. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods, including PayPal. </span>|

<h2 id="tocS_PaymentPolicy">PaymentPolicy</h2>
<!-- backwards compatibility -->
<a id="schemapaymentpolicy"></a>
<a id="schema_PaymentPolicy"></a>
<a id="tocSpaymentpolicy"></a>
<a id="tocspaymentpolicy"></a>

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "deposit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "dueIn": {
      "unit": "string",
      "value": 0
    },
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  },
  "description": "string",
  "fullPaymentDueIn": {
    "unit": "string",
    "value": 0
  },
  "immediatePay": true,
  "marketplaceId": "string",
  "name": "string",
  "paymentInstructions": "string",
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ],
  "paymentPolicyId": "string"
}
```

This type is used by the <b>paymentPolicy</b> response container, a container which defines a seller's payment business policy for a specific marketplace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypes|[[CategoryType](#schemacategorytype)]|false|none|This container indicates whether the fulfillment policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|deposit|[Deposit](#schemadeposit)|false|none|This container is applicable only if the <b>categoryTypes.name</b> field is set to <code>MOTORS_VEHICLES</code>, and is only returned if the seller requires an initial deposit on motor vehicles.<br /><br />The container shows the amount due for the deposit and when it is due (within 1-3 days after commitment to purchase, unless the listing requires immediate payment). <p class="tablenote"><b>Note:</b> The due date that is specified in the <b>deposit</b> container will be overridden if the payment business policy requires immediate payment (in this case, for the deposit), and the buyer commits to purchasing the motor vehicle through a fixed-price listing or through the 'Buy it Now' option of an auction listing. </p>|
|description|string|false|none|A seller-defined description of the payment policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|fullPaymentDueIn|[TimeDuration](#schematimeduration)|false|none|This container applies to motor vehicles listings only and indicates when a final payment for the vehicle is due. This value is always returned if <b>categoryTypes</b> is set to <code>MOTORS_VEHICLES</code>. <br><br>This container indicates the number of days that a buyer has to make their full payment to the seller and close the remaining balance on a motor vehicle transaction. The period starts when the buyer commits to buy. The valid values, as specified with <b>TimeDuration</b>, are:<ul><li>3 DAYS</li><li>7 DAYS (the default)</li><li>10 DAYS</li><li>14 DAYS</li></ul>A <code>MOTORS_VEHICLES</code>) payment business policy must specify at least one of the following <b>paymentMethods</b> values for the final payment: <ul> <li>CASH_ON_PICKUP<br /><br /><span class="tablenote"><b>Note:</b> This payment method is only available to sellers outside the US.</span></li> <li>CASHIER_CHECK</li> <li>MONEY_ORDER</li><li>PERSONAL_CHECK</li></ul>|
|immediatePay|boolean|false|none|If this field is returned as <code>true</code>, immediate payment is required from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer uses the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br />It is possible for the seller to set this field as <code>true</code> in the payment business policy, but it will not apply in some scenarios. For example, immediate payment is not applicable for auction listings that have a winning bidder, for buyer purchases that involve the Best Offer feature, or for transactions that happen offline between the buyer and seller.|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which the payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64|
|paymentInstructions|string|false|none|Although this field may be returned for some older payment business policies, payment instructions are no longer supported by payment business policies. If this field is returned, it can be ignored and these payment instructions will not appear in any listings that use the corresponding business policy. <br/><br/><b>Max length</b>: 1000|
|paymentMethods|[[PaymentMethod](#schemapaymentmethod)]|false|none|This container is returned to show the payment methods that are accepted for the payment business policy.  <br><br>Sellers do not have to specify any electronic payment methods for listings, so this array will often be returned empty unless the payment business policy is intended for motor vehicle listings or other items in categories where offline payments are required or supported. |
|paymentPolicyId|string|false|none|A unique eBay-assigned ID for a payment business policy. This ID is generated when the policy is created.|

<h2 id="tocS_PaymentPolicyRequest">PaymentPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentpolicyrequest"></a>
<a id="schema_PaymentPolicyRequest"></a>
<a id="tocSpaymentpolicyrequest"></a>
<a id="tocspaymentpolicyrequest"></a>

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "deposit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "dueIn": {
      "unit": "string",
      "value": 0
    },
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  },
  "description": "string",
  "fullPaymentDueIn": {
    "unit": "string",
    "value": 0
  },
  "immediatePay": true,
  "marketplaceId": "string",
  "name": "string",
  "paymentInstructions": "string",
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ]
}
```

This root container defines a seller's payment business policy for a specific marketplace and category group. This type is used when creating or updating a payment business policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypes|[[CategoryType](#schemacategorytype)]|false|none|This container is used to specify whether the payment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|deposit|[Deposit](#schemadeposit)|false|none|This container is used if the seller wants to require an initial deposit on a motor vehicle listing. In this container, the seller sets the deposit amount and the due date for the deposit.<br /><br />Because eBay controls all electronic payment methods, sellers do not need to specify a payment method and the <b>deposit.paymentMethods</b> array is not needed.<p class="tablenote"><b>Note: </b>The 'due date' specified in the <b>deposit</b> container will be overridden if the payment business policy requires immediate payment (in this case, for the deposit), and the buyer commits to purchase the motor vehicle through a fixed-price listing or through the 'Buy it Now' option of an auction listing.</p>|
|description|string|false|none|A seller-defined description of the payment business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|fullPaymentDueIn|[TimeDuration](#schematimeduration)|false|none|This container is used to specify the number of days that a buyer has to make their full payment to the seller and close the remaining balance on a motor vehicle transaction. This container must be specified for motor vehicles listings. <br/><br/>The period starts when the buyer commits to buy. The valid values, as specified with <b>TimeDuration</b>, are:<ul><li><code>3 DAYS</code></li><li><code>7 DAYS</code> (the default)</li><li><code>10 DAYS</code></li><li><code>14 DAYS</code></li></ul>In order for a buyer to make a full payment on a motor vehicle, at least one of the following <b>paymentMethods</b> values must be specified for the corresponding payment business policy: <ul> <li><code>CASH_ON_PICKUP</code></li> <li><code>CASHIER_CHECK</code></li> <li><code>MONEY_ORDER</code></li> <li><code>PERSONAL_CHECK</code></li></ul><b>Default:</b> <code>7 DAYS</code>|
|immediatePay|boolean|false|none|This field should be included and set to <code>true</code> if the seller wants to require immediate payment from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer is using the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br /><b>Default:</b> False|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64|
|paymentInstructions|string|false|none|<p class="tablenote"><b>Note:</b> DO NOT USE THIS FIELD. Payment instructions are no longer supported by payment business policies.</p>A free-form string field that allows sellers to add detailed payment instructions to their listings.|
|paymentMethods|[[PaymentMethod](#schemapaymentmethod)]|false|none|<p class="tablenote"><b>Note:</b> This field applies only when the seller needs to specify one or more offline payment methods. eBay now manages the electronic payment options available to buyers to pay for the item.</p>This array is used to specify one or more offline payment methods that will be accepted for payment that occurs off of eBay's platform.|

<h2 id="tocS_PaymentPolicyResponse">PaymentPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentpolicyresponse"></a>
<a id="schema_PaymentPolicyResponse"></a>
<a id="tocSpaymentpolicyresponse"></a>
<a id="tocspaymentpolicyresponse"></a>

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "paymentPolicies": [
    {
      "categoryTypes": [
        {
          "default": true,
          "name": "string"
        }
      ],
      "deposit": {
        "amount": {
          "currency": "string",
          "value": "string"
        },
        "dueIn": {
          "unit": "string",
          "value": 0
        },
        "paymentMethods": [
          {
            "brands": [
              "string"
            ],
            "paymentMethodType": "string",
            "recipientAccountReference": {
              "referenceId": "string",
              "referenceType": "string"
            }
          }
        ]
      },
      "description": "string",
      "fullPaymentDueIn": {
        "unit": "string",
        "value": 0
      },
      "immediatePay": true,
      "marketplaceId": "string",
      "name": "string",
      "paymentInstructions": "string",
      "paymentMethods": [
        {
          "brands": [
            "string"
          ],
          "paymentMethodType": "string",
          "recipientAccountReference": {
            "referenceId": "string",
            "referenceType": "string"
          }
        }
      ],
      "paymentPolicyId": "string"
    }
  ],
  "prev": "string",
  "total": 0
}
```

The response payload for the <b>getPaymentPolicies</b> method. <br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getPaymentPolicies</b>, so all of the pagination-related fields are for future use.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|This field is for future use.|
|limit|integer(int32)|false|none|This field is for future use.|
|next|string|false|none|This field is for future use.|
|offset|integer(int32)|false|none|This field is for future use.|
|paymentPolicies|[[PaymentPolicy](#schemapaymentpolicy)]|false|none|A list of all of the seller's payment business policies defined for the specified marketplace. This array will be returned as empty if no payment business policies are defined for the specified marketplace.|
|prev|string|false|none|This field is for future use.|
|total|integer(int32)|false|none|The total number of payment business policies retrieved in the result set.  <br/><br/>If no payment business policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.|

<h2 id="tocS_PaymentsProgramOnboardingResponse">PaymentsProgramOnboardingResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsprogramonboardingresponse"></a>
<a id="schema_PaymentsProgramOnboardingResponse"></a>
<a id="tocSpaymentsprogramonboardingresponse"></a>
<a id="tocspaymentsprogramonboardingresponse"></a>

```json
{
  "onboardingStatus": "string",
  "steps": [
    {
      "name": "string",
      "status": "string",
      "webUrl": "string"
    }
  ]
}
```

Type used by the payments program onboarding response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onboardingStatus|string|false|none|This enumeration value indicates the eligibility of payment onboarding for the registered site. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramOnboardingStatus'>eBay API documentation</a>|
|steps|[[PaymentsProgramOnboardingSteps](#schemapaymentsprogramonboardingsteps)]|false|none|An array of the active process steps for payment onboarding and the status of each step. This array includes the step <strong>name</strong>, step <strong>status</strong>, and a <strong>webUrl</strong> to the <code>IN_PROGRESS</code> step. The step names are returned in sequential order. |

<h2 id="tocS_PaymentsProgramOnboardingSteps">PaymentsProgramOnboardingSteps</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsprogramonboardingsteps"></a>
<a id="schema_PaymentsProgramOnboardingSteps"></a>
<a id="tocSpaymentsprogramonboardingsteps"></a>
<a id="tocspaymentsprogramonboardingsteps"></a>

```json
{
  "name": "string",
  "status": "string",
  "webUrl": "string"
}
```

The payments program onboarding steps, status, and link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the step in the steps array. Over time, these names are subject to change as processes change. The output sample contains example step names. Review an actual call response for updated step names. |
|status|string|false|none|This enumeration value indicates the status of the associated step. <p> <span class="tablenote"><strong>Note:</strong> Only one step can be <code>IN_PROGRESS</code> at a time.</span></p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramOnboardingStepStatus'>eBay API documentation</a>|
|webUrl|string|false|none|This URL provides access to the <code>IN_PROGRESS</code> step.|

<h2 id="tocS_PaymentsProgramResponse">PaymentsProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsprogramresponse"></a>
<a id="schema_PaymentsProgramResponse"></a>
<a id="tocSpaymentsprogramresponse"></a>
<a id="tocspaymentsprogramresponse"></a>

```json
{
  "marketplaceId": "string",
  "paymentsProgramType": "string",
  "status": "string",
  "wasPreviouslyOptedIn": true
}
```

The response object containing the sellers status with regards to the specified payment program.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which the payment program applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|paymentsProgramType|string|false|none|This parameter specifies the payment program whose status is returned by the call.  <br><br>Currently the only supported payments program is <code>EBAY_PAYMENTS</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramType'>eBay API documentation</a>|
|status|string|false|none|The enumeration value returned in this field indicates whether or not the seller's account is enabled for the payments program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramStatus'>eBay API documentation</a>|
|wasPreviouslyOptedIn|boolean|false|none|If returned as <code>true</code>, the seller was at one point opted-in to the associated payment program, but they later opted out of the program. A value of <code>false</code> indicates the seller never opted-in to the program or if they did opt-in to the program, they never opted-out of it.  <br><br>It's important to note that the setting of this field does not indicate the seller's current status regarding the payment program. It is possible for this field to return <code>true</code> while the <b>status</b> field returns <code>OPTED_IN</code>.|

<h2 id="tocS_Program">Program</h2>
<!-- backwards compatibility -->
<a id="schemaprogram"></a>
<a id="schema_Program"></a>
<a id="tocSprogram"></a>
<a id="tocsprogram"></a>

```json
{
  "programType": "string"
}
```

A seller program in to which a seller can opt-in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|programType|string|false|none|A seller program in to which a seller can opt-in. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ProgramTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_Programs">Programs</h2>
<!-- backwards compatibility -->
<a id="schemaprograms"></a>
<a id="schema_Programs"></a>
<a id="tocSprograms"></a>
<a id="tocsprograms"></a>

```json
{
  "programs": [
    {
      "programType": "string"
    }
  ]
}
```

The base response type of the <b>getOptedInPrograms</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|programs|[[Program](#schemaprogram)]|false|none|An array of seller programs that the seller's account is opted in to.|

<h2 id="tocS_RateTable">RateTable</h2>
<!-- backwards compatibility -->
<a id="schemaratetable"></a>
<a id="schema_RateTable"></a>
<a id="tocSratetable"></a>
<a id="tocsratetable"></a>

```json
{
  "countryCode": "string",
  "locality": "string",
  "name": "string",
  "rateTableId": "string"
}
```

This type is used to provide details about each shipping rate table that is returned in the <b>getRateTables</b> response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|A two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> country code representing the eBay marketplace where the shipping rate table is defined. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum'>eBay API documentation</a>|
|locality|string|false|none|This enumeration value returned here indicates whether the shipping rate table is a domestic or international shipping rate table. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingOptionTypeEnum'>eBay API documentation</a>|
|name|string|false|none|The seller-defined name for the shipping rate table.|
|rateTableId|string|false|none|A unique eBay-assigned ID for a seller's shipping rate table. These <b>rateTableId</b> values are used to associate shipping rate tables to fulfillment business policies or directly to listings through an add/revise/relist call in the Trading API.|

<h2 id="tocS_RateTableResponse">RateTableResponse</h2>
<!-- backwards compatibility -->
<a id="schemaratetableresponse"></a>
<a id="schema_RateTableResponse"></a>
<a id="tocSratetableresponse"></a>
<a id="tocsratetableresponse"></a>

```json
{
  "rateTables": [
    {
      "countryCode": "string",
      "locality": "string",
      "name": "string",
      "rateTableId": "string"
    }
  ]
}
```

This type is the base response of the <b>getRateTables</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateTables|[[RateTable](#schemaratetable)]|false|none|An array of all shipping rate tables defined for a marketplace (or all marketplaces if no <b>country_code</b> query parameter is used). This array will be returned as empty if the seller has no defined shipping rate tables for the specified marketplace.|

<h2 id="tocS_RecipientAccountReference">RecipientAccountReference</h2>
<!-- backwards compatibility -->
<a id="schemarecipientaccountreference"></a>
<a id="schema_RecipientAccountReference"></a>
<a id="tocSrecipientaccountreference"></a>
<a id="tocsrecipientaccountreference"></a>

```json
{
  "referenceId": "string",
  "referenceType": "string"
}
```

<span class="tablenote"><b>Note</b>: This type is no longer applicable. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referenceId|string|false|none|<span class="tablenote"><b>Note</b>: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span>|
|referenceType|string|false|none|<span class="tablenote"><b>Note</b>: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RecipientAccountReferenceTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "regionName": "string",
  "regionType": "string"
}
```

This type is used to define specific shipping regions. There are four 'levels' of shipping regions, including large geographical regions (like 'Asia', 'Europe', or 'Middle East'), individual countries, US states or Canadian provinces, and special locations/domestic regions within a country (like 'Alaska/Hawaii' or 'PO Box').

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionName|string|false|none|A string that indicates the name of a region, as defined by eBay. A "region" can be either a 'world region' (e.g., the "Middle East" or "Southeast Asia"), a country (represented with a two-letter country code), a state or province (represented with a two-letter code), or a special domestic region within a country. <br /><br />The <b>GeteBayDetails</b> call in the Trading API can be used to retrieve the world regions and special domestic regions within a specific country. To get these enumeration values, call <b>GeteBayDetails</b> with the <b>DetailName</b> value set to <b>ExcludeShippingLocationDetails</b>.|
|regionType|string|false|none|Reserved for future use. <!--The region's type, which can be one of the following: 'COUNTRY', 'COUNTRY_REGION', 'STATE_OR_PROVINCE', 'WORLD_REGION', or 'WORLDWIDE'.--> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:RegionTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_RegionSet">RegionSet</h2>
<!-- backwards compatibility -->
<a id="schemaregionset"></a>
<a id="schema_RegionSet"></a>
<a id="tocSregionset"></a>
<a id="tocsregionset"></a>

```json
{
  "regionExcluded": [
    {
      "regionName": "string",
      "regionType": "string"
    }
  ],
  "regionIncluded": [
    {
      "regionName": "string",
      "regionType": "string"
    }
  ]
}
```

This type consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which indicate the areas to where the seller does and doesn't ship.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionExcluded|[[Region](#schemaregion)]|false|none|An array of one or more <b>regionName</b> values that specify the areas to where a seller does not ship. A <b>regionExcluded</b> list should only be set in the top-level <b>shipToLocations</b> container and not within the <b>shippingServices.shipToLocations</b> container used to specify which shipping regions are serviced by each available shipping service option. <p>Many sellers are willing to ship to many international locations, but they may want to exclude some world regions or some countries as places they are willing to ship to.<br/><br/>This array will be returned as empty if no shipping regions are excluded with the fulfillment business policy.<br /> <br /><span class="tablenote"><b>Note: </b> The <b>regionExcluded</b> array is not applicable for motor vehicle business policies on the US, CA, or UK marketplaces. If this array is used in a <b>createFulfillmentPolicy</b> or <b>updateFulfillmentPolicy</b> request, it will be ignored.</span>|
|regionIncluded|[[Region](#schemaregion)]|false|none|An array of one or more <b>regionName</b> fields that specify the areas to where a seller ships. <br />Each eBay marketplace supports its own set of allowable shipping locations.<br /> <br /><span class="tablenote"><b>Note: </b> The <b>regionIncluded</b> array is not applicable for motor vehicle business policies on the US, CA, or UK marketplaces. If this array is used in a <b>createFulfillmentPolicy</b> or <b>updateFulfillmentPolicy</b> request, it will be ignored.</span>|

<h2 id="tocS_ReturnPolicy">ReturnPolicy</h2>
<!-- backwards compatibility -->
<a id="schemareturnpolicy"></a>
<a id="schema_ReturnPolicy"></a>
<a id="tocSreturnpolicy"></a>
<a id="tocsreturnpolicy"></a>

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "extendedHolidayReturnsOffered": true,
  "internationalOverride": {
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  },
  "marketplaceId": "string",
  "name": "string",
  "refundMethod": "string",
  "restockingFeePercentage": "string",
  "returnInstructions": "string",
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnPolicyId": "string",
  "returnShippingCostPayer": "string",
  "returnsAccepted": true
}
```

This type is used by the <b>returnPolicy</b> response container, a container which defines a seller's return business policy for a specific marketplace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypes|[[CategoryType](#schemacategorytype)]|false|none|This container indicates which category group that the return policy applies to.<br/><br/><span class="tablenote"><b>Note</b>: Return business policies are not applicable to motor vehicle listings, so the <b>categoryTypes.name</b> value will always be <code>ALL_EXCLUDING_MOTORS_VEHICLES</code> for return business policies.</span>|
|description|string|false|none|A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|extendedHolidayReturnsOffered|boolean|false|none|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. Any value supplied in this field is neither read nor returned.</p> |
|internationalOverride|[InternationalReturnOverrideType](#schemainternationalreturnoverridetype)|false|none|This container shows the seller's international return policy settings. This container is only returned if the seller has set a separate international return policy for the business policies. International return policies are optional, even if the seller ships to international locations. If a separate international return policy is not set, all of the domestic return policy settings also apply to international orders.|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which this return business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64|
|refundMethod|string|false|none|If a seller indicates that they will accept buyer returns, this value will be set to <code>MONEY_BACK</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a>|
|restockingFeePercentage|string|false|none|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns. If this field is included, it is ignored and it is no longer returned.</p>|
|returnInstructions|string|false|none|This text-based field provides more details on seller-specified return instructions. This field is only returned if set for the return business policy. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE)|
|returnMethod|string|false|none|This field is only returned if the seller is willing to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a>|
|returnPeriod|[TimeDuration](#schematimeduration)|false|none|This container indicates the number of calendar days that the buyer has to return an item. The return period begins when the item is marked "delivered" at the buyer's specified ship-to location.  <br/><br/>Most categories support 30-day and 60-day return periods.<br/><br/><span class="tablenote"><b>Note</b>: Unless the seller has set a separate international return policy through the <b>internationalOverride</b> container, this return period will be valid for domestic and international returns (if the seller ships internationally).</span>|
|returnPolicyId|string|false|none|A unique eBay-assigned ID for a return business policy. This ID is generated when the policy is created.|
|returnShippingCostPayer|string|false|none|This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for SNAD-related issues. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a>|
|returnsAccepted|boolean|false|none|If this field is returned as <code>true</code>, the seller accepts returns. <br/><br/><span class="tablenote"><strong>Note:</strong>Top-Rated sellers must accept item returns and the <b>handlingTime</b> should be set to zero days or one day for a listing to receive a Top-Rated Plus badge on the View Item or search result pages. For more information on eBay's Top-Rated seller program, see <a href="https://pages.ebay.com/help/sell/top-rated.html ">Becoming a Top Rated Seller and qualifying for Top Rated Plus benefits</a>.</span>|

<h2 id="tocS_ReturnPolicyRequest">ReturnPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemareturnpolicyrequest"></a>
<a id="schema_ReturnPolicyRequest"></a>
<a id="tocSreturnpolicyrequest"></a>
<a id="tocsreturnpolicyrequest"></a>

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "extendedHolidayReturnsOffered": true,
  "internationalOverride": {
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  },
  "marketplaceId": "string",
  "name": "string",
  "refundMethod": "string",
  "restockingFeePercentage": "string",
  "returnInstructions": "string",
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnShippingCostPayer": "string",
  "returnsAccepted": true
}
```

This root container defines a seller's return business policy for a specific marketplace and category group. This type is used when creating or updating a return business policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypes|[[CategoryType](#schemacategorytype)]|false|none|This container indicates which category group that the return policy applies to.<br/><br/><span class="tablenote"><b>Note</b>: Return business policies are not applicable to motor vehicle listings, so the <b>categoryTypes.name</b> value must be set to <code>ALL_EXCLUDING_MOTORS_VEHICLES</code> for return business policies.</span>|
|description|string|false|none|A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250|
|extendedHolidayReturnsOffered|boolean|false|none|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. Any value supplied in this field is neither read nor returned.</p> |
|internationalOverride|[InternationalReturnOverrideType](#schemainternationalreturnoverridetype)|false|none|This container is used by the seller to specify a separate  international return policy. If a separate international return policy is not defined by a seller, all of the domestic return policy settings will also apply to international orders.|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which this return business policy applies.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64|
|refundMethod|string|false|none|This value indicates the refund method that will be used by the seller for buyer returns.<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> If this field is not included in a return business policy, it will default to MONEY_BACK.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a>|
|restockingFeePercentage|string|false|none|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns. If this field is included, it is ignored.</p>|
|returnInstructions|string|false|none|This text-based field provides more details on seller-specified return instructions. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE)|
|returnMethod|string|false|none|This field can be used if the seller is willing and able to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a>|
|returnPeriod|[TimeDuration](#schematimeduration)|false|none|This container is used to specify the number of days that the buyer has to return an item. The return period begins when the item is marked "delivered" at the buyer's specified ship-to location.  <br/><br/>You must set the value to one that's accepted by the marketplace and category where the item is listed. Most categories support 30-day and 60-day return periods.  <br/><br/>For a definitive list of return periods for one or more categories, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>.<br/><br/>The return period is set using the <b>TimeDuration</b> type, where you set <b>unit</b> to <code>DAY</code> and <b>value</b> to either <code>30</code> or <code>60</code> (or other value, as appropriate).  <br/><br/>Note that this value cannot be modified if the listing has bids or sales, or if the listing ends within 12 hours.  <br/><br/><i>Required if </i> <b>returnsAccepted</b> is set to <code>true</code>.|
|returnShippingCostPayer|string|false|none|This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for SNAD-related issues.  <br/><br/>This field is conditionally required if <b>returnsAccepted</b> is set to <code>true</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a>|
|returnsAccepted|boolean|false|none|If set to <code>true</code>, the seller accepts returns. <p><span class="tablenote"><strong>Note:</strong>Top-Rated sellers must accept item returns and the <b>handlingTime</b> should be set to zero days or one day for a listing to receive a Top-Rated Plus badge on the View Item or search result pages. For more information on eBay's Top-Rated seller program, see <a href="http://pages.ebay.com/help/sell/top-rated.html ">Becoming a Top Rated Seller and qualifying for Top Rated Plus benefits</a>.</span></p>|

<h2 id="tocS_ReturnPolicyResponse">ReturnPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemareturnpolicyresponse"></a>
<a id="schema_ReturnPolicyResponse"></a>
<a id="tocSreturnpolicyresponse"></a>
<a id="tocsreturnpolicyresponse"></a>

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "returnPolicies": [
    {
      "categoryTypes": [
        {
          "default": true,
          "name": "string"
        }
      ],
      "description": "string",
      "extendedHolidayReturnsOffered": true,
      "internationalOverride": {
        "returnMethod": "string",
        "returnPeriod": {
          "unit": "string",
          "value": 0
        },
        "returnShippingCostPayer": "string",
        "returnsAccepted": true
      },
      "marketplaceId": "string",
      "name": "string",
      "refundMethod": "string",
      "restockingFeePercentage": "string",
      "returnInstructions": "string",
      "returnMethod": "string",
      "returnPeriod": {
        "unit": "string",
        "value": 0
      },
      "returnPolicyId": "string",
      "returnShippingCostPayer": "string",
      "returnsAccepted": true
    }
  ],
  "total": 0
}
```

The response payload for the <b>getReturnPolicies</b> method. <br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getReturnPolicies</b>, so all of the pagination-related fields are for future use.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|This field is for future use.|
|limit|integer(int32)|false|none|This field is for future use.|
|next|string|false|none|This field is for future use.|
|offset|integer(int32)|false|none|This field is for future use.|
|prev|string|false|none|This field is for future use.|
|returnPolicies|[[ReturnPolicy](#schemareturnpolicy)]|false|none|A list of all of the seller's return business policies defined for the specified marketplace. This array will be returned as empty if no return business policies are defined for the specified marketplace.|
|total|integer(int32)|false|none|The total number of return business policies retrieved in the result set.  <br/><br/>If no return business policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.|

<h2 id="tocS_SalesTax">SalesTax</h2>
<!-- backwards compatibility -->
<a id="schemasalestax"></a>
<a id="schema_SalesTax"></a>
<a id="tocSsalestax"></a>
<a id="tocssalestax"></a>

```json
{
  "countryCode": "string",
  "salesTaxJurisdictionId": "string",
  "salesTaxPercentage": "string",
  "shippingAndHandlingTaxed": true
}
```

This type is used to provide sales tax settings for a specific tax jurisdiction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|The country code enumeration value identifies the country to which this sales tax rate applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum'>eBay API documentation</a>|
|salesTaxJurisdictionId|string|false|none|A unique ID that identifies the sales tax jurisdiction to which the sales tax rate applies (for example, a state within the United States).|
|salesTaxPercentage|string|false|none|The sales tax rate that will be applied to sales price. The <b>shippingAndHandlingTaxed</b> value will indicate whether or not sales tax is also applied to shipping and handling charges<br><br>Although it is a string, a percentage value is returned here, such as <code>7.75</code>|
|shippingAndHandlingTaxed|boolean|false|none|If returned as <code>true</code>, sales tax is also applied to shipping and handling charges, and not just the total sales price of the order.|

<h2 id="tocS_SalesTaxBase">SalesTaxBase</h2>
<!-- backwards compatibility -->
<a id="schemasalestaxbase"></a>
<a id="schema_SalesTaxBase"></a>
<a id="tocSsalestaxbase"></a>
<a id="tocssalestaxbase"></a>

```json
{
  "salesTaxPercentage": "string",
  "shippingAndHandlingTaxed": true
}
```

This type is used by the base request of the <b>createOrReplaceSalesTax</b>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|salesTaxPercentage|string|false|none|This field is used to set the sales tax rate for the tax jurisdiction set in the call URI. When applicable to an order, this sales tax rate will be applied to sales price. The <b>shippingAndHandlingTaxed</b> value will indicate whether or not sales tax is also applied to shipping and handling charges<br><br>Although it is a string, a percentage value is set here, such as <code>7.75</code>.|
|shippingAndHandlingTaxed|boolean|false|none|This field is set to <code>true</code> if the seller wishes to apply sales tax to shipping and handling charges, and not just the total sales price of the order. Otherwise, this field's value should be set to <code>false</code>.|

<h2 id="tocS_SalesTaxes">SalesTaxes</h2>
<!-- backwards compatibility -->
<a id="schemasalestaxes"></a>
<a id="schema_SalesTaxes"></a>
<a id="tocSsalestaxes"></a>
<a id="tocssalestaxes"></a>

```json
{
  "salesTaxes": [
    {
      "countryCode": "string",
      "salesTaxJurisdictionId": "string",
      "salesTaxPercentage": "string",
      "shippingAndHandlingTaxed": true
    }
  ]
}
```

This type is used by the root response of the <b>getSalesTaxes</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|salesTaxes|[[SalesTax](#schemasalestax)]|false|none|An array of one or more sales tax rate entries for a specific marketplace (or all applicable marketplaces if the <b>country_code</b> query parameter is not used.<br><br>If no sales tax rate entries are set up, no response payload is returned, but only an HTTP status code of <code>204 No Content</code>.|

<h2 id="tocS_SellerEligibilityMultiProgramResponse">SellerEligibilityMultiProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemasellereligibilitymultiprogramresponse"></a>
<a id="schema_SellerEligibilityMultiProgramResponse"></a>
<a id="tocSsellereligibilitymultiprogramresponse"></a>
<a id="tocssellereligibilitymultiprogramresponse"></a>

```json
{
  "advertisingEligibility": [
    {
      "programType": "string",
      "reason": "string",
      "status": "string"
    }
  ]
}
```

The base response of the <b>getAdvertisingEligibility</b> method that contains the seller eligibility information for one or more advertising programs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisingEligibility|[[SellerEligibilityResponse](#schemasellereligibilityresponse)]|false|none|An array of response fields that define the seller eligibility for eBay adverstising programs.|

<h2 id="tocS_SellerEligibilityResponse">SellerEligibilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemasellereligibilityresponse"></a>
<a id="schema_SellerEligibilityResponse"></a>
<a id="tocSsellereligibilityresponse"></a>
<a id="tocssellereligibilityresponse"></a>

```json
{
  "programType": "string",
  "reason": "string",
  "status": "string"
}
```

A type that is used to provide the seller's eligibility status for an eBay advertising program.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|programType|string|false|none|The eBay advertising program for which a seller may be eligible. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/plser:AdvertisingProgramEnum'>eBay API documentation</a>|
|reason|string|false|none|The reason why a seller is ineligible for the specified eBay advertising program.<br /><br />This field is only returned if the seller is ineligible for the eBay advertising program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/plser:SellerIneligibleReasonEnum'>eBay API documentation</a>|
|status|string|false|none|The seller elibibilty status for the specified eBay advertising program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/cmlib:SellerEligibilityEnum'>eBay API documentation</a>|

<h2 id="tocS_SellingLimit">SellingLimit</h2>
<!-- backwards compatibility -->
<a id="schemasellinglimit"></a>
<a id="schema_SellingLimit"></a>
<a id="tocSsellinglimit"></a>
<a id="tocssellinglimit"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": "string"
  },
  "quantity": 0
}
```

Type used by the <b>sellingLimit</b> container, a container that lists the monthly cap for the quantity of items sold and total sales amount allowed for the seller's account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|This container shows the monthly cap for total sales amount allowed for the seller's account. This container may not be returned if a seller does not have a monthly cap for total sales amount.|
|quantity|integer(int32)|false|none|This field shows the monthly cap for total quantity sold allowed for the seller's account. This container may not be returned if a seller does not have a monthly cap for total quantity sold.|

<h2 id="tocS_SellingPrivileges">SellingPrivileges</h2>
<!-- backwards compatibility -->
<a id="schemasellingprivileges"></a>
<a id="schema_SellingPrivileges"></a>
<a id="tocSsellingprivileges"></a>
<a id="tocssellingprivileges"></a>

```json
{
  "sellerRegistrationCompleted": true,
  "sellingLimit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "quantity": 0
  }
}
```

This type is used by the base response of the <b>getPrivileges</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sellerRegistrationCompleted|boolean|false|none|If this field is returned as <code>true</code>, the seller's registration is completed. If this field is returned as <code>false</code>, the registration process is not complete.|
|sellingLimit|[SellingLimit](#schemasellinglimit)|false|none|This container lists the monthly cap for the quantity of items sold and total sales amount allowed for the seller's account. This container may not be returned if a seller does not have a monthly cap for total quantity sold and total sales amount.|

<h2 id="tocS_SetFulfillmentPolicyResponse">SetFulfillmentPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetfulfillmentpolicyresponse"></a>
<a id="schema_SetFulfillmentPolicyResponse"></a>
<a id="tocSsetfulfillmentpolicyresponse"></a>
<a id="tocssetfulfillmentpolicyresponse"></a>

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "freightShipping": true,
  "fulfillmentPolicyId": "string",
  "globalShipping": true,
  "handlingTime": {
    "unit": "string",
    "value": 0
  },
  "localPickup": true,
  "marketplaceId": "string",
  "name": "string",
  "pickupDropOff": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingOptions": [
    {
      "costType": "string",
      "insuranceFee": {
        "currency": "string",
        "value": "string"
      },
      "insuranceOffered": true,
      "optionType": "string",
      "packageHandlingCost": {
        "currency": "string",
        "value": "string"
      },
      "rateTableId": "string",
      "shippingDiscountProfileId": "string",
      "shippingPromotionOffered": true,
      "shippingServices": [
        {
          "additionalShippingCost": {
            "currency": "string",
            "value": "string"
          },
          "buyerResponsibleForPickup": true,
          "buyerResponsibleForShipping": true,
          "cashOnDeliveryFee": {
            "currency": "string",
            "value": "string"
          },
          "freeShipping": true,
          "shipToLocations": {
            "regionExcluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ],
            "regionIncluded": [
              {
                "regionName": "string",
                "regionType": "string"
              }
            ]
          },
          "shippingCarrierCode": "string",
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingServiceCode": "string",
          "sortOrder": 0,
          "surcharge": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  ],
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

Complex type that that gets populated with a response containing a fulfillment policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypes|[[CategoryType](#schemacategorytype)]|false|none|This container indicates whether the fulfillment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|description|string|false|none|A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250|
|freightShipping|boolean|false|none|If returned as <code>true</code>, the seller offers freight shipping. Freight shipping can be used for large items over 150 lbs.|
|fulfillmentPolicyId|string|false|none|A unique eBay-assigned ID for a fulfillment business policy. This ID is generated when the policy is created.|
|globalShipping|boolean|false|none|If returned as <code>true</code>, the eBay Global Shipping Program will be used by the seller to ship items to international locations.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span>|
|handlingTime|[TimeDuration](#schematimeduration)|false|none|Specifies the maximum number of business days the seller commits to for preparing and shipping an order after receiving a cleared payment for the order. This time does not include the transit time it takes the shipping carrier to deliver the order. <p>If only local pickup or freight shipping is available for the item, this container may not get returned.</p>|
|localPickup|boolean|false|none|If returned as <code>true</code>, local pickup is available for this policy.|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which this fulfillment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|A seller-defined name for this fulfillment business policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64|
|pickupDropOff|boolean|false|none|If returned as <code>true</code>, the seller offers the "Click and Collect" option. <br/><br/>Currently, "Click and Collect" is available only to large retail merchants the eBay AU and UK marketplaces.|
|shipToLocations|[RegionSet](#schemaregionset)|false|none|This container consists of the <b>regionIncluded</b> and <b>regionExcluded</b> containers, which define the geographical regions/countries/states or provinces/domestic regions where the seller does and doesn't ship to with this fulfillment policy.|
|shippingOptions|[[ShippingOption](#schemashippingoption)]|false|none|This array is used to provide detailed information on the domestic and international shipping options available for the policy. A separate <b>ShippingOption</b> object covers domestic shipping service options and international shipping service options (if the seller ships to international locations). <br /><br />The <b>optionType</b> field indicates whether the <b>ShippingOption</b> object applies to domestic or international shipping, and the <b>costType</b> field indicates whether flat-rate shipping or calculated shipping will be used. <p>A separate <b>ShippingServices</b> object is used to specify cost and other details for every available domestic and international shipping service option. </p>|
|warnings|[[Error](#schemaerror)]|false|none|An array of one or more errors or warnings that were generated during the processing of the request. If there were no issues with the request, this array will return empty.|

<h2 id="tocS_SetPaymentPolicyResponse">SetPaymentPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetpaymentpolicyresponse"></a>
<a id="schema_SetPaymentPolicyResponse"></a>
<a id="tocSsetpaymentpolicyresponse"></a>
<a id="tocssetpaymentpolicyresponse"></a>

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "deposit": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "dueIn": {
      "unit": "string",
      "value": 0
    },
    "paymentMethods": [
      {
        "brands": [
          "string"
        ],
        "paymentMethodType": "string",
        "recipientAccountReference": {
          "referenceId": "string",
          "referenceType": "string"
        }
      }
    ]
  },
  "description": "string",
  "fullPaymentDueIn": {
    "unit": "string",
    "value": 0
  },
  "immediatePay": true,
  "marketplaceId": "string",
  "name": "string",
  "paymentInstructions": "string",
  "paymentMethods": [
    {
      "brands": [
        "string"
      ],
      "paymentMethodType": "string",
      "recipientAccountReference": {
        "referenceId": "string",
        "referenceType": "string"
      }
    }
  ],
  "paymentPolicyId": "string",
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

Complex type that that gets populated with a response containing a payment policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypes|[[CategoryType](#schemacategorytype)]|false|none|This container indicates whether the payment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.|
|deposit|[Deposit](#schemadeposit)|false|none|This container is only returned if the seller just created or updated a motor vehicles payment business policy and requires buyers to pay an initial deposit after they commit to buying a motor vehicle.|
|description|string|false|none|A seller-defined description of the payment business policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250|
|fullPaymentDueIn|[TimeDuration](#schematimeduration)|false|none|The number of days (after the buyer commits to buy) that a buyer has to pay the remaining balance of a motor vehicle transaction. Sellers can set this value to 3, 7, 10, or 14 days.<p class="tablenote"><b>Note:</b> This value is always returned if <b>categoryTypes</b> is set to <code>MOTORS_VEHICLES</code>.</p> |
|immediatePay|boolean|false|none|The value returned in this field will reflect the value set by the seller in the <b>immediatePay</b> request field. A value of <code>true</code> indicates that immediate payment is required from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer is using the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br />It is possible for the seller to set this field as <code>true</code> in the payment business policy, but it will not apply in some scenarios. For example, immediate payment is not applicable for auction listings that have a winning bidder, for buyer purchases that involve the Best Offer feature, or for transactions that happen offline between the buyer and seller.|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64|
|paymentInstructions|string|false|none|<p class="tablenote"><b>Note:</b> NO LONGER SUPPORTED. Although this field may be returned for some older payment business policies, payment instructions are no longer supported by payment business policies. If this field is returned, it can be ignored and these payment instructions will not appear in any listings that use the corresponding business policy.</p>A free-form string field that allows sellers to add detailed payment instructions to their listings.|
|paymentMethods|[[PaymentMethod](#schemapaymentmethod)]|false|none|This array shows the available payment methods that the seller has set for the payment business policy.<br /><br />Sellers do not have to specify any electronic payment methods for listings, so this array will often be returned empty unless the payment business policy is intended for motor vehicle listings or other items in categories where offline payments are required or supported.|
|paymentPolicyId|string|false|none|A unique eBay-assigned ID for a payment business policy. This ID is generated when the policy is created.|
|warnings|[[Error](#schemaerror)]|false|none|An array of one or more errors or warnings that were generated during the processing of the request. If there were no issues with the request, this array will return empty.|

<h2 id="tocS_SetReturnPolicyResponse">SetReturnPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetreturnpolicyresponse"></a>
<a id="schema_SetReturnPolicyResponse"></a>
<a id="tocSsetreturnpolicyresponse"></a>
<a id="tocssetreturnpolicyresponse"></a>

```json
{
  "categoryTypes": [
    {
      "default": true,
      "name": "string"
    }
  ],
  "description": "string",
  "extendedHolidayReturnsOffered": true,
  "internationalOverride": {
    "returnMethod": "string",
    "returnPeriod": {
      "unit": "string",
      "value": 0
    },
    "returnShippingCostPayer": "string",
    "returnsAccepted": true
  },
  "marketplaceId": "string",
  "name": "string",
  "refundMethod": "string",
  "restockingFeePercentage": "string",
  "returnInstructions": "string",
  "returnMethod": "string",
  "returnPeriod": {
    "unit": "string",
    "value": 0
  },
  "returnPolicyId": "string",
  "returnShippingCostPayer": "string",
  "returnsAccepted": true,
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

A complex type that is populated with a response containing a return policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypes|[[CategoryType](#schemacategorytype)]|false|none|This field always returns <code>ALL_EXCLUDING_MOTORS_VEHICLES</code> for return business policies, since return business policies are not applicable to motor vehicle listings.|
|description|string|false|none|A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250|
|extendedHolidayReturnsOffered|boolean|false|none|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. This field should no longer be returned.</p> |
|internationalOverride|[InternationalReturnOverrideType](#schemainternationalreturnoverridetype)|false|none|This container is used by the seller to specify a separate  international return policy, and will only be returned if the seller has set a separate return policy for international orders. If a separate international return policy is not defined by a seller, all of the domestic return policy settings will also apply to international orders.|
|marketplaceId|string|false|none|The ID of the eBay marketplace to which this return business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64|
|refundMethod|string|false|none|If a seller indicates that they will accept buyer returns, this value will be <code>MONEY_BACK</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a>|
|restockingFeePercentage|string|false|none|<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns.</p>|
|returnInstructions|string|false|none|This text-based field provides more details on seller-specified return instructions. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE)|
|returnMethod|string|false|none|This field will be returned if the seller is willing and able to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a>|
|returnPeriod|[TimeDuration](#schematimeduration)|false|none|This container specifies the amount of days that the buyer has to return the item after receiving it. The return period begins when the item is marked "delivered" at the buyer's specified ship-to location. This container will be returned unless the business policy states that the seller does not accept returns.|
|returnPolicyId|string|false|none|A unique eBay-assigned ID for a return business policy. This ID is generated when the policy is created.|
|returnShippingCostPayer|string|false|none|This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Note that the seller is always responsible for return shipping costs for SNAD-related issues.  <br/><br/>This container will be returned unless the business policy states that the seller does not accept returns. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a>|
|returnsAccepted|boolean|false|none|If set to <code>true</code>, the seller accepts returns. If set to <code>false</code>, this field indicates that the seller does not accept returns.|
|warnings|[[Error](#schemaerror)]|false|none|An array of one or more errors or warnings that were generated during the processing of the request. If there were no issues with the request, this array will return empty.|

<h2 id="tocS_ShippingOption">ShippingOption</h2>
<!-- backwards compatibility -->
<a id="schemashippingoption"></a>
<a id="schema_ShippingOption"></a>
<a id="tocSshippingoption"></a>
<a id="tocsshippingoption"></a>

```json
{
  "costType": "string",
  "insuranceFee": {
    "currency": "string",
    "value": "string"
  },
  "insuranceOffered": true,
  "optionType": "string",
  "packageHandlingCost": {
    "currency": "string",
    "value": "string"
  },
  "rateTableId": "string",
  "shippingDiscountProfileId": "string",
  "shippingPromotionOffered": true,
  "shippingServices": [
    {
      "additionalShippingCost": {
        "currency": "string",
        "value": "string"
      },
      "buyerResponsibleForPickup": true,
      "buyerResponsibleForShipping": true,
      "cashOnDeliveryFee": {
        "currency": "string",
        "value": "string"
      },
      "freeShipping": true,
      "shipToLocations": {
        "regionExcluded": [
          {
            "regionName": "string",
            "regionType": "string"
          }
        ],
        "regionIncluded": [
          {
            "regionName": "string",
            "regionType": "string"
          }
        ]
      },
      "shippingCarrierCode": "string",
      "shippingCost": {
        "currency": "string",
        "value": "string"
      },
      "shippingServiceCode": "string",
      "sortOrder": 0,
      "surcharge": {
        "currency": "string",
        "value": "string"
      }
    }
  ]
}
```

This type is used by the <b>shippingOptions</b> array, which is used to provide detailed information on the domestic and international shipping options available for the policy. A separate <b>ShippingOption</b> object covers domestic shipping service options and international shipping service options (if the seller ships to international locations).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costType|string|false|none|This field defines whether the shipping cost model is <code>FLAT_RATE</code> (the same rate for all buyers, or buyers within a region if shipping rate tables are used) or <code>CALCULATED</code> (the shipping rate varies by the ship-to location and size and weight of the package). <br/><br/>This field is conditionally required if any shipping service options are specified (domestic and/or international). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingCostTypeEnum'>eBay API documentation</a>|
|insuranceFee|[Amount](#schemaamount)|false|none|This field has been deprecated. <br/><br/>Shipping insurance is offered only via a shipping carrier's shipping services and is no longer available via eBay shipping policies.|
|insuranceOffered|boolean|false|none|This field has been deprecated. <br/><br/>Shipping insurance is offered only via a shipping carrier's shipping services and is no longer available via eBay shipping policies.|
|optionType|string|false|none|This field is used to indicate if the corresponding shipping service options (under <b>shippingServices</b> array) are domestic or international shipping service options. This field is conditionally required if any shipping service options are specified (domestic and/or international). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingOptionTypeEnum'>eBay API documentation</a>|
|packageHandlingCost|[Amount](#schemaamount)|false|none|This container is used if the seller adds handling charges to domestic and/or international shipments. <br/><br/>Sellers can not specify any domestic handling charges if they offered 'free shipping' in the policy.<br/><br/>This container will only be returned if set for the policy.|
|rateTableId|string|false|none|This field is used if the seller wants to associate a domestic or international shipping rate table to the fulfillment business policy. The <a href="/api-docs/sell/account/resources/rate_table/methods/getRateTables">getRateTables</a> method can be used to retrieve shipping rate table IDs.<br/><br/>With domestic and international shipping rate tables, the seller can set different shipping costs based on shipping regions and shipping speed/level of service (one-day, expedited, standard, economy). There are also options to additional per-weight and handling charges.<br/><br/>Sellers need to be careful that shipping rate tables match the corresponding shipping service options. In other words, a domestic shipping rate table must not be specified in the same container where international shipping service options are being specified, and vice versa, and the shipping speed/level of service of the provided shipping service options should match the shipping speed/level of service options that are defined in the shipping rate tables. <br /><br />For example, if the corresponding shipping rate table defines costs for one-day shipping services, there should be at least one one-day shipping service option specified under the <b>shippingServices</b> array.<br/><br/>This field is returned if set.|
|shippingDiscountProfileId|string|false|none|This field is the unique identifier of a seller's domestic or international shipping discount profile. If a buyer satisfies the requirements of the discount rule, this buyer will receive a shipping discount for the order. <br /><br />The seller can create and manage shipping discount profiles using (Get/Set) <b>ShippingDiscountProfiles</b> calls in the <b>Trading API</b> or through the <b>Shipping Preferences</b> in <b>My eBay</b>. <br/><br/><span class="tablenote"><b>Note: </b>Initially, shipping discount profiles in the <b>Account API</b> will <i>not</i> be available to all sellers.</span>|
|shippingPromotionOffered|boolean|false|none|This boolean indicates whether or not the seller has set up a promotional shipping discount that will be available to buyers who satisfy the requirements of the shipping discount rule. <br/><br/>The seller can create and manage shipping promotional discounts using (Get/Set) <b>ShippingDiscountProfiles</b> calls in the <b>Trading API</b> or through the <b>Shipping Preferences</b> in <b>My eBay</b>. <br/><br/><span class="tablenote"><b>Note: </b>Initially, shipping discount profiles in the <b>Account API</b> will <i>not</i> be available to all sellers.</span>|
|shippingServices|[[ShippingService](#schemashippingservice)]|false|none|This array consists of the domestic or international shipping services options that are defined for the policy. The shipping service options defined under this array should match what is set in the corresponding <b>shippingOptions.optionType</b> field (which controls whether domestic or international shipping service options are being defined). If a shipping rate table is being used, the specified shipping service options should also match the shipping rate table settings (domestic or international, shipping speed/level of service, etc.) <br/><br/>Sellers can specify up to four domestic shipping services and up to five international shipping service options by using separate <b>shippingService</b> containers for each. If the seller is using the Global Shipping Program as an international option, only a total of four international shipping service options (including GSP) can be offered. <br/><br/> See <a href="/api-docs/sell/static/seller-accounts/ht_shipping-setting-shipping-carrier-and-service-values.html" target="_blank">How to set up shipping carrier and shipping service values</a>. <br /><br />To use the eBay standard envelope service (eSE), see <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using eBay standard envelope (eSE) service</a>.<br /><br />This array is conditionally required if the seller is offering one or more domestic and/or international shipping service options.|

<h2 id="tocS_ShippingService">ShippingService</h2>
<!-- backwards compatibility -->
<a id="schemashippingservice"></a>
<a id="schema_ShippingService"></a>
<a id="tocSshippingservice"></a>
<a id="tocsshippingservice"></a>

```json
{
  "additionalShippingCost": {
    "currency": "string",
    "value": "string"
  },
  "buyerResponsibleForPickup": true,
  "buyerResponsibleForShipping": true,
  "cashOnDeliveryFee": {
    "currency": "string",
    "value": "string"
  },
  "freeShipping": true,
  "shipToLocations": {
    "regionExcluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ],
    "regionIncluded": [
      {
        "regionName": "string",
        "regionType": "string"
      }
    ]
  },
  "shippingCarrierCode": "string",
  "shippingCost": {
    "currency": "string",
    "value": "string"
  },
  "shippingServiceCode": "string",
  "sortOrder": 0,
  "surcharge": {
    "currency": "string",
    "value": "string"
  }
}
```

This type is used by the <b>shippingServices</b> array, an array that provides details about every domestic and international shipping service option that is defined for the policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalShippingCost|[Amount](#schemaamount)|false|none|This container is used by the seller to cover the use case when a single buyer purchases multiple quantities of the same line item. This cost cannot exceed the corresponding <b>shippingCost</b> value. A seller will generally set this field when he/she wants to pass on a shipping discount to the buyer if that buyer purchases multiple quantities of a line item. <br /><br />The seller can ship multiple quantities of the line item in the same package and pass on the shipping savings to the buyer.<br/><br/>If this field is not set, and a buyer purchases multiple quantities of an item, the seller can technically charge the same cost set in the <b>shippingCost</b> container for each individual item, but in general, it behooves both the seller and the buyer (and saves both parties money) if they discuss combined shipping.<br/><br/>This field is not applicable to auction listings or single-quantity, fixed-price listings.<br/><br/>This container is returned if set.|
|buyerResponsibleForPickup|boolean|false|none|This field should be included and set to <code>true</code> for a motor vehicle listing if it will be the buyer's responsibility to pick up the purchased motor vehicle after full payment is made. <br /><br />This field is only applicable to motor vehicle listings. In the majority of motor vehicle listings, the seller does make the buyer responsible for pickup or shipment of the vehicle. <br/><br/>This field is returned if set.<br/><br/><b>Default</b>: false|
|buyerResponsibleForShipping|boolean|false|none|This field should be included and set to <code>true</code> for a motor vehicle listing if it will be the buyer's responsibility to arrange for shipment of a purchased motor vehicle after full payment is made. <br /><br />This field is only applicable to motor vehicle listings. In the majority of motor vehicle listings, the seller does make the buyer responsible for pickup or shipment of the vehicle. <br/><br/>This field is returned if set.<br/><br/><b>Default</b>: false|
|cashOnDeliveryFee|[Amount](#schemaamount)|false|none|This container is used if the seller charges a Cash on Delivery (COD) fee. <ul><li>This fee will only be applicable in the case of a 'local pickup', and if one of the specified offline payment methods is a 'cash on pickup' or 'cash on delivery' option. </li><li>This fee is added to the total cost of the item, and the total cost is due from the buyer upon the delivery of the item.</li></ul>This container is returned if set.|
|freeShipping|boolean|false|none|This field is included and set to <code>true</code> if the seller offers a free shipping option to the buyer. <br /><br />This field can only be included and set to <code>true</code> for the first domestic shipping service option specified in the <b>shippingServices</b> container (it is ignored if set for subsequent shipping services or for any international shipping service option). <br /><br />The first specified shipping service option has a <b>sortOrder</b> value of <code>1</code> or if the <b>sortOrderId</b> field is not used, it is the shipping service option that's specified first in the <b>shippingServices</b> container.<br/><br/>This container is returned if set.|
|shipToLocations|[RegionSet](#schemaregionset)|false|none|This container is used to set the ship-to locations applicable to the corresponding shipping service option. Although the <b>regionExcluded</b> container is defined for <b>RegionSet</b> type and could technically be used here, it is recommened that only the <b>regionIncluded</b> container be used at the shipping service level. The excluded shipping regions (if any) can instead be set up in the top-level <b>regionExcluded</b> container. <br /><br />The <b>regionIncluded</b> and <b>regionExcluded</b> containers define the geographical regions/countries/states or provinces/domestic regions where the seller does and doesn't ship to with this fulfillment policy.<br/><br/>To retrieve the valid geographical shipping region values, two-digit country values, or special domestic regions for an eBay marketplace, call <b>GeteBayDetails</b> with <b>DetailName</b> value set to <code>ExcludeShippingLocationDetails</code>, then review the <b>ExcludeShippingLocationDetails</b> containers in the response for the strings you use in the <b>regionIncluded.regionName</b> field. <ul><li>For valid geographical region names, look for the <code>ExcludeShippingLocationDetails</code> containers in the <b>GeteBayDetails</b> response where the <b>Region</b> value is <code>Worldwide</code>, and the valid values will be shown in the corresponding <b>Location</b> fields.</li> <li>For valid two-digit country codes, look for <code>ExcludeShippingLocationDetails</code> in the <b>GeteBayDetails</b> response where the <b>Region</b> value is one of the defined geographical regions, and the valid values will be shown in the corresponding <b>Location</b> fields. Alternatively, you can find the two-digit country code values in the <a href="/api-docs/sell/account/types/ba:CountryCodeEnum">CountryCodeEnum</a> type definition.</li>  <li>For valid domestic region values, look for <code>ExcludeShippingLocationDetails</code> in the <b>GeteBayDetails</b> response where the <b>Region</b> value is either <code>Domestic Location</code> or <code>Additional Locations</code>, and the valid values will be shown in the corresponding <b>Location</b> fields.</li></ul> The <code>STATE_OR_PROVINCE</code> region type is only applicable to the US and Canada, and valid values for US states are the same <a href="https://about.usps.com/who-we-are/postal-history/state-abbreviations.htm ">two-digit abbreviations</a> used by the United States Postal Service, and valid values for Canadian provinces and territories are the same <a href="https://www.canadapost-postescanada.ca/cpc/en/support/articles/addressing-guidelines/symbols-and-abbreviations.page ">two-digit abbreviations</a> used by the Canada Post.|
|shippingCarrierCode|string|false|none|This field sets/indicates the shipping carrier, such as <code>USPS</code>, <code>FedEx</code>, or <code>UPS</code>. Although this field uses the <b>string</b> type, the seller must pass in a pre-defined enumeration value here. <br /><br />For a full list of shipping carrier enum values for a specified eBay marketplace, the <b>GeteBayDetails</b> call of the <b>Trading API</b> can be used, and the <b>DetailName</b> field's value should be set to <code>ShippingCarrierDetails</code>. The enum values for each shipping carriers can be found in each <b>ShippingCarrierDetails.ShippingCarrier</b> field in the response payload.<br/><br/> This field is actually optional, as the shipping carrier is also tied into the <b>shippingServiceCode</b> enum value, and that field is required for every specified shipping service option.<br/><br/>This field is returned if set.|
|shippingCost|[Amount](#schemaamount)|false|none|This container is used to set the shipping cost to ship one item using the corresponding shipping service option. This container is conditionally required if the seller is using flat-rate shipping and is not using a domestic or international shipping rate table. <br /><br />This container is not necessary for calculated shipping, since eBay will calculate the shipping cost and display it in the View Item page based off of the potential buyer's ship-to location.<br/><br/>This value is automatically set to <code>0.0</code> for the first specified domestic shipping service option and if the corresponding <b>freeShipping</b> field is set to <code>true</code>.  <br/><br/>This container is returned if set for the policy.|
|shippingServiceCode|string|false|none|This field sets/indicates the domestic or international shipping service option, such as <code>USPSPriority</code>, <code>FedEx2Day</code>, or <code>UPS3rdDay</code>. Although this field uses the <b>string</b> type, the seller must pass in a pre-defined enumeration value here. <br /><br />For a full list of shipping service option enum values for a specified eBay marketplace, the <b>GeteBayDetails</b> call of the <b>Trading API</b> can be used, and the <b>DetailName</b> field's value should be set to <code>ShippingServiceDetails</code>. <br /><br />The enum values for each shipping service option can be found in each <b>ShippingServiceDetails.ShippingService</b> field in the response payload. The seller must make sure that the shipping service option is still valid, which is indicated by a <code>true</code> value in the corresponding <b>ValidForSellingFlow</b> boolean field. International shipping service options are typically returned at the top of the response payload, and are indicated by an <b>InternationalService</b> boolean field that reads <code>true</code>. <br /><br />The <b>InternationalService</b> boolean field is not returned at all for domestic shipping service options. <br/><br/> This field is required for every specified shipping service option.<br/><br/>This field is returned if set.|
|sortOrder|integer(int32)|false|none|The integer value set in this field controls the order of the corresponding domestic or international shipping service option in the View Item and Checkout pages. <br/><br/>Sellers can specify up to four domestic shipping services (in four separate <b>shippingService</b> containers), so valid values are 1, 2, 3, and 4. A shipping service option with a <b>sortOrder</b> value of <code>1</code> appears at the top of View Item and Checkout pages. Conversely, a shipping service option with a <b>sortOrder</b> value of <code>1</code> appears at the bottom of the list. <br/><br/>Sellers can specify up to five international shipping services (in five separate <b>shippingService</b> containers), so valid values for international shipping services are 1, 2, 3, 4, and 5. Similarly to domestic shipping service options, the <b>sortOrder</b> value of a international shipping service option controls the placement of that shipping service option in the View Item and Checkout pages. <br/><br/>If the <b>sortOrder</b> field is not supplied, the order of domestic and international shipping service options is determined by the order in which they are listed in the API call. <br/><br/><b>Min</b>: 1. <b>Max</b>: 4 (for domestic shipping service) or 5 (for international shipping service).|
|surcharge|[Amount](#schemaamount)|false|none|<span class="tablenote"> <strong>Note:</strong> DO NOT USE THIS FIELD. Shipping surcharges for domestic shipping service options can no longer be set with fulfillment business policies, except through shipping rate tables. <br /><br />To do this, a seller would set up a surcharge-based shipping rate table and specify the surcharge in that table. Then, the seller would need to associate this shipping rate table to the fulfillment business policy by specifying the unique ID of the shipping rate table through the <b>shippingOptions.rateTableId</b> field. </span>Shipping surcharges cannot be applied at all to international shipping service options.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "marketplaceId": "string",
  "subscriptionId": "string",
  "subscriptionLevel": "string",
  "subscriptionType": "string",
  "term": {
    "unit": "string",
    "value": 0
  }
}
```

This type is used by the <strong>getSubscription</strong> response container, which defines the subscription types and levels for the seller account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketplaceId|string|false|none|The marketplace with which the subscription is associated. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|subscriptionId|string|false|none|The subscription ID.|
|subscriptionLevel|string|false|none|The subscription level. For example, subscription levels for an eBay store include Starter, Basic, Featured, Anchor, and Enterprise levels.|
|subscriptionType|string|false|none|The kind of entity with which the subscription is associated, such as an eBay store. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:SubscriptionTypeEnum'>eBay API documentation</a>|
|term|[TimeDuration](#schematimeduration)|false|none|The term of the subscription plan (typically in months).|

<h2 id="tocS_SubscriptionResponse">SubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionresponse"></a>
<a id="schema_SubscriptionResponse"></a>
<a id="tocSsubscriptionresponse"></a>
<a id="tocssubscriptionresponse"></a>

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "subscriptions": [
    {
      "marketplaceId": "string",
      "subscriptionId": "string",
      "subscriptionLevel": "string",
      "subscriptionType": "string",
      "term": {
        "unit": "string",
        "value": 0
      }
    }
  ],
  "total": 0
}
```

This type is used by the response payload for the <b>getSubscription</b> method.<br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getSubscription</b>, so all of the pagination-related fields are for future use.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|This field is for future use.|
|limit|integer(int32)|false|none|This field is for future use.|
|next|string|false|none|This field is for future use.|
|subscriptions|[[Subscription](#schemasubscription)]|false|none|An array of subscriptions associated with the seller account.|
|total|integer(int32)|false|none|The total number of subscriptions displayed on the current page of results.|

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

A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|false|none|These enum values represent the time measurement unit, such as <code>DAY</code>. A span of time is defined when you apply the value specified in the <b>value</b> field to the value specified for <b>unit</b>. <br/><br/>See <b>TimeDurationUnitEnum</b> for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:TimeDurationUnitEnum'>eBay API documentation</a>|
|value|integer(int32)|false|none|An integer that represents an amount of time, as measured by the time-measurement unit specified in the <b>unit</b> field.|
