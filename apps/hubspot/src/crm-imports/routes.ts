import { createRoute, z } from '@hono/zod-openapi'

const ActionResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the action was completed, in ISO 8601 format.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the export request was made, in ISO 8601 format.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the action was started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description: 'An enum representing the lifecycle state of the action.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'startedAt', 'status'], example: null })
  .openapi('ActionResponse')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token used as a cursor to fetch the next set of results in a paginated response.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL string that provides the link to the next page of results.',
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

const MaskedSubstringSchema = z
  .object({
    end: z
      .int32()
      .openapi({
        description: 'An integer indicating the ending position of the substring.',
        example: null,
      }),
    label: z.string().openapi({ example: null }),
    start: z
      .int32()
      .openapi({
        description: 'An integer indicating the starting position of the substring.',
        example: null,
      }),
  })
  .openapi({ required: ['end', 'label', 'start'], example: null })
  .openapi('MaskedSubstring')

const MaskedSubstringsSchema = z
  .object({
    substrings: z
      .array(MaskedSubstringSchema)
      .openapi({
        description:
          'An array of MaskedSubstring objects, each defining a specific portion of a string to be masked. This property is required and ensures that sensitive data is appropriately obscured.',
        example: null,
      }),
  })
  .openapi({ required: ['substrings'], example: null })
  .openapi('MaskedSubstrings')

const PropertyValueSchema = z
  .object({
    dataSensitivity: z
      .enum(['high', 'none', 'standard'])
      .openapi({
        description:
          "A string indicating the sensitivity level of the data. Valid values are 'none', 'standard', and 'high'.",
        example: null,
      }),
    isEncrypted: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the property value is encrypted.',
        example: null,
      }),
    isLargeValue: z
      .boolean()
      .openapi({
        description: 'Indicates if the value exceeds normal size limits.',
        example: null,
      }),
    maskedSubstrings: MaskedSubstringsSchema,
    name: z
      .string()
      .openapi({
        description: 'The name of the property, represented as a string.',
        example: null,
      }),
    persistenceTimestamp: z
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
        description: 'When the value was persisted to database, in epoch milliseconds.',
        example: null,
      }),
    requestId: z
      .string()
      .openapi({
        description: 'A string identifier for the request associated with the property value.',
        example: null,
      }),
    selectedByUser: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the property value was selected by a user.',
        example: null,
      }),
    selectedByUserTimestamp: z
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
          'A Unix timestamp in milliseconds indicating when the user selected the property value.',
        example: null,
      }),
    source: z
      .enum([
        'ACADEMY',
        'ACCEPTANCE_TEST',
        'ACTIVITY_AUTO_ASSOCIATE',
        'ACTIVITY_LOG_REVERT',
        'ADS',
        'AI_GROUP',
        'ANALYTICS',
        'API',
        'APPROVALS',
        'ASSISTS',
        'ASSOCIATIONS',
        'AUTO_ASSOCIATE_BY_DOMAIN',
        'AUTOMATION_JOURNEY',
        'AUTOMATION_PLATFORM',
        'AVATARS_SERVICE',
        'BATCH_UPDATE',
        'BCC_TO_CRM',
        'BEHAVIORAL_EVENTS',
        'BET_ASSIGNMENT',
        'BET_CRM_CONNECTOR',
        'BIDEN',
        'BILLING',
        'BOT',
        'BREEZE_AGENT',
        'CALCULATED',
        'CENTRAL_EXCHANGE_RATES',
        'CHATSPOT',
        'CLONE_OBJECTS',
        'COMMUNICATOR',
        'COMPANIES',
        'COMPANY_FAMILIES',
        'COMPANY_INSIGHTS',
        'CONNECTED_ACCOUNT',
        'CONTACTS',
        'CONTACTS_WEB',
        'CONTENT_MEMBERSHIP',
        'CONVERSATIONAL_ENRICHMENT',
        'CONVERSATIONS',
        'CRM_PROCESSES_PLATFORM',
        'CRM_UI',
        'CRM_UI_BULK_ACTION',
        'CUSTOMER_AGENT',
        'CUSTOMER_PORTAL',
        'DATA_ENRICHMENT',
        'DATA_QUALITY',
        'DATASET',
        'DEALS',
        'DEFAULT',
        'DELETE_OBJECTS',
        'DI_WRITE_TO_CRM',
        'EMAIL',
        'EMAIL_INBOX_IMPORT',
        'EMAIL_INTEGRATION',
        'ENGAGEMENTS',
        'EXTENSION',
        'FILE_MANAGER',
        'FLYWHEEL_PRODUCT_DATA_SYNC',
        'FORECASTING',
        'FORM',
        'FORWARD_TO_CRM',
        'GMAIL_INTEGRATION',
        'GOALS',
        'HEISENBERG',
        'HELP_DESK',
        'HELP_DESK_AI',
        'IMPORT',
        'INTEGRATION',
        'INTEGRATIONS_PLATFORM',
        'INTEGRATIONS_SYNC',
        'INTENT',
        'INTERNAL_PROCESSING',
        'LEADIN',
        'LEGAL_BASIS_REMEDIATION',
        'MARKET_SOURCING',
        'MARKETPLACE',
        'MARKETS',
        'MEETINGS',
        'MERGE_COMPANIES',
        'MERGE_CONTACTS',
        'MERGE_OBJECTS',
        'MERGE_REVERT_OBJECTS',
        'MICROAPPS',
        'MIGRATION',
        'MOBILE_ANDROID',
        'MOBILE_IOS',
        'PAYMENTS',
        'PIPELINE_SETTINGS',
        'PLAYBOOKS',
        'PORTAL_OBJECT_SYNC',
        'PORTAL_USER_ASSOCIATOR',
        'PRESENTATIONS',
        'PRIMARY_AUTOMATION',
        'PROPERTY_DEFAULT_VALUE',
        'PROPERTY_RESTORE',
        'PROPERTY_SETTINGS',
        'PROSPECTING_AGENT',
        'QUOTAS',
        'QUOTES',
        'RECYCLING_BIN',
        'RESTORE_OBJECTS',
        'REVENUE_PLATFORM',
        'SALES',
        'SALES_MESSAGES',
        'SALESFORCE',
        'SEQUENCES',
        'SETTINGS',
        'SIDEKICK',
        'SIGNALS',
        'SLACK_INTEGRATION',
        'SMART_DATA_CAPTURE',
        'SOCIAL',
        'SUCCESS',
        'TALLY',
        'TASK',
        'UNKNOWN',
        'WAL_INCREMENTAL',
        'WORK_UI',
        'WORKFLOW_CONTACT_DELETE_ACTION',
        'WORKFLOWS',
      ])
      .openapi({
        description:
          "A string indicating the origin of the property value. Valid values include various sources such as 'API', 'FORM', 'SALESFORCE', and others.",
        example: null,
      }),
    sourceId: z
      .string()
      .openapi({
        description: 'A string identifier for the source of the property value.',
        example: null,
      }),
    sourceLabel: z
      .string()
      .openapi({
        description: 'A string label describing the source of the property value.',
        example: null,
      }),
    sourceMetadata: z
      .string()
      .openapi({
        description: 'A string containing metadata about the source of the property value.',
        example: null,
      }),
    sourceUpstreamDeployable: z
      .string()
      .openapi({
        description: 'A string indicating the upstream deployable source of the property value.',
        example: null,
      }),
    sourceVid: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description:
          'An array of integers representing the source video IDs associated with the property value.',
        example: null,
      }),
    timestamp: z
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
          'A Unix timestamp in milliseconds indicating when the property value was recorded.',
        example: null,
      }),
    unit: z
      .string()
      .openapi({
        description: 'A string representing the unit of the property value, if applicable.',
        example: null,
      }),
    updatedByUserId: z
      .int32()
      .openapi({
        description:
          'An integer representing the ID of the user who last updated the property value.',
        example: null,
      }),
    useTimestampAsPersistenceTimestamp: z
      .boolean()
      .openapi({
        description:
          'Flag indicating whether to use the timestamp field as the persistence timestamp.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'The actual value of the property, represented as a string.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'dataSensitivity',
      'isEncrypted',
      'isLargeValue',
      'maskedSubstrings',
      'name',
      'persistenceTimestamp',
      'requestId',
      'selectedByUser',
      'selectedByUserTimestamp',
      'source',
      'sourceId',
      'sourceLabel',
      'sourceMetadata',
      'sourceUpstreamDeployable',
      'sourceVid',
      'timestamp',
      'unit',
      'updatedByUserId',
      'useTimestampAsPersistenceTimestamp',
      'value',
    ],
    description:
      'Represents a single custom property of a marketing event, storing its name, value, metadata (like source, timestamp, and sensitivity), and related audit information for tracking changes.',
    example: null,
  })
  .openapi('PropertyValue')

const ImportRowCoreSchema = z
  .object({
    additionalRowData: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of strings containing any additional data associated with this row.',
        example: null,
      }),
    containsEncryptedProperties: z
      .boolean()
      .openapi({
        description: 'Indicates whether this row contains values that were encrypted.',
        example: null,
      }),
    fileId: z
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
        description: 'The unique identifier of the uploaded file containing this row.',
        example: null,
      }),
    lineNumber: z
      .int32()
      .openapi({
        description:
          "The 1-indexed line number of this row in the source file. Line number 0 is reserved for file-wide errors that don't correspond to a specific row.",
        example: null,
      }),
    pageName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the spreadsheet sheet/page containing this row.',
        example: null,
      }),
    rowData: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of strings representing the core data of the row.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'additionalRowData',
      'containsEncryptedProperties',
      'fileId',
      'lineNumber',
      'rowData',
    ],
    example: null,
  })
  .openapi('ImportRowCore')

const PublicImportErrorSchema = z
  .object({
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
        description: 'The epoch millisecond timestamp when this error was recorded.',
        example: null,
      }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable error message.', example: null }),
    errorType: z
      .enum([
        'AMBIGUOUS_ENUMERATION_OPTION',
        'ASSOCIATION_LABEL_NOT_FOUND',
        'ASSOCIATION_LIMIT_EXCEEDED',
        'ASSOCIATION_RECORD_NOT_FOUND',
        'COLUMN_TOO_LARGE',
        'COULD_NOT_FIND_BUSINESS_UNIT',
        'COULD_NOT_FIND_OWNER',
        'COULD_NOT_PARSE_DATE',
        'COULD_NOT_PARSE_NUMBER',
        'COULD_NOT_PARSE_ROW',
        'COULD_NOT_PARSE_TERM',
        'CREATE_ONLY_IMPORT',
        'DUPLICATE_ALTERNATE_ID',
        'DUPLICATE_ASSOCIATION_ID',
        'DUPLICATE_EVENT',
        'DUPLICATE_OBJECT_ID',
        'DUPLICATE_RECORD_ID',
        'DUPLICATE_ROW_CONTENT',
        'DUPLICATE_UNIQUE_CREATION_KEY',
        'DUPLICATE_UNIQUE_PROPERTY_VALUE',
        'FAILED_TO_CREATE_ASSOCIATION',
        'FAILED_TO_FIND_RECORD_FOR_ASSOCIATIONS',
        'FAILED_TO_OPT_OUT_CONTACT',
        'FAILED_TO_PROCESS_OBJECT_WITH_EMPTY_PROPERTY_VALUES',
        'FAILED_VALIDATION',
        'FILE_NOT_FOUND',
        'GDPR_BLACKLISTED_EMAIL',
        'INCORRECT_NUMBER_OF_COLUMNS',
        'INVALID_ALTERNATE_ID',
        'INVALID_ASSOCIATION_IDENTIFIER',
        'INVALID_ASSOCIATION_KEY',
        'INVALID_COLUMN_CONFIGURATION',
        'INVALID_CUSTOM_PROPERTY_VALIDATION',
        'INVALID_DOMAIN',
        'INVALID_EMAIL',
        'INVALID_ENUM_FILE_ID_OR_URL',
        'INVALID_ENUMERATION_OPTION',
        'INVALID_EVENT',
        'INVALID_EVENT_TIMESTAMP',
        'INVALID_FILE_TYPE',
        'INVALID_NUMBER_SIZE',
        'INVALID_OBJECT_ID',
        'INVALID_PROPERTY_VALUE_FORMAT',
        'INVALID_RECORD_ID',
        'INVALID_REQUIRED_PROPERTY',
        'INVALID_SHEET_COUNT',
        'INVALID_SPREADSHEET',
        'LIMIT_EXCEEDED',
        'LINE_ITEM_MULTIPLE_PARENTS_IN_ROW',
        'MANY_ERRORS_IN_ROW',
        'MISSING_EVENT_DEFINITION',
        'MISSING_EVENT_TIMESTAMP',
        'MISSING_OBJECT_DEFINITION',
        'MISSING_REQUIRED_PROPERTY',
        'MULTIPLE_COMPANIES_WITH_THIS_DOMAIN',
        'MULTIPLE_OWNERS_FOUND',
        'NO_OBJECT_ID_FROM_ASSOCIATION_IDENTIFIER',
        'OUTSIDE_VALID_TERM_RANGE',
        'OUTSIDE_VALID_TIME_RANGE',
        'PORTAL_WIDE_CUSTOM_OBJECT_LIMIT_EXCEEDED',
        'PROPERTY_DEFINITION_NOT_FOUND',
        'PROPERTY_VALUE_NOT_FOUND',
        'ROW_DATA_TOO_LARGE',
        'SECONDARY_EMAIL_WRITE_FAILURE',
        'UNKNOWN_ASSOCIATION_RECORD_ID',
        'UNKNOWN_BAD_REQUEST',
        'UNKNOWN_ERROR',
        'UPDATE_ONLY_IMPORT',
      ])
      .openapi({
        description: 'The classification of what went wrong during import processing.',
        example: null,
      }),
    extraContext: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional human-readable context about the error.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A unique, stable identifier for this specific error.',
        example: null,
      }),
    invalidPropertyValue: PropertyValueSchema.exactOptional(),
    invalidValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The raw string value from the import file that caused the validation failure.',
        example: null,
      }),
    invalidValueToDisplay: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A convenience accessor that returns either the value from `invalidPropertyValue` or `invalidValue`, whichever is present (preferring the property value).',
        example: null,
      }),
    knownColumnNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The zero-based column index in the import file where the error occurred',
        example: null,
      }),
    objectType: z
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
      .openapi({ description: 'The CRM object type affected by this error.', example: null }),
    objectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The modern object type identifier for the CRM object affected by this error.',
        example: null,
      }),
    sourceData: ImportRowCoreSchema,
  })
  .openapi({ required: ['createdAt', 'errorType', 'id', 'sourceData'], example: null })
  .openapi('PublicImportError')

const CollectionResponsePublicImportErrorForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicImportErrorSchema)
      .openapi({
        description:
          'An array of public import errors, each represented by a PublicImportError object.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicImportErrorForwardPaging')

const ImportTemplateSchema = z
  .object({
    templateId: z
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
          'The unique identifier for the specific saved template or previous import being referenced.',
        example: null,
      }),
    templateType: z
      .enum(['admin_defined', 'previous_import', 'user_file'])
      .openapi({
        description:
          'The classification of what type of template this represents, and what is its origin or purpose.',
        example: null,
      }),
  })
  .openapi({ required: ['templateId', 'templateType'], example: null })
  .openapi('ImportTemplate')

const PublicObjectListRecordSchema = z
  .object({
    listId: z
      .string()
      .openapi({
        description: 'The ID of the list containing the imported objects.',
        example: null,
      }),
    objectType: z
      .string()
      .openapi({ description: 'The type of object contained in the list.', example: null }),
  })
  .openapi({ required: ['listId', 'objectType'], example: null })
  .openapi('PublicObjectListRecord')

const PublicImportMetadataSchema = z
  .object({
    counters: z
      .record(z.string(), z.int32().openapi({ example: null }))
      .openapi({
        description:
          'Summarized outcomes of each row a developer attempted to import into HubSpot.',
        example: null,
      }),
    fileIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'The IDs of files uploaded in the File Manager API.',
        example: null,
      }),
    objectLists: z
      .array(PublicObjectListRecordSchema)
      .openapi({ description: 'The lists containing the imported objects.', example: null }),
  })
  .openapi({ required: ['counters', 'fileIds', 'objectLists'], example: null })
  .openapi('PublicImportMetadata')

const PublicImportResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the object was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this import.', example: null }),
    importName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-provided name for this import.', example: null }),
    importRequestJson: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The complete import request configuration as a JSON object.',
        example: null,
      }),
    importSource: z
      .enum(['API', 'CRM_UI', 'IMPORT', 'MOBILE_ANDROID', 'MOBILE_IOS', 'SALESFORCE'])
      .exactOptional()
      .openapi({ description: 'Indicates where/how the import was initiated.', example: null }),
    importTemplate: ImportTemplateSchema.exactOptional(),
    mappedObjectTypeIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of object type IDs that are mapped during the import.',
        example: null,
      }),
    metadata: PublicImportMetadataSchema,
    optOutImport: z
      .boolean()
      .openapi({
        description:
          'Whether or not the import is a list of people disqualified from receiving emails.',
        example: null,
      }),
    state: z
      .enum(['CANCELED', 'DEFERRED', 'DONE', 'FAILED', 'PROCESSING', 'REVERTED', 'STARTED'])
      .openapi({ description: 'The status of the import.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp when the import record was last updated, formatted as an ISO 8601 instant.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'id',
      'mappedObjectTypeIds',
      'metadata',
      'optOutImport',
      'state',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('PublicImportResponse')

const CollectionResponsePublicImportResponseForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicImportResponseSchema)
      .openapi({
        description:
          'An array of PublicImportResponse objects, each representing an individual import response.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicImportResponseForwardPaging')

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
      scopes: { 'crm.import': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmImports202609Route = createRoute({
  method: 'get',
  path: '/crm/imports/2026-09',
  tags: ['Basic'],
  summary: 'List Imports',
  description:
    'Retrieve a list of imports in your HubSpot account. This endpoint allows you to view the imports that have been processed, providing details about each import. It supports pagination to navigate through large sets of import data.',
  operationId: 'get-/crm/imports/2026-09_/crm/imports/v3',
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
          schema: CollectionResponsePublicImportResponseForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.import'] }],
})

export const postCrmImports202609Route = createRoute({
  method: 'post',
  path: '/crm/imports/2026-09',
  tags: ['Advanced'],
  summary: 'Create Import',
  description:
    'Create a new import in your HubSpot account by uploading files and specifying import settings. This endpoint allows you to initiate the import process by providing the necessary files and configuration details.',
  operationId: 'post-/crm/imports/2026-09_/crm/imports/v3',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              files: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', example: null }),
              importRequest: z.string().exactOptional().openapi({ example: null }),
            })
            .openapi({ example: null, required: [] }),
          example: null,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicImportResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.import'] }],
})

export const getCrmImports202609ImportIdRoute = createRoute({
  method: 'get',
  path: '/crm/imports/2026-09/{importId}',
  tags: ['Basic'],
  summary: 'Get the information on any import',
  description: 'A complete summary of an import record, including any updates.',
  operationId: 'get-/crm/imports/2026-09/{importId}_/crm/imports/v3/{importId}',
  request: {
    params: z.object({
      importId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'importId',
            in: 'path',
            description: 'The unique identifier of the import to retrieve.',
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
      content: { 'application/json': { schema: PublicImportResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.import'] }],
})

export const postCrmImports202609ImportIdCancelRoute = createRoute({
  method: 'post',
  path: '/crm/imports/2026-09/{importId}/cancel',
  tags: ['Advanced'],
  summary: 'Cancel an active import',
  description: 'This allows a developer to cancel an active import.',
  operationId: 'post-/crm/imports/2026-09/{importId}/cancel_/crm/imports/v3/{importId}/cancel',
  request: {
    params: z.object({
      importId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'importId',
            in: 'path',
            description:
              'The unique identifier of the import process to cancel. It must be an integer.',
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
      content: { 'application/json': { schema: ActionResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.import'] }],
})

export const getCrmImports202609ImportIdErrorsRoute = createRoute({
  method: 'get',
  path: '/crm/imports/2026-09/{importId}/errors',
  tags: ['Basic'],
  summary: 'Retrieve errors for a specific import',
  description:
    'Retrieves detailed error records for a specific import operation, enabling you to identify and troubleshoot records that failed during processing.',
  operationId: 'get-/crm/imports/2026-09/{importId}/errors_/crm/imports/v3/{importId}/errors',
  request: {
    params: z.object({
      importId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'importId',
            in: 'path',
            description: 'The unique identifier of the import for which to retrieve errors.',
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
      includeErrorMessage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeErrorMessage',
            in: 'query',
            description:
              'A boolean indicating whether to include detailed error messages in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      includeRowData: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeRowData',
            in: 'query',
            description:
              'A boolean indicating whether to include the row data associated with each error in the response.',
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
          schema: CollectionResponsePublicImportErrorForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.import'] }],
})
