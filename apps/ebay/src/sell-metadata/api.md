<h1 id="metadata-api">Metadata API v1.6.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Metadata API has operations that retrieve configuration details pertaining to the different eBay marketplaces. In addition to marketplace information, the API also has operations that get information that helps sellers list items on eBay.

Base URLs:

* <a href="https://api.ebay.com/sell/metadata/v1">https://api.ebay.com/sell/metadata/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.inventory|View and manage your inventory and offers|

    - Flow: clientCredentials
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope|View public data from eBay|

<h1 id="metadata-api-country">country</h1>

## getSalesTaxJurisdictions

<a id="opIdgetSalesTaxJurisdictions"></a>

> Code samples

```bash
curl https://api.ebay.com/country/string/sales_tax_jurisdiction \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /country/{countryCode}/sales_tax_jurisdiction`

This method retrieves all the sales tax jurisdictions for the country that you specify in the <b>countryCode</b> path parameter. Countries with valid sales tax jurisdictions are Canada and the US.  <br/><br/>The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the <b>createOrReplaceSalesTax</b> in the <b>Account API</b> call to configure the tax tables for the jurisdictions you sell to.

<h3 id="getsalestaxjurisdictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryCode|path|string|true|This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> country code for the country whose jurisdictions you want to retrieve. eBay provides sales tax jurisdiction information for Canada and the United States.Valid values for this path parameter are <code>CA</code> and <code>US</code>.|

> Example responses

> 200 Response

```json
{
  "salesTaxJurisdictions": [
    {
      "salesTaxJurisdictionId": "string"
    }
  ]
}
```

<h3 id="getsalestaxjurisdictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SalesTaxJurisdictions](#schemasalestaxjurisdictions)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

<h1 id="metadata-api-marketplace">marketplace</h1>

## getAutomotivePartsCompatibilityPolicies

<a id="opIdgetAutomotivePartsCompatibilityPolicies"></a>

> Code samples

```bash
curl https://api.ebay.com/marketplace/string/get_automotive_parts_compatibility_policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketplace/{marketplace_id}/get_automotive_parts_compatibility_policies`

This method returns the eBay policies that define how to list automotive-parts-compatibility items in the categories of a specific marketplace.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

<h3 id="getautomotivepartscompatibilitypolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('\|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100\|101\|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>|
|marketplace_id|path|string|true|This path parameter specifies the eBay marketplace for which policy information is retrieved.  <br><br><b>Note:</b> Only the following eBay marketplaces support automotive parts compatibility: <ul> <li>EBAY_US</li> <li>EBAY_AU</li> <li>EBAY_CA</li> <li>EBAY_DE</li> <li>EBAY_ES</li> <li>EBAY_FR</li> <li>EBAY_GB</li> <li>EBAY_IT</li><ul>|

> Example responses

> 200 Response

```json
{
  "automotivePartsCompatibilityPolicies": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "compatibilityBasedOn": "string",
      "compatibleVehicleTypes": [
        "string"
      ],
      "maxNumberOfCompatibleVehicles": 0
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

<h3 id="getautomotivepartscompatibilitypolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AutomotivePartsCompatibilityPolicyResponse](#schemaautomotivepartscompatibilitypolicyresponse)|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

## getExtendedProducerResponsibilityPolicies

<a id="opIdgetExtendedProducerResponsibilityPolicies"></a>

> Code samples

```bash
curl https://api.ebay.com/marketplace/string/get_extended_producer_responsibility_policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketplace/{marketplace_id}/get_extended_producer_responsibility_policies`

This method returns the Extended Producer Responsibility policies for one, multiple, or all eBay categories in an eBay marketplace.<br /><br />The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the filter query parameter, this method will return metadata on every applicable category for the specified marketplace.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Currently, the Extended Producer Responsibility policies are only applicable to a limited number of categories, and only in the EBAY_FR marketplace.</span><br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

<h3 id="getextendedproducerresponsibilitypolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|A query parameter that can be used to limit the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree that should be returned.<br /><br />When a <b>categoryId</b> value is specified, the returned category tree includes the policies for that parent node, as well as the policies for any child nodes below that parent node.<br /><br />Pass in the <b>categoryId</b> values using a URL-encoded, pipe-separated ('\|') list. For example:<br /><br /><code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code><br /><br /><b>Maximum:</b> 50|
|marketplace_id|path|string|true|A path parameter that specifies the eBay marketplace for which policy information shall be retrieved.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> See <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a> for a list of valid eBay marketplace IDs.</span>|

> Example responses

> 200 Response

```json
{
  "extendedProducerResponsibilities": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "supportedAttributes": [
        {
          "enabledForVariations": true,
          "name": "string",
          "usage": "string"
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

<h3 id="getextendedproducerresponsibilitypolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExtendedProducerResponsibilityPolicyResponse](#schemaextendedproducerresponsibilitypolicyresponse)|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

## getHazardousMaterialsLabels

<a id="opIdgetHazardousMaterialsLabels"></a>

> Code samples

```bash
curl https://api.ebay.com/marketplace/string/get_hazardous_materials_labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketplace/{marketplace_id}/get_hazardous_materials_labels`

This method returns hazardous materials label information for the specified eBay marketplace. The information includes IDs, descriptions, and URLs (as applicable) for the available signal words, statements, and pictograms. The returned statements are localized for the default langauge of the marketplace. If a marketplace does not support hazardous materials label information, an error is returned.<p>This information is used by the seller to add hazardous materials label related information to their listings (see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html'>Specifying hazardous material related information</a>).</p>

<h3 id="gethazardousmaterialslabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|path|string|true|A path parameter that specifies the eBay marketplace for which hazardous materials label information shall be retrieved.<p><span class="tablenote"><strong>Tip:</strong> See <a href="/api-docs/static/rest-request-components.html#marketpl" >Request components</a> for a list of valid eBay marketplace IDs.</span></p>|

> Example responses

> 200 Response

```json
{
  "pictograms": [
    {
      "pictogramDescription": "string",
      "pictogramId": "string",
      "pictogramUrl": "string"
    }
  ],
  "signalWords": [
    {
      "signalWordDescription": "string",
      "signalWordId": "string"
    }
  ],
  "statements": [
    {
      "statementDescription": "string",
      "statementId": "string"
    }
  ]
}
```

<h3 id="gethazardousmaterialslabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[HazardousMaterialDetailsResponse](#schemahazardousmaterialdetailsresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

## getItemConditionPolicies

<a id="opIdgetItemConditionPolicies"></a>

> Code samples

```bash
curl https://api.ebay.com/marketplace/string/get_item_condition_policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketplace/{marketplace_id}/get_item_condition_policies`

This method returns item condition metadata on one, multiple, or all eBay categories on an eBay marketplace. This metadata consists of the different item conditions (with IDs) that an eBay category supports, and a boolean to indicate if an eBay category requires an item condition. <br><br>The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the <b>filter</b> query parameter, this method will return metadata on every single category for the specified marketplace. If you only want to view item condition metadata for one eBay category or a select group of eBay categories, you can pass in up to 50 eBay category ID through the <b>filter</b> query parameter.<br /><br /><span class="tablenote"><span style="color:#FF0000"><strong>Important:</strong></span> <b>Certified - Refurbished</b>-eligible sellers, and sellers who are eligible to list with the new values (EXCELLENT_REFURBISHED, VERY_GOOD_REFURBISHED, and GOOD_REFURBISHED) must use an OAuth token created with the <a href="/api-docs/static/oauth-authorization-code-grant.html" target="_blank">authorization code grant flow</a> and <b>https://api.ebay.com/oauth/api_scope/sell.inventory</b> scope in order to retrieve the refurbished conditions for the relevant categories.<br/><br/>See the <a href="/api-docs/sell/static/metadata/condition-id-values.html#Category " target="_blank">eBay Refurbished Program - Category and marketplace support</a> topic for the categories and marketplaces that support these refurbished conditions<br/><br/>These restricted item conditions will not be returned if an OAuth token created with the <a href="/api-docs/static/oauth-client-credentials-grant.html" target="_blank">client credentials grant flow</a> and <b>https://api.ebay.com/oauth/api_scope</b> scope is used, or if any seller is not eligible to list with that item condition. <br/><br/> See the <a href="/api-docs/static/oauth-scopes.html" target="_blank">Specifying OAuth scopes</a> topic for more information about specifying scopes.</span><br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

<h3 id="getitemconditionpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('\|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100\|101\|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>|
|marketplace_id|path|string|true|This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a>.|

> Example responses

> 200 Response

```json
{
  "itemConditionPolicies": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "itemConditionRequired": true,
      "itemConditions": [
        {
          "conditionDescription": "string",
          "conditionId": "string",
          "usage": "string"
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

<h3 id="getitemconditionpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ItemConditionPolicyResponse](#schemaitemconditionpolicyresponse)|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/sell.inventory )
</aside>

## getListingStructurePolicies

<a id="opIdgetListingStructurePolicies"></a>

> Code samples

```bash
curl https://api.ebay.com/marketplace/string/get_listing_structure_policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketplace/{marketplace_id}/get_listing_structure_policies`

This method returns the eBay policies that define the allowed listing structures for the categories of a specific marketplace. The listing-structure policies currently pertain to whether or not you can list items with variations.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

<h3 id="getlistingstructurepolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('\|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100\|101\|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>|
|marketplace_id|path|string|true|This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a>.|

> Example responses

> 200 Response

```json
{
  "listingStructurePolicies": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "variationsSupported": true
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

<h3 id="getlistingstructurepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListingStructurePolicyResponse](#schemalistingstructurepolicyresponse)|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

## getNegotiatedPricePolicies

<a id="opIdgetNegotiatedPricePolicies"></a>

> Code samples

```bash
curl https://api.ebay.com/marketplace/string/get_negotiated_price_policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketplace/{marketplace_id}/get_negotiated_price_policies`

This method returns the eBay policies that define the supported negotiated price features (like "best offer") for the categories of a specific marketplace.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

<h3 id="getnegotiatedpricepolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('\|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100\|101\|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>|
|marketplace_id|path|string|true|This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a>.|

> Example responses

> 200 Response

```json
{
  "negotiatedPricePolicies": [
    {
      "bestOfferAutoAcceptEnabled": true,
      "bestOfferAutoDeclineEnabled": true,
      "bestOfferCounterEnabled": true,
      "categoryId": "string",
      "categoryTreeId": "string"
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

<h3 id="getnegotiatedpricepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NegotiatedPricePolicyResponse](#schemanegotiatedpricepolicyresponse)|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

## getReturnPolicies

<a id="opIdgetReturnPolicies"></a>

> Code samples

```bash
curl https://api.ebay.com/marketplace/string/get_return_policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketplace/{marketplace_id}/get_return_policies`

This method returns the eBay policies that define whether or not you must include a return policy for the items you list in the categories of a specific marketplace, plus the guidelines for creating domestic and international return policies in the different eBay categories.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

<h3 id="getreturnpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('\|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100\|101\|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>|
|marketplace_id|path|string|true|This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a>.|

> Example responses

> 200 Response

```json
{
  "returnPolicies": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "domestic": {
        "policyDescriptionEnabled": true,
        "refundMethods": [
          "string"
        ],
        "returnMethods": [
          "string"
        ],
        "returnPeriods": [
          {
            "unit": "string",
            "value": 0
          }
        ],
        "returnShippingCostPayers": [
          "string"
        ],
        "returnsAcceptanceEnabled": true
      },
      "international": {
        "policyDescriptionEnabled": true,
        "refundMethods": [
          "string"
        ],
        "returnMethods": [
          "string"
        ],
        "returnPeriods": [
          {
            "unit": "string",
            "value": 0
          }
        ],
        "returnShippingCostPayers": [
          "string"
        ],
        "returnsAcceptanceEnabled": true
      },
      "required": true
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

<h3 id="getreturnpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReturnPolicyResponse](#schemareturnpolicyresponse)|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

# Schemas

<h2 id="tocS_AutomotivePartsCompatibilityPolicy">AutomotivePartsCompatibilityPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaautomotivepartscompatibilitypolicy"></a>
<a id="schema_AutomotivePartsCompatibilityPolicy"></a>
<a id="tocSautomotivepartscompatibilitypolicy"></a>
<a id="tocsautomotivepartscompatibilitypolicy"></a>

```json
{
  "categoryId": "string",
  "categoryTreeId": "string",
  "compatibilityBasedOn": "string",
  "compatibleVehicleTypes": [
    "string"
  ],
  "maxNumberOfCompatibleVehicles": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|The category ID to which the automotive-parts-compatibility policies apply.|
|categoryTreeId|string|false|none|A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.|
|compatibilityBasedOn|string|false|none|Indicates whether the category supports parts compatibility by either <code>ASSEMBLY</code> or by <code>SPECIFICATION</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:CompatibilityTypeEnum'>eBay API documentation</a>|
|compatibleVehicleTypes|[string]|false|none|Indicates the compatibility classification of the part based on high-level vehicle types.|
|maxNumberOfCompatibleVehicles|integer(int32)|false|none|Specifies the maximum number of compatible vehicle-applications allowed per item.|

<h2 id="tocS_AutomotivePartsCompatibilityPolicyResponse">AutomotivePartsCompatibilityPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaautomotivepartscompatibilitypolicyresponse"></a>
<a id="schema_AutomotivePartsCompatibilityPolicyResponse"></a>
<a id="tocSautomotivepartscompatibilitypolicyresponse"></a>
<a id="tocsautomotivepartscompatibilitypolicyresponse"></a>

```json
{
  "automotivePartsCompatibilityPolicies": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "compatibilityBasedOn": "string",
      "compatibleVehicleTypes": [
        "string"
      ],
      "maxNumberOfCompatibleVehicles": 0
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automotivePartsCompatibilityPolicies|[[AutomotivePartsCompatibilityPolicy](#schemaautomotivepartscompatibilitypolicy)]|false|none|A list of category IDs and the automotive-parts-compatibility policies for each of the listed categories.|
|warnings|[[Error](#schemaerror)]|false|none|A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.|

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

<h2 id="tocS_ExtendedProducerResponsibility">ExtendedProducerResponsibility</h2>
<!-- backwards compatibility -->
<a id="schemaextendedproducerresponsibility"></a>
<a id="schema_ExtendedProducerResponsibility"></a>
<a id="tocSextendedproducerresponsibility"></a>
<a id="tocsextendedproducerresponsibility"></a>

```json
{
  "enabledForVariations": true,
  "name": "string",
  "usage": "string"
}
```

A type that defines the attributes of an Extended Producer Responsibility policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabledForVariations|boolean|false|none|An indication of whether the attribute can be enabled for listing variations.<br /><br />If the value is <code>true</code>, the attribute may be specified at the variation level.|
|name|string|false|none|The name of the attribute included in the policy. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:ExtendedProducerResponsibilityEnum'>eBay API documentation</a>|
|usage|string|false|none|The usage guidelines for the attribute, in the specified marketplace. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:GenericUsageEnum'>eBay API documentation</a>|

<h2 id="tocS_ExtendedProducerResponsibilityPolicy">ExtendedProducerResponsibilityPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaextendedproducerresponsibilitypolicy"></a>
<a id="schema_ExtendedProducerResponsibilityPolicy"></a>
<a id="tocSextendedproducerresponsibilitypolicy"></a>
<a id="tocsextendedproducerresponsibilitypolicy"></a>

```json
{
  "categoryId": "string",
  "categoryTreeId": "string",
  "supportedAttributes": [
    {
      "enabledForVariations": true,
      "name": "string",
      "usage": "string"
    }
  ]
}
```

A type that defines the Extended Producer Responsibility policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|The unique identifier for the category under which the policy applies.|
|categoryTreeId|string|false|none|The unique identifier for the category tree under which the policy applies.|
|supportedAttributes|[[ExtendedProducerResponsibility](#schemaextendedproducerresponsibility)]|false|none|The details regarding the attributes included in the policy, such as their usage guidelines and whether they can be specified at the listing variation level.|

<h2 id="tocS_ExtendedProducerResponsibilityPolicyResponse">ExtendedProducerResponsibilityPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextendedproducerresponsibilitypolicyresponse"></a>
<a id="schema_ExtendedProducerResponsibilityPolicyResponse"></a>
<a id="tocSextendedproducerresponsibilitypolicyresponse"></a>
<a id="tocsextendedproducerresponsibilitypolicyresponse"></a>

```json
{
  "extendedProducerResponsibilities": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "supportedAttributes": [
        {
          "enabledForVariations": true,
          "name": "string",
          "usage": "string"
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

A type that defines the response fields for the <b>getExtendedProducerResponsibilityPolicies</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extendedProducerResponsibilities|[[ExtendedProducerResponsibilityPolicy](#schemaextendedproducerresponsibilitypolicy)]|false|none|An array of response fields detailing the Extended Producer Responsibility policies supported for the specified marketplace.|
|warnings|[[Error](#schemaerror)]|false|none|A collection of warnings generated for the request.|

<h2 id="tocS_HazardStatement">HazardStatement</h2>
<!-- backwards compatibility -->
<a id="schemahazardstatement"></a>
<a id="schema_HazardStatement"></a>
<a id="tocShazardstatement"></a>
<a id="tocshazardstatement"></a>

```json
{
  "statementDescription": "string",
  "statementId": "string"
}
```

A type that describes hazard statements for hazardous materials labels

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statementDescription|string|false|none|The description of the statement localized to the default language of the marketplace. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Hazard'>Hazard statement sample values</a>.|
|statementId|string|false|none|The identifier of the statement. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Hazard'>Hazard statement sample values</a>.|

<h2 id="tocS_HazardousMaterialDetailsResponse">HazardousMaterialDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemahazardousmaterialdetailsresponse"></a>
<a id="schema_HazardousMaterialDetailsResponse"></a>
<a id="tocShazardousmaterialdetailsresponse"></a>
<a id="tocshazardousmaterialdetailsresponse"></a>

```json
{
  "pictograms": [
    {
      "pictogramDescription": "string",
      "pictogramId": "string",
      "pictogramUrl": "string"
    }
  ],
  "signalWords": [
    {
      "signalWordDescription": "string",
      "signalWordId": "string"
    }
  ],
  "statements": [
    {
      "statementDescription": "string",
      "statementId": "string"
    }
  ]
}
```

A type that defines the response fields for the <b>getHazardousMaterialsLabels</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pictograms|[[Pictogram](#schemapictogram)]|false|none|This array contains of available hazardous materials hazard pictograms for the specified marketplace.|
|signalWords|[[SignalWord](#schemasignalword)]|false|none|This array contains available hazardous materials signal words for the specified marketplace.|
|statements|[[HazardStatement](#schemahazardstatement)]|false|none|This array contains available hazardous materials hazard statements for the specified marketplace.|

<h2 id="tocS_ItemCondition">ItemCondition</h2>
<!-- backwards compatibility -->
<a id="schemaitemcondition"></a>
<a id="schema_ItemCondition"></a>
<a id="tocSitemcondition"></a>
<a id="tocsitemcondition"></a>

```json
{
  "conditionDescription": "string",
  "conditionId": "string",
  "usage": "string"
}
```

<span class="tablenote"><b>Note: </b>In all eBay marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', and not 'Manufacturer Refurbished'. To list an item as 'Certified Refurbished', a seller must be pre-qualified by eBay for this feature. Any seller who is not eligible for this feature will be blocked if they try to create a new listing or revise an existing listing with this item condition. Any active listings on any eBay marketplace that had 'Manufacturer Refurbished' as the item condition should have been automatically updated by eBay to the 'Seller Refurbished' item condition (Condition ID 2500). <br><br> Any seller that is interested in eligibility requirements to list with 'Certified Refurbished' should see the <a href="https://pages.ebay.com/seller-center/listing-and-marketing/certified-refurbished-program.html " target="_blank">Certified refurbished program</a> page in Seller Center. </span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditionDescription|string|false|none|The human-readable label for the condition (e.g., "New"). This value is typically localized for each site.  <br><br>Note that the display name can vary by category. For example, the description for condition ID <code>1000</code> could be called "New: with Tags" in one category and "Brand New" in another. For details on condition IDs and descriptions, see <a href='/api-docs/sell/static/metadata/condition-id-values.html'>Item condition ID and name values</a>.|
|conditionId|string|false|none|The ID value of the selected item condition. For information on the supported condition ID values, see <a href='/api-docs/sell/static/metadata/condition-id-values.html'>Item condition ID and name values</a>.|
|usage|string|false|none|The value returned in this field indicates if there are any usage restrictions or requirements for the corresponding item condition in the corresponding category.<br /><br /><span class="tablenote"><b>Note:</b> Currently, the only supported value is 'RESTRICTED', and this field will only be returned for the following conditions: 2000, 2010, 2020, 2030. Sellers must be pre-approved to use any of these item conditions.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:UsageEnum'>eBay API documentation</a>|

<h2 id="tocS_ItemConditionPolicy">ItemConditionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaitemconditionpolicy"></a>
<a id="schema_ItemConditionPolicy"></a>
<a id="tocSitemconditionpolicy"></a>
<a id="tocsitemconditionpolicy"></a>

```json
{
  "categoryId": "string",
  "categoryTreeId": "string",
  "itemConditionRequired": true,
  "itemConditions": [
    {
      "conditionDescription": "string",
      "conditionId": "string",
      "usage": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|The category ID to which the item-condition policy applies.|
|categoryTreeId|string|false|none|A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.|
|itemConditionRequired|boolean|false|none|This flag denotes whether or not you must list the item condition in a listing for the specified category. If set to <code>true</code>, you must specify an item condition for the associated category.|
|itemConditions|[[ItemCondition](#schemaitemcondition)]|false|none|The item-condition values allowed in the category.<br /><br /><span class="tablenote"><b>Note:</b> The ‘Seller Refurbished’ item condition (condition ID 2500) has been replaced by the 'Excellent - Refurbished', 'Very Good - Refurbished', and 'Good - Refurbished' item conditions in a select number of eBay marketplaces and categories. See the <a href="/api-docs/sell/static/metadata/condition-id-values.html#Category " target="_blank "> eBay Refurbished Program - Category and marketplace support</a> topic for more details.<br/><br/>Similar to the ‘Certified Refurbished’ item condition (condition ID 2000), a seller’s OAuth user token will have to be used instead of an OAuth application token, since each seller must  go through an application and qualification process before using any of these new refurbished item conditions in supported categories. If a seller is not qualified to use the new refurbished item conditions, these item condition values will not be returned by <b>getItemConditionPolicies</b>.</span>|

<h2 id="tocS_ItemConditionPolicyResponse">ItemConditionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaitemconditionpolicyresponse"></a>
<a id="schema_ItemConditionPolicyResponse"></a>
<a id="tocSitemconditionpolicyresponse"></a>
<a id="tocsitemconditionpolicyresponse"></a>

```json
{
  "itemConditionPolicies": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "itemConditionRequired": true,
      "itemConditions": [
        {
          "conditionDescription": "string",
          "conditionId": "string",
          "usage": "string"
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemConditionPolicies|[[ItemConditionPolicy](#schemaitemconditionpolicy)]|false|none|A list of category IDs and the policies for how to indicate an item's condition in each of the listed categories.|
|warnings|[[Error](#schemaerror)]|false|none|A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.|

<h2 id="tocS_ListingStructurePolicy">ListingStructurePolicy</h2>
<!-- backwards compatibility -->
<a id="schemalistingstructurepolicy"></a>
<a id="schema_ListingStructurePolicy"></a>
<a id="tocSlistingstructurepolicy"></a>
<a id="tocslistingstructurepolicy"></a>

```json
{
  "categoryId": "string",
  "categoryTreeId": "string",
  "variationsSupported": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|The category ID to which the listing-structure policy applies.|
|categoryTreeId|string|false|none|A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.|
|variationsSupported|boolean|false|none|This flag denotes whether or not the associated category supports listings with item variations. If set to <code>true</code>, the category does support item variations.|

<h2 id="tocS_ListingStructurePolicyResponse">ListingStructurePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistingstructurepolicyresponse"></a>
<a id="schema_ListingStructurePolicyResponse"></a>
<a id="tocSlistingstructurepolicyresponse"></a>
<a id="tocslistingstructurepolicyresponse"></a>

```json
{
  "listingStructurePolicies": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "variationsSupported": true
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listingStructurePolicies|[[ListingStructurePolicy](#schemalistingstructurepolicy)]|false|none|Returns a list of category IDs plus a flag indicating whether or not each listed category supports item variations.|
|warnings|[[Error](#schemaerror)]|false|none|A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.|

<h2 id="tocS_NegotiatedPricePolicy">NegotiatedPricePolicy</h2>
<!-- backwards compatibility -->
<a id="schemanegotiatedpricepolicy"></a>
<a id="schema_NegotiatedPricePolicy"></a>
<a id="tocSnegotiatedpricepolicy"></a>
<a id="tocsnegotiatedpricepolicy"></a>

```json
{
  "bestOfferAutoAcceptEnabled": true,
  "bestOfferAutoDeclineEnabled": true,
  "bestOfferCounterEnabled": true,
  "categoryId": "string",
  "categoryTreeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestOfferAutoAcceptEnabled|boolean|false|none|This flag denotes whether or not the category supports the setting of a price at which best offers are automatically accepted. If set to <code>true</code>, the category does support the setting of an automatic price for best-offers.|
|bestOfferAutoDeclineEnabled|boolean|false|none|This flag denotes whether or not the category supports the setting of an auto-decline price for best offers. If set to <code>true</code>, the category does support the setting of an automatic-decline price for best-offers.|
|bestOfferCounterEnabled|boolean|false|none|This flag denotes whether or not the category supports the setting for an automatic counter-offer on best offers. If set to <code>true</code>, the category does support the setting of an automatic counter-offer price for best-offers.|
|categoryId|string|false|none|The category ID to which the negotiated-price policies apply.|
|categoryTreeId|string|false|none|A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.|

<h2 id="tocS_NegotiatedPricePolicyResponse">NegotiatedPricePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemanegotiatedpricepolicyresponse"></a>
<a id="schema_NegotiatedPricePolicyResponse"></a>
<a id="tocSnegotiatedpricepolicyresponse"></a>
<a id="tocsnegotiatedpricepolicyresponse"></a>

```json
{
  "negotiatedPricePolicies": [
    {
      "bestOfferAutoAcceptEnabled": true,
      "bestOfferAutoDeclineEnabled": true,
      "bestOfferCounterEnabled": true,
      "categoryId": "string",
      "categoryTreeId": "string"
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|negotiatedPricePolicies|[[NegotiatedPricePolicy](#schemanegotiatedpricepolicy)]|false|none|A list of category IDs and the policies related to negotiated-price items for each of the listed categories.|
|warnings|[[Error](#schemaerror)]|false|none|A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.|

<h2 id="tocS_Pictogram">Pictogram</h2>
<!-- backwards compatibility -->
<a id="schemapictogram"></a>
<a id="schema_Pictogram"></a>
<a id="tocSpictogram"></a>
<a id="tocspictogram"></a>

```json
{
  "pictogramDescription": "string",
  "pictogramId": "string",
  "pictogramUrl": "string"
}
```

A type that describes pictograms for hazardous materials labels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pictogramDescription|string|false|none|The description of the pictogram localized to the default language of the marketplace. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Pictogra'>Pictogram sample values</a>.|
|pictogramId|string|false|none|The identifier of the pictogram. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Pictogra'>Pictogram sample values</a>.|
|pictogramUrl|string|false|none|The URL of the pictogram.|

<h2 id="tocS_ReturnPolicy">ReturnPolicy</h2>
<!-- backwards compatibility -->
<a id="schemareturnpolicy"></a>
<a id="schema_ReturnPolicy"></a>
<a id="tocSreturnpolicy"></a>
<a id="tocsreturnpolicy"></a>

```json
{
  "categoryId": "string",
  "categoryTreeId": "string",
  "domestic": {
    "policyDescriptionEnabled": true,
    "refundMethods": [
      "string"
    ],
    "returnMethods": [
      "string"
    ],
    "returnPeriods": [
      {
        "unit": "string",
        "value": 0
      }
    ],
    "returnShippingCostPayers": [
      "string"
    ],
    "returnsAcceptanceEnabled": true
  },
  "international": {
    "policyDescriptionEnabled": true,
    "refundMethods": [
      "string"
    ],
    "returnMethods": [
      "string"
    ],
    "returnPeriods": [
      {
        "unit": "string",
        "value": 0
      }
    ],
    "returnShippingCostPayers": [
      "string"
    ],
    "returnsAcceptanceEnabled": true
  },
  "required": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|The category ID to which the return policies apply.|
|categoryTreeId|string|false|none|A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.|
|domestic|[ReturnPolicyDetails](#schemareturnpolicydetails)|false|none|This complex type defines the category policies related to domestic item returns.|
|international|[ReturnPolicyDetails](#schemareturnpolicydetails)|false|none|This complex type defines the category policies related to international item returns.|
|required|boolean|false|none|If set to <code>true</code>, this flag indicates that you must specify a return policy for items listed in the associated category.  <br><br>Note that not accepting returns (setting <b>returnsAcceptedEnabled</b> to <code>false</code>) is a valid return policy.|

<h2 id="tocS_ReturnPolicyDetails">ReturnPolicyDetails</h2>
<!-- backwards compatibility -->
<a id="schemareturnpolicydetails"></a>
<a id="schema_ReturnPolicyDetails"></a>
<a id="tocSreturnpolicydetails"></a>
<a id="tocsreturnpolicydetails"></a>

```json
{
  "policyDescriptionEnabled": true,
  "refundMethods": [
    "string"
  ],
  "returnMethods": [
    "string"
  ],
  "returnPeriods": [
    {
      "unit": "string",
      "value": 0
    }
  ],
  "returnShippingCostPayers": [
    "string"
  ],
  "returnsAcceptanceEnabled": true
}
```

This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyDescriptionEnabled|boolean|false|none|If set to <code>true</code>, this flag indicates you can supply a detailed return policy description within your return policy (for example, by populating the <b>returnInstructions</b> field in the Account API's <b>createReturnPolicy</b>). User-supplied return policy details are allowed only in the DE, ES, FR, and IT marketplaces.|
|refundMethods|[string]|false|none|A list of refund methods allowed for the associated category.|
|returnMethods|[string]|false|none|A list of return methods allowed for the associated category.|
|returnPeriods|[[TimeDuration](#schematimeduration)]|false|none|A list of return periods allowed for the associated category.  <br><br>Note that different APIs require you to enter the return period in different ways. For example, the Account API uses the complex <b>TimeDuration</b> type, which takes two values (a <b>unit</b> and a <b>value</b>), whereas the Trading API takes a single value (such as <code>Days_30</code>).|
|returnShippingCostPayers|[string]|false|none|A list of allowed values for who pays for the return shipping cost.  <br><br>Note that for SNAD returns, the seller is always responsible for the return shipping cost.|
|returnsAcceptanceEnabled|boolean|false|none|If set to <code>true</code>, this flag indicates the seller can configure how they handle domestic returns.|

<h2 id="tocS_ReturnPolicyResponse">ReturnPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemareturnpolicyresponse"></a>
<a id="schema_ReturnPolicyResponse"></a>
<a id="tocSreturnpolicyresponse"></a>
<a id="tocsreturnpolicyresponse"></a>

```json
{
  "returnPolicies": [
    {
      "categoryId": "string",
      "categoryTreeId": "string",
      "domestic": {
        "policyDescriptionEnabled": true,
        "refundMethods": [
          "string"
        ],
        "returnMethods": [
          "string"
        ],
        "returnPeriods": [
          {
            "unit": "string",
            "value": 0
          }
        ],
        "returnShippingCostPayers": [
          "string"
        ],
        "returnsAcceptanceEnabled": true
      },
      "international": {
        "policyDescriptionEnabled": true,
        "refundMethods": [
          "string"
        ],
        "returnMethods": [
          "string"
        ],
        "returnPeriods": [
          {
            "unit": "string",
            "value": 0
          }
        ],
        "returnShippingCostPayers": [
          "string"
        ],
        "returnsAcceptanceEnabled": true
      },
      "required": true
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnPolicies|[[ReturnPolicy](#schemareturnpolicy)]|false|none|A list of elements, where each contains a category ID and a flag that indicates whether or not listings in that category require a return policy.|
|warnings|[[Error](#schemaerror)]|false|none|A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.|

<h2 id="tocS_SalesTaxJurisdiction">SalesTaxJurisdiction</h2>
<!-- backwards compatibility -->
<a id="schemasalestaxjurisdiction"></a>
<a id="schema_SalesTaxJurisdiction"></a>
<a id="tocSsalestaxjurisdiction"></a>
<a id="tocssalestaxjurisdiction"></a>

```json
{
  "salesTaxJurisdictionId": "string"
}
```

A unique ID for a sales tax jurisdiction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|salesTaxJurisdictionId|string|false|none|The unique ID for a sales tax jurisdiction.|

<h2 id="tocS_SalesTaxJurisdictions">SalesTaxJurisdictions</h2>
<!-- backwards compatibility -->
<a id="schemasalestaxjurisdictions"></a>
<a id="schema_SalesTaxJurisdictions"></a>
<a id="tocSsalestaxjurisdictions"></a>
<a id="tocssalestaxjurisdictions"></a>

```json
{
  "salesTaxJurisdictions": [
    {
      "salesTaxJurisdictionId": "string"
    }
  ]
}
```

This complex type contains a list of sales tax jurisdictions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|salesTaxJurisdictions|[[SalesTaxJurisdiction](#schemasalestaxjurisdiction)]|false|none|A list of sales tax jurisdictions.|

<h2 id="tocS_SignalWord">SignalWord</h2>
<!-- backwards compatibility -->
<a id="schemasignalword"></a>
<a id="schema_SignalWord"></a>
<a id="tocSsignalword"></a>
<a id="tocssignalword"></a>

```json
{
  "signalWordDescription": "string",
  "signalWordId": "string"
}
```

A type that describes signal words for hazardous materials labels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signalWordDescription|string|false|none|The description of the signal word localized to the default language of the marketplace. For more information, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Signal'>Signal word information</a>.|
|signalWordId|string|false|none|The identifier of the signal word. For more information, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Signal'>Signal word information</a>.|

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
|unit|string|false|none|A time-measurement unit that specifies a singular period of time.  <br><br>A span of time is defined when you apply the value specified in the <b>value</b> field to the value specified for <b>unit</b>.  <br><br>Time-measurement units can be YEAR, MONTH, DAY, and so on. See <b>TimeDurationUnitEnum</b> for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/ba:TimeDurationUnitEnum'>eBay API documentation</a>|
|value|integer(int32)|false|none|An integer that represents an amount of time, as measured by the time-measurement unit specified in the <b>unit</b> field.|
