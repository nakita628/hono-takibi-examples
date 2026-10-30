import { createRoute, z } from '@hono/zod-openapi'

const PublicCampaignBatchUpdateItemSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the campaign to be updated. It is a string.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs of the campaign properties to be updated. Each key is a property name, and each value is the new value for that property, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'properties'], example: null })
  .openapi('PublicCampaignBatchUpdateItem')

const BatchInputPublicCampaignBatchUpdateItemSchema = z
  .object({
    inputs: z
      .array(PublicCampaignBatchUpdateItemSchema)
      .openapi({
        description:
          'An array of PublicCampaignBatchUpdateItem objects, each containing the details required to update a specific campaign.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPublicCampaignBatchUpdateItem')

const PublicCampaignDeleteInputSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the campaign to be deleted. It is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('PublicCampaignDeleteInput')

const BatchInputPublicCampaignDeleteInputSchema = z
  .object({
    inputs: z
      .array(PublicCampaignDeleteInputSchema)
      .openapi({
        description:
          "An array of PublicCampaignDeleteInput objects, each representing a campaign to be deleted. Each object must include the campaign's unique identifier.",
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPublicCampaignDeleteInput')

const PublicCampaignInputSchema = z
  .object({
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          "An object containing key-value pairs where each key is a property name and each value is a string representing the property's value. This object holds the various attributes of the campaign.",
        example: null,
      }),
  })
  .openapi({ required: ['properties'], example: null })
  .openapi('PublicCampaignInput')

const BatchInputPublicCampaignInputSchema = z
  .object({
    inputs: z
      .array(PublicCampaignInputSchema)
      .openapi({
        description:
          'An array of PublicCampaignInput objects, each representing the properties of a campaign to be created. This is a required field.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPublicCampaignInput')

const PublicCampaignReadInputSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier for the campaign. It is a string and is required to retrieve the campaign details.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('PublicCampaignReadInput')

const BatchInputPublicCampaignReadInputSchema = z
  .object({
    inputs: z
      .array(PublicCampaignReadInputSchema)
      .openapi({
        description:
          'An array of PublicCampaignReadInput objects, each containing the ID of a campaign to be read. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPublicCampaignReadInput')

const PublicBusinessUnitSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The unique identifier for the business unit, represented as a 64-bit integer.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('PublicBusinessUnit')

const PublicCampaignSchema = z
  .object({
    businessUnits: z
      .array(PublicBusinessUnitSchema)
      .openapi({
        description:
          'An array of business units associated with the campaign, where each business unit is represented by its unique identifier.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the campaign was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the campaign.', example: null }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of custom property names to their values, representing specific attributes of the campaign.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the campaign was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: ['businessUnits', 'createdAt', 'id', 'properties', 'updatedAt'],
    example: null,
  })
  .openapi('PublicCampaign')

const BatchResponsePublicCampaignSchema = z
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
          'A map of link names to associated URIs that provide additional information related to the batch operation.',
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
      .array(PublicCampaignSchema)
      .openapi({
        description:
          'An array of public campaign objects that represent the results of the batch operation.',
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
  .openapi('BatchResponsePublicCampaign')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token that serves as the paging cursor, indicating the position after the last successfully read resource.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides a link to the next page of results.',
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

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description:
          'A string token used to identify the position before the current page in the paginated results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL string that provides a link to the previous page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const PublicCampaignAssetSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the campaign asset, represented as a string.',
        example: null,
      }),
    metrics: z
      .record(z.string(), z.number().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A collection of performance metrics for the campaign asset, represented as a map where each key is a metric name and each value is a number.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the campaign asset, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('PublicCampaignAsset')

const CollectionResponsePublicCampaignAssetSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicCampaignAssetSchema)
      .openapi({
        description:
          'An array of PublicCampaignAsset objects, each representing an individual campaign asset.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicCampaignAsset')

const PublicCampaignWithAssetsSchema = z
  .object({
    assets: z
      .record(z.string(), CollectionResponsePublicCampaignAssetSchema)
      .openapi({
        description:
          'A map of asset types to their respective collections of campaign assets, represented by CollectionResponsePublicCampaignAsset objects.',
        example: null,
      }),
    businessUnits: z
      .array(PublicBusinessUnitSchema)
      .openapi({
        description:
          'An array of business units associated with the campaign, each represented by a PublicBusinessUnit object.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the campaign was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the campaign, represented as a string.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of custom property names to their values, where each value is a string.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the campaign was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: ['assets', 'businessUnits', 'createdAt', 'id', 'properties', 'updatedAt'],
    example: null,
  })
  .openapi('PublicCampaignWithAssets')

const BatchResponsePublicCampaignWithAssetsSchema = z
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
          'A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.',
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
      .array(PublicCampaignWithAssetsSchema)
      .openapi({
        description:
          'An array of PublicCampaignWithAssets objects, representing the campaigns involved in the batch operation.',
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
  .openapi('BatchResponsePublicCampaignWithAssets')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status code associated with the error detail. This is a string.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, provided as an object where each key is a context name and the value is an array of strings providing additional information.',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the field or parameter in which the error was found. This is a string.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. This is a string.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error. This is a string.',
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
      .openapi({ description: 'A string categorizing the type of error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error, with keys as context names and values as arrays of strings.',
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
        description: 'A string representing a unique identifier for the error.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to associated URIs that contain documentation or remediation steps related to the error.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string containing a human-readable message describing the error.',
        example: null,
      }),
    status: z
      .string()
      .openapi({ description: 'A string indicating the status of the error.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object providing more specific categorization of the error.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const BatchResponsePublicCampaignWithAssetsWithErrorsSchema = z
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
          'An array of errors that occurred during the batch operation, each described by a standard error object.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs that provide additional information about the batch operation.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors that occurred during the batch operation.',
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
      .array(PublicCampaignWithAssetsSchema)
      .openapi({
        description:
          'An array of campaigns with their associated assets that were processed in the batch operation.',
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
  .openapi('BatchResponsePublicCampaignWithAssetsWithErrors')

const BatchResponsePublicCampaignWithErrorsSchema = z
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
          'An array of standard error objects detailing any errors that occurred during the batch operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing additional information or actions related to the batch operation.',
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
      .array(PublicCampaignSchema)
      .openapi({
        description:
          'An array of public campaign objects representing the results of the batch operation.',
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
  .openapi('BatchResponsePublicCampaignWithErrors')

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({
    description:
      'Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.',
    example: null,
    required: [],
  })
  .openapi('ForwardPaging')

const ContactReferenceSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the contact reference, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('ContactReference')

const CollectionResponseContactReferenceForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(ContactReferenceSchema)
      .openapi({
        description:
          'An array of contact references, each representing a contact associated with the campaign. Each item in the array is a ContactReference object.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseContactReferenceForwardPaging')

const CollectionResponsePublicCampaignAssetForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicCampaignAssetSchema)
      .openapi({
        description: 'An array of PublicCampaignAsset objects, each representing a campaign asset.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicCampaignAssetForwardPaging')

const CollectionResponseStringNoPagingSchema = z
  .object({
    results: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the collection of results returned by the API. Each item in the array is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseStringNoPaging')

const CollectionResponseWithTotalPublicCampaignSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicCampaignSchema)
      .openapi({
        description:
          'An array of PublicCampaign objects, each representing a campaign with its associated details.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'An integer representing the total number of campaigns available.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicCampaign')

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
          'An object providing context about the error condition, where each key is a string and each value is an array of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request, formatted as a UUID. This should be included with any error reports or support tickets.',
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
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps, represented as an object with string values.',
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

const MetricsCountersSchema = z
  .object({
    influencedContacts: z
      .int32()
      .openapi({
        description:
          'The number of contacts that were influenced by the campaign. This is an integer value.',
        example: null,
      }),
    newContactsFirstTouch: z
      .int32()
      .openapi({
        description:
          'The number of new contacts that had their first interaction with the campaign. This is an integer value.',
        example: null,
      }),
    newContactsLastTouch: z
      .int32()
      .openapi({
        description:
          'The number of new contacts that had their last interaction with the campaign. This is an integer value.',
        example: null,
      }),
    sessions: z
      .int32()
      .openapi({
        description:
          'The number of sessions associated with the campaign. This is an integer value.',
        example: null,
      }),
  })
  .openapi({
    required: ['influencedContacts', 'newContactsFirstTouch', 'newContactsLastTouch', 'sessions'],
    example: null,
  })
  .openapi('MetricsCounters')

const PublicBudgetItemSchema = z
  .object({
    amount: z
      .number()
      .openapi({
        description: 'The financial amount allocated to this budget item, represented as a number.',
        example: null,
      }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'A Unix timestamp in milliseconds indicating when this budget item was created.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the budget item, represented as a string.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this budget item, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the budget item, represented as a string.',
        example: null,
      }),
    order: z
      .int32()
      .openapi({
        description:
          'An integer representing the order or sequence of this budget item within the campaign.',
        example: null,
      }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'A Unix timestamp in milliseconds indicating when this budget item was last updated.',
        example: null,
      }),
  })
  .openapi({ required: ['amount', 'createdAt', 'id', 'name', 'order', 'updatedAt'], example: null })
  .openapi('PublicBudgetItem')

const PublicBudgetItemInputSchema = z
  .object({
    amount: z
      .number()
      .openapi({
        description: 'The monetary value of the budget item, represented as a number.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing additional details about the budget item.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the budget item. It is a string that identifies the budget item.',
        example: null,
      }),
    order: z
      .int32()
      .openapi({
        description: 'An integer indicating the order or sequence of the budget item.',
        example: null,
      }),
  })
  .openapi({ required: ['amount', 'name', 'order'], example: null })
  .openapi('PublicBudgetItemInput')

const PublicSpendItemSchema = z
  .object({
    amount: z
      .number()
      .openapi({
        description:
          'The financial amount associated with the spend item, represented as a number.',
        example: null,
      }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'A Unix timestamp in milliseconds indicating when the spend item was created.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing additional details about the spend item.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the spend item, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the spend item, represented as a string.',
        example: null,
      }),
    order: z
      .int32()
      .openapi({
        description: 'An integer indicating the order or sequence of the spend item.',
        example: null,
      }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'A Unix timestamp in milliseconds indicating when the spend item was last updated.',
        example: null,
      }),
  })
  .openapi({ required: ['amount', 'createdAt', 'id', 'name', 'order', 'updatedAt'], example: null })
  .openapi('PublicSpendItem')

const PublicBudgetTotalsSchema = z
  .object({
    budgetItems: z
      .array(PublicBudgetItemSchema)
      .openapi({
        description:
          'An array of budget items associated with the campaign, each represented by a PublicBudgetItem object.',
        example: null,
      }),
    budgetTotal: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The total amount of the budget allocated for the campaign, expressed as a number.',
        example: null,
      }),
    currencyCode: z
      .enum([
        'AED',
        'AFN',
        'ALL',
        'AMD',
        'ANG',
        'AOA',
        'ARS',
        'AUD',
        'AWG',
        'AZN',
        'BAM',
        'BBD',
        'BDT',
        'BGN',
        'BHD',
        'BIF',
        'BMD',
        'BND',
        'BOB',
        'BOV',
        'BRL',
        'BSD',
        'BTN',
        'BWP',
        'BYN',
        'BZD',
        'CAD',
        'CDF',
        'CHE',
        'CHF',
        'CHW',
        'CLF',
        'CLP',
        'CNY',
        'COP',
        'COU',
        'CRC',
        'CUC',
        'CUP',
        'CVE',
        'CZK',
        'DJF',
        'DKK',
        'DOP',
        'DZD',
        'EGP',
        'ERN',
        'ETB',
        'EUR',
        'FJD',
        'FKP',
        'GBP',
        'GEL',
        'GHS',
        'GIP',
        'GMD',
        'GNF',
        'GTQ',
        'GYD',
        'HKD',
        'HNL',
        'HRK',
        'HTG',
        'HUF',
        'IDR',
        'ILS',
        'INR',
        'IQD',
        'IRR',
        'ISK',
        'JMD',
        'JOD',
        'JPY',
        'KES',
        'KGS',
        'KHR',
        'KMF',
        'KPW',
        'KRW',
        'KWD',
        'KYD',
        'KZT',
        'LAK',
        'LBP',
        'LKR',
        'LRD',
        'LSL',
        'LYD',
        'MAD',
        'MDL',
        'MGA',
        'MKD',
        'MMK',
        'MNT',
        'MOP',
        'MRU',
        'MUR',
        'MVR',
        'MWK',
        'MXN',
        'MXV',
        'MYR',
        'MZN',
        'NAD',
        'NGN',
        'NIO',
        'NOK',
        'NPR',
        'NZD',
        'OMR',
        'PAB',
        'PEN',
        'PGK',
        'PHP',
        'PKR',
        'PLN',
        'PYG',
        'QAR',
        'RON',
        'RSD',
        'RUB',
        'RWF',
        'SAR',
        'SBD',
        'SCR',
        'SDG',
        'SEK',
        'SGD',
        'SHP',
        'SLL',
        'SOS',
        'SRD',
        'SSP',
        'STN',
        'SVC',
        'SYP',
        'SZL',
        'THB',
        'TJS',
        'TMT',
        'TND',
        'TOP',
        'TRY',
        'TTD',
        'TWD',
        'TZS',
        'UAH',
        'UGX',
        'USD',
        'USN',
        'UYI',
        'UYU',
        'UZS',
        'VEF',
        'VND',
        'VUV',
        'WST',
        'XAF',
        'XAG',
        'XAU',
        'XBA',
        'XBB',
        'XBC',
        'XBD',
        'XCD',
        'XDR',
        'XOF',
        'XPD',
        'XPF',
        'XPT',
        'XSU',
        'XUA',
        'YER',
        'ZAR',
        'ZMW',
        'ZWL',
      ])
      .openapi({
        description:
          "The currency code used for the budget and spending amounts, represented as a string. Valid values include standard currency codes such as 'USD', 'EUR', 'JPY', etc.",
        example: null,
      }),
    remainingBudget: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The remaining budget available for the campaign, calculated as the difference between the budgetTotal and spendTotal, expressed as a number.',
        example: null,
      }),
    spendItems: z
      .array(PublicSpendItemSchema)
      .openapi({
        description:
          'An array of spend items associated with the campaign, each represented by a PublicSpendItem object.',
        example: null,
      }),
    spendTotal: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total amount spent in the campaign, expressed as a number.',
        example: null,
      }),
  })
  .openapi({ required: ['budgetItems', 'currencyCode', 'spendItems'], example: null })
  .openapi('PublicBudgetTotals')

const PublicCampaignCloneInputSchema = z
  .object({
    assetsToClone: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'A map of asset types to be cloned, where each key is an asset type and the value is an array of asset identifiers. It is an object.',
        example: null,
      }),
    audience: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The target audience for the cloned campaign. It is a string.',
        example: null,
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The currency code for the cloned campaign's budget. It is a string. This value is optional.",
        example: null,
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end date for the cloned campaign. It is a string in ISO 8601 format (YYYY-MM-DD).  If omitted, this will match the start date of the source campaign.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description:
          'The name for the new cloned campaign. It is a string. The name needs to be unique compared to other campaigns in the portal.',
        example: null,
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional notes or comments about the cloned campaign. It is a string. This value is optional.',
        example: null,
      }),
    shouldCloneDraftNodes: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether draft nodes should be cloned. By default this is true.',
        example: null,
      }),
    shouldCloneEdges: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether edges should be cloned. By default this is true.',
        example: null,
      }),
    shouldCloneStickyNotes: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether sticky notes should be cloned. By default this is true.',
        example: null,
      }),
    shouldCloneTasks: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether tasks should be cloned. By default this is true.',
        example: null,
      }),
    shouldCloneTrackingUrls: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether tracking URLs should be cloned. By default this is true.',
        example: null,
      }),
    sourceCampaignGuid: z
      .string()
      .openapi({
        description: 'The unique identifier of the campaign to be cloned. It is a string.',
        example: null,
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start date for the cloned campaign. It is a string in ISO 8601 format (YYYY-MM-DD). If omitted, this will match the start date of the source campaign.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'assetsToClone',
      'name',
      'shouldCloneDraftNodes',
      'shouldCloneEdges',
      'shouldCloneStickyNotes',
      'shouldCloneTasks',
      'shouldCloneTrackingUrls',
      'sourceCampaignGuid',
    ],
    example: null,
  })
  .openapi('PublicCampaignCloneInput')

const PublicCampaignCloneResponseSchema = z
  .object({
    campaignGuid: z
      .string()
      .openapi({
        description: 'The unique identifier for the newly cloned campaign.',
        example: null,
      }),
    status: z
      .enum(['COMPLETE', 'FAILED', 'PARTIAL_FAILURE', 'PENDING'])
      .openapi({
        description:
          "The status of the cloning operation. Valid values include 'PENDING', 'COMPLETE', 'FAILED', and 'PARTIAL_FAILURE'.",
        example: null,
      }),
  })
  .openapi({ required: ['campaignGuid', 'status'], example: null })
  .openapi('PublicCampaignCloneResponse')

const PublicSpendItemInputSchema = z
  .object({
    amount: z
      .number()
      .openapi({
        description: 'The monetary value of the spend item, represented as a number.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing additional details or context about the spend item.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the spend item, represented as a string.',
        example: null,
      }),
    order: z
      .int32()
      .openapi({
        description: 'An integer indicating the order or sequence of the spend item within a list.',
        example: null,
      }),
  })
  .openapi({ required: ['amount', 'name', 'order'], example: null })
  .openapi('PublicSpendItemInput')

const RevenueAttributionAggregateSchema = z
  .object({
    contactsNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of contacts associated with the campaign.',
        example: null,
      }),
    currencyCode: z
      .enum([
        'AED',
        'AFN',
        'ALL',
        'AMD',
        'ANG',
        'AOA',
        'ARS',
        'AUD',
        'AWG',
        'AZN',
        'BAM',
        'BBD',
        'BDT',
        'BGN',
        'BHD',
        'BIF',
        'BMD',
        'BND',
        'BOB',
        'BOV',
        'BRL',
        'BSD',
        'BTN',
        'BWP',
        'BYN',
        'BZD',
        'CAD',
        'CDF',
        'CHE',
        'CHF',
        'CHW',
        'CLF',
        'CLP',
        'CNY',
        'COP',
        'COU',
        'CRC',
        'CUC',
        'CUP',
        'CVE',
        'CZK',
        'DJF',
        'DKK',
        'DOP',
        'DZD',
        'EGP',
        'ERN',
        'ETB',
        'EUR',
        'FJD',
        'FKP',
        'GBP',
        'GEL',
        'GHS',
        'GIP',
        'GMD',
        'GNF',
        'GTQ',
        'GYD',
        'HKD',
        'HNL',
        'HRK',
        'HTG',
        'HUF',
        'IDR',
        'ILS',
        'INR',
        'IQD',
        'IRR',
        'ISK',
        'JMD',
        'JOD',
        'JPY',
        'KES',
        'KGS',
        'KHR',
        'KMF',
        'KPW',
        'KRW',
        'KWD',
        'KYD',
        'KZT',
        'LAK',
        'LBP',
        'LKR',
        'LRD',
        'LSL',
        'LYD',
        'MAD',
        'MDL',
        'MGA',
        'MKD',
        'MMK',
        'MNT',
        'MOP',
        'MRU',
        'MUR',
        'MVR',
        'MWK',
        'MXN',
        'MXV',
        'MYR',
        'MZN',
        'NAD',
        'NGN',
        'NIO',
        'NOK',
        'NPR',
        'NZD',
        'OMR',
        'PAB',
        'PEN',
        'PGK',
        'PHP',
        'PKR',
        'PLN',
        'PYG',
        'QAR',
        'RON',
        'RSD',
        'RUB',
        'RWF',
        'SAR',
        'SBD',
        'SCR',
        'SDG',
        'SEK',
        'SGD',
        'SHP',
        'SLL',
        'SOS',
        'SRD',
        'SSP',
        'STN',
        'SVC',
        'SYP',
        'SZL',
        'THB',
        'TJS',
        'TMT',
        'TND',
        'TOP',
        'TRY',
        'TTD',
        'TWD',
        'TZS',
        'UAH',
        'UGX',
        'USD',
        'USN',
        'UYI',
        'UYU',
        'UZS',
        'VEF',
        'VND',
        'VUV',
        'WST',
        'XAF',
        'XAG',
        'XAU',
        'XBA',
        'XBB',
        'XBC',
        'XBD',
        'XCD',
        'XDR',
        'XOF',
        'XPD',
        'XPF',
        'XPT',
        'XSU',
        'XUA',
        'YER',
        'ZAR',
        'ZMW',
        'ZWL',
      ])
      .exactOptional()
      .openapi({
        description:
          "A string representing the currency code for the financial amounts, following ISO 4217 standards. Valid values include currency codes like 'USD', 'EUR', 'JPY', etc.",
        example: null,
      }),
    dealAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'A number representing the total amount from deals associated with the campaign.',
        example: null,
      }),
    dealsNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer indicating the number of deals associated with the campaign.',
        example: null,
      }),
    revenueAmount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'A number indicating the total revenue amount attributed to the campaign.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('RevenueAttributionAggregate')

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
      scopes: {
        'marketing.campaigns.read': '',
        'marketing.campaigns.revenue.full.read': '',
        'marketing.campaigns.revenue.lite.read': '',
        'marketing.campaigns.revenue.read': '',
        'marketing.campaigns.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getMarketingCampaigns202609Route = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09',
  tags: ['Basic'],
  summary: 'Retrieve campaigns',
  description:
    'Retrieve a page of marketing campaigns from your HubSpot account. This endpoint allows you to sort, filter, and paginate through campaigns, making it useful for managing and analyzing your marketing efforts.',
  operationId: 'get-/marketing/campaigns/2026-09',
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
              "A cursor token for pagination. Use the value from the previous response's paging.next.after field.",
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'A string to filter campaigns by name.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
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
            description: 'An array of property names to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'A string to specify the sorting order of the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
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
          schema: CollectionResponseWithTotalPublicCampaignSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const postMarketingCampaigns202609Route = createRoute({
  method: 'post',
  path: '/marketing/campaigns/2026-09',
  tags: ['Basic'],
  summary: 'Create a campaign',
  description:
    "Create a campaign with the specified properties and receive a copy of the object, including its ID. Read-only and non-existent properties will result in a 400 error. Note: The 'hs_goal' property is deprecated and will be ignored if provided.",
  operationId: 'post-/marketing/campaigns/2026-09',
  request: {
    body: {
      content: { 'application/json': { schema: PublicCampaignInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCampaignSchema, example: null } },
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
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const getMarketingCampaigns202609AssetTypesRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/asset-types',
  tags: ['Assets'],
  summary: 'Retrieve asset types',
  description:
    'List all supported campaign asset types. This endpoint allows you to retrieve a list of asset types that can be used in campaigns, which is useful for understanding the available options when creating or managing campaign assets.',
  operationId: 'get-/marketing/campaigns/2026-09/asset-types',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseStringNoPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const postMarketingCampaigns202609BatchArchiveRoute = createRoute({
  method: 'post',
  path: '/marketing/campaigns/2026-09/batch/archive',
  tags: ['Batch'],
  summary: 'Batch archive campaigns',
  description:
    'Delete a batch of campaigns using their identifiers. This endpoint allows you to efficiently remove multiple campaigns at once, streamlining the process of managing campaign data. It is particularly useful for cleaning up outdated or unnecessary campaigns in bulk.',
  operationId: 'post-/marketing/campaigns/2026-09/batch/archive',
  request: {
    body: {
      content: {
        'application/json': { schema: BatchInputPublicCampaignDeleteInputSchema, example: null },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const postMarketingCampaigns202609BatchCreateRoute = createRoute({
  method: 'post',
  path: '/marketing/campaigns/2026-09/batch/create',
  tags: ['Batch'],
  summary: 'Batch create campaigns',
  description:
    "Create a batch of marketing campaigns with specified properties. This endpoint allows for the creation of multiple campaigns in a single request. Note that the 'hs_goal' property is deprecated and will be ignored if included in the request.",
  operationId: 'post-/marketing/campaigns/2026-09/batch/create',
  request: {
    body: {
      content: {
        'application/json': { schema: BatchInputPublicCampaignInputSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: BatchResponsePublicCampaignSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': { schema: BatchResponsePublicCampaignWithErrorsSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const postMarketingCampaigns202609BatchReadRoute = createRoute({
  method: 'post',
  path: '/marketing/campaigns/2026-09/batch/read',
  tags: ['Batch'],
  summary: 'Batch retrieve campaigns',
  description:
    'Retrieve a batch of campaigns using specified parameters. This endpoint allows you to filter campaigns by date range and select specific properties to include in the response. It is useful for obtaining detailed information about multiple campaigns at once.',
  operationId: 'post-/marketing/campaigns/2026-09/batch/read',
  request: {
    query: z.object({
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            description: 'The end date for filtering campaigns, formatted as a string.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
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
            description: 'A comma-separated list of property names to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            description: 'The start date for filtering campaigns, formatted as a string.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BatchInputPublicCampaignReadInputSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponsePublicCampaignWithAssetsSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponsePublicCampaignWithAssetsWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const postMarketingCampaigns202609BatchUpdateRoute = createRoute({
  method: 'post',
  path: '/marketing/campaigns/2026-09/batch/update',
  tags: ['Batch'],
  summary: 'Batch update campaigns',
  description:
    "Update a batch of campaigns with the specified properties. This endpoint allows you to modify multiple campaigns in a single request. Note: The 'hs_goal' property is deprecated and will be ignored if provided.",
  operationId: 'post-/marketing/campaigns/2026-09/batch/update',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BatchInputPublicCampaignBatchUpdateItemSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: BatchResponsePublicCampaignSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': { schema: BatchResponsePublicCampaignWithErrorsSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const postMarketingCampaigns202609CloneRoute = createRoute({
  method: 'post',
  path: '/marketing/campaigns/2026-09/clone',
  tags: ['Advanced'],
  summary: 'Clone a campaign',
  description:
    'Clone a campaign identified by sourceCampaignGuid in the request body. The cloned campaign will have its own GUID and the provided properties. Asset cloning is performed asynchronously. Use the clone-status endpoint to check progress.',
  operationId: 'post-/marketing/campaigns/2026-09/clone_/marketing/campaigns/2026-09-beta/clone',
  request: {
    body: {
      content: { 'application/json': { schema: PublicCampaignCloneInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCampaignCloneResponseSchema, example: null } },
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
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const getMarketingCampaigns202609CloneAssetTypesRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/clone/asset-types',
  tags: ['Assets'],
  summary: 'Retrieve cloneable asset types',
  description: 'List the portal-wide asset types that can be cloned in a campaign clone operation.',
  operationId:
    'get-/marketing/campaigns/2026-09/clone/asset-types_/marketing/campaigns/2026-09-beta/clone/asset-types',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseStringNoPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const getMarketingCampaigns202609CloneCampaignGuidStatusRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/clone/{campaignGuid}/status',
  tags: ['Basic'],
  summary: 'Retrieve clone status',
  description:
    'Check the status of an asynchronous campaign clone operation. The campaignGuid path parameter should be the GUID of the new campaign returned by the clone endpoint.',
  operationId:
    'get-/marketing/campaigns/2026-09/clone/{campaignGuid}/status_/marketing/campaigns/2026-09-beta/clone/{campaignGuid}/status',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description:
              'The unique identifier (GUID) of the new campaign returned by the clone endpoint.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCampaignCloneResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const getMarketingCampaigns202609CampaignGuidRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/{campaignGuid}',
  tags: ['Basic'],
  summary: 'Retrieve a campaign',
  description:
    "Retrieve details of a specific marketing campaign identified by its internal ID. This endpoint allows you to access campaign information and associated assets. It is useful for obtaining campaign data for analysis or reporting purposes. If the properties to be returned are not defined with the 'properties' query parameter, the response will include an empty properties map. ",
  operationId: 'get-/marketing/campaigns/2026-09/{campaignGuid}',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            description: 'The end date for filtering campaign data, formatted as YYYY-MM-DD.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
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
            description: 'A comma-separated list of property names to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            description: 'The start date for filtering campaign data, formatted as YYYY-MM-DD.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCampaignWithAssetsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const deleteMarketingCampaigns202609CampaignGuidRoute = createRoute({
  method: 'delete',
  path: '/marketing/campaigns/2026-09/{campaignGuid}',
  tags: ['Basic'],
  summary: 'Delete a campaign',
  description:
    'Delete a specified campaign from the system. This operation will remove the campaign identified by the given campaignGuid from your HubSpot account.',
  operationId: 'delete-/marketing/campaigns/2026-09/{campaignGuid}',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const patchMarketingCampaigns202609CampaignGuidRoute = createRoute({
  method: 'patch',
  path: '/marketing/campaigns/2026-09/{campaignGuid}',
  tags: ['Basic'],
  summary: 'Update a campaign',
  description:
    "Perform a partial update of a campaign identified by the specified ID. Provided property values will be overwritten. Read-only and non-existent properties will result in a 400 error. Property values can be cleared by passing an empty string. Note: The 'hs_goal' property is deprecated and will be ignored if provided.",
  operationId: 'patch-/marketing/campaigns/2026-09/{campaignGuid}',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicCampaignInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCampaignSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const getMarketingCampaigns202609CampaignGuidAssetsAssetTypeRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}',
  tags: ['Assets'],
  summary: 'Retrieve assets',
  description:
    'List all assets of a specific campaign by asset type. This endpoint allows you to retrieve various assets associated with a campaign, filtered by the type of asset. It supports pagination to handle large sets of results.',
  operationId: 'get-/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}',
  request: {
    params: z.object({
      assetType: z
        .string()
        .openapi({
          param: {
            name: 'assetType',
            in: 'path',
            description: 'The type of asset to filter the list.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
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
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            description: 'The end date for filtering assets, formatted as a string.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            description: 'The start date for filtering assets, formatted as a string.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
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
          schema: CollectionResponsePublicCampaignAssetForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const putMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdRoute = createRoute({
  method: 'put',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}',
  tags: ['Assets'],
  summary: 'Add asset',
  description:
    'Associate an asset with a specific campaign. This operation links an asset of a specified type and ID to a campaign identified by its unique campaignGuid. It is useful for organizing and managing campaign assets within HubSpot. \n\nIf an asset has just been created, a 400 error may appear in the response when trying to add the new asset. It is recommended to wait a few minutes before trying again. ',
  operationId: 'put-/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}',
  request: {
    params: z.object({
      assetId: z
        .string()
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            description: 'The unique identifier of the asset to be associated with the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      assetType: z
        .string()
        .openapi({
          param: {
            name: 'assetType',
            in: 'path',
            description: 'The type of asset being associated with the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description:
              'The unique identifier of the campaign to which the asset will be associated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const deleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdRoute = createRoute({
  method: 'delete',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}',
  tags: ['Assets'],
  summary: 'Remove asset',
  description:
    "Disassociate an asset from a specified campaign. This operation removes the link between the asset and the campaign, effectively detaching the asset from the campaign's context.",
  operationId: 'delete-/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}',
  request: {
    params: z.object({
      assetId: z
        .string()
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            description:
              'The unique identifier of the asset to be disassociated from the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      assetType: z
        .string()
        .openapi({
          param: {
            name: 'assetType',
            in: 'path',
            description: 'The type of asset to be disassociated from the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description:
              'The unique identifier of the campaign from which the asset will be disassociated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const postMarketingCampaigns202609CampaignGuidBudgetRoute = createRoute({
  method: 'post',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/budget',
  tags: ['Budget'],
  summary: 'Add budget item',
  description:
    'Add a new budget item to the specified campaign. This endpoint allows you to associate financial allocations with a campaign, enabling better tracking and management of campaign budgets.',
  operationId: 'post-/marketing/campaigns/2026-09/{campaignGuid}/budget',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description:
              'The unique identifier of the campaign to which the budget item will be added.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicBudgetItemInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicBudgetItemSchema, example: null } },
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
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const getMarketingCampaigns202609CampaignGuidBudgetTotalsRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/budget/totals',
  tags: ['Budget'],
  summary: 'Retrieve budget details',
  description:
    'Retrieve detailed budget and spending information, including totals, for a specific marketing campaign. This endpoint provides insights into the financial aspects of a campaign, helping users to manage and analyze budget allocations and spending patterns effectively.',
  operationId: 'get-/marketing/campaigns/2026-09/{campaignGuid}/budget/totals',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description:
              'The unique identifier of the campaign for which budget totals are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicBudgetTotalsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const getMarketingCampaigns202609CampaignGuidBudgetBudgetIdRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}',
  tags: ['Budget'],
  summary: 'Retrieve budget item',
  description:
    'Retrieve a specific budget item associated with a campaign using its unique budget ID. This endpoint is useful for accessing detailed information about a particular budget item within a campaign, allowing for review and analysis of budget allocations.',
  operationId: 'get-/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}',
  request: {
    params: z.object({
      budgetId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'budgetId',
            in: 'path',
            description: 'The unique identifier of the budget item, represented as an integer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicBudgetItemSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const putMarketingCampaigns202609CampaignGuidBudgetBudgetIdRoute = createRoute({
  method: 'put',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}',
  tags: ['Budget'],
  summary: 'Update budget item',
  description:
    'Update a specific budget item by ID within a marketing campaign. This endpoint allows you to modify the details of a budget item associated with a campaign, identified by its unique campaignGuid and budgetId. Use this to adjust budget allocations or update budget-related information for a campaign.',
  operationId: 'put-/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}',
  request: {
    params: z.object({
      budgetId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'budgetId',
            in: 'path',
            description: 'The unique identifier of the budget item to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicBudgetItemInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicBudgetItemSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const deleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdRoute = createRoute({
  method: 'delete',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}',
  tags: ['Budget'],
  summary: 'Delete budget item',
  description:
    'Delete a specific budget item by its ID from a campaign. This operation is useful for removing budget allocations that are no longer needed or were added in error.',
  operationId: 'delete-/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}',
  request: {
    params: z.object({
      budgetId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'budgetId',
            in: 'path',
            description: 'The unique identifier of the budget item to be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description:
              'The unique identifier of the campaign from which the budget item will be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/reports/contacts/{contactType}',
  tags: ['Reports'],
  summary: 'Retrieve contact IDs',
  description:
    'Fetch the list of contact IDs for the specified campaign and contact type. This endpoint allows you to retrieve contact information associated with a particular campaign, filtered by the type of contact. It supports pagination and date filtering to manage large sets of data effectively.',
  operationId: 'get-/marketing/campaigns/2026-09/{campaignGuid}/reports/contacts/{contactType}',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      contactType: z
        .string()
        .openapi({
          param: {
            name: 'contactType',
            in: 'path',
            description: 'The type of contact to filter the list.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
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
              "A cursor token for pagination. Use the value from the previous response's paging.next.after field.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            description: 'The end date for filtering contact data, formatted as YYYY-MM-DD.',
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
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            description: 'The start date for filtering contact data, formatted as YYYY-MM-DD.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
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
          schema: CollectionResponseContactReferenceForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const getMarketingCampaigns202609CampaignGuidReportsMetricsRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/reports/metrics',
  tags: ['Reports'],
  summary: 'Retrieve metrics',
  description:
    'Fetch the metrics of a specific marketing campaign using its unique identifier. This endpoint allows you to gather insights into campaign performance over a specified date range.',
  operationId: 'get-/marketing/campaigns/2026-09/{campaignGuid}/reports/metrics',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            description: 'The end date for fetching campaign metrics, formatted as YYYY-MM-DD.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            description: 'The start date for fetching campaign metrics, formatted as YYYY-MM-DD.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: MetricsCountersSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const getMarketingCampaigns202609CampaignGuidReportsRevenueRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/reports/revenue',
  tags: ['Reports'],
  summary: 'Retrieve revenue report',
  description:
    'Fetch revenue attribution report data for a specific campaign. This endpoint allows you to retrieve detailed revenue attribution metrics, which can be filtered by attribution model and date range. This data is useful for analyzing the financial impact of marketing campaigns.',
  operationId: 'get-/marketing/campaigns/2026-09/{campaignGuid}/reports/revenue',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      attributionModel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'attributionModel',
            in: 'query',
            description:
              'The attribution model to use for the revenue report. Specify the model to filter the data accordingly.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            description: 'End date to fetch attribution data, in the format YYYY-MM-DD.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            description: 'Start date to fetch attribution data, in the format YYYY-MM-DD.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: RevenueAttributionAggregateSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.campaigns.revenue.read'] },
    { oauth2: ['marketing.campaigns.revenue.lite.read'] },
    { oauth2: ['marketing.campaigns.revenue.full.read'] },
  ],
})

export const postMarketingCampaigns202609CampaignGuidSpendRoute = createRoute({
  method: 'post',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/spend',
  tags: ['Spend'],
  summary: 'Create spend item',
  description:
    'Create a new campaign spend item for a specified campaign. This endpoint allows you to add financial details related to campaign expenditures, which can help in tracking and managing marketing budgets effectively.',
  operationId: 'post-/marketing/campaigns/2026-09/{campaignGuid}/spend',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description:
              'The unique identifier of the campaign for which the spend item is being created.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicSpendItemInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicSpendItemSchema, example: null } },
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
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const getMarketingCampaigns202609CampaignGuidSpendSpendIdRoute = createRoute({
  method: 'get',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}',
  tags: ['Spend'],
  summary: 'Retrieve spend Item',
  description:
    'Retrieve a specific campaign spend item using its unique spendId. This endpoint allows you to access detailed information about a particular spend item associated with a campaign, which can be useful for tracking and managing campaign expenses.',
  operationId: 'get-/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      spendId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'spendId',
            in: 'path',
            description: 'The unique identifier of the spend item to retrieve.',
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
      content: { 'application/json': { schema: PublicSpendItemSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.read'] }],
})

export const putMarketingCampaigns202609CampaignGuidSpendSpendIdRoute = createRoute({
  method: 'put',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}',
  tags: ['Spend'],
  summary: 'Update spend item',
  description:
    'Update a specific campaign spend item by its unique spendId. This operation allows you to modify the details of an existing spend item associated with a campaign, such as its amount or description.',
  operationId: 'put-/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      spendId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'spendId',
            in: 'path',
            description: 'The unique identifier of the spend item to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicSpendItemInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicSpendItemSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})

export const deleteMarketingCampaigns202609CampaignGuidSpendSpendIdRoute = createRoute({
  method: 'delete',
  path: '/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}',
  tags: ['Spend'],
  summary: 'Delete spend item',
  description:
    'Delete a specific campaign spend item by its ID. This operation is useful for managing and cleaning up spend records associated with a particular marketing campaign.',
  operationId: 'delete-/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}',
  request: {
    params: z.object({
      campaignGuid: z
        .string()
        .openapi({
          param: {
            name: 'campaignGuid',
            in: 'path',
            description: 'The unique identifier of the campaign.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      spendId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'spendId',
            in: 'path',
            description: 'The unique identifier of the spend item to delete.',
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
  security: [{ oauth2: ['marketing.campaigns.write'] }],
})
