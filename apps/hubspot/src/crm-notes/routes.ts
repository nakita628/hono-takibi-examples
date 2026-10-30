import { createRoute, z } from '@hono/zod-openapi'

const AssociatedIdSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the associated object.',
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description: 'A string indicating the type of association for the object.',
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
          "A string representing the category of the association. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.",
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
          "The category of the association, indicating its origin or purpose. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.",
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
        description: 'A string label that can be used to describe or identify the association.',
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
          'A string identifier used to trace the write operation for the object, useful for debugging and tracking changes.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          "An object containing key-value pairs representing the properties of the CRM objects. Each key is a property name and the value is the property's value.",
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
          'An array of SimplePublicObjectBatchInput items, each containing the properties and identifiers for a single object to be updated.',
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
        description: 'The unique identifier for a public object, represented as a string.',
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
          'An array of association specifications, detailing the types of associations between the objects. Each item in the array is a reference to the AssociationSpec schema.',
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
          'An array of objects that define the associations between the CRM objects being created and other existing objects. Each association specifies the target object and the type of association.',
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
          'An object containing key-value pairs where keys are property names and values are property values for the CRM objects to be created.',
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
          'An array of objects, each representing a CRM object to be created. Each object must conform to the SimplePublicObjectBatchInputForCreate schema.',
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
        description:
          'A string representing the unique identifier of the object. This ID is used to identify the object within the batch operation.',
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
        description:
          'A string used to trace the write operation for debugging or tracking purposes.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs where keys are property names and values are the corresponding property values. These properties define the data for the CRM object.',
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
          'An array of SimplePublicObjectBatchInputUpsert objects, each representing an individual CRM object to be created or updated in the batch operation.',
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
        description: 'The unique identifier for the object, represented as a string.',
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
          'An array of SimplePublicObjectId objects, each representing a unique identifier for a CRM object. This property is required and is used to specify the objects to be processed in the batch operation.',
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
          'An array of SimplePublicObjectId objects, each containing an ID of an object to be read.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties to be returned for each object in the response.',
        example: null,
      }),
    propertiesWithHistory: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties to be returned along with their historical values for each object.',
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
      .openapi({ description: 'A string categorizing the type of error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error, with properties as arrays of strings.',
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
        description: 'A string representing the unique identifier for the error.',
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
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
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
        description:
          'A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.',
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
          'An array of PublicDefaultAssociation objects representing the results of the batch operation.',
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
          'The identifier of the source from which the value originated. It is a string.',
        example: null,
      }),
    sourceLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A label describing the source of the value. It is a string.',
        example: null,
      }),
    sourceType: z
      .string()
      .openapi({
        description:
          'The type of source from which the value originated. It is a string and is required.',
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
        description: 'The ID of the user who last updated the value. It is an integer.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'The value associated with the timestamp. It is a string.',
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
        description: 'A string representing the trace ID for object write operations.',
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
          'A map of property names to their historical values, where each value is an array of objects containing the value and timestamp.',
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
      .openapi({ description: 'A string containing the URL of the object.', example: null }),
    warnings: z
      .array(PublicObjectWarningSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of warnings associated with this object, where each warning includes a category, message, and context.',
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
          'A map of link names to associated URIs, providing additional information or resources related to the batch operation.',
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
          'An array of StandardError objects detailing any errors that occurred during the batch operation.',
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
        description: 'A string used to trace the write operation of this object.',
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
          'A map of property names to arrays of historical values, where each historical value includes a timestamp and the value at that time.',
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
          'A map of link names to associated URIs, providing additional context or resources related to the batch operation.',
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
          'An array of SimplePublicUpsertObject items, representing the objects that were created or updated in the batch operation.',
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
          'An array of StandardError objects, detailing any errors that occurred during the batch operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing additional resources or documentation.',
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
          'An array of SimplePublicUpsertObject items, representing the objects that were successfully upserted.',
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
        description:
          'A string that serves as a cursor token, indicating the position after the last item on the current page. This token is used to fetch the next page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string containing the URL link to the next page of results, allowing for easy navigation to the subsequent data set.',
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
          'A string token that indicates the position of the last item on the previous page, used for pagination.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides a direct link to the previous page of results.',
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
          "An array of associated IDs, each represented by an 'AssociatedId' object. This property is required.",
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
          "An array of association specifications with labels, detailing the types of associations and their labels. Each item in the array follows the 'AssociationSpecWithLabel' schema.",
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
          'An array of objects, each representing an association with a label. Each object contains details about the association, including the associated object ID and the types of associations.',
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
          'A map of associated object types to their respective collection of associated IDs.',
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
      .openapi({ description: 'The unique identifier for this object.', example: null }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An identifier used to trace the write operations for this object.',
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
          'A map of property names to arrays of their historical values, each with a timestamp.',
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
      .openapi({ description: 'The URL link to access this object.', example: null }),
    warnings: z
      .array(PublicObjectWarningSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of warnings associated with this object, each containing a category, message, and context.',
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
          'An array of SimplePublicObjectWithAssociations, each representing a CRM object along with its associated objects.',
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
          'An array of SimplePublicObject items, each representing an individual object in the collection.',
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
        description:
          "The upper bound value used in range filters. It is a string representing the maximum value for the property when using operators like 'BETWEEN'.",
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
          "The operator used to compare the property value against the filter value(s). It is a string and valid operators include 'EQ', 'NEQ', 'LT', 'LTE', 'GT', 'GTE', 'BETWEEN', 'IN', 'NOT_IN', 'HAS_PROPERTY', 'NOT_HAS_PROPERTY', 'CONTAINS_TOKEN', and 'NOT_CONTAINS_TOKEN'.",
        example: null,
      }),
    propertyName: z
      .string()
      .openapi({
        description:
          'The name of the property on which the filter is applied. It is a string that specifies which property of the object is being filtered.',
        example: null,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The specific value that the property should match for the filter to apply. It is a string representing the expected value of the property.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          "An array of strings representing multiple values that the property can match. This is used with operators like 'IN' or 'NOT_IN'.",
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
          'An array of filters that define the criteria for the filter group. Each filter specifies a property name, an operator, and a value or range of values to filter by.',
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
          'The unique identifier of the source object in the association. It is a string.',
        example: null,
      }),
    fromObjectTypeId: z
      .string()
      .openapi({
        description: 'The type identifier of the source object in the association. It is a string.',
        example: null,
      }),
    labels: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the labels that describe the relationship between the two objects.',
        example: null,
      }),
    toObjectId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the target object in the association. It is a string.',
        example: null,
      }),
    toObjectTypeId: z
      .string()
      .openapi({
        description: 'The type identifier of the target object in the association. It is a string.',
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
        description:
          'The unique identifier of the object to be deleted. This is a required string property.',
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
          'The unique identifier of the object that will be merged into the primary object. It is a string.',
        example: null,
      }),
    primaryObjectId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the primary object that will remain after the merge. It is a string.',
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
          'A string representing the paging cursor token of the last successfully read resource. It is used for pagination to retrieve the next set of results.',
        example: null,
      }),
    filterGroups: z
      .array(FilterGroupSchema)
      .openapi({
        description:
          'An array of filter groups used to specify the search criteria. Each filter group contains filters that determine which objects are included in the search results.',
        example: null,
      }),
    limit: z
      .int32()
      .openapi({
        description:
          'An integer specifying the maximum number of results to return. It defines the page size for the search results.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying which properties of the CRM objects should be returned in the search results.',
        example: null,
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing a search query to match against the CRM objects.',
        example: null,
      }),
    sorts: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          "An array of strings specifying the sorting order of the search results. Each string represents a property to sort by, optionally prefixed with a '-' to indicate descending order.",
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
          "An object containing key-value pairs where each key is a property name and the value is a string representing the property's value.",
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
          'An array of associations that link the new object to other objects. Each association specifies the target object and the types of associations.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of property names to their values for the CRM object being created. Each property is represented as a string.',
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

export const getCrmObjects202609NotesRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/notes',
  tags: ['Basic'],
  summary: 'List',
  description: 'Read a page of notes. Control what is returned via the `properties` query param.',
  operationId: 'get-/crm/objects/2026-09/notes_/crm/objects/2026-09-beta/{objectType}',
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

export const postCrmObjects202609NotesRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/notes',
  tags: ['Basic'],
  summary: 'Create',
  description:
    'Create a note with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard notes is provided.',
  operationId: 'post-/crm/objects/2026-09/notes_/crm/objects/2026-09-beta/{objectType}',
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

export const postCrmObjects202609NotesBatchArchiveRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/notes/batch/archive',
  tags: ['Batch'],
  summary: 'Archive a batch of notes by ID',
  description:
    'Archive multiple notes by their IDs in a single request. This operation moves the specified notes to the recycling bin, making them inaccessible from regular queries.',
  operationId:
    'post-/crm/objects/2026-09/notes/batch/archive_/crm/objects/2026-09-beta/{objectType}/batch/archive',
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

export const postCrmObjects202609NotesBatchCreateRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/notes/batch/create',
  tags: ['Batch'],
  summary: 'Create a batch of notes',
  description:
    'Create multiple notes in a single request by providing the necessary properties for each note. This operation returns the created notes with their unique identifiers.',
  operationId:
    'post-/crm/objects/2026-09/notes/batch/create_/crm/objects/2026-09-beta/{objectType}/batch/create',
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

export const postCrmObjects202609NotesBatchReadRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/notes/batch/read',
  tags: ['Batch'],
  summary: 'Read a batch of notes by internal ID, or unique property values',
  description:
    'Retrieve records by record ID or include the `idProperty` parameter to retrieve records by a custom unique value property. ',
  operationId:
    'post-/crm/objects/2026-09/notes/batch/read_/crm/objects/2026-09-beta/{objectType}/batch/read',
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

export const postCrmObjects202609NotesBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/notes/batch/update',
  tags: ['Batch'],
  summary: 'Update a batch of notes by internal ID, or unique property values',
  description:
    'Update multiple notes using their internal IDs or unique property values. This operation allows you to modify the properties of several notes in a single request, streamlining the process of managing note data in bulk.',
  operationId:
    'post-/crm/objects/2026-09/notes/batch/update_/crm/objects/2026-09-beta/{objectType}/batch/update',
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

export const postCrmObjects202609NotesBatchUpsertRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/notes/batch/upsert',
  tags: ['Batch'],
  summary: 'Create or update a batch of notes by unique property values',
  description:
    'Create or update records identified by a unique property value as specified by the `idProperty` query param. `idProperty` query param refers to a property whose values are unique for the object.',
  operationId:
    'post-/crm/objects/2026-09/notes/batch/upsert_/crm/objects/2026-09-beta/{objectType}/batch/upsert',
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

export const postCrmObjects202609NotesGdprDeleteRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/notes/gdpr-delete',
  tags: ['Advanced'],
  summary: 'GDPR Delete',
  description:
    "Permanently delete a contact and all associated content to comply with GDPR regulations. You can use the optional 'idProperty' set to 'email' to identify the contact by their email address. If the email address is not found, it will be added to a blocklist to prevent future use.",
  operationId:
    'post-/crm/objects/2026-09/notes/gdpr-delete_/crm/objects/2026-09-beta/{objectType}/gdpr-delete',
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

export const postCrmObjects202609NotesMergeRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/notes/merge',
  tags: ['Advanced'],
  summary: 'Merge objects',
  description:
    'Merge two CRM objects of the same type in your HubSpot account. This operation combines the properties and associations of the specified objects into a single object, identified by the primary object ID.',
  operationId: 'post-/crm/objects/2026-09/notes/merge_/crm/objects/2026-09-beta/{objectType}/merge',
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

export const postCrmObjects202609NotesSearchRoute = createRoute({
  method: 'post',
  path: '/crm/objects/2026-09/notes/search',
  tags: ['Search'],
  summary: 'Search for notes based on specified criteria.',
  description:
    'Execute a search for notes using filters, sorting options, and other query parameters to refine the results. This endpoint allows for complex queries to locate specific notes within the CRM system.',
  operationId:
    'post-/crm/objects/2026-09/notes/search_/crm/objects/2026-09-beta/{objectType}/search',
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

export const getCrmObjects202609NotesNoteIdRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/notes/{noteId}',
  tags: ['Basic'],
  summary: 'Read',
  description:
    'Read an Object identified by `{noteId}`. `{noteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.',
  operationId:
    'get-/crm/objects/2026-09/notes/{noteId}_/crm/objects/2026-09-beta/{objectType}/{objectId}',
  request: {
    params: z.object({
      noteId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'noteId',
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

export const deleteCrmObjects202609NotesNoteIdRoute = createRoute({
  method: 'delete',
  path: '/crm/objects/2026-09/notes/{noteId}',
  tags: ['Basic'],
  summary: 'Archive',
  description: 'Move an Object identified by `{noteId}` to the recycling bin.',
  operationId:
    'delete-/crm/objects/2026-09/notes/{noteId}_/crm/objects/2026-09-beta/{objectType}/{objectId}',
  request: {
    params: z.object({
      noteId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'noteId',
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

export const patchCrmObjects202609NotesNoteIdRoute = createRoute({
  method: 'patch',
  path: '/crm/objects/2026-09/notes/{noteId}',
  tags: ['Basic'],
  summary: 'Update',
  description:
    'Perform a partial update of an Object identified by `{noteId}`or optionally a unique property value as specified by the `idProperty` query param. `{noteId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object. Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.',
  operationId:
    'patch-/crm/objects/2026-09/notes/{noteId}_/crm/objects/2026-09-beta/{objectType}/{objectId}',
  request: {
    params: z.object({
      noteId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'noteId',
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

export const getCrmObjects202609NotesNoteIdAssociationsToObjectTypeRoute = createRoute({
  method: 'get',
  path: '/crm/objects/2026-09/notes/{noteId}/associations/{toObjectType}',
  tags: ['Basic'],
  summary: 'List Associations',
  description:
    'List all associations of an object by object type. This endpoint allows you to retrieve associations for a specific object identified by its type and ID, and the type of object it is associated with. The maximum number of associations returned per call is limited to 500.',
  operationId:
    'get-/crm/objects/2026-09/notes/{noteId}/associations/{toObjectType}_/crm/objects/2026-09-beta/{objectType}/{objectId}/associations/{toObjectType}',
  request: {
    params: z.object({
      noteId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'noteId',
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
            description: 'The type of the object to which associations are being listed.',
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
      'Create the default association type between two specified object types in the CRM. This endpoint is used to establish a generic relationship between two objects, identified by their types and IDs, within your HubSpot account.',
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

export const putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute =
  createRoute({
    method: 'put',
    path: '/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}',
    tags: ['Basic'],
    summary: 'Create Association',
    description:
      'Set association labels between two records in the CRM system. This endpoint allows you to define the relationship between two specific objects by their types and IDs, facilitating better data organization and retrieval.',
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
              description: 'The type of the source object to associate.',
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
              description: 'The type of the target object to associate.',
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
      'Delete all associations between two records identified by their object types and IDs. This operation is useful when you need to remove any existing relationships between specific objects in your CRM system.',
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
