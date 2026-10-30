import { createRoute, z } from '@hono/zod-openapi'

const IntegerFieldSchemaSchema = z
  .object({
    maximum: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum value allowed for the integer field.', example: null }),
    minimum: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The minimum value allowed for the integer field.', example: null }),
    type: z
      .literal('INTEGER')
      .default('INTEGER')
      .openapi({ description: 'The type of the field, which is set to INTEGER.', example: null }),
  })
  .openapi({ title: 'INTEGER', required: ['type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('IntegerFieldSchema')

const LongFieldSchemaSchema = z
  .object({
    maximum: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The maximum value allowed for the long field.',
        example: null,
      }),
    minimum: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The minimum value allowed for the long field.',
        example: null,
      }),
    type: z
      .literal('LONG')
      .default('LONG')
      .openapi({ description: 'The type of the field, which is LONG by default.', example: null }),
  })
  .openapi({ title: 'LONG', required: ['type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('LongFieldSchema')

const DoubleFieldSchemaSchema = z
  .object({
    maximum: z
      .number()
      .exactOptional()
      .openapi({ description: 'The maximum allowable value for the double field.', example: null }),
    minimum: z
      .number()
      .exactOptional()
      .openapi({ description: 'The minimum allowable value for the double field.', example: null }),
    type: z
      .literal('DOUBLE')
      .default('DOUBLE')
      .openapi({ description: 'Indicates the field type as DOUBLE.', example: null }),
  })
  .openapi({ title: 'DOUBLE', required: ['type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('DoubleFieldSchema')

const StringFieldSchemaSchema = z
  .object({
    format: z
      .enum([
        'DATE',
        'DATE_TIME',
        'MONTH_AND_DAY',
        'OBJECT_COORDINATE',
        'OBJECT_TYPE',
        'TIME',
        'URI',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the string, with accepted values: DATE, DATE_TIME, OBJECT_COORDINATE, TIME, URI.',
        example: null,
      }),
    type: z
      .literal('STRING')
      .default('STRING')
      .openapi({
        description: 'Indicates that the type is a string, with the default value being STRING.',
        example: null,
      }),
  })
  .openapi({ title: 'STRING', required: ['type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('StringFieldSchema')

const BooleanFieldSchemaSchema = z
  .object({
    type: z
      .literal('BOOLEAN')
      .default('BOOLEAN')
      .openapi({
        description:
          'Specifies the field type as BOOLEAN, indicating that the field can hold a true or false value.',
        example: null,
      }),
  })
  .openapi({ title: 'BOOLEAN', required: ['type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('BooleanFieldSchema')

const ObjectFieldSchemaSchema = z
  .object({
    properties: z
      .object({})
      .openapi({ description: 'Contains the properties of the object.', example: null }),
    type: z
      .literal('OBJECT')
      .default('OBJECT')
      .openapi({
        description: "Specifies the type of the field, which is 'OBJECT' by default.",
        example: null,
      }),
  })
  .openapi({
    title: 'OBJECT',
    required: ['properties', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ObjectFieldSchema')

const UnknownFieldSchemaSchema = z
  .object({
    type: z
      .literal('UNKNOWN')
      .default('UNKNOWN')
      .openapi({
        description:
          "A string that indicates the type of the field. In this schema, it is always set to 'UNKNOWN'.",
        example: null,
      }),
  })
  .openapi({ title: 'UNKNOWN', required: ['type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('UnknownFieldSchema')

type ArrayFieldSchemaType = {
  items:
    | z.infer<typeof IntegerFieldSchemaSchema>
    | z.infer<typeof LongFieldSchemaSchema>
    | z.infer<typeof DoubleFieldSchemaSchema>
    | z.infer<typeof StringFieldSchemaSchema>
    | z.infer<typeof BooleanFieldSchemaSchema>
    | ArrayFieldSchemaType
    | z.infer<typeof ObjectFieldSchemaSchema>
    | z.infer<typeof UnknownFieldSchemaSchema>
  type: 'ARRAY'
}

const ArrayFieldSchemaSchema: z.ZodType<ArrayFieldSchemaType> = z
  .lazy(() =>
    z
      .object({
        items: z
          .xor([
            IntegerFieldSchemaSchema,
            LongFieldSchemaSchema,
            DoubleFieldSchemaSchema,
            StringFieldSchemaSchema,
            BooleanFieldSchemaSchema,
            ArrayFieldSchemaSchema,
            ObjectFieldSchemaSchema,
            UnknownFieldSchemaSchema,
          ])
          .openapi({
            description:
              'Defines the type of elements contained within the array, which can be an integer, long, double, string, boolean, another array, or an object.',
            example: null,
          }),
        type: z
          .literal('ARRAY')
          .default('ARRAY')
          .openapi({ description: "Specifies that the field is of type 'ARRAY'.", example: null }),
      })
      .openapi({
        title: 'ARRAY',
        required: ['items', 'type'],
        example: null,
        'x-hubspot-sub-type-impl': true,
      }),
  )
  .openapi('ArrayFieldSchema')

const CallbackCompletionBatchRequestSchema = z
  .object({
    callbackId: z
      .string()
      .openapi({ description: 'The unique identifier for the callback.', example: null }),
    failureReasonType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specifies the type of failure reason for the callback completion.',
        example: null,
      }),
    outputFields: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'Holds the output fields for the callback completion.',
        example: null,
      }),
    typedOutputs: z
      .object({})
      .openapi({
        description: 'Contains the typed outputs for the callback completion.',
        example: null,
      }),
  })
  .openapi({ required: ['callbackId', 'outputFields', 'typedOutputs'], example: null })
  .openapi('CallbackCompletionBatchRequest')

const BatchInputCallbackCompletionBatchRequestSchema = z
  .object({
    inputs: z
      .array(CallbackCompletionBatchRequestSchema)
      .openapi({
        description:
          'An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputCallbackCompletionBatchRequest')

const CallbackCompletionRequestSchema = z
  .object({
    failureReasonType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates the reason for the failure of a callback completion.',
        example: null,
      }),
    outputFields: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'Contains the output fields associated with the callback, with each field represented as a key-value pair.',
        example: null,
      }),
    typedOutputs: z
      .object({})
      .openapi({
        description: 'Holds the typed outputs related to the callback, structured as an object.',
        example: null,
      }),
  })
  .openapi({ required: ['outputFields', 'typedOutputs'], example: null })
  .openapi('CallbackCompletionRequest')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token that indicates the position after the last item on the current page. This token is used to fetch the next page of results.',
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

const PublicExecutionTranslationRuleSchema = z
  .object({
    conditions: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description: 'Defines the conditions that must be met for the execution rule to apply.',
        example: null,
      }),
    labelName: z
      .string()
      .openapi({
        description: 'Specifies the name of the label associated with the execution rule.',
        example: null,
      }),
  })
  .openapi({ required: ['conditions', 'labelName'], example: null })
  .openapi('PublicExecutionTranslationRule')

const PublicActionFunctionIdentifierSchema = z
  .object({
    functionType: z
      .enum([
        'POST_ACTION_EXECUTION',
        'POST_FETCH_OPTIONS',
        'PRE_ACTION_EXECUTION',
        'PRE_FETCH_OPTIONS',
      ])
      .openapi({
        description:
          'The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for the function.', example: null }),
  })
  .openapi({ required: ['functionType'], example: null })
  .openapi('PublicActionFunctionIdentifier')

const PublicSingleFieldDependencySchema = z
  .object({
    controllingFieldName: z
      .string()
      .openapi({
        description: 'The name of the field that controls the dependency.',
        example: null,
      }),
    dependencyType: z
      .literal('SINGLE_FIELD')
      .default('SINGLE_FIELD')
      .openapi({
        description: "The type of dependency, with the default value being 'SINGLE_FIELD'.",
        example: null,
      }),
    dependentFieldNames: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the names of fields that are dependent on the controlling field.',
        example: null,
      }),
  })
  .openapi({
    title: 'SINGLE_FIELD',
    required: ['controllingFieldName', 'dependencyType', 'dependentFieldNames'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicSingleFieldDependency')

const PublicConditionalSingleFieldDependencySchema = z
  .object({
    controllingFieldName: z
      .string()
      .openapi({
        description: 'The name of the field that determines the dependency.',
        example: null,
      }),
    controllingFieldValue: z
      .string()
      .openapi({
        description: 'The value of the controlling field that triggers the dependency.',
        example: null,
      }),
    dependencyType: z
      .literal('CONDITIONAL_SINGLE_FIELD')
      .default('CONDITIONAL_SINGLE_FIELD')
      .openapi({
        description:
          'The type of dependency, with the default value being CONDITIONAL_SINGLE_FIELD.',
        example: null,
      }),
    dependentFieldNames: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the names of fields that are dependent on the controlling field.',
        example: null,
      }),
  })
  .openapi({
    title: 'CONDITIONAL_SINGLE_FIELD',
    required: [
      'controllingFieldName',
      'controllingFieldValue',
      'dependencyType',
      'dependentFieldNames',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicConditionalSingleFieldDependency')

const PublicOptionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the option.', example: null }),
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The position of the option relative to others in the list.',
        example: null,
      }),
    label: z
      .string()
      .openapi({ description: 'A user-friendly label that identifies the option.', example: null }),
    value: z.string().openapi({ description: 'The actual value of the option.', example: null }),
  })
  .openapi({ required: ['label', 'value'], example: null })
  .openapi('PublicOption')

const PublicFieldTypeDefinitionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "A detailed explanation of the field's purpose.", example: null }),
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
      .openapi({
        description:
          'The type of field, with accepted values including booleancheckbox, calculation_equation, checkbox, date, file, html, number, phonenumber, radio, select, text, and textarea.',
        example: null,
      }),
    helpText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information or guidance about the field.',
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user-friendly name for the field.', example: null }),
    name: z
      .string()
      .openapi({ description: 'The internal name used to identify the field.', example: null }),
    options: z
      .array(PublicOptionSchema)
      .openapi({
        description:
          'An array of options available for the field, each defined by the PublicOption schema.',
        example: null,
      }),
    optionsUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL that provides options for the field.', example: null }),
    referencedObjectType: z
      .literal('OWNER')
      .exactOptional()
      .openapi({
        description:
          'The type of object that the field references, with accepted values including OWNER.',
        example: null,
      }),
    type: z
      .enum([
        'bool',
        'date',
        'datetime',
        'enumeration',
        'json',
        'number',
        'object_coordinates',
        'phone_number',
        'string',
      ])
      .openapi({
        description:
          'The data type of the field, with accepted values including bool, date, datetime, enumeration, json, number, object_coordinates, phone_number, and string.',
        example: null,
      }),
  })
  .openapi({ required: ['name', 'options', 'type'], example: null })
  .openapi('PublicFieldTypeDefinition')

const PublicInputFieldDefinitionSchema = z
  .object({
    isRequired: z
      .boolean()
      .openapi({ description: 'Indicates whether the input field is mandatory.', example: null }),
    supportedValueTypes: z
      .array(z.enum(['STATIC_VALUE', 'OBJECT_PROPERTY']).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          "An array indicating the types of values that the input field can support. Valid values include 'STATIC_VALUE' and 'OBJECT_PROPERTY'.",
        example: null,
      }),
    typeDefinition: PublicFieldTypeDefinitionSchema,
  })
  .openapi({ required: ['isRequired', 'typeDefinition'], example: null })
  .openapi('PublicInputFieldDefinition')

const PublicActionLabelsSchema = z
  .object({
    actionCardContent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content displayed on the action card.', example: null }),
    actionDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of what the action does.', example: null }),
    actionName: z.string().openapi({ description: 'The name of the action.', example: null }),
    appDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The display name of the application associated with the action.',
        example: null,
      }),
    executionRules: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Rules that govern the execution of the action.', example: null }),
    inputFieldDescriptions: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Descriptions for each input field.', example: null }),
    inputFieldLabels: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Labels for the input fields.', example: null }),
    inputFieldOptionLabels: z
      .record(
        z.string(),
        z.record(z.string(), z.string().openapi({ example: null })).openapi({ example: null }),
      )
      .exactOptional()
      .openapi({ description: 'Labels for the options available in input fields.', example: null }),
    outputFieldLabels: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Labels for the output fields.', example: null }),
  })
  .openapi({ required: ['actionName'], example: null })
  .openapi('PublicActionLabels')

const PublicObjectRequestOptionsSchema = z
  .object({
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the names of the properties to be requested. Each string in the array specifies a property of the object that should be included in the response.',
        example: null,
      }),
  })
  .openapi({ required: ['properties'], example: null })
  .openapi('PublicObjectRequestOptions')

const OptionSchema = z
  .object({
    description: z
      .string()
      .openapi({
        description: 'A string providing additional details about the option.',
        example: null,
      }),
    displayOrder: z
      .int32()
      .openapi({
        description:
          'An integer indicating the order in which the option should be displayed relative to other options.',
        example: null,
      }),
    doubleData: z
      .number()
      .openapi({ description: 'A numerical value associated with the option.', example: null }),
    hidden: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the option is hidden from the user interface.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description: 'The display name of the option, shown to users. It is a string.',
        example: null,
      }),
    readOnly: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the option is read-only and cannot be modified.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'The internal value of the option, used in data processing. It is a string.',
        example: null,
      }),
  })
  .openapi({
    required: ['description', 'displayOrder', 'doubleData', 'hidden', 'label', 'readOnly', 'value'],
    description: 'A HubSpot property option',
    example: null,
  })
  .openapi('Option')

const FieldTypeDefinitionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: "A detailed explanation of the field's purpose and usage.",
        example: null,
      }),
    externalOptions: z
      .boolean()
      .openapi({
        description: "Indicates whether the field's options are sourced externally.",
        example: null,
      }),
    externalOptionsReferenceType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specifies the type of external reference for options.',
        example: null,
      }),
    fieldType: z
      .enum([
        'booleancheckbox',
        'calculation_equation',
        'calculation_read_time',
        'calculation_rollup',
        'calculation_score',
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
        'unknown',
      ])
      .exactOptional()
      .openapi({
        description:
          "Describes the field's type in the UI, with accepted values like booleancheckbox, calculation_equation, checkbox, date, file, html, number, phonenumber, radio, select, text, textarea, unknown.",
        example: null,
      }),
    helpText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information or guidance about the field.',
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-friendly label for the field.', example: null }),
    name: z
      .string()
      .openapi({ description: 'The unique identifier for the field.', example: null }),
    options: z
      .array(OptionSchema)
      .openapi({
        description:
          'An array of options available for the field, each represented by an Option object.',
        example: null,
      }),
    optionsUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL that provides options for the field.', example: null }),
    referencedObjectType: z
      .enum([
        'ABANDONED_CART',
        'ACCEPTANCE_TEST',
        'AD',
        'AD_ACCOUNT',
        'AD_CAMPAIGN',
        'AD_GROUP',
        'AI_FORECAST',
        'ALL_PAGES',
        'APPROVAL',
        'APPROVAL_STEP',
        'ATTRIBUTION',
        'AUDIENCE',
        'AUTOMATION_JOURNEY',
        'AUTOMATION_PLATFORM_FLOW',
        'AUTOMATION_PLATFORM_FLOW_ACTION',
        'BET_ALERT',
        'BET_DELIVERABLE_SERVICE',
        'BLOG_LISTING_PAGE',
        'BLOG_POST',
        'CALL',
        'CAMPAIGN',
        'CAMPAIGN_BUDGET_ITEM',
        'CAMPAIGN_SPEND_ITEM',
        'CAMPAIGN_STEP',
        'CAMPAIGN_TEMPLATE',
        'CAMPAIGN_TEMPLATE_STEP',
        'CART',
        'CASE_STUDY',
        'CHATFLOW',
        'CLIP',
        'CMS_URL',
        'COMBO_EVENT_CONFIGURATION',
        'COMMERCE_PAYMENT',
        'COMMUNICATION',
        'COMPANY',
        'CONTACT',
        'CONTACT_CREATE_ATTRIBUTION',
        'CONTENT',
        'CONTENT_AUDIT',
        'CONTENT_AUDIT_PAGE',
        'CONVERSATION',
        'CONVERSATION_INBOX',
        'CONVERSATION_SESSION',
        'CRM_OBJECTS_DUMMY_TYPE',
        'CRM_PIPELINES_DUMMY_TYPE',
        'CTA',
        'CTA_VARIANT',
        'DATA_PRIVACY_CONSENT',
        'DATA_SYNC_STATE',
        'DEAL',
        'DEAL_CREATE_ATTRIBUTION',
        'DEAL_REGISTRATION',
        'DEAL_SPLIT',
        'DISCOUNT',
        'DISCOUNT_CODE',
        'DISCOUNT_TEMPLATE',
        'EMAIL',
        'ENGAGEMENT',
        'EXPORT',
        'EXTERNAL_WEB_URL',
        'FEE',
        'FEEDBACK_SUBMISSION',
        'FEEDBACK_SURVEY',
        'FILE_MANAGER_FILE',
        'FILE_MANAGER_FOLDER',
        'FOLDER',
        'FORECAST',
        'FORM',
        'FORM_SUBMISSION_INBOUNDDB',
        'GOAL_TARGET',
        'GOAL_TARGET_GROUP',
        'GOAL_TEMPLATE',
        'GSC_PROPERTY',
        'HUB',
        'IMPORT',
        'INVOICE',
        'KEYWORD',
        'KNOWLEDGE_ARTICLE',
        'LANDING_PAGE',
        'LEAD',
        'LINE_ITEM',
        'MARKETING_CALENDAR',
        'MARKETING_CAMPAIGN_UTM',
        'MARKETING_EMAIL',
        'MARKETING_EVENT',
        'MARKETING_EVENT_ATTENDANCE',
        'MARKETING_SMS',
        'MEDIA_BRIDGE',
        'MEETING_EVENT',
        'MIC',
        'NOTE',
        'OBJECT_LIST',
        'ORDER',
        'OWNER',
        'PARTNER_ACCOUNT',
        'PARTNER_CLIENT',
        'PARTNER_CLIENT_REVENUE',
        'PARTNER_SERVICE',
        'PAYMENT_LINK',
        'PAYMENT_SCHEDULE',
        'PAYMENT_SCHEDULE_INSTALLMENT',
        'PERMISSIONS_TESTING',
        'PLAYBOOK',
        'PLAYBOOK_QUESTION',
        'PLAYBOOK_SUBMISSION',
        'PLAYBOOK_SUBMISSION_ANSWER',
        'PLAYLIST',
        'PLAYLIST_FOLDER',
        'PODCAST_EPISODE',
        'PORTAL',
        'PORTAL_OBJECT_SYNC_MESSAGE',
        'POSTAL_MAIL',
        'PRIVACY_SCANNER_COOKIE',
        'PRODUCT',
        'PRODUCT_OR_FOLDER',
        'PROPERTY_INFO',
        'PROSPECTING_AGENT_CONTACT_ASSIGNMENT',
        'PUBLISHING_TASK',
        'QUARANTINED_SUBMISSION',
        'QUOTA',
        'QUOTE',
        'QUOTE_FIELD',
        'QUOTE_MODULE',
        'QUOTE_MODULE_FIELD',
        'QUOTE_TEMPLATE',
        'RESTORABLE_CRM_OBJECT',
        'ROSTER',
        'ROSTER_MEMBER',
        'SALES_DOCUMENT',
        'SALES_TASK',
        'SALES_WORKLOAD',
        'SALESFORCE_SYNC_ERROR',
        'SCHEDULING_PAGE',
        'SCHEMAS_BACKEND_TEST',
        'SCORE_CONFIGURATION',
        'SEQUENCE',
        'SEQUENCE_ENROLLMENT',
        'SEQUENCE_STEP',
        'SEQUENCE_STEP_ENROLLMENT',
        'SERVICE',
        'SITE_PAGE',
        'SNIPPET',
        'SOCIAL_BROADCAST',
        'SOCIAL_CHANNEL',
        'SOCIAL_POST',
        'SOCIAL_PROFILE',
        'SOX_PROTECTED_DUMMY_TYPE',
        'SOX_PROTECTED_TEST_TYPE',
        'SUBMISSION_TAG',
        'SUBSCRIPTION',
        'TASK',
        'TASK_TEMPLATE',
        'TAX',
        'TEMPLATE',
        'TICKET',
        'UNKNOWN',
        'UNSUBSCRIBE',
        'USER',
        'VIEW',
        'VIEW_BLOCK',
        'WEB_INTERACTIVE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of object that the field references, with accepted values like OWNER.',
        example: null,
      }),
    schema: z
      .xor([
        IntegerFieldSchemaSchema,
        LongFieldSchemaSchema,
        DoubleFieldSchemaSchema,
        StringFieldSchemaSchema,
        BooleanFieldSchemaSchema,
        ArrayFieldSchemaSchema,
        ObjectFieldSchemaSchema,
        UnknownFieldSchemaSchema,
      ])
      .openapi({
        description: 'Defines the structure and constraints of the field.',
        example: null,
      }),
    type: z
      .enum([
        'bool',
        'currency_number',
        'date',
        'datetime',
        'enumeration',
        'json',
        'number',
        'object_coordinates',
        'phone_number',
        'string',
        'time_range',
      ])
      .openapi({
        description:
          'Specifies the data type of the field, with accepted values like bool, date, datetime, enumeration, json, number, object_coordinates, phone_number, string.',
        example: null,
      }),
    useChirp: z
      .boolean()
      .openapi({
        description: 'Specifies whether the field uses the Chirp feature.',
        example: null,
      }),
  })
  .openapi({
    required: ['externalOptions', 'name', 'options', 'schema', 'type', 'useChirp'],
    example: null,
  })
  .openapi('FieldTypeDefinition')

const OutputFieldDefinitionSchema = z
  .object({ typeDefinition: FieldTypeDefinitionSchema })
  .openapi({ required: ['typeDefinition'], example: null })
  .openapi('OutputFieldDefinition')

const PublicActionDefinitionSchema = z
  .object({
    actionUrl: z
      .string()
      .openapi({
        description: 'The URL endpoint where the action is executed. It is a string.',
        example: null,
      }),
    archivedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'A Unix timestamp in milliseconds representing when the action was archived. It is an integer.',
        example: null,
      }),
    executionRules: z
      .array(PublicExecutionTranslationRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule.',
        example: null,
      }),
    functions: z
      .array(PublicActionFunctionIdentifierSchema)
      .openapi({
        description:
          'An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the action definition. It is a string.',
        example: null,
      }),
    inputFieldDependencies: z
      .array(
        z
          .xor([PublicSingleFieldDependencySchema, PublicConditionalSingleFieldDependencySchema])
          .openapi({ example: null }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency.',
        example: null,
      }),
    inputFields: z
      .array(PublicInputFieldDefinitionSchema)
      .openapi({
        description:
          'An array of input field definitions required for the action. Each item is a PublicInputFieldDefinition object.',
        example: null,
      }),
    labels: z
      .record(z.string(), PublicActionLabelsSchema)
      .openapi({
        description:
          'An object containing labels for the action, with each property being a PublicActionLabels object.',
        example: null,
      }),
    objectRequestOptions: PublicObjectRequestOptionsSchema.exactOptional(),
    objectTypes: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the types of objects associated with the action.',
        example: null,
      }),
    outputFields: z
      .array(OutputFieldDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of output field definitions produced by the action. Each item is an OutputFieldDefinition object.',
        example: null,
      }),
    published: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the action is published and available for use.',
        example: null,
      }),
    revisionId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the current revision of the action definition. It is a string.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'actionUrl',
      'functions',
      'id',
      'inputFields',
      'labels',
      'objectTypes',
      'published',
      'revisionId',
    ],
    example: null,
  })
  .openapi('PublicActionDefinition')

const CollectionResponsePublicActionDefinitionForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicActionDefinitionSchema)
      .openapi({
        description:
          'An array of public action definitions, each represented by a PublicActionDefinition object.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicActionDefinitionForwardPaging')

const CollectionResponsePublicActionFunctionIdentifierNoPagingSchema = z
  .object({
    results: z
      .array(PublicActionFunctionIdentifierSchema)
      .openapi({
        description:
          'An array of PublicActionFunctionIdentifier objects, each representing a specific function associated with an automation action definition.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicActionFunctionIdentifierNoPaging')

const PublicActionRevisionSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the action revision was created.',
        example: null,
      }),
    definition: PublicActionDefinitionSchema,
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the action revision.', example: null }),
    revisionId: z
      .string()
      .openapi({
        description: 'The unique identifier for the specific revision of the action.',
        example: null,
      }),
  })
  .openapi({ required: ['createdAt', 'definition', 'id', 'revisionId'], example: null })
  .openapi('PublicActionRevision')

const CollectionResponsePublicActionRevisionForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicActionRevisionSchema)
      .openapi({
        description:
          'An array of PublicActionRevision objects, each representing a specific revision of a public action definition.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicActionRevisionForwardPaging')

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

const PublicActionFunctionSchema = z
  .object({
    functionSource: z
      .string()
      .openapi({
        description: "The source code or script that defines the function's behavior.",
        example: null,
      }),
    functionType: z
      .enum([
        'POST_ACTION_EXECUTION',
        'POST_FETCH_OPTIONS',
        'PRE_ACTION_EXECUTION',
        'PRE_FETCH_OPTIONS',
      ])
      .openapi({
        description:
          'The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for the action function.', example: null }),
  })
  .openapi({ required: ['functionSource', 'functionType'], example: null })
  .openapi('PublicActionFunction')

const PublicActionDefinitionEggSchema = z
  .object({
    actionUrl: z
      .string()
      .openapi({ description: 'The URL endpoint where the action is executed.', example: null }),
    archivedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The timestamp indicating when the action was archived.',
        example: null,
      }),
    executionRules: z
      .array(PublicExecutionTranslationRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of PublicExecutionTranslationRule objects that define rules for executing the action.',
        example: null,
      }),
    functions: z
      .array(PublicActionFunctionSchema)
      .openapi({
        description:
          'An array of PublicActionFunction objects that define the functions associated with the action, including their type and source.',
        example: null,
      }),
    inputFieldDependencies: z
      .array(
        z
          .xor([PublicSingleFieldDependencySchema, PublicConditionalSingleFieldDependencySchema])
          .openapi({ example: null }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array that can contain either PublicSingleFieldDependency or PublicConditionalSingleFieldDependency objects, defining dependencies between input fields.',
        example: null,
      }),
    inputFields: z
      .array(PublicInputFieldDefinitionSchema)
      .openapi({
        description:
          'An array of PublicInputFieldDefinition objects defining the input fields required for the action.',
        example: null,
      }),
    labels: z
      .record(z.string(), PublicActionLabelsSchema)
      .openapi({
        description:
          'Holds various labels associated with the action, including names and descriptions.',
        example: null,
      }),
    objectRequestOptions: PublicObjectRequestOptionsSchema.exactOptional(),
    objectTypes: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the types of objects associated with the action.',
        example: null,
      }),
    outputFields: z
      .array(OutputFieldDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of OutputFieldDefinition objects specifying the output fields of the action.',
        example: null,
      }),
    published: z
      .boolean()
      .openapi({
        description: 'Indicates whether the action is published and available for use.',
        example: null,
      }),
  })
  .openapi({
    required: ['actionUrl', 'functions', 'inputFields', 'labels', 'objectTypes', 'published'],
    example: null,
  })
  .openapi('PublicActionDefinitionEgg')

const PublicActionDefinitionPatchSchema = z
  .object({
    actionUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL endpoint where the action is executed.', example: null }),
    executionRules: z
      .array(PublicExecutionTranslationRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of execution rules that define the conditions under which the action executes. Each item is a PublicExecutionTranslationRule object.',
        example: null,
      }),
    inputFieldDependencies: z
      .array(
        z
          .xor([PublicSingleFieldDependencySchema, PublicConditionalSingleFieldDependencySchema])
          .openapi({ example: null }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of dependencies between input fields. Each item can be a PublicSingleFieldDependency or a PublicConditionalSingleFieldDependency.',
        example: null,
      }),
    inputFields: z
      .array(PublicInputFieldDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of input field definitions required for the action. Each item is a PublicInputFieldDefinition object.',
        example: null,
      }),
    labels: z
      .record(z.string(), PublicActionLabelsSchema)
      .exactOptional()
      .openapi({
        description: 'Contains labels for the action, including names and descriptions.',
        example: null,
      }),
    objectRequestOptions: PublicObjectRequestOptionsSchema.exactOptional(),
    objectTypes: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the types of objects associated with the action.',
        example: null,
      }),
    outputFields: z
      .array(OutputFieldDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of output field definitions that the action will produce. Each item is an OutputFieldDefinition object.',
        example: null,
      }),
    published: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the action is published and available for use.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicActionDefinitionPatch')

const PublicActionDefinitionRequiresObjectRequestSchema = z
  .object({
    requiresObject: z
      .boolean()
      .openapi({
        description: 'Indicates whether a custom action definition requires an associated object.',
        example: null,
      }),
  })
  .openapi({ required: ['requiresObject'], example: null })
  .openapi('PublicActionDefinitionRequiresObjectRequest')

const PublicActionDefinitionRequiresObjectResponseSchema = z
  .object({
    requiresObject: z
      .boolean()
      .openapi({
        description: 'Indicates whether a custom action definition requires an object.',
        example: null,
      }),
  })
  .openapi({ required: ['requiresObject'], example: null })
  .openapi('PublicActionDefinitionRequiresObjectResponse')

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
      scopes: { automation: '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getAutomationActions202609AppIdRoute = createRoute({
  method: 'get',
  path: '/automation/actions/2026-09/{appId}',
  tags: ['Definitions'],
  summary: 'Retrieve custom action definitions',
  description: 'Retrieve custom workflow action definitions by app ID.',
  operationId: 'get-/automation/actions/2026-09/{appId}_getPage',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the application to retrieve extension definitions for.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
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
          schema: CollectionResponsePublicActionDefinitionForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postAutomationActions202609AppIdRoute = createRoute({
  method: 'post',
  path: '/automation/actions/2026-09/{appId}',
  tags: ['Definitions'],
  summary: 'Create a new custom action definition',
  description: 'Create a new custom workflow action.',
  operationId: 'post-/automation/actions/2026-09/{appId}_create',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app for which the extension definition is being created.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicActionDefinitionEggSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicActionDefinitionSchema, example: null } },
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
  security: [{ developer_hapikey: [] }],
})

export const getAutomationActions202609AppIdDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/automation/actions/2026-09/{appId}/{definitionId}',
  tags: ['Definitions'],
  summary: 'Retrieve a custom action definition',
  description: 'Retrieve a custom workflow action definition by ID.',
  operationId: 'get-/automation/actions/2026-09/{appId}/{definitionId}_getById',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app containing the extension definition.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description: 'The unique identifier of the extension definition to retrieve.',
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
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicActionDefinitionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const deleteAutomationActions202609AppIdDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/automation/actions/2026-09/{appId}/{definitionId}',
  tags: ['Definitions'],
  summary: 'Delete an action definition',
  description: 'Delete an action definition by ID.',
  operationId: 'delete-/automation/actions/2026-09/{appId}/{definitionId}_archive',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app associated with the extension definition.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description: 'The unique identifier of the extension definition to archive.',
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
  security: [{ developer_hapikey: [] }],
})

export const patchAutomationActions202609AppIdDefinitionIdRoute = createRoute({
  method: 'patch',
  path: '/automation/actions/2026-09/{appId}/{definitionId}',
  tags: ['Definitions'],
  summary: 'Update an existing action definition',
  description: 'Update an existing action definition by ID.',
  operationId: 'patch-/automation/actions/2026-09/{appId}/{definitionId}_update',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app associated with the extension definition.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description: 'The unique identifier of the extension definition to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicActionDefinitionPatchSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicActionDefinitionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getAutomationActions202609AppIdDefinitionIdFunctionsRoute = createRoute({
  method: 'get',
  path: '/automation/actions/2026-09/{appId}/{definitionId}/functions',
  tags: ['Functions'],
  summary: 'Retrieve functions for a given definition',
  description: 'Retrieve all functions included in a definition.',
  operationId: 'get-/automation/actions/2026-09/{appId}/{definitionId}/functions_getPage',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app associated with the action definition.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description:
              'The unique identifier of the action definition for which functions are being retrieved.',
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
          schema: CollectionResponsePublicActionFunctionIdentifierNoPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute = createRoute({
  method: 'get',
  path: '/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}',
  tags: ['Functions'],
  summary: 'Retrieve functions by a type for a given definition',
  description: 'Retrieve functions of a specific type for a given definition.',
  operationId:
    'get-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}_getByFunctionType',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app associated with the automation action definition.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description:
              'The unique identifier of the automation action definition for which functions are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      functionType: z
        .enum([
          'POST_ACTION_EXECUTION',
          'POST_FETCH_OPTIONS',
          'PRE_ACTION_EXECUTION',
          'PRE_FETCH_OPTIONS',
        ])
        .openapi({
          param: {
            name: 'functionType',
            in: 'path',
            description:
              'The type of function to retrieve. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.',
            required: true,
            style: 'simple',
            explode: false,
            schema: {
              type: 'string',
              example: null,
              enum: [
                'POST_ACTION_EXECUTION',
                'POST_FETCH_OPTIONS',
                'PRE_ACTION_EXECUTION',
                'PRE_FETCH_OPTIONS',
              ],
            },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicActionFunctionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute = createRoute({
  method: 'put',
  path: '/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}',
  tags: ['Functions'],
  summary: 'Insert a function for a definition',
  description: 'Add a function for a given definition.',
  operationId:
    'put-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app associated with the automation action.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description:
              'The unique identifier of the definition to which the function will be added.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      functionType: z
        .enum([
          'POST_ACTION_EXECUTION',
          'POST_FETCH_OPTIONS',
          'PRE_ACTION_EXECUTION',
          'PRE_FETCH_OPTIONS',
        ])
        .openapi({
          param: {
            name: 'functionType',
            in: 'path',
            description:
              'The type of function to insert. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.',
            required: true,
            style: 'simple',
            explode: false,
            schema: {
              type: 'string',
              example: null,
              enum: [
                'POST_ACTION_EXECUTION',
                'POST_FETCH_OPTIONS',
                'PRE_ACTION_EXECUTION',
                'PRE_FETCH_OPTIONS',
              ],
            },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'text/plain': { schema: z.string().openapi({ example: null }), example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PublicActionFunctionIdentifierSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute = createRoute(
  {
    method: 'delete',
    path: '/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}',
    tags: ['Functions'],
    summary: 'Delete a function for a definition',
    description: 'Delete a function within a given definition.',
    operationId:
      'delete-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType',
    request: {
      params: z.object({
        appId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              name: 'appId',
              in: 'path',
              description:
                'The unique identifier of the app associated with the automation action.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int32', example: null },
            },
            example: null,
          }),
        definitionId: z
          .string()
          .openapi({
            param: {
              name: 'definitionId',
              in: 'path',
              description: 'The unique identifier of the automation action definition.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        functionType: z
          .enum([
            'POST_ACTION_EXECUTION',
            'POST_FETCH_OPTIONS',
            'PRE_ACTION_EXECUTION',
            'PRE_FETCH_OPTIONS',
          ])
          .openapi({
            param: {
              name: 'functionType',
              in: 'path',
              description:
                'The type of function to delete. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, POST_ACTION_EXECUTION.',
              required: true,
              style: 'simple',
              explode: false,
              schema: {
                type: 'string',
                example: null,
                enum: [
                  'POST_ACTION_EXECUTION',
                  'POST_FETCH_OPTIONS',
                  'PRE_ACTION_EXECUTION',
                  'PRE_FETCH_OPTIONS',
                ],
              },
            },
            example: null,
          }),
      }),
    },
    responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
    security: [{ developer_hapikey: [] }],
  },
)

export const getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute =
  createRoute({
    method: 'get',
    path: '/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}',
    tags: ['Functions'],
    summary: 'Retrieve a function from a given definition',
    description: 'Retrieve a specific function from a given definition.',
    operationId:
      'get-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById',
    request: {
      params: z.object({
        appId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              name: 'appId',
              in: 'path',
              description: 'The unique identifier of the app associated with the function.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int32', example: null },
            },
            example: null,
          }),
        definitionId: z
          .string()
          .openapi({
            param: {
              name: 'definitionId',
              in: 'path',
              description: 'The unique identifier of the definition to which the function belongs.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        functionId: z
          .string()
          .openapi({
            param: {
              name: 'functionId',
              in: 'path',
              description: 'The unique identifier of the function to retrieve.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        functionType: z
          .enum([
            'POST_ACTION_EXECUTION',
            'POST_FETCH_OPTIONS',
            'PRE_ACTION_EXECUTION',
            'PRE_FETCH_OPTIONS',
          ])
          .openapi({
            param: {
              name: 'functionType',
              in: 'path',
              description:
                'The type of function to retrieve. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.',
              required: true,
              style: 'simple',
              explode: false,
              schema: {
                type: 'string',
                example: null,
                enum: [
                  'POST_ACTION_EXECUTION',
                  'POST_FETCH_OPTIONS',
                  'PRE_ACTION_EXECUTION',
                  'PRE_FETCH_OPTIONS',
                ],
              },
            },
            example: null,
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: PublicActionFunctionSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [{ developer_hapikey: [] }],
  })

export const putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute =
  createRoute({
    method: 'put',
    path: '/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}',
    tags: ['Functions'],
    summary: 'Update a function for a definition',
    description: 'Update a function for a given definition by ID.',
    operationId:
      'put-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace',
    request: {
      params: z.object({
        appId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              name: 'appId',
              in: 'path',
              description: 'The unique identifier of the app associated with the definition.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int32', example: null },
            },
            example: null,
          }),
        definitionId: z
          .string()
          .openapi({
            param: {
              name: 'definitionId',
              in: 'path',
              description: 'The unique identifier of the definition to which the function belongs.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        functionId: z
          .string()
          .openapi({
            param: {
              name: 'functionId',
              in: 'path',
              description: 'The unique identifier of the function to insert.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        functionType: z
          .enum([
            'POST_ACTION_EXECUTION',
            'POST_FETCH_OPTIONS',
            'PRE_ACTION_EXECUTION',
            'PRE_FETCH_OPTIONS',
          ])
          .openapi({
            param: {
              name: 'functionType',
              in: 'path',
              description:
                'The type of function to insert, indicating when it is executed. Valid values include PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.',
              required: true,
              style: 'simple',
              explode: false,
              schema: {
                type: 'string',
                example: null,
                enum: [
                  'POST_ACTION_EXECUTION',
                  'POST_FETCH_OPTIONS',
                  'PRE_ACTION_EXECUTION',
                  'PRE_FETCH_OPTIONS',
                ],
              },
            },
            example: null,
          }),
      }),
      body: {
        content: { 'text/plain': { schema: z.string().openapi({ example: null }), example: null } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': { schema: PublicActionFunctionIdentifierSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [{ developer_hapikey: [] }],
  })

export const deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute =
  createRoute({
    method: 'delete',
    path: '/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}',
    tags: ['Functions'],
    summary: 'Archive a function for a definition',
    description: 'Archive a function for a specific definition.',
    operationId:
      'delete-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive',
    request: {
      params: z.object({
        appId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              name: 'appId',
              in: 'path',
              description: 'The unique identifier of the app that contains the action definition.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int32', example: null },
            },
            example: null,
          }),
        definitionId: z
          .string()
          .openapi({
            param: {
              name: 'definitionId',
              in: 'path',
              description:
                'The unique identifier of the action definition to which the function belongs.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        functionId: z
          .string()
          .openapi({
            param: {
              name: 'functionId',
              in: 'path',
              description: 'The unique identifier of the function to delete.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        functionType: z
          .enum([
            'POST_ACTION_EXECUTION',
            'POST_FETCH_OPTIONS',
            'PRE_ACTION_EXECUTION',
            'PRE_FETCH_OPTIONS',
          ])
          .openapi({
            param: {
              name: 'functionType',
              in: 'path',
              description:
                'The type of the function to delete. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.',
              required: true,
              style: 'simple',
              explode: false,
              schema: {
                type: 'string',
                example: null,
                enum: [
                  'POST_ACTION_EXECUTION',
                  'POST_FETCH_OPTIONS',
                  'PRE_ACTION_EXECUTION',
                  'PRE_FETCH_OPTIONS',
                ],
              },
            },
            example: null,
          }),
      }),
    },
    responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
    security: [{ developer_hapikey: [] }],
  })

export const getAutomationActions202609AppIdDefinitionIdRequiresObjectRoute = createRoute({
  method: 'get',
  path: '/automation/actions/2026-09/{appId}/{definitionId}/requires-object',
  tags: ['Definitions'],
  summary: 'Retrieve the object requirement status for a custom action definition.',
  description: 'Retrieve whether a custom action definition requires an object.',
  operationId:
    'get-/automation/actions/2026-09/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app associated with the extension definition.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description: 'The unique identifier of the extension definition to check.',
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
          schema: PublicActionDefinitionRequiresObjectResponseSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postAutomationActions202609AppIdDefinitionIdRequiresObjectRoute = createRoute({
  method: 'post',
  path: '/automation/actions/2026-09/{appId}/{definitionId}/requires-object',
  tags: ['Definitions'],
  summary: 'Set the object requirement for a custom action definition.',
  description: 'Set whether a custom action definition requires an object.',
  operationId:
    'post-/automation/actions/2026-09/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app associated with the extension definition.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description:
              'The unique identifier of the extension definition for which the requirement is being set.',
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
          schema: PublicActionDefinitionRequiresObjectRequestSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ developer_hapikey: [] }],
})

export const getAutomationActions202609AppIdDefinitionIdRevisionsRoute = createRoute({
  method: 'get',
  path: '/automation/actions/2026-09/{appId}/{definitionId}/revisions',
  tags: ['Revisions'],
  summary: 'Retrieve revisions for a given definition',
  description: 'Retrieve the versions of a definition by ID.',
  operationId: 'get-/automation/actions/2026-09/{appId}/{definitionId}/revisions_getPage',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app associated with the action definition.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description:
              'The unique identifier of the action definition for which revisions are being retrieved.',
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
          schema: CollectionResponsePublicActionRevisionForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRoute = createRoute({
  method: 'get',
  path: '/automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}',
  tags: ['Revisions'],
  summary: 'Retrieve a specific revision of a definition',
  description: 'Retrieve a specific revision of a definition by revision ID.',
  operationId:
    'get-/automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}_getById',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app associated with the action definition.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      definitionId: z
        .string()
        .openapi({
          param: {
            name: 'definitionId',
            in: 'path',
            description:
              'The unique identifier of the action definition for which the revision is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      revisionId: z
        .string()
        .openapi({
          param: {
            name: 'revisionId',
            in: 'path',
            description: 'The unique identifier of the specific revision to retrieve.',
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
      content: { 'application/json': { schema: PublicActionRevisionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postAutomationActionsCallbacks202609CompleteRoute = createRoute({
  method: 'post',
  path: '/automation/actions/callbacks/2026-09/complete',
  tags: ['Callbacks'],
  summary: 'Complete a batch of callbacks',
  description: 'Complete a batch of blocked action executions.',
  operationId: 'post-/automation/actions/callbacks/2026-09/complete_completeBatch',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BatchInputCallbackCompletionBatchRequestSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['automation'] }],
})

export const postAutomationActionsCallbacks202609CallbackIdCompleteRoute = createRoute({
  method: 'post',
  path: '/automation/actions/callbacks/2026-09/{callbackId}/complete',
  tags: ['Callbacks'],
  summary: 'Completes a callback',
  description: 'Complete a specific blocked action execution by ID.',
  operationId: 'post-/automation/actions/callbacks/2026-09/{callbackId}/complete_complete',
  request: {
    params: z.object({
      callbackId: z
        .string()
        .openapi({
          param: {
            name: 'callbackId',
            in: 'path',
            description: 'The unique identifier of the callback to complete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: CallbackCompletionRequestSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['automation'] }],
})
