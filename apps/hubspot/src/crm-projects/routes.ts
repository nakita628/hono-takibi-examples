import { createRoute, z } from '@hono/zod-openapi'

const AssociatedIdSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the associated object.',
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
          "A string indicating the category of the association. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.",
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
          "A string representing the category of the association. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.",
        example: null,
      }),
    fromObjectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the object type ID from which the association originates.',
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing an optional label for the association.',
        example: null,
      }),
    toObjectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the object type ID to which the association is directed.',
        example: null,
      }),
    typeId: z
      .int32()
      .openapi({
        description: 'An integer representing the unique identifier for the type of association.',
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
        description: 'A string representing the unique identifier of the object.',
        example: null,
      }),
    idProperty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string indicating the name of a property whose values are unique for this object type.',
        example: 'my_unique_property_name',
      }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that serves as a trace identifier for the object write operation.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs where keys are property names and values are the corresponding property values. Each value is expected to be a string.',
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
          "An array of SimplePublicObjectBatchInput items, each representing a single object to be updated. Each item includes the object's properties and optional metadata.",
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
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the object, represented as a string.',
        example: null,
      }),
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
          'An array of association specifications, each defining the type of association between the source and target objects. Each item in the array is an AssociationSpec object.',
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
          'An array of associations for the objects being created, where each association specifies the related object and the type of association.',
        example: null,
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
          'An object containing key-value pairs where keys are property names and values are the property values for the CRM objects being created.',
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
          'An array of SimplePublicObjectBatchInputForCreate objects, each containing the properties and associations needed to create a CRM object.',
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
        description: 'A string representing the unique identifier of the object to be upserted.',
        example: null,
      }),
    idProperty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string indicating the name of the property whose values are unique for this object type.',
        example: null,
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
          'An array of SimplePublicObjectBatchInputUpsert objects, each containing the properties and identifiers for a CRM object to be created or updated. This array is required.',
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
    id: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the object.',
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
          'An array of SimplePublicObjectId objects, each containing an ID of a CRM object to be processed. This property is required.',
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
          'A string representing the name of a property whose values are unique for the object type. This property is used to identify objects uniquely.',
        example: null,
      }),
    inputs: z
      .array(SimplePublicObjectIdSchema)
      .openapi({
        description:
          'An array of SimplePublicObjectId objects, each representing an object to be read in the batch operation.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties to be returned for each object in the batch. If a specified property is not present on an object, it will be ignored.',
        example: null,
      }),
    propertiesWithHistory: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties to be returned along with their history of previous values for each object in the batch. If a specified property is not present on an object, it will be ignored.',
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
      .openapi({ description: 'A string specifying the category of the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error, where each key is a context name and the value is an array of strings.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects, each providing further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique identifier for the error.',
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
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of errors encountered during the batch operation, each providing details about the error.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing additional information about the batch operation.',
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
      .array(PublicDefaultAssociationSchema)
      .openapi({
        description:
          'An array of results from the batch operation, each representing a default association between CRM objects.',
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
          'A string representing the identifier of the source from which the value was obtained.',
        example: null,
      }),
    sourceLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a label or name for the source of the value.',
        example: null,
      }),
    sourceType: z
      .string()
      .openapi({
        description: 'A string specifying the type of source from which the value was obtained.',
        example: null,
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'A string in date-time format indicating when the value was recorded.',
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
        description: 'A string representing the value of the property at the given timestamp.',
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
      .openapi({
        description: 'A string representing the category of the warning.',
        example: null,
      }),
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
        description: 'A string used to trace the write operations for this object.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of property names to their values for this object, where each value is a string.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of property names to arrays of their historical values, where each historical value includes a timestamp and the value at that time.',
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
          'An array of warnings related to this object, where each warning includes a category, message, and context.',
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
          'A map of link names to associated URIs for additional information related to the batch operation.',
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
        description:
          'An array of errors encountered during the batch operation, each represented as a StandardError.',
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
          'An array of results from the batch operation, each represented as a SimplePublicObject.',
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
        description: 'A boolean indicating whether the object is archived.',
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
        description: 'A string used to trace the write operations for this object.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'A map of property names to their values, where each property is a string.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing property names mapped to arrays of their historical values, each represented by a ValueWithTimestamp object.',
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
          'A map of link names to associated URIs, providing additional context or actions related to the batch operation.',
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
          'An array of results from the batch upsert operation, each represented as a SimplePublicUpsertObject.',
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
          'An array of StandardError items detailing any errors that occurred during the batch operation.',
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
          'An array of SimplePublicUpsertObject items representing the results of the upsert operation.',
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
        description: 'A string representing the URL link to the next page of results.',
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
          'A string token used to identify the position before the current page in the pagination sequence.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL string that provides a direct link to the previous page of results.',
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

const CollectionResponseAssociatedIdSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(AssociatedIdSchema)
      .openapi({
        description:
          'An array of associated IDs, each represented by an object containing the ID and type. This property is required.',
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
          'An array of association specifications, each including a label. These define the types of associations between the objects.',
        example: null,
      }),
    toObjectId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the object to which associations are being made. It is a string.',
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
          'An array of objects, each containing multiple associations and their respective labels. Each object includes the associated object ID and the types of associations with labels.',
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
          'A map of associated object types to their associated IDs, providing links to related objects.',
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
      .openapi({ description: 'The unique identifier for this CRM object.', example: null }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string used to trace the write operations for this object.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'A map of property names to their current values for this object.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of property names to their values, including a history of changes with timestamps.',
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
      .openapi({ description: 'The URL for accessing this object.', example: null }),
    warnings: z
      .array(PublicObjectWarningSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of warnings associated with this object, detailing any issues or considerations.',
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
          'An array of SimplePublicObjectWithAssociations, representing the CRM objects retrieved in the current page.',
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
          'An array of SimplePublicObject items, each representing a public object with its properties.',
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
        description: 'An optional upper bound value used in range-based filters. It is a string.',
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
          "The operator that defines the type of comparison to be made. Valid values include 'EQ', 'NEQ', 'LT', 'LTE', 'GT', 'GTE', 'BETWEEN', 'IN', 'NOT_IN', 'HAS_PROPERTY', 'NOT_HAS_PROPERTY', 'CONTAINS_TOKEN', and 'NOT_CONTAINS_TOKEN'.",
        example: null,
      }),
    propertyName: z
      .string()
      .openapi({
        description: 'The name of the property to apply the filter on. It is a string.',
        example: null,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The specific value to compare against the property. It is a string.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          "An array of string values used for filters that operate on multiple values, such as 'IN' or 'NOT_IN'.",
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
          'An array of filter objects. Each filter specifies a condition to be applied in the search query. This property is required.',
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
      .openapi({
        description:
          'The unique identifier of the source object in the association. This is a string value.',
        example: null,
      }),
    fromObjectTypeId: z
      .string()
      .openapi({
        description:
          'The type identifier of the source object in the association. This is a string value.',
        example: null,
      }),
    labels: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the labels that describe the association between the two objects.',
        example: null,
      }),
    toObjectId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the target object in the association. This is a string value.',
        example: null,
      }),
    toObjectTypeId: z
      .string()
      .openapi({
        description:
          'The type identifier of the target object in the association. This is a string value.',
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
        description:
          'A string specifying the name of a property whose values are unique for this object type. It can be used to identify the contact by a property other than the object ID, such as an email address.',
        example: null,
      }),
    objectId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the object to be deleted. This is a required field.',
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
        description:
          'The unique identifier of the object that will be merged into the primary object. This is a string.',
        example: null,
      }),
    primaryObjectId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the primary object that will remain after the merge. This is a string.',
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
          'A string used as a paging cursor token to retrieve the next set of results in a paginated response.',
        example: null,
      }),
    filterGroups: z
      .array(FilterGroupSchema)
      .openapi({
        description:
          'An array of filter groups used to specify the criteria for searching objects. Each filter group contains filters that define the conditions objects must meet.',
        example: null,
      }),
    limit: z
      .int32()
      .openapi({
        description: 'An integer specifying the maximum number of results to return.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings indicating which properties of the objects should be included in the search results.',
        example: null,
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the search query to be applied to the objects.',
        example: null,
      }),
    sorts: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties by which the search results should be sorted.',
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
          "An object containing key-value pairs where each key is a property name and the value is the property's value. All properties are represented as strings.",
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
          "An array of objects that define the associations between the new CRM object and other existing objects. Each association is specified by a 'PublicAssociationsForObject' object.",
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs where keys are property names and values are the corresponding property values for the CRM object. Each property is a string.',
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

export const getCrmObjects202609ProjectsRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/projects',
  tags: ['Basic'],
  summary: 'List',
  description:
    'Read a page of CRM objects of a specified type. You can control the data returned by specifying the properties you want to include in the response. This endpoint supports pagination and allows you to retrieve associated object IDs and archived records.',
  operationId: 'get-/crm/objects/2026-09/projects_/crm/objects/2026-09-beta/{objectType}',
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

export const postCrmObjects202609ProjectsRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/projects',
  tags: ['Basic'],
  summary: 'Create',
  description:
    'Create a CRM object with the specified properties and receive a copy of the object, including its ID. This endpoint allows for the creation of standard objects, with documentation and examples provided to assist in the process.',
  operationId: 'post-/crm/objects/2026-09/projects_/crm/objects/2026-09-beta/{objectType}',
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

export const postCrmObjects202609ProjectsBatchArchiveRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/projects/batch/archive',
  tags: ['Batch'],
  summary: 'Batch archive objects',
  description:
    'Archive a batch of CRM objects by their IDs. This operation moves the specified objects to the recycling bin, effectively archiving them. Use this endpoint to manage large sets of objects that need to be archived simultaneously.',
  operationId:
    'post-/crm/objects/2026-09/projects/batch/archive_/crm/objects/2026-09-beta/{objectType}/batch/archive',
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

export const postCrmObjects202609ProjectsBatchCreateRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/projects/batch/create',
  tags: ['Batch'],
  summary: 'Batch create objects',
  description:
    'Create a batch of CRM objects with specified properties in HubSpot. This endpoint allows you to create multiple objects in a single request, making it efficient for bulk operations. The response includes the created objects along with their IDs. Use this endpoint to streamline the creation of large datasets within your CRM.',
  operationId:
    'post-/crm/objects/2026-09/projects/batch/create_/crm/objects/2026-09-beta/{objectType}/batch/create',
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

export const postCrmObjects202609ProjectsBatchReadRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/projects/batch/read',
  tags: ['Batch'],
  summary: 'Batch read objects',
  description:
    'Read a batch of CRM objects by their internal IDs or unique property values. This endpoint allows you to retrieve multiple objects in a single request, which is useful for efficiently gathering data on a set of objects. You can specify whether to include archived objects in the results.',
  operationId:
    'post-/crm/objects/2026-09/projects/batch/read_/crm/objects/2026-09-beta/{objectType}/batch/read',
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

export const postCrmObjects202609ProjectsBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/projects/batch/update',
  tags: ['Batch'],
  summary: 'Update batch objects',
  description:
    'Update a batch of CRM objects in your HubSpot account. This endpoint allows you to modify multiple objects at once by providing their details in the request body. It is useful for bulk updates where you need to change properties for several objects simultaneously. The response will include the status of each update operation.',
  operationId:
    'post-/crm/objects/2026-09/projects/batch/update_/crm/objects/2026-09-beta/{objectType}/batch/update',
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

export const postCrmObjects202609ProjectsBatchUpsertRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/projects/batch/upsert',
  tags: ['Batch'],
  summary: 'Upsert batch objects',
  description:
    'Create or update a batch of CRM objects by their unique property values. This endpoint allows for efficient management of multiple objects in a single request, ensuring that each object is either created or updated based on the provided unique identifiers.',
  operationId:
    'post-/crm/objects/2026-09/projects/batch/upsert_/crm/objects/2026-09-beta/{objectType}/batch/upsert',
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

export const postCrmObjects202609ProjectsMergeRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/projects/merge',
  tags: ['Advanced'],
  summary: 'Merge objects',
  description:
    "Merge two CRM objects of the same type in your HubSpot account. This operation combines the properties of the specified objects into a single object, retaining the primary object's ID. Use this endpoint to consolidate duplicate records or unify data under a single object.",
  operationId:
    'post-/crm/objects/2026-09/projects/merge_/crm/objects/2026-09-beta/{objectType}/merge',
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

export const postCrmObjects202609ProjectsSearchRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/projects/search',
  tags: ['Search'],
  summary: 'Search',
  description:
    'Search for CRM objects of a specified type using various filters and criteria. This endpoint allows you to perform complex queries to find objects that match specific conditions. It returns a collection of objects that meet the search criteria, along with the total count of results.',
  operationId:
    'post-/crm/objects/2026-09/projects/search_/crm/objects/2026-09-beta/{objectType}/search',
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

export const getCrmObjects202609ProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/projects/{projectId}',
  tags: ['Basic'],
  summary: 'Read',
  description:
    'Read an Object identified by `{objectId}`. `{objectId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Control what is returned via the `properties` query param.',
  operationId:
    'get-/crm/objects/2026-09/projects/{projectId}_/crm/objects/2026-09-beta/{objectType}/{objectId}',
  request: {
    params: z.object({
      projectId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'projectId',
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

export const deleteCrmObjects202609ProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/crm/objects/2026-09/projects/{projectId}',
  tags: ['Basic'],
  summary: 'Archive',
  description:
    'Move an Object identified by `{objectId}` to the recycling bin. This operation allows you to archive a specific CRM object, effectively removing it from active use while retaining it in the system for potential recovery or auditing purposes.',
  operationId:
    'delete-/crm/objects/2026-09/projects/{projectId}_/crm/objects/2026-09-beta/{objectType}/{objectId}',
  request: {
    params: z.object({
      projectId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'projectId',
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

export const patchCrmObjects202609ProjectsProjectIdRoute = createRoute({
  method: 'patch',
  path: '/crm/objects/2026-09/projects/{projectId}',
  tags: ['Basic'],
  summary: 'Update',
  description:
    'Perform a partial update of an Object identified by `{objectId}`. `{objectId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.',
  operationId:
    'patch-/crm/objects/2026-09/projects/{projectId}_/crm/objects/2026-09-beta/{objectType}/{objectId}',
  request: {
    params: z.object({
      projectId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'projectId',
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

export const getCrmObjects202609ProjectsProjectIdAssociationsToObjectTypeRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/projects/{projectId}/associations/{toObjectType}',
  tags: ['Basic'],
  summary: 'List associations',
  description:
    'List all associations of an object by object type. This endpoint allows you to retrieve associations between specified object types, with a limit of 500 associations per call. It is useful for understanding the relationships between different CRM objects in your HubSpot account.',
  operationId:
    'get-/crm/objects/2026-09/projects/{projectId}/associations/{toObjectType}_/crm/objects/2026-09-beta/{objectType}/{objectId}/associations/{toObjectType}',
  request: {
    params: z.object({
      projectId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'projectId',
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
            description: 'The type of the associated objects you want to retrieve.',
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
      'Create the default association type between two specified object types in HubSpot. This endpoint is useful for establishing a basic link between two CRM objects, allowing for more organized data management and relationship tracking.',
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
              description: 'The unique identifier of the source object.',
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
              description: 'The type of the source object for the association.',
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
              description: 'The unique identifier of the target object.',
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
              description: 'The type of the target object for the association.',
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

export const postCrmObjects202609ObjectTypeGdprDeleteRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/{objectType}/gdpr-delete',
  tags: ['Advanced'],
  summary: 'GDPR Delete',
  description:
    "Permanently delete a contact and all associated content to comply with GDPR regulations. This operation can identify a contact by email address using the optional 'idProperty' set to 'email'. If the email address is not found, it will be added to a blocklist to prevent future use.",
  operationId:
    'post-/crm/objects/2026-09/{objectType}/gdpr-delete_/crm/objects/2026-09-beta/{objectType}/gdpr-delete',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: "The type of CRM object to be deleted, such as 'contacts'.",
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
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

export const putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute =
  createRoute({
    method: 'put',
    path: '/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}',
    tags: ['Basic'],
    summary: 'Create association',
    description:
      'Set association labels between two records in the CRM. This endpoint allows you to define relationships between different object types by specifying association labels. It is useful for linking related records, such as associating a contact with a company or a deal with a contact.',
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
              description: 'The unique identifier of the source object.',
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
              description: 'The type of the source object for the association.',
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
              description: 'The unique identifier of the target object.',
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
              description: 'The type of the target object for the association.',
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
      'Delete all associations between two specified records in the CRM. This operation is useful for removing links between objects when they are no longer related or when cleaning up data.',
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
              description: 'The unique identifier of the first object involved in the association.',
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
              description: 'The type of the first object involved in the association.',
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
                'The unique identifier of the second object involved in the association.',
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
              description: 'The type of the second object involved in the association.',
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
