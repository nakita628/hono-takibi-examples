import { createRoute, z } from '@hono/zod-openapi'

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
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
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({ required: ['message'], example: null })
  .openapi('ErrorDetail')

const StandardErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The main category of the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description: 'Additional context-specific information related to the error.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({ description: 'The detailed error objects.', example: null }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique ID for the error instance.', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'URLs linking to documentation or resources associated with the error.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A human-readable string describing the error and possible remediation steps.',
        example: null,
      }),
    status: z
      .string()
      .openapi({ description: 'The HTTP status code associated with the error.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A more specific error category within each main category.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description:
      'Represents a standard error response in the HubSpot API, providing detailed information about an error that occurred during an API request.',
    example: null,
  })
  .openapi('StandardError')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description: 'A paging cursor token for retrieving subsequent pages.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL that can be used to retrieve the next page results.',
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
        description: 'A paging cursor token for retrieving previous pages.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: "A URL that can be used to retrieve the previous pages' results.",
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
  .openapi({ example: null, required: [] })
  .openapi('Paging')

const AssociatedIdSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID for the association type.', example: null }),
    type: z
      .string()
      .openapi({ description: 'The type of associations.', example: 'deal_to_contact' }),
  })
  .openapi({
    required: ['id', 'type'],
    description: 'Contains the id and type of an association',
    example: null,
  })
  .openapi('AssociatedId')

const CollectionResponseAssociatedIdSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z.array(AssociatedIdSchema).openapi({ example: null }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseAssociatedId')

const ValueWithTimestampSchema = z
  .object({
    sourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the property.', example: null }),
    sourceLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable label.', example: null }),
    sourceType: z.string().openapi({ description: 'The property type.', example: null }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the property was updated, in ISO 8601 format.',
        example: null,
      }),
    updatedByUserId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the user who last updated the property.', example: null }),
    value: z.string().openapi({ description: 'The property value.', example: null }),
  })
  .openapi({
    required: ['sourceType', 'timestamp', 'value'],
    description: 'Property model that includes timestamp.',
    example: null,
  })
  .openapi('ValueWithTimestamp')

const SimplePublicObjectSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({ description: 'Whether the object is archived.', example: null }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the object was archived, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the object was created, in ISO 8601 format.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The unique ID of the object.', example: null }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique ID to identify each write operation, which will be returned with any errors to identify which request encountered which error.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().nullable().openapi({ example: null }))
      .openapi({
        description: 'Key-value pairs representing the properties of the object.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs representing the properties of the object along with their history.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the object was last updated, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to go to the object', example: null }),
  })
  .openapi({
    required: ['archived', 'createdAt', 'id', 'properties', 'updatedAt'],
    description: 'A simple public object.',
    example: null,
  })
  .openapi('SimplePublicObject')

const CollectionResponseWithTotalSimplePublicObjectSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z.array(SimplePublicObjectSchema).openapi({ example: null }),
    total: z
      .int32()
      .openapi({
        description: 'The total number of objects included into response.',
        example: null,
      }),
  })
  .openapi({
    required: ['results', 'total'],
    description:
      'Represents a list of simple objects returned from an API request, along with the total count of objects available.',
    example: null,
  })
  .openapi('CollectionResponseWithTotalSimplePublicObject')

const PublicObjectIdSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique ID of the object.', example: null }),
  })
  .openapi({ required: ['id'], description: 'Contains the Id of a Public Object', example: null })
  .openapi('PublicObjectId')

const AssociationSpecSchema = z
  .object({
    associationCategory: z
      .enum(['HUBSPOT_DEFINED', 'INTEGRATOR_DEFINED', 'USER_DEFINED', 'WORK'])
      .openapi({
        description: 'The category of the association, such as "HUBSPOT_DEFINED".',
        example: null,
      }),
    associationTypeId: z
      .int32()
      .openapi({
        description: 'The ID representing the specific type of association.',
        example: null,
      }),
  })
  .openapi({
    required: ['associationCategory', 'associationTypeId'],
    description:
      'Defines the type, direction, and details of the relationship between two CRM objects.',
    example: null,
  })
  .openapi('AssociationSpec')

const PublicAssociationsForObjectSchema = z
  .object({
    to: PublicObjectIdSchema,
    types: z.array(AssociationSpecSchema).openapi({ example: null }),
  })
  .openapi({ required: ['to', 'types'], example: null })
  .openapi('PublicAssociationsForObject')

const BatchResponseSimplePublicObjectSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the batch processing was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z.array(StandardErrorSchema).exactOptional().openapi({ example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An object containing relevant links related to the batch request.',
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
        description: 'The timestamp when the batch request was initially made, in ISO 8601 format.',
        example: null,
      }),
    results: z.array(SimplePublicObjectSchema).openapi({ example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the batch processing began, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The status of the batch processing request: "PENDING", "PROCESSING", "CANCELLED", or "COMPLETE"',
        example: null,
      }),
  })
  .openapi({
    required: ['completedAt', 'results', 'startedAt', 'status'],
    description: 'A public object batch response object',
    example: null,
  })
  .openapi('BatchResponseSimplePublicObject')

const FilterSchema = z
  .object({
    highValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The upper boundary value when using ranged-based filters.',
        example: null,
      }),
    operator: z
      .enum([
        'BETWEEN',
        'CONTAINS_TOKEN',
        'EQ',
        'GT',
        'GTE',
        'HAS_PROPERTY',
        'IN',
        'LT',
        'LTE',
        'NEQ',
        'NOT_CONTAINS_TOKEN',
        'NOT_HAS_PROPERTY',
        'NOT_IN',
      ])
      .openapi({ description: 'null', example: null }),
    propertyName: z
      .string()
      .openapi({ description: 'The name of the property to apply the filter to.', example: null }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value to match against the property.', example: null }),
    values: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'The values to match against the property.', example: null }),
  })
  .openapi({
    required: ['operator', 'propertyName'],
    description:
      'Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. ',
    example: null,
  })
  .openapi('Filter')

const FilterGroupSchema = z
  .object({ filters: z.array(FilterSchema).openapi({ example: null }) })
  .openapi({ required: ['filters'], example: null })
  .openapi('FilterGroup')

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({ example: null, required: [] })
  .openapi('ForwardPaging')

const SimplePublicObjectIdSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique ID of the object.', example: '430001' }),
  })
  .openapi({ required: ['id'], description: 'Contains the Id of a Public Object', example: null })
  .openapi('SimplePublicObjectId')

const BatchReadInputSimplePublicObjectIdSchema = z
  .object({
    idProperty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When using a custom unique value property to retrieve records, the name of the property. Do not include this parameter if retrieving by record ID.',
        example: null,
      }),
    inputs: z.array(SimplePublicObjectIdSchema).openapi({ example: null }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'Key-value pairs for setting properties for the new object.',
        example: null,
      }),
    propertiesWithHistory: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'Key-value pairs for setting properties for the new object and their histories.',
        example: null,
      }),
  })
  .openapi({
    required: ['inputs', 'properties', 'propertiesWithHistory'],
    description:
      'Specifies the input for reading a batch of CRM objects, including arrays of object IDs, requested property names (with optional history), and an optional unique identifying property.',
    example: null,
  })
  .openapi('BatchReadInputSimplePublicObjectId')

const SimplePublicUpsertObjectSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({ description: 'Whether the object is archived.', example: null }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the object was archived, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the object was created, in ISO 8601 format.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The unique ID of the object.', example: null }),
    new: z.boolean().openapi({ description: 'Whether the property is new.', example: null }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An identifier for tracing the creation or update request.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'Key value pairs representing the properties of the object.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs representing the properties of the object along with their history.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the object was last updated, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL associated with the object.', example: null }),
  })
  .openapi({
    required: ['archived', 'createdAt', 'id', 'new', 'properties', 'updatedAt'],
    description: 'Represents a CRM object that has either been created or updated (upserted)',
    example: null,
  })
  .openapi('SimplePublicUpsertObject')

const BatchResponseSimplePublicUpsertObjectSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the batch process was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z.array(StandardErrorSchema).exactOptional().openapi({ example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An object containing relevant links related to the batch request.',
        example: null,
      }),
    numErrors: z.int32().exactOptional().openapi({ description: 'Number of errors.', example: 10 }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the batch process was initiated, in ISO 8601 format.',
        example: null,
      }),
    results: z.array(SimplePublicUpsertObjectSchema).openapi({ example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the batch process began execution, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The status of the batch processing request. Can be: "PENDING", "PROCESSING", "CANCELED", or "COMPLETE".',
        example: null,
      }),
  })
  .openapi({
    required: ['completedAt', 'results', 'startedAt', 'status'],
    description:
      'Represents the result of a batch upsert operation, including the operation’s status, timestamps, and a list of successfully created or updated objects.',
    example: null,
  })
  .openapi('BatchResponseSimplePublicUpsertObject')

const BatchInputSimplePublicObjectIdSchema = z
  .object({ inputs: z.array(SimplePublicObjectIdSchema).openapi({ example: null }) })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputSimplePublicObjectId')

const SimplePublicObjectBatchInputUpsertSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique ID of the object.', example: null }),
    idProperty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of a property whose values are unique for this object',
        example: null,
      }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'An identifier for tracing the creation request.', example: null }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'Key value pairs representing the properties of the object.',
        example: null,
      }),
  })
  .openapi({
    required: ['id', 'properties'],
    description:
      'Represents an object used in batch upsert operations, containing an object’s unique identifier, its properties, and optionally the unique property name and a write trace ID.',
    example: null,
  })
  .openapi('SimplePublicObjectBatchInputUpsert')

const BatchInputSimplePublicObjectBatchInputUpsertSchema = z
  .object({ inputs: z.array(SimplePublicObjectBatchInputUpsertSchema).openapi({ example: null }) })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputSimplePublicObjectBatchInputUpsert')

const PublicObjectSearchRequestSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description: 'A paging cursor token for retrieving subsequent pages.',
        example: null,
      }),
    filterGroups: z
      .array(FilterGroupSchema)
      .openapi({
        description: 'Up to 6 groups of filters defining additional query criteria.',
        example: null,
      }),
    limit: z
      .int32()
      .openapi({ description: 'The maximum results to return, up to 200 objects.', example: null }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'A list of property names to include in the response.',
        example: null,
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'The search query string, up to 3000 characters.', example: null }),
    sorts: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'Specifies sorting order based on object properties.',
        example: null,
      }),
  })
  .openapi({
    required: ['after', 'filterGroups', 'limit', 'properties', 'sorts'],
    description: 'Describes a search request',
    example: null,
  })
  .openapi('PublicObjectSearchRequest')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const SimplePublicObjectInputSchema = z
  .object({
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'Key value pairs representing the properties of the object.',
        example: null,
      }),
  })
  .openapi({
    required: ['properties'],
    description:
      'Represents the input required to create or update a CRM object, containing an object with property names and their corresponding values.',
    example: null,
  })
  .openapi('SimplePublicObjectInput')

const SimplePublicObjectWithAssociationsSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({ description: 'Whether the object is archived.', example: null }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the object was archived, in ISO 8601 format.',
        example: null,
      }),
    associations: z
      .record(z.string(), CollectionResponseAssociatedIdSchema)
      .exactOptional()
      .openapi({ description: 'A list defining relationships with other objects.', example: null }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the object was created, in ISO 8601 format.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The unique ID of the object.', example: null }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An identifier for tracing the creation or update request of the object.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().nullable().openapi({ example: null }))
      .openapi({
        description: 'Key value pairs representing the properties of the object.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs representing the properties of the object along with their history.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the object was last updated, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL associated with the CRM object.', example: null }),
  })
  .openapi({
    required: ['archived', 'createdAt', 'id', 'properties', 'updatedAt'],
    description:
      'Represents a CRM object along with its properties, timestamps, and a set of associated object IDs grouped by association type.',
    example: null,
  })
  .openapi('SimplePublicObjectWithAssociations')

const CollectionResponseSimplePublicObjectWithAssociationsForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z.array(SimplePublicObjectWithAssociationsSchema).openapi({ example: null }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseSimplePublicObjectWithAssociationsForwardPaging')

const PublicMergeInputSchema = z
  .object({
    objectIdToMerge: z
      .string()
      .openapi({ description: 'The object ID to merge with the primary object.', example: null }),
    primaryObjectId: z
      .string()
      .openapi({ description: 'The object ID of the primary object to merge.', example: null }),
  })
  .openapi({
    required: ['objectIdToMerge', 'primaryObjectId'],
    description: 'Input data for merging two records.',
    example: null,
  })
  .openapi('PublicMergeInput')

const SimplePublicObjectBatchInputSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The id to be updated. This can be the object id, or the unique property value of the idProperty property',
        example: null,
      }),
    idProperty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of a property whose values are unique for this object',
        example: 'my_unique_property_name',
      }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for tracing the request.', example: null }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'Key-value pairs representing the properties of the object.',
        example: null,
      }),
  })
  .openapi({
    required: ['id', 'properties'],
    description:
      'Contains an array of CRM object records to be processed in a batch operation, each defined by their ID and properties.',
    example: null,
  })
  .openapi('SimplePublicObjectBatchInput')

const BatchInputSimplePublicObjectBatchInputSchema = z
  .object({ inputs: z.array(SimplePublicObjectBatchInputSchema).openapi({ example: null }) })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputSimplePublicObjectBatchInput')

const SimplePublicObjectBatchInputForCreateSchema = z
  .object({
    associations: z.array(PublicAssociationsForObjectSchema).openapi({ example: null }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'An identifier for tracing the creation request.', example: null }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'Key-value pairs representing the properties of the object.',
        example: null,
      }),
  })
  .openapi({
    required: ['associations', 'properties'],
    description:
      'An input object that contains a collection of objects to be created together in a batch.',
    example: null,
  })
  .openapi('SimplePublicObjectBatchInputForCreate')

const SimplePublicObjectInputForCreateSchema = z
  .object({
    associations: z.array(PublicAssociationsForObjectSchema).openapi({ example: null }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'Key-value pairs for setting properties for the new object.',
        example: null,
      }),
  })
  .openapi({
    required: ['associations', 'properties'],
    description:
      'Is the input object used to create a new CRM object, containing the properties to be set and optional associations to link the new record with other CRM objects.',
    example: null,
  })
  .openapi('SimplePublicObjectInputForCreate')

const BatchInputSimplePublicObjectBatchInputForCreateSchema = z
  .object({
    inputs: z.array(SimplePublicObjectBatchInputForCreateSchema).openapi({ example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputSimplePublicObjectBatchInputForCreate')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {
        'crm.objects.appointments.read': 'Read appointments',
        'crm.objects.appointments.sensitive.read.v2': 'Read appointments (sensitive)',
        'crm.objects.appointments.sensitive.write.v2': 'Write appointments (sensitive)',
        'crm.objects.appointments.write': 'Write appointments',
        'crm.objects.carts.read': 'Read carts',
        'crm.objects.carts.write': 'Write cart',
        'crm.objects.commercepayments.read': 'Read commerce payments',
        'crm.objects.commercepayments.write': 'Write commerce payments',
        'crm.objects.companies.highly_sensitive.read.v2': 'View company records (highly-sensitive)',
        'crm.objects.companies.highly_sensitive.write.v2':
          'Change company records (highly-sensitive)',
        'crm.objects.companies.read': 'Create or update company records',
        'crm.objects.companies.sensitive.read.v2': 'View sensitive properties on company records',
        'crm.objects.companies.sensitive.write.v2':
          'Create or update sensitive properties on company records',
        'crm.objects.companies.write': 'View company records',
        'crm.objects.contacts.highly_sensitive.read.v2': 'View contact records (highly-sensitive)',
        'crm.objects.contacts.highly_sensitive.write.v2':
          'Change contact records (highly-sensitive)',
        'crm.objects.contacts.read': 'View contact records',
        'crm.objects.contacts.sensitive.read.v2': 'View sensitive properties on contact records',
        'crm.objects.contacts.sensitive.write.v2':
          'Create or update sensitive properties on contact records',
        'crm.objects.contacts.write': 'Create or update contact records',
        'crm.objects.courses.read': 'Read courses',
        'crm.objects.courses.write': 'Write courses',
        'crm.objects.custom.highly_sensitive.read.v2':
          'View custom object records (highly-sensitive)',
        'crm.objects.custom.highly_sensitive.write.v2':
          'Change custom object records (highly-sensitive)',
        'crm.objects.custom.read': 'View custom object records',
        'crm.objects.custom.sensitive.read.v2': 'View custom object records (sensitive)',
        'crm.objects.custom.sensitive.write.v2': 'Change custom object records (sensitive)',
        'crm.objects.custom.write': 'Change custom object records',
        'crm.objects.deals.highly_sensitive.read.v2': 'View deal records (highly-sensitive)',
        'crm.objects.deals.highly_sensitive.write.v2': 'Change deal records (highly-sensitive)',
        'crm.objects.deals.read': 'View deal records',
        'crm.objects.deals.sensitive.read.v2': 'View sensitive properties on deal records',
        'crm.objects.deals.sensitive.write.v2':
          'Create or update sensitive properties on deal records',
        'crm.objects.deals.write': 'Create or update deal records',
        'crm.objects.goals.read': 'Read access to goals',
        'crm.objects.goals.write': 'Create and update goals',
        'crm.objects.invoices.read': 'Read invoices',
        'crm.objects.invoices.write': 'Write invoices',
        'crm.objects.leads.read': 'Read lead objects',
        'crm.objects.leads.write': 'Modify lead objects',
        'crm.objects.line_items.read': 'Line Items',
        'crm.objects.line_items.write': 'Line Items',
        'crm.objects.listings.read': 'Read listings',
        'crm.objects.listings.write': 'Write listings',
        'crm.objects.orders.read': 'Read Orders',
        'crm.objects.orders.write': 'Write orders',
        'crm.objects.partner-clients.read': 'View Partner Client CRM objects',
        'crm.objects.partner-clients.write': 'Edit Partner Client CRM objects',
        'crm.objects.partner-services.read': 'View Partner Service CRM objects',
        'crm.objects.partner-services.write': 'Edit Partner Service CRM objects',
        'crm.objects.products.read': 'Read products in Products Library',
        'crm.objects.products.write': 'Write products in Products Library',
        'crm.objects.projects.highly_sensitive.read': 'Read projects (highly-sensitive)',
        'crm.objects.projects.highly_sensitive.write': 'Write projects (highly-sensitive)',
        'crm.objects.projects.read': 'Read projects',
        'crm.objects.projects.sensitive.read': 'Read projects (sensitive)',
        'crm.objects.projects.sensitive.write': 'Write projects (sensitive)',
        'crm.objects.projects.write': 'Write projects',
        'crm.objects.quotes.read': 'Quotes',
        'crm.objects.quotes.write': 'Quotes',
        'crm.objects.services.read': 'Read services',
        'crm.objects.services.write': 'Write services',
        'crm.objects.subscriptions.read': 'Read Commerce Subscriptions',
        'crm.objects.subscriptions.write': 'Write subscriptions',
        'crm.objects.users.read': 'Read User CRM objects',
        'crm.objects.users.write': 'Write User CRM objects',
        'e-commerce': 'Access to ecommerce',
        'media_bridge.read': 'Read media and media events',
        oauth: 'Basic HubSpot account information',
        tickets: 'Tickets',
        'tickets.highly_sensitive.v2': 'Tickets (highly-sensitive)',
        'tickets.sensitive.v2': 'Tickets (sensitive)',
      },
    },
  },
}

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

export const getCrmObjects202609ObjectTypeRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/{objectType}',
  tags: ['Basic'],
  summary: 'List',
  description:
    'Read a page of appointments. Control what is returned via the `properties` query param.',
  operationId: 'get-/crm/objects/2026-09/{objectType}_/crm/objects/2026-03/{objectType}',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
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
      archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
      associations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'associations',
            in: 'query',
            description:
              'A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
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
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null, default: 10 },
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
            description:
              'A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      propertiesWithHistory: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'propertiesWithHistory',
            in: 'query',
            description:
              'A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of appointments that can be read by a single request.',
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
          schema: CollectionResponseSimplePublicObjectWithAssociationsForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const postCrmObjects202609ObjectTypeRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/{objectType}',
  tags: ['Basic'],
  summary: 'Create',
  description:
    'Create a appointment with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard appointments is provided.',
  operationId: 'post-/crm/objects/2026-09/{objectType}_/crm/objects/2026-03/{objectType}',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: SimplePublicObjectInputForCreateSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: SimplePublicObjectSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const postCrmObjects202609ObjectTypeBatchArchiveRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/{objectType}/batch/archive',
  tags: ['Batch'],
  summary: 'Archive a batch of appointments by ID',
  description: 'Batch delete appointments with a single request.',
  operationId:
    'post-/crm/objects/2026-09/{objectType}/batch/archive_/crm/objects/2026-03/{objectType}/batch/archive',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
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
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const postCrmObjects202609ObjectTypeBatchCreateRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/{objectType}/batch/create',
  tags: ['Batch'],
  summary: 'Create a batch of appointments',
  description: 'Create multiple appointments in a single request.',
  operationId:
    'post-/crm/objects/2026-09/{objectType}/batch/create_/crm/objects/2026-03/{objectType}/batch/create',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BatchInputSimplePublicObjectBatchInputForCreateSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseSimplePublicObjectSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const postCrmObjects202609ObjectTypeBatchReadRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/{objectType}/batch/read',
  tags: ['Batch'],
  summary: 'Read a batch of appointments by internal ID, or unique property values',
  description:
    'Retrieve records by record ID or include the `idProperty` parameter to retrieve records by a custom unique value property. ',
  operationId:
    'post-/crm/objects/2026-09/{objectType}/batch/read_/crm/objects/2026-03/{objectType}/batch/read',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BatchReadInputSimplePublicObjectIdSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseSimplePublicObjectSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const postCrmObjects202609ObjectTypeBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/{objectType}/batch/update',
  tags: ['Batch'],
  summary: 'Update a batch of appointments by internal ID, or unique property values',
  description: 'Batch update multiple appointments with a single request.',
  operationId:
    'post-/crm/objects/2026-09/{objectType}/batch/update_/crm/objects/2026-03/{objectType}/batch/update',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BatchInputSimplePublicObjectBatchInputSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseSimplePublicObjectSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const postCrmObjects202609ObjectTypeBatchUpsertRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/{objectType}/batch/upsert',
  tags: ['Batch'],
  summary: 'Create or update a batch of appointments by unique property values',
  description:
    'Create or update records identified by a unique property value as specified by the `idProperty` query param. `idProperty` query param refers to a property whose values are unique for the object.',
  operationId:
    'post-/crm/objects/2026-09/{objectType}/batch/upsert_/crm/objects/2026-03/{objectType}/batch/upsert',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BatchInputSimplePublicObjectBatchInputUpsertSchema,
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
        'application/json': { schema: BatchResponseSimplePublicUpsertObjectSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const postCrmObjects202609ObjectTypeMergeRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/{objectType}/merge',
  tags: ['Advanced'],
  summary: 'Merge two appointments',
  description:
    'Merge two appointment records. [Learn more about merging records](https://knowledge.hubspot.com/records/restore-deleted-activity-in-a-record).',
  operationId:
    'post-/crm/objects/2026-09/{objectType}/merge_/crm/objects/2026-03/{objectType}/merge',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicMergeInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SimplePublicObjectSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const postCrmObjects202609ObjectTypeSearchRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/{objectType}/search',
  tags: ['Search'],
  summary: 'Search for appointments',
  description:
    'Search for appointments by filtering on properties, searching through associations, and sorting results. Learn more about [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).',
  operationId:
    'post-/crm/objects/2026-09/{objectType}/search_/crm/objects/2026-03/{objectType}/search',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicObjectSearchRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalSimplePublicObjectSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const getCrmObjects202609ObjectTypeObjectIdRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/{objectType}/{objectId}',
  tags: ['Basic'],
  summary: 'Read',
  description:
    'Read an Object identified by `{appointmentId}`. `{appointmentId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.',
  operationId:
    'get-/crm/objects/2026-09/{objectType}/{objectId}_/crm/objects/2026-03/{objectType}/{objectId}',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'ID of the object',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
      associations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'associations',
            in: 'query',
            description:
              'A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      idProperty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'idProperty',
            in: 'query',
            description: 'The name of a property whose values are unique for this object',
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
            description:
              'A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      propertiesWithHistory: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'propertiesWithHistory',
            in: 'query',
            description:
              'A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.',
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
        'application/json': { schema: SimplePublicObjectWithAssociationsSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const deleteCrmObjects202609ObjectTypeObjectIdRoute = createRoute({
  method: 'delete',
  path: '/crm/objects/2026-09/{objectType}/{objectId}',
  tags: ['Basic'],
  summary: 'Archive',
  description: 'Move an Object identified by `{appointmentId}` to the recycling bin.',
  operationId:
    'delete-/crm/objects/2026-09/{objectType}/{objectId}_/crm/objects/2026-03/{objectType}/{objectId}',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'ID of the object',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
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
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})

export const patchCrmObjects202609ObjectTypeObjectIdRoute = createRoute({
  method: 'patch',
  path: '/crm/objects/2026-09/{objectType}/{objectId}',
  tags: ['Basic'],
  summary: 'Update',
  description:
    'Perform a partial update of an Object identified by `{appointmentId}`or optionally a unique property value as specified by the `idProperty` query param. `{appointmentId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object. Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.',
  operationId:
    'patch-/crm/objects/2026-09/{objectType}/{objectId}_/crm/objects/2026-03/{objectType}/{objectId}',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The ID of the appointment.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'objectTypeId of object type',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      idProperty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'idProperty',
            in: 'query',
            description: 'The name of a property whose values are unique for this object',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: SimplePublicObjectInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SimplePublicObjectSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['oauth'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.products.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.listings.write'] },
    { private_apps: ['crm.objects.custom.read'] },
    { private_apps: ['crm.objects.deals.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.deals.sensitive.write'] },
    { private_apps: ['crm.objects.companies.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read.v2'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.commercepayments.write'] },
    { private_apps: ['tickets.highly_sensitive'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.partner-services.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write'] },
    { private_apps: ['crm.objects.deals.sensitive.read'] },
    { private_apps: ['crm.objects.partner-services.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write'] },
    { private_apps: ['tickets'] },
    { private_apps: ['crm.objects.deals.sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write'] },
    { private_apps: ['tickets.sensitive'] },
    { private_apps: ['crm.objects.commercepayments.read'] },
    { private_apps: ['crm.objects.appointments.sensitive.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.sensitive.write'] },
    { private_apps: ['tickets.sensitive.v2'] },
    { private_apps: ['e-commerce'] },
    { private_apps: ['crm.objects.deals.write'] },
    { private_apps: ['crm.objects.appointments.read'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.read'] },
    { private_apps: ['crm.objects.projects.highly_sensitive.read'] },
    { private_apps: ['crm.objects.leads.write'] },
    { private_apps: ['tickets.highly_sensitive.v2'] },
    { private_apps: ['crm.objects.quotes.write'] },
    { private_apps: ['crm.objects.projects.sensitive.read'] },
    { private_apps: ['crm.objects.goals.write'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.read'] },
    { private_apps: ['crm.objects.courses.write'] },
    { private_apps: ['crm.objects.partner-clients.write'] },
    { private_apps: ['crm.objects.line_items.read'] },
    { private_apps: ['crm.objects.companies.sensitive.write.v2'] },
    { private_apps: ['crm.objects.projects.read'] },
    { private_apps: ['media_bridge.read'] },
    { private_apps: ['crm.objects.line_items.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read.v2'] },
    { private_apps: ['crm.objects.custom.sensitive.write'] },
    { private_apps: ['crm.objects.contacts.sensitive.read'] },
    { private_apps: ['crm.objects.carts.read'] },
    { private_apps: ['crm.objects.partner-clients.read'] },
    { private_apps: ['crm.objects.quotes.read'] },
    { private_apps: ['crm.objects.services.read'] },
    { private_apps: ['crm.objects.orders.read'] },
    { private_apps: ['crm.objects.appointments.write'] },
    { private_apps: ['crm.objects.subscriptions.read'] },
    { private_apps: ['crm.objects.contacts.sensitive.write'] },
    { private_apps: ['crm.objects.companies.sensitive.read.v2'] },
    { private_apps: ['crm.objects.companies.read'] },
    { private_apps: ['crm.objects.companies.sensitive.read'] },
    { private_apps: ['crm.objects.custom.sensitive.write.v2'] },
    { private_apps: ['crm.objects.users.write'] },
    { private_apps: ['crm.objects.invoices.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.read'] },
    { private_apps: ['crm.objects.carts.write'] },
    { private_apps: ['crm.objects.orders.write'] },
    { private_apps: ['crm.objects.services.write'] },
    { private_apps: ['crm.objects.subscriptions.write'] },
    { private_apps: ['crm.objects.contacts.read'] },
    { private_apps: ['crm.objects.custom.write'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.products.write'] },
    { private_apps: ['crm.objects.appointments.sensitive.write.v2'] },
    { private_apps: ['crm.objects.invoices.read'] },
    { private_apps: ['oauth'] },
    { private_apps: ['crm.objects.deals.sensitive.read.v2'] },
    { private_apps: ['crm.objects.projects.sensitive.write'] },
    { private_apps: ['crm.objects.projects.write'] },
    { private_apps: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { private_apps: ['crm.objects.goals.read'] },
    { private_apps: ['crm.objects.contacts.write'] },
    { private_apps: ['crm.objects.leads.read'] },
    { private_apps: ['crm.objects.custom.sensitive.read'] },
    { private_apps: ['crm.objects.contacts.highly_sensitive.write'] },
    { private_apps: ['crm.objects.products.read'] },
    { private_apps: ['crm.objects.listings.read'] },
    { private_apps: ['crm.objects.courses.read'] },
    { private_apps: ['crm.objects.deals.highly_sensitive.write'] },
    { private_apps_legacy: ['contacts'] },
  ],
})
