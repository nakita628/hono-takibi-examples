import { createRoute, z } from '@hono/zod-openapi'

const AutomotivePartsCompatibilityPolicySchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The category ID to which the automotive-parts-compatibility policies apply.',
      }),
    categoryTreeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.',
      }),
    compatibilityBasedOn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether the category supports parts compatibility by either <code>ASSEMBLY</code> or by <code>SPECIFICATION</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:CompatibilityTypeEnum'>eBay API documentation</a>",
      }),
    compatibleVehicleTypes: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:CompatibleVehicleTypeEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Indicates the compatibility classification of the part based on high-level vehicle types.',
      }),
    maxNumberOfCompatibleVehicles: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the maximum number of compatible vehicle-applications allowed per item.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AutomotivePartsCompatibilityPolicy')

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

const AutomotivePartsCompatibilityPolicyResponseSchema = z
  .object({
    automotivePartsCompatibilityPolicies: z
      .array(AutomotivePartsCompatibilityPolicySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of category IDs and the automotive-parts-compatibility policies for each of the listed categories.',
      }),
    warnings: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AutomotivePartsCompatibilityPolicyResponse')

const ExtendedProducerResponsibilitySchema = z
  .object({
    enabledForVariations: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'An indication of whether the attribute can be enabled for listing variations.<br /><br />If the value is <code>true</code>, the attribute may be specified at the variation level.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the attribute included in the policy. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:ExtendedProducerResponsibilityEnum'>eBay API documentation</a>",
      }),
    usage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The usage guidelines for the attribute, in the specified marketplace. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:GenericUsageEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      'A type that defines the attributes of an Extended Producer Responsibility policy.',
    required: [],
  })
  .openapi('ExtendedProducerResponsibility')

const ExtendedProducerResponsibilityPolicySchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the category under which the policy applies.',
      }),
    categoryTreeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the category tree under which the policy applies.',
      }),
    supportedAttributes: z
      .array(ExtendedProducerResponsibilitySchema)
      .exactOptional()
      .openapi({
        description:
          'The details regarding the attributes included in the policy, such as their usage guidelines and whether they can be specified at the listing variation level.',
      }),
  })
  .openapi({
    description: 'A type that defines the Extended Producer Responsibility policy.',
    required: [],
  })
  .openapi('ExtendedProducerResponsibilityPolicy')

const ExtendedProducerResponsibilityPolicyResponseSchema = z
  .object({
    extendedProducerResponsibilities: z
      .array(ExtendedProducerResponsibilityPolicySchema)
      .exactOptional()
      .openapi({
        description:
          'An array of response fields detailing the Extended Producer Responsibility policies supported for the specified marketplace.',
      }),
    warnings: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'A collection of warnings generated for the request.' }),
  })
  .openapi({
    description:
      'A type that defines the response fields for the <b>getExtendedProducerResponsibilityPolicies</b> method.',
    required: [],
  })
  .openapi('ExtendedProducerResponsibilityPolicyResponse')

const HazardStatementSchema = z
  .object({
    statementDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The description of the statement localized to the default language of the marketplace. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Hazard'>Hazard statement sample values</a>.",
      }),
    statementId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The identifier of the statement. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Hazard'>Hazard statement sample values</a>.",
      }),
  })
  .openapi({
    description: 'A type that describes hazard statements for hazardous materials labels',
    required: [],
  })
  .openapi('HazardStatement')

const PictogramSchema = z
  .object({
    pictogramDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The description of the pictogram localized to the default language of the marketplace. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Pictogra'>Pictogram sample values</a>.",
      }),
    pictogramId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The identifier of the pictogram. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Pictogra'>Pictogram sample values</a>.",
      }),
    pictogramUrl: z.string().exactOptional().openapi({ description: 'The URL of the pictogram.' }),
  })
  .openapi({
    description: 'A type that describes pictograms for hazardous materials labels.',
    required: [],
  })
  .openapi('Pictogram')

const SignalWordSchema = z
  .object({
    signalWordDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The description of the signal word localized to the default language of the marketplace. For more information, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Signal'>Signal word information</a>.",
      }),
    signalWordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The identifier of the signal word. For more information, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Signal'>Signal word information</a>.",
      }),
  })
  .openapi({
    description: 'A type that describes signal words for hazardous materials labels.',
    required: [],
  })
  .openapi('SignalWord')

const HazardousMaterialDetailsResponseSchema = z
  .object({
    pictograms: z
      .array(PictogramSchema)
      .exactOptional()
      .openapi({
        description:
          'This array contains of available hazardous materials hazard pictograms for the specified marketplace.',
      }),
    signalWords: z
      .array(SignalWordSchema)
      .exactOptional()
      .openapi({
        description:
          'This array contains available hazardous materials signal words for the specified marketplace.',
      }),
    statements: z
      .array(HazardStatementSchema)
      .exactOptional()
      .openapi({
        description:
          'This array contains available hazardous materials hazard statements for the specified marketplace.',
      }),
  })
  .openapi({
    description:
      'A type that defines the response fields for the <b>getHazardousMaterialsLabels</b> method.',
    required: [],
  })
  .openapi('HazardousMaterialDetailsResponse')

const ItemConditionSchema = z
  .object({
    conditionDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable label for the condition (e.g., "New"). This value is typically localized for each site.  <br><br>Note that the display name can vary by category. For example, the description for condition ID <code>1000</code> could be called "New: with Tags" in one category and "Brand New" in another. For details on condition IDs and descriptions, see <a href=\'/api-docs/sell/static/metadata/condition-id-values.html\'>Item condition ID and name values</a>.',
      }),
    conditionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID value of the selected item condition. For information on the supported condition ID values, see <a href='/api-docs/sell/static/metadata/condition-id-values.html'>Item condition ID and name values</a>.",
      }),
    usage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The value returned in this field indicates if there are any usage restrictions or requirements for the corresponding item condition in the corresponding category.<br /><br /><span class=\"tablenote\"><b>Note:</b> Currently, the only supported value is 'RESTRICTED', and this field will only be returned for the following conditions: 2000, 2010, 2020, 2030. Sellers must be pre-approved to use any of these item conditions.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:UsageEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      "<span class=\"tablenote\"><b>Note: </b>In all eBay marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', and not 'Manufacturer Refurbished'. To list an item as 'Certified Refurbished', a seller must be pre-qualified by eBay for this feature. Any seller who is not eligible for this feature will be blocked if they try to create a new listing or revise an existing listing with this item condition. Any active listings on any eBay marketplace that had 'Manufacturer Refurbished' as the item condition should have been automatically updated by eBay to the 'Seller Refurbished' item condition (Condition ID 2500). <br><br> Any seller that is interested in eligibility requirements to list with 'Certified Refurbished' should see the <a href=\"https://pages.ebay.com/seller-center/listing-and-marketing/certified-refurbished-program.html \" target=\"_blank\">Certified refurbished program</a> page in Seller Center. </span>",
    required: [],
  })
  .openapi('ItemCondition')

const ItemConditionPolicySchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category ID to which the item-condition policy applies.' }),
    categoryTreeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.',
      }),
    itemConditionRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This flag denotes whether or not you must list the item condition in a listing for the specified category. If set to <code>true</code>, you must specify an item condition for the associated category.',
      }),
    itemConditions: z
      .array(ItemConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'The item-condition values allowed in the category.<br /><br /><span class="tablenote"><b>Note:</b> The ‘Seller Refurbished’ item condition (condition ID 2500) has been replaced by the \'Excellent - Refurbished\', \'Very Good - Refurbished\', and \'Good - Refurbished\' item conditions in a select number of eBay marketplaces and categories. See the <a href="/api-docs/sell/static/metadata/condition-id-values.html#Category " target="_blank "> eBay Refurbished Program - Category and marketplace support</a> topic for more details.<br/><br/>Similar to the ‘Certified Refurbished’ item condition (condition ID 2000), a seller’s OAuth user token will have to be used instead of an OAuth application token, since each seller must  go through an application and qualification process before using any of these new refurbished item conditions in supported categories. If a seller is not qualified to use the new refurbished item conditions, these item condition values will not be returned by <b>getItemConditionPolicies</b>.</span>',
      }),
  })
  .openapi({ required: [] })
  .openapi('ItemConditionPolicy')

const ItemConditionPolicyResponseSchema = z
  .object({
    itemConditionPolicies: z
      .array(ItemConditionPolicySchema)
      .exactOptional()
      .openapi({
        description:
          "A list of category IDs and the policies for how to indicate an item's condition in each of the listed categories.",
      }),
    warnings: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ItemConditionPolicyResponse')

const ListingStructurePolicySchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category ID to which the listing-structure policy applies.' }),
    categoryTreeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.',
      }),
    variationsSupported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This flag denotes whether or not the associated category supports listings with item variations. If set to <code>true</code>, the category does support item variations.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListingStructurePolicy')

const ListingStructurePolicyResponseSchema = z
  .object({
    listingStructurePolicies: z
      .array(ListingStructurePolicySchema)
      .exactOptional()
      .openapi({
        description:
          'Returns a list of category IDs plus a flag indicating whether or not each listed category supports item variations.',
      }),
    warnings: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListingStructurePolicyResponse')

const NegotiatedPricePolicySchema = z
  .object({
    bestOfferAutoAcceptEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This flag denotes whether or not the category supports the setting of a price at which best offers are automatically accepted. If set to <code>true</code>, the category does support the setting of an automatic price for best-offers.',
      }),
    bestOfferAutoDeclineEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This flag denotes whether or not the category supports the setting of an auto-decline price for best offers. If set to <code>true</code>, the category does support the setting of an automatic-decline price for best-offers.',
      }),
    bestOfferCounterEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This flag denotes whether or not the category supports the setting for an automatic counter-offer on best offers. If set to <code>true</code>, the category does support the setting of an automatic counter-offer price for best-offers.',
      }),
    categoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category ID to which the negotiated-price policies apply.' }),
    categoryTreeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NegotiatedPricePolicy')

const NegotiatedPricePolicyResponseSchema = z
  .object({
    negotiatedPricePolicies: z
      .array(NegotiatedPricePolicySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of category IDs and the policies related to negotiated-price items for each of the listed categories.',
      }),
    warnings: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NegotiatedPricePolicyResponse')

const TimeDurationSchema = z
  .object({
    unit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A time-measurement unit that specifies a singular period of time.  <br><br>A span of time is defined when you apply the value specified in the <b>value</b> field to the value specified for <b>unit</b>.  <br><br>Time-measurement units can be YEAR, MONTH, DAY, and so on. See <b>TimeDurationUnitEnum</b> for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/ba:TimeDurationUnitEnum'>eBay API documentation</a>",
      }),
    value: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer that represents an amount of time, as measured by the time-measurement unit specified in the <b>unit</b> field.',
      }),
  })
  .openapi({
    description:
      'A complex type that specifies a period of time using a specified time-measurement unit.',
    required: [],
  })
  .openapi('TimeDuration')

const ReturnPolicyDetailsSchema = z
  .object({
    policyDescriptionEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to <code>true</code>, this flag indicates you can supply a detailed return policy description within your return policy (for example, by populating the <b>returnInstructions</b> field in the Account API's <b>createReturnPolicy</b>). User-supplied return policy details are allowed only in the DE, ES, FR, and IT marketplaces.",
      }),
    refundMethods: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:RefundMethodEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({ description: 'A list of refund methods allowed for the associated category.' }),
    returnMethods: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:ReturnMethodEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({ description: 'A list of return methods allowed for the associated category.' }),
    returnPeriods: z
      .array(TimeDurationSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of return periods allowed for the associated category.  <br><br>Note that different APIs require you to enter the return period in different ways. For example, the Account API uses the complex <b>TimeDuration</b> type, which takes two values (a <b>unit</b> and a <b>value</b>), whereas the Trading API takes a single value (such as <code>Days_30</code>).',
      }),
    returnShippingCostPayers: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:ReturnShippingCostPayerEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of allowed values for who pays for the return shipping cost.  <br><br>Note that for SNAD returns, the seller is always responsible for the return shipping cost.',
      }),
    returnsAcceptanceEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to <code>true</code>, this flag indicates the seller can configure how they handle domestic returns.',
      }),
  })
  .openapi({
    description:
      'This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).',
    required: [],
  })
  .openapi('ReturnPolicyDetails')

const ReturnPolicySchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category ID to which the return policies apply.' }),
    categoryTreeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.',
      }),
    domestic: ReturnPolicyDetailsSchema.exactOptional().openapi({
      description:
        'This complex type defines the category policies related to domestic item returns.',
    }),
    international: ReturnPolicyDetailsSchema.exactOptional().openapi({
      description:
        'This complex type defines the category policies related to international item returns.',
    }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to <code>true</code>, this flag indicates that you must specify a return policy for items listed in the associated category.  <br><br>Note that not accepting returns (setting <b>returnsAcceptedEnabled</b> to <code>false</code>) is a valid return policy.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnPolicy')

const ReturnPolicyResponseSchema = z
  .object({
    returnPolicies: z
      .array(ReturnPolicySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of elements, where each contains a category ID and a flag that indicates whether or not listings in that category require a return policy.',
      }),
    warnings: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnPolicyResponse')

const SalesTaxJurisdictionSchema = z
  .object({
    salesTaxJurisdictionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID for a sales tax jurisdiction.' }),
  })
  .openapi({ description: 'A unique ID for a sales tax jurisdiction.', required: [] })
  .openapi('SalesTaxJurisdiction')

const SalesTaxJurisdictionsSchema = z
  .object({
    salesTaxJurisdictions: z
      .array(SalesTaxJurisdictionSchema)
      .exactOptional()
      .openapi({ description: 'A list of sales tax jurisdictions.' }),
  })
  .openapi({
    description: 'This complex type contains a list of sales tax jurisdictions.',
    required: [],
  })
  .openapi('SalesTaxJurisdictions')

const ApiAuthSecurityScheme = {
  description:
    'The security definitions for this API. Please check individual operations for applicable scopes.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://auth.ebay.com/oauth2/authorize',
      scopes: {
        'https://api.ebay.com/oauth/api_scope/sell.inventory':
          'View and manage your inventory and offers',
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

export const getCountryCountryCodeSalesTaxJurisdictionRoute = createRoute({
  method: 'get',
  path: '/country/{countryCode}/sales_tax_jurisdiction',
  tags: ['country'],
  description:
    'This method retrieves all the sales tax jurisdictions for the country that you specify in the <b>countryCode</b> path parameter. Countries with valid sales tax jurisdictions are Canada and the US.  <br/><br/>The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the <b>createOrReplaceSalesTax</b> in the <b>Account API</b> call to configure the tax tables for the jurisdictions you sell to.',
  operationId: 'getSalesTaxJurisdictions',
  request: {
    params: z.object({
      countryCode: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> country code for the country whose jurisdictions you want to retrieve. eBay provides sales tax jurisdiction information for Canada and the United States.Valid values for this path parameter are <code>CA</code> and <code>US</code>.',
            in: 'path',
            name: 'countryCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SalesTaxJurisdictionsSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})

export const getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesRoute = createRoute({
  method: 'get',
  path: '/marketplace/{marketplace_id}/get_automotive_parts_compatibility_policies',
  tags: ['marketplace'],
  description:
    'This method returns the eBay policies that define how to list automotive-parts-compatibility items in the categories of a specific marketplace.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>',
  operationId: 'getAutomotivePartsCompatibilityPolicies',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100|101|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>",
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      marketplace_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the eBay marketplace for which policy information is retrieved.  <br><br><b>Note:</b> Only the following eBay marketplaces support automotive parts compatibility: <ul> <li>EBAY_US</li> <li>EBAY_AU</li> <li>EBAY_CA</li> <li>EBAY_DE</li> <li>EBAY_ES</li> <li>EBAY_FR</li> <li>EBAY_GB</li> <li>EBAY_IT</li><ul>',
            in: 'path',
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
      content: { 'application/json': { schema: AutomotivePartsCompatibilityPolicyResponseSchema } },
    },
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})

export const getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesRoute =
  createRoute({
    method: 'get',
    path: '/marketplace/{marketplace_id}/get_extended_producer_responsibility_policies',
    tags: ['marketplace'],
    description:
      'This method returns the Extended Producer Responsibility policies for one, multiple, or all eBay categories in an eBay marketplace.<br /><br />The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the filter query parameter, this method will return metadata on every applicable category for the specified marketplace.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Currently, the Extended Producer Responsibility policies are only applicable to a limited number of categories, and only in the EBAY_FR marketplace.</span><br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>',
    operationId: 'getExtendedProducerResponsibilityPolicies',
    request: {
      query: z.object({
        filter: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "A query parameter that can be used to limit the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree that should be returned.<br /><br />When a <b>categoryId</b> value is specified, the returned category tree includes the policies for that parent node, as well as the policies for any child nodes below that parent node.<br /><br />Pass in the <b>categoryId</b> values using a URL-encoded, pipe-separated ('|') list. For example:<br /><br /><code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code><br /><br /><b>Maximum:</b> 50",
              in: 'query',
              name: 'filter',
              required: false,
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        marketplace_id: z
          .string()
          .openapi({
            param: {
              description:
                'A path parameter that specifies the eBay marketplace for which policy information shall be retrieved.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> See <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a> for a list of valid eBay marketplace IDs.</span>',
              in: 'path',
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
        content: {
          'application/json': { schema: ExtendedProducerResponsibilityPolicyResponseSchema },
        },
      },
      204: { description: 'No content' },
      400: { description: 'Bad Request' },
      404: { description: 'Not found' },
      500: { description: 'Internal Server Error' },
    },
    security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
  })

export const getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsRoute = createRoute({
  method: 'get',
  path: '/marketplace/{marketplace_id}/get_hazardous_materials_labels',
  tags: ['marketplace'],
  description:
    "This method returns hazardous materials label information for the specified eBay marketplace. The information includes IDs, descriptions, and URLs (as applicable) for the available signal words, statements, and pictograms. The returned statements are localized for the default langauge of the marketplace. If a marketplace does not support hazardous materials label information, an error is returned.<p>This information is used by the seller to add hazardous materials label related information to their listings (see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html'>Specifying hazardous material related information</a>).</p>",
  operationId: 'getHazardousMaterialsLabels',
  request: {
    params: z.object({
      marketplace_id: z
        .string()
        .openapi({
          param: {
            description:
              'A path parameter that specifies the eBay marketplace for which hazardous materials label information shall be retrieved.<p><span class="tablenote"><strong>Tip:</strong> See <a href="/api-docs/static/rest-request-components.html#marketpl" >Request components</a> for a list of valid eBay marketplace IDs.</span></p>',
            in: 'path',
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
      content: { 'application/json': { schema: HazardousMaterialDetailsResponseSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})

export const getMarketplaceMarketplaceIdGetItemConditionPoliciesRoute = createRoute({
  method: 'get',
  path: '/marketplace/{marketplace_id}/get_item_condition_policies',
  tags: ['marketplace'],
  description:
    'This method returns item condition metadata on one, multiple, or all eBay categories on an eBay marketplace. This metadata consists of the different item conditions (with IDs) that an eBay category supports, and a boolean to indicate if an eBay category requires an item condition. <br><br>The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the <b>filter</b> query parameter, this method will return metadata on every single category for the specified marketplace. If you only want to view item condition metadata for one eBay category or a select group of eBay categories, you can pass in up to 50 eBay category ID through the <b>filter</b> query parameter.<br /><br /><span class="tablenote"><span style="color:#FF0000"><strong>Important:</strong></span> <b>Certified - Refurbished</b>-eligible sellers, and sellers who are eligible to list with the new values (EXCELLENT_REFURBISHED, VERY_GOOD_REFURBISHED, and GOOD_REFURBISHED) must use an OAuth token created with the <a href="/api-docs/static/oauth-authorization-code-grant.html" target="_blank">authorization code grant flow</a> and <b>https://api.ebay.com/oauth/api_scope/sell.inventory</b> scope in order to retrieve the refurbished conditions for the relevant categories.<br/><br/>See the <a href="/api-docs/sell/static/metadata/condition-id-values.html#Category " target="_blank">eBay Refurbished Program - Category and marketplace support</a> topic for the categories and marketplaces that support these refurbished conditions<br/><br/>These restricted item conditions will not be returned if an OAuth token created with the <a href="/api-docs/static/oauth-client-credentials-grant.html" target="_blank">client credentials grant flow</a> and <b>https://api.ebay.com/oauth/api_scope</b> scope is used, or if any seller is not eligible to list with that item condition. <br/><br/> See the <a href="/api-docs/static/oauth-scopes.html" target="_blank">Specifying OAuth scopes</a> topic for more information about specifying scopes.</span><br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>',
  operationId: 'getItemConditionPolicies',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100|101|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>",
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      marketplace_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a>.',
            in: 'path',
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
      content: { 'application/json': { schema: ItemConditionPolicyResponseSchema } },
    },
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope',
        'https://api.ebay.com/oauth/api_scope/sell.inventory',
      ],
    },
  ],
})

export const getMarketplaceMarketplaceIdGetListingStructurePoliciesRoute = createRoute({
  method: 'get',
  path: '/marketplace/{marketplace_id}/get_listing_structure_policies',
  tags: ['marketplace'],
  description:
    'This method returns the eBay policies that define the allowed listing structures for the categories of a specific marketplace. The listing-structure policies currently pertain to whether or not you can list items with variations.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>',
  operationId: 'getListingStructurePolicies',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100|101|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>",
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      marketplace_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a>.',
            in: 'path',
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
      content: { 'application/json': { schema: ListingStructurePolicyResponseSchema } },
    },
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})

export const getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesRoute = createRoute({
  method: 'get',
  path: '/marketplace/{marketplace_id}/get_negotiated_price_policies',
  tags: ['marketplace'],
  description:
    'This method returns the eBay policies that define the supported negotiated price features (like "best offer") for the categories of a specific marketplace.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>',
  operationId: 'getNegotiatedPricePolicies',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100|101|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>",
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      marketplace_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a>.',
            in: 'path',
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
      content: { 'application/json': { schema: NegotiatedPricePolicyResponseSchema } },
    },
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})

export const getMarketplaceMarketplaceIdGetReturnPoliciesRoute = createRoute({
  method: 'get',
  path: '/marketplace/{marketplace_id}/get_return_policies',
  tags: ['marketplace'],
  description:
    'This method returns the eBay policies that define whether or not you must include a return policy for the items you list in the categories of a specific marketplace, plus the guidelines for creating domestic and international return policies in the different eBay categories.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>',
  operationId: 'getReturnPolicies',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100|101|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>",
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      marketplace_id: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a>.',
            in: 'path',
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
      content: { 'application/json': { schema: ReturnPolicyResponseSchema } },
    },
    204: { description: 'No content' },
    400: { description: 'Bad Request' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})
