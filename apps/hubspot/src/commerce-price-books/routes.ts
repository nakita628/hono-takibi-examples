import { createRoute, z } from '@hono/zod-openapi'

const PriceBookAddProductRequestSchema = z
  .object({
    productId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the product to be added to the price book. It is a string and is required.',
        example: null,
      }),
  })
  .openapi({ required: ['productId'], example: null })
  .openapi('PriceBookAddProductRequest')

const BatchInputPriceBookAddProductRequestSchema = z
  .object({
    inputs: z
      .array(PriceBookAddProductRequestSchema)
      .openapi({
        description:
          'An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPriceBookAddProductRequest')

const PriceUpdateEntrySchema = z
  .object({
    currencyCode: z
      .string()
      .openapi({
        description: 'The currency code for the price, represented as a string.',
        example: null,
      }),
    maxQuantity: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The maximum quantity applicable for this price, represented as a string.',
        example: null,
      }),
    price: z
      .object({})
      .openapi({
        description:
          'An object representing the price details for the entry. The specific structure of this object is not detailed in the specification.',
        example: null,
      }),
  })
  .openapi({ required: ['currencyCode', 'price'], example: null })
  .openapi('PriceUpdateEntry')

const PricingUpdateRequestSchema = z
  .object({
    prices: z
      .array(PriceUpdateEntrySchema)
      .openapi({
        description:
          'An array of PriceUpdateEntry objects, each representing the pricing details for a product, including the currency code and amount.',
        example: null,
      }),
  })
  .openapi({ required: ['prices'], example: null })
  .openapi('PricingUpdateRequest')

const PriceBookItemUpdateRequestSchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the price book item is archived.',
        example: null,
      }),
    billingFrequency: z
      .object({})
      .openapi({
        description:
          'An object specifying the frequency at which billing occurs for the price book item.',
        example: null,
      }),
    billingPeriod: z
      .object({})
      .openapi({
        description:
          'An object specifying the period over which billing occurs for the price book item.',
        example: null,
      }),
    customProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of custom property names to their values, allowing for additional customization of the price book item.',
        example: null,
      }),
    pricing: PricingUpdateRequestSchema.exactOptional(),
    status: z
      .object({})
      .openapi({
        description: 'An object indicating the current status of the price book item.',
        example: null,
      }),
  })
  .openapi({
    required: ['billingFrequency', 'billingPeriod', 'customProperties', 'status'],
    example: null,
  })
  .openapi('PriceBookItemUpdateRequest')

const PriceBookItemBatchUpdateInputSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the price book item to be updated. It is a string.',
        example: null,
      }),
    properties: PriceBookItemUpdateRequestSchema,
  })
  .openapi({ required: ['id', 'properties'], example: null })
  .openapi('PriceBookItemBatchUpdateInput')

const BatchInputPriceBookItemBatchUpdateInputSchema = z
  .object({
    inputs: z
      .array(PriceBookItemBatchUpdateInputSchema)
      .openapi({
        description:
          'An array of objects, each representing a price book item to be updated. Each object must conform to the PriceBookItemBatchUpdateInput schema.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPriceBookItemBatchUpdateInput')

const SimplePublicObjectIdSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this object, represented as a string.',
        example: '430001',
      }),
  })
  .openapi({ required: ['id'], description: 'Contains the Id of a Public Object', example: null })
  .openapi('SimplePublicObjectId')

const BatchInputSimplePublicObjectIdSchema = z
  .object({
    inputs: z
      .array(SimplePublicObjectIdSchema)
      .openapi({
        description:
          'An array of SimplePublicObjectId objects, each representing a unique identifier for a public object. This property is required and is used to specify the objects involved in the batch operation.',
        example: null,
      }),
  })
  .openapi({
    required: ['inputs'],
    description:
      'Represents a batch input payload containing a list of simple public object IDs. This component is used when performing batch operations on multiple objects within HubSpot.',
    example: null,
  })
  .openapi('BatchInputSimplePublicObjectId')

const PriceEntrySchema = z
  .object({
    currencyCode: z
      .string()
      .openapi({
        description: 'A string representing the currency in which the price is denominated.',
        example: null,
      }),
    maxQuantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A string specifying the maximum quantity for which this pricing entry is applicable.',
        example: null,
      }),
    price: z
      .number()
      .openapi({
        description: 'A number indicating the price of the product or service.',
        example: null,
      }),
  })
  .openapi({ required: ['currencyCode', 'price'], example: null })
  .openapi('PriceEntry')

const PricingSchema = z
  .object({
    prices: z
      .array(PriceEntrySchema)
      .openapi({
        description:
          'An array of price entries, each detailing the amount and currency for a specific pricing tier.',
        example: null,
      }),
    pricingModel: z
      .enum(['FLAT', 'GRADUATED', 'STAIRSTEP', 'VOLUME'])
      .openapi({
        description:
          "The type of pricing model applied, which can be one of the following: 'FLAT', 'GRADUATED', 'STAIRSTEP', or 'VOLUME'.",
        example: null,
      }),
  })
  .openapi({ required: ['prices', 'pricingModel'], example: null })
  .openapi('Pricing')

const PriceBookItemResponseSchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the price book item is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the price book item was archived, in ISO 8601 format.',
        example: null,
      }),
    billingFrequency: z
      .enum([
        'ANNUALLY',
        'BIWEEKLY',
        'MONTHLY',
        'PER_FIVE_YEARS',
        'PER_FOUR_YEARS',
        'PER_SIX_MONTHS',
        'PER_THREE_YEARS',
        'PER_TWO_YEARS',
        'QUARTERLY',
        'WEEKLY',
      ])
      .exactOptional()
      .openapi({
        description:
          "The frequency at which billing occurs for the price book item. Valid values include 'annually', 'biweekly', 'monthly', 'one_time', 'per_five_years', 'per_four_years', 'per_six_months', 'per_three_years', 'per_two_years', 'quarterly', and 'weekly'.",
        example: null,
      }),
    billingPeriod: z
      .string()
      .exactOptional()
      .openapi({ description: 'The billing period for the price book item.', example: null }),
    costOfGoodsSold: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cost of goods sold for the price book item.', example: null }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the price book item was created, in ISO 8601 format.',
        example: null,
      }),
    customProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'A map of custom property names to their values for the price book item.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the price book item.', example: null }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the price book item.', example: null }),
    images: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing images associated with the price book item.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the price book item.', example: null }),
    priceBookId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the price book containing this item.',
        example: null,
      }),
    pricing: PricingSchema.exactOptional(),
    productClassification: z
      .enum(['BUNDLE', 'STANDALONE', 'VARIANT'])
      .exactOptional()
      .openapi({
        description:
          "The classification of the product. Valid values include 'BUNDLE', 'STANDALONE', and 'VARIANT'.",
        example: null,
      }),
    productId: z
      .string()
      .openapi({
        description: 'The unique identifier for the product associated with the price book item.',
        example: null,
      }),
    productType: z
      .enum(['INVENTORY', 'NON_INVENTORY', 'SERVICE'])
      .exactOptional()
      .openapi({
        description:
          "The type of product. Valid values include 'INVENTORY', 'NON_INVENTORY', and 'SERVICE'.",
        example: null,
      }),
    recurringBillingTerms: z
      .enum(['AUTOMATICALLY_RENEW', 'FIXED'])
      .exactOptional()
      .openapi({
        description:
          "The terms of recurring billing for the price book item. Valid values include 'AUTOMATICALLY_RENEW' and 'FIXED'.",
        example: null,
      }),
    sku: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The stock keeping unit (SKU) of the price book item.',
        example: null,
      }),
    status: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description:
          "The current status of the price book item. Valid values include 'active' and 'inactive'.",
        example: null,
      }),
    taxCategory: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tax category of the price book item.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the price book item was last updated, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL associated with the price book item.', example: null }),
  })
  .openapi({ required: ['customProperties', 'id', 'productId'], example: null })
  .openapi('PriceBookItemResponse')

const BatchResponsePriceBookItemResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs providing additional information or actions related to the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch operation was requested, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(PriceBookItemResponseSchema)
      .openapi({
        description:
          'An array of PriceBookItemResponse objects representing the individual results of the batch operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch operation started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePriceBookItemResponse')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, which may include additional information such as missing scopes or invalid property names.',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. This is a required property.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error.',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const StandardErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'A string specifying the category of the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error, with each key mapping to an array of strings.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects providing further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique identifier of the error.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to URIs that provide documentation or remediation steps related to the error.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string containing a human-readable message that describes the error.',
        example: null,
      }),
    status: z
      .string()
      .openapi({ description: 'A string indicating the status of the error.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object providing more specific details about the error category.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const BatchResponsePriceBookItemResponseWithErrorsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of errors encountered during the batch operation, each represented as a StandardError object.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing additional context or actions related to the batch operation.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch operation was requested, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(PriceBookItemResponseSchema)
      .openapi({
        description:
          'An array of results from the batch operation, each represented as a PriceBookItemResponse object.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch operation started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePriceBookItemResponseWithErrors')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token used as a cursor for pagination to retrieve the next set of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides a direct link to the next page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({
    description:
      'Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.',
    example: null,
    required: [],
  })
  .openapi('ForwardPaging')

const CollectionResponsePriceBookItemResponseForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PriceBookItemResponseSchema)
      .openapi({
        description:
          'An array of price book items, each represented by a PriceBookItemResponse object.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePriceBookItemResponseForwardPaging')

const PriceBookResponseSchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether this price book is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this price book was archived.',
        example: null,
      }),
    autoAssignmentEnabled: z
      .boolean()
      .openapi({
        description:
          'Indicates whether auto-assignment is enabled for the price book. A boolean value.',
        example: null,
      }),
    countOfIncludedProducts: z
      .int32()
      .openapi({
        description: 'The number of products included in this price book.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this price book was created.',
        example: null,
      }),
    customProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'A map of custom property names to their values for this price book.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the price book.', example: null }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this price book.', example: null }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the price book.', example: null }),
    status: z
      .enum(['ACTIVE', 'INACTIVE'])
      .openapi({
        description:
          "The current status of the price book. Valid values include 'ACTIVE' and 'INACTIVE'.",
        example: null,
      }),
    supportedCurrencies: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of currency codes that this price book supports.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this price book was last updated.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'autoAssignmentEnabled',
      'countOfIncludedProducts',
      'customProperties',
      'id',
      'status',
      'supportedCurrencies',
    ],
    example: null,
  })
  .openapi('PriceBookResponse')

const CollectionResponsePriceBookResponseForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PriceBookResponseSchema)
      .openapi({
        description:
          'An array of price book objects, each represented by the PriceBookResponse schema.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePriceBookResponseForwardPaging')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'The error category, represented as a string.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object providing context about the error condition. It contains additional properties, each being an array of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request, represented as a UUID string. Include this value with any error reports or support tickets.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array providing further information about the error, with each item being an ErrorDetail object.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object that maps link names to associated URIs containing documentation about the error or recommended remediation steps. Each property is a string.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. It is a string.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error, represented as a string.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const PriceBookCreateRequestSchema = z
  .object({
    customProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing custom properties for the price book. Each property is a key-value pair where the key is a string and the value is also a string. This is a required property.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the price book. This is an optional string property.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the price book. It is a required string property.',
        example: null,
      }),
    supportedCurrencies: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the currencies supported by the price book. This is a required property.',
        example: null,
      }),
  })
  .openapi({ required: ['customProperties', 'name', 'supportedCurrencies'], example: null })
  .openapi('PriceBookCreateRequest')

const PriceBookUpdateRequestSchema = z
  .object({
    customProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing custom properties for the price book, where each key is a property name and the value is a string.',
        example: null,
      }),
    description: z
      .object({})
      .openapi({
        description: 'An object representing the description of the price book to be updated.',
        example: null,
      }),
    name: z
      .object({})
      .openapi({
        description: 'An object representing the name of the price book to be updated.',
        example: null,
      }),
    supportedCurrencies: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of strings representing the currencies supported by the price book.',
        example: null,
      }),
  })
  .openapi({ required: ['customProperties', 'description', 'name'], example: null })
  .openapi('PriceBookUpdateRequest')

const PriceBookValidateResponseSchema = z
  .object({
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects providing information about any errors encountered during validation.',
        example: null,
      }),
    isValid: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the price book is valid.',
        example: null,
      }),
  })
  .openapi({ required: ['errors', 'isValid'], example: null })
  .openapi('PriceBookValidateResponse')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: { 'crm.objects.products.read': '', 'e-commerce': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCommercePriceBooks202609PriceBooksRoute = createRoute({
  method: 'get',
  path: '/commerce/price-books/2026-09/price-books',
  tags: ['Advanced'],
  summary: 'Retrieve price books',
  description:
    'Retrieve a list of price books available in your HubSpot account. This endpoint supports pagination and can return archived price books if specified. It is useful for accessing and managing pricing information across different products and services.',
  operationId:
    'get-/commerce/price-books/2026-09/price-books_/commerce/price-books/2026-09-beta/price-books',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePriceBookResponseForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postCommercePriceBooks202609PriceBooksRoute = createRoute({
  method: 'post',
  path: '/commerce/price-books/2026-09/price-books',
  tags: ['Basic'],
  summary: 'Create price book',
  description:
    'Create a new price book in your HubSpot account. This endpoint allows you to define custom properties, a name, and supported currencies for the price book. A successful request will return the URL of the newly created resource.',
  operationId: 'post-/commerce/price-books/2026-09/price-books',
  request: {
    body: {
      content: { 'application/json': { schema: PriceBookCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PriceBookResponseSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getCommercePriceBooks202609PriceBooksPriceBookIdRoute = createRoute({
  method: 'get',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}',
  tags: ['Basic'],
  summary: 'Retrieve price book',
  description:
    'Retrieve a specific price book by its unique identifier in your HubSpot account. This endpoint allows you to access detailed information about a price book, including its status and supported currencies. It can be useful for managing and reviewing pricing strategies within your commerce system.',
  operationId: 'get-/commerce/price-books/2026-09/price-books/{priceBookId}',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description: 'The unique identifier of the price book to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PriceBookResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const deleteCommercePriceBooks202609PriceBooksPriceBookIdRoute = createRoute({
  method: 'delete',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}',
  tags: ['Basic'],
  summary: 'Delete price book',
  description:
    'Delete a specific price book from your HubSpot account using its unique identifier. This operation will permanently remove the price book and its associated data, making it unavailable for future use.',
  operationId: 'delete-/commerce/price-books/2026-09/price-books/{priceBookId}',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description: 'The unique identifier of the price book to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [],
})

export const patchCommercePriceBooks202609PriceBooksPriceBookIdRoute = createRoute({
  method: 'patch',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}',
  tags: ['Basic'],
  summary: 'Update price book',
  description:
    'Update an existing price book in your HubSpot account. This operation allows you to modify details such as the name, description, supported currencies, and custom properties of a price book. It is useful for keeping your price book information up to date with the latest changes.',
  operationId: 'patch-/commerce/price-books/2026-09/price-books/{priceBookId}',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description: 'The unique identifier of the price book to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PriceBookUpdateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PriceBookResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postCommercePriceBooks202609PriceBooksPriceBookIdActivateRoute = createRoute({
  method: 'post',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}/activate',
  tags: ['Basic'],
  summary: 'Activate price book',
  description:
    'Activate a specific price book in your HubSpot account. This operation changes the status of the price book to active, allowing it to be used in transactions and other operations. Ensure that the price book ID is correct before activation.',
  operationId: 'post-/commerce/price-books/2026-09/price-books/{priceBookId}/activate',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description: 'The unique identifier of the price book to activate.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PriceBookResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postCommercePriceBooks202609PriceBooksPriceBookIdDeactivateRoute = createRoute({
  method: 'post',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate',
  tags: ['Basic'],
  summary: 'Deactivate price book',
  description:
    'Deactivate a specific price book in your HubSpot account. This action changes the status of the price book to inactive, making it unavailable for use in transactions. Use this endpoint when you need to temporarily or permanently disable a price book without deleting it.',
  operationId: 'post-/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description: 'The unique identifier of the price book to deactivate.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PriceBookResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute = createRoute({
  method: 'get',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}/items',
  tags: ['Items'],
  summary: 'List price book items',
  description:
    'Retrieve a list of items associated with a specific price book in your HubSpot account. This endpoint allows you to paginate through the items and specify which properties to include in the response. It is useful for managing and viewing the details of products linked to a particular price book.',
  operationId:
    'get-/commerce/price-books/2026-09/price-books/{priceBookId}/items_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description: 'The unique identifier of the price book to retrieve items for.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      properties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description: 'A list of property names to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePriceBookItemResponseForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute = createRoute({
  method: 'post',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}/items',
  tags: ['Items'],
  summary: 'Add price book items',
  description:
    'Add new items to a specified price book in your HubSpot account. This endpoint allows you to associate products with a price book by providing the necessary product details. It is useful for managing and updating the contents of your price books efficiently.',
  operationId:
    'post-/commerce/price-books/2026-09/price-books/{priceBookId}/items_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description: 'The unique identifier of the price book to which items will be added.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PriceBookAddProductRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PriceBookItemResponseSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveRoute = createRoute({
  method: 'post',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive',
  tags: ['Batch'],
  summary: 'Batch archive price book items',
  description:
    'Archive multiple items within a specified price book in a single batch operation. This endpoint is useful for managing large sets of price book items that need to be archived simultaneously, streamlining the process and reducing the number of individual requests.',
  operationId:
    'post-/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items/batch/archive',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description:
              'The unique identifier of the price book containing the items to be archived.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BatchInputSimplePublicObjectIdSchema, example: null },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [],
})

export const postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateRoute = createRoute({
  method: 'post',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create',
  tags: ['Batch'],
  summary: 'Batch create price book items',
  description:
    'Create multiple items in a specified price book in a single batch operation. This endpoint is useful for efficiently adding a large number of items to a price book, reducing the need for multiple individual requests. The operation returns a batch response indicating the success or failure of each item creation.',
  operationId:
    'post-/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items/batch/create',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description:
              'The unique identifier of the price book to which the items will be added.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BatchInputPriceBookAddProductRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponsePriceBookItemResponseSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponsePriceBookItemResponseWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update',
  tags: ['Batch'],
  summary: 'Batch update price book items',
  description:
    'Update multiple items in a specified price book in a single batch operation. This endpoint allows for efficient updates of price book items, making it useful for managing large sets of data within a price book. The operation returns a batch response indicating the success or failure of each item update.',
  operationId:
    'post-/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items/batch/update',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description: 'The unique identifier of the price book containing the items to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BatchInputPriceBookItemBatchUpdateInputSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponsePriceBookItemResponseSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponsePriceBookItemResponseWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute =
  createRoute({
    method: 'get',
    path: '/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}',
    tags: ['Items'],
    summary: 'Retrieve price book item',
    description:
      'Retrieve a specific item from a price book using its unique identifiers. This endpoint allows you to access detailed information about a particular item within a specified price book, including its properties and archived status if applicable.',
    operationId:
      'get-/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items/{priceBookItemId}',
    request: {
      params: z.object({
        priceBookId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'priceBookId',
              in: 'path',
              description: 'The unique identifier of the price book containing the item.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
        priceBookItemId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'priceBookItemId',
              in: 'path',
              description: 'The unique identifier of the item within the price book.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        archived: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'archived',
              in: 'query',
              description: 'Whether to return only results that have been archived.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'boolean', example: null },
            },
            example: null,
          }),
        properties: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string().openapi({ example: null })),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'properties',
              in: 'query',
              description: 'A list of property names to include in the response.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'array', example: null, items: { type: 'string', example: null } },
            },
            example: null,
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: PriceBookItemResponseSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [],
  })

export const deleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute =
  createRoute({
    method: 'delete',
    path: '/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}',
    tags: ['Items'],
    summary: 'Delete price book item',
    description:
      'Remove a specific item from a price book in your HubSpot account. This operation is irreversible and will permanently delete the item identified by the given priceBookItemId from the price book specified by priceBookId.',
    operationId:
      'delete-/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}',
    request: {
      params: z.object({
        priceBookId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'priceBookId',
              in: 'path',
              description:
                'The unique identifier of the price book from which the item will be deleted.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
        priceBookItemId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'priceBookItemId',
              in: 'path',
              description: 'The unique identifier of the item to be deleted from the price book.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
      }),
    },
    responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
    security: [],
  })

export const patchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute =
  createRoute({
    method: 'patch',
    path: '/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}',
    tags: ['Items'],
    summary: 'Update price book item',
    description:
      'Update a specific item within a price book in your HubSpot account. This operation allows you to modify details such as pricing, billing frequency, and custom properties for the specified item. Ensure that the item is identified correctly by its unique priceBookId and priceBookItemId.',
    operationId:
      'patch-/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}',
    request: {
      params: z.object({
        priceBookId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'priceBookId',
              in: 'path',
              description: 'The unique identifier of the price book containing the item to update.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
        priceBookItemId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'priceBookItemId',
              in: 'path',
              description: 'The unique identifier of the item within the price book to update.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        archived: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'archived',
              in: 'query',
              description: 'Whether to return only results that have been archived.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'boolean', example: null },
            },
            example: null,
          }),
      }),
      body: {
        content: {
          'application/json': { schema: PriceBookItemUpdateRequestSchema, example: null },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: PriceBookItemResponseSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [],
  })

export const postCommercePriceBooks202609PriceBooksPriceBookIdValidateRoute = createRoute({
  method: 'post',
  path: '/commerce/price-books/2026-09/price-books/{priceBookId}/validate',
  tags: ['Basic'],
  summary: 'Validate price book',
  description:
    'Validate a specific price book in your HubSpot account. This endpoint checks the integrity and correctness of the price book identified by the given priceBookId. Use this to ensure that the price book meets all necessary criteria before proceeding with further operations.',
  operationId: 'post-/commerce/price-books/2026-09/price-books/{priceBookId}/validate',
  request: {
    params: z.object({
      priceBookId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'priceBookId',
            in: 'path',
            description: 'The unique identifier of the price book to validate.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PriceBookValidateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})
