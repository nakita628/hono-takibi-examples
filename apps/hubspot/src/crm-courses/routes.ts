import { createRoute, z } from '@hono/zod-openapi'

const AssociatedIdSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the association.',
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description:
          'A string indicating the type of association, which categorizes the relationship between objects.',
        example: 'deal_to_contact',
      }),
  })
  .openapi({
    required: ['id', 'type'],
    description: 'Contains the id and type of an association',
    example: null,
  })
  .openapi('AssociatedId')

const AssociationSpecSchema = z
  .object({
    associationCategory: z
      .enum(['HUBSPOT_DEFINED', 'INTEGRATOR_DEFINED', 'USER_DEFINED', 'WORK'])
      .openapi({
        description:
          "The category of the association, indicating its origin or definition. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.",
        example: null,
      }),
    associationTypeId: z
      .int32()
      .openapi({
        description: 'An integer representing the unique identifier for the type of association.',
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

const AssociationSpecWithLabelSchema = z
  .object({
    category: z
      .enum(['HUBSPOT_DEFINED', 'INTEGRATOR_DEFINED', 'USER_DEFINED', 'WORK'])
      .openapi({
        description:
          'The category of the association, which can be HUBSPOT_DEFINED, USER_DEFINED, or INTEGRATOR_DEFINED.',
        example: null,
      }),
    fromObjectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The object type ID of the source object in the association.',
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable name for the association.', example: null }),
    toObjectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The object type ID of the target object in the association.',
        example: null,
      }),
    typeId: z
      .int32()
      .openapi({
        description: 'The unique identifier for the type of association.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'typeId'],
    description:
      'Defines the type, direction, and details of the relationship between two CRM objects.',
    example: null,
  })
  .openapi('AssociationSpecWithLabel')

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
      .openapi({
        description:
          'A string used to trace the write operation for debugging or logging purposes.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          "An object containing key-value pairs representing the properties of the CRM object. Each key is a property name, and the value is the property's value.",
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
  .object({
    inputs: z
      .array(SimplePublicObjectBatchInputSchema)
      .openapi({
        description:
          'An array of SimplePublicObjectBatchInput objects. Each object contains the properties and identifiers needed to update a CRM object.',
        example: null,
      }),
  })
  .openapi({
    required: ['inputs'],
    description:
      'Represents a batch input component used to handle multiple simple public objects in a single API request. This component is typically used when performing batch operations to create, update, or delete multiple records simultaneously.',
    example: null,
  })
  .openapi('BatchInputSimplePublicObjectBatchInput')

const PublicObjectIdSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the object.', example: null }),
  })
  .openapi({ required: ['id'], description: 'Contains the Id of a Public Object', example: null })
  .openapi('PublicObjectId')

const PublicAssociationsForObjectSchema = z
  .object({
    to: PublicObjectIdSchema,
    types: z
      .array(AssociationSpecSchema)
      .openapi({
        description:
          'An array of association specifications, each defining the category and type of association between the objects.',
        example: null,
      }),
  })
  .openapi({
    required: ['to', 'types'],
    description:
      'Represents the associations for a specific object in HubSpot, detailing the types of associations and the related objects involved.',
    example: null,
  })
  .openapi('PublicAssociationsForObject')

const SimplePublicObjectBatchInputForCreateSchema = z
  .object({
    associations: z
      .array(PublicAssociationsForObjectSchema)
      .openapi({
        description:
          'An array of associations to be created for the objects. Each association specifies the relationship between objects, using the PublicAssociationsForObject schema.',
        example: null,
      }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for tracing the creation request.',
        example: null,
      }),
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

const BatchInputSimplePublicObjectBatchInputForCreateSchema = z
  .object({
    inputs: z
      .array(SimplePublicObjectBatchInputForCreateSchema)
      .openapi({
        description:
          'An array of SimplePublicObjectBatchInputForCreate objects, each containing the properties and associations necessary to create a single CRM object.',
        example: null,
      }),
  })
  .openapi({
    required: ['inputs'],
    description:
      'Represents a batch input for creating multiple simple public objects in a single request. This component is used to streamline the process of adding new objects to a HubSpot account by allowing multiple entries to be created at once.',
    example: null,
  })
  .openapi('BatchInputSimplePublicObjectBatchInputForCreate')

const SimplePublicObjectBatchInputUpsertSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the CRM object.',
        example: null,
      }),
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
      .openapi({
        description: 'A string identifier used for tracing the write operation of the object.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs where keys are property names and values are the corresponding property values. These properties define the attributes of the CRM object.',
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
  .object({
    inputs: z
      .array(SimplePublicObjectBatchInputUpsertSchema)
      .openapi({
        description:
          'An array of objects, each representing a single CRM object to be upserted. Each object must conform to the SimplePublicObjectBatchInputUpsert schema.',
        example: null,
      }),
  })
  .openapi({
    required: ['inputs'],
    description:
      'Represents a batch input operation for upserting simple public objects in HubSpot. This component is used to process multiple upsert operations in a single request, improving efficiency and performance.',
    example: null,
  })
  .openapi('BatchInputSimplePublicObjectBatchInputUpsert')

const SimplePublicObjectIdSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique ID of the object.', example: '430001' }),
  })
  .openapi({ required: ['id'], description: 'Contains the Id of a Public Object', example: null })
  .openapi('SimplePublicObjectId')

const BatchInputSimplePublicObjectIdSchema = z
  .object({
    inputs: z
      .array(SimplePublicObjectIdSchema)
      .openapi({
        description:
          'An array of SimplePublicObjectId objects. Each object in the array contains the ID of a CRM object to be processed in the batch operation.',
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
    inputs: z
      .array(SimplePublicObjectIdSchema)
      .openapi({
        description:
          'An array of SimplePublicObjectId objects, each representing an object ID to be included in the batch read operation.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties to be returned in the response. If any specified properties are not present on the requested objects, they will be ignored.',
        example: null,
      }),
    propertiesWithHistory: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties to be returned along with their history of previous values. If any specified properties are not present on the requested objects, they will be ignored.',
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
      .openapi({ description: 'A string that categorizes the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error, with each property being an array of strings.',
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
        description: 'A string representing the unique identifier for this error.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to associated URIs that contain documentation about the error or recommended remediation steps.',
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
    description:
      'Represents a standard error response in the HubSpot API, providing detailed information about an error that occurred during an API request.',
    example: null,
  })
  .openapi('StandardError')

const PublicDefaultAssociationSchema = z
  .object({
    associationSpec: AssociationSpecSchema,
    from: PublicObjectIdSchema,
    to: PublicObjectIdSchema,
  })
  .openapi({
    required: ['associationSpec', 'from', 'to'],
    description:
      'The PublicDefaultAssociation component represents the default association configuration between two objects in HubSpot. It is used to define how objects are related to each other within the platform.',
    example: null,
  })
  .openapi('PublicDefaultAssociation')

const BatchResponsePublicDefaultAssociationSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the batch processing was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of StandardError objects detailing any errors that occurred during the batch operation.',
        example: null,
      }),
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
        description: 'The number of errors encountered during the batch processing.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the batch request was initially made, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(PublicDefaultAssociationSchema)
      .openapi({
        description:
          'An array of PublicDefaultAssociation objects representing the associations created or processed in the batch operation.',
        example: null,
      }),
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
          'The status of the batch processing request: "PENDING", "PROCESSING", "CANCELED", or "COMPLETE".',
        example: null,
      }),
  })
  .openapi({
    required: ['completedAt', 'results', 'startedAt', 'status'],
    description: 'The response returned after performing a batch operation on associations.',
    example: null,
  })
  .openapi('BatchResponsePublicDefaultAssociation')

const ValueWithTimestampSchema = z
  .object({
    sourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier of the source from which the value was obtained.',
        example: null,
      }),
    sourceLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a human-readable label for the source of the value.',
        example: null,
      }),
    sourceType: z
      .string()
      .openapi({
        description:
          'A string indicating the type of source from which the value was obtained. This property is required.',
        example: null,
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the value was recorded, in ISO 8601 format.',
        example: null,
      }),
    updatedByUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the ID of the user who last updated the value.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description:
          'The value associated with the timestamp. It is a string representing the data captured at a specific point in time.',
        example: null,
      }),
  })
  .openapi({
    required: ['sourceType', 'timestamp', 'value'],
    description: 'Property model that includes timestamp.',
    example: null,
  })
  .openapi('ValueWithTimestamp')

const PublicObjectWarningSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'A string indicating the category of the warning.', example: null }),
    context: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object providing additional context about the warning, with string properties.',
        example: null,
      }),
    message: z
      .string()
      .openapi({ description: 'A string containing the warning message.', example: null }),
  })
  .openapi({
    required: ['category', 'context', 'message'],
    description:
      'Represents a warning message related to a public object in HubSpot, providing details about the nature and context of the warning.',
    example: null,
  })
  .openapi('PublicObjectWarning')

const SimplePublicObjectSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this object is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this object was archived, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this object was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this object, represented as a string.',
        example: null,
      }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An identifier used for tracing the creation or update request of the object.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'A map of property names to their values, where each value is a string.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of property names to arrays of historical values, each containing a value and a timestamp.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this object was last updated, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the URL of this object.', example: null }),
    warnings: z
      .array(PublicObjectWarningSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of warnings related to this object, each containing a category, message, and context.',
        example: null,
      }),
  })
  .openapi({
    required: ['archived', 'createdAt', 'id', 'properties', 'updatedAt'],
    description: 'A simple public object.',
    example: null,
  })
  .openapi('SimplePublicObject')

const BatchResponseSimplePublicObjectSchema = z
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
          'A map of link names to associated URIs, providing additional information or actions related to the batch operation.',
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
      .array(SimplePublicObjectSchema)
      .openapi({
        description:
          'An array of SimplePublicObject items representing the results of the batch operation.',
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
  .openapi({
    required: ['completedAt', 'results', 'startedAt', 'status'],
    description: 'A public object batch response object',
    example: null,
  })
  .openapi('BatchResponseSimplePublicObject')

const BatchResponseSimplePublicObjectWithErrorsSchema = z
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
        description: 'An array of standard errors that occurred during the batch operation.',
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
      .array(SimplePublicObjectSchema)
      .openapi({
        description:
          'An array of simple public objects that were processed in the batch operation.',
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
  .openapi({
    required: ['completedAt', 'results', 'startedAt', 'status'],
    description:
      'Represents the result of a batch operation on CRM objects, including the processing status, batch results, timestamps, and a list of any errors encountered during the operation.',
    example: null,
  })
  .openapi('BatchResponseSimplePublicObjectWithErrors')

const SimplePublicUpsertObjectSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this object has been archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this object was archived, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this object was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this object, represented as a string.',
        example: null,
      }),
    new: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this object is newly created.',
        example: null,
      }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An identifier used for tracing the creation or update request of the object.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'A map of property names to their values, where each value is a string.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of property names to arrays of historical values, each containing a value and its associated timestamp.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this object was last updated, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of this object, represented as a string.', example: null }),
    warnings: z
      .array(PublicObjectWarningSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of warnings related to this object, each containing a category, message, and context.',
        example: null,
      }),
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
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
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
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch operation was requested, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(SimplePublicUpsertObjectSchema)
      .openapi({
        description:
          'An array of SimplePublicUpsertObject items, representing the individual results of the upsert operation for each object in the batch.',
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
  .openapi({
    required: ['completedAt', 'results', 'startedAt', 'status'],
    description:
      'Represents the result of a batch upsert operation, including the operation’s status, timestamps, and a list of successfully created or updated objects.',
    example: null,
  })
  .openapi('BatchResponseSimplePublicUpsertObject')

const BatchResponseSimplePublicUpsertObjectWithErrorsSchema = z
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
          'An array of StandardError objects, each detailing an error encountered during the batch operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing additional context or resources related to the batch operation.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of errors encountered during the batch operation.',
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
      .array(SimplePublicUpsertObjectSchema)
      .openapi({
        description:
          'An array of SimplePublicUpsertObject items, each representing the result of an individual upsert operation within the batch.',
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
  .openapi({
    required: ['completedAt', 'results', 'startedAt', 'status'],
    description:
      'Represents the response from a batch upsert operation, including the status, timestamps, successfully processed objects, and any errors that occurred during processing.',
    example: null,
  })
  .openapi('BatchResponseSimplePublicUpsertObjectWithErrors')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description: 'A string token used as a cursor to fetch the next page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL string that provides a direct link to the next page of results.',
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
        description: 'A string token used to retrieve the previous page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL link to the previous page of results.', example: null }),
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

const CollectionResponseAssociatedIdSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(AssociatedIdSchema)
      .openapi({
        description:
          'An array of associated IDs, each represented by an object that includes the ID and type of the association.',
        example: null,
      }),
  })
  .openapi({
    required: ['results'],
    description:
      'Represents a collection of associated IDs returned by an API request, including pagination details for navigating through the results.',
    example: null,
  })
  .openapi('CollectionResponseAssociatedId')

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({
    description:
      'Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.',
    example: null,
    required: [],
  })
  .openapi('ForwardPaging')

const MultiAssociatedObjectWithLabelSchema = z
  .object({
    associationTypes: z
      .array(AssociationSpecWithLabelSchema)
      .openapi({
        description:
          'An array of association specifications, each including a label and type information. This defines the types of associations between the objects.',
        example: null,
      }),
    toObjectId: z
      .string()
      .openapi({
        description: 'The ID of the object to which the associations are made.',
        example: null,
      }),
  })
  .openapi({
    required: ['associationTypes', 'toObjectId'],
    description:
      'Represents an object that is associated with multiple other objects, with optional context.',
    example: null,
  })
  .openapi('MultiAssociatedObjectWithLabel')

const CollectionResponseMultiAssociatedObjectWithLabelForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(MultiAssociatedObjectWithLabelSchema)
      .openapi({
        description:
          'An array of objects, each representing an association with multiple labels. Each object includes details about the associated object and its labels.',
        example: null,
      }),
  })
  .openapi({
    required: ['results'],
    description:
      'Represents a paginated collection of objects that are associated with multiple labels, including the results and pagination details. This component is used when retrieving associated objects with specific labels in a forward-paging manner.',
    example: null,
  })
  .openapi('CollectionResponseMultiAssociatedObjectWithLabelForwardPaging')

const SimplePublicObjectWithAssociationsSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this object is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this object was archived, in ISO 8601 format.',
        example: null,
      }),
    associations: z
      .record(z.string(), CollectionResponseAssociatedIdSchema)
      .exactOptional()
      .openapi({
        description:
          'A map of associated object types to their associated IDs, each represented by a CollectionResponseAssociatedId object.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this object was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this object, represented as a string.',
        example: null,
      }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An identifier used for tracing the write operations on the object.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of property names to their current values, where each value is a string.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of property names to arrays of their historical values, each represented by a ValueWithTimestamp object.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this object was last updated, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the URL of this object.', example: null }),
    warnings: z
      .array(PublicObjectWarningSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of warnings related to this object, each represented by a PublicObjectWarning object.',
        example: null,
      }),
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
    results: z
      .array(SimplePublicObjectWithAssociationsSchema)
      .openapi({
        description:
          'An array of SimplePublicObjectWithAssociations, each representing a CRM object with its properties and associated data.',
        example: null,
      }),
  })
  .openapi({
    required: ['results'],
    description:
      'Represents a paginated collection response that includes simple public objects with their associations. This component is used to handle the results and pagination details when retrieving a list of objects from the API.',
    example: null,
  })
  .openapi('CollectionResponseSimplePublicObjectWithAssociationsForwardPaging')

const CollectionResponseWithTotalSimplePublicObjectSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(SimplePublicObjectSchema)
      .openapi({
        description:
          'An array containing the simple public objects returned in the current response.',
        example: null,
      }),
    total: z.int32().openapi({ description: 'The number of available results', example: null }),
  })
  .openapi({
    required: ['results', 'total'],
    description:
      'Represents a list of simple objects returned from an API request, along with the total count of objects available.',
    example: null,
  })
  .openapi('CollectionResponseWithTotalSimplePublicObject')

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

const FilterSchema = z
  .object({
    highValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional string value used in range queries to specify the upper bound.',
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
      .openapi({
        description:
          "The operator used to compare the property and value(s). Valid operators include 'EQ', 'NEQ', 'LT', 'LTE', 'GT', 'GTE', 'BETWEEN', 'IN', 'NOT_IN', 'HAS_PROPERTY', 'NOT_HAS_PROPERTY', 'CONTAINS_TOKEN', and 'NOT_CONTAINS_TOKEN'.",
        example: null,
      }),
    propertyName: z
      .string()
      .openapi({
        description: 'The name of the property to filter on. This is a string value.',
        example: null,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The value to compare against the property specified. This is a string value.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          "An array of string values used for filters that require multiple values, such as 'IN' or 'NOT_IN' operators.",
        example: null,
      }),
  })
  .openapi({
    required: ['operator', 'propertyName'],
    description:
      'Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. ',
    example: null,
  })
  .openapi('Filter')

const FilterGroupSchema = z
  .object({
    filters: z
      .array(FilterSchema)
      .openapi({
        description:
          'An array of filter objects that define the criteria for the search. Each filter specifies a property, an operator, and a value to filter by.',
        example: null,
      }),
  })
  .openapi({
    required: ['filters'],
    description:
      'Represents a group of filters used to query data within HubSpot. This component is used to define criteria for filtering records in various API endpoints.',
    example: null,
  })
  .openapi('FilterGroup')

const LabelsBetweenObjectPairSchema = z
  .object({
    fromObjectId: z
      .string()
      .openapi({ description: 'The ID of the source object in the relationship.', example: null }),
    fromObjectTypeId: z
      .string()
      .openapi({
        description: 'The type ID of the source object in the relationship.',
        example: null,
      }),
    labels: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'A list of labels describing the relationship between the objects.',
        example: null,
      }),
    toObjectId: z
      .string()
      .openapi({ description: 'The ID of the target object in the relationship.', example: null }),
    toObjectTypeId: z
      .string()
      .openapi({
        description: 'The type ID of the target object in the relationship.',
        example: null,
      }),
  })
  .openapi({
    required: ['fromObjectId', 'fromObjectTypeId', 'labels', 'toObjectId', 'toObjectTypeId'],
    description: 'The relationship descriptors applicable between two object types.',
    example: null,
  })
  .openapi('LabelsBetweenObjectPair')

const PublicGdprDeleteInputSchema = z
  .object({
    idProperty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of a property whose values are unique for this object',
        example: null,
      }),
    objectId: z
      .string()
      .openapi({
        description: 'The unique identifier of the object to be deleted.',
        example: null,
      }),
  })
  .openapi({
    required: ['objectId'],
    description:
      'An input that contains the information required to process a public GDPR data deletion request.',
    example: null,
  })
  .openapi('PublicGdprDeleteInput')

const PublicMergeInputSchema = z
  .object({
    objectIdToMerge: z
      .string()
      .openapi({
        description: 'The ID of the object that will be merged into the primary object.',
        example: null,
      }),
    primaryObjectId: z
      .string()
      .openapi({
        description: 'The ID of the object that will remain after the merge.',
        example: null,
      }),
  })
  .openapi({
    required: ['objectIdToMerge', 'primaryObjectId'],
    description: 'Input data for merging two records.',
    example: null,
  })
  .openapi('PublicMergeInput')

const PublicObjectSearchRequestSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string representing the paging cursor token for pagination. It is used to retrieve the next set of results after the current page.',
        example: null,
      }),
    filterGroups: z
      .array(FilterGroupSchema)
      .openapi({
        description:
          'An array of filter groups used to define the search criteria. Each filter group contains filters that determine which CRM objects are included in the search results.',
        example: null,
      }),
    limit: z
      .int32()
      .openapi({
        description:
          'An integer indicating the maximum number of results to return per page. This property controls the pagination of the search results.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties of the CRM objects to be returned in the search results. If a specified property is not present on the objects, it will be ignored.',
        example: null,
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing a search query to filter the CRM objects. This is an optional field that can be used to perform a text-based search.',
        example: null,
      }),
    sorts: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the sorting order of the search results. Each string represents a property by which the results should be sorted.',
        example: null,
      }),
  })
  .openapi({
    required: ['after', 'filterGroups', 'limit', 'properties', 'sorts'],
    description: 'Describes a search request',
    example: null,
  })
  .openapi('PublicObjectSearchRequest')

const SimplePublicObjectInputSchema = z
  .object({
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of property names to their values, where each property is a string. This object contains the properties of the CRM object that need to be updated.',
        example: null,
      }),
  })
  .openapi({
    required: ['properties'],
    description:
      'Represents the input required to update a CRM object, containing an object with property names and their corresponding values.',
    example: null,
  })
  .openapi('SimplePublicObjectInput')

const SimplePublicObjectInputForCreateSchema = z
  .object({
    associations: z
      .array(PublicAssociationsForObjectSchema)
      .openapi({
        description:
          "An array of associations for the object, where each association specifies the related object and the types of associations. Each item in the array is a 'PublicAssociationsForObject' object.",
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          "An object containing key-value pairs representing the properties of the CRM object. Each key is a property name, and each value is the property's value, both represented as strings.",
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
        'crm.objects.appointments.read': '',
        'crm.objects.appointments.sensitive.read.v2': '',
        'crm.objects.appointments.sensitive.write.v2': '',
        'crm.objects.appointments.write': '',
        'crm.objects.calls.read': '',
        'crm.objects.carts.read': '',
        'crm.objects.carts.write': '',
        'crm.objects.commercepayments.read': '',
        'crm.objects.commercepayments.write': '',
        'crm.objects.companies.highly_sensitive.read.v2': '',
        'crm.objects.companies.highly_sensitive.write.v2': '',
        'crm.objects.companies.read': '',
        'crm.objects.companies.sensitive.read.v2': '',
        'crm.objects.companies.sensitive.write.v2': '',
        'crm.objects.companies.write': '',
        'crm.objects.contacts.highly_sensitive.read.v2': '',
        'crm.objects.contacts.highly_sensitive.write.v2': '',
        'crm.objects.contacts.read': '',
        'crm.objects.contacts.sensitive.read.v2': '',
        'crm.objects.contacts.sensitive.write.v2': '',
        'crm.objects.contacts.write': '',
        'crm.objects.courses.read': '',
        'crm.objects.courses.write': '',
        'crm.objects.custom.highly_sensitive.read.v2': '',
        'crm.objects.custom.highly_sensitive.write.v2': '',
        'crm.objects.custom.read': '',
        'crm.objects.custom.sensitive.read.v2': '',
        'crm.objects.custom.sensitive.write.v2': '',
        'crm.objects.custom.write': '',
        'crm.objects.deals.highly_sensitive.read.v2': '',
        'crm.objects.deals.highly_sensitive.write.v2': '',
        'crm.objects.deals.read': '',
        'crm.objects.deals.sensitive.read.v2': '',
        'crm.objects.deals.sensitive.write.v2': '',
        'crm.objects.deals.write': '',
        'crm.objects.emails.read': '',
        'crm.objects.feedback_submissions.read': '',
        'crm.objects.goals.read': '',
        'crm.objects.goals.write': '',
        'crm.objects.invoices.read': '',
        'crm.objects.invoices.write': '',
        'crm.objects.leads.read': '',
        'crm.objects.leads.write': '',
        'crm.objects.line_items.read': '',
        'crm.objects.line_items.write': '',
        'crm.objects.listings.read': '',
        'crm.objects.listings.write': '',
        'crm.objects.meetings.read': '',
        'crm.objects.notes.read': '',
        'crm.objects.orders.read': '',
        'crm.objects.orders.write': '',
        'crm.objects.partner-clients.read': '',
        'crm.objects.partner-clients.write': '',
        'crm.objects.partner-services.read': '',
        'crm.objects.partner-services.write': '',
        'crm.objects.products.read': '',
        'crm.objects.products.write': '',
        'crm.objects.projects.highly_sensitive.read': '',
        'crm.objects.projects.highly_sensitive.write': '',
        'crm.objects.projects.read': '',
        'crm.objects.projects.sensitive.read': '',
        'crm.objects.projects.sensitive.write': '',
        'crm.objects.projects.write': '',
        'crm.objects.quotes.read': '',
        'crm.objects.quotes.write': '',
        'crm.objects.services.read': '',
        'crm.objects.services.write': '',
        'crm.objects.subscriptions.read': '',
        'crm.objects.subscriptions.write': '',
        'crm.objects.tasks.read': '',
        'crm.objects.tickets.highly_sensitive.read': '',
        'crm.objects.tickets.highly_sensitive.write': '',
        'crm.objects.tickets.sensitive.read': '',
        'crm.objects.tickets.sensitive.write': '',
        'crm.objects.users.read': '',
        'crm.objects.users.write': '',
        'e-commerce': '',
        'media_bridge.read': '',
        'tickets.highly_sensitive.v2': '',
        'tickets.sensitive.v2': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmObjects2026090410Route = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/0-410',
  tags: ['Basic'],
  summary: 'List',
  description:
    'Read a page of CRM objects of a specified type. You can control the data returned by specifying which properties to include in the response. This endpoint supports pagination and allows you to retrieve associated object IDs and archived records.',
  operationId: 'get-/crm/objects/2026-09/0-410_/crm/objects/2026-09-beta/{objectType}',
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
              'A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.',
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
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const postCrmObjects2026090410Route = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/0-410',
  tags: ['Basic'],
  summary: 'Create',
  description:
    'Create a CRM object with the specified properties and receive a copy of the object, including its ID. This endpoint is useful for adding new objects to your CRM system and customizing them with specific properties.',
  operationId: 'post-/crm/objects/2026-09/0-410_/crm/objects/2026-09-beta/{objectType}',
  request: {
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
  security: [
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const postCrmObjects2026090410BatchArchiveRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/0-410/batch/archive',
  tags: ['Batch'],
  summary: 'Archive batch objects',
  description:
    'Archive a batch of CRM objects identified by their IDs. This operation is useful for managing large sets of objects that need to be archived simultaneously, streamlining data management processes.',
  operationId:
    'post-/crm/objects/2026-09/0-410/batch/archive_/crm/objects/2026-09-beta/{objectType}/batch/archive',
  request: {
    body: {
      content: {
        'application/json': { schema: BatchInputSimplePublicObjectIdSchema, example: null },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const postCrmObjects2026090410BatchCreateRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/0-410/batch/create',
  tags: ['Batch'],
  summary: 'Batch create objects',
  description:
    'Create a batch of CRM objects of a specified type in HubSpot. This endpoint allows for the creation of multiple objects in a single request, making it efficient for bulk operations. The response includes a copy of each created object, including their IDs. This is useful for initializing large sets of data or integrating external data sources with HubSpot.',
  operationId:
    'post-/crm/objects/2026-09/0-410/batch/create_/crm/objects/2026-09-beta/{objectType}/batch/create',
  request: {
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
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseSimplePublicObjectWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const postCrmObjects2026090410BatchReadRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/0-410/batch/read',
  tags: ['Batch'],
  summary: 'Read batch objects',
  description:
    'Retrieve a batch of CRM objects by their internal IDs or unique property values. This endpoint is useful for fetching multiple objects in a single request, allowing for efficient data retrieval. You can specify whether to include archived objects in the results.',
  operationId:
    'post-/crm/objects/2026-09/0-410/batch/read_/crm/objects/2026-09-beta/{objectType}/batch/read',
  request: {
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
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseSimplePublicObjectWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const postCrmObjects2026090410BatchUpdateRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/0-410/batch/update',
  tags: ['Batch'],
  summary: 'Update batch objects',
  description:
    'Update a batch of CRM objects in your HubSpot account. This endpoint allows you to modify multiple objects simultaneously by providing their details in the request body. It is useful for efficiently updating large sets of data, ensuring that all specified objects are updated in a single operation.',
  operationId:
    'post-/crm/objects/2026-09/0-410/batch/update_/crm/objects/2026-09-beta/{objectType}/batch/update',
  request: {
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
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseSimplePublicObjectWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const postCrmObjects2026090410BatchUpsertRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/0-410/batch/upsert',
  tags: ['Batch'],
  summary: 'Batch upsert objects',
  description:
    'Create or update a batch of CRM objects by unique property values. This endpoint allows you to efficiently manage multiple objects in a single request, ensuring that existing objects are updated and new objects are created as needed.',
  operationId:
    'post-/crm/objects/2026-09/0-410/batch/upsert_/crm/objects/2026-09-beta/{objectType}/batch/upsert',
  request: {
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
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseSimplePublicUpsertObjectWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const postCrmObjects2026090410SearchRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/0-410/search',
  tags: ['Search'],
  summary: 'Search',
  description:
    'Search for CRM objects of a specified type using various criteria. This endpoint allows you to filter and sort objects based on their properties, enabling efficient retrieval of relevant data. It is useful for finding specific records or analyzing data trends within your CRM.',
  operationId:
    'post-/crm/objects/2026-09/0-410/search_/crm/objects/2026-09-beta/{objectType}/search',
  request: {
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
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const getCrmObjects2026090410CourseIdRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/0-410/{courseId}',
  tags: ['Basic'],
  summary: 'Read',
  description:
    'Read an object identified by `objectId`. By default, `objectId` refers to the internal object ID, but it can also refer to any unique property value specified by the `idProperty` query parameter. You can control the response content using the `properties` query parameter to specify which properties to include.',
  operationId:
    'get-/crm/objects/2026-09/0-410/{courseId}_/crm/objects/2026-09-beta/{objectType}/{objectId}',
  request: {
    params: z.object({
      courseId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'courseId',
            in: 'path',
            required: true,
            schema: { pattern: '.+', type: 'string', example: null },
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
            description: 'The name of a property whose values are unique for this object type',
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
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const deleteCrmObjects2026090410CourseIdRoute = createRoute({
  method: 'delete',
  path: '/crm/objects/2026-09/0-410/{courseId}',
  tags: ['Basic'],
  summary: 'Archive',
  description:
    'Move an Object identified by `{objectId}` to the recycling bin. This operation allows you to archive a specific CRM object by its unique identifier, effectively removing it from active use while retaining it in the system for potential recovery or reference.',
  operationId:
    'delete-/crm/objects/2026-09/0-410/{courseId}_/crm/objects/2026-09-beta/{objectType}/{objectId}',
  request: {
    params: z.object({
      courseId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'courseId',
            in: 'path',
            required: true,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const patchCrmObjects2026090410CourseIdRoute = createRoute({
  method: 'patch',
  path: '/crm/objects/2026-09/0-410/{courseId}',
  tags: ['Basic'],
  summary: 'Update',
  description:
    "Perform a partial update of an object identified by `{objectId}`. By default, `{objectId}` refers to the internal object ID, but it can also refer to any unique property value specified by the `idProperty` query parameter. The provided property values will overwrite existing ones. Read-only and non-existent properties will be ignored. To clear a property's value, pass an empty string.",
  operationId:
    'patch-/crm/objects/2026-09/0-410/{courseId}_/crm/objects/2026-09-beta/{objectType}/{objectId}',
  request: {
    params: z.object({
      courseId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'courseId',
            in: 'path',
            required: true,
            schema: { pattern: '.+', type: 'string', example: null },
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
            description: 'The name of a property whose values are unique for this object type',
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
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const postCrmObjects202609CoursesGdprDeleteRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/courses/gdpr-delete',
  tags: ['Advanced'],
  summary: 'GDPR Delete',
  description:
    "Permanently delete a contact and all associated content in compliance with GDPR regulations. This endpoint allows you to specify the contact by email using the optional 'idProperty' set to 'email'. If the email address is not found, it will be added to a blocklist to prevent future use.",
  operationId:
    'post-/crm/objects/2026-09/courses/gdpr-delete_/crm/objects/2026-09-beta/{objectType}/gdpr-delete',
  request: {
    body: {
      content: { 'application/json': { schema: PublicGdprDeleteInputSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const postCrmObjects202609CoursesMergeRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/courses/merge',
  tags: ['Advanced'],
  summary: 'Merge objects',
  description:
    'Merge two CRM objects of the same type in your HubSpot account. This operation combines the properties of the specified objects, resulting in a single object with merged data. Use this endpoint to consolidate duplicate records or unify related data under a single object.',
  operationId:
    'post-/crm/objects/2026-09/courses/merge_/crm/objects/2026-09-beta/{objectType}/merge',
  request: {
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
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const getCrmObjects202609CoursesCourseIdAssociationsToObjectTypeRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/courses/{courseId}/associations/{toObjectType}',
  tags: ['Basic'],
  summary: 'List associations',
  description:
    'List all associations of an object by object type. This endpoint allows you to retrieve associations for a specified object, identified by its type and ID, and target object type. The maximum number of associations that can be retrieved per call is 500.',
  operationId:
    'get-/crm/objects/2026-09/courses/{courseId}/associations/{toObjectType}_/crm/objects/2026-09-beta/{objectType}/{objectId}/associations/{toObjectType}',
  request: {
    params: z.object({
      courseId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'courseId',
            in: 'path',
            required: true,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
      toObjectType: z
        .string()
        .openapi({
          param: {
            name: 'toObjectType',
            in: 'path',
            description:
              'The type of the target object for which associations are being retrieved.',
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
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null, default: 500 },
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
          schema: CollectionResponseMultiAssociatedObjectWithLabelForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.partner-services.read'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.objects.partner-services.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.commercepayments.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.partner-clients.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.partner-clients.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.listings.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.products.read'] },
  ],
})

export const putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute =
  createRoute({
    method: 'put',
    path: '/crm/objects/2026-09/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}',
    tags: ['Batch'],
    summary: 'Create Association',
    description:
      'Create the default association type between two specified object types in HubSpot. This endpoint allows you to establish a generic link between objects, which can be useful for organizing and managing related data within your CRM system.',
    operationId:
      'put-/crm/objects/2026-09/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-09-beta/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}',
    request: {
      params: z.object({
        fromObjectId: z
          .string()
          .openapi({
            param: {
              name: 'fromObjectId',
              in: 'path',
              description:
                'The unique identifier of the source object from which the association is being created.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        fromObjectType: z
          .string()
          .openapi({
            param: {
              name: 'fromObjectType',
              in: 'path',
              description:
                'The type of the source object from which the association is being created.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        toObjectId: z
          .string()
          .openapi({
            param: {
              name: 'toObjectId',
              in: 'path',
              description:
                'The unique identifier of the target object to which the association is being created.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        toObjectType: z
          .string()
          .openapi({
            param: {
              name: 'toObjectType',
              in: 'path',
              description:
                'The type of the target object to which the association is being created.',
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
        content: {
          'application/json': {
            schema: BatchResponsePublicDefaultAssociationSchema,
            example: null,
          },
        },
      },
      default: ErrorResponse,
    },
    security: [
      { oauth2: ['crm.objects.deals.read'] },
      { oauth2: ['crm.objects.subscriptions.read'] },
      { oauth2: ['crm.objects.services.read'] },
      { oauth2: ['crm.objects.tickets.sensitive.read'] },
      { oauth2: ['crm.objects.orders.read'] },
      { oauth2: ['crm.objects.listings.write'] },
      { oauth2: ['crm.objects.custom.read'] },
      { oauth2: ['crm.objects.companies.write'] },
      { oauth2: ['crm.objects.tasks.read'] },
      { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
      { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.companies.read'] },
      { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
      { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
      { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
      { oauth2: ['crm.objects.tickets.sensitive.write'] },
      { oauth2: ['media_bridge.read'] },
      { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.commercepayments.write'] },
      { oauth2: ['crm.objects.invoices.write'] },
      { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
      { oauth2: ['crm.objects.calls.read'] },
      { oauth2: ['crm.objects.users.write'] },
      { oauth2: ['crm.objects.meetings.read'] },
      { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
      { oauth2: ['crm.objects.users.read'] },
      { oauth2: ['crm.objects.partner-services.read'] },
      { oauth2: ['crm.objects.orders.write'] },
      { oauth2: ['crm.objects.partner-services.write'] },
      { oauth2: ['crm.objects.appointments.write'] },
      { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
      { oauth2: ['crm.objects.carts.write'] },
      { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
      { oauth2: ['crm.objects.commercepayments.read'] },
      { oauth2: ['crm.objects.products.write'] },
      { oauth2: ['crm.objects.feedback_submissions.read'] },
      { oauth2: ['crm.objects.services.write'] },
      { oauth2: ['crm.objects.subscriptions.write'] },
      { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
      { oauth2: ['crm.objects.contacts.read'] },
      { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
      { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
      { oauth2: ['crm.objects.invoices.read'] },
      { oauth2: ['crm.objects.custom.write'] },
      { oauth2: ['tickets.sensitive.v2'] },
      { oauth2: ['crm.objects.deals.write'] },
      { oauth2: ['e-commerce'] },
      { oauth2: ['crm.objects.appointments.read'] },
      { oauth2: ['crm.objects.projects.read'] },
      { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
      { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.goals.write'] },
      { oauth2: ['crm.objects.projects.sensitive.read'] },
      { oauth2: ['crm.objects.line_items.write'] },
      { oauth2: ['crm.objects.contacts.write'] },
      { oauth2: ['crm.objects.goals.read'] },
      { oauth2: ['crm.objects.line_items.read'] },
      { oauth2: ['crm.objects.partner-clients.write'] },
      { oauth2: ['crm.objects.projects.write'] },
      { oauth2: ['crm.objects.projects.sensitive.write'] },
      { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
      { oauth2: ['crm.objects.quotes.write'] },
      { oauth2: ['tickets.highly_sensitive.v2'] },
      { oauth2: ['crm.objects.leads.read'] },
      { oauth2: ['crm.objects.leads.write'] },
      { oauth2: ['crm.objects.carts.read'] },
      { oauth2: ['crm.objects.emails.read'] },
      { oauth2: ['crm.objects.quotes.read'] },
      { oauth2: ['crm.objects.courses.write'] },
      { oauth2: ['crm.objects.partner-clients.read'] },
      { oauth2: ['crm.objects.notes.read'] },
      { oauth2: ['crm.objects.courses.read'] },
      { oauth2: ['crm.objects.listings.read'] },
      { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
      { oauth2: ['crm.objects.products.read'] },
    ],
  })

export const putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute =
  createRoute({
    method: 'put',
    path: '/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}',
    tags: ['Basic'],
    summary: 'Create Association',
    description:
      'Set association labels between two records in the CRM. This endpoint allows you to specify labels for the association between two objects identified by their respective IDs. It is useful for organizing and managing relationships between different CRM objects.',
    operationId:
      'put-/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-09-beta/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}',
    request: {
      params: z.object({
        objectId: z
          .string()
          .openapi({
            param: {
              name: 'objectId',
              in: 'path',
              description: 'The unique identifier of the first object in the association.',
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
              description: 'The type of the first object in the association.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        toObjectId: z
          .string()
          .openapi({
            param: {
              name: 'toObjectId',
              in: 'path',
              description: 'The unique identifier of the second object in the association.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        toObjectType: z
          .string()
          .openapi({
            param: {
              name: 'toObjectType',
              in: 'path',
              description: 'The type of the second object in the association.',
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
            schema: z.array(AssociationSpecSchema).openapi({ example: null }),
            example: null,
          },
        },
        required: true,
      },
    },
    responses: {
      201: {
        description: 'successful operation',
        content: { 'application/json': { schema: LabelsBetweenObjectPairSchema, example: null } },
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
    security: [
      { oauth2: ['crm.objects.deals.read'] },
      { oauth2: ['crm.objects.subscriptions.read'] },
      { oauth2: ['crm.objects.services.read'] },
      { oauth2: ['crm.objects.tickets.sensitive.read'] },
      { oauth2: ['crm.objects.orders.read'] },
      { oauth2: ['crm.objects.listings.write'] },
      { oauth2: ['crm.objects.custom.read'] },
      { oauth2: ['crm.objects.companies.write'] },
      { oauth2: ['crm.objects.tasks.read'] },
      { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
      { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.companies.read'] },
      { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
      { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
      { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
      { oauth2: ['crm.objects.tickets.sensitive.write'] },
      { oauth2: ['media_bridge.read'] },
      { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.commercepayments.write'] },
      { oauth2: ['crm.objects.invoices.write'] },
      { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
      { oauth2: ['crm.objects.calls.read'] },
      { oauth2: ['crm.objects.users.write'] },
      { oauth2: ['crm.objects.meetings.read'] },
      { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
      { oauth2: ['crm.objects.users.read'] },
      { oauth2: ['crm.objects.partner-services.read'] },
      { oauth2: ['crm.objects.orders.write'] },
      { oauth2: ['crm.objects.partner-services.write'] },
      { oauth2: ['crm.objects.appointments.write'] },
      { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
      { oauth2: ['crm.objects.carts.write'] },
      { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
      { oauth2: ['crm.objects.commercepayments.read'] },
      { oauth2: ['crm.objects.products.write'] },
      { oauth2: ['crm.objects.feedback_submissions.read'] },
      { oauth2: ['crm.objects.services.write'] },
      { oauth2: ['crm.objects.subscriptions.write'] },
      { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
      { oauth2: ['crm.objects.contacts.read'] },
      { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
      { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
      { oauth2: ['crm.objects.invoices.read'] },
      { oauth2: ['crm.objects.custom.write'] },
      { oauth2: ['tickets.sensitive.v2'] },
      { oauth2: ['crm.objects.deals.write'] },
      { oauth2: ['e-commerce'] },
      { oauth2: ['crm.objects.appointments.read'] },
      { oauth2: ['crm.objects.projects.read'] },
      { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
      { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.goals.write'] },
      { oauth2: ['crm.objects.projects.sensitive.read'] },
      { oauth2: ['crm.objects.line_items.write'] },
      { oauth2: ['crm.objects.contacts.write'] },
      { oauth2: ['crm.objects.goals.read'] },
      { oauth2: ['crm.objects.line_items.read'] },
      { oauth2: ['crm.objects.partner-clients.write'] },
      { oauth2: ['crm.objects.projects.write'] },
      { oauth2: ['crm.objects.projects.sensitive.write'] },
      { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
      { oauth2: ['crm.objects.quotes.write'] },
      { oauth2: ['tickets.highly_sensitive.v2'] },
      { oauth2: ['crm.objects.leads.read'] },
      { oauth2: ['crm.objects.leads.write'] },
      { oauth2: ['crm.objects.carts.read'] },
      { oauth2: ['crm.objects.emails.read'] },
      { oauth2: ['crm.objects.quotes.read'] },
      { oauth2: ['crm.objects.courses.write'] },
      { oauth2: ['crm.objects.partner-clients.read'] },
      { oauth2: ['crm.objects.notes.read'] },
      { oauth2: ['crm.objects.courses.read'] },
      { oauth2: ['crm.objects.listings.read'] },
      { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
      { oauth2: ['crm.objects.products.read'] },
    ],
  })

export const deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute =
  createRoute({
    method: 'delete',
    path: '/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}',
    tags: ['Basic'],
    summary: 'Delete',
    description:
      'Delete all associations between two specified records in the CRM. This operation is useful for removing links between objects when they are no longer relevant or needed. It ensures that the associations between the specified object types and IDs are completely removed.',
    operationId:
      'delete-/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-09-beta/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}',
    request: {
      params: z.object({
        objectId: z
          .string()
          .openapi({
            param: {
              name: 'objectId',
              in: 'path',
              description:
                'The unique identifier of the initial object from which the association is being removed.',
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
              description:
                'The type of the initial object from which the association is being removed.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        toObjectId: z
          .string()
          .openapi({
            param: {
              name: 'toObjectId',
              in: 'path',
              description:
                'The unique identifier of the target object to which the association is being removed.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        toObjectType: z
          .string()
          .openapi({
            param: {
              name: 'toObjectType',
              in: 'path',
              description:
                'The type of the target object to which the association is being removed.',
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
      { oauth2: ['crm.objects.deals.read'] },
      { oauth2: ['crm.objects.subscriptions.read'] },
      { oauth2: ['crm.objects.services.read'] },
      { oauth2: ['crm.objects.tickets.sensitive.read'] },
      { oauth2: ['crm.objects.orders.read'] },
      { oauth2: ['crm.objects.listings.write'] },
      { oauth2: ['crm.objects.custom.read'] },
      { oauth2: ['crm.objects.companies.write'] },
      { oauth2: ['crm.objects.tasks.read'] },
      { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
      { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.companies.read'] },
      { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
      { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
      { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
      { oauth2: ['crm.objects.tickets.sensitive.write'] },
      { oauth2: ['media_bridge.read'] },
      { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.commercepayments.write'] },
      { oauth2: ['crm.objects.invoices.write'] },
      { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
      { oauth2: ['crm.objects.calls.read'] },
      { oauth2: ['crm.objects.users.write'] },
      { oauth2: ['crm.objects.meetings.read'] },
      { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
      { oauth2: ['crm.objects.users.read'] },
      { oauth2: ['crm.objects.partner-services.read'] },
      { oauth2: ['crm.objects.orders.write'] },
      { oauth2: ['crm.objects.partner-services.write'] },
      { oauth2: ['crm.objects.appointments.write'] },
      { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
      { oauth2: ['crm.objects.carts.write'] },
      { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
      { oauth2: ['crm.objects.commercepayments.read'] },
      { oauth2: ['crm.objects.products.write'] },
      { oauth2: ['crm.objects.feedback_submissions.read'] },
      { oauth2: ['crm.objects.services.write'] },
      { oauth2: ['crm.objects.subscriptions.write'] },
      { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
      { oauth2: ['crm.objects.contacts.read'] },
      { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
      { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
      { oauth2: ['crm.objects.invoices.read'] },
      { oauth2: ['crm.objects.custom.write'] },
      { oauth2: ['tickets.sensitive.v2'] },
      { oauth2: ['crm.objects.deals.write'] },
      { oauth2: ['e-commerce'] },
      { oauth2: ['crm.objects.appointments.read'] },
      { oauth2: ['crm.objects.projects.read'] },
      { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
      { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.goals.write'] },
      { oauth2: ['crm.objects.projects.sensitive.read'] },
      { oauth2: ['crm.objects.line_items.write'] },
      { oauth2: ['crm.objects.contacts.write'] },
      { oauth2: ['crm.objects.goals.read'] },
      { oauth2: ['crm.objects.line_items.read'] },
      { oauth2: ['crm.objects.partner-clients.write'] },
      { oauth2: ['crm.objects.projects.write'] },
      { oauth2: ['crm.objects.projects.sensitive.write'] },
      { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
      { oauth2: ['crm.objects.quotes.write'] },
      { oauth2: ['tickets.highly_sensitive.v2'] },
      { oauth2: ['crm.objects.leads.read'] },
      { oauth2: ['crm.objects.leads.write'] },
      { oauth2: ['crm.objects.carts.read'] },
      { oauth2: ['crm.objects.emails.read'] },
      { oauth2: ['crm.objects.quotes.read'] },
      { oauth2: ['crm.objects.courses.write'] },
      { oauth2: ['crm.objects.partner-clients.read'] },
      { oauth2: ['crm.objects.notes.read'] },
      { oauth2: ['crm.objects.courses.read'] },
      { oauth2: ['crm.objects.listings.read'] },
      { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
      { oauth2: ['crm.objects.products.read'] },
    ],
  })
