import { createRoute, z } from '@hono/zod-openapi'

const AspectSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of the aspect. For example, <code>MINIMUM_REQUIRED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AspectKeyEnum'>eBay API documentation</a>",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The value of the aspect. For example, if the aspect is a percentage, a value of '2.0' would equal 2%.",
      }),
  })
  .openapi({ description: 'A type that contains the aspect fields.', required: [] })
  .openapi('Aspect')

const AlertDimensionSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The key field of the applied dimension. For example, the marketplace Id. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:DimensionKeyEnum'>eBay API documentation</a>",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The value field of the applied dimension. For example, if the key is a <code>MARKETPLACE_ID</code>, the value would be from <a href='/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>MarketplaceIdEnum</a>.",
      }),
  })
  .openapi({ description: 'A type that contains the dimension fields.', required: [] })
  .openapi('AlertDimension')

const AlertDetailsSchema = z
  .object({
    aspect: AspectSchema.exactOptional().openapi({
      description: 'The aspect information of the alert including keys and values.',
    }),
    dimension: AlertDimensionSchema.exactOptional().openapi({
      description: 'The dimension information of the alert including keys and values.',
    }),
  })
  .openapi({ description: 'A type that contains the alert detail fields.', required: [] })
  .openapi('AlertDetails')

const AlertSchema = z
  .object({
    alertType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of alert message. For example, an invalid bid percentage. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AlertTypeEnum'>eBay API documentation</a>",
      }),
    details: z
      .array(AlertDetailsSchema)
      .exactOptional()
      .openapi({ description: 'A description of the alert including dimensions and aspects.' }),
  })
  .openapi({
    description: 'A type that contains the alert message fields for the ad.',
    required: [],
  })
  .openapi('Alert')

const AdSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. This ID is created after a successful <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> call, and all ad groups must be associated with a CPC campaign.',
      }),
    adId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique eBay-assigned ID that is generated when the ad is created.',
      }),
    adStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current status of the CPC ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum\'>eBay API documentation</a>',
      }),
    alerts: z
      .array(AlertSchema)
      .exactOptional()
      .openapi({ description: 'An array containing alert messages for the ad.' }),
    bidPercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><span class="tablenote"><b>Note:</b>This field will always be returned for campaigns that use the Cost Per Sale (CPS) funding model. It will not be returned for campaigns that use the Cost Per Click (CPC) funding model.</span><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0',
      }),
    inventoryReferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>  <p>An <i>inventoryItemGroupKey</i> is a value that the seller defines to indicate a listing that\'s the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that\'s available in multiple sizes and colors).</p><p>This field is only returned if the ad is associated with a SKU or an inventory item group value.</p>',
      }),
    inventoryReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The enumeration value returned here indicates the type of listing the inventoryReferenceId references. The value returned here will be <code>INVENTORY_ITEM</code> for a single-variation listing, or <code>INVENTORY_ITEM_GROUP</code> for a multiple-variation listing. <p>This field is only returned if the ad is associated with a SKU or an inventory item group value.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>",
      }),
    listingId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique eBay-assigned ID that is generated when a listing is created.',
      }),
  })
  .openapi({ description: 'A type that defines the fields for an ad.', required: [] })
  .openapi('Ad')

const AmountSchema = z
  .object({
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum\'>eBay API documentation</a>',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The monetary amount in the specified <b>currency</b>.  <br><br><i>Required in</i> the <b>amount</b> type.',
      }),
  })
  .openapi({
    description:
      'A complex type that describes the value of a monetary amount as represented by a global currency.',
    required: [],
  })
  .openapi('Amount')

const AdGroupSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.',
      }),
    adGroupStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An enumeration value representing the current status of the ad group.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a>",
      }),
    defaultBid: AmountSchema.exactOptional().openapi({
      description:
        'A bid amount that applies to all of the keywords in an ad group that do not have individual bids. For all keywords without individual bids, the default bid is the amount that the seller will pay per click for the listings in the ad group in the promoted listings campaign.<br><br><b>Valid Values</b>: 0.5, 0.75',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The seller-defined name of the ad group.' }),
  })
  .openapi({
    description:
      'A container for the details of an existing ad group.<br /><br />An ad group can be added to a campaign that uses the Cost Per Click (CPC) funding model. A campaign may have multiple ad groups. All listings that are promoted in the campaign are included in the ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>',
    required: [],
  })
  .openapi('AdGroup')

const AdGroupPagedCollectionResponseSchema = z
  .object({
    adGroups: z
      .array(AdGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'The details of existing ad groups, such as the name, ID, and status of the ad groups.',
      }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set.',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p><b>Default:</b> 0</p><br><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results.',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of items retrieved in the result set.<br /><br /><span class="tablenote"><b>Note: </b>If no items are found, this field is returned with a value of <code>0</code>.</span>',
      }),
  })
  .openapi({
    description:
      'A container for the details of a paged collection of ad groups.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>',
    required: [],
  })
  .openapi('AdGroupPagedCollectionResponse')

const AdIdsSchema = z
  .object({
    adIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of ad IDs. Only one ad can be deleted per operation and only one adId value will be returned.',
      }),
  })
  .openapi({ description: 'This type is a container for a list of ad IDs.', required: [] })
  .openapi('AdIds')

const AdPagedCollectionResponseSchema = z
  .object({
    ads: z
      .array(AdSchema)
      .exactOptional()
      .openapi({ description: 'The list of ads that matched the request criteria.' }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.<p><b>Default</b>: <code>10</code>',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the next page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be increased to retrieve the next page of results. <br><br><b>Max length</b>: 2048',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first result on the current page. This value can be set in the request with the <b>offset</b> query parameter. If the <b>offset</b> value is not set, it defaults to zero.<p><b>Default</b>: <code>0</code></p><p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields that paginate the ads returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set.',
    required: [],
  })
  .openapi('AdPagedCollectionResponse')

const AdReferenceSchema = z
  .object({
    adId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.',
      }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The getAd URI of an ad. You can use this URI to retrieve the ad.' }),
  })
  .openapi({
    description: 'This type defines the fields for an ad ID and its associated URL.',
    required: [],
  })
  .openapi('AdReference')

const AdReferencesSchema = z
  .object({
    ads: z
      .array(AdReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of ad IDs. An ad ID is generated for each successfully created ad. Only one ad can be created per operation.',
      }),
  })
  .openapi({
    description: 'This type is a container for a list of ad IDs and their associated URIs.',
    required: [],
  })
  .openapi('AdReferences')

const ErrorParameterSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity that threw the error.' }),
    value: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
  })
  .openapi({ description: 'Container for a error parameter.', required: [] })
  .openapi('ErrorParameter')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The category type for this error or warning. It takes an ErrorCategory object which can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service\'s business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul>',
      }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the domain containing the service or application.' }),
    errorId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.',
      }),
    inputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use <i>JSONPath</i> notation.",
      }),
    longMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An expanded version of message that should be around 100-200 characters long, but is not required to be such.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An end user and app developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.",
      }),
    outputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies specific response elements associated with the error, if any. Path format is the same as <code>inputRefId</code>.',
      }),
    parameters: z
      .array(ErrorParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'This optional complex field type contains a list of one or more context-specific <code>ErrorParameter</code> objects, with each item in the list entry being a parameter (or input field name) that caused an error condition. Each <code>ErrorParameter</code> object consists of two fields, a <code>name</code> and a <code>value</code>.',
      }),
    subdomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain.",
      }),
  })
  .openapi({
    description: 'A container that defines the elements of error and warning messages.',
    required: [],
  })
  .openapi('Error')

const AdResponseSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.<span class="tablenote"><b>Note:</b> This field will always be returned for  campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.</span>',
      }),
    adId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span>',
      }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'An array of errors associated with the request.' }),
    href: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The getAd URI that points to the ad.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span>',
      }),
    listingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a listing that is generated when the listing is created.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An HTTP status code indicating if the corresponding ad was successfully created or not. <code>200 Successful</code> should be returned for successfully created ads.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller creates, or attempts to create.</span>',
      }),
  })
  .openapi({
    description: 'This type defines the fields returned in an ad response.',
    required: [],
  })
  .openapi('AdResponse')

const AdUpdateResponseSchema = z
  .object({
    adId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique eBay-assigned ID that is generated when the ad is created.',
      }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'A list of errors associated with the specified listing ID.' }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI for the ad, which can be used to retrieve the ad.' }),
    listingId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique eBay-assigned ID that is generated when the listing is created.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An HTTP status code that indicates the response-status of the request.',
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the ad update response.',
    required: [],
  })
  .openapi('AdUpdateResponse')

const AdUpdateStatusByListingIdResponseSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.',
      }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'A list of errors associated with the specified listing ID.' }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI for the ad, which can be used to retrieve the ad.' }),
    listingId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique eBay-assigned ID that is generated when the listing is created.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An HTTP status code that indicates the response-status of the request.',
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the ad update status by listing ID response.',
    required: [],
  })
  .openapi('AdUpdateStatusByListingIdResponse')

const AdUpdateStatusResponseSchema = z
  .object({
    adId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique eBay-assigned ID that is generated when the ad is created.',
      }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'A list of errors associated with the specified listing ID.' }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI for the ad, which can be used to retrieve the ad.' }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An HTTP status code that indicates the response-status of the request.',
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the ad update status response.',
    required: [],
  })
  .openapi('AdUpdateStatusResponse')

const AdditionalInfoDataSchema = z
  .object({
    metricKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The metric used to provide additional information for the suggested keyword.<br /><br /><strong>Valid Values:</strong> <ul><li><code>ACTIVE_SELLER_COUNT</code></li><li><code>SEARCH_VOLUME</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MetricEnum'>eBay API documentation</a>",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The data provided for the specified metric.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> All metric data is compiled for the marketplace associated with the specified campaign ID.</span>',
      }),
  })
  .openapi({
    description:
      'A type that defines the data produced for additional information about suggested keywords.',
    required: [],
  })
  .openapi('AdditionalInfoData')

const AdditionalInfoSchema = z
  .object({
    infoType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of additional information provided for the suggested keyword.<br /><br /><strong>Valid Value:</strong> <code>KEYWORD_INSIGHTS</code> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdditionalInfoEnum'>eBay API documentation</a>",
      }),
    metrics: z
      .array(AdditionalInfoDataSchema)
      .exactOptional()
      .openapi({ description: 'A list of additional data provided for the suggested keyword.' }),
  })
  .openapi({
    description: 'A type that provides additional information for suggested keywords.',
    required: [],
  })
  .openapi('AdditionalInfo')

const AdsSchema = z
  .object({
    ads: z
      .array(AdSchema)
      .exactOptional()
      .openapi({
        description: 'A list of ad IDs. An ad ID is generated for each successfully created ad.',
      }),
  })
  .openapi({ description: 'This type defines the container for an array of ads.', required: [] })
  .openapi('Ads')

const BaseResponseSchema = z
  .object({
    warnings: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'The container for any warning error messages generated by the request. Warnings are not fatal in that they do not prevent the call from running and returning a response, but they should be reviewed to ensure your requests are returning the responses you expect.',
      }),
  })
  .openapi({
    description: 'This type defines the fields for any warning error messages.',
    required: [],
  })
  .openapi('BaseResponse')

const BudgetSchema = z
  .object({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The allocated budget amount for a CPC Promoted Listings campaign.',
    }),
    budgetStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The budget status for a CPC Promoted Listings campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:BudgetStatusEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      'A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>',
    required: [],
  })
  .openapi('Budget')

const BudgetRequestSchema = z
  .object({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The allocated budget amount for a CPC Promoted Listings campaign.',
    }),
  })
  .openapi({
    description:
      'A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>',
    required: [],
  })
  .openapi('BudgetRequest')

const BulkAdResponseSchema = z
  .object({
    responses: z
      .array(AdResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed.',
      }),
  })
  .openapi({
    description: 'This type defines the fields for the create ads in bulk response.',
    required: [],
  })
  .openapi('BulkAdResponse')

const BulkAdUpdateResponseSchema = z
  .object({
    responses: z
      .array(AdUpdateResponseSchema)
      .exactOptional()
      .openapi({ description: 'A set of ad listings processed by the call.' }),
  })
  .openapi({
    description: 'A type that defines the fields for updated ads in the bulk response.',
    required: [],
  })
  .openapi('BulkAdUpdateResponse')

const BulkAdUpdateStatusByListingIdResponseSchema = z
  .object({
    responses: z
      .array(AdUpdateStatusByListingIdResponseSchema)
      .exactOptional()
      .openapi({ description: 'An array of processed ad listings in bulk.' }),
  })
  .openapi({
    description: 'A type that defines the fields for the updated ad status in the bulk response.',
    required: [],
  })
  .openapi('BulkAdUpdateStatusByListingIdResponse')

const BulkAdUpdateStatusResponseSchema = z
  .object({
    responses: z
      .array(AdUpdateStatusResponseSchema)
      .exactOptional()
      .openapi({ description: 'An array of processed ad listings in bulk.' }),
  })
  .openapi({
    description: 'A type that defines the fields for the updated ad status in the bulk response.',
    required: [],
  })
  .openapi('BulkAdUpdateStatusResponse')

const CreateAdRequestSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. <p><i>Required if</i> the campaign\'s funding model is Cost Per Click (CPC).</p><p>Create an ad group using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> method.</p><p>Specify the campaign to associate the ad group with using the <b>campaign_id</b> path parameter. </p><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span>',
      }),
    bidPercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br><br><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>,&nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0",
      }),
    listingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a listing that is generated when the listing is created.  <p class="tablenote"><b>Note:</b> This field accepts listing IDs, as generated by the Inventory API, and item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).</p>',
      }),
  })
  .openapi({ description: 'This type defines the fields for the create ad request.', required: [] })
  .openapi('CreateAdRequest')

const BulkCreateAdRequestSchema = z
  .object({
    requests: z
      .array(CreateAdRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of listing IDs and their associated bid percentages, which the request uses to create ads in bulk. This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).  <br><br><b>Maximum: </b> 500 IDs per call',
      }),
  })
  .openapi({
    description: 'This type defines the fields for the create ads in bulk by listing IDs.',
    required: [],
  })
  .openapi('BulkCreateAdRequest')

const CreateAdsByInventoryReferenceRequestSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<span class="tablenote"><b>Note:</b> This field is not currently in use. Ad groups are only applicable to Promoted Listings Advanced (PLA) ad campaigns that use the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>',
      }),
    bidPercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br /><br /><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).<br /><br />The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee.<br /><br />The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign.<br /><br />The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>,&nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0",
      }),
    inventoryReferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>  <p>An <i>inventoryItemGroupKey</i> is a value that the seller defines to indicate a listing that\'s the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that\'s available in multiple sizes and colors).</p>  <p>You must always specify both an <b>inventoryReferenceId</b> and an <b>inventoryReferenceType</b> to indicate an item that\'s managed with the Inventory API.</p>',
      }),
    inventoryReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the type of item the <b>inventoryReferenceId</b> references. The item can be either an <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code>. <p>You must always pair an <b>inventoryReferenceId</b> with and <b>inventoryReferenceType</b>.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      'This type defines the fields needed to create ads by inventory reference ID request.',
    required: [],
  })
  .openapi('CreateAdsByInventoryReferenceRequest')

const BulkCreateAdsByInventoryReferenceRequestSchema = z
  .object({
    requests: z
      .array(CreateAdsByInventoryReferenceRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of inventory reference ID and inventory reference type pairs, and the bid percentage, which the call uses to create ads in bulk.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields used to create ads in bulk by inventory reference IDs.',
    required: [],
  })
  .openapi('BulkCreateAdsByInventoryReferenceRequest')

const CreateAdsByInventoryReferenceResponseSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.<span class="tablenote"><b>Note:</b> This field will always be returned for campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.</span>',
      }),
    ads: z
      .array(AdReferenceSchema)
      .exactOptional()
      .openapi({
        description: 'A list of ad IDs. An ad ID is generated for each successfully created ad.',
      }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description: 'An array of errors or warnings associated with the create-ads request.',
      }),
    inventoryReferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>',
      }),
    inventoryReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the type of item the <b>inventoryReferenceId</b> references. The item can be either an <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>",
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An HTTP status code that indicates the response-status of the request. Check this code to see if the ads were successfuly created.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields returned when you create an ad by inventory reference ID.',
    required: [],
  })
  .openapi('CreateAdsByInventoryReferenceResponse')

const BulkCreateAdsByInventoryReferenceResponseSchema = z
  .object({
    responses: z
      .array(CreateAdsByInventoryReferenceResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed.',
      }),
  })
  .openapi({
    description:
      'This type defines the response fields used by the <b>bulkCreateAdsByInventoryReference</b> method.',
    required: [],
  })
  .openapi('BulkCreateAdsByInventoryReferenceResponse')

const CreateKeywordRequestSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group that the corresponding keyword will be added to. This ad group must be a part of the campaign that is specified in the call URI.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller, and <a href="/api-docs/sell/marketing/resources/keywords/methods/getKeywords">getKeywords</a> to retrieve the keyword IDs for a seller\'s keywords.</span>',
      }),
    bid: AmountSchema.exactOptional().openapi({
      description:
        'This container is used to set the bid for the keyword. Each time a listing is retrieved in search results using this keyword and clicked on, the seller will be charged this amount. Each click goes toward the daily budget set up for the CPC campaign. If the bid is not provided, then the default bid associated with the ad group is used.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/suggestBids">suggestBids</a> method to retrieve the suggested bids for keywords.</span>',
    }),
    keywordText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Input the keyword into this field.' }),
    matchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description: 'A type that defines the fields for the <b>CreateKeyword</b> request.',
    required: [],
  })
  .openapi('CreateKeywordRequest')

const BulkCreateKeywordRequestSchema = z
  .object({
    requests: z
      .array(CreateKeywordRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'This array is used to pass in multiple keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model. Up to {max value} keywords can be created with one call.',
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the bulk request to create keywords.',
    required: [],
  })
  .openapi('BulkCreateKeywordRequest')

const KeywordResponseSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the ad group that the keyword was added to.' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'This container will be returned if there is an issue creating the corresponding keyword and/or adding that keyword to the corresponding ad group.',
      }),
    href: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The getKeyword URI for the keyword, which is used to retrieve the keyword. This URI will be returned for each successfully created keyword.',
      }),
    keywordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a keyword that is generated for an ad group. This keyword ID will be generated for each successfully created keyword.',
      }),
    keywordText: z.string().exactOptional().openapi({ description: 'The text of the keyword.' }),
    matchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>",
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An HTTP status code is returned for each keyword to indicate the success or failure of adding that keyword to the ad group.',
      }),
  })
  .openapi({
    description: 'A type that defines the response fields used by the <b>Keyword</b> method.',
    required: [],
  })
  .openapi('KeywordResponse')

const BulkCreateKeywordResponseSchema = z
  .object({
    responses: z
      .array(KeywordResponseSchema)
      .exactOptional()
      .openapi({ description: 'A list of keywords that have been processed by the request.' }),
  })
  .openapi({
    description:
      'A type that contains the response fields for the bulk request to create keywords.',
    required: [],
  })
  .openapi('BulkCreateKeywordResponse')

const CreateNegativeKeywordRequestSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group to which the corresponding negative keyword will be added.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the negative keyword is being created at the ad group level.',
      }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.<br /><br /><i>Required if</i> the negative keyword is being created at the ad group level.',
      }),
    negativeKeywordMatchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum\'>eBay API documentation</a>',
      }),
    negativeKeywordText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The negative keyword text.' }),
  })
  .openapi({
    description: 'A type that defines the fields for the <b>CreateNegativeKeyword</b> request.',
    required: [],
  })
  .openapi('CreateNegativeKeywordRequest')

const BulkCreateNegativeKeywordRequestSchema = z
  .object({
    requests: z
      .array(CreateNegativeKeywordRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'This array is used to pass in multiple negative keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model.',
      }),
  })
  .openapi({
    description:
      'A type that contains the fields for the bulk request to create negative keywords.',
    required: [],
  })
  .openapi('BulkCreateNegativeKeywordRequest')

const NegativeKeywordResponseSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for an ad group that is generated when an ad group is first created and associated with a campaign.',
      }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.',
      }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'This container will be returned if there is an issue creating the corresponding negative keyword.',
      }),
    href: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI for the negative keyword, which is used to retrieve the negative keyword. This URI will be returned for each successfully created negative keyword.',
      }),
    negativeKeywordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a negative keyword. This negative keyword ID will be generated for each successfully created negative keyword.',
      }),
    negativeKeywordMatchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum\'>eBay API documentation</a>',
      }),
    negativeKeywordText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text for the negative keyword.' }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The status of the request to create a negative keyword. This field indicates whether the process was successful or not.',
      }),
  })
  .openapi({ description: 'A type that defines the negative keyword response.', required: [] })
  .openapi('NegativeKeywordResponse')

const BulkCreateNegativeKeywordResponseSchema = z
  .object({
    responses: z
      .array(NegativeKeywordResponseSchema)
      .exactOptional()
      .openapi({
        description: 'A list of negative keywords that have been processed by the request.',
      }),
  })
  .openapi({
    description:
      'A type that contains the response fields for the bulk request to create negative keywords.',
    required: [],
  })
  .openapi('BulkCreateNegativeKeywordResponse')

const DeleteAdRequestSchema = z
  .object({
    listingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a listing that is generated when the listing is created.  <p class="tablenote"><b>Note:</b> This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).</p>',
      }),
  })
  .openapi({
    description: 'This type defines the fields used in a delete-ad request.',
    required: [],
  })
  .openapi('DeleteAdRequest')

const BulkDeleteAdRequestSchema = z
  .object({
    requests: z
      .array(DeleteAdRequestSchema)
      .exactOptional()
      .openapi({ description: 'An array of the listing IDs that identify the ads to remove.' }),
  })
  .openapi({
    description: 'This type defines the fields that the call uses to remove ads in bulk.',
    required: [],
  })
  .openapi('BulkDeleteAdRequest')

const DeleteAdResponseSchema = z
  .object({
    adId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete.',
      }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'An array of the errors or warnings associated with the request.' }),
    listingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a listing that is generated when the listing is created.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An HTTP status code that indicates the response-status of the request. Check this code to see if the ad was successfully deleted.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>',
      }),
  })
  .openapi({
    description: 'This type defines the fields returned in a delete-ad response.',
    required: [],
  })
  .openapi('DeleteAdResponse')

const BulkDeleteAdResponseSchema = z
  .object({
    responses: z
      .array(DeleteAdResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of the ads that were deleted by the <b>bulkDeleteAdsByListingId</b> request, including information associated with each individual delete request.',
      }),
  })
  .openapi({
    description:
      'This type defines a container that lists the ads that <b>bulkDeleteAdsByListingId</b> deleted.',
    required: [],
  })
  .openapi('BulkDeleteAdResponse')

const DeleteAdsByInventoryReferenceRequestSchema = z
  .object({
    inventoryReferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing.',
      }),
    inventoryReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The enumeration value passed into this field indicates the type of value used for the corresponding <b>inventoryReferenceId</b> value. The enumeration value used here will either be <code>INVENTORY_ITEM</code> (to delete the ad for a single SKU listing) or <code>INVENTORY_ITEM_GROUP</code> (to delete the ad for a multiple-variation listing). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      'This type defines the fields needed to delete an ad by its inventory reference ID.  You must always supply both <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.',
    required: [],
  })
  .openapi('DeleteAdsByInventoryReferenceRequest')

const BulkDeleteAdsByInventoryReferenceRequestSchema = z
  .object({
    requests: z
      .array(DeleteAdsByInventoryReferenceRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of inventory referenceID and inventory reference type pairs that specify the set of ads to remove in bulk.',
      }),
  })
  .openapi({
    description:
      'This type defines the request fields that <b>bulkDeleteAdsByInventoryReference</b> uses to delete ads in bulk.',
    required: [],
  })
  .openapi('BulkDeleteAdsByInventoryReferenceRequest')

const DeleteAdsByInventoryReferenceResponseSchema = z
  .object({
    adIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete.<span class="tablenote"><b>Note:</b>Although the field name is plural and it is an array, only one ad ID will be returned here since there can be only one ad per listing.</span>',
      }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'The container for the errors associated with the request.' }),
    inventoryReferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing.',
      }),
    inventoryReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The enumeration value returned here indicates if the ad was for a single-variation listing or a multiple-variation listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>",
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An HTTP status code indicating if the corresponding ad was successfully deleted or not. <code>200 Successful</code> should be returned for successfully deleted ads. <span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>',
      }),
  })
  .openapi({
    description:
      'This type defines the fields returned by request to delete a set of ads by inventory reference ID.',
    required: [],
  })
  .openapi('DeleteAdsByInventoryReferenceResponse')

const BulkDeleteAdsByInventoryReferenceResponseSchema = z
  .object({
    responses: z
      .array(DeleteAdsByInventoryReferenceResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of the ads that were deleted by the <b>bulkDeleteAdsByInventoryReference</b> request, including information associated with each individual delete request.',
      }),
  })
  .openapi({
    description:
      'This type defines a container that lists the ads that <b>bulkDeleteAdsByInventoryReference</b> deleted.',
    required: [],
  })
  .openapi('BulkDeleteAdsByInventoryReferenceResponse')

const UpdateAdStatusByListingIdRequestSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span>',
      }),
    adStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An enumeration value representing the current status of the ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a>",
      }),
    listingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a listing that is generated when the listing is created.<br /><br /><span class="tablenote"><b>Note:</b> This field accepts both listing IDs (as generated by the Inventory API), and item IDs (as used in the eBay Traditional API set, such as the Trading and Finding APIs).</span>',
      }),
  })
  .openapi({
    description:
      'A type that contains the fields for the <b>UpdateAdStatusByListingId</b> request.',
    required: [],
  })
  .openapi('UpdateAdStatusByListingIdRequest')

const BulkUpdateAdStatusByListingIdRequestSchema = z
  .object({
    requests: z
      .array(UpdateAdStatusByListingIdRequestSchema)
      .exactOptional()
      .openapi({ description: 'An array of listing IDs and bid percentages.' }),
  })
  .openapi({
    description:
      'A type that defines the fields for the <b>BulkUpdateAdStatusByListingId</b> request.',
    required: [],
  })
  .openapi('BulkUpdateAdStatusByListingIdRequest')

const UpdateAdStatusRequestSchema = z
  .object({
    adId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique eBay-assigned ID that is generated when the ad is created.',
      }),
    adStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An enumeration value representing the current status of the ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the <b>UpdateAdStatus</b> request.',
    required: [],
  })
  .openapi('UpdateAdStatusRequest')

const BulkUpdateAdStatusRequestSchema = z
  .object({
    requests: z
      .array(UpdateAdStatusRequestSchema)
      .exactOptional()
      .openapi({ description: 'An array of listing IDs and bid percentages.' }),
  })
  .openapi({
    description: 'A type that defines the fields for the <b>BulkUpdateAdStatus</b> request.',
    required: [],
  })
  .openapi('BulkUpdateAdStatusRequest')

const UpdateAdsByInventoryReferenceResponseSchema = z
  .object({
    ads: z
      .array(AdReferenceSchema)
      .exactOptional()
      .openapi({ description: 'A list of ad IDs and links to retrieve them.' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'A container for all of the errors associated with the specified inventory reference ID.',
      }),
    inventoryReferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference ID associated with the ad. The reference ID could be a SKU number or Inventory Item Group, depending on value of <code>inventoryReferenceType</code>.',
      }),
    inventoryReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The inventory reference type associated with the ad. The inventory reference type could be a SKU number or Inventory Item Group. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>",
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An HTTP status code that indicates whether or not the CPS ad was successfully updated.',
      }),
  })
  .openapi({
    description:
      'A type that contains the response fields used by the <b>UpdateAdsByInventoryReference</b> method.',
    required: [],
  })
  .openapi('UpdateAdsByInventoryReferenceResponse')

const BulkUpdateAdsByInventoryReferenceResponseSchema = z
  .object({
    responses: z
      .array(UpdateAdsByInventoryReferenceResponseSchema)
      .exactOptional()
      .openapi({
        description: 'A list of inventory references that were processed from the request.',
      }),
  })
  .openapi({
    description:
      'A type that defines the fields for the <b>BulkUpdateAdStatusByInventoryReference</b> response.',
    required: [],
  })
  .openapi('BulkUpdateAdsByInventoryReferenceResponse')

const UpdateKeywordByKeywordIdRequestSchema = z
  .object({
    bid: AmountSchema.exactOptional().openapi({
      description:
        'This container is used to set or change the bid percentage for the keyword. Each time a listing is retrieved in search results using this keyword and clicked on, the seller will be charged this amount. Each click goes toward the daily budget set up for the Cost Per Click (CPC) campaign.',
    }),
    keywordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is used to identify the keyword to be updated. The <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method can be used to retrieve keywordId values.',
      }),
    keywordStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href=\"/api-docs/sell/marketing/resources/keyword/methods/getKeyword\">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the <b>UpdateKeywordByKeywordId</b> request.',
    required: [],
  })
  .openapi('UpdateKeywordByKeywordIdRequest')

const BulkUpdateKeywordRequestSchema = z
  .object({
    requests: z
      .array(UpdateKeywordByKeywordIdRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Use this array to update the bid values and/or statuses of one or more existing keywords.',
      }),
  })
  .openapi({
    description: 'A type that defines the fields for the <b>BulkUpdateKeyword</b> request.',
    required: [],
  })
  .openapi('BulkUpdateKeywordRequest')

const UpdateKeywordResponseSchema = z
  .object({
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'This container will be returned if there are one or more issues associated with modifying the corresponding keyword.',
      }),
    keywordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field identifies the keyword that the seller updated, or attempted to update.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An HTTP status code is returned for each keyword to indicate the success or failure of updating that keyword.',
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the <b>UpdateKeyword</b> response.',
    required: [],
  })
  .openapi('UpdateKeywordResponse')

const BulkUpdateKeywordResponseSchema = z
  .object({
    responses: z
      .array(UpdateKeywordResponseSchema)
      .exactOptional()
      .openapi({
        description: 'A list of keywords that have been processed from the bulk request.',
      }),
  })
  .openapi({
    description: 'A type that defines the fields for the <b>BulkUpdateKeyword</b> response.',
    required: [],
  })
  .openapi('BulkUpdateKeywordResponse')

const UpdateNegativeKeywordIdRequestSchema = z
  .object({
    negativeKeywordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword.',
      }),
    negativeKeywordStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description: 'A type that defines the fields used to update a negative keyword.',
    required: [],
  })
  .openapi('UpdateNegativeKeywordIdRequest')

const BulkUpdateNegativeKeywordRequestSchema = z
  .object({
    requests: z
      .array(UpdateNegativeKeywordIdRequestSchema)
      .exactOptional()
      .openapi({
        description: 'An array to update the statuses of one or more existing negative keywords.',
      }),
  })
  .openapi({
    description: 'A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> request.',
    required: [],
  })
  .openapi('BulkUpdateNegativeKeywordRequest')

const UpdateNegativeKeywordResponseSchema = z
  .object({
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'A container that will be returned if there are one or more issues associated with modifying the corresponding negative keyword.',
      }),
    negativeKeywordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An HTTP status code that indicates the success or failure of updating that negative keyword.',
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the <b>UpdateNegativeKeyword</b> response.',
    required: [],
  })
  .openapi('UpdateNegativeKeywordResponse')

const BulkUpdateNegativeKeywordResponseSchema = z
  .object({
    responses: z
      .array(UpdateNegativeKeywordResponseSchema)
      .exactOptional()
      .openapi({
        description: 'A list of negative keywords that have been processed from the bulk request.',
      }),
  })
  .openapi({
    description:
      'A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> response.',
    required: [],
  })
  .openapi('BulkUpdateNegativeKeywordResponse')

const CampaignBudgetSchema = z
  .object({
    daily: BudgetSchema.exactOptional().openapi({
      description:
        "The daily budget limit for the Cost Per Click (CPC) Promoted Listings campaign.<br /><br /><i>Required if</i> the campaign's funding model is CPC.<br /><br />This will be a dollar value. All clicks using the keywords defined for the campaign will go towards expending the daily budget. Once the daily budget is exceeded for the campaign, all Promoted Listings under the campaign will be turned off until the next day.<br /><br /><b>Valid Values</b>:<ul><li><code>50.00</code></li><li><code>100.00</code></li></ul>",
    }),
  })
  .openapi({
    description:
      'A type that defines the budget details for a Cost Per Click (CPC) Promoted Listings campaign.',
    required: [],
  })
  .openapi('CampaignBudget')

const SelectionRuleSchema = z
  .object({
    brands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of product brands. For more details, see <a href="/api-docs/sell/static/marketing/using-the-selectionrules-container.html ">Using the selectionRules container</a>.',
      }),
    categoryIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains an array of the associated category ID(s).<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, a single-item array containing the category ID associated with the promotion. Required when used in an Item promotion and either specifying a <b>selectionRules</b> container or when <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, an array of category ID(s) associated with the campaign. <br><br>For information on how to get category IDs, see <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#eBay ">eBay Marketplace category IDs</a> and <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Seller ">Seller store category IDs</a>',
      }),
    categoryScope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This enumerated value indicates if the category ID for the item is an identifier for eBay categories or for a seller\'s eBay store categories. <br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, this field includes the type of the category ID for the item(s) to be included in the campaign.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, this field identifies the scope for the corresponding array as eBay categories or for a seller\'s eBay store categories. Required when used in an Item promotion and <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>.  For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/pls:CategoryScopeEnum\'>eBay API documentation</a>',
      }),
    listingConditionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A comma-separated list of unique identifiers for the conditions of listings to be included<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, refer to <a href= "/api-docs/sell/static/marketing/pl-campaign-flow-pls.html#add-by-rule ">Add items to the PLS campaign</a>. Up to four IDs can be specified.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, refer to <a href= "/api-docs/sell/static/metadata/condition-id-values.html ">Item condition ID and name values</a>.',
      }),
    maxPrice: AmountSchema.exactOptional().openapi({
      description:
        'This container sets the maximum price threshold. For more details, see <a href= "/api-docs/sell/marketing/resources/using-the-selectionrules-container.html ">Using the selectionRules container</a>.',
    }),
    minPrice: AmountSchema.exactOptional().openapi({
      description:
        'This container sets the minimum price threshold. For more details, see <a href= "/api-docs/sell/marketing/resources/using-the-selectionrules-container.html ">Using the selectionRules container</a>.',
    }),
  })
  .openapi({
    description:
      'This type defines all rules/inclusion filters used to add listings to campaigns or promotions. Use of the specific fields is different for campaigns or promotions. See <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html ">Using the selectionRules container</a>.',
    required: [],
  })
  .openapi('SelectionRule')

const CampaignCriterionSchema = z
  .object({
    autoSelectFutureInventory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "A field used to indicate whether listings shall be automatically added to, or removed from, a Promoted Listings campaign based on the rules that have been configured for the campaign.<br /><br />If set to <code>true</code>, eBay adds all listings matching the campaign criterion to the campaign, including any new listings created from the items in a seller's inventory.<br /><br /><b>Default:</b> <code>false</code>",
      }),
    criterionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This enum defines the criterion (selection rule) types. Currently, the only criterion type supported is <code>INVENTORY_PARTITION</code>, and you must specify this value if you manage your items with the Inventory API and you want to include items based on their inventory reference IDs.  <br><br>Do not include this field if you manage your listings with Trading API/legacy model. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CriterionTypeEnum'>eBay API documentation</a>",
      }),
    selectionRules: z
      .array(SelectionRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'This container shows all of the rules/inclusion filters used to add listings to the campaign. For information on using the contained fields, see <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign. If you populate the campaignCriterion object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign.',
    required: [],
  })
  .openapi('CampaignCriterion')

const DynamicAdRatePreferenceSchema = z
  .object({
    adRateAdjustmentPercent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The percentage above or below (-) the eBay suggested ad rate that a seller is willing to pay.<br /><br />This specifies the maximum and minimum values to which an ad rate can be dynamically adjusted.',
      }),
    adRateCapPercent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum value (specified as a percentage) to which the eBay suggested ad rate can be adjusted. The adjusted ad rate will never exceed this percentage.',
      }),
  })
  .openapi({
    description:
      'A type that defines the ad rate details for a Promoted Listings Standard (PLS) ad campaign.',
    required: [],
  })
  .openapi('DynamicAdRatePreference')

const FundingStrategySchema = z
  .object({
    adRateStrategy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ad rate strategy that shall be applied to the campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum'>eBay API documentation</a>",
      }),
    bidPercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><span class="tablenote"><b>Note:</b>This field is only relevant for campaigns that use the CPS funding model and a fixed ad rate. It is not used for campaigns that use the Cost Per Click (CPC) funding model and should not be provided when the selected adRateStrategy for the campaign is dynamic.</span><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0',
      }),
    dynamicAdRatePreferences: z
      .array(DynamicAdRatePreferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'A field that indicates whether a single, user-defined bid percentage (also known as the <i>ad rate</i>) should be used, or whether eBay should automatically adjust listings to maintain the daily suggested bid percentage.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Dynamic adjustment is only applicable when the <b>adRateStrategy</b> is set to <code>DYNAMIC</code>.</span><br /><b>Default:</b> <code>FIXED</code>',
      }),
    fundingModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the model that eBay uses to calculate the Promoted Listings fee. <p>For a description of the funding model types, refer to <b>FundingModelTypeEnum</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:FundingModelEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      'This type defines how the Promoted Listings fee is calculated for a Promoted Listings ad campaign.',
    required: [],
  })
  .openapi('FundingStrategy')

const CampaignSchema = z
  .object({
    alerts: z
      .array(AlertSchema)
      .exactOptional()
      .openapi({ description: 'This array contains alert messages for the campaign.' }),
    budget: CampaignBudgetSchema.exactOptional().openapi({
      description:
        'The allocated budget for the Cost Per Click (CPC) Promoted Listings campaign.<span class="tablenote"><b>Note:</b> This field will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>',
    }),
    campaignCriterion: CampaignCriterionSchema.exactOptional().openapi({
      description:
        'The selection rules (criterion) used to select the listings for a campaign. If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the campaign.<span class="tablenote"><b>Note:</b> This container is only returned for rules-based campaigns using the Cost Per Sale (CPS) funding model.</span>',
    }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.',
      }),
    campaignName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters',
      }),
    campaignStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the status of the campaign, such as <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CampaignStatusEnum'>eBay API documentation</a>",
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.',
      }),
    fundingStrategy: FundingStrategySchema.exactOptional().openapi({
      description:
        'This container shows the funding model used for the campaign, and the default bid percentage for a campaign that uses the Cost Per Sale (CPS) funding model. <p>Currently, the supported funding models are <code>COST_PER_SALE</code> and <code>COST_PER_CLICK</code>.',
    }),
    marketplaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the eBay marketplace where the campaign is hosted. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>",
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign">getCampaign</a> to check the status of the campaign.</p>',
      }),
  })
  .openapi({
    description: 'This type defines the fields that describe an ad campaign.',
    required: [],
  })
  .openapi('Campaign')

const CampaignBudgetRequestSchema = z
  .object({
    daily: BudgetRequestSchema.exactOptional().openapi({
      description: 'The daily budget limit for a CPC Promoted Listings campaign.',
    }),
  })
  .openapi({
    description:
      'A container for the details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.',
    required: [],
  })
  .openapi('CampaignBudgetRequest')

const CampaignPagedCollectionResponseSchema = z
  .object({
    campaigns: z
      .array(CampaignSchema)
      .exactOptional()
      .openapi({
        description:
          "This array contains all of the seller's campaign that match the request criteria.",
      }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of campaigns retrieved in the result set.  <br><br>If no campaigns are found, this field is returned with a value of <code>0</code>.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields that paginate the campaigns returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set.',
    required: [],
  })
  .openapi('CampaignPagedCollectionResponse')

const CampaignsSchema = z
  .object({
    campaigns: z
      .array(CampaignSchema)
      .exactOptional()
      .openapi({
        description:
          'This is an array of one or campaigns that match the listing or inventory item group specified in the request.',
      }),
  })
  .openapi({ description: 'This type contains a list of campaigns.', required: [] })
  .openapi('Campaigns')

const CloneCampaignRequestSchema = z
  .object({
    campaignName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A seller-defined name for the newly-cloned campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.',
      }),
    fundingStrategy: FundingStrategySchema.exactOptional().openapi({
      description:
        'This container is used to set the funding model and default bid percentage for the campaign to be cloned.',
    }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the cloned campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p>',
      }),
  })
  .openapi({
    description: 'This type defines the fields needed for a clone-campaign request.',
    required: [],
  })
  .openapi('CloneCampaignRequest')

const CouponConfigurationSchema = z
  .object({
    couponCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay. <br><br>The code must be from 8-15 alphanumeric characters and can contain no more than two dashes ( - ).<br><br>This is required when the promotion type is CODED_COUPON.',
      }),
    couponType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This indicates the type of Coded Coupon promotion, and is required when the promotion type is <b>CODED_COUPON</b>.<br><br>Supported types:<ul><li><b>PRIVATE_SINGLE_SELLER_COUPON:</b> Anyone can use and share the coupon code, but it isn't posted on eBay.</li><li><b>PUBLIC_SINGLE_SELLER_COUPON:</b> Anyone can find the coupon code on eBay and use it.</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:CouponTypeEnum'>eBay API documentation</a>",
      }),
    maxCouponRedemptionPerUser: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This sets the limit on the number of times a buyer can use this coupon. The range of values is 1-10. If no value is provided, a buyer can use the coupon an unlimited number of times.',
      }),
  })
  .openapi({
    description:
      'This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.',
    required: [],
  })
  .openapi('CouponConfiguration')

const CreateAdGroupRequestSchema = z
  .object({
    defaultBid: AmountSchema.exactOptional().openapi({
      description:
        'A bid amount that applies to all of the keywords in an ad group that do not have individual bids.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The seller-defined name of the ad group.' }),
  })
  .openapi({
    description: 'A type that defines the fields for the <b>CreateAdGroup</b> request.',
    required: [],
  })
  .openapi('CreateAdGroupRequest')

const CreateCampaignRequestSchema = z
  .object({
    budget: CampaignBudgetRequestSchema.exactOptional().openapi({
      description:
        'The allocated daily budget for the Cost Per Click (CPC) Promoted Listings campaign.<br /><br /><i>Required if</i> the campaign funding model is CPC.',
    }),
    campaignCriterion: CampaignCriterionSchema.exactOptional().openapi({
      description:
        'This container is used if the seller wishes to create one or more rules for a rules-based campaign. If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the campaign to be created.',
    }),
    campaignName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.',
      }),
    fundingStrategy: FundingStrategySchema.exactOptional().openapi({
      description:
        'This container is used to set the funding model and default bid percentage for a Cost Per Sale (CPS) campaign.',
    }),
    marketplaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the eBay marketplace where the campaign is hosted. See the <b>MarketplaceIdEnum</b> type to get the appropriate enumeration value for the listing marketplace. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>",
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p>',
      }),
  })
  .openapi({
    description:
      'This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).',
    required: [],
  })
  .openapi('CreateCampaignRequest')

const DimensionSchema = z
  .object({
    annotationKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of annotations associated with the dimension of the report.',
      }),
    dimensionKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the dimension on which the report is based. <p>A dimension is an attribute to which the report data applies.</p>',
      }),
  })
  .openapi({
    description:
      'This type defines the annotation and dimension key used by the report. For information on how to set these values, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.',
    required: [],
  })
  .openapi('Dimension')

const InventoryReferenceSchema = z
  .object({
    inventoryReferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The seller's inventory reference ID for an item that is managed with the Inventory API.  <br><br>An inventory reference is either the ID of a single listing or the ID of the parent of an item group listing (a multi-variation listing, such as a shirt that is available in multiple sizes and colors).  <br><br><i>Required if </i> if you supply an <b>inventoryReferenceType</b>.",
      }),
    inventoryReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the type of item indicated by the <b>inventoryReferenceId</b>.  <br><br>This value can be set to either <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code> (if the ID points to a multi-variation listing). <br><br><i>Required if </i> if you supply an <b>inventoryReferenceId</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      'This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.',
    required: [],
  })
  .openapi('InventoryReference')

const CreateReportTaskSchema = z
  .object({
    additionalRecords: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:AdditionalRecordEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of additional records that shall be included in the report, such as non-performing data.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Additional records are only applicable to Promoted Listings Advanced (PLA) campaigns that use the Cost Per Click (CPC) funding model.</span><br /><b>Valid Value:</b> <code>NON_PERFORMING_DATA</code>',
      }),
    campaignIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of campaign IDs to be included in the report task. Call <b>getCampaigns</b> to get a list of the current campaign IDs for a seller.<br /><br />For Promoted Listings Standard (PLS) sellers, this field is required if the <b>reportType</b> is set to <code>CAMPAIGN_PERFORMANCE_REPORT</code> or <code>CAMPAIGN_PERFORMANCE_SUMMARY_REPORT</code>.<br /><br />For Promoted Listings Advanced (PLA) sellers, leave this request field blank to retrieve the details for all campaigns associated with your account, or specify the campaign IDs for which you would like to retrieve the campaign-specific details.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> There is a maximum data limit that cannot be exceeded when generating reports. If this threshold is exceeded, the report will fail. Refer to <a href="/api-docs/sell/static/marketing/pl-reports.html#creation">Promoted Listings reporting</a> in the Selling Integration Guide for details.</span><br /><br /><b>Maximum:</b><ul><li>25 IDs for PLS</li><li>1,000 IDs for PLA</li></ul>',
      }),
    dateFrom: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date defining the start of the timespan covered by the report.<br /><br />Format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock with local offset.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-15T13:00:00-07:00</code>',
      }),
    dateTo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date defining the end of the timespan covered by the report.<br /><br />As with the <b>dateFrom</b> field, format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date. Additionally, the time specified must be a later time than that specified in the <b>dateFrom</b> field.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-17T13:00:00-07:00</code>',
      }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of the dimensions applied to the report.  <p>A dimension is an attribute to which the report data applies. For example, if you set <b>dimensionKey</b> to <code>campaign_id</code> in a Campaign Performance Report, the data will apply to the entire ad campaign. For information on the dimensions and how to specify them, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.</p>',
      }),
    fundingModels: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:FundingModelEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The funding model for the campaign that shall be included in the report.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The default funding model for Promoted Listings reports is <code>COST_PER_SALE</code>.</span><br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Multiple value support for the <b>fundingModels</b> array has been deprecated. See <a href ="/develop/apis/api-deprecation-status ">API&nbsp;Deprecation&nbsp;Status</a> for information.</span><br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul><i>Required if</i> the campaign funding model is Cost Per Click (CPC).',
      }),
    inventoryReferences: z
      .array(InventoryReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'You can use this field to supply an array of items to include in the report if you manage your inventory with the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.  <br><br>This field is mutually exclusive with the <b>listingIds</b> field; if you populate this field, <i>do not</i> populate the <b>listingIds</b> field.  <br><br>An inventory reference identifies an item in your inventory using a pair of values, where the <b>inventoryReferenceId</b> can be either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b>, where an <b>inventoryItemGroupKey</b> is seller-defined ID for an inventory item group (a multiple-variation listing). <br><br>Couple the <b>inventoryReferenceId</b> with an <b>inventoryReferenceType</b> identifier to fully identify an item in your inventory.  <br><br><b>Maximum: </b> 500 items <br><br><i>Required if </i> you do not supply an array of <b>listingId</b> values or if you set <b>reportType</b> to <code>INVENTORY_PERFORMANCE_REPORT</code>.',
      }),
    listingIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Use this field to supply an array of listing IDs you want to include in the report.<br><br>A listing ID is the eBay listing identifier that is generated when the listing is created. This field accepts listing ID values generated with both the Inventory API and the eBay Traditional APIs, such as the Trading and Finding APIs.<br><br><span class="tablenote"><span style="color:#FF0000"><strong>Important:</strong></span> This field is mutually exclusive with the <b>inventoryReferences</b> field; if you populate this field, <i>do not</i> populate the <b>inventoryReferences</b> field.</span><br /><br />For Promoted Listings Standard (PLS) sellers, this field is required if you do not supply an array of <b>inventoryReferences</b> values or if you set the <b>reportType</b> to <code>LISTING_PERFORMANCE_REPORT</code>.<br /><br />For Promoted Listings Advanced (PLA) sellers, leave this field blank to retrieve the details for all listings associated with the specified campaign IDs (or all campaigns associated with your account, if no campaign IDs are specified), or specify the listing IDs for which you would like to retrieve the listing-specific details.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> There is a maximum data limit that cannot be exceeded when generating reports. If this threshold is exceeded, the report will fail. Refer to <a href="/api-docs/sell/static/marketing/pl-reports.html#creation">Promoted Listings reporting</a> in the Selling Integration Guide for details.</span><br /><br /><b>Maximum:</b> 500 listings',
      }),
    marketplaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID for the eBay marketplace on which the report is based.<br /><br /><b>Maximum: </b> 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>",
      }),
    metricKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of metrics to be included in the report.  <p>Metrics are the quantitative measurements compiled into the report and the data returned is based on the specified dimension of the report. For example, if the dimension is <code>campaign</code>, the metrics for <b>number of sales</b> would be the number of sales in the campaign. However, if the dimension is <code>listing</code>, the <b>number of sales</b> represents the number of items sold in that listing.</p>  <p>For information on metric keys and how to set them, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.</p><b>Minimum: </b> 1',
      }),
    reportFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The file format of the report. Currently, the only supported format is <code>TSV_GZIP</code>, which is a gzip file with tab separated values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a>",
      }),
    reportType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of report to be generated, such as <code>ACCOUNT_PERFORMANCE_REPORT</code> or <code>CAMPAIGN_PERFORMANCE_REPORT</code>.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span><br /><br /><b>Maximum:</b> 1 For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum\'>eBay API documentation</a>',
      }),
  })
  .openapi({
    description:
      'This type defines the rules that govern the generation of a report task and the criteria that\'s used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.',
    required: [],
  })
  .openapi('CreateReportTask')

const DimensionKeyAnnotationSchema = z
  .object({
    annotationKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'An annotation key associated with the dimension.' }),
    dataType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The data type of the annotation key value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      'This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be <code>listing_title</code> or <code>listing_quantity_sold</code>.',
    required: [],
  })
  .openapi('DimensionKeyAnnotation')

const DimensionMetadataSchema = z
  .object({
    dataType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The data type of the dimension value used to create the report. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>",
      }),
    dimensionKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the dimension used to create the report.' }),
    dimensionKeyAnnotations: z
      .array(DimensionKeyAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'An list of annotation keys associated with the specified dimension of the report.',
      }),
  })
  .openapi({
    description:
      'This type defines the dimension used to create the report and the annotation keys associated with that dimension.',
    required: [],
  })
  .openapi('DimensionMetadata')

const DiscountBenefitSchema = z
  .object({
    amountOffItem: AmountSchema.exactOptional().openapi({
      description:
        'The monetary amount that is discounted off an item (or items) when the promotion criteria is met.  <br><br>For <b>threshold promotions</b>, where the buyer triggers the discount, the valid values for this field are:  <br><code> &nbsp; 5, 6, 7, 8, 9, 10, 15, 20, 25, <br> &nbsp; 30, 35, 40, 45, 50, 55, 60, 65, <br> &nbsp; 70, 75, 80, 85, 90, 95, 100, 110, <br> &nbsp; 120, 125, 150, 200, 250</code>  <br><br>For <b>markdown</b> promotions, the range is greater, as outlined below and detailed more precisely <a href="/api-docs/sell/static/marketing/pm-amountoffitems-values.html" target="_blank">here</a>: <ul><li>$1 increments from $5 to $100</li><li>$5 increments from $105 to $1,000</li><li>$100 increments from $1,100 to $15,000</li></ul>',
    }),
    amountOffOrder: AmountSchema.exactOptional().openapi({
      description:
        "Used for threshold promotions, this is the monetary amount that is discounted off an order when the promotion criteria is met. Because this field is valid only for orders, it's not a valid combination to use with markdown promotions.  <br><br><b>Valid values</b> for the associated <code>amountOffOrder.</code><b>value</b> field:  <br><code> &nbsp; 5, 6, 7, 8, 9, 10, 15, 20, 25, <br> &nbsp; 30, 35, 40, 45, 50, 55, 60, 65, <br> &nbsp; 70, 75, 80, 85, 90, 95, 100, 110, <br> &nbsp; 120, 125, 150, 200, 250</code>",
    }),
    percentageOffItem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The percentage applied to the sales price that is discounted off the promoted item (or items) when the promotion criteria is met.  <br><br>Valid integer values for percentage off: &nbsp;&nbsp;<b>Min:</b> <code>5</code> &nbsp;&nbsp;<b>Max:</b> <code>80</code>',
      }),
    percentageOffOrder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used for threshold promotions, this is the percentage of the order price that is discounted off the order when the promotion criteria is met. This field is not value for markdown promotions.  <br><br>Valid integer values for ORDER_DISCOUNT promotions: &nbsp;&nbsp;<b>Min:</b> <code>5</code> &nbsp;&nbsp;<b>Max:</b> <code>80</code>  <br><br>For VOLUME_DISCOUNT promotions: Must be set to <code>0</code> for the first discount rule.',
      }),
  })
  .openapi({
    description:
      'This container defines the promotional discount as either a monetary amount or a percentage of the sales price.  <p class="tablenote"><b>Important!:</b> You must populate one and only one of the fields in this container: <ul><li><b>amountOffItem</b></li> <li><b>amountOffOrder</b></li> <li><b>percentageOffItem</b></li> <li><b>percentageOffOrder</b></li></ul></p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> values to create different types of promotions.</p>',
    required: [],
  })
  .openapi('DiscountBenefit')

const DiscountSpecificationSchema = z
  .object({
    forEachAmount: AmountSchema.exactOptional().openapi({
      description:
        'The monetary amount that must be spent on promoted items before the promotional discount is applied.  <br><br><b>Valid values</b> for the associated <code>forEachAmount.</code><b>value</b> field: <br><code> &nbsp; 5, 10, 15, 20, 25, 30, 35, 40, 45, 49, <br> &nbsp; 50, 55, 59, 60, 65, 69, 70, 75, 79, 80, <br> &nbsp; 85, 89, 90, 95, 99, 100, 110, 120, 125, <br> &nbsp; 149, 150, 175, 199, 200, 249, 250, 299, <br> &nbsp; 300, 350, 399, 400, 450, 499, 500</code>',
    }),
    forEachQuantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items that must be purchased in order to qualify for the discount.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, <br> &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 <br> &nbsp; 20, 25, 50, 75, 100</code>',
      }),
    minAmount: AmountSchema.exactOptional().openapi({
      description:
        'Known as the "threshold amount", the minimum dollar amount that needs to be spent on promoted items in order to qualify for the promotion\'s discount.  <br><br><b>Valid values</b> for the associated <code>minAmount.</code><b>value</b> field: <br><code> &nbsp; 5, 10, 15, 20, 25, 30, 35, 40, 45, 49, <br> &nbsp; 50, 55, 59, 60, 65, 69, 70, 75, 79, 80, <br> &nbsp; 85, 89, 90, 95, 99, 100, 110, 120, <br> &nbsp; 125, 149, 150, 175, 199, 200, 249, 250, 299, <br> &nbsp; 300, 350, 399, 400, 450, 499, 500</code>',
    }),
    minQuantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The minimum quantity of promoted items that needs to be bought in order to qualify for the promotion's discount.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, <br> &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 <br> &nbsp; 20, 25, 50, 75, 100</code>",
      }),
    numberOfDiscountedItems: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Use this field to configure "Buy One Get One" (or <b>BOGO</b>) promotions.  <br><br>You must couple this field with <b>forEachQuantity</b> and an <b>amountOffItem</b> or <b>percentOffItem</b> field to configure your BOGO promotion. This field is not valid with order-based promotions. <br><br>The value of this field represents the number of items to be discounted when other promotion criteria is met. For example, when the buyer adds the number of items identified by the <b>forEachQuantity</b> value to their cart, they are then eligible to receive the stated discount from an additional number of like items (the number of which is identified by this field) when they add those items to their cart. To receive the discount, the buyer must purchase the number of items indicated by  <b>forEachQuantity</b> <i>plus</i> the number indicated by this field.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</code>',
      }),
  })
  .openapi({
    description:
      'This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met.  <p><b>Note:</b> When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the <b>discountSpecification</b> container:</p>  <ul><li><b>minAmount</b></li> <li><b>minQuantity</b></li> <li><b>forEachQuantity</b></li> <li><b>forEachAmount</b></li></ul> <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>',
    required: [],
  })
  .openapi('DiscountSpecification')

const DiscountRuleSchema = z
  .object({
    discountBenefit: DiscountBenefitSchema.exactOptional().openapi({
      description:
        'This container defines the promotional discount as either a monetary amount or a percentage of the sales price.  <p><b>Note:</b> When configuring promotion benefits, populate just one of the following fields in the <b>discountBenefit</b> container:</p> <ul><li><b>amountOffItem</b></li> <li><b>amountOffOrder</b></li> <li><b>percentageOffItem</b></li> <li><b>percentageOffOrder</b></li></ul>  <p>For volume pricing, only <b>percentageOffOrder</b> is applicable as a <b>discountBenefit</b>. Also, the first <b>discountBenefit</b> container in a volume pricing configuration must set <b>percentageOffOrder</b> to <code>0</code>.</p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>',
    }),
    discountSpecification: DiscountSpecificationSchema.exactOptional().openapi({
      description:
        'This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity that the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met.  <p>When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the <b>discountSpecification</b> container:</p>  <ul><li><b>minAmount</b></li> <li><b>minQuantity</b></li> <li><b>forEachQuantity</b></li> <li><b>forEachAmount</b></li></ul>  <p class="tablenote"><b>Important:</b> When configuring <i>volume pricing promotions</i>, only <b>minQuantity</b> is applicable as a <b>discountSpecification</b>. Also, the configuration for <b>minQuantity</b> in a volume pricing configuration is specific. In the first <b>discountSpecification</b> container, set <b>minQuantity</b> to <code>1</code>, and in the second, set <b>minQuantity</b> to <code>2</code>. If you include a third <b>discountRules</b> pair, <b>minQuantity</b> must be set to <code>3</code>, and in a fourth, it must be set to <code>4</code>. Also, you must set a <b>ruleOrder</b> value in each <b>discountRules</b> container. In the first container, <b>discountRules</b> must be set to <code>1</code>, and in each subsequent container, the value be be incremented by 1. For more, see <a href="/api-docs/sell/static/marketing/pm-volume-discounts.html" target="_blank">Configuring volume pricing discounts</a>.</p> <p class="tablenote"><b>Tip:</b> see <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html" target="_blank">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>',
    }),
    maxDiscountAmount: AmountSchema.exactOptional().openapi({
      description:
        "The limit on how much a buyer can save using a <code>CODED_COUPON</code> promotion type. Permitted values are 1-1000. Supported currency codes include USD, GBP, EUR, and AUD. <p class=\"tablenote\"><b>Note:</b> The Currency Code for 'maxDiscountAmount' must be the same as the Currency Code for 'budget'.</p>",
    }),
    ruleOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This field indicates the order in which the <b>discountRules</b> are presented. The value specified for this field must equal the associated <b>minQuantity</b> value. <br><br><i>Required if </i> you are creating a volume pricing promotion.',
      }),
  })
  .openapi({
    description:
      'This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that\'s subtracted from the price of an item or order. <p>Set the amount of the discount and the rules that govern when the discount triggers using the <b>discountBenefit</b> and <b>discountSpecification</b> fields.</p>  <p class="tablenote"><b>Note:</b> In <b>volume pricing promotions</b>, you must configure at least two <b>discountRule</b> containers and at most four.</p>',
    required: [],
  })
  .openapi('DiscountRule')

const InventoryItemSchema = z
  .object({
    inventoryReferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The seller\'s inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that\'s available in multiple sizes and colors), the ID of the parent listing.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields for the seller inventory reference IDs (also known as an "SKU" or "custom label").',
    required: [],
  })
  .openapi('InventoryItem')

const RuleCriteriaSchema = z
  .object({
    excludeInventoryItems: z
      .array(InventoryItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of seller inventory reference IDs to exclude from the promotion.  <br><br><p class="tablenote"><b>Note:</b> The request can have either <b>excludeInventoryItems</b> or <b>excludeListingIds</b> but not both.</p> <b>Maximum:</b> 100 parent items <br><b>Maximum SKU or custom label length:</b> 50 characters',
      }),
    excludeListingIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of eBay listing IDs to exclude from the promotion.  <br><br><p class="tablenote"><b>Note:</b> The request can have either <b>excludeInventoryItems</b> or <b>excludeListingIds</b> but not both.</p> <b>Maximum:</b> 100 parent items <br><b>Maximum SKU or custom label length:</b> 50 characters',
      }),
    markupInventoryItems: z
      .array(InventoryItemSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of SKUs to remove from a markdown promotion. The listed SKUs are 'marked up' to their standard price after being part of the markdown promotion.",
      }),
    markupListingIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of listing IDs to remove from a markdown promotion. The listed items are 'marked up' to their standard price after being part of the markdown promotion.",
      }),
    selectionRules: z
      .array(SelectionRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'The container for the rules that select the items to include in a promotion.  <br><br><i>Required if </i> <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>. <br><br>For information on using the contained fields, see <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields for a set of inventory selection rules.  <br><br><b>Required:</b> When <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code> or <code>INVENTORY_ANY</code>.',
    required: [],
  })
  .openapi('RuleCriteria')

const InventoryCriterionSchema = z
  .object({
    inventoryCriterionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates how the items to include in the promotion are selected. You can include inventory by ID, using rules, or globally include all your inventory.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:InventoryCriterionEnum'>eBay API documentation</a>",
      }),
    inventoryItems: z
      .array(InventoryItemSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of containers for the seller\'s inventory reference IDs (also known as an "SKU" or "custom label") to be added to the promotion.  <p class="tablenote"><b>Note:</b> The request can have either <b>inventoryItems</b> or <b>listingIds</b>, but not both.</p>  <br><br><b>Required:</b> All listings in a promotion must offer an electronic payment method.  <br><b>Maximum:</b> 500 parent items  <br><b>Maximum SKU or custom label length:</b> 50 characters <br><br><i>Required if </i> <b>InventoryCriterionType</b> is set to <code>INVENTORY_BY_VALUE</code>, you must specify either <b>inventoryItems</b> or <b>listingIds</b>.',
      }),
    listingIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of eBay listing IDs to be added to the promotion.  <p class="tablenote"><b>Note:</b> The request can have either <b>inventoryItems</b> or <b>listingIds</b>, but not both.</p>  <br><br><b>Required:</b> All listings in a promotion must offer an electronic payment method.  <br><b>Maximum:</b> 500 parent items  <br><b>Maximum SKU or custom label length:</b> 50 characters <br><br><i>Required if </i> <b>InventoryCriterionType</b> is set to <code>INVENTORY_BY_VALUE</code>, you must specify either <b>inventoryItems</b> or <b>listingIds</b>.',
      }),
    ruleCriteria: RuleCriteriaSchema.exactOptional().openapi({
      description:
        'This container defines a set of inventory selection rules for a promotion.  <br><br>When defining rule criteria, you must limit item exclusions to 100 IDs when you choose from live inventory.  <br><br>Required if  <b>InventoryCriterionEnum</b> is set to <code>INVENTORY_BY_RULE</code> or <code>INVENTORY_ANY</code>.',
    }),
  })
  .openapi({
    description:
      'This type defines either the selections rules or the list of listing IDs for the promotion. The "listing IDs" are are either the seller\'s item IDs or the eBay listing IDs.',
    required: [],
  })
  .openapi('InventoryCriterion')

const ItemBasisSchema = z
  .object({
    estimatedValue: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The estimated value of the search impressions for items based on the provided dimensions. <br /><br /><b>Duration:</b> 17 days<br /><br /><b>Total slots:</b> 200 <br /><br /><b>Channel:</b> Dweb, Mweb, Native',
      }),
    metric: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The basis of the statistics. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:TargetingMetricsEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description: 'A container for details regarding the basis for an item.',
    required: [],
  })
  .openapi('ItemBasis')

const ItemMarkdownStatusSchema = z
  .object({
    listingMarkdownStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the state assigned to the markdown promotion using one of the <b>status</b> values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum'>eBay API documentation</a>",
      }),
    statusChangedDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the date the last time the state of the promotion changed. Both both markdown and markup events can trigger a status change.',
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An eBay-assigned text string that describes the status of the promotion.',
      }),
  })
  .openapi({ description: 'This type defines the status of a markdown promotion.', required: [] })
  .openapi('ItemMarkdownStatus')

const SelectedInventoryDiscountSchema = z
  .object({
    discountBenefit: DiscountBenefitSchema.exactOptional().openapi({
      description:
        'This container defines the promotional discount as either a monetary amount or a percentage applied to the sales price.',
    }),
    discountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique, eBay-generated ID that you can use to identify the discount. This field is ignored in POST and PUT operations.',
      }),
    inventoryCriterion: InventoryCriterionSchema.exactOptional().openapi({
      description:
        'A container that defines either the listing IDs or the selection rules that specify the items to include in the promotion. Listing IDs can be either eBay listing IDs or a list of the seller\'s inventory reference IDs (know as SKUs or custom labels). See the <b>selectionRules</b> container for the rule criteria you can use to select inventory.  <p class="tablenote"><b>Note:</b> All listings in Promotions Manager promotions must support an electronic payment method.</p>',
    }),
    ruleOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For markdown promotions, this field is reserved for future use. <!--This field specifies the precedence of this set of inventory criteria, which is taken into account if an item is selected for multiple discounts by different sets of criteria. The criteria with the highest priority (lowest ruleOrder value) takes precedence over criteria with a lower precedence.-->',
      }),
  })
  .openapi({
    description:
      'This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.',
    required: [],
  })
  .openapi('SelectedInventoryDiscount')

const ItemPriceMarkdownSchema = z
  .object({
    applyFreeShipping: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to <code>true</code>, free shipping is applied to the first shipping service specified for the item. The first domestic shipping option is set to "free shipping," regardless if the shipping <b>optionType</b> for that service is set to <code>FLAT_RATE</code>, <code>CALCULATED</code>, or <code>NOT_SPECIFIED</code> (freight). This flag essentially adds free shipping as a promotional bonus. <br><br><b>Default:</b> <code>false</code>',
      }),
    autoSelectFutureInventory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to <code>true</code>, eBay will automatically add inventory items to the markdown promotion if they meet the <b>selectedInventoryDiscounts</b> criteria specified for the markdown promotion.  <br><br><b>Default:</b> <code>false</code>',
      }),
    blockPriceIncreaseInItemRevision: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to <code>true</code>, price increases (including removing the free shipping flag) are blocked and an error message is returned if a seller attempts to adjust the price of an item that's partaking in this markdown promotion. If set to <code>false</code>, an item is dropped from the markdown promotion if the seller adjusts the price.  <br><br><b>Default:</b> <code>false</code>",
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is required if you are configuring an MARKDOWN_SALE promotion. <br><br>This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." A tag line appears under the "offer-type text" that is generated for the promotion. The text is displayed on the offer tile that is shown on the seller\'s <b>All Offers</b> page and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that\'s presented throughout the buyer\'s journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it\'s derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "20% off".</p>  <br><b>Maximum length:</b> 50',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the promotion ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). The value supplied for <b>endDate</b> must be at least 24 hours after the value supplied for the <b>startDate</b> of the markdown promotion.<br><br>For display purposes, convert this time into the local time of the seller.  <br><br><b>Max value:</b><ul><li><code>14</code> days for the AT, CH, DE, ES, FR, IE, IT, and UK, marketplaces.</li>  <li><code>45</code> days for all other marketplaces.</li></ul>',
      }),
    marketplaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The eBay marketplace ID of the site where the markdown promotion is hosted. Markdown promotions are supported on all eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The seller-defined name or 'title' of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90",
      }),
    priority: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This field is ignored in markdown promotions. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>",
      }),
    promotionImageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.",
      }),
    promotionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>",
      }),
    selectedInventoryDiscounts: z
      .array(SelectedInventoryDiscountSchema)
      .exactOptional()
      .openapi({
        description:
          'A list that defines the sets of selected items for the markdown promotion and the discount specified for promotion.',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.',
      }),
  })
  .openapi({
    description: 'This type defines the fields used to describe an item price markdown promotion.',
    required: [],
  })
  .openapi('ItemPriceMarkdown')

const ItemPromotionSchema = z
  .object({
    applyDiscountToSingleItemOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This flag is relevant in only when <b>promotionType</b> is set to <code>VOLUME_DISCOUNT</code>. For details on volume pricing promotions, see <a href="/api-docs/sell/static/marketing/pm-volume-discounts.html">Configuring volume pricing discounts</a>.  <br><br>If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion.',
      }),
    budget: AmountSchema.exactOptional().openapi({
      description:
        'This sets the budget for the <code>CODED_COUPON</code> promotion type. Supported values range from 100-1000000. Supported currency codes include USD, GBP, EUR, and AUD. <p class="tablenote"><b>Note:</b> The budget value for an active or paused promotion can not be decreased.</p> <p class="tablenote"><b>Note:</b> The Currency Code for \'budget\' must be the same as the Currency Code for \'maxDiscountAmount\'.</p>',
    }),
    couponConfiguration: CouponConfigurationSchema.exactOptional().openapi({
      description: 'The configuration of a coded coupon promotion.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the seller-defined "tag line" for the offer, such as "Save on designer shoes."  <br><br>The tag line appears under the "offer-type text" that is generated for the promotion and is displayed on the offer tile that\'s shown on the seller\'s <b>All Offers</b> page, and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that\'s presented throughout the buyer\'s journey through the sales flow and is generated by eBay. The offer-type text is not editable by the seller&mdash;it\'s derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring CODED_COUPON, ORDER_DISCOUNT, or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions).',
      }),
    discountRules: z
      .array(DiscountRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'This container defines a promotion using the following two required fields: <ul><li><b>discountBenefit</b> &ndash; Defines a discount as either a monetary amount or a percentage that is subtracted from the sales price of an item, a set of items, or an order.</li>  <li><b>discountSpecification</b> &ndash; Defines a set of rules that determine when the promotion is applied.</li></ul> <p class="tablenote"><b>Note:</b> For volume pricing, you must specify at least two and not more than four <b>discountBenefit</b>/<b>discountSpecification</b> pairs. In addition, you must define each set of rules with a <b>ruleOrder</b> value that corresponds with the order of volume discounts you present.</p>  <p><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Specifying item promotion discounts</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.',
      }),
    inventoryCriterion: InventoryCriterionSchema.exactOptional().openapi({
      description:
        'A container that defines either the listing IDs or the selection rules that specify the items to include in the promotion. Listing IDs can be either eBay listing IDs or a list of the seller\'s inventory reference IDs (know as SKUs or custom labels). See the <b>selectionRules</b> container for the rule criteria you can use to select inventory.  <p class="tablenote"><b>Note:</b> All listings in Promotions Manager promotions must support an electronic payment method.</p>',
    }),
    marketplaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90',
      }),
    priority: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>",
      }),
    promotionImageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not valid for VOLUME_DISCOUNT promotions.  <br><br>Populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.",
      }),
    promotionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>",
      }),
    promotionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Use this field to specify the type of the promotion you are creating. <p>The supported types are:</p> <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul> <p>See the <a href="/api-docs/sell/static/marketing/promotions-manager.html" target="_blank">Promotions Manager</a> documentation for details.</p> <p><i>Required if </i> you are creating a volume pricing promotion (<code>VOLUME_DISCOUNT</code>).</p> For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum\'>eBay API documentation</a>',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied.',
    required: [],
  })
  .openapi('ItemPromotion')

const ItemPromotionResponseSchema = z
  .object({
    applyDiscountToSingleItemOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion.',
      }),
    budget: AmountSchema.exactOptional().openapi({
      description:
        'This sets the budget for the <code>CODED_COUPON</code> promotion type. Supported values range from 100-1000000. Supported currency codes include USD, GBP, EUR, and AUD. <p class="tablenote"><b>Note:</b> The budget value for an active or paused promotion can not be decreased.</p> <p class="tablenote"><b>Note:</b> The Currency Code for \'budget\' must be the same as the Currency Code for \'maxDiscountAmount\'.</p>',
    }),
    couponConfiguration: CouponConfigurationSchema.exactOptional().openapi({
      description: 'The configuration of a coded coupon promotion.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required for CODED_COUPON promotions, this is the seller-defined "tag line" for the offer, such as "Save on designer shoes." The tag line appears under the "offer-type text" that is generated for the promotion and is displayed under the offer tile that is shown on the seller\'s <b>All Offers</b> page and on the event page for the promotion.  This tag line is not used with volume pricing promotions. <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that\'s presented throughout the buyer\'s journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it\'s derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50',
      }),
    discountRules: z
      .array(DiscountRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'A list containing the promotion benefits (<b>discountRule</b>) and the rules that define when the benefit is applied (<b>discountSpecification</b>).',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.',
      }),
    inventoryCriterion: InventoryCriterionSchema.exactOptional().openapi({
      description:
        "Returns either an array of listing IDs or the selection rules used to specify the items included in the promotion. Listing IDs can be either eBay listing IDs or an array of seller's inventory reference IDs (know as SKUs or custom labels). See the <b>selectionRules</b> container for the rule criteria you can use to select inventory.",
    }),
    marketplaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul class="compact"><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum\'>eBay API documentation</a>',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90',
      }),
    priority: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which eBay uses to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>",
      }),
    promotionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A unique eBay-assigned ID for the promotion that's generated when the promotion is created.",
      }),
    promotionImageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not applicable for <b>VOLUME_DISCOUNT</b> promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.",
      }),
    promotionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>",
      }),
    promotionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>",
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.',
      }),
  })
  .openapi({
    description: 'This complex type defines the fields returned for an item (threshold) promotion.',
    required: [],
  })
  .openapi('ItemPromotionResponse')

const ListingDetailSchema = z
  .object({
    currentPrice: AmountSchema.exactOptional().openapi({
      description: 'The container that returns the current price of the listing.',
    }),
    freeShipping: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to <code>true</code>, the seller pays for the shipping (or that the item is marked for local pickup only) In this case, the listing does not have an associated shipping cost for the first listed domestic-shipping option (even if the first domestic-shipping option specifies a flat-rate or calculated shipping option). If <code>false</code>, the buyer is required to pay for a flat-rate or calculated cost shipping service.',
      }),
    inventoryReferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The seller\'s inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that\'s available in multiple sizes and colors), the ID of the parent listing.',
      }),
    inventoryReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of the <b>inventoryReferenceId</b>, which can be either a single-SKU or a multi-SKU listing (<code>INVENTORY_ITEM</code> and <code>INVENTORY_ITEM_GROUP</code>, respectively).  <br><br><b>Note:</b> This value is not currently returned in the response.',
      }),
    listingCategoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the category that listing belongs to. The ID is a numeric and unique identifier for the category that is assigned by eBay.',
      }),
    listingCondition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An eBay-assigned value that indicates condition of the associated item. For more information, see <a href="/api-docs/sell/static/metadata/condition-id-values.html">Item condition ID and name values</a>.',
      }),
    listingConditionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the condition associated with the item. For more information, see <a href="/api-docs/sell/static/metadata/condition-id-values.html">Item condition ID and name values</a>.<br /><br /><span class="tablenote"><b>Note: </b> This value is not currently returned in the response.</span>',
      }),
    listingId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique eBay-assigned ID that is generated when the item is listed.',
      }),
    listingPromotionStatuses: z
      .array(ItemMarkdownStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the status values assigned to the item and the date that each new status was assigned.',
      }),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of items being sold in the listing.' }),
    storeCategoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Store CategoryId (if any) that to which the listing belongs. This field is blank if there is no seller Store category ID.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The seller-defined title of the listing that a seller can use to identify the item.  This label is not displayed in end-user flows.',
      }),
  })
  .openapi({
    description: 'This type defines the fields that describe a listing that is in a promotion.',
    required: [],
  })
  .openapi('ListingDetail')

const ItemsPagedCollectionSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.',
      }),
    listings: z
      .array(ListingDetailSchema)
      .exactOptional()
      .openapi({ description: 'An array of the listings associated with a promotion.' }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.',
      }),
    warnings: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of warnings that were generated by the request. Warning do not stop processing, but should be checked to ensure that the response contains the correct information.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields for a paginated result set of promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items.',
    required: [],
  })
  .openapi('ItemsPagedCollection')

const KeywordSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This field identifies the ad group that the keyword is associated with.',
      }),
    bid: AmountSchema.exactOptional().openapi({
      description:
        'The bid associated with the keyword. This container will not be returned if the keyword does not have a defined bid value.',
    }),
    keywordId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of a keyword.' }),
    keywordStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The status of the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a>",
      }),
    keywordText: z.string().exactOptional().openapi({ description: 'The text of the keyword.' }),
    matchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      'A type that contains the details for keywords that are associated with an ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>',
    required: [],
  })
  .openapi('Keyword')

const KeywordPagedCollectionResponseSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    keywords: z
      .array(KeywordSchema)
      .exactOptional()
      .openapi({
        description:
          'This array contains all of the keywords that match the request criteria. Keywords will be sorted by adGroupId, regardless of whether you searched for keywords across the entire campaign, or if you searched for keywords within one or specific ad groups.',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of keywords returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of keywords retrieved in the result set.  <br><br>If no keywords are found, this field is returned with a value of <code>0</code>.',
      }),
  })
  .openapi({
    description: 'A type that defines the keywords of the paged collection.',
    required: [],
  })
  .openapi('KeywordPagedCollectionResponse')

const KeywordRequestSchema = z
  .object({
    keywordText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text of the keyword. Keywords are not case sensitive and compound words can be used without additional encoding (for example, tennis ball).<br /><br /><b>Maximum number of characters: </b>100 <br /><br /><b>Maximum number of words: </b>10 ',
      }),
    matchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description: 'A type that defines the fields used by the <b>Keyword</b> method.',
    required: [],
  })
  .openapi('KeywordRequest')

const MetricMetadataSchema = z
  .object({
    dataType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The data type of the returned metric value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>",
      }),
    metricKey: z.string().exactOptional().openapi({ description: 'The name of the metric.' }),
  })
  .openapi({ description: 'This type defines the name and data type of a metric.', required: [] })
  .openapi('MetricMetadata')

const NegativeKeywordSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ad group ID that is generated when an ad group is first created and associated with a campaign.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span>',
      }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.',
      }),
    negativeKeywordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword.',
      }),
    negativeKeywordMatchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum\'>eBay API documentation</a>',
      }),
    negativeKeywordStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>",
      }),
    negativeKeywordText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text for the negative keyword.' }),
  })
  .openapi({ description: 'A type that defines the fields for a negative keyword.', required: [] })
  .openapi('NegativeKeyword')

const NegativeKeywordPagedCollectionResponseSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.',
      }),
    negativeKeywords: z
      .array(NegativeKeywordSchema)
      .exactOptional()
      .openapi({
        description: 'A list of negative keywords returned in the paginated collection.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set.',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><b>Default:</b> <code>0</code><br /><br /><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results.',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of result sets in the paginated collection.' }),
  })
  .openapi({
    description: 'A type that defines the negative keywords, returned in a paged collection.',
    required: [],
  })
  .openapi('NegativeKeywordPagedCollectionResponse')

const PromotionDetailSchema = z
  .object({
    couponCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." Tag lines appear under the "offer-type text" that is generated for a promotion and displayed under the offer tile that is shown on the seller\'s <b>All Offers</b> page and on the promotion\'s event page.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that\'s presented throughout the buyer\'s journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it\'s derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring ORDER_DISCOUNT or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions).',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.',
      }),
    marketplaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The eBay marketplace ID of the site where the promotion is hosted. Threshold promotions are supported on a select set of marketplaces while markdown promotions are supported on all eBay marketplaces. <p><b>Valid values for threshold promotions are as follows:</b></p>  <ul class="compact"><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum\'>eBay API documentation</a>',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The seller-defined name or "title" of the promotion, such as "Buy 1 Get 1", that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90',
      }),
    priority: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>",
      }),
    promotionHref: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the promotion details.' }),
    promotionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A unique eBay-assigned ID for the promotion that's generated when the promotion is created.",
      }),
    promotionImageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not applicable for <b>VOLUME_DISCOUNT</b> promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.",
      }),
    promotionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>",
      }),
    promotionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>",
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields that describe a promotion. This includes all the information about a promotion except for the listings that are a part of the promotion.',
    required: [],
  })
  .openapi('PromotionDetail')

const PromotionReportDetailSchema = z
  .object({
    averageItemDiscount: AmountSchema.exactOptional().openapi({
      description:
        'The <i>average item discount</i> is the average discount that has been applied to each item in a promotion. This value is calculated as follows:  <br><br><b>totalDiscount</b> / <b>itemsSoldQuantity</b> = <b>averageItemDiscount</b>',
    }),
    averageItemRevenue: AmountSchema.exactOptional().openapi({
      description:
        'The <i>average item revenue</i> is the average revenue that has been received for each item in a promotion. This value is calculated as follows:  <br><br><b>totalSales</b> / <b>itemsSoldQuantity</b> = <b>averageItemRevenue</b>',
    }),
    averageOrderDiscount: AmountSchema.exactOptional().openapi({
      description:
        'The <i>average order discount</i> is the average discount that has been applied to each order in a promotion. This value is calculated as follows:  <br><br><b>totalDiscount</b> / <b>numberOfOrdersSold</b> = <b>averageOrderDiscount</b>',
    }),
    averageOrderRevenue: AmountSchema.exactOptional().openapi({
      description:
        'The <i>average order revenue</i> is the average revenue that has been received for each order in a promotion. This value is calculated as follows:  <br><br><b>totalSales</b> / <b>numberOfOrdersSold</b> = <b>averageOrderRevenue</b>',
    }),
    averageOrderSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The <i>average order size</i> is the average number of items that each order contained in a promotion. This value is calculated as follows:  <br><br><b>itemsSoldQuantity</b> / <b>numberOfOrdersSold</b> = <b>averageOrderSize</b> ',
      }),
    baseSale: AmountSchema.exactOptional().openapi({
      description:
        'This is the monetary amount of items purchased in a promotion where the threshold <i>wasn\'t met</i>, so the discount was not applied.  <br><br>For example, suppose you\'re running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchased only one pair of socks, so they pay the full price of $5. Here, your <b>baseSale</b> amount would be $5.',
    }),
    itemsSoldQuantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This is the quantity of items purchased in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you\'re running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your number of items sold (<b>itemsSoldQuantity</b>) would be 2 and you number of orders sold (<b>numberOfOrdersSold</b>) would be 1.',
      }),
    numberOfOrdersSold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This is the number of orders sold in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you\'re running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your <b>numberOfOrdersSold</b> would be 1 and your <b>itemsSoldQuantity</b> would be 2.',
      }),
    percentageSalesLift: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The <i>percentage sales lift</i> is the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br> <b>promotionSale</b> / <b>totalSale</b> =  <b>percentageSalesLift</b> ',
      }),
    promotionHref: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the promotion report.' }),
    promotionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A unique eBay-assigned ID for the promotion that's generated when the promotion is created.",
      }),
    promotionReportId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique eBay-assigned ID of the promotion report that is generated when the report is created.',
      }),
    promotionSale: AmountSchema.exactOptional().openapi({
      description:
        'This is the monetary amount of the items sold in a threshold promotion where the threshold <i>has been met</i> and the discount was applied.  <br><br>For example, suppose you\'re running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your <b>promotionSale</b> amount would be $7.50.',
    }),
    promotionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>",
      }),
    totalDiscount: AmountSchema.exactOptional().openapi({
      description:
        'This is the monetary discount amount applied to the sale of items in a threshold promotion where the threshold <i>has been met</i> and the discount was applied.  <br><br>For example, suppose you\'re running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your <b>totalDiscount</b> amount would be $2.50.',
    }),
    totalSale: AmountSchema.exactOptional().openapi({
      description:
        'This is the total monetary sales amount of all items sold in a promotion. <br><br>For example, suppose you\'re running a "Buy 1, get 1 at 50%" promotion on $5 socks. You make one sale where the buyer purchases only one pair of socks and they pay the full price of $5 (<b>baseSale</b>). You make a second sale where the buyer purchases two pairs of socks and they pay $7.50, for both pairs (<b>promotionSale</b>). Your <b>totalSale</b> would be $12.50. This value is calculated as follows:  <br><br><b>baseSale</b> + <b>promotionSale</b> = <b>totalSale</b>',
    }),
  })
  .openapi({
    description: 'This type defines the fields in a promotion-level report.',
    required: [],
  })
  .openapi('PromotionReportDetail')

const PromotionsPagedCollectionSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    promotions: z
      .array(PromotionDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'A list containing the details of each returned promotion. This includes all the information about the promotions except for the listings that are part of the promotions.',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields in a paginated result set of seller promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items.',
    required: [],
  })
  .openapi('PromotionsPagedCollection')

const PromotionsReportPagedCollectionSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    promotionReports: z
      .array(PromotionReportDetailSchema)
      .exactOptional()
      .openapi({
        description: 'A list of <b>promotionReports</b> contained in the paginated result set.',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items.',
    required: [],
  })
  .openapi('PromotionsReportPagedCollection')

const ProposedBidSchema = z
  .object({
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum\'>eBay API documentation</a>',
      }),
    rangeEnd: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end of the range specified for the bid.' }),
    rangeStart: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start of the range specified for the bid.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the proposed bid.' }),
  })
  .openapi({
    description: 'A type that defines the data for a payment amount, such as the sale price.',
    required: [],
  })
  .openapi('ProposedBid')

const ReportMetadataSchema = z
  .object({
    dimensionMetadata: z
      .array(DimensionMetadataSchema)
      .exactOptional()
      .openapi({
        description: 'A list containing the metadata for the dimension used in the report.',
      }),
    maxNumberOfDimensionsToRequest: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of dimensions that can be requested for the specified report type.',
      }),
    maxNumberOfMetricsToRequest: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of metrics that can be requested for the specified report type.',
      }),
    metricMetadata: z
      .array(MetricMetadataSchema)
      .exactOptional()
      .openapi({ description: 'A list containing the metadata for the metrics in the report.' }),
    reportType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The <b>report_type</b>, as specified in the request to create the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum\'>eBay API documentation</a>',
      }),
  })
  .openapi({ description: 'This type defines the fields included in the report.', required: [] })
  .openapi('ReportMetadata')

const ReportMetadatasSchema = z
  .object({
    reportMetadata: z
      .array(ReportMetadataSchema)
      .exactOptional()
      .openapi({ description: 'A list of the metadata for the associated report type.' }),
  })
  .openapi({
    description: 'This type defines the metadata used by the all report types.',
    required: [],
  })
  .openapi('ReportMetadatas')

const ReportTaskSchema = z
  .object({
    campaignIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of IDs for the campaigns that are included in the report. A campaign ID is a unique eBay-assigned identifier of the campaign that's generated when the campaign is created.<br /><br />Call <b>getCampaigns</b> to return the current campaign IDs for a seller.",
      }),
    dateFrom: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date defining the start of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp.',
      }),
    dateTo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date defining the end of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp.',
      }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({ description: 'A list containing the dimension in the report.' }),
    fundingModels: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:FundingModelEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The funding model for the campaign that shall be included in the report.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The default funding model for Promoted Listings reports is <code>COST_PER_SALE</code>.</span><br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul>',
      }),
    inventoryReferences: z
      .array(InventoryReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'If supplied in the request, this field returns a list of the seller\'s inventory reference IDs included in the report.  <p>Each item is referenced by a pair of <b>inventoryRefernceID</b> and <b>inventoryReferenceType</b> values, where an inventory reference ID can be either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b>. An <b>inventoryItemGroupKey</b> is seller-defined ID for an inventory item group (a multiple-variation listing), and is created and used by the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.</p>',
      }),
    listingIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "If supplied in the request, this field returns a list of the listing IDs included in the report. A listing ID is an eBay-assigned ID that's generated when a listing is created.",
      }),
    marketplaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the eBay marketplace used by the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>",
      }),
    metricKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of metrics for the report task.' }),
    reportExpirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date after which the report is no longer be available. Reports are available for 30 days and you cannot download a report after it has expired.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ',
      }),
    reportFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the format of the report. Currently, only <code>TSV_GZIP</code> is supported. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a>",
      }),
    reportHref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the generated report, which can be used to download the report once it has been generated.',
      }),
    reportId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique eBay-assigned ID for the report.' }),
    reportName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An eBay-assigned name for the report that's created by the <b>createReportTask</b> call. This name is unique for the seller.",
      }),
    reportTaskCompletionDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date the report task completed the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ',
      }),
    reportTaskCreationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date the report task was created.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ',
      }),
    reportTaskExpectedCompletionDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date the report task is expected to complete the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ',
      }),
    reportTaskId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique eBay-assigned ID of the report task. This value is generated when the report task is created with a call to <b>createReportTask</b>.',
      }),
    reportTaskStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the current state of the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:TaskStatusEnum'>eBay API documentation</a>",
      }),
    reportTaskStatusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A status message with additional information about the report task.',
      }),
    reportType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates type of report associated with the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum\'>eBay API documentation</a>',
      }),
  })
  .openapi({ description: 'This type defines the fields in a report task.', required: [] })
  .openapi('ReportTask')

const ReportTaskPagedCollectionSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</span>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048',
      }),
    reportTasks: z
      .array(ReportTaskSchema)
      .exactOptional()
      .openapi({
        description: 'A list of report tasks contained on this page from the paginated response.',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.',
      }),
  })
  .openapi({
    description:
      'This type defines the fields that paginate the reports tasks returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set.',
    required: [],
  })
  .openapi('ReportTaskPagedCollection')

const SuggestedBidsSchema = z
  .object({
    keywordText: z.string().exactOptional().openapi({ description: 'The text for the keyword.' }),
    matchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>",
      }),
    proposedBid: ProposedBidSchema.exactOptional().openapi({
      description: 'The suggested bid associated with the keyword. ',
    }),
  })
  .openapi({ description: 'The suggested bid rate for the item.', required: [] })
  .openapi('SuggestedBids')

const SuggestedKeywordsSchema = z
  .object({
    additionalInfo: z
      .array(AdditionalInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'A container for the additional information and compiled insight data for suggested keywords. ',
      }),
    keywordText: z.string().exactOptional().openapi({ description: 'The text for the keyword.' }),
    matchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({ description: 'The suggested keywords for the item.', required: [] })
  .openapi('SuggestedKeywords')

const SummaryReportResponseSchema = z
  .object({
    baseSale: AmountSchema.exactOptional().openapi({
      description:
        'The total revenue from all the purchased items that were part of a promotion but <i>did not trigger</i> a discount during the promotion period.',
    }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the report was generated.' }),
    percentageSalesLift: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The percentage of the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br><b>precentageSalesLift</b> = <b>promotionSale</b> / (<b>baseSale</b> + <b>promotionSale</b>)',
      }),
    promotionSale: AmountSchema.exactOptional().openapi({
      description:
        'The total revenue from all the purchased items that were part of a promotion and their purchase <i>did trigger</i> a discount during the promotion period.',
    }),
    totalSale: AmountSchema.exactOptional().openapi({
      description:
        "Total dollar sales amount of all the seller's listings, current to the date the report was generated.",
    }),
  })
  .openapi({
    description:
      'This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see <a href="/api-docs/sell/static/marketing/pm-summary-reports.html">Reading item promotion Summary reports</a>.',
    required: [],
  })
  .openapi('SummaryReportResponse')

const TargetingItemsSchema = z
  .object({
    bases: z
      .array(ItemBasisSchema)
      .exactOptional()
      .openapi({ description: 'The metrics and additional information for the items.' }),
    listingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The listing ID of the targeted item.' }),
  })
  .openapi({ description: 'A type that defines the targeted items.', required: [] })
  .openapi('TargetingItems')

const TargetedAdsPagedCollectionSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the current page of results from the result set.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set.',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p><b>Default:</b> 0</p><br><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results.',
      }),
    suggestedItems: z
      .array(TargetingItemsSchema)
      .exactOptional()
      .openapi({ description: 'A list of suggested items in the paginated collection.' }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of items retrieved in the result set.<br /><br /><span class="tablenote"><b>Note: </b>If no items are found, this field is returned with a value of <code>0</code>.</span>',
      }),
  })
  .openapi({
    description: 'A type that defines the keywords of the paged collection.',
    required: [],
  })
  .openapi('TargetedAdsPagedCollection')

const TargetedBidRequestSchema = z
  .object({
    keywords: z
      .array(KeywordRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of keywords in the paginated collection. <br /><br /><b>Maximum number of keywords: </b>500',
      }),
  })
  .openapi({ description: 'A type that defines the targeted bid.', required: [] })
  .openapi('TargetedBidRequest')

const TargetedBidsPagedCollectionSchema = z
  .object({
    suggestedBids: z
      .array(SuggestedBidsSchema)
      .exactOptional()
      .openapi({ description: 'A list of bids in the paginated collection.' }),
  })
  .openapi({
    description: 'A type that defines the keywords of the paged collection.',
    required: [],
  })
  .openapi('TargetedBidsPagedCollection')

const TargetedKeywordRequestSchema = z
  .object({
    additionalInfo: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdditionalInfoEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'A field used to indicate whether additional information and insight data shall be provided for suggested keywords.<br /><br /><strong>Valid Value:</strong> <code>KEYWORD_INSIGHTS</code>',
      }),
    exclusions: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:ExclusionsEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'A field used to indicate that the keywords already selected by sellers for the specified listing IDs should be filtered out of the response, and only new and unique keyword recommendations shall be returned.<br /><br /><strong>Valid Value:</strong> <code>ADOPTED_KEYWORDS</code>',
      }),
    listingIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of comma-separated listing IDs in the paginated collection. <br /><br /><b>Maximum number of listings requested: </b>300',
      }),
    matchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({ description: 'A type that provides details for the targeted keywords.', required: [] })
  .openapi('TargetedKeywordRequest')

const TargetedKeywordsPagedCollectionSchema = z
  .object({
    suggestedKeywords: z
      .array(SuggestedKeywordsSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of suggested keywords in the paged collection. <p> <span class="tablenote"><strong>Note:</strong> A relevancy check with items already present in the ad-group is performed even if item IDs associated with the ad-group are not explicitly passed in the request.</span></p> ',
      }),
  })
  .openapi({
    description: 'A type that defines the keywords of the paged collection.',
    required: [],
  })
  .openapi('TargetedKeywordsPagedCollection')

const UpdateAdGroupRequestSchema = z
  .object({
    adGroupStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An enumeration value representing the current status of the ad group.<p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a>",
      }),
    defaultBid: AmountSchema.exactOptional().openapi({
      description:
        'A bid amount that applies to all of the keywords in an ad group that do not have individual bids.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The updated name for the specified ad group.' }),
  })
  .openapi({
    description: 'A type that contains the fields used by the <b>UpdateAdGroup</b> request.',
    required: [],
  })
  .openapi('UpdateAdGroupRequest')

const UpdateAdrateStrategyRequestSchema = z
  .object({
    adRateStrategy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ad rate strategy that shall be applied to the campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum'>eBay API documentation</a>",
      }),
    bidPercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0',
      }),
    dynamicAdRatePreferences: z
      .array(DynamicAdRatePreferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'A field that indicates whether a single, user-defined bid percentage (also known as the <i>ad rate</i>) should be used, or whether eBay should automatically adjust listings to maintain the daily suggested bid percentage.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Dynamic adjustment is only applicable when the <b>adRateStrategy</b> is set to <code>DYNAMIC</code>.</span><br /><b>Default:</b> <code>FIXED</code>',
      }),
  })
  .openapi({
    description:
      'A type that defines the request fields used to update the ad rate strategy for a Promoted Listings ad campaign.',
    required: [],
  })
  .openapi('UpdateAdrateStrategyRequest')

const UpdateBidPercentageRequestSchema = z
  .object({
    bidPercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0',
      }),
  })
  .openapi({
    description: 'This type specifies the bid percentage for an ad campaign.',
    required: [],
  })
  .openapi('UpdateBidPercentageRequest')

const UpdateCampaignBudgetRequestSchema = z
  .object({
    daily: BudgetRequestSchema.exactOptional().openapi({
      description:
        'The daily budget limit for the Cost Per Click (CPC) Promoted Listings campaign. This will be a dollar value. All clicks using the keywords defined for the campaign will go towards expending the daily budget. Once the daily budget is exceeded for the campaign, all Promoted Listings under the campaign will be turned off until the next day.<br /><br /><b>Valid Values</b>:<ul><li><code>50.00</code></li><li><code>100.00</code></li></ul>',
    }),
  })
  .openapi({
    description: 'A type that contains the fields for the <b>UpdateCampaignBudget</b> request.',
    required: [],
  })
  .openapi('UpdateCampaignBudgetRequest')

const UpdateCampaignIdentificationRequestSchema = z
  .object({
    campaignName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The new seller-defined name for the campaign. This value must be unique for the seller. <p>If you don't want to change the name of the campaign, specify the current campaign name in this field.<p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters.",
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.<p>If you want to change only the end date of the campaign, you must specify the current campaign name, set the <b>endDate</b> as desired, and set the <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current endDate value will be set to null. To preserve the currently-set end date, you must specify the value again in your request.</p>',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The new start date for the campaign, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>).<p>If the campaign status is <code>RUNNING</code> or <code>PAUSED</code>, the <b>startDate</b> must be specified and must be the actual start date of the campaign, even if you are only changing the <b>endDate</b>. You can retrieve the campaign\'s <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p><p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller\'s campaigns.</p>',
      }),
  })
  .openapi({
    description:
      'This type specifies the updated name, and start and end dates for an update-campaign request.',
    required: [],
  })
  .openapi('UpdateCampaignIdentificationRequest')

const UpdateKeywordRequestSchema = z
  .object({
    bid: AmountSchema.exactOptional().openapi({
      description:
        'This container is used to set or change the bid for the keyword. Each time a listing is retrieved in search results using this keyword and clicked on, the seller will be charged this amount. Each click goes toward the daily budget set up for the CPC campaign. If the bid is not provided, then the default bid associated with the ad group is used.',
    }),
    keywordStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href=\"/api-docs/sell/marketing/resources/keyword/methods/getKeyword\">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the <b>UpdateKeyword</b> request.',
    required: [],
  })
  .openapi('UpdateKeywordRequest')

const UpdateNegativeKeywordRequestSchema = z
  .object({
    negativeKeywordStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description: 'A type that contains the fields for the <b>UpdateNegativeKeyword</b> request.',
    required: [],
  })
  .openapi('UpdateNegativeKeywordRequest')

const ApiAuthSecurityScheme = {
  description:
    'The security definitions for this API. Please check individual operations for applicable scopes.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://auth.ebay.com/oauth2/authorize',
      scopes: {
        'https://api.ebay.com/oauth/api_scope/sell.marketing':
          'View and manage your eBay marketing activities, such as ad campaigns and listing promotions',
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly':
          'View your eBay marketing activities, such as ad campaigns and listing promotions',
      },
      tokenUrl: 'https://api.ebay.com/identity/v1/oauth2/token',
    },
    clientCredentials: {
      scopes: { 'https://api.ebay.com/oauth/api_scope': 'View public data from eBay' },
      tokenUrl: 'https://api.ebay.com/identity/v1/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getAdCampaignRoute = createRoute({
  method: 'get',
  path: '/ad_campaign',
  tags: ['campaign'],
  description:
    "This method retrieves the details for all of the seller's defined campaigns. Request parameters can be used to retrieve a specific campaign, such as the campaign's name, the start and end date, the status, and the funding model (Cost Per Sale (CPS) or Cost Per Click (CPC). <p>You can filter the result set by a campaign name, end date range, start date range, or campaign status. You can also paginate the records returned from the result set using the <b>limit</b> query parameter, and control which records to return using the  <b>offset</b> parameter.</p>",
  operationId: 'getCampaigns',
  request: {
    query: z.object({
      campaign_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the campaign name. The results are filtered to include only the campaign by the specified name.<br /><br /><b>Note: </b>The results might be null if other filters exclude the campaign with this name. <br /><br /><b>Maximum: </b> 1 campaign name',
            in: 'query',
            name: 'campaign_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      campaign_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include this filter and input a specific campaign status to retrieve campaigns currently in that state. <br /><br /><b>Note: </b>The results might not include all the campaigns with this status if other filters exclude them. <br /><br /><b>Valid values:</b> See <a href="/api-docs/sell/marketing/types/pls:CampaignStatusEnum">CampaignStatusEnum</a> <br /><br /><b>Maximum: </b> 1 status',
            in: 'query',
            name: 'campaign_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_date_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies the range of a campaign's end date. The results are filtered to include only campaigns with an end date that is within specified range. <br><br><b>Valid format (UTC)</b>: <ul><li><code> yyyy-MM-ddThh:mm:ssZ..yyyy-MM-ddThh:mm:ssZ </code>  (campaign ends within this range)</li><li><code>yyyy-MM-ddThh:mm:ssZ..</code> (campaign ends on or after this date)</li><li><code>..yyyy-MM-ddThh:mm:ssZ </code> (campaign ends on or before this date)</li><li><code>2016-09-08T00:00.00.000Z..2016-09-09T00:00:00Z</code> (campaign ends on September 08, 2016)</li></ul> <br /><br /><b>Note: </b>The results might not include all the campaigns ending on this date if other filters exclude them.",
            in: 'query',
            name: 'end_date_range',
            required: false,
            schema: { type: 'string' },
          },
        }),
      funding_strategy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the funding strategy for the campaign.<br /><br />The results will be filtered to only include campaigns with the specified funding model. If not specified, all campaigns matching the other filter parameters will be returned. The results might not include these campaigns if other search conditions exclude them.<br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul>',
            in: 'query',
            name: 'funding_strategy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '<p>Specifies the maximum number of campaigns to return on a page in the paginated response.</p>  <b>Default: </b>10 <br><b>Maximum: </b> 500',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of campaigns to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start_date_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies the range of a campaign's start date in which to filter the results. The results are filtered to include only campaigns with a start date that is equal to this date or is within specified range.<br><br><b>Valid format (UTC): </b> <ul><li><code>yyyy-MM-ddThh:mm:ssZ..yyyy-MM-ddThh:mm:ssZ</code> (starts within this range)</li><li><code>yyyy-MM-ddThh:mm:ssZ</code> (campaign starts on or after this date)</li><li><code>..yyyy-MM-ddThh:mm:ssZ </code>(campaign starts on or before this date)</li><li><code>2016-09-08T00:00.00.000Z..2016-09-09T00:00:00Z</code> (campaign starts on September 08, 2016)</li></ul><br /><br /><b>Note: </b>The results might not include all the campaigns with this start date if other filters exclude them.",
            in: 'query',
            name: 'start_date_range',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CampaignPagedCollectionResponseSchema } },
    },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const postAdCampaignRoute = createRoute({
  method: 'post',
  path: '/ad_campaign',
  tags: ['campaign'],
  description:
    'This method creates a Promoted Listings ad campaign. <p>A Promoted Listings <i>campaign</i> is the structure into which you place the ads or ad group for the listings you want to promote.</p>  <p>Identify the items you want to place into a campaign either by "key" or by "rule" as follows:</p> <ul><li><b>Rules-based campaigns</b> &ndash; A rules-based campaign adds items to the campaign according to the <i>criteria</i> you specify in your call to <b>createCampaign</b>. You can set the <b>autoSelectFutureInventory</b> request field to <code>true</code> so that after your campaign launches, eBay will regularly assess your new, revised, or newly-eligible listings to determine whether any should be added or removed from your campaign according to the rules you set. If there are, eBay will add or remove them automatically on a daily basis.</li> <li><b>Key-based campaigns</b> &ndash; Add items to an existing campaign using either listing ID values or Inventory Reference values: <ul><li>Add <b>listingId</b> values to an existing campaign by calling either <b>createAdByListingID</b> or <b>bulkCreateAdsByListingId</b>.</li>  <li>Add <b>inventoryReference</b> values to an existing campaign by calling either <b>createAdByInventoryReference</b> or <b>bulkCreateAdsByInventoryReference</b>.</li><li>Add an <b>ad group</b> to an existing campaign by calling <b>createAdGroup</b>.</li></ul><p class="tablenote"><b>Note:</b> No matter how you add items to a Promoted Listings campaign, each campaign can contain ads for a maximum of 50,000 items. <br><br>If a rules-based campaign identifies more than 50,000 items, ads are created for only the first 50,000 items identified by the specified criteria, and ads are not created for the remaining items.</p>  <p><b>Creating a campaign</b></p> <p>To create a basic campaign, supply:</p>  <ul><li>The user-defined campaign name</li> <li>The start date (and optionally the end date) of the campaign</li> <li>The eBay marketplace on which the campaign is hosted</li> <li>Details on the campaign funding model</li></ul>  <p>The campaign funding model specifies how the Promoted Listings fee is calculated. Currently, the supported funding models are <code>COST_PER_SALE</code> and <code>COST_PER_CLICK</code>. For complete information on how the fee is calculated and when it applies, see <a href="/api-docs/sell/static/marketing/pl-overview.html#pl-fees">Promoted Listings fees</a>.</p>   <p>If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, campaign "ads" are created by "rule" for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign.</p>  <p>For details on creating Promoted Listings campaigns and how to select the items to be included in your campaigns, see <a href="/api-docs/sell/static/marketing/pl-create-campaign.html">Promoted Listings campaign creation</a>.</p>  <p>For recommendations on which listings are prime for a Promoted Listings ad campaign and to get guidance on how to set the <b>bidPercentage</b> field, see <a href="/api-docs/sell/static/marketing/pl-reco-api.html">Using the Recommendation API to help configure campaigns</a>.</p>  <p class="tablenote"><b>Tip:</b> See <a href="/api-docs/sell/marketing/static/overview.html#PL-requirements">Promoted Listings requirements and restrictions</a> for the details on the marketplaces that support Promoted Listings via the API. See <a href="/api-docs/sell/static/marketing/pl-restrictions">Promoted Listings restrictions</a> for details about campaign limitations and restrictions.</p>',
  operationId: 'createCampaign',
  request: {
    body: {
      description: 'This type defines the fields for the create campaign request.',
      content: {
        'application/json': {
          schema: CreateCampaignRequestSchema.openapi({
            description: 'This type defines the fields for the create campaign request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description:
                'The <b>location</b> response header contains the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign">getCampaign</a> URI to the newly created campaign. The URL includes the eBay-assigned <code>campaignId</code>, which you can use to reference the campaign.',
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdCampaignFindCampaignByAdReferenceRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/find_campaign_by_ad_reference',
  tags: ['campaign'],
  description:
    'This method retrieves the campaigns containing the listing that is specified using either a listing ID, or an inventory reference ID and inventory reference type pair. The request accepts either a <b>listing_id</b>, <i>or</i> an <b>inventory_reference_id</b> and <b>inventory_reference_type</b> pair, as used in the Inventory API.<br /><br />eBay <i>listing IDs</i> are generated by either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a> when you create a listing.<br /><br />An <i>inventory reference ID</i> can be either a seller-defined <b>SKU</b> or <b>inventoryItemGroupKey</b>, as specified in the Inventory API.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>',
  operationId: 'findCampaignByAdReference',
  request: {
    query: z.object({
      inventory_reference_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The seller's inventory reference ID of the listing to be used to find the campaign in which it is associated.  This will either be a seller-defined <b>SKU</b> value or inventory item group ID, depending on the reference type specified. You must always pass in both  <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.",
            in: 'query',
            name: 'inventory_reference_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      inventory_reference_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The type of the seller's inventory reference ID, which is a listing or group of items. You must always pass in both <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.",
            in: 'query',
            name: 'inventory_reference_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      listing_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifier of the eBay listing associated with the ad.',
            in: 'query',
            name: 'listing_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CampaignsSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const getAdCampaignGetCampaignByNameRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/get_campaign_by_name',
  tags: ['campaign'],
  description:
    'This method retrieves the details of a single campaign, as specified with the <b>campaign_name</b> query parameter. Note that the campaign name you specify must be an exact, case-sensitive match of the name of the campaign you want to retrieve.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller\'s campaign names.</p>',
  operationId: 'getCampaignByName',
  request: {
    query: z.object({
      campaign_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the campaign.',
            in: 'query',
            name: 'campaign_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CampaignSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const getAdCampaignCampaignIdRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/{campaign_id}',
  tags: ['campaign'],
  description:
    'This method retrieves the details of a single campaign, as specified with the <b>campaign_id</b> query parameter.  <p>This method returns all the details of a campaign (including the campaign\'s the selection rules), except the for the listing IDs or inventory reference IDs included in the campaign. These IDs are returned by <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a>.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller\'s campaign IDs.</p>',
  operationId: 'getCampaign',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CampaignSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const deleteAdCampaignCampaignIdRoute = createRoute({
  method: 'delete',
  path: '/ad_campaign/{campaign_id}',
  tags: ['campaign'],
  description:
    'This method deletes the campaign specified by the <code>campaign_id</code> query parameter.<br /><br /><span class="tablenote"><b>Note: </b> You can only delete campaigns that have ended.</span><br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller\'s campaigns.',
  operationId: 'deleteCampaign',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdCampaignCampaignIdAdRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/{campaign_id}/ad',
  tags: ['ad'],
  description:
    'This method retrieves Promoted Listings ads that are associated with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The method retrieves ads related to the specified campaign. Specify the Promoted Listings campaign to target with the <b>campaign_id</b> path parameter.</p>  <p>Because of the large number of possible results, you can use query parameters to paginate the result set by specifying a <b>limit</b>, which dictates how many ads to return on each page of the response. You can also specify how many ads to skip in the result set before returning the first result using the <b>offset</b> path parameter.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the current campaign IDs for the seller.</p>',
  operationId: 'getAds',
  request: {
    query: z.object({
      ad_group_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of ad group IDs. The results will be filtered to only include active ads for these ad groups. Call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> to retrieve the ad group ID for the ad group.<br /><br /><span class="tablenote"><b>Note:</b> This field only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>',
            in: 'query',
            name: 'ad_group_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ad_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of ad statuses. The results will be filtered to only include the given statuses of the ad. If none are provided, all ads are returned.',
            in: 'query',
            name: 'ad_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of ads to return on a page in the paginated response. <p><b>Default: </b>10 <br><b>Maximum:</b> 500</p>',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      listing_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of listing IDs. The response includes only active ads (ads associated with a RUNNING campaign). The results do not include listing IDs that are excluded by other conditions.',
            in: 'query',
            name: 'listing_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of ads to skip in the result set before returning the first ad in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdPagedCollectionResponseSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const postAdCampaignCampaignIdAdRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/ad',
  tags: ['ad'],
  description:
    'This method adds a listing to an existing Promoted Listings campaign using a <b>listingId</b> value generated by the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>, or using a value generated by an ad group ID. <p>For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, an ad may be directly created for the listing.</p><p>For the listing ID specified in the request, this method:</p>  <ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ad.</li> <li>Associates the ad with the specified campaign.</li></ul>  <p>To create an ad for a listing, specify its <b>listingId</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ad with using the <b>campaign_id</b> path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API.</p><p>For Promoted Listings Advanced (PLA) campaigns using the Cost Per Click (CPC) funding model, an ad group must be created first. If no ad group has been created for the campaign, an ad cannot be created.</p><p>For the ad group specified in the request, this method associates the ad with the specified ad group.</p><p>To create an ad for an ad group, specify the name of the ad group in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Ad groups are generated using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> method.</p> <p>You can specify one or more ad groups per campaign.</p><p>Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.</p><p>This call has no response payload. If the ad is successfully created, a <code>201 Created</code> HTTP status code and the <a href="/api-docs/sell/marketing/resources/ad/methods/getAd">getAd</a> URI of the ad are returned in the location header.</p>',
  operationId: 'createAdByListingId',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This request object defines the fields used in the <b>createAdByListingId</b> request.',
      content: {
        'application/json': {
          schema: CreateAdRequestSchema.openapi({
            description:
              'This request object defines the fields used in the <b>createAdByListingId</b> request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description:
                'The <b>location</b> response header contains the getAd URI of the newly created ad. The URI includes the newly created <code>adID</code>, which you can use to reference the ad.',
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdCampaignCampaignIdAdAdIdRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/{campaign_id}/ad/{ad_id}',
  tags: ['ad'],
  description:
    'This method retrieves the specified ad from the specified campaign.  <p>In the request, supply the <b>campaign_id</b> and <b>ad_id</b> as path parameters.</p> <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller\'s current campaign IDs and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to retrieve their current ad IDs.</p>',
  operationId: 'getAd',
  request: {
    params: z.object({
      ad_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique identifier for an ad. This ID is generated when the ad is created.',
            in: 'path',
            name: 'ad_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AdSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const deleteAdCampaignCampaignIdAdAdIdRoute = createRoute({
  method: 'delete',
  path: '/ad_campaign/{campaign_id}/ad/{ad_id}',
  tags: ['ad'],
  description:
    'This method removes the specified ad from the specified campaign.<br /><br />Pass the ID of the ad to delete with the ID of the campaign associated with the ad as path parameters to the call.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get the current list of the seller\'s campaign IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the <b>bulkUpdateAdsStatusByListingId</b> method to change the status of ads to ARCHIVED.',
  operationId: 'deleteAd',
  request: {
    params: z.object({
      ad_id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an ad. This ID was generated when the ad was created.',
            in: 'path',
            name: 'ad_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdAdAdIdUpdateBidRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/ad/{ad_id}/update_bid',
  tags: ['ad'],
  description:
    'This method updates the bid percentage (also known as the "ad rate") for the specified ad in the specified campaign. <p>In the request, supply the <b>campaign_id</b> and <b>ad_id</b> as path parameters, and supply the new <b>bidPercentage</b> value in the payload of the call.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller\'s current campaign IDs and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get their ad IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>',
  operationId: 'updateBid',
  request: {
    params: z.object({
      ad_id: z
        .string()
        .openapi({
          param: {
            description:
              "A unique eBay-assigned ID for an ad that's generated when an ad is created.",
            in: 'path',
            name: 'ad_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'This type defines the fields for the <b>updateBid</b> request.',
      content: {
        'application/json': {
          schema: UpdateBidPercentageRequestSchema.openapi({
            description: 'This type defines the fields for the <b>updateBid</b> request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdCampaignCampaignIdAdGroupRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/{campaign_id}/ad_group',
  tags: ['ad_group'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves ad groups for the specified campaigns.<br /><br />Each campaign can only have <b>one</b> ad group.<br /><br />In the request, supply the <b>campaign_ids</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller.',
  operationId: 'getAdGroups',
  request: {
    query: z.object({
      ad_group_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of ad group statuses. The results will be filtered to only include the given statuses of the ad group.<br /><br />The results might not include these ad groups if other search conditions exclude them.',
            in: 'query',
            name: 'ad_group_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of results, from the current result set, to be returned in a single page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of results that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br><br><b>Default</b>: <code>0</code>',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdGroupPagedCollectionResponseSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const postAdCampaignCampaignIdAdGroupRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/ad_group',
  tags: ['ad_group'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds an ad group to an existing PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />To create an ad group for a campaign, specify the <b>defaultBid</b> for the ad group in the payload of the request. Then specify the campaign to which the ad group should be associated using the <b>campaign_id</b> path parameter.<br /><br />Each campaign can have one or more associated ad groups.',
  operationId: 'createAdGroup',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'This type defines the fields for the <b>createAdGroup</b> request.',
      content: {
        'application/json': {
          schema: CreateAdGroupRequestSchema.openapi({
            description: 'This type defines the fields for the <b>createAdGroup</b> request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description:
                'The <b>location</b> response header contains the getAdGroup URL to the newly created ad group. The URL includes the newly assigned <code>adGroupID</code>, which you can use to retrieve the ad group.',
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdCampaignCampaignIdAdGroupAdGroupIdRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/{campaign_id}/ad_group/{ad_group_id}',
  tags: ['ad_group'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves the details of a specified ad group, such as the ad group’s default bid and status.<br /><br />In the request, specify the <b>campaign_id</b> and <b>ad_group_id</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller and call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> for the ad group ID of the ad group you wish to retrieve.',
  operationId: 'getAdGroup',
  request: {
    params: z.object({
      ad_group_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the ad group that shall be retrieved.',
            in: 'path',
            name: 'ad_group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AdGroupSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const putAdCampaignCampaignIdAdGroupAdGroupIdRoute = createRoute({
  method: 'put',
  path: '/ad_campaign/{campaign_id}/ad_group/{ad_group_id}',
  tags: ['ad_group'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the ad group associated with a campaign.<br /><br />With this method, you can modify the <b>default bid</b> for the ad group, change the state of the ad group, or change the name of the ad group. Pass the <b>ad_group_id</b> you want to update as a URI parameter, and configure the <b>adGroupStatus</b> and <b>defaultBid</b> in the request payload.<br /><br />Call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroup">getAdGroup</a> to retrieve the current default bid and status of the ad group that you would like to update.',
  operationId: 'updateAdGroup',
  request: {
    params: z.object({
      ad_group_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the ad group that shall be updated.',
            in: 'path',
            name: 'ad_group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'This type defines the fields for the <b>UpdateAdGroup</b> request.',
      content: {
        'application/json': {
          schema: UpdateAdGroupRequestSchema.openapi({
            description: 'This type defines the fields for the <b>UpdateAdGroup</b> request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/ad_group/{ad_group_id}/suggest_bids',
  tags: ['ad_group'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve the suggested bids for input keywords and match type.',
  operationId: 'suggestBids',
  request: {
    params: z.object({
      ad_group_id: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the ad group containing the keywords for which the bid suggestions will be provided.',
            in: 'path',
            name: 'ad_group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The data requested to retrieve the suggested bids.',
      content: {
        'application/json': {
          schema: TargetedBidRequestSchema.openapi({
            description: 'The data requested to retrieve the suggested bids.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TargetedBidsPagedCollectionSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/ad_group/{ad_group_id}/suggest_keywords',
  tags: ['ad_group'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve a list of keyword ideas to be targeted for Promoted Listings campaigns.',
  operationId: 'suggestKeywords',
  request: {
    params: z.object({
      ad_group_id: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the ad group for which the keyword suggestions will be provided.',
            in: 'path',
            name: 'ad_group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The required data to retrieve suggested keywords.',
      content: {
        'application/json': {
          schema: TargetedKeywordRequestSchema.openapi({
            description: 'The required data to retrieve suggested keywords.',
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TargetedKeywordsPagedCollectionSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_create_ads_by_inventory_reference',
  tags: ['ad'],
  description:
    'This method adds multiple listings that are managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a> to an existing Promoted Listings campaign.<br /><br />For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) model, bulk ads may be directly created for the listing.<br /><br />For each listing specified in the request, this method:<br /><ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ads created.</li> <li>Associates the ads created with the specified campaign.</li></ul><br />To create ads for a listing, specify their <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to which you want to associate the ads using the <b>campaign_id</b> path parameter.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.',
  operationId: 'bulkCreateAdsByInventoryReference',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. Get a seller\'s campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'The container for the bulk request to create ads for eBay inventory reference IDs. eBay inventory reference IDs are seller-defined IDs used by theInventory API.',
      content: {
        'application/json': {
          schema: BulkCreateAdsByInventoryReferenceRequestSchema.openapi({
            description:
              'The container for the bulk request to create ads for eBay inventory reference IDs. eBay inventory reference IDs are seller-defined IDs used by theInventory API.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkCreateAdsByInventoryReferenceResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkCreateAdsByListingIdRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_create_ads_by_listing_id',
  tags: ['ad'],
  description:
    'This method adds multiple listings to an existing Promoted Listings campaign using <b>listingId</b> values generated by the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>, or using values generated by an ad group ID.<p>For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, bulk ads may be directly created for the listing.</p><p>For each listing ID specified in the request, this method:</p>  <ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ad.</li> <li>Associates the ad with the specified campaign.</li></ul><p>To create an ad for a listing, specify its <b>listingId</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API.</p><p>You can specify a maximum of <b>500 listings per call</b> and each campaign can have ads for a maximum of 50,000 items. Be aware when using this call that each variation in a multiple-variation listing creates an individual ad.</p><p>For Promoted Listings Advanced (PLA) campaigns using the Cost Per Click (CPC) funding model, an ad group must be created first. If no ad group has been created for the campaign, ads cannot be created.</p><p>For the ad group specified in the request, this method associates the ad with the specified ad group.</p><p>To create an ad for an ad group, specify the name of the ad group plus the <b>defaultBid</b> for the ad in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Ad groups are generated using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a>  method.</p> <p>You can specify one or more ad groups per campaign.</p><p>Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.</p>',
  operationId: 'bulkCreateAdsByListingId',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that\'s generated when a campaign is created. Get a seller\'s campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'The container for the bulk request to create ads for eBay listing IDs. eBay listing IDs are generated by the Trading API and Inventory API when the listing is created on eBay.',
      content: {
        'application/json': {
          schema: BulkCreateAdRequestSchema.openapi({
            description:
              'The container for the bulk request to create ads for eBay listing IDs. eBay listing IDs are generated by the Trading API and Inventory API when the listing is created on eBay.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkAdResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkCreateKeywordRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_create_keyword',
  tags: ['keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds keywords, in bulk, to an existing PLA ad group in a campaign that uses the Cost Per Click (CPC) funding model.<br /><br />This method also sets the CPC rate for each keyword.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.',
  operationId: 'bulkCreateKeyword',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'A type that defines the fields for the bulk request to create keywords.',
      content: {
        'application/json': {
          schema: BulkCreateKeywordRequestSchema.openapi({
            description: 'A type that defines the fields for the bulk request to create keywords.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkCreateKeywordResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_delete_ads_by_inventory_reference',
  tags: ['ad'],
  description:
    'This method works with listings created with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.<br /><br />The method deletes a set of ads, as specified by a list of inventory reference IDs, from the specified campaign. <i>Inventory reference IDs</i> are seller-defined IDs that are used with the Inventory API</a>.<br /><br />Pass the <b>campaign_id</b> as a path parameter and populate the payload with a list of <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b> pairs that you want to delete.<br /><br />Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller\'s inventory reference IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>',
  operationId: 'bulkDeleteAdsByInventoryReference',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that\'s generated when a campaign is created. Get a seller\'s campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This request works with listings created via the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />The request is to delete a set of ads in bulk, as specified by a list of inventory reference IDs from the specified campaign.',
      content: {
        'application/json': {
          schema: BulkDeleteAdsByInventoryReferenceRequestSchema.openapi({
            description:
              'This request works with listings created via the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />The request is to delete a set of ads in bulk, as specified by a list of inventory reference IDs from the specified campaign.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkDeleteAdsByInventoryReferenceResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkDeleteAdsByListingIdRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_delete_ads_by_listing_id',
  tags: ['ad'],
  description:
    'This method works with listing IDs created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.<br /><br />The method deletes a set of ads, as specified by a list of <b>listingID</b> values from a Promoted Listings campaign. A listing ID value is generated by eBay when a seller creates a listing with either the Trading API and Inventory API.<br /><br />Pass the <b>campaign_id</b> as a path parameter and populate the payload with the set of listing IDs that you want to delete.<br /><br />Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller\'s inventory reference IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the <a href="/api-docs/sell/marketing/resources/ad/methods/bulkUpdateAdsStatusByListingId">bulkUpdateAdsStatusByListingId</a> method to change the status of ads to ARCHIVED.',
  operationId: 'bulkDeleteAdsByListingId',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that\'s generated when a campaign is created. Get a seller\'s campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This request object defines the fields for the <b>bulkDeleteAdsByListingId</b> request.',
      content: {
        'application/json': {
          schema: BulkDeleteAdRequestSchema.openapi({
            description:
              'This request object defines the fields for the <b>bulkDeleteAdsByListingId</b> request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkDeleteAdResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_update_ads_bid_by_inventory_reference',
  tags: ['ad'],
  description:
    'This method works with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.  <p>The method updates the <b>bidPercentage</b> values for a set of ads associated with the specified campaign.</p>  <p>Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their associated updated <b>bidPercentage</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.</p>  <p>Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller\'s inventory reference IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>',
  operationId: 'bulkUpdateAdsBidByInventoryReference',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that\'s generated when a campaign is created. Get a seller\'s campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This request object defines the fields for the <b>BulkCreateAdsByInventoryReference</b> request.',
      content: {
        'application/json': {
          schema: BulkCreateAdsByInventoryReferenceRequestSchema.openapi({
            description:
              'This request object defines the fields for the <b>BulkCreateAdsByInventoryReference</b> request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkUpdateAdsByInventoryReferenceResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkUpdateAdsBidByListingIdRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_update_ads_bid_by_listing_id',
  tags: ['ad'],
  description:
    'This method works with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.  <p>The method updates the <b>bidPercentage</b> values for a set of ads associated with the specified campaign.</p>  <p>Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their associated updated <b>bidPercentage</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.</p>  <p>Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller\'s inventory reference IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>',
  operationId: 'bulkUpdateAdsBidByListingId',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that\'s generated when a campaign is created. Get a seller\'s campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This request object defines the fields for the <b>BulkCreateAdsByListingId</b> request.',
      content: {
        'application/json': {
          schema: BulkCreateAdRequestSchema.openapi({
            description:
              'This request object defines the fields for the <b>BulkCreateAdsByListingId</b> request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkAdUpdateResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkUpdateAdsStatusRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_update_ads_status',
  tags: ['ad'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method works with listings created with either the <a href= "/Devzone/XML/docs/Reference/eBay/index.html">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />This method updates the status of ads in bulk.<br /><br />Specify the <b>campaign_id</b> you want to update as a URI parameter, and configure the <b>adGroupStatus</b> in the request payload.',
  operationId: 'bulkUpdateAdsStatus',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The bulk request to update the ads.',
      content: {
        'application/json': {
          schema: BulkUpdateAdStatusRequestSchema.openapi({
            description: 'The bulk request to update the ads.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkAdUpdateStatusResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_update_ads_status_by_listing_id',
  tags: ['ad'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method works with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />The method updates the status of ads in bulk, based on listing ID values.<br /><br />Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their updated <b>adStatus</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.<br /><br />Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to retrieve a list of seller inventory reference IDs.',
  operationId: 'bulkUpdateAdsStatusByListingId',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The bulk request to update ads.',
      content: {
        'application/json': {
          schema: BulkUpdateAdStatusByListingIdRequestSchema.openapi({
            description: 'The bulk request to update ads.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkAdUpdateStatusByListingIdResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdBulkUpdateKeywordRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/bulk_update_keyword',
  tags: ['keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the bids and statuses of keywords, in bulk, for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.',
  operationId: 'bulkUpdateKeyword',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'A type that defines the fields for the bulk request to update keywords.',
      content: {
        'application/json': {
          schema: BulkUpdateKeywordRequestSchema.openapi({
            description: 'A type that defines the fields for the bulk request to update keywords.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkUpdateKeywordResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdCloneRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/clone',
  tags: ['campaign'],
  description:
    'This method clones (makes a copy of) the specified campaign\'s <b>campaign criterion</b>. The <b>campaign criterion</b> is a container for the fields that define the criteria for a rule-based campaign.<p>To clone a campaign, supply the <b>campaign_id</b> as a path parameter in your call. There is no request payload.</p>  <p>The ID of the newly-cloned campaign is returned in the <b>Location</b> response header.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller\'s current campaign IDs.</p>  <p><b>Requirement: </b>In order to clone a campaign, the <b>campaignStatus</b> must be <code>ENDED</code> and the campaign must define a set of selection rules (it must be a rules-based campaign).</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>',
  operationId: 'cloneCampaign',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. This ID is the campaign ID of the campaign being cloned.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'This type defines the fields for a clone campaign request.',
      content: {
        'application/json': {
          schema: CloneCampaignRequestSchema.openapi({
            description: 'This type defines the fields for a clone campaign request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description:
                'The <b>location</b> response header contains the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign">getCampaign</a> URI to the retrieve the newly created campaign.',
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdCreateAdsByInventoryReferenceRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/create_ads_by_inventory_reference',
  tags: ['ad'],
  description:
    'This method adds a listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a> to an existing Promoted Listings campaign.<br /><br />For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, an ad may be directly created for the listing.<br /><br />For each listing specified in the request, this method:<br /><ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ads created.</li> <li>Associates the created ad with the specified campaign.</li></ul><br />To create an ad for a listing, specify its <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ad with using the <b>campaign_id</b> path parameter.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.',
  operationId: 'createAdsByInventoryReference',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This request object defines the fields used in the <b>createAdsByInventoryReference</b> request.',
      content: {
        'application/json': {
          schema: CreateAdsByInventoryReferenceRequestSchema.openapi({
            description:
              'This request object defines the fields used in the <b>createAdsByInventoryReference</b> request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: AdReferencesSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdDeleteAdsByInventoryReferenceRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/delete_ads_by_inventory_reference',
  tags: ['ad'],
  description:
    'This method works with listings that are managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.  <p>The method deletes ads using a list of seller-defined inventory reference IDs, used with the Inventory API, that are associated with the specified campaign ID.</p> <p>Specify the campaign ID (as a path parameter) and a list of <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b> pairs to be deleted.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of the seller\'s current campaign IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the bulkUpdateAdsStatusByInventoryReference method to change the status of ads to ARCHIVED.',
  operationId: 'deleteAdsByInventoryReference',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This request object defines the fields for the <b>deleteAdsByInventoryReference</b> request.',
      content: {
        'application/json': {
          schema: DeleteAdsByInventoryReferenceRequestSchema.openapi({
            description:
              'This request object defines the fields for the <b>deleteAdsByInventoryReference</b> request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AdIdsSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdEndRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/end',
  tags: ['campaign'],
  description:
    'This method ends an active (<code>RUNNING</code>) or paused campaign. Specify the campaign you want to end by supplying its campaign ID in a query parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller\'s campaigns.</p>',
  operationId: 'endCampaign',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdCampaignCampaignIdGetAdsByInventoryReferenceRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/{campaign_id}/get_ads_by_inventory_reference',
  tags: ['ad'],
  description:
    'This method retrieves Promoted Listings ads associated with listings that are managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a> from the specified campaign.<br /><br />Supply the <b>campaign_id</b> as a path parameter and use query parameters to specify the <b>inventory_reference_id</b> and <b>inventory_reference_type</b> pairs.<br /><br />In the Inventory API, an <i>inventory reference ID</i> is either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b> (a seller-defined ID for an inventory item group, which is an entity that\'s used in the Inventory API to create a multiple-variation listing). To indicate a listing managed by the Inventory API, you must always specify both an <b>inventory_reference_id</b> and the associated <b>inventory_reference_type</b>.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve all of the seller\'s the current campaign IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>',
  operationId: 'getAdsByInventoryReference',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      inventory_reference_id: z
        .string()
        .openapi({
          param: {
            description:
              "The inventory reference ID associated with the ad you want returned. A seller's inventory reference ID is the ID of either a listing or the ID of an inventory item group (the parent of a multi-variation listing, such as a shirt that is available in multiple sizes and colors). You must always supply in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>.",
            in: 'query',
            name: 'inventory_reference_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      inventory_reference_type: z
        .string()
        .openapi({
          param: {
            description:
              'The type of the inventory reference ID. Set this value to either <code>INVENTORY_ITEM</CODE> (a single listing) or <code>INVENTORY_ITEM_GROUP</CODE> (a multi-variation listing). You must always pass in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>. ',
            in: 'query',
            name: 'inventory_reference_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AdsSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const getAdCampaignCampaignIdKeywordRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/{campaign_id}/keyword',
  tags: ['keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method can be used to retrieve all of the keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> as a path parameter. If one or more <b>ad_group_ids</b> are passed in the request body, the keywords for those ad groups will be returned. If <b>ad_group_ids</b> are not passed in the response body, the call will return all the keywords in the campaign.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.',
  operationId: 'getKeywords',
  request: {
    query: z.object({
      ad_group_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of ad group IDs. This query parameter is used if the seller wants to retrieve keywords from one or more specific ad groups. If this query parameter is not used, all keywords that are part of the CPC campaign are returned.<span class="tablenote"><b>Note:</b>You can call the <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a>  method to retrieve the ad group IDs for a seller.</span>',
            in: 'query',
            name: 'ad_group_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      keyword_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of keyword statuses. The results will be filtered to only include the given statuses of the keyword. If none are provided, all keywords are returned.',
            in: 'query',
            name: 'keyword_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '<p>Specifies the maximum number of results to return on a page in the paginated response.</p>  <b>Default: </b>10 <br><b>Maximum: </b> 500',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of results to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: KeywordPagedCollectionResponseSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const postAdCampaignCampaignIdKeywordRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/keyword',
  tags: ['keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method creates keywords using a specified campaign ID for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/suggestKeywords">suggestKeywords</a> method to retrieve a list of keyword ideas to be targeted for PLA campaigns, and call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.',
  operationId: 'createKeyword',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'A type that defines the fields for the request to create a keyword.',
      content: {
        'application/json': {
          schema: CreateKeywordRequestSchema.openapi({
            description: 'A type that defines the fields for the request to create a keyword.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description:
                'The <b>location</b> response header contains the getKeyword URI of the newly created keyword.  The URI includes the newly created <code>keywordId</code>, which you can use to reference the keyword.',
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdCampaignCampaignIdKeywordKeywordIdRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/{campaign_id}/keyword/{keyword_id}',
  tags: ['keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves details on a specific keyword from an ad group within a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.',
  operationId: 'getKeyword',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyword_id: z
        .string()
        .openapi({
          param: {
            description: 'This path parameter is used to identify the keyword to retrieve.',
            in: 'path',
            name: 'keyword_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: KeywordSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const putAdCampaignCampaignIdKeywordKeywordIdRoute = createRoute({
  method: 'put',
  path: '/ad_campaign/{campaign_id}/keyword/{keyword_id}',
  tags: ['keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates keywords using a campaign ID and keyword ID for an existing PLA campaign.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.',
  operationId: 'updateKeyword',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyword_id: z
        .string()
        .openapi({
          param: {
            description: 'A unique eBay-assigned ID that is generated when a keyword is created.',
            in: 'path',
            name: 'keyword_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'A type that defines the fields for the request to update a keyword.',
      content: {
        'application/json': {
          schema: UpdateKeywordRequestSchema.openapi({
            description: 'A type that defines the fields for the request to update a keyword.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdPauseRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/pause',
  tags: ['campaign'],
  description:
    'This method pauses an active (RUNNING) campaign.  <p>You can restart the campaign by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/resumeCampaign">resumeCampaign</a>, as long as the campaign\'s end date is in the future.</p>  <p><b>Note: </b> The listings associated with a paused campaign cannot be added into another campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller\'s campaigns.</p>',
  operationId: 'pauseCampaign',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdResumeRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/resume',
  tags: ['campaign'],
  description:
    'This method resumes a paused campaign, as long as its end date is in the future. Supply the <b>campaign_id</b> for the campaign you want to restart as a query parameter in the request.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller\'s campaigns.</p>',
  operationId: 'resumeCampaign',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdCampaignCampaignIdSuggestItemsRoute = createRoute({
  method: 'get',
  path: '/ad_campaign/{campaign_id}/suggest_items',
  tags: ['campaign'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to obtain ideas for listings, which can be targeted for Promoted Listings campaigns.',
  operationId: 'suggestItems',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      category_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the category ID that is used to limit the results. This refers to an exact leaf category (the lowest level in that category and has no children). This field can have one category ID, or a comma-separated list of IDs. To return all category IDs, set to <code>null</code>. <br /><br /><b>Maximum: </b> 10 ',
            in: 'query',
            name: 'category_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of campaigns to return on a page in the paginated response. If no value is specified, the default value is used. <br /><br /><b>Default: </b>10 <br /><br /><b>Minimum: </b> 1<br /><br /><b>Maximum: </b> 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of campaigns to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TargetedAdsPagedCollectionSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdUpdateAdRateStrategyRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/update_ad_rate_strategy',
  tags: ['campaign'],
  description:
    'This method updates the ad rate strategy for an existing Promoted Listings Standard (PLS) rules-based ad campaign that uses the Cost Per Sale (CPS) funding model.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the CPS funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>',
  operationId: 'updateAdRateStrategy',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This type defines the request fields for the ad rate strategy that shall be updated.',
      content: {
        'application/json': {
          schema: UpdateAdrateStrategyRequestSchema.openapi({
            description:
              'This type defines the request fields for the ad rate strategy that shall be updated.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdUpdateCampaignBudgetRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/update_campaign_budget',
  tags: ['campaign'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the daily budget for a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />A click occurs when an eBay user finds and clicks on the seller’s listing (within the search results) after using a keyword that the seller has created for the campaign. For each ad in an ad group in the campaign, each click triggers a cost, which gets subtracted from the campaign’s daily budget. If the cost of the clicks exceeds the daily budget, the Promoted Listings campaign will be paused until the next day.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.',
  operationId: 'updateCampaignBudget',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This type defines the request fields for the budget details that shall be updated.',
      content: {
        'application/json': {
          schema: UpdateCampaignBudgetRequestSchema.openapi({
            description:
              'This type defines the request fields for the budget details that shall be updated.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdCampaignCampaignIdUpdateCampaignIdentificationRoute = createRoute({
  method: 'post',
  path: '/ad_campaign/{campaign_id}/update_campaign_identification',
  tags: ['campaign'],
  description:
    'This method can be used to change the name of a campaign, as well as modify the start or end dates. <p>Specify the <b>campaign_id</b> you want to update as a URI parameter, and configure the <b>campaignName</b> and <b>startDate</b> in the request payload.  <p>If you want to change only the end date of the campaign, specify the current campaign name, set <b>endDate</b> as desired, and set <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current <b>endDate</b> value will be set to <code>null</code>. To preserve the currently-set end date, you must specify the value again in your request.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller\'s campaign details, including the campaign ID, campaign name, and the start and end dates of the campaign.',
  operationId: 'updateCampaignIdentification',
  request: {
    params: z.object({
      campaign_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'This type defines the fields to update the campaign name and start and end dates.',
      content: {
        'application/json': {
          schema: UpdateCampaignIdentificationRequestSchema.openapi({
            description:
              'This type defines the fields to update the campaign name and start and end dates.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdReportReportIdRoute = createRoute({
  method: 'get',
  path: '/ad_report/{report_id}',
  tags: ['ad_report'],
  description:
    'This call downloads the report as specified by the <b>report_id</b> path parameter.  <br><br>Call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask" title="createReportTask API docs">createReportTask</a> to schedule and generate a Promoted Listings report. All date values are returned in UTC format (<code>yyyy-MM-ddThh:mm:ss.sssZ</code>).<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>',
  operationId: 'getReport',
  request: {
    params: z.object({
      report_id: z
        .string()
        .openapi({
          param: {
            description:
              'The unique ID of the Promoted Listings report you want to get. <p>This ID is generated by eBay when you run a report task with a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>. Get all the seller\'s report IDs by calling <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a>.</p>',
            in: 'path',
            name: 'report_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/tab-separated-values': { schema: z.object({}) } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdReportMetadataRoute = createRoute({
  method: 'get',
  path: '/ad_report_metadata',
  tags: ['ad_report_metadata'],
  description:
    'This call retrieves information that details the fields used in each of the Promoted Listings reports. Use the returned information to configure the different types of Promoted Listings reports.</br></br>The request for this method does not use a payload or any URI parameters.<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span>',
  operationId: 'getReportMetadata',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReportMetadatasSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})

export const getAdReportMetadataReportTypeRoute = createRoute({
  method: 'get',
  path: '/ad_report_metadata/{report_type}',
  tags: ['ad_report_metadata'],
  description:
    'This call retrieves metadata that details the fields used by a specific Promoted Listings report type. Use the <b>report_type</b> path parameter to indicate metadata to retrieve.<br/><br/>This method does not use a request payload.<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span>',
  operationId: 'getReportMetadataForReportType',
  request: {
    params: z.object({
      report_type: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the report type whose metadata you want to retrieve.<br /><br /><span class="tablenote"><b>Tip:</b> For details about available report types and their descriptions, refer to the <a href="/api-docs/sell/marketing/types/plr:ReportTypeEnum">ReportTypeEnum</a>.</span>',
            in: 'path',
            name: 'report_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReportMetadataSchema } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})

export const getAdReportTaskRoute = createRoute({
  method: 'get',
  path: '/ad_report_task',
  tags: ['ad_report_task'],
  description:
    'This method returns information on all the existing report tasks related to a seller. <p>Use the <b>report_task_statuses</b> query parameter to control which reports to return. You can paginate the result set by specifying a <b>limit</b>, which dictates how many report tasks to return on each page of the response. Use the <b>offset</b> parameter to specify how many reports to skip in the result set before returning the first result.</p><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>',
  operationId: 'getReportTasks',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of report tasks to return on a page in the paginated response.  <p><b>Default:</b> 10<br><b>Maximum:</b> 500</p>',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of report tasks to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the reports returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the response contains the first 10 reports from the complete list of report tasks retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>10</code>, the first page of the response contains reports 11-20 from the complete result set.</p> <b>Default:</b> 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      report_task_statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter filters the returned report tasks by their status. Supply a comma-separated list of the report statuses you want returned. The results are filtered to include only the report statuses you specify.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The results might not include some report tasks if other search conditions exclude them.</span><br /><br /><b>Valid values: </b> <br>&nbsp;&nbsp;&nbsp;<code>PENDING</code> <br>&nbsp;&nbsp;&nbsp;<code>SUCCESS</code> <br>&nbsp;&nbsp;&nbsp;<code>FAILED</code>',
            in: 'query',
            name: 'report_task_statuses',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReportTaskPagedCollectionSchema } },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postAdReportTaskRoute = createRoute({
  method: 'post',
  path: '/ad_report_task',
  tags: ['ad_report_task'],
  description:
    '<span class="tablenote"><b>Note:</b> Using multiple funding models in one report is deprecated. If multiple funding models are used, a Warning will be returned in a header. This functionality will be decommissioned on April 3, 2023. See <a href="/develop/apis/api-deprecation-status">API Deprecation Status</a> for details.</span><br /><br />This method creates a <i>report task</i>, which generates a Promoted Listings report based on the values specified in the call.<br /><br />The report is generated based on the criteria you specify, including the report type, the report\'s dimensions and metrics, the report\'s start and end dates, the listings to include in the report, and more. <i>Metrics </i>are the quantitative measurements in the report while <i>dimensions</i> specify the attributes of the data included in the reports.<br /><br />When creating a report task, you can specify the items you want included in the report. The items you specify, using either <b>listingId</b> or <b>inventoryReference</b> values, must be in a Promoted Listings campaign for them to be included in the report.<br /><br />For details on the required and optional fields for each report type, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.<br /><br />This call returns the URL to the report task in the <b>Location</b> response header, and the URL includes the report-task ID.<br /><br />Reports often take time to generate and it\'s common for this call to return an HTTP status of <code>202</code>, which indicates the report is being generated. Call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a> (or <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTask">getReportTask</a> with the report-task ID) to determine the status of a Promoted Listings report. When a report is complete, eBay sets its status to <b>SUCCESS</b> and you can download it using the URL returned in the <b>reportHref</b> field of the <b>getReportTask</b> call. Report files are tab-separated value gzip files with a file extension of <code>.tsv.gz</code>.<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> This call fails if you don\'t submit all the required fields for the specified report type. Fields not supported by the specified report type are ignored. Call <a href="/api-docs/sell/marketing/resources/ad_report_metadata/methods/getReportMetadata">getReportMetadata</a> to retrieve a list of the fields you need to configure for each Promoted Listings report type.</span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>',
  operationId: 'createReportTask',
  request: {
    body: {
      description: 'The container for the fields that define the report task.',
      content: {
        'application/json': {
          schema: CreateReportTaskSchema.openapi({
            description: 'The container for the fields that define the report task.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Accepted' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getAdReportTaskReportTaskIdRoute = createRoute({
  method: 'get',
  path: '/ad_report_task/{report_task_id}',
  tags: ['ad_report_task'],
  description:
    'This call returns the details of a specific Promoted Listings report task, as specified by the <b>report_task_id</b> path parameter. <p>The report task includes the report criteria (such as the report dimensions, metrics, and included listing) and the report-generation rules (such as starting and ending dates for the specified report task).</p>  <p>Report-task IDs are generated by eBay when you call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>. Get a complete list of a seller\'s report-task IDs by calling <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a>.</p><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>',
  operationId: 'getReportTask',
  request: {
    params: z.object({
      report_task_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for the report task that\'s generated when the report task is created by a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>.',
            in: 'path',
            name: 'report_task_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ReportTaskSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const deleteAdReportTaskReportTaskIdRoute = createRoute({
  method: 'delete',
  path: '/ad_report_task/{report_task_id}',
  tags: ['ad_report_task'],
  description:
    'This call deletes the report task specified by the <b>report_task_id</b> path parameter. This method also deletes any reports generated by the report task.  <p>Report task IDs are generated by eBay when you call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>. Get a complete list of a seller\'s report-task IDs by calling <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a>.</p><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>',
  operationId: 'deleteReportTask',
  request: {
    params: z.object({
      report_task_id: z
        .string()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for the report task that\'s generated when the report task is created by a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>.',
            in: 'path',
            name: 'report_task_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postBulkCreateNegativeKeywordRoute = createRoute({
  method: 'post',
  path: '/bulk_create_negative_keyword',
  tags: ['negative_keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds negative keywords, in bulk, to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />Specify the <b>campaignId</b> and <b>adGroupId</b> in the request body, along with the <b>negativeKeywordText</b> and <b>negativeKeywordMatchType</b>.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.',
  operationId: 'bulkCreateNegativeKeyword',
  request: {
    body: {
      description:
        'A type that defines the fields for the bulk request to create negative keywords.',
      content: {
        'application/json': {
          schema: BulkCreateNegativeKeywordRequestSchema.openapi({
            description:
              'A type that defines the fields for the bulk request to create negative keywords.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkCreateNegativeKeywordResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postBulkUpdateNegativeKeywordRoute = createRoute({
  method: 'post',
  path: '/bulk_update_negative_keyword',
  tags: ['negative_keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the statuses of existing negative keywords, in bulk.<br /><br />Specify the <b>negativeKeywordId</b> and <b>negativeKeywordStatus</b> in the request body.',
  operationId: 'bulkUpdateNegativeKeyword',
  request: {
    body: {
      description:
        'A type that defines the fields for the bulk request to update negative keyword statuses.',
      content: {
        'application/json': {
          schema: BulkUpdateNegativeKeywordRequestSchema.openapi({
            description:
              'A type that defines the fields for the bulk request to update negative keyword statuses.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkUpdateNegativeKeywordResponseSchema } },
    },
    207: { description: 'Multi Status' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postItemPriceMarkdownRoute = createRoute({
  method: 'post',
  path: '/item_price_markdown',
  tags: ['item_price_markdown'],
  description:
    'This method creates an <b>item price markdown promotion</b> (know simply as a "markdown promotion") where a discount amount is applied directly to the items included the promotion. Discounts can be specified as either a monetary amount or a percentage off the standard sales price. eBay highlights promoted items by placing teasers for the items throughout the online sales flows.  <p>Unlike an <a href="/api-docs/sell/marketing/resources/item_promotion/methods/createItemPromotion">item promotion</a>, a markdown promotion does not require the buyer meet a "threshold" before the offer takes effect. With markdown promotions, all the buyer needs to do is purchase the item to receive the promotion benefit.</p>  <p class="tablenote"><b>Important:</b> There are some restrictions for which listings are available for price markdown promotions. For details, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>. <br><br>In addition, we recommend you list items at competitive prices before including them in your markdown promotions. For an extensive list of pricing recommendations, see the <b>Growth</b> tab in Seller Hub.</p> <p>There are two ways to add items to markdown promotions:</p> <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li>  <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>New promotions must be created in either a <code>DRAFT</code> or a <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it\'s correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests (such as to schedule a promotion that\'s in a DRAFT state).</p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a> in the <i>Selling Integration Guide</i> for details and examples showing how to create and manage seller promotions.</p>  <p>Markdown promotions are available on all eBay marketplaces. For more information, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>',
  operationId: 'createItemPriceMarkdownPromotion',
  request: {
    body: {
      description: 'This type defines the fields that describe an item price markdown promotion.',
      content: {
        'application/json': {
          schema: ItemPriceMarkdownSchema.openapi({
            description:
              'This type defines the fields that describe an item price markdown promotion.',
          }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description:
                'The <b>location</b> response header contains the URL to the newly created item price markdown promotion. The URL includes the eBay-assigned <code>promotionId</code>, which you can use to reference the promotion.',
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getItemPriceMarkdownPromotionIdRoute = createRoute({
  method: 'get',
  path: '/item_price_markdown/{promotion_id}',
  tags: ['item_price_markdown'],
  description:
    'This method returns the complete details of the item price markdown promotion that\'s indicated by the <b>promotion_id</b> path parameter. <br><br>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller\'s promotions.',
  operationId: 'getItemPriceMarkdownPromotion',
  request: {
    params: z.object({
      promotion_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter takes a concatenation of the ID of the promotion you want to get plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that\'s generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>',
            in: 'path',
            name: 'promotion_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ItemPriceMarkdownSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const putItemPriceMarkdownPromotionIdRoute = createRoute({
  method: 'put',
  path: '/item_price_markdown/{promotion_id}',
  tags: ['item_price_markdown'],
  description:
    "This method updates the specified item price markdown promotion with the new configuration that you supply in the payload of the request. Specify the promotion you want to update using the <b>promotion_id</b> path parameter. Call <a href=\"/api-docs/sell/marketing/resources/promotion/methods/getPromotions\">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request fails.  <br><br>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul>",
  operationId: 'updateItemPriceMarkdownPromotion',
  request: {
    params: z.object({
      promotion_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter takes a concatenation of the ID of the promotion you want to update plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that\'s generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>',
            in: 'path',
            name: 'promotion_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'This type defines the fields that describe an item price markdown promotion.',
      content: {
        'application/json': {
          schema: ItemPriceMarkdownSchema.openapi({
            description:
              'This type defines the fields that describe an item price markdown promotion.',
          }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: z.object({}) } } },
    204: { description: 'Success' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const deleteItemPriceMarkdownPromotionIdRoute = createRoute({
  method: 'delete',
  path: '/item_price_markdown/{promotion_id}',
  tags: ['item_price_markdown'],
  description:
    'This method deletes the item price markdown promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller\'s promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running promotion, call <a href="/api-docs/sell/marketing/resources/item_price_markdown/methods/updateItemPriceMarkdownPromotion">updateItemPriceMarkdownPromotion</a> and adjust the <b>endDate</b> field as appropriate.',
  operationId: 'deleteItemPriceMarkdownPromotion',
  request: {
    params: z.object({
      promotion_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter takes a concatenation of the ID of the promotion you want to delete plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that\'s generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>',
            in: 'path',
            name: 'promotion_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postItemPromotionRoute = createRoute({
  method: 'post',
  path: '/item_promotion',
  tags: ['item_promotion'],
  description:
    'This method creates an <b>item promotion</b>, where the buyer receives a discount when they meet the buying criteria that\'s set for the promotion. Known here as "threshold promotions", these promotions trigger when a threshold is met.  <p>eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows.</p>  <p><i>Discounts</i> are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as "Buy 1 Get 1" and "Buy $50, get 20% off".</p> <p><i>Volume pricing</i> promotions increase the value of the discount as the buyer increases the quantity they purchase.</p> <p><i>Coded Coupons</i> provide unique codes that a buyer can use during checkout to receive a discount. The seller can specify the number of times a buyer can use the coupon and the maximum amount across all purchases that can be discounted using the coupon. The coupon code can also be made public (appearing on the seller\'s Offer page, search pages, the item listing, and the checkout page) or private (only on the seller\'s Offer page, but the seller can include the code in email and social media).</p> <p class="tablenote"><b>Note</b>: Coded Coupons are currently available in the US, UK, DE, FR, IT, ES, and AU marketplaces.</p><p>There are two ways to add items to a threshold promotion:</p>  <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li> <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>You must create a new promotion in either a <code>DRAFT</code> or <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it\'s correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests.</p>  <p class="tablenote"><b>Tip:</b> Refer to the <a href="/api-docs/sell/static/marketing/promotions-manager.html">Selling Integration Guide</a> for details and examples showing how to create and manage threshold promotions using the Promotions Manager.</p>  <p>For information on the eBay marketplaces that support item promotions, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>',
  operationId: 'createItemPromotion',
  request: {
    body: {
      description: 'This type defines the fields that describe an item promotion.',
      content: {
        'application/json': {
          schema: ItemPromotionSchema.openapi({
            description: 'This type defines the fields that describe an item promotion.',
          }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: BaseResponseSchema } },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'URL location of new item promotion.',
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    409: { description: 'Business Error' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getItemPromotionPromotionIdRoute = createRoute({
  method: 'get',
  path: '/item_promotion/{promotion_id}',
  tags: ['item_promotion'],
  description:
    'This method returns the complete details of the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller\'s promotions.',
  operationId: 'getItemPromotion',
  request: {
    params: z.object({
      promotion_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter takes a concatenation of the ID of the promotion you want to retrieve plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that\'s generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>',
            in: 'path',
            name: 'promotion_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ItemPromotionResponseSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const putItemPromotionPromotionIdRoute = createRoute({
  method: 'put',
  path: '/item_promotion/{promotion_id}',
  tags: ['item_promotion'],
  description:
    "This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the <b>promotion_id</b> path parameter.  <p>Call <a href=\"/api-docs/sell/marketing/resources/promotion/methods/getPromotions\">getPromotions</a> to retrieve the IDs of a seller's promotions.</p>  <p>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail.</p>  <p>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING or PAUSED promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul> <p class=\"tablenote\"><b>Tip:</b> When updating a <code>RUNNING</code> or <code>PAUSED</code> promotion, set the <b>status</b> field to <code>SCHEDULED</code> for the update request. When the promotion is updated, the previous status (either <code>RUNNING</code> or <code>PAUSED</code>) is retained.</p>",
  operationId: 'updateItemPromotion',
  request: {
    params: z.object({
      promotion_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter takes a concatenation of the ID of the promotion you want to update plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that\'s generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>',
            in: 'path',
            name: 'promotion_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'This type defines the fields that describe an item promotion.',
      content: {
        'application/json': {
          schema: ItemPromotionSchema.openapi({
            description: 'This type defines the fields that describe an item promotion.',
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BaseResponseSchema } },
    },
    204: { description: 'Success' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const deleteItemPromotionPromotionIdRoute = createRoute({
  method: 'delete',
  path: '/item_promotion/{promotion_id}',
  tags: ['item_promotion'],
  description:
    'This method deletes the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller\'s promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call <a href="/api-docs/sell/marketing/resources/item_promotion/methods/updateItemPromotion">updateItemPromotion</a> and adjust the <b>endDate</b> field as appropriate.',
  operationId: 'deleteItemPromotion',
  request: {
    params: z.object({
      promotion_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter takes a concatenation of the ID of the promotion you want to delete plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that\'s generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>',
            in: 'path',
            name: 'promotion_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getNegativeKeywordRoute = createRoute({
  method: 'get',
  path: '/negative_keyword',
  tags: ['negative_keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method can be used to retrieve all of the negative keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.<br /><br />The results can be filtered using the <b>campaign_ids</b>, <b>ad_group_ids</b>, and <b>negative_keyword_status</b> query parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.',
  operationId: 'getNegativeKeywords',
  request: {
    query: z.object({
      ad_group_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of ad group IDs.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from one or more specific ad groups. The results might not include these ad group IDs if other search conditions exclude them.<br /><br /><span class="tablenote"><b>Note:</b>You can call the <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the search results must be filtered to include negative keywords created at the ad group level.',
            in: 'query',
            name: 'ad_group_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      campaign_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from a specific campaign. The results might not include these campaign IDs if other search conditions exclude them.<br /><br /><span class="tablenote"><b>Note:</b> Currently, only one campaign ID value is supported for each request.</span>',
            in: 'query',
            name: 'campaign_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of results, from the current result set, to be returned in a single page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      negative_keyword_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of negative keyword statuses.<br /><br />This query parameter is used if the seller wants to filter the search results based on one or more negative keyword statuses.',
            in: 'query',
            name: 'negative_keyword_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of results that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NegativeKeywordPagedCollectionResponseSchema } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const postNegativeKeywordRoute = createRoute({
  method: 'post',
  path: '/negative_keyword',
  tags: ['negative_keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds a negative keyword to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />Specify the <b>campaignId</b> and <b>adGroupId</b> in the request body, along with the <b>negativeKeywordText</b> and <b>negativeKeywordMatchType</b>.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.',
  operationId: 'createNegativeKeyword',
  request: {
    body: {
      description: 'A type that defines the fields for the request to create a negative keyword.',
      content: {
        'application/json': {
          schema: CreateNegativeKeywordRequestSchema.openapi({
            description:
              'A type that defines the fields for the request to create a negative keyword.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description:
                'The <b>location</b> response header contains the URI of the newly created negative keyword. The URI includes the newly created <code>negativeKeywordId</code>, which you can use to reference the negative keyword.',
            }),
        },
      }),
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getNegativeKeywordNegativeKeywordIdRoute = createRoute({
  method: 'get',
  path: '/negative_keyword/{negative_keyword_id}',
  tags: ['negative_keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves details on a specific negative keyword.<br /><br />In the request, specify the <b>negative_keyword_id</b> as a path parameter.',
  operationId: 'getNegativeKeyword',
  request: {
    params: z.object({
      negative_keyword_id: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for the negative keyword.<br /><br />This value is returned in the <b>Location</b> response header from the <a href="/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword">createNegativeKeyword</a> method.',
            in: 'path',
            name: 'negative_keyword_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NegativeKeywordSchema } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const putNegativeKeywordNegativeKeywordIdRoute = createRoute({
  method: 'put',
  path: '/negative_keyword/{negative_keyword_id}',
  tags: ['negative_keyword'],
  description:
    '<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the status of an existing negative keyword.<br /><br />Specify the <b>negative_keyword_id</b> as a path parameter, and specify the <b>negativeKeywordStatus</b> in the request body.',
  operationId: 'updateNegativeKeyword',
  request: {
    params: z.object({
      negative_keyword_id: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for the negative keyword.<br /><br />This value is returned in the <b>Location</b> response header from the <a href="/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword">createNegativeKeyword</a> method.',
            in: 'path',
            name: 'negative_keyword_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'A type that defines the fields for the request to update a negative keyword.',
      content: {
        'application/json': {
          schema: UpdateNegativeKeywordRequestSchema.openapi({
            description:
              'A type that defines the fields for the request to update a negative keyword.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    409: { description: 'Business error' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getPromotionRoute = createRoute({
  method: 'get',
  path: '/promotion',
  tags: ['promotion'],
  description:
    "This method returns a list of a seller's undeleted promotions. <p>The call returns up to 200 currently-available promotions on the specified marketplace. While the response body does not include the promotion's <b>discountRules</b> or <b>inventoryCriterion</b> containers, it does include the <b>promotionHref</b> (which you can use to retrieve the complete details of the promotion).</p>  <p>Use query parameters to sort and filter the results by the number of promotions to return, the promotion state or type, and the eBay marketplace. You can also supply keywords to limit the response to the promotions that contain that keywords in the title of the promotion.</p> <p><b>Maximum returned:</b> 200</p>",
  operationId: 'getPromotions',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of promotions returned on a page from the result set.  <br><br><b>Default:</b> 200 <br><b>Maximum:</b> 200',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      marketplace_id: z
        .string()
        .openapi({
          param: {
            description:
              'The eBay marketplace ID of the site where the promotion is hosted.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>',
            in: 'query',
            name: 'marketplace_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      promotion_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the promotion state by which you want to filter the results. The response contains only those promotions that match the state you specify.  <br><br><b>Valid values:</b> <ul><li><code>DRAFT</code></li> <li><code>SCHEDULED</code></li> <li><code>RUNNING</code></li> <li><code>PAUSED</code></li> <li><code>ENDED</code></li></ul><b>Maximum number of input values:</b> 1',
            in: 'query',
            name: 'promotion_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      promotion_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters the returned promotions based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned: <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul>',
            in: 'query',
            name: 'promotion_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string consisting of one or more <i>keywords</i>. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title.  <br><br><b>Example:</b> "iPhone" or "Harry Potter."  <br><br>Commas that separate keywords are ignored. For example, a keyword string of "iPhone, iPad" equals "iPhone iPad", and each results in a response that contains promotions with both "iPhone" and "iPad" in the title.',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the order for how to sort the response. If you precede the supplied value with a dash, the response is sorted in reverse order.  <br><br><b>Example:</b> <br>&nbsp;&nbsp;&nbsp;<code>sort=END_DATE</code> &nbsp; Sorts the promotions in the response by their end dates in ascending order <br>&nbsp;&nbsp;&nbsp;<code>sort=-PROMOTION_NAME</code> &nbsp; Sorts the promotions by their promotion name in descending alphabetical order (Z-Az-a)  <br><br><b>Valid values</b>:<ul><li><code>START_DATE</code></li> <li><code>END_DATE</code></li> <li><code>PROMOTION_NAME</code></li></ul> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/csb:SortField',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PromotionsPagedCollectionSchema } },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const getPromotionPromotionIdGetListingSetRoute = createRoute({
  method: 'get',
  path: '/promotion/{promotion_id}/get_listing_set',
  tags: ['promotion'],
  description:
    'This method returns the set of listings associated with the <b>promotion_id</b> specified in the path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller\'s promotions.  <p>The listing details are returned in a paginated set and you can control and results returned using the following query parameters: <b>limit</b>, <b>offset</b>, <b>q</b>, <b>sort</b>, and <b>status</b>.</p>  <ul><li><b>Maximum associated listings returned:</b> 200</li>  <li><b>Default number of listings returned:</b> 200</li></ul>',
  operationId: 'getListingSet',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of promotions returned on a page from the result set. <br><br><b>Default:</b> 200<br><b>Maximum:</b> 200',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Reserved for future use.',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the order in which to sort the associated listings in the response. If you precede the supplied value with a dash, the response is sorted in reverse order.  <br><br><b>Example:</b> <br>&nbsp;&nbsp;&nbsp;<code>sort=PRICE</code> - Sorts the associated listings by their current price in ascending order <br>&nbsp;&nbsp;&nbsp;<code>sort=-TITLE</code> - Sorts the associated listings by their title in descending alphabetical order (Z-Az-a)  <br><br><b>Valid values</b>:<ul class="compact"><li>AVAILABLE</li> <li>PRICE</li> <li>TITLE</li></ul> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/csb:SortField',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This query parameter applies only to markdown promotions. It filters the response based on the indicated status of the promotion. Currently, the only supported value for this parameter is <code>MARKED_DOWN</code>, which indicates active markdown promotions. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum',
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      promotion_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter takes a concatenation of the ID of the promotion you want to get plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that\'s generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>',
            in: 'path',
            name: 'promotion_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ItemsPagedCollectionSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postPromotionPromotionIdPauseRoute = createRoute({
  method: 'post',
  path: '/promotion/{promotion_id}/pause',
  tags: ['promotion'],
  description:
    'This method pauses a currently-active (RUNNING) threshold promotion and changes the state of the promotion from <code>RUNNING</code> to <code>PAUSED</code>. Pausing a promotion makes the promotion temporarily unavailable to buyers and any currently-incomplete transactions will not receive the promotional offer until the promotion is resumed. Also, promotion teasers are not displayed when a promotion is paused.  <br><br>Pass the ID of the promotion you want to pause using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller\'s promotions. <br><br><b>Note:</b> You can only pause threshold promotions (you cannot pause markdown promotions).',
  operationId: 'pausePromotion',
  request: {
    params: z.object({
      promotion_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter takes a concatenation of the ID of the promotion you want to pause plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that\'s generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>',
            in: 'path',
            name: 'promotion_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const postPromotionPromotionIdResumeRoute = createRoute({
  method: 'post',
  path: '/promotion/{promotion_id}/resume',
  tags: ['promotion'],
  description:
    'This method restarts a threshold promotion that was previously paused and changes the state of the promotion from <code>PAUSED</code> to <code>RUNNING</code>. Only promotions that have been previously paused can be resumed. Resuming a promotion reinstates the promotional teasers and any transactions that were in motion before the promotion was paused will again be eligible for the promotion.  <br><br>Pass the ID of the promotion you want to resume using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller\'s promotions.',
  operationId: 'resumePromotion',
  request: {
    params: z.object({
      promotion_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter takes a concatenation of the ID of the promotion you want to resume plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that\'s generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>',
            in: 'path',
            name: 'promotion_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.marketing'] }],
})

export const getPromotionReportRoute = createRoute({
  method: 'get',
  path: '/promotion_report',
  tags: ['promotion_report'],
  description:
    "This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.",
  operationId: 'getPromotionReports',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of promotions returned on a page from the result set.  <br><br><b>Default:</b> 200 <br><b>Maximum:</b> 200',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      marketplace_id: z
        .string()
        .openapi({
          param: {
            description:
              'The eBay marketplace ID of the site for which you want the promotions report.  <p><b>Valid values:</b>  </p><ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>',
            in: 'query',
            name: 'marketplace_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      promotion_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the results to the promotions that are in the state specified by this query parameter.  <br><br><b>Valid values:</b> <ul><li><code>DRAFT</code></li> <li><code>SCHEDULED</code></li> <li><code>RUNNING</code></li> <li><code>PAUSED</code></li> <li><code>ENDED</code></li></ul><b>Maximum number of values supported:</b> 1',
            in: 'query',
            name: 'promotion_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      promotion_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters the returned promotions in the report based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned in the report: <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul>',
            in: 'query',
            name: 'promotion_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string consisting of one or more <i>keywords</i>. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title.  <br><br><b>Example:</b> "iPhone" or "Harry Potter."  <br><br>Commas that separate keywords are ignored. For example, a keyword string of "iPhone, iPad" equals "iPhone iPad", and each results in a response that contains promotions with both "iPhone" and "iPad" in the title.',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PromotionsReportPagedCollectionSchema } },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})

export const getPromotionSummaryReportRoute = createRoute({
  method: 'get',
  path: '/promotion_summary_report',
  tags: ['promotion_summary_report'],
  description:
    'This method generates a report that summarizes the seller\'s promotions for the specified eBay marketplace. The report returns information on <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code> promotions (deleted reports are not returned) and summarizes the seller\'s campaign performance for all promotions on a given site.  <br><br>For information about summary reports, see <a href="/api-docs/sell/static/marketing/pm-summary-report.html">Reading the item promotion Summary report</a>.',
  operationId: 'getPromotionSummaryReport',
  request: {
    query: z.object({
      marketplace_id: z
        .string()
        .openapi({
          param: {
            description:
              'The eBay marketplace ID of the site you for which you want a promotion summary report.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>',
            in: 'query',
            name: 'marketplace_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SummaryReportResponseSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
      ],
    },
  ],
})
