<h1 id="commerce-payment-links">Commerce Payment Links v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="commerce-payment-links-basic">Basic</h1>

## Retrieve all payment links

<a id="opIdget-/commerce/payment-links/2026-09/payment-links"></a>

> Code samples

```bash
curl https://api.hubapi.com/commerce/payment-links/2026-09/payment-links \
  -H 'Accept: application/json'
```

`GET /commerce/payment-links/2026-09/payment-links`

Retrieve a list of payment links from your HubSpot account. This endpoint allows you to filter and sort payment links based on various criteria such as creation and update timestamps. It supports pagination and can include archived payment links if specified.

<h3 id="retrieve-all-payment-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|integer(int64)|false|Filter results to include only those created after the specified timestamp.|
|createdAt|query|integer(int64)|false|Filter results by the exact creation timestamp.|
|createdBefore|query|integer(int64)|false|Filter results to include only those created before the specified timestamp.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|sort|query|string|false|Specifies the order in which results are returned.|
|updatedAfter|query|integer(int64)|false|Filter results to include only those updated after the specified timestamp.|
|updatedAt|query|integer(int64)|false|Filter results by the exact update timestamp.|
|updatedBefore|query|integer(int64)|false|Filter results to include only those updated before the specified timestamp.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-all-payment-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePaymentLinkResponseForwardPaging](#schemacollectionresponsepaymentlinkresponseforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a payment link

<a id="opIdpost-/commerce/payment-links/2026-09/payment-links"></a>

> Code samples

```bash
curl https://api.hubapi.com/commerce/payment-links/2026-09/payment-links \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /commerce/payment-links/2026-09/payment-links`

Create a new payment link in your HubSpot account. This endpoint allows you to specify various attributes for the payment link, such as accepted payment methods, currency, and additional form fields. The payment link can be configured for one-time use and can also collect shipping and billing addresses. This operation requires a valid JSON request body. Some defaults will be applied if no value provided.

> Body parameter

```json
null
```

<h3 id="create-a-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentLinkCreateRequest](#schemapaymentlinkcreaterequest)|true|none|
|» acceptedPaymentMethods|body|[string]|true|An array of accepted payment methods for the payment link. Valid values include 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', and 'PADS'.|
|» additionalFormFields|body|[[PaymentLinkFormField](#schemapaymentlinkformfield)]|true|An array of PaymentLinkFormField objects representing additional form fields to be included in the payment link.|
|» automatedSalesTaxEnabled|body|boolean|false|A boolean indicating whether automated sales tax is enabled.|
|» businessUnitId|body|string|false|A string representing the business unit ID associated with the payment link.|
|» collectFullBillingAddress|body|boolean|false|A boolean indicating whether to collect the full billing address during checkout.|
|» collectShippingAddress|body|boolean|false|A boolean indicating whether the shipping address should be collected during checkout.|
|» createContractOnPurchase|body|boolean|false|A boolean indicating whether to create a contract upon purchase.|
|» currencyCode|body|string|true|The currency code for the payment, represented as a string.|
|» dealConfigurations|body|[DealConfigurations](#schemadealconfigurations)|false|none|
|» descriptionHtml|body|string|false|A string containing the HTML description of the payment link.|
|» discount|body|[DiscountRequest](#schemadiscountrequest)|false|none|
|» discountCodeEnabled|body|boolean|false|A boolean indicating whether discount codes are enabled for the payment link.|
|» discountObjectId|body|string|false|A string representing the object ID of a discount associated with the payment link.|
|» domainId|body|string|false|The domain ID associated with the payment link, represented as a string.|
|» enableDefaultCheckoutFees|body|boolean|true|A boolean indicating whether default checkout fees are enabled.|
|» expirationSettings|body|[ExpirationSettings](#schemaexpirationsettings)|false|none|
|» feeObjectIds|body|[string]|true|An array of strings representing the IDs of fee objects associated with the payment link.|
|» fees|body|[[FeeRequest](#schemafeerequest)]|true|An array of FeeRequest objects, representing the fees to be applied to the payment link.|
|» includeEmailInSuccessRedirect|body|boolean|true|A boolean indicating whether to include the email in the success redirect URL.|
|» isOneTimeUseEnabled|body|boolean|true|A boolean indicating whether the payment link is enabled for one-time use.|
|» lineItemObjectIds|body|[string]|true|An array of line item object IDs associated with the payment link, each represented as a string.|
|» lineItems|body|[[LineItemCustomCreateRequest](#schemalineitemcustomcreaterequest) \| [LineItemFromProductCreateRequest](#schemalineitemfromproductcreaterequest) \| [LineItemCloneCreateRequest](#schemalineitemclonecreaterequest)]|true|An array of line items, which can be custom, from a product, or cloned, as defined by their respective schemas.|
|» » *oneOf*|body|[LineItemCustomCreateRequest](#schemalineitemcustomcreaterequest)|false|none|
|» » *oneOf*|body|[LineItemFromProductCreateRequest](#schemalineitemfromproductcreaterequest)|false|none|
|» » *oneOf*|body|[LineItemCloneCreateRequest](#schemalineitemclonecreaterequest)|false|none|
|» paymentLinkName|body|string|true|The name of the payment link. It is a string value.|
|» state|body|string|true|The state of the payment link, represented as a string. Valid values are 'ON' and 'OFF'.|
|» storePaymentMethodAtCheckout|body|boolean|false|A boolean indicating whether to store the payment method at checkout.|
|» successUrl|body|string|false|A string that defines the URL to redirect to upon successful payment.|
|» taxObjectIds|body|[string]|true|An array of string IDs representing tax objects associated with the payment link.|
|» taxes|body|[[TaxRequest](#schemataxrequest)]|true|An array of TaxRequest objects, each representing a tax associated with the payment link.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» acceptedPaymentMethods|CREDIT_OR_DEBIT_CARD|
|» acceptedPaymentMethods|ACH|
|» acceptedPaymentMethods|SEPA|
|» acceptedPaymentMethods|BACS|
|» acceptedPaymentMethods|PADS|
|» acceptedPaymentMethods|AFFIRM|
|» acceptedPaymentMethods|KLARNA|
|» state|OFF|
|» state|ON|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PaymentLinkResponse](#schemapaymentlinkresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve payment link

<a id="opIdget-/commerce/payment-links/2026-09/payment-links/{paymentLinkId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/payment-links/2026-09/payment-links/{paymentLinkId}' \
  -H 'Accept: application/json'
```

`GET /commerce/payment-links/2026-09/payment-links/{paymentLinkId}`

Retrieve details of a specific payment link using its unique identifier. This endpoint allows you to access information about the payment link, including its status and configuration. It is useful for checking the current settings or status of a payment link in your HubSpot account.

<h3 id="retrieve-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentLinkId|path|string|true|The unique identifier of the payment link to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PaymentLinkResponse](#schemapaymentlinkresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a payment link

<a id="opIddelete-/commerce/payment-links/2026-09/payment-links/{paymentLinkId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/payment-links/2026-09/payment-links/{paymentLinkId}' \
  -X DELETE
```

`DELETE /commerce/payment-links/2026-09/payment-links/{paymentLinkId}`

Delete a specific payment link in your HubSpot account. This operation is irreversible and will remove the payment link identified by the provided ID. Use this endpoint to manage and clean up payment links that are no longer needed.

<h3 id="delete-a-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentLinkId|path|string|true|The unique identifier of the payment link to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a payment link

<a id="opIdpatch-/commerce/payment-links/2026-09/payment-links/{paymentLinkId}_/commerce/payment-links/2026-09-beta/payment-links/{paymentLinkId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/payment-links/2026-09/payment-links/{paymentLinkId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /commerce/payment-links/2026-09/payment-links/{paymentLinkId}`

Update a payment link by ID.

> Body parameter

```json
null
```

<h3 id="update-a-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentLinkId|path|string|true|The unique identifier of the payment link to update.|
|body|body|[PaymentLinkUpdateRequest](#schemapaymentlinkupdaterequest)|true|none|
|» acceptedPaymentMethods|body|[string]|false|An array of strings indicating the accepted payment methods. Valid values include 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', and 'PADS'.|
|» additionalFormFields|body|[[PaymentLinkFormField](#schemapaymentlinkformfield)]|false|An array of PaymentLinkFormField objects representing additional form fields for the payment link.|
|» automatedSalesTaxEnabled|body|boolean|false|A boolean indicating whether automated sales tax is enabled.|
|» businessUnitId|body|object|true|An object representing the business unit ID associated with the payment link.|
|» collectFullBillingAddress|body|boolean|false|A boolean indicating whether to collect the full billing address during checkout.|
|» collectShippingAddress|body|boolean|false|A boolean indicating whether to collect the shipping address during checkout.|
|» createContractOnPurchase|body|boolean|false|A boolean indicating whether a contract should be created upon purchase.|
|» currencyCode|body|string|false|The currency code for the payment link, represented as a string.|
|» dealConfigurations|body|object|true|An object containing deal configuration settings.|
|» descriptionHtml|body|object|true|An object containing the HTML description of the payment link.|
|» discount|body|[DiscountRequest](#schemadiscountrequest)|false|none|
|» discountCodeEnabled|body|boolean|false|A boolean indicating whether discount codes are enabled for the payment link.|
|» discountObjectId|body|object|true|An object representing the discount object ID associated with the payment link.|
|» domainId|body|object|true|An object representing the domain ID associated with the payment link.|
|» enableDefaultCheckoutFees|body|boolean|false|A boolean indicating whether default checkout fees are enabled.|
|» expirationSettings|body|object|true|An object representing the expiration settings for the payment link.|
|» feeObjectIds|body|[string]|false|An array of strings representing the IDs of fee objects associated with the payment link.|
|» fees|body|[[FeeRequest](#schemafeerequest)]|false|An array of FeeRequest objects representing the fees associated with the payment link.|
|» includeEmailInSuccessRedirect|body|boolean|false|A boolean indicating whether to include the email in the success redirect.|
|» isOneTimeUseEnabled|body|boolean|false|A boolean indicating whether the payment link is enabled for one-time use.|
|» lineItemObjectIds|body|[string]|false|An array of strings representing the IDs of line item objects associated with the payment link.|
|» lineItems|body|[[LineItemCustomCreateRequest](#schemalineitemcustomcreaterequest) \| [LineItemFromProductCreateRequest](#schemalineitemfromproductcreaterequest) \| [LineItemCloneCreateRequest](#schemalineitemclonecreaterequest)]|false|An array of line item objects, which can be of types LineItemCustomCreateRequest, LineItemFromProductCreateRequest, or LineItemCloneCreateRequest.|
|» » *oneOf*|body|[LineItemCustomCreateRequest](#schemalineitemcustomcreaterequest)|false|none|
|» » *oneOf*|body|[LineItemFromProductCreateRequest](#schemalineitemfromproductcreaterequest)|false|none|
|» » *oneOf*|body|[LineItemCloneCreateRequest](#schemalineitemclonecreaterequest)|false|none|
|» paymentLinkName|body|string|false|The name of the payment link, represented as a string.|
|» state|body|string|false|The state of the payment link, represented as a string. Valid values are 'ON' and 'OFF'.|
|» storePaymentMethodAtCheckout|body|boolean|false|A boolean indicating whether the payment method should be stored at checkout.|
|» successUrl|body|object|true|An object representing the success URL where the user is redirected after a successful transaction.|
|» taxObjectIds|body|[string]|false|An array of strings representing the IDs of tax objects associated with the payment link.|
|» taxes|body|[[TaxRequest](#schemataxrequest)]|false|An array of TaxRequest objects representing the taxes associated with the payment link.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» acceptedPaymentMethods|CREDIT_OR_DEBIT_CARD|
|» acceptedPaymentMethods|ACH|
|» acceptedPaymentMethods|SEPA|
|» acceptedPaymentMethods|BACS|
|» acceptedPaymentMethods|PADS|
|» acceptedPaymentMethods|AFFIRM|
|» acceptedPaymentMethods|KLARNA|
|» state|OFF|
|» state|ON|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PaymentLinkResponse](#schemapaymentlinkresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CollectionResponsePaymentLinkResponseForwardPaging">CollectionResponsePaymentLinkResponseForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepaymentlinkresponseforwardpaging"></a>
<a id="schema_CollectionResponsePaymentLinkResponseForwardPaging"></a>
<a id="tocScollectionresponsepaymentlinkresponseforwardpaging"></a>
<a id="tocscollectionresponsepaymentlinkresponseforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PaymentLinkResponse](#schemapaymentlinkresponse)]|true|none|An array of PaymentLinkResponse objects, each representing a payment link with its associated details.|

<h2 id="tocS_DealConfigurations">DealConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemadealconfigurations"></a>
<a id="schema_DealConfigurations"></a>
<a id="tocSdealconfigurations"></a>
<a id="tocsdealconfigurations"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createNewDealOnPurchase|boolean|true|none|A boolean indicating whether a new deal should be created in HubSpot upon a purchase. Required field.|
|pipelineStageId|string|false|none|The identifier for the pipeline stage where the new deal will be placed. This is a string value.|

<h2 id="tocS_DiscountRequest">DiscountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscountrequest"></a>
<a id="schema_DiscountRequest"></a>
<a id="tocSdiscountrequest"></a>
<a id="tocsdiscountrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|A descriptive label for the discount. This is a string.|
|value|number|true|none|The numerical value of the discount to be applied. This is a number.|
|valueType|string|true|none|The type of discount value, which can either be 'FIXED' or 'PERCENT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|FIXED|
|valueType|PERCENT|

<h2 id="tocS_DiscountResponse">DiscountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscountresponse"></a>
<a id="schema_DiscountResponse"></a>
<a id="tocSdiscountresponse"></a>
<a id="tocsdiscountresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|Indicates whether this discount has been archived. A boolean value.|
|archivedAt|string(date-time)|false|none|The date and time when this discount was archived, in ISO 8601 format.|
|createdAt|string(date-time)|false|none|The date and time when this discount was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this discount.|
|label|string|false|none|A descriptive label for the discount.|
|updatedAt|string(date-time)|false|none|The date and time when this discount was last updated, in ISO 8601 format.|
|value|number|false|none|The numerical value of the discount.|
|valueType|string|false|none|The type of discount value, which can be either 'FIXED' or 'PERCENT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|FIXED|
|valueType|PERCENT|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ExpirationSettings">ExpirationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationsettings"></a>
<a id="schema_ExpirationSettings"></a>
<a id="tocSexpirationsettings"></a>
<a id="tocsexpirationsettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationDate|string(date-time)|false|none|The date and time when the payment link will expire, in ISO 8601 format.|
|maxPurchases|integer(int32)|false|none|The maximum number of purchases allowed for this payment link. It is an integer value.|

<h2 id="tocS_FeeRequest">FeeRequest</h2>
<!-- backwards compatibility -->
<a id="schemafeerequest"></a>
<a id="schema_FeeRequest"></a>
<a id="tocSfeerequest"></a>
<a id="tocsfeerequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|A descriptive label for the fee, represented as a string.|
|value|number|true|none|The numerical value of the fee. This is a number representing either a fixed amount or a percentage, depending on the valueType.|
|valueType|string|true|none|The type of the fee value, indicating whether it is a fixed amount or a percentage. Valid values include 'FIXED' and 'PERCENT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|FIXED|
|valueType|PERCENT|

<h2 id="tocS_FeeResponse">FeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemafeeresponse"></a>
<a id="schema_FeeResponse"></a>
<a id="tocSfeeresponse"></a>
<a id="tocsfeeresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|Indicates whether this fee has been archived. A boolean value.|
|archivedAt|string(date-time)|false|none|The date and time when this fee was archived, in ISO 8601 format.|
|createdAt|string(date-time)|false|none|The date and time when this fee was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this fee.|
|label|string|false|none|A descriptive label for the fee.|
|updatedAt|string(date-time)|false|none|The date and time when this fee was last updated, in ISO 8601 format.|
|value|number|false|none|The monetary value of the fee. A number representing the fee amount.|
|valueType|string|false|none|The type of value for the fee, which can be either 'FIXED' or 'PERCENT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|FIXED|
|valueType|PERCENT|

<h2 id="tocS_FormFieldOption">FormFieldOption</h2>
<!-- backwards compatibility -->
<a id="schemaformfieldoption"></a>
<a id="schema_FormFieldOption"></a>
<a id="tocSformfieldoption"></a>
<a id="tocsformfieldoption"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string providing additional information or context about the form field option.|
|label|string|true|none|A string representing the display name of the form field option.|
|value|string|true|none|A string representing the underlying value associated with the form field option.|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_LineItem">LineItem</h2>
<!-- backwards compatibility -->
<a id="schemalineitem"></a>
<a id="schema_LineItem"></a>
<a id="tocSlineitem"></a>
<a id="tocslineitem"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acv|number|false|none|The annual contract value for the line item.|
|allowBuyerSelectedQuantity|boolean|false|none|Indicates whether the buyer can select the quantity of the line item.|
|amount|number|false|none|The total amount for the line item, calculated as price multiplied by quantity.|
|archived|boolean|false|none|Indicates whether the line item is archived.|
|archivedAt|string(date-time)|false|none|The date and time when the line item was archived, in ISO 8601 format.|
|arr|number|false|none|The annual recurring revenue for the line item.|
|billingCycleAnchorDate|string(date)|false|none|The anchor date for the billing cycle, in ISO 8601 date format.|
|billingPeriodEndDate|string(date)|false|none|The end date of the billing period, in ISO 8601 date format.|
|billingPeriodStartDate|string(date)|false|none|The start date of the billing period, in ISO 8601 date format.|
|billingStartDelayDays|integer(int32)|false|none|The number of days to delay the start of billing.|
|billingStartDelayMonths|integer(int32)|false|none|The number of months to delay the start of billing.|
|billingStartDelayType|string|false|none|The type of delay for the start of billing. Valid values include 'HS_BILLING_START_DELAY_DAYS', 'HS_BILLING_START_DELAY_MONTHS', and 'HS_RECURRING_BILLING_START_DATE'.|
|buyerSelectedQuantityMax|number|false|none|The maximum quantity the buyer can select for the line item.|
|buyerSelectedQuantityMin|number|false|none|The minimum quantity the buyer can select for the line item.|
|createdAt|string(date-time)|false|none|The date and time when the line item was created, in ISO 8601 format.|
|description|string|false|none|A text description of the line item.|
|discount|number|false|none|The discount applied to the line item.|
|discountPercentage|number|false|none|The percentage discount applied to the line item.|
|effectiveUnitPrice|number|false|none|The effective price per unit after discounts.|
|externalId|string|false|none|An external identifier for the line item, used for integration purposes.|
|id|string|true|none|The unique identifier for the line item.|
|images|string|false|none|A URL or identifier for images associated with the line item.|
|isEditablePrice|boolean|false|none|Indicates whether the price of the line item is editable.|
|isOptional|boolean|false|none|Indicates whether the line item is optional.|
|isParent|boolean|false|none|Indicates whether this line item is a parent line item.|
|lineItemCurrencyCode|string|false|none|The currency code for the line item, following ISO 4217 format.|
|mrr|number|false|none|The monthly recurring revenue for the line item.|
|name|string|true|none|The name of the line item.|
|parentLineItemId|string|false|none|The unique identifier for the parent line item.|
|positionOnQuote|integer(int32)|false|none|The position of the line item on a quote, represented as an integer.|
|postTaxAmount|number|false|none|The amount after taxes are applied.|
|preDiscountAmount|number|false|none|The amount before any discounts are applied.|
|price|number|false|none|The price of a single unit of the line item.|
|priceBookId|string|false|none|The identifier for the price book associated with the line item.|
|pricing|[Pricing](#schemapricing)|true|none|none|
|pricingModel|string|false|none|The pricing model used for the line item. Valid values include 'FLAT', 'GRADUATED', 'STAIRSTEP', and 'VOLUME'.|
|productId|string|false|none|The identifier for the product associated with the line item.|
|productType|string|false|none|The type of product for the line item.|
|quantity|number|true|none|The quantity of the line item, represented as a number.|
|rampKey|string|false|none|A key used to identify the ramp schedule for the line item.|
|recurringBillingDayOfMonth|integer(int32)|false|none|The day of the month when recurring billing occurs.|
|recurringBillingEndDate|string(date)|false|none|The end date for recurring billing, in ISO 8601 date format.|
|recurringBillingFrequency|string|false|none|The frequency of recurring billing for the line item. Valid values include 'ANNUALLY', 'BIWEEKLY', 'MONTHLY', 'PER_FIVE_YEARS', 'PER_FOUR_YEARS', 'PER_SIX_MONTHS', 'PER_THREE_YEARS', 'PER_TWO_YEARS', 'QUARTERLY', and 'WEEKLY'.|
|recurringBillingNumberOfPayments|integer(int32)|false|none|The number of payments for the recurring billing cycle.|
|recurringBillingPeriod|string|false|none|The period for recurring billing.|
|recurringBillingStartDate|string(date)|false|none|The start date for recurring billing, in ISO 8601 date format.|
|recurringBillingTerms|string|false|none|The terms of recurring billing. Valid values include 'AUTOMATICALLY_RENEW' and 'FIXED'.|
|richTextDescription|string|false|none|A rich text formatted description of the line item.|
|sku|string|false|none|The stock keeping unit (SKU) identifier for the line item.|
|tax|number|false|none|The tax amount applied to the line item.|
|taxAmount|number|false|none|The total tax amount for this line item.|
|taxCategory|string|false|none|The tax category applicable to this line item.|
|taxRateGroupId|string|false|none|The unique identifier for the tax rate group.|
|tcv|number|false|none|The total contract value for the line item.|
|termInMonths|integer(int32)|false|none|The term length for the line item in months.|
|tierAmount|number|false|none|The tiered amount applicable to the line item.|
|totalDiscount|number|false|none|The total discount amount applied to the line item.|
|updatedAt|string(date-time)|false|none|The date and time when the line item was last updated, in ISO 8601 format.|
|variantId|string|false|none|The identifier for the product variant associated with the line item.|

#### Enumerated Values

|Property|Value|
|---|---|
|billingStartDelayType|HS_BILLING_START_DELAY_DAYS|
|billingStartDelayType|HS_BILLING_START_DELAY_MONTHS|
|billingStartDelayType|HS_RECURRING_BILLING_START_DATE|
|pricingModel|FLAT|
|pricingModel|GRADUATED|
|pricingModel|STAIRSTEP|
|pricingModel|VOLUME|
|recurringBillingFrequency|ANNUALLY|
|recurringBillingFrequency|BIWEEKLY|
|recurringBillingFrequency|MONTHLY|
|recurringBillingFrequency|PER_FIVE_YEARS|
|recurringBillingFrequency|PER_FOUR_YEARS|
|recurringBillingFrequency|PER_SIX_MONTHS|
|recurringBillingFrequency|PER_THREE_YEARS|
|recurringBillingFrequency|PER_TWO_YEARS|
|recurringBillingFrequency|QUARTERLY|
|recurringBillingFrequency|WEEKLY|
|recurringBillingTerms|AUTOMATICALLY_RENEW|
|recurringBillingTerms|FIXED|

<h2 id="tocS_LineItemCloneCreateRequest">LineItemCloneCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalineitemclonecreaterequest"></a>
<a id="schema_LineItemCloneCreateRequest"></a>
<a id="tocSlineitemclonecreaterequest"></a>
<a id="tocslineitemclonecreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowBuyerSelectedQuantity|object|true|none|An object indicating whether the buyer can select the quantity of the line item.|
|billingCycleAnchorDate|object|true|none|An object representing the anchor date for the billing cycle of the line item.|
|billingStartDelayDays|object|true|none|An object representing the number of days to delay the start of billing for the line item.|
|billingStartDelayMonths|object|true|none|An object representing the number of months to delay the start of billing for the line item.|
|buyerSelectedQuantityMax|object|true|none|An object representing the maximum quantity the buyer can select for the line item.|
|buyerSelectedQuantityMin|object|true|none|An object representing the minimum quantity the buyer can select for the line item.|
|description|object|true|none|An object representing the description of the line item.|
|discount|object|true|none|An object representing the discount applied to the line item.|
|discountPercentage|object|true|none|An object representing the discount percentage applied to the line item.|
|externalId|object|true|none|An object representing an external identifier for the line item.|
|images|object|true|none|An object representing the images associated with the line item.|
|isEditablePrice|object|true|none|An object indicating whether the price of the line item is editable.|
|isOptional|object|true|none|An object indicating whether the line item is optional.|
|lineItemCurrencyCode|object|true|none|An object representing the currency code for the line item.|
|mode|string|true|none|A string indicating the mode of the line item creation, which is 'CLONE' for this component.|
|name|object|true|none|An object representing the name of the line item.|
|positionOnQuote|object|true|none|An object representing the position of the line item on the quote.|
|priceBookId|object|true|none|An object representing the price book ID associated with the line item.|
|pricing|object|true|none|An object representing the pricing details of the line item.|
|productType|object|true|none|An object representing the type of product for the line item.|
|quantity|object|true|none|An object representing the quantity of the line item.|
|recurringBillingEndDate|object|true|none|An object representing the end date for recurring billing of the line item.|
|recurringBillingFrequency|object|true|none|An object representing the frequency of recurring billing for the line item.|
|recurringBillingPeriod|object|true|none|An object representing the billing period for recurring billing of the line item.|
|recurringBillingStartDate|object|true|none|An object representing the start date for recurring billing of the line item.|
|richTextDescription|object|true|none|An object representing the rich text description of the line item.|
|sku|object|true|none|An object representing the stock keeping unit (SKU) of the line item.|
|sourceLineItemId|string|true|none|A string representing the ID of the source line item being cloned.|
|taxCategory|object|true|none|An object representing the tax category of the line item.|
|taxRateGroupId|object|true|none|An object representing the tax rate group ID for the line item.|
|variantId|object|true|none|An object representing the variant ID of the line item.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|CLONE|

<h2 id="tocS_LineItemCustomCreateRequest">LineItemCustomCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalineitemcustomcreaterequest"></a>
<a id="schema_LineItemCustomCreateRequest"></a>
<a id="tocSlineitemcustomcreaterequest"></a>
<a id="tocslineitemcustomcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowBuyerSelectedQuantity|boolean|false|none|A boolean specifying if the buyer can select the quantity of the line item.|
|billingCycleAnchorDate|string(date)|false|none|A string in date format representing the anchor date for the billing cycle.|
|billingStartDelayDays|integer(int32)|false|none|An integer indicating the number of days to delay the start of billing.|
|billingStartDelayMonths|integer(int32)|false|none|An integer indicating the number of months to delay the start of billing.|
|buyerSelectedQuantityMax|number|false|none|A number indicating the maximum quantity the buyer can select.|
|buyerSelectedQuantityMin|number|false|none|A number indicating the minimum quantity the buyer can select.|
|description|string|false|none|A string providing a description of the line item.|
|discount|number|false|none|A number representing the discount applied to the line item.|
|discountPercentage|number|false|none|A number indicating the discount percentage applied to the line item.|
|externalId|string|false|none|A string representing an external identifier for the line item.|
|images|string|false|none|A string containing URLs or identifiers for images associated with the line item.|
|isEditablePrice|boolean|false|none|A boolean indicating whether the price of the line item is editable.|
|isOptional|boolean|false|none|A boolean indicating whether the line item is optional.|
|lineItemCurrencyCode|string|false|none|A string representing the currency code for the line item.|
|mode|string|true|none|A string that indicates the mode of the line item, which is set to 'CUSTOM'.|
|name|string|true|none|A string representing the name of the line item.|
|positionOnQuote|integer(int32)|false|none|An integer indicating the position of the line item on a quote.|
|priceBookId|string|false|none|A string that identifies the price book associated with the line item.|
|pricing|[PricingFullUpdateRequest](#schemapricingfullupdaterequest)|true|none|none|
|productId|string|false|none|A string that identifies the product associated with the line item.|
|productType|string|false|none|A string indicating the type of product for the line item.|
|quantity|number|true|none|A number indicating the quantity of the line item.|
|recurringBillingEndDate|string(date)|false|none|A string in date format indicating the end date of recurring billing.|
|recurringBillingFrequency|string|false|none|A string specifying the frequency of recurring billing. Valid values include 'ANNUALLY', 'BIWEEKLY', 'MONTHLY', 'PER_FIVE_YEARS', 'PER_FOUR_YEARS', 'PER_SIX_MONTHS', 'PER_THREE_YEARS', 'PER_TWO_YEARS', 'QUARTERLY', and 'WEEKLY'.|
|recurringBillingPeriod|string|false|none|A string representing the period of recurring billing.|
|recurringBillingStartDate|string(date)|false|none|A string in date format indicating the start date of recurring billing.|
|richTextDescription|string|false|none|A string containing a rich text description of the line item.|
|sku|string|false|none|A string representing the stock keeping unit (SKU) of the line item.|
|taxCategory|string|false|none|A string representing the tax category of the line item.|
|taxRateGroupId|string|false|none|The tax rate group ID associated with the line item as a string.|
|variantId|string|false|none|A string representing the variant identifier of the product.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|CUSTOM|
|recurringBillingFrequency|ANNUALLY|
|recurringBillingFrequency|BIWEEKLY|
|recurringBillingFrequency|MONTHLY|
|recurringBillingFrequency|PER_FIVE_YEARS|
|recurringBillingFrequency|PER_FOUR_YEARS|
|recurringBillingFrequency|PER_SIX_MONTHS|
|recurringBillingFrequency|PER_THREE_YEARS|
|recurringBillingFrequency|PER_TWO_YEARS|
|recurringBillingFrequency|QUARTERLY|
|recurringBillingFrequency|WEEKLY|

<h2 id="tocS_LineItemFromProductCreateRequest">LineItemFromProductCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalineitemfromproductcreaterequest"></a>
<a id="schema_LineItemFromProductCreateRequest"></a>
<a id="tocSlineitemfromproductcreaterequest"></a>
<a id="tocslineitemfromproductcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowBuyerSelectedQuantity|object|true|none|An object indicating whether the buyer can select the quantity of the product.|
|billingCycleAnchorDate|object|true|none|An object representing the anchor date for the billing cycle.|
|billingStartDelayDays|object|true|none|An object representing the number of days to delay the start of billing.|
|billingStartDelayMonths|object|true|none|An object representing the number of months to delay the start of billing.|
|buyerSelectedQuantityMax|object|true|none|An object representing the maximum quantity the buyer can select.|
|buyerSelectedQuantityMin|object|true|none|An object representing the minimum quantity the buyer can select.|
|description|object|true|none|An object representing the description of the product associated with the line item.|
|discount|object|true|none|An object representing any discount applied to the line item.|
|discountPercentage|object|true|none|An object representing the percentage discount applied to the line item.|
|externalId|object|true|none|An object representing an external identifier for the line item.|
|images|object|true|none|An object representing images associated with the product.|
|isEditablePrice|object|true|none|An object indicating whether the price of the line item is editable.|
|isOptional|object|true|none|An object indicating whether the line item is optional.|
|lineItemCurrencyCode|object|true|none|An object representing the currency code for the line item.|
|mode|string|true|none|A string indicating the mode of the line item creation. The default and only valid value is 'FROM_PRODUCT'.|
|name|object|true|none|An object representing the name of the product associated with the line item.|
|positionOnQuote|object|true|none|An object representing the position of the line item on a quote.|
|priceBookId|object|true|none|An object representing the ID of the price book associated with the product.|
|pricing|object|true|none|An object representing the pricing details of the line item.|
|productId|string|true|none|A string representing the unique identifier of the product.|
|productType|object|true|none|An object representing the type of product.|
|quantity|object|true|none|An object representing the quantity of the product to be included in the line item.|
|recurringBillingEndDate|object|true|none|An object representing the end date of the recurring billing cycle.|
|recurringBillingFrequency|object|true|none|An object representing the frequency of recurring billing for the line item.|
|recurringBillingPeriod|object|true|none|An object representing the period of the recurring billing cycle.|
|recurringBillingStartDate|object|true|none|An object representing the start date of the recurring billing cycle.|
|richTextDescription|object|true|none|An object representing a rich text description of the product associated with the line item.|
|sku|object|true|none|An object representing the stock keeping unit (SKU) of the product.|
|taxCategory|object|true|none|An object representing the tax category of the product.|
|taxRateGroupId|object|true|none|An object representing the tax rate group ID for the product.|
|variantId|object|true|none|An object representing the variant ID of the product.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|FROM_PRODUCT|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string token that indicates the position after the last item in the current page, used to fetch the next page of results.|
|link|string|false|none|A string URL that provides a direct link to the next page of results.|

<h2 id="tocS_PaymentLinkCreateRequest">PaymentLinkCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlinkcreaterequest"></a>
<a id="schema_PaymentLinkCreateRequest"></a>
<a id="tocSpaymentlinkcreaterequest"></a>
<a id="tocspaymentlinkcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedPaymentMethods|[string]|true|none|An array of accepted payment methods for the payment link. Valid values include 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', and 'PADS'.|
|additionalFormFields|[[PaymentLinkFormField](#schemapaymentlinkformfield)]|true|none|An array of PaymentLinkFormField objects representing additional form fields to be included in the payment link.|
|automatedSalesTaxEnabled|boolean|false|none|A boolean indicating whether automated sales tax is enabled.|
|businessUnitId|string|false|none|A string representing the business unit ID associated with the payment link.|
|collectFullBillingAddress|boolean|false|none|A boolean indicating whether to collect the full billing address during checkout.|
|collectShippingAddress|boolean|false|none|A boolean indicating whether the shipping address should be collected during checkout.|
|createContractOnPurchase|boolean|false|none|A boolean indicating whether to create a contract upon purchase.|
|currencyCode|string|true|none|The currency code for the payment, represented as a string.|
|dealConfigurations|[DealConfigurations](#schemadealconfigurations)|false|none|none|
|descriptionHtml|string|false|none|A string containing the HTML description of the payment link.|
|discount|[DiscountRequest](#schemadiscountrequest)|false|none|none|
|discountCodeEnabled|boolean|false|none|A boolean indicating whether discount codes are enabled for the payment link.|
|discountObjectId|string|false|none|A string representing the object ID of a discount associated with the payment link.|
|domainId|string|false|none|The domain ID associated with the payment link, represented as a string.|
|enableDefaultCheckoutFees|boolean|true|none|A boolean indicating whether default checkout fees are enabled.|
|expirationSettings|[ExpirationSettings](#schemaexpirationsettings)|false|none|none|
|feeObjectIds|[string]|true|none|An array of strings representing the IDs of fee objects associated with the payment link.|
|fees|[[FeeRequest](#schemafeerequest)]|true|none|An array of FeeRequest objects, representing the fees to be applied to the payment link.|
|includeEmailInSuccessRedirect|boolean|true|none|A boolean indicating whether to include the email in the success redirect URL.|
|isOneTimeUseEnabled|boolean|true|none|A boolean indicating whether the payment link is enabled for one-time use.|
|lineItemObjectIds|[string]|true|none|An array of line item object IDs associated with the payment link, each represented as a string.|
|lineItems|[[LineItemCustomCreateRequest](#schemalineitemcustomcreaterequest) \| [LineItemFromProductCreateRequest](#schemalineitemfromproductcreaterequest) \| [LineItemCloneCreateRequest](#schemalineitemclonecreaterequest)]|true|none|An array of line items, which can be custom, from a product, or cloned, as defined by their respective schemas.|
|paymentLinkName|string|true|none|The name of the payment link. It is a string value.|
|state|string|true|none|The state of the payment link, represented as a string. Valid values are 'ON' and 'OFF'.|
|storePaymentMethodAtCheckout|boolean|false|none|A boolean indicating whether to store the payment method at checkout.|
|successUrl|string|false|none|A string that defines the URL to redirect to upon successful payment.|
|taxObjectIds|[string]|true|none|An array of string IDs representing tax objects associated with the payment link.|
|taxes|[[TaxRequest](#schemataxrequest)]|true|none|An array of TaxRequest objects, each representing a tax associated with the payment link.|

#### Enumerated Values

|Property|Value|
|---|---|
|acceptedPaymentMethods|CREDIT_OR_DEBIT_CARD|
|acceptedPaymentMethods|ACH|
|acceptedPaymentMethods|SEPA|
|acceptedPaymentMethods|BACS|
|acceptedPaymentMethods|PADS|
|acceptedPaymentMethods|AFFIRM|
|acceptedPaymentMethods|KLARNA|
|state|OFF|
|state|ON|

<h2 id="tocS_PaymentLinkFormField">PaymentLinkFormField</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlinkformfield"></a>
<a id="schema_PaymentLinkFormField"></a>
<a id="tocSpaymentlinkformfield"></a>
<a id="tocspaymentlinkformfield"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the form field, providing additional context or instructions, represented as a string.|
|isRequired|boolean|true|none|A boolean indicating whether this form field is required to be filled out.|
|label|string|true|none|The label for the form field, which is displayed to users, represented as a string.|
|objectType|string|true|none|The type of object this form field is associated with, represented as a string. Valid values include 'CONTACT' and 'COMPANY'.|
|options|[[FormFieldOption](#schemaformfieldoption)]|true|none|An array of options available for this form field, each represented as a FormFieldOption object.|
|propertyName|string|true|none|The name of the property associated with this form field, represented as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|objectType|COMPANY|
|objectType|CONTACT|

<h2 id="tocS_PaymentLinkResponse">PaymentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlinkresponse"></a>
<a id="schema_PaymentLinkResponse"></a>
<a id="tocSpaymentlinkresponse"></a>
<a id="tocspaymentlinkresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedPaymentMethods|[string]|true|none|An array of accepted payment methods for the payment link. Valid values include 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', and 'PADS'.|
|additionalFormFields|[[PaymentLinkFormField](#schemapaymentlinkformfield)]|true|none|An array of additional form fields included in the payment link.|
|archived|boolean|true|none|A boolean indicating whether the payment link is archived.|
|archivedAt|string(date-time)|false|none|The date and time when the payment link was archived, in ISO 8601 format.|
|automatedSalesTaxEnabled|boolean|true|none|A boolean indicating whether automated sales tax is enabled for the payment link.|
|businessUnitId|string|false|none|The business unit ID associated with the payment link, represented as a string.|
|checkoutFeeIds|[string]|true|none|An array of checkout fee IDs associated with the payment link.|
|collectFullBillingAddress|boolean|true|none|A boolean indicating whether to collect the full billing address during checkout.|
|collectShippingAddress|boolean|true|none|A boolean indicating whether to collect the shipping address during checkout.|
|completedPurchaseCount|integer(int32)|true|none|The number of completed purchases made through this payment link.|
|createContractOnPurchase|boolean|true|none|A boolean indicating whether a contract should be created upon purchase.|
|createdAt|string(date-time)|false|none|The date and time when the payment link was created, in ISO 8601 format.|
|currencyCode|string|true|none|The currency code for the payment link, represented as a string.|
|dealConfigurations|[DealConfigurations](#schemadealconfigurations)|false|none|none|
|descriptionHtml|string|false|none|The HTML description of the payment link, represented as a string.|
|discountCodeEnabled|boolean|true|none|A boolean indicating whether discount codes are enabled for the payment link.|
|discounts|[[DiscountResponse](#schemadiscountresponse)]|true|none|An array of discount objects associated with the payment link.|
|domainId|string|false|none|The domain ID associated with the payment link, represented as a string.|
|expirationSettings|[ExpirationSettings](#schemaexpirationsettings)|false|none|none|
|fees|[[FeeResponse](#schemafeeresponse)]|true|none|An array of fee objects associated with the payment link.|
|formGuid|string|true|none|The form GUID associated with the payment link, represented as a string.|
|id|string|true|none|The unique identifier for the payment link, represented as a string.|
|includeEmailInSuccessRedirect|boolean|true|none|A boolean indicating whether to include the email in the success redirect URL.|
|isOneTimeUseEnabled|boolean|true|none|A boolean indicating whether the payment link is enabled for one-time use.|
|lineItems|[[LineItem](#schemalineitem)]|true|none|An array of line items associated with the payment link.|
|paymentLinkName|string|true|none|The name of the payment link, represented as a string.|
|paymentLinkUrl|string|true|none|The URL of the payment link, represented as a string.|
|state|string|true|none|The current state of the payment link, represented as a string. Valid values include 'ON' and 'OFF'.|
|storePaymentMethodAtCheckout|boolean|true|none|A boolean indicating whether to store the payment method at checkout.|
|successUrl|string|false|none|The URL to redirect to upon successful payment, represented as a string.|
|taxes|[[TaxResponse](#schemataxresponse)]|true|none|An array of tax objects associated with the payment link.|
|updatedAt|string(date-time)|false|none|The date and time when the payment link was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|acceptedPaymentMethods|CREDIT_OR_DEBIT_CARD|
|acceptedPaymentMethods|ACH|
|acceptedPaymentMethods|SEPA|
|acceptedPaymentMethods|BACS|
|acceptedPaymentMethods|PADS|
|acceptedPaymentMethods|AFFIRM|
|acceptedPaymentMethods|KLARNA|
|state|OFF|
|state|ON|

<h2 id="tocS_PaymentLinkUpdateRequest">PaymentLinkUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlinkupdaterequest"></a>
<a id="schema_PaymentLinkUpdateRequest"></a>
<a id="tocSpaymentlinkupdaterequest"></a>
<a id="tocspaymentlinkupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedPaymentMethods|[string]|false|none|An array of strings indicating the accepted payment methods. Valid values include 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', and 'PADS'.|
|additionalFormFields|[[PaymentLinkFormField](#schemapaymentlinkformfield)]|false|none|An array of PaymentLinkFormField objects representing additional form fields for the payment link.|
|automatedSalesTaxEnabled|boolean|false|none|A boolean indicating whether automated sales tax is enabled.|
|businessUnitId|object|true|none|An object representing the business unit ID associated with the payment link.|
|collectFullBillingAddress|boolean|false|none|A boolean indicating whether to collect the full billing address during checkout.|
|collectShippingAddress|boolean|false|none|A boolean indicating whether to collect the shipping address during checkout.|
|createContractOnPurchase|boolean|false|none|A boolean indicating whether a contract should be created upon purchase.|
|currencyCode|string|false|none|The currency code for the payment link, represented as a string.|
|dealConfigurations|object|true|none|An object containing deal configuration settings.|
|descriptionHtml|object|true|none|An object containing the HTML description of the payment link.|
|discount|[DiscountRequest](#schemadiscountrequest)|false|none|none|
|discountCodeEnabled|boolean|false|none|A boolean indicating whether discount codes are enabled for the payment link.|
|discountObjectId|object|true|none|An object representing the discount object ID associated with the payment link.|
|domainId|object|true|none|An object representing the domain ID associated with the payment link.|
|enableDefaultCheckoutFees|boolean|false|none|A boolean indicating whether default checkout fees are enabled.|
|expirationSettings|object|true|none|An object representing the expiration settings for the payment link.|
|feeObjectIds|[string]|false|none|An array of strings representing the IDs of fee objects associated with the payment link.|
|fees|[[FeeRequest](#schemafeerequest)]|false|none|An array of FeeRequest objects representing the fees associated with the payment link.|
|includeEmailInSuccessRedirect|boolean|false|none|A boolean indicating whether to include the email in the success redirect.|
|isOneTimeUseEnabled|boolean|false|none|A boolean indicating whether the payment link is enabled for one-time use.|
|lineItemObjectIds|[string]|false|none|An array of strings representing the IDs of line item objects associated with the payment link.|
|lineItems|[[LineItemCustomCreateRequest](#schemalineitemcustomcreaterequest) \| [LineItemFromProductCreateRequest](#schemalineitemfromproductcreaterequest) \| [LineItemCloneCreateRequest](#schemalineitemclonecreaterequest)]|false|none|An array of line item objects, which can be of types LineItemCustomCreateRequest, LineItemFromProductCreateRequest, or LineItemCloneCreateRequest.|
|paymentLinkName|string|false|none|The name of the payment link, represented as a string.|
|state|string|false|none|The state of the payment link, represented as a string. Valid values are 'ON' and 'OFF'.|
|storePaymentMethodAtCheckout|boolean|false|none|A boolean indicating whether the payment method should be stored at checkout.|
|successUrl|object|true|none|An object representing the success URL where the user is redirected after a successful transaction.|
|taxObjectIds|[string]|false|none|An array of strings representing the IDs of tax objects associated with the payment link.|
|taxes|[[TaxRequest](#schemataxrequest)]|false|none|An array of TaxRequest objects representing the taxes associated with the payment link.|

#### Enumerated Values

|Property|Value|
|---|---|
|acceptedPaymentMethods|CREDIT_OR_DEBIT_CARD|
|acceptedPaymentMethods|ACH|
|acceptedPaymentMethods|SEPA|
|acceptedPaymentMethods|BACS|
|acceptedPaymentMethods|PADS|
|acceptedPaymentMethods|AFFIRM|
|acceptedPaymentMethods|KLARNA|
|state|OFF|
|state|ON|

<h2 id="tocS_PriceEntry">PriceEntry</h2>
<!-- backwards compatibility -->
<a id="schemapriceentry"></a>
<a id="schema_PriceEntry"></a>
<a id="tocSpriceentry"></a>
<a id="tocspriceentry"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|The currency code for the price, represented as a string.|
|maxQuantity|integer(int32)|false|none|The maximum quantity for which this price is applicable, represented as a string.|
|price|number|true|none|The price of the item, represented as a number.|

<h2 id="tocS_PriceUpdateEntry">PriceUpdateEntry</h2>
<!-- backwards compatibility -->
<a id="schemapriceupdateentry"></a>
<a id="schema_PriceUpdateEntry"></a>
<a id="tocSpriceupdateentry"></a>
<a id="tocspriceupdateentry"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|The currency code in which the price is specified, represented as a string.|
|maxQuantity|integer(int32)|false|none|The maximum quantity for which this price is applicable, represented as a string.|
|price|object|true|none|An object representing the price details. The specific structure of this object is not detailed in the specification.|

<h2 id="tocS_Pricing">Pricing</h2>
<!-- backwards compatibility -->
<a id="schemapricing"></a>
<a id="schema_Pricing"></a>
<a id="tocSpricing"></a>
<a id="tocspricing"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prices|[[PriceEntry](#schemapriceentry)]|true|none|An array of price entries, each detailing a specific price point within the pricing model.|
|pricingModel|string|true|none|The type of pricing model applied. Valid values include 'FLAT', 'GRADUATED', 'STAIRSTEP', and 'VOLUME'.|

#### Enumerated Values

|Property|Value|
|---|---|
|pricingModel|FLAT|
|pricingModel|GRADUATED|
|pricingModel|STAIRSTEP|
|pricingModel|VOLUME|

<h2 id="tocS_PricingFullUpdateRequest">PricingFullUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapricingfullupdaterequest"></a>
<a id="schema_PricingFullUpdateRequest"></a>
<a id="tocSpricingfullupdaterequest"></a>
<a id="tocspricingfullupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prices|[[PriceUpdateEntry](#schemapriceupdateentry)]|true|none|An array of PriceUpdateEntry objects, each specifying the price details such as currency code and price amount for different quantities.|
|pricingModel|string|true|none|The pricing model applied to the line item. Valid values include 'FLAT', 'GRADUATED', 'STAIRSTEP', and 'VOLUME'.|

#### Enumerated Values

|Property|Value|
|---|---|
|pricingModel|FLAT|
|pricingModel|GRADUATED|
|pricingModel|STAIRSTEP|
|pricingModel|VOLUME|

<h2 id="tocS_TaxRequest">TaxRequest</h2>
<!-- backwards compatibility -->
<a id="schemataxrequest"></a>
<a id="schema_TaxRequest"></a>
<a id="tocStaxrequest"></a>
<a id="tocstaxrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|A string that provides a label or description for the tax, used for identification or display purposes.|
|value|number|true|none|The numeric value of the tax. It represents the amount or percentage, depending on the valueType.|
|valueType|string|true|none|A string indicating the type of tax value. Valid values are 'FIXED' for a fixed amount and 'PERCENT' for a percentage-based tax.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|FIXED|
|valueType|PERCENT|

<h2 id="tocS_TaxResponse">TaxResponse</h2>
<!-- backwards compatibility -->
<a id="schemataxresponse"></a>
<a id="schema_TaxResponse"></a>
<a id="tocStaxresponse"></a>
<a id="tocstaxresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|Indicates whether this tax entry is archived. A boolean value.|
|archivedAt|string(date-time)|false|none|The date and time when this tax entry was archived, in ISO 8601 format.|
|createdAt|string(date-time)|false|none|The date and time when this tax entry was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this tax entry.|
|label|string|false|none|A descriptive label for this tax entry.|
|updatedAt|string(date-time)|false|none|The date and time when this tax entry was last updated, in ISO 8601 format.|
|value|number|false|none|The numerical value of the tax.|
|valueType|string|false|none|The type of value for the tax, which can be either 'FIXED' or 'PERCENT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|FIXED|
|valueType|PERCENT|
