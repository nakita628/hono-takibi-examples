import { createRoute, z } from '@hono/zod-openapi'

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

const PropertyCreateSchema = z
  .object({
    calculationFormula: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Represents a formula that is used to compute a calculated property.',
        example: null,
      }),
    currencyPropertyName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the name of the currency property.',
        example: null,
      }),
    dataSensitivity: z
      .enum(['highly_sensitive', 'non_sensitive', 'sensitive'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the sensitivity level of the property, with options: highly_sensitive, non_sensitive, or sensitive.',
        example: null,
      }),
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
          'Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property to be displayed after any positive values.',
        example: null,
      }),
    externalOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Applicable only for 'enumeration' type properties.  Should be set to true in conjunction with a 'referencedObjectType' of 'OWNER'.  Otherwise false.",
        example: null,
      }),
    fieldType: z
      .enum([
        'booleancheckbox',
        'calculation_equation',
        'checkbox',
        'date',
        'file',
        'html',
        'number',
        'phonenumber',
        'radio',
        'select',
        'text',
        'textarea',
      ])
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
      .openapi({
        description: "If true, the property won't be visible and can't be used in HubSpot.",
        example: null,
      }),
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
          'The internal property name, which must be used when referencing the property via the API.',
        example: null,
      }),
    numberDisplayHint: z
      .enum(['currency', 'duration', 'formatted', 'percentage', 'probability', 'unformatted'])
      .exactOptional()
      .openapi({
        description:
          "A string providing a hint on how to display numbers. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', 'probability'.",
        example: null,
      }),
    options: z
      .array(OptionInputSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of valid options for the property. This field is required for enumerated properties.',
        example: null,
      }),
    referencedObjectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Should be set to 'OWNER' when 'externalOptions' is true, which causes the property to dynamically pull option values from the current HubSpot users.",
        example: null,
      }),
    showCurrencySymbol: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether to show the currency symbol for currency fields.',
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
          "A string providing a hint on how to display text. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', 'postal_code'.",
        example: null,
      }),
    type: z
      .enum(['bool', 'date', 'datetime', 'enumeration', 'number', 'phone_number', 'string'])
      .openapi({ description: 'The data type of the property.', example: null }),
  })
  .openapi({ required: ['fieldType', 'groupName', 'label', 'name', 'type'], example: null })
  .openapi('PropertyCreate')

const BatchInputPropertyCreateSchema = z
  .object({
    inputs: z
      .array(PropertyCreateSchema)
      .openapi({
        description:
          'An array of PropertyCreate objects, each representing a property to be created. This field is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPropertyCreate')

const PropertyNameSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'The name of the property to read or modify.', example: null }),
  })
  .openapi({ required: ['name'], example: null })
  .openapi('PropertyName')

const BatchInputPropertyNameSchema = z
  .object({
    inputs: z
      .array(PropertyNameSchema)
      .openapi({
        description:
          'An array of property names to be processed in the batch operation. Each item in the array is a reference to a PropertyName object.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPropertyName')

const BatchReadInputPropertyNameSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({ description: 'Specifies whether the property is archived.', example: null }),
    dataSensitivity: z
      .enum(['highly_sensitive', 'non_sensitive', 'sensitive'])
      .openapi({
        description:
          "Indicates the sensitivity level of the data, such as 'non_sensitive', 'sensitive', or 'highly_sensitive'.",
        example: null,
      }),
    inputs: z
      .array(PropertyNameSchema)
      .openapi({
        description:
          'An array of property names to be included in the batch read operation. Each item in the array is a reference to a PropertyName object.',
        example: null,
      }),
  })
  .openapi({ required: ['archived', 'dataSensitivity', 'inputs'], example: null })
  .openapi('BatchReadInputPropertyName')

const PropertyModificationMetadataSchema = z
  .object({
    archivable: z
      .boolean()
      .openapi({ description: 'Specifies whether the property can be archived.', example: null }),
    readOnlyDefinition: z
      .boolean()
      .openapi({
        description:
          "Indicates whether the property's definition is read-only and cannot be modified.",
        example: null,
      }),
    readOnlyOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether the property's options are read-only and cannot be modified.",
        example: null,
      }),
    readOnlyValue: z
      .boolean()
      .openapi({
        description: "Indicates whether the property's value is read-only and cannot be modified.",
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
        description: 'Represents a formula that is used to compute a calculated property.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the property was created, in ISO 8601 format.',
        example: null,
      }),
    createdUserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal user ID of the user who created the property in HubSpot. This field may not exist if the property was created outside of HubSpot.',
        example: null,
      }),
    currencyPropertyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the currency property associated with this property, if applicable.',
        example: null,
      }),
    dataSensitivity: z
      .enum(['highly_sensitive', 'non_sensitive', 'sensitive'])
      .exactOptional()
      .openapi({
        description:
          "The sensitivity level of the data. Valid values include 'non_sensitive', 'sensitive', and 'highly_sensitive'.",
        example: null,
      }),
    dateDisplayHint: z
      .enum(['absolute', 'absolute_with_relative', 'time_since', 'time_until'])
      .exactOptional()
      .openapi({
        description:
          "Indicates how date values should be displayed, with options such as 'absolute', 'absolute_with_relative', 'time_since', or 'time_until'.",
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
          'Properties are shown in order, starting with the lowest positive integer value.',
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
      .openapi({
        description:
          "Whether or not the property will be hidden from the HubSpot UI. It's recommended this be set to false for custom properties.",
        example: false,
      }),
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
          "A hint for displaying number properties. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', and 'probability'.",
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
          'An array of categories indicating the sensitivity of the data contained in the property.',
        example: null,
      }),
    showCurrencySymbol: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the property will display the currency symbol set in the account settings.',
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
          "A hint for displaying text properties. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', and 'postal_code'.",
        example: null,
      }),
    type: z.string().openapi({ description: 'The property data type.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the property was last updated, in ISO 8601 format.',
        example: null,
      }),
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

const BatchResponsePropertySchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp indicating when the batch operation was completed.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A collection of URLs linking to documentation or resources related to the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp indicating when the batch operation was requested.',
        example: null,
      }),
    results: z
      .array(PropertySchema)
      .openapi({
        description:
          'An array of Property objects representing the results of the batch operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp indicating when the batch operation began processing.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the batch operation, with possible values being CANCELED, COMPLETE, PENDING, or PROCESSING.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseProperty')

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

const BatchResponsePropertyWithErrorsSchema = z
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
          'An array of errors encountered during the batch operation, each represented by a StandardError object.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to their associated URIs, providing additional information or actions related to the batch operation.',
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
      .array(PropertySchema)
      .openapi({
        description: 'An array of properties that were processed in the batch operation.',
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
  .openapi('BatchResponsePropertyWithErrors')

const PropertyGroupSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({ description: 'Indicates whether the property group is archived.', example: null }),
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Property groups are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property group to be displayed after any positive values.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description: 'A human-readable label that will be shown in HubSpot.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description:
          'The internal property group name, which must be used when referencing the property group via the API.',
        example: null,
      }),
  })
  .openapi({ required: ['archived', 'label', 'name'], example: null })
  .openapi('PropertyGroup')

const CollectionResponsePropertyGroupNoPagingSchema = z
  .object({
    results: z
      .array(PropertyGroupSchema)
      .openapi({
        description:
          'An array of property groups, where each group is represented by a PropertyGroup object.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePropertyGroupNoPaging')

const CollectionResponsePropertyNoPagingSchema = z
  .object({
    results: z
      .array(PropertySchema)
      .openapi({
        description:
          'An array of Property objects, each representing a specific property associated with the object type. This array contains the details of each property such as name, label, type, and other metadata.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePropertyNoPaging')

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

const PropertyGroupCreateSchema = z
  .object({
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Property groups are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property group to be displayed after any positive values.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description: 'A human-readable label that will be shown in HubSpot.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description:
          'The internal property group name, which must be used when referencing the property group via the API.',
        example: null,
      }),
  })
  .openapi({ required: ['label', 'name'], example: null })
  .openapi('PropertyGroupCreate')

const PropertyGroupUpdateSchema = z
  .object({
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Property groups are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property group to be displayed after any positive values.',
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable label that will be shown in HubSpot.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PropertyGroupUpdate')

const PropertyUpdateSchema = z
  .object({
    calculationFormula: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Represents a formula that is used to compute a calculated property.',
        example: null,
      }),
    currencyPropertyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string specifying the name of the property that holds the currency information, applicable when showCurrencySymbol is true.',
        example: null,
      }),
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
          'Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the Property to be displayed after any positive values.',
        example: null,
      }),
    fieldType: z
      .enum([
        'booleancheckbox',
        'calculation_equation',
        'checkbox',
        'date',
        'file',
        'html',
        'number',
        'phonenumber',
        'radio',
        'select',
        'text',
        'textarea',
      ])
      .exactOptional()
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
      .exactOptional()
      .openapi({
        description: 'The name of the property group the property belongs to.',
        example: null,
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "If true, the property won't be visible and can't be used in HubSpot.",
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable property label that will be shown in HubSpot.',
        example: null,
      }),
    numberDisplayHint: z
      .enum(['currency', 'duration', 'formatted', 'percentage', 'probability', 'unformatted'])
      .exactOptional()
      .openapi({
        description:
          "A string providing a hint for displaying number values. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', and 'probability'.",
        example: null,
      }),
    options: z
      .array(OptionInputSchema)
      .exactOptional()
      .openapi({ description: 'A list of valid options for the property.', example: null }),
    showCurrencySymbol: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether to display a currency symbol for number fields formatted as currency.',
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
          "A string providing a hint for displaying text values. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', and 'postal_code'.",
        example: null,
      }),
    type: z
      .enum(['bool', 'date', 'datetime', 'enumeration', 'number', 'phone_number', 'string'])
      .exactOptional()
      .openapi({ description: 'The data type of the property.', example: null }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PropertyUpdate')

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
        automation: '',
        'cpq.quotes.read': '',
        'cpq.quotes.write': '',
        'crm.objects.appointments.read': '',
        'crm.objects.appointments.sensitive.read.v2': '',
        'crm.objects.appointments.sensitive.write.v2': '',
        'crm.objects.appointments.write': '',
        'crm.objects.calls.read': '',
        'crm.objects.carts.read': '',
        'crm.objects.carts.write': '',
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
        'crm.objects.marketing_events.read': '',
        'crm.objects.marketing_events.write': '',
        'crm.objects.meetings.read': '',
        'crm.objects.notes.read': '',
        'crm.objects.orders.read': '',
        'crm.objects.orders.write': '',
        'crm.objects.owners.read': '',
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
        'crm.pipelines.approval.read': '',
        'crm.pipelines.orders.read': '',
        'crm.pipelines.orders.write': '',
        'crm.schemas.appointments.read': '',
        'crm.schemas.appointments.write': '',
        'crm.schemas.calls.read': '',
        'crm.schemas.calls.write': '',
        'crm.schemas.carts.read': '',
        'crm.schemas.carts.write': '',
        'crm.schemas.commercepayments.read': '',
        'crm.schemas.commercepayments.write': '',
        'crm.schemas.companies.read': '',
        'crm.schemas.companies.write': '',
        'crm.schemas.contacts.read': '',
        'crm.schemas.contacts.write': '',
        'crm.schemas.courses.read': '',
        'crm.schemas.courses.write': '',
        'crm.schemas.custom.read': '',
        'crm.schemas.custom.write': '',
        'crm.schemas.deals.read': '',
        'crm.schemas.deals.write': '',
        'crm.schemas.emails.read': '',
        'crm.schemas.emails.write': '',
        'crm.schemas.invoices.read': '',
        'crm.schemas.invoices.write': '',
        'crm.schemas.line_items.read': '',
        'crm.schemas.listings.read': '',
        'crm.schemas.listings.write': '',
        'crm.schemas.meetings.read': '',
        'crm.schemas.meetings.write': '',
        'crm.schemas.notes.read': '',
        'crm.schemas.notes.write': '',
        'crm.schemas.orders.read': '',
        'crm.schemas.orders.write': '',
        'crm.schemas.projects.read': '',
        'crm.schemas.quotes.read': '',
        'crm.schemas.quotes.write': '',
        'crm.schemas.services.read': '',
        'crm.schemas.services.write': '',
        'crm.schemas.subscriptions.read': '',
        'crm.schemas.subscriptions.write': '',
        'crm.schemas.tasks.read': '',
        'crm.schemas.tasks.write': '',
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

export const getCrmProperties202609ObjectTypeRoute = createRoute({
  method: 'get',
  path: '/crm/properties/2026-09/{objectType}',
  tags: ['Basic'],
  summary: 'Read all properties',
  description: 'Read all existing properties for the specified object type and HubSpot account.',
  operationId: 'get-/crm/properties/2026-09/{objectType}_/crm/properties/2025-09/{objectType}',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              "The type of CRM object for which properties are being retrieved, such as 'contacts', 'companies', etc.",
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
      dataSensitivity: z
        .enum(['highly_sensitive', 'non_sensitive', 'sensitive'])
        .default('non_sensitive')
        .exactOptional()
        .openapi({
          param: {
            name: 'dataSensitivity',
            in: 'query',
            description:
              "Filter properties based on data sensitivity level. Valid values are 'non_sensitive', 'sensitive', and 'highly_sensitive'. Defaults to 'non_sensitive'.",
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              example: null,
              default: 'non_sensitive',
              enum: ['highly_sensitive', 'non_sensitive', 'sensitive'],
            },
          },
          example: null,
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            description:
              'Specify the locale to retrieve properties in a particular language or regional format.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      properties: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description: 'A comma-separated list of property names to include in the response.',
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
        'application/json': { schema: CollectionResponsePropertyNoPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.owners.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.quotes.read'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.schemas.services.read'] },
    { oauth2: ['crm.schemas.line_items.read'] },
    { oauth2: ['crm.schemas.subscriptions.read'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.schemas.companies.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.schemas.calls.read'] },
    { oauth2: ['crm.schemas.meetings.read'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.schemas.orders.read'] },
    { oauth2: ['crm.schemas.emails.read'] },
    { oauth2: ['crm.schemas.deals.read'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.notes.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.schemas.contacts.read'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.schemas.tasks.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.schemas.invoices.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.marketing_events.read'] },
    { oauth2: ['crm.pipelines.orders.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.schemas.projects.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['automation'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.schemas.carts.read'] },
    { oauth2: ['cpq.quotes.write'] },
    { oauth2: ['crm.schemas.listings.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['cpq.quotes.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.schemas.appointments.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.schemas.courses.read'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.pipelines.approval.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.marketing_events.write'] },
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.schemas.commercepayments.read'] },
    { oauth2: ['crm.objects.listings.read'] },
  ],
})

export const postCrmProperties202609ObjectTypeRoute = createRoute({
  method: 'post',
  path: '/crm/properties/2026-09/{objectType}',
  tags: ['Basic'],
  summary: 'Create a property',
  description: 'Create and return a copy of a new property for the specified object type.',
  operationId: 'post-/crm/properties/2026-09/{objectType}_/crm/properties/2025-09/{objectType}',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The type of object for which the property is being created, such as contacts, companies, or deals.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PropertyCreateSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PropertySchema, example: null } },
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
    { oauth2: ['crm.schemas.quotes.write'] },
    { oauth2: ['crm.schemas.invoices.write'] },
    { oauth2: ['crm.schemas.orders.write'] },
    { oauth2: ['crm.schemas.commercepayments.write'] },
    { oauth2: ['crm.schemas.courses.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.appointments.write'] },
    { oauth2: ['crm.schemas.tasks.write'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.schemas.carts.write'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['crm.schemas.subscriptions.write'] },
    { oauth2: ['crm.schemas.emails.write'] },
    { oauth2: ['crm.schemas.custom.write'] },
    { oauth2: ['crm.schemas.listings.write'] },
    { oauth2: ['crm.pipelines.orders.write'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.schemas.services.write'] },
    { oauth2: ['crm.schemas.notes.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.schemas.meetings.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.schemas.calls.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
  ],
})

export const postCrmProperties202609ObjectTypeBatchArchiveRoute = createRoute({
  method: 'post',
  path: '/crm/properties/2026-09/{objectType}/batch/archive',
  tags: ['Batch'],
  summary: 'Archive a batch of properties',
  description:
    'Archive a provided list of properties. This method will return a 204 No Content response on success regardless of the initial state of the property (e.g. active, already archived, non-existent).',
  operationId:
    'post-/crm/properties/2026-09/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The type of object whose properties are to be archived. This is a required parameter and identifies the specific object type within HubSpot.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchInputPropertyNameSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [
    { oauth2: ['crm.schemas.quotes.write'] },
    { oauth2: ['crm.schemas.invoices.write'] },
    { oauth2: ['crm.schemas.orders.write'] },
    { oauth2: ['crm.schemas.commercepayments.write'] },
    { oauth2: ['crm.schemas.courses.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.appointments.write'] },
    { oauth2: ['crm.schemas.tasks.write'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.schemas.carts.write'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['crm.schemas.subscriptions.write'] },
    { oauth2: ['crm.schemas.emails.write'] },
    { oauth2: ['crm.schemas.custom.write'] },
    { oauth2: ['crm.schemas.listings.write'] },
    { oauth2: ['crm.pipelines.orders.write'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.schemas.services.write'] },
    { oauth2: ['crm.schemas.notes.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.schemas.meetings.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.schemas.calls.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
  ],
})

export const postCrmProperties202609ObjectTypeBatchCreateRoute = createRoute({
  method: 'post',
  path: '/crm/properties/2026-09/{objectType}/batch/create',
  tags: ['Batch'],
  summary: 'Create a batch of properties',
  description:
    'Create a batch of properties using the same rules as when creating an individual property.',
  operationId:
    'post-/crm/properties/2026-09/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The type of CRM object for which the properties are being created, such as contacts, companies, or deals.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchInputPropertyCreateSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: BatchResponsePropertySchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': { schema: BatchResponsePropertyWithErrorsSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.schemas.quotes.write'] },
    { oauth2: ['crm.schemas.invoices.write'] },
    { oauth2: ['crm.schemas.orders.write'] },
    { oauth2: ['crm.schemas.commercepayments.write'] },
    { oauth2: ['crm.schemas.courses.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.appointments.write'] },
    { oauth2: ['crm.schemas.tasks.write'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.schemas.carts.write'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['crm.schemas.subscriptions.write'] },
    { oauth2: ['crm.schemas.emails.write'] },
    { oauth2: ['crm.schemas.custom.write'] },
    { oauth2: ['crm.schemas.listings.write'] },
    { oauth2: ['crm.pipelines.orders.write'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.schemas.services.write'] },
    { oauth2: ['crm.schemas.notes.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.schemas.meetings.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.schemas.calls.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
  ],
})

export const postCrmProperties202609ObjectTypeBatchReadRoute = createRoute({
  method: 'post',
  path: '/crm/properties/2026-09/{objectType}/batch/read',
  tags: ['Batch'],
  summary: 'Read a batch of properties',
  description: 'Read a provided list of properties.',
  operationId:
    'post-/crm/properties/2026-09/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The type of CRM object for which properties are being retrieved. This is a required path parameter.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            description:
              'A string specifying the locale to use for the response. This can be used to tailor the response to a specific language or region.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchReadInputPropertyNameSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: BatchResponsePropertySchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': { schema: BatchResponsePropertyWithErrorsSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.owners.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.quotes.read'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.schemas.services.read'] },
    { oauth2: ['crm.schemas.line_items.read'] },
    { oauth2: ['crm.schemas.subscriptions.read'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.schemas.companies.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.schemas.calls.read'] },
    { oauth2: ['crm.schemas.meetings.read'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.schemas.orders.read'] },
    { oauth2: ['crm.schemas.emails.read'] },
    { oauth2: ['crm.schemas.deals.read'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.notes.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.schemas.contacts.read'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.schemas.tasks.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.schemas.invoices.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.marketing_events.read'] },
    { oauth2: ['crm.pipelines.orders.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.schemas.projects.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['automation'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.schemas.carts.read'] },
    { oauth2: ['cpq.quotes.write'] },
    { oauth2: ['crm.schemas.listings.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['cpq.quotes.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.schemas.appointments.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.schemas.courses.read'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.pipelines.approval.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.marketing_events.write'] },
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.schemas.commercepayments.read'] },
    { oauth2: ['crm.objects.listings.read'] },
  ],
})

export const getCrmProperties202609ObjectTypeGroupsRoute = createRoute({
  method: 'get',
  path: '/crm/properties/2026-09/{objectType}/groups',
  tags: ['Basic'],
  summary: 'Read all property groups',
  description:
    'Read all existing property groups for the specified object type and HubSpot account.',
  operationId:
    'get-/crm/properties/2026-09/{objectType}/groups_/crm/properties/2025-09/{objectType}/groups',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              "The type of CRM object for which to retrieve property groups, such as 'contacts' or 'deals'.",
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            description:
              'The language locale to use for property group labels. This can help in displaying labels in the preferred language.',
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
          schema: CollectionResponsePropertyGroupNoPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.owners.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.quotes.read'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.schemas.services.read'] },
    { oauth2: ['crm.schemas.line_items.read'] },
    { oauth2: ['crm.schemas.subscriptions.read'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.schemas.companies.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.schemas.calls.read'] },
    { oauth2: ['crm.schemas.meetings.read'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.schemas.orders.read'] },
    { oauth2: ['crm.schemas.emails.read'] },
    { oauth2: ['crm.schemas.deals.read'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.notes.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.schemas.contacts.read'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.schemas.tasks.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.schemas.invoices.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.marketing_events.read'] },
    { oauth2: ['crm.pipelines.orders.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.schemas.projects.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['automation'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.schemas.carts.read'] },
    { oauth2: ['cpq.quotes.write'] },
    { oauth2: ['crm.schemas.listings.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['cpq.quotes.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.schemas.appointments.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.schemas.courses.read'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.pipelines.approval.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.marketing_events.write'] },
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.schemas.commercepayments.read'] },
    { oauth2: ['crm.objects.listings.read'] },
  ],
})

export const postCrmProperties202609ObjectTypeGroupsRoute = createRoute({
  method: 'post',
  path: '/crm/properties/2026-09/{objectType}/groups',
  tags: ['Basic'],
  summary: 'Create a property group',
  description: 'Create and return a copy of a new property group.',
  operationId:
    'post-/crm/properties/2026-09/{objectType}/groups_/crm/properties/2025-09/{objectType}/groups',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The type of object for which the property group is being created, such as contacts, companies, or deals.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PropertyGroupCreateSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PropertyGroupSchema, example: null } },
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
    { oauth2: ['crm.schemas.quotes.write'] },
    { oauth2: ['crm.schemas.invoices.write'] },
    { oauth2: ['crm.schemas.orders.write'] },
    { oauth2: ['crm.schemas.commercepayments.write'] },
    { oauth2: ['crm.schemas.courses.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.appointments.write'] },
    { oauth2: ['crm.schemas.tasks.write'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.schemas.carts.write'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['crm.schemas.subscriptions.write'] },
    { oauth2: ['crm.schemas.emails.write'] },
    { oauth2: ['crm.schemas.custom.write'] },
    { oauth2: ['crm.schemas.listings.write'] },
    { oauth2: ['crm.pipelines.orders.write'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.schemas.services.write'] },
    { oauth2: ['crm.schemas.notes.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.schemas.meetings.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.schemas.calls.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
  ],
})

export const getCrmProperties202609ObjectTypeGroupsGroupNameRoute = createRoute({
  method: 'get',
  path: '/crm/properties/2026-09/{objectType}/groups/{groupName}',
  tags: ['Basic'],
  summary: 'Read a property group',
  description: 'Read a property group identified by {groupName}.',
  operationId:
    'get-/crm/properties/2026-09/{objectType}/groups/{groupName}_/crm/properties/2025-09/{objectType}/groups/{groupName}',
  request: {
    params: z.object({
      groupName: z
        .string()
        .openapi({
          param: {
            name: 'groupName',
            in: 'path',
            description: 'The name of the property group to retrieve details for.',
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
              'The type of CRM object for which the property group is being retrieved, such as contacts or deals.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            description:
              'The language locale to use for the response. This can affect the language of the labels and descriptions returned.',
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
      content: { 'application/json': { schema: PropertyGroupSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.owners.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.quotes.read'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.schemas.services.read'] },
    { oauth2: ['crm.schemas.line_items.read'] },
    { oauth2: ['crm.schemas.subscriptions.read'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.schemas.companies.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.schemas.calls.read'] },
    { oauth2: ['crm.schemas.meetings.read'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.schemas.orders.read'] },
    { oauth2: ['crm.schemas.emails.read'] },
    { oauth2: ['crm.schemas.deals.read'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.notes.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.schemas.contacts.read'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.schemas.tasks.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.schemas.invoices.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.marketing_events.read'] },
    { oauth2: ['crm.pipelines.orders.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.schemas.projects.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['automation'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.schemas.carts.read'] },
    { oauth2: ['cpq.quotes.write'] },
    { oauth2: ['crm.schemas.listings.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['cpq.quotes.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.schemas.appointments.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.schemas.courses.read'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.pipelines.approval.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.marketing_events.write'] },
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.schemas.commercepayments.read'] },
    { oauth2: ['crm.objects.listings.read'] },
  ],
})

export const deleteCrmProperties202609ObjectTypeGroupsGroupNameRoute = createRoute({
  method: 'delete',
  path: '/crm/properties/2026-09/{objectType}/groups/{groupName}',
  tags: ['Basic'],
  summary: 'Archive a property group',
  description: 'Move a property group identified by {groupName} to the recycling bin.',
  operationId:
    'delete-/crm/properties/2026-09/{objectType}/groups/{groupName}_/crm/properties/2025-09/{objectType}/groups/{groupName}',
  request: {
    params: z.object({
      groupName: z
        .string()
        .openapi({
          param: {
            name: 'groupName',
            in: 'path',
            description: 'The unique name of the property group to be deleted.',
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
              'The type of object for which the property group is defined, such as contacts, companies, or deals.',
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
    { oauth2: ['crm.schemas.quotes.write'] },
    { oauth2: ['crm.schemas.invoices.write'] },
    { oauth2: ['crm.schemas.orders.write'] },
    { oauth2: ['crm.schemas.commercepayments.write'] },
    { oauth2: ['crm.schemas.courses.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.appointments.write'] },
    { oauth2: ['crm.schemas.tasks.write'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.schemas.carts.write'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['crm.schemas.subscriptions.write'] },
    { oauth2: ['crm.schemas.emails.write'] },
    { oauth2: ['crm.schemas.custom.write'] },
    { oauth2: ['crm.schemas.listings.write'] },
    { oauth2: ['crm.pipelines.orders.write'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.schemas.services.write'] },
    { oauth2: ['crm.schemas.notes.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.schemas.meetings.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.schemas.calls.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
  ],
})

export const patchCrmProperties202609ObjectTypeGroupsGroupNameRoute = createRoute({
  method: 'patch',
  path: '/crm/properties/2026-09/{objectType}/groups/{groupName}',
  tags: ['Basic'],
  summary: 'Update a property group',
  description:
    'Perform a partial update of a property group identified by {groupName}. Provided fields will be overwritten.',
  operationId:
    'patch-/crm/properties/2026-09/{objectType}/groups/{groupName}_/crm/properties/2025-09/{objectType}/groups/{groupName}',
  request: {
    params: z.object({
      groupName: z
        .string()
        .openapi({
          param: {
            name: 'groupName',
            in: 'path',
            description: 'The name of the property group to update.',
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
              'The type of object for which the property group is being updated, such as contacts, companies, or deals.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PropertyGroupUpdateSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PropertyGroupSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.schemas.quotes.write'] },
    { oauth2: ['crm.schemas.invoices.write'] },
    { oauth2: ['crm.schemas.orders.write'] },
    { oauth2: ['crm.schemas.commercepayments.write'] },
    { oauth2: ['crm.schemas.courses.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.appointments.write'] },
    { oauth2: ['crm.schemas.tasks.write'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.schemas.carts.write'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['crm.schemas.subscriptions.write'] },
    { oauth2: ['crm.schemas.emails.write'] },
    { oauth2: ['crm.schemas.custom.write'] },
    { oauth2: ['crm.schemas.listings.write'] },
    { oauth2: ['crm.pipelines.orders.write'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.schemas.services.write'] },
    { oauth2: ['crm.schemas.notes.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.schemas.meetings.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.schemas.calls.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
  ],
})

export const getCrmProperties202609ObjectTypePropertyNameRoute = createRoute({
  method: 'get',
  path: '/crm/properties/2026-09/{objectType}/{propertyName}',
  tags: ['Basic'],
  summary: 'Read a property',
  description: 'Read a property identified by {propertyName}.',
  operationId:
    'get-/crm/properties/2026-09/{objectType}/{propertyName}_/crm/properties/2025-09/{objectType}/{propertyName}',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              "The type of object the property belongs to, such as 'contacts' or 'deals'.",
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      propertyName: z
        .string()
        .openapi({
          param: {
            name: 'propertyName',
            in: 'path',
            description: 'The name of the property to retrieve.',
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
      dataSensitivity: z
        .enum(['highly_sensitive', 'non_sensitive', 'sensitive'])
        .default('non_sensitive')
        .exactOptional()
        .openapi({
          param: {
            name: 'dataSensitivity',
            in: 'query',
            description:
              "The level of data sensitivity to filter properties by. Valid values are 'non_sensitive', 'sensitive', and 'highly_sensitive'. Defaults to 'non_sensitive'.",
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              example: null,
              default: 'non_sensitive',
              enum: ['highly_sensitive', 'non_sensitive', 'sensitive'],
            },
          },
          example: null,
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            description: 'The locale to use for property labels and descriptions.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      properties: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description: 'A comma-separated list of property names to include in the response.',
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
      content: { 'application/json': { schema: PropertySchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.owners.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.quotes.read'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.schemas.services.read'] },
    { oauth2: ['crm.schemas.line_items.read'] },
    { oauth2: ['crm.schemas.subscriptions.read'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.schemas.companies.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.schemas.calls.read'] },
    { oauth2: ['crm.schemas.meetings.read'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.schemas.orders.read'] },
    { oauth2: ['crm.schemas.emails.read'] },
    { oauth2: ['crm.schemas.deals.read'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.notes.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.schemas.contacts.read'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.schemas.tasks.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.schemas.invoices.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.marketing_events.read'] },
    { oauth2: ['crm.pipelines.orders.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.schemas.projects.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['automation'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.schemas.carts.read'] },
    { oauth2: ['cpq.quotes.write'] },
    { oauth2: ['crm.schemas.listings.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['cpq.quotes.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.schemas.appointments.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.schemas.courses.read'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.pipelines.approval.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.marketing_events.write'] },
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.schemas.commercepayments.read'] },
    { oauth2: ['crm.objects.listings.read'] },
  ],
})

export const deleteCrmProperties202609ObjectTypePropertyNameRoute = createRoute({
  method: 'delete',
  path: '/crm/properties/2026-09/{objectType}/{propertyName}',
  tags: ['Basic'],
  summary: 'Archive a property',
  description: 'Move a property identified by {propertyName} to the recycling bin.',
  operationId:
    'delete-/crm/properties/2026-09/{objectType}/{propertyName}_/crm/properties/2025-09/{objectType}/{propertyName}',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The type of CRM object that the property belongs to, such as contacts, companies, or deals.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      propertyName: z
        .string()
        .openapi({
          param: {
            name: 'propertyName',
            in: 'path',
            description: 'The unique name of the property to delete.',
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
    { oauth2: ['crm.schemas.quotes.write'] },
    { oauth2: ['crm.schemas.invoices.write'] },
    { oauth2: ['crm.schemas.orders.write'] },
    { oauth2: ['crm.schemas.commercepayments.write'] },
    { oauth2: ['crm.schemas.courses.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.appointments.write'] },
    { oauth2: ['crm.schemas.tasks.write'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.schemas.carts.write'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['crm.schemas.subscriptions.write'] },
    { oauth2: ['crm.schemas.emails.write'] },
    { oauth2: ['crm.schemas.custom.write'] },
    { oauth2: ['crm.schemas.listings.write'] },
    { oauth2: ['crm.pipelines.orders.write'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.schemas.services.write'] },
    { oauth2: ['crm.schemas.notes.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.schemas.meetings.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.schemas.calls.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
  ],
})

export const patchCrmProperties202609ObjectTypePropertyNameRoute = createRoute({
  method: 'patch',
  path: '/crm/properties/2026-09/{objectType}/{propertyName}',
  tags: ['Basic'],
  summary: 'Update a property',
  description:
    'Perform a partial update of a property identified by { propertyName }. Provided fields will be overwritten.',
  operationId:
    'patch-/crm/properties/2026-09/{objectType}/{propertyName}_/crm/properties/2025-09/{objectType}/{propertyName}',
  request: {
    params: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'path',
            description:
              'The type of object for which the property is being updated, such as contacts, companies, or deals.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      propertyName: z
        .string()
        .openapi({
          param: {
            name: 'propertyName',
            in: 'path',
            description: 'The unique name of the property to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PropertyUpdateSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PropertySchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.schemas.quotes.write'] },
    { oauth2: ['crm.schemas.invoices.write'] },
    { oauth2: ['crm.schemas.orders.write'] },
    { oauth2: ['crm.schemas.commercepayments.write'] },
    { oauth2: ['crm.schemas.courses.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.appointments.write'] },
    { oauth2: ['crm.schemas.tasks.write'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.schemas.carts.write'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
    { oauth2: ['crm.schemas.subscriptions.write'] },
    { oauth2: ['crm.schemas.emails.write'] },
    { oauth2: ['crm.schemas.custom.write'] },
    { oauth2: ['crm.schemas.listings.write'] },
    { oauth2: ['crm.pipelines.orders.write'] },
    { oauth2: ['crm.objects.users.write'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.schemas.services.write'] },
    { oauth2: ['crm.schemas.notes.write'] },
    { oauth2: ['crm.objects.orders.write'] },
    { oauth2: ['crm.schemas.meetings.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.schemas.calls.write'] },
    { oauth2: ['crm.objects.carts.write'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
  ],
})
