import { createRoute, z } from '@hono/zod-openapi'

const AssociationDefinitionSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the association was defined.', example: null }),
    fromObjectTypeId: z
      .string()
      .openapi({ description: 'ID of the primary object type to link from.', example: null }),
    id: z.string().openapi({ description: 'A unique ID for this association.', example: null }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique name for this association.', example: null }),
    toObjectTypeId: z
      .string()
      .openapi({ description: 'ID of the target object type ID to link to.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the association was last updated.', example: null }),
  })
  .openapi({
    required: ['fromObjectTypeId', 'id', 'toObjectTypeId'],
    description: 'The definition of an association',
    example: null,
  })
  .openapi('AssociationDefinition')

const AssociationDefinitionEggSchema = z
  .object({
    fromObjectTypeId: z
      .string()
      .openapi({ description: 'ID of the primary object type to link from.', example: null }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique name for this association.', example: null }),
    toObjectTypeId: z
      .string()
      .openapi({ description: 'ID of the target object type ID to link to.', example: null }),
  })
  .openapi({ required: ['fromObjectTypeId', 'toObjectTypeId'], example: null })
  .openapi('AssociationDefinitionEgg')

const ObjectTypeDefinitionLabelsSchema = z
  .object({
    plural: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The word for multiple objects. (There’s no way to change this later.)',
        example: null,
      }),
    singular: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The word for one object. (There’s no way to change this later.)',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ObjectTypeDefinitionLabels')

const PropertyModificationMetadataSchema = z
  .object({
    archivable: z
      .boolean()
      .openapi({ description: 'Indicates whether the property can be archived.', example: null }),
    readOnlyDefinition: z
      .boolean()
      .openapi({
        description: "Indicates whether the property's definition is read-only.",
        example: null,
      }),
    readOnlyOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Indicates whether the property's options are read-only.",
        example: null,
      }),
    readOnlyValue: z
      .boolean()
      .openapi({
        description: "Indicates whether the property's value is read-only.",
        example: null,
      }),
  })
  .openapi({ required: ['archivable', 'readOnlyDefinition', 'readOnlyValue'], example: null })
  .openapi('PropertyModificationMetadata')

const OptionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the option.', example: null }),
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Options are displayed in order starting with the lowest positive integer value. Values of -1 will cause the option to be displayed after any positive values.',
        example: null,
      }),
    hidden: z
      .boolean()
      .openapi({ description: 'Hidden options will not be displayed in HubSpot.', example: null }),
    label: z
      .string()
      .openapi({
        description: 'A human-readable option label that will be shown in HubSpot.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description:
          'The internal value of the option, which must be used when setting the property value through the API.',
        example: null,
      }),
  })
  .openapi({
    required: ['hidden', 'label', 'value'],
    description: 'A HubSpot property option',
    example: null,
  })
  .openapi('Option')

const PropertySchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the property is archived.', example: null }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the property was archived.', example: null }),
    calculated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For default properties, true indicates that the property is calculated by a HubSpot process. It has no effect for custom properties.',
        example: null,
      }),
    calculationFormula: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The formula used to calculate the value of this property, if it is a calculated property.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the property was created', example: null }),
    createdUserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal ID of the user who created the property in HubSpot. This field may not exist if the property was created outside of HubSpot.',
        example: null,
      }),
    currencyPropertyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the property that defines the currency for this property, if applicable.',
        example: null,
      }),
    dataSensitivity: z
      .enum(['highly_sensitive', 'non_sensitive', 'sensitive'])
      .exactOptional()
      .openapi({
        description:
          "The sensitivity level of the data stored in this property, such as 'sensitive' or 'highly_sensitive'.",
        example: null,
      }),
    dateDisplayHint: z
      .enum(['absolute', 'absolute_with_relative', 'time_since', 'time_until'])
      .exactOptional()
      .openapi({
        description:
          "Controls how date properties are displayed in the HubSpot UI, with options such as 'absolute', 'absolute_with_relative', 'time_since', and 'time_until'.",
        example: null,
      }),
    description: z
      .string()
      .openapi({
        description: 'A description of the property that will be shown as help text in HubSpot.',
        example: null,
      }),
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The order that this property should be displayed in the HubSpot UI relative to other properties for this object type. Properties are displayed in order starting with the lowest positive integer value. A value of -1 will cause the property to be displayed **after** any positive values.',
        example: null,
      }),
    externalOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For default properties, true indicates that the options are stored externally to the property settings.',
        example: null,
      }),
    fieldType: z
      .string()
      .openapi({ description: 'Controls how the property appears in HubSpot.', example: null }),
    formField: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the property can be used in a HubSpot form.',
        example: null,
      }),
    groupName: z
      .string()
      .openapi({
        description: 'The name of the property group the property belongs to.',
        example: null,
      }),
    hasUniqueValue: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not the property's value must be unique. Once set, this can't be changed.",
        example: null,
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Hidden options won't be shown in HubSpot.", example: false }),
    hubspotDefined: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'This will be true for default object properties built into HubSpot.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description: 'A human-readable property label that will be shown in HubSpot.',
        example: null,
      }),
    modificationMetadata: PropertyModificationMetadataSchema.exactOptional(),
    name: z
      .string()
      .openapi({
        description:
          'The internal property name, which must be used when referencing the property via the API.',
        example: null,
      }),
    numberDisplayHint: z
      .enum(['currency', 'duration', 'formatted', 'percentage', 'probability', 'unformatted'])
      .exactOptional()
      .openapi({
        description:
          "A hint for how number values should be displayed, with options like 'formatted' or 'currency'.",
        example: null,
      }),
    options: z
      .array(OptionSchema)
      .openapi({
        description:
          'A list of valid options for the property. This field is required for enumerated properties, but will be empty for other property types.',
        example: null,
      }),
    referencedObjectType: z
      .string()
      .exactOptional()
      .openapi({
        description: "If this property is related to other object(s), they'll be listed here.",
        example: null,
      }),
    sensitiveDataCategories: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of categories that describe the types of sensitive data contained in this property.',
        example: null,
      }),
    showCurrencySymbol: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the property will display the currency symbol set in the account settings.',
        example: null,
      }),
    textDisplayHint: z
      .enum([
        'domain_name',
        'email',
        'ip_address',
        'multi_line',
        'phone_number',
        'physical_address',
        'postal_code',
        'unformatted_single_line',
      ])
      .exactOptional()
      .openapi({
        description:
          "A hint for how text values should be displayed, with options like 'email' or 'phone_number'.",
        example: null,
      }),
    type: z.string().openapi({ description: 'The property data type.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the object type was last updated.', example: null }),
    updatedUserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal user ID of the user who updated the property in HubSpot. This field may not exist if the property was updated outside of HubSpot.',
        example: null,
      }),
  })
  .openapi({
    required: ['description', 'fieldType', 'groupName', 'label', 'name', 'options', 'type'],
    description: 'A HubSpot property',
    example: null,
  })
  .openapi('Property')

const ObjectSchemaSchema = z
  .object({
    allowsSensitiveProperties: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the object schema allows sensitive properties.',
        example: null,
      }),
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the object schema is archived.',
        example: null,
      }),
    associations: z
      .array(AssociationDefinitionSchema)
      .openapi({ description: 'Associations defined for a given object type.', example: null }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the object schema was created.', example: null }),
    createdByUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the ID of the user who created the object schema.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a description of the object schema.',
        example: null,
      }),
    fullyQualifiedName: z
      .string()
      .openapi({
        description: 'An assigned unique ID for the object, including portal ID and object name.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description:
          "A unique ID for this schema's object type. Will be defined as {meta-type}-{unique ID}.",
        example: null,
      }),
    labels: ObjectTypeDefinitionLabelsSchema,
    name: z
      .string()
      .openapi({ description: "A unique name for the schema's object type.", example: null }),
    objectTypeId: z
      .string()
      .openapi({ description: 'A string representing the type ID of the object.', example: null }),
    primaryDisplayProperty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.',
        example: null,
      }),
    properties: z
      .array(PropertySchema)
      .openapi({ description: 'Properties defined for this object type.', example: null }),
    requiredProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'The names of properties that should be **required** when creating an object of this type.',
        example: null,
      }),
    searchableProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          "Names of properties that will be indexed for this object type in by HubSpot's product search.",
        example: null,
      }),
    secondaryDisplayProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the object schema was last updated.', example: null }),
    updatedByUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the ID of the user who last updated the object schema.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'allowsSensitiveProperties',
      'archived',
      'associations',
      'fullyQualifiedName',
      'id',
      'labels',
      'name',
      'objectTypeId',
      'properties',
      'requiredProperties',
      'searchableProperties',
      'secondaryDisplayProperties',
    ],
    example: null,
  })
  .openapi('ObjectSchema')

const CollectionResponseObjectSchemaNoPagingSchema = z
  .object({
    results: z
      .array(ObjectSchemaSchema)
      .openapi({
        description:
          'An array of object schemas, each represented by an ObjectSchema. This property contains the list of schemas returned by the API call.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseObjectSchemaNoPaging')

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

const ObjectSchemaBatchReadRequestSchema = z
  .object({
    includeAssociationDefinitions: z
      .boolean()
      .openapi({
        description: 'Indicates whether to include association definitions in the response.',
        example: null,
      }),
    includeAuditMetadata: z
      .boolean()
      .openapi({
        description: 'Indicates whether to include audit metadata in the response.',
        example: null,
      }),
    includePropertyDefinitions: z
      .boolean()
      .openapi({
        description: 'Indicates whether to include property definitions in the response.',
        example: null,
      }),
    inputs: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the identifiers of the object schemas to be read.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'includeAssociationDefinitions',
      'includeAuditMetadata',
      'includePropertyDefinitions',
      'inputs',
    ],
    example: null,
  })
  .openapi('ObjectSchemaBatchReadRequest')

const OptionInputSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the option.', example: null }),
    displayOrder: z
      .int32()
      .openapi({
        description:
          'Options are shown in order starting with the lowest positive integer value. Values of -1 will cause the option to be displayed after any positive values.',
        example: null,
      }),
    hidden: z
      .boolean()
      .openapi({ description: "Hidden options won't be shown in HubSpot.", example: null }),
    label: z
      .string()
      .openapi({
        description: 'A human-readable option label that will be shown in HubSpot.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description:
          'The internal value of the option, which must be used when setting the property value through the API.',
        example: null,
      }),
  })
  .openapi({ required: ['displayOrder', 'hidden', 'label', 'value'], example: null })
  .openapi('OptionInput')

const ObjectTypePropertyCreateSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the property that will be shown as help text in HubSpot.',
        example: null,
      }),
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The order that this property should be displayed in the HubSpot UI relative to other properties for this object type. Properties are displayed in order starting with the lowest positive integer value. A value of -1 will cause the property to be displayed **after** any positive values.',
        example: null,
      }),
    externalOptionsReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the reference type for external options associated with the property.',
        example: null,
      }),
    fieldType: z
      .string()
      .openapi({ description: 'Controls how the property appears in HubSpot.', example: null }),
    formField: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the property can be used in a HubSpot form.',
        example: null,
      }),
    groupName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the group this property belongs to.', example: null }),
    hasUniqueValue: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not the property's value must be unique. Once set, this can't be changed.",
        example: null,
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Hidden options won't be shown in HubSpot.", example: null }),
    label: z
      .string()
      .openapi({
        description: 'A human-readable property label that will be shown in HubSpot.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description:
          'The internal property name, which must be used when referencing the property from the API.',
        example: null,
      }),
    numberDisplayHint: z
      .enum(['currency', 'duration', 'formatted', 'percentage', 'probability', 'unformatted'])
      .exactOptional()
      .openapi({
        description: 'Controls how numeric properties are formatted in the HubSpot UI',
        example: null,
      }),
    optionSortStrategy: z
      .enum(['ALPHABETICAL', 'DISPLAY_ORDER'])
      .exactOptional()
      .openapi({
        description: 'Controls how the property options will be sorted in the HubSpot UI.',
        example: null,
      }),
    options: z
      .array(OptionInputSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of available options for the property. This field is only required for enumerated properties.',
        example: null,
      }),
    referencedObjectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Defines the options this property will return, e.g. OWNER would return name of users on the portal.',
        example: null,
      }),
    searchableInGlobalSearch: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow users to search for information entered to this field (limited to 3 properties)',
        example: null,
      }),
    showCurrencySymbol: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the property will display the currency symbol in the HubSpot UI.',
        example: null,
      }),
    textDisplayHint: z
      .enum([
        'domain_name',
        'email',
        'ip_address',
        'multi_line',
        'phone_number',
        'physical_address',
        'postal_code',
        'unformatted_single_line',
      ])
      .exactOptional()
      .openapi({
        description: 'Controls how text properties are formatted in the HubSpot UI',
        example: null,
      }),
    type: z
      .enum(['bool', 'date', 'datetime', 'enumeration', 'number', 'phone_number', 'string'])
      .openapi({ description: 'The data type of the property.', example: null }),
  })
  .openapi({ required: ['fieldType', 'label', 'name', 'type'], example: null })
  .openapi('ObjectTypePropertyCreate')

const ObjectSchemaEggSchema = z
  .object({
    allowsSensitiveProperties: z
      .boolean()
      .openapi({
        description:
          'Determines if the object type can include properties that are marked as sensitive.',
        example: null,
      }),
    associatedObjects: z
      .array(z.string().openapi({ example: null }))
      .openapi({ description: 'Associations defined for this object type.', example: null }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A brief explanation of the object type.', example: null }),
    labels: ObjectTypeDefinitionLabelsSchema,
    name: z
      .string()
      .openapi({
        description: 'A unique name for this object. For internal use only.',
        example: null,
      }),
    primaryDisplayProperty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.',
        example: null,
      }),
    properties: z
      .array(ObjectTypePropertyCreateSchema)
      .openapi({ description: 'Properties defined for this object type.', example: null }),
    requiredProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'The names of properties that should be **required** when creating an object of this type.',
        example: null,
      }),
    searchableProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          "Names of properties that will be indexed for this object type in by HubSpot's product search.",
        example: null,
      }),
    secondaryDisplayProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.',
        example: null,
      }),
    shouldCreateSameObjectAssociation: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether associations should be created between objects of the same type.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'allowsSensitiveProperties',
      'associatedObjects',
      'labels',
      'name',
      'properties',
      'requiredProperties',
      'searchableProperties',
      'secondaryDisplayProperties',
      'shouldCreateSameObjectAssociation',
    ],
    example: null,
  })
  .openapi('ObjectSchemaEgg')

const ObjectTypeDefinitionSchema = z
  .object({
    allowsSensitiveProperties: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the object type allows properties that contain sensitive data.',
        example: null,
      }),
    archived: z
      .boolean()
      .openapi({ description: 'Indicates whether the object type is archived.', example: null }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the object type was created.', example: null }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the object type.', example: null }),
    fullyQualifiedName: z
      .string()
      .openapi({
        description: 'An assigned unique ID for the object, including portal ID and object name.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description:
          'A unique ID for this object type. Will be defined as {meta-type}-{unique ID}.',
        example: null,
      }),
    labels: ObjectTypeDefinitionLabelsSchema,
    name: z
      .string()
      .openapi({
        description: 'A unique name for this object. For internal use only.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({ description: 'A unique identifier for the object type.', example: null }),
    portalId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The ID of the account that this object type is specific to.',
        example: null,
      }),
    primaryDisplayProperty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.',
        example: null,
      }),
    requiredProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'The names of properties that should be **required** when creating an object of this type.',
        example: null,
      }),
    searchableProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          "Names of properties that will be indexed for this object type in by HubSpot's product search.",
        example: null,
      }),
    secondaryDisplayProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the object type was last updated.', example: null }),
  })
  .openapi({
    required: [
      'allowsSensitiveProperties',
      'archived',
      'fullyQualifiedName',
      'id',
      'labels',
      'name',
      'objectTypeId',
      'requiredProperties',
      'searchableProperties',
      'secondaryDisplayProperties',
    ],
    example: null,
  })
  .openapi('ObjectTypeDefinition')

const ObjectTypeDefinitionPatchSchema = z
  .object({
    allowsSensitiveProperties: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if the object type can include properties that are marked as sensitive.',
        example: null,
      }),
    clearDescription: z
      .boolean()
      .openapi({
        description: 'Indicates whether the description of the object type should be cleared.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A brief explanation of the object type.', example: null }),
    labels: ObjectTypeDefinitionLabelsSchema.exactOptional(),
    primaryDisplayProperty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.',
        example: null,
      }),
    requiredProperties: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'The names of properties that should be **required** when creating an object of this type.',
        example: null,
      }),
    restorable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Specifies if the object type can be restored after being deleted.',
        example: null,
      }),
    searchableProperties: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          "Names of properties that will be indexed for this object type in by HubSpot's product search.",
        example: null,
      }),
    secondaryDisplayProperties: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.',
        example: null,
      }),
  })
  .openapi({ required: ['clearDescription'], example: null })
  .openapi('ObjectTypeDefinitionPatch')

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
        'crm.objects.custom.highly_sensitive.read.v2': '',
        'crm.objects.custom.highly_sensitive.write.v2': '',
        'crm.objects.custom.read': '',
        'crm.objects.custom.sensitive.read.v2': '',
        'crm.objects.custom.sensitive.write.v2': '',
        'crm.objects.custom.write': '',
        'crm.schemas.custom.read': '',
        'crm.schemas.custom.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmObjectSchemas202609SchemasRoute = createRoute({
  method: 'get',
  path: '/crm-object-schemas/2026-09/schemas',
  tags: ['Basic'],
  summary: 'Retrieve all custom object schemas.',
  description:
    'Retrieve all custom object schemas, with options to include property definitions, association definitions, and audit metadata.',
  operationId: 'get-/crm-object-schemas/2026-09/schemas_getAll',
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
      includeAssociationDefinitions: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAssociationDefinitions',
            in: 'query',
            description:
              'Whether to include association definitions in the response. Defaults to true.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: true },
          },
          example: null,
        }),
      includeAuditMetadata: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAuditMetadata',
            in: 'query',
            description: 'Whether to include audit metadata in the response. Defaults to true.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: true },
          },
          example: null,
        }),
      includePropertyDefinitions: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includePropertyDefinitions',
            in: 'query',
            description:
              'Whether to include property definitions in the response. Defaults to true.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: true },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseObjectSchemaNoPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
  ],
})

export const postCrmObjectSchemas202609SchemasRoute = createRoute({
  method: 'post',
  path: '/crm-object-schemas/2026-09/schemas',
  tags: ['Basic'],
  summary: 'Create a new custom object schema.',
  description: 'Create a new custom object schema by defining its properties and associations.',
  operationId: 'post-/crm-object-schemas/2026-09/schemas_create',
  request: {
    body: {
      content: { 'application/json': { schema: ObjectSchemaEggSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ObjectSchemaSchema, example: null } },
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
  security: [{ oauth2: ['crm.schemas.custom.write'] }],
})

export const postCrmObjectSchemas202609SchemasBatchReadRoute = createRoute({
  method: 'post',
  path: '/crm-object-schemas/2026-09/schemas/batch/read',
  tags: ['Batch'],
  summary: 'Retrieve multiple custom object schemas in a batch request.',
  description:
    'Retrieve details of multiple custom object schemas by providing a batch request with specified inputs. This operation allows you to fetch schema information, including properties and associations, for multiple custom objects in a single API call.',
  operationId:
    'post-/crm-object-schemas/2026-09/schemas/batch/read_/crm-object-schemas/v3/schemas/batch/read',
  request: {
    body: {
      content: {
        'application/json': { schema: ObjectSchemaBatchReadRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseObjectSchemaNoPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
  ],
})

export const getCrmObjectSchemas202609SchemasObjectTypeRoute = createRoute({
  method: 'get',
  path: '/crm-object-schemas/2026-09/schemas/{objectType}',
  tags: ['Basic'],
  summary: 'Retrieve the schema of a specified custom object.',
  description:
    'Retrieve details of a custom object schema, including its properties and associations, using the object type ID or fully qualified name.',
  operationId: 'get-/crm-object-schemas/2026-09/schemas/{objectType}_getById',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The unique identifier for the CRM object type whose schema is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      includeAssociationDefinitions: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAssociationDefinitions',
            in: 'query',
            description:
              'A boolean indicating whether to include association definitions in the response. Defaults to true.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: true },
          },
          example: null,
        }),
      includeAuditMetadata: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAuditMetadata',
            in: 'query',
            description:
              'A boolean indicating whether to include audit metadata in the response. Defaults to true.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: true },
          },
          example: null,
        }),
      includePropertyDefinitions: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includePropertyDefinitions',
            in: 'query',
            description:
              'A boolean indicating whether to include property definitions in the response. Defaults to true.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: true },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ObjectSchemaSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
  ],
})

export const deleteCrmObjectSchemas202609SchemasObjectTypeRoute = createRoute({
  method: 'delete',
  path: '/crm-object-schemas/2026-09/schemas/{objectType}',
  tags: ['Basic'],
  summary: 'Delete the schema of a specified custom object.',
  description:
    'Remove a custom object schema from the account using its object type ID or fully qualified name.',
  operationId: 'delete-/crm-object-schemas/2026-09/schemas/{objectType}_archive',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description: 'The unique identifier of the object schema to delete.',
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
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['crm.schemas.custom.write'] }],
})

export const patchCrmObjectSchemas202609SchemasObjectTypeRoute = createRoute({
  method: 'patch',
  path: '/crm-object-schemas/2026-09/schemas/{objectType}',
  tags: ['Basic'],
  summary: 'Update the schema of a specified custom object.',
  description:
    'Update attributes of a custom object schema, such as properties and labels, using the object type ID or fully qualified name.',
  operationId: 'patch-/crm-object-schemas/2026-09/schemas/{objectType}_update',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The unique identifier of the CRM object type whose schema is to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: ObjectTypeDefinitionPatchSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ObjectTypeDefinitionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.schemas.custom.write'] }],
})

export const postCrmObjectSchemas202609SchemasObjectTypeAssociationsRoute = createRoute({
  method: 'post',
  path: '/crm-object-schemas/2026-09/schemas/{objectType}/associations',
  tags: ['Advanced'],
  summary: 'Create an association for a specified object type.',
  description:
    'Create a new association between the specified object type and another object type. This operation requires the definition of the association attributes, such as the primary and target object type IDs.',
  operationId:
    'post-/crm-object-schemas/2026-09/schemas/{objectType}/associations_createAssociation',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The unique identifier of the object type for which the association is being created.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociationDefinitionEggSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: AssociationDefinitionSchema, example: null } },
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
  security: [{ oauth2: ['crm.schemas.custom.write'] }],
})

export const deleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierRoute =
  createRoute({
    method: 'delete',
    path: '/crm-object-schemas/2026-09/schemas/{objectType}/associations/{associationIdentifier}',
    tags: ['Basic'],
    summary: 'Delete an existing association for a specified object type.',
    description:
      'Remove an association between two object types identified by the association identifier and object type. This operation is irreversible and will permanently delete the specified association.',
    operationId:
      'delete-/crm-object-schemas/2026-09/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation',
    request: {
      params: z.object({
        associationIdentifier: z
          .string()
          .openapi({
            param: {
              name: 'associationIdentifier',
              in: 'path',
              description: 'The unique identifier of the association definition to delete.',
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
                'The type of the custom object from which the association is being deleted.',
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
    security: [{ oauth2: ['crm.schemas.custom.write'] }],
  })
