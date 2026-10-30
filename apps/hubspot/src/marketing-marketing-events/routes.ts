import { createRoute, z } from '@hono/zod-openapi'

const AppInfoSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the application', example: null }),
    name: z.string().openapi({ description: 'The name of the application', example: null }),
  })
  .openapi({ required: ['id', 'name'], example: null })
  .openapi('AppInfo')

const AttendanceCountersSchema = z
  .object({
    attended: z
      .int32()
      .openapi({
        description: 'Number of attended contact records of a marketing event',
        example: null,
      }),
    cancelled: z
      .int32()
      .openapi({
        description: 'Number of cancelled contact records of a marketing event',
        example: null,
      }),
    noShows: z
      .int32()
      .openapi({
        description: 'Number of no-show contact records of a marketing event',
        example: null,
      }),
    registered: z
      .int32()
      .openapi({
        description: 'Number of registered contact records of a marketing event',
        example: null,
      }),
  })
  .openapi({ required: ['attended', 'cancelled', 'noShows', 'registered'], example: null })
  .openapi('AttendanceCounters')

const MaskedSubstringSchema = z
  .object({
    end: z
      .int32()
      .openapi({
        description: 'An integer indicating the ending position of the masked substring.',
        example: null,
      }),
    label: z.string().openapi({ example: null }),
    start: z
      .int32()
      .openapi({
        description: 'An integer indicating the starting position of the masked substring.',
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
          'An array of masked substring objects, each defining a specific portion of a string to be masked. Each object in the array specifies the start and end positions of the substring to be masked.',
        example: null,
      }),
  })
  .openapi({ required: ['substrings'], example: null })
  .openapi('MaskedSubstrings')

const PropertyValueSchema = z
  .object({
    dataSensitivity: z
      .enum(['high', 'none', 'standard'])
      .openapi({ description: 'Level of data sensitivity', example: null }),
    isEncrypted: z
      .boolean()
      .openapi({ description: 'Indicates whether the property is encrypted', example: null }),
    isLargeValue: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the property value is stored as a large value in the storage',
        example: null,
      }),
    maskedSubstrings: MaskedSubstringsSchema,
    name: z.string().openapi({ description: 'Name of custom property', example: null }),
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
        description:
          'The timestamp that indicates when the value being written is persisted in storage',
        example: null,
      }),
    requestId: z.string().openapi({ description: 'The ID of the request', example: null }),
    selectedByUser: z
      .boolean()
      .openapi({ description: 'Indicates whether the property is selected', example: null }),
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
        description: 'Timestamp of when the property was selected by the user',
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
      .openapi({ description: 'Source of the property', example: null }),
    sourceId: z
      .string()
      .openapi({ description: 'ID of the source of the property', example: null }),
    sourceLabel: z
      .string()
      .openapi({ description: 'Label of the source of the property', example: null }),
    sourceMetadata: z
      .string()
      .openapi({ description: 'Source metadata encoded as a base64 string', example: null }),
    sourceUpstreamDeployable: z
      .string()
      .openapi({
        description: 'Indicates which upstream service made the property change',
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
          'An array of integers representing IDs associated with the source of the property value.',
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
        description: 'Timestamp of the request',
        example: null,
      }),
    unit: z.string().openapi({ description: 'The unit', example: null }),
    updatedByUserId: z
      .int32()
      .openapi({ description: 'The ID of the user who last updated the property', example: null }),
    useTimestampAsPersistenceTimestamp: z
      .boolean()
      .openapi({
        description:
          'Indicates if the persistence timestamp is the same as storage version timestamp',
        example: null,
      }),
    value: z.string().openapi({ description: 'Custom property value', example: null }),
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

const MarketingEventCreateRequestParamsSchema = z
  .object({
    customProperties: z
      .array(PropertyValueSchema)
      .openapi({
        description:
          "A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.\nIn order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.\n",
        example: null,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date and time of the marketing event.', example: null }),
    eventCancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been cancelled.  Defaults to `false`',
        example: null,
      }),
    eventCompleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been completed.  Defaults to `false`',
        example: null,
      }),
    eventDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the marketing event.', example: null }),
    eventName: z
      .string()
      .openapi({ description: 'The name of the marketing event.', example: null }),
    eventOrganizer: z
      .string()
      .openapi({ description: 'The name of the organizer of the marketing event.', example: null }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP`',
        example: null,
      }),
    eventUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL in the external event application where the marketing event can be managed.',
        example: null,
      }),
    externalAccountId: z
      .string()
      .openapi({
        description:
          'The accountId that is associated with this marketing event in the external event application.',
        example: null,
      }),
    externalEventId: z
      .string()
      .openapi({
        description: 'The id of the marketing event in the external event application.',
        example: null,
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date and time of the marketing event.', example: null }),
  })
  .openapi({
    required: [
      'customProperties',
      'eventName',
      'eventOrganizer',
      'externalAccountId',
      'externalEventId',
    ],
    example: null,
  })
  .openapi('MarketingEventCreateRequestParams')

const BatchInputMarketingEventCreateRequestParamsSchema = z
  .object({
    inputs: z
      .array(MarketingEventCreateRequestParamsSchema)
      .openapi({
        description:
          'An array of MarketingEventCreateRequestParams objects, each containing the necessary details to create a marketing event. This includes properties such as event name, organizer, and custom properties.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputMarketingEventCreateRequestParams')

const MarketingEventEmailSubscriberSchema = z
  .object({
    contactProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'The key-value set that contains properties of the contact.',
        example: null,
      }),
    email: z
      .string()
      .openapi({
        description: 'The email address of the contact in HubSpot to associate with the event.',
        example: null,
      }),
    interactionDateTime: z
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
        description: 'Timestamp in milliseconds at which the contact subscribed to the event.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'The key-value set that contains properties of the marketing event.',
        example: null,
      }),
  })
  .openapi({
    required: ['contactProperties', 'email', 'interactionDateTime', 'properties'],
    example: null,
  })
  .openapi('MarketingEventEmailSubscriber')

const BatchInputMarketingEventEmailSubscriberSchema = z
  .object({
    inputs: z
      .array(MarketingEventEmailSubscriberSchema)
      .openapi({
        description: 'List of marketing event details to create or update',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputMarketingEventEmailSubscriber')

const MarketingEventExternalUniqueIdentifierSchema = z
  .object({
    appId: z
      .int32()
      .openapi({
        description: 'The id of the application that created the marketing event in HubSpot.',
        example: null,
      }),
    externalAccountId: z
      .string()
      .openapi({
        description:
          'The accountId that is associated with this marketing event in the external event application.',
        example: null,
      }),
    externalEventId: z
      .string()
      .openapi({
        description: 'The id of the marketing event in the external event application.',
        example: null,
      }),
  })
  .openapi({ required: ['appId', 'externalAccountId', 'externalEventId'], example: null })
  .openapi('MarketingEventExternalUniqueIdentifier')

const BatchInputMarketingEventExternalUniqueIdentifierSchema = z
  .object({
    inputs: z
      .array(MarketingEventExternalUniqueIdentifierSchema)
      .openapi({
        description:
          'An array of MarketingEventExternalUniqueIdentifier objects, each representing a unique identifier for a marketing event. This is required for batch operations.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputMarketingEventExternalUniqueIdentifier')

const MarketingEventPublicObjectIdDeleteRequestSchema = z
  .object({
    objectId: z
      .string()
      .openapi({ description: 'The internal ID of the marketing event in HubSpot', example: null }),
  })
  .openapi({ required: ['objectId'], example: null })
  .openapi('MarketingEventPublicObjectIdDeleteRequest')

const BatchInputMarketingEventPublicObjectIdDeleteRequestSchema = z
  .object({
    inputs: z
      .array(MarketingEventPublicObjectIdDeleteRequestSchema)
      .openapi({
        description:
          'An array of marketing event public object IDs to be deleted. Each item in the array is a MarketingEventPublicObjectIdDeleteRequest object.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputMarketingEventPublicObjectIdDeleteRequest')

const MarketingEventPublicUpdateRequestFullV2Schema = z
  .object({
    customProperties: z
      .array(PropertyValueSchema)
      .openapi({
        description:
          'An array of custom properties associated with the event, where each property is defined by a PropertyValue object.',
        example: null,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date and time of the marketing event', example: null }),
    eventCancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been cancelled',
        example: null,
      }),
    eventDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the marketing event', example: null }),
    eventName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the marketing event', example: null }),
    eventOrganizer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the organizer of the marketing event', example: null }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the marketing event', example: null }),
    eventUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL in the external event application where the marketing event can be managed',
        example: null,
      }),
    objectId: z
      .string()
      .openapi({ description: 'The internal ID of the marketing event in HubSpot', example: null }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date and time of the marketing event', example: null }),
  })
  .openapi({ required: ['customProperties', 'objectId'], example: null })
  .openapi('MarketingEventPublicUpdateRequestFullV2')

const BatchInputMarketingEventPublicUpdateRequestFullV2Schema = z
  .object({
    inputs: z
      .array(MarketingEventPublicUpdateRequestFullV2Schema)
      .openapi({
        description:
          'An array of MarketingEventPublicUpdateRequestFullV2 objects, each representing a marketing event update request. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputMarketingEventPublicUpdateRequestFullV2')

const MarketingEventSubscriberSchema = z
  .object({
    interactionDateTime: z
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
        description: 'Timestamp in milliseconds at which the contact subscribed to the event.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'The key-value set of the properties of the contact',
        example: null,
      }),
    vid: z
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
        description: 'The ID of the contact in HubSpot',
        example: null,
      }),
  })
  .openapi({ required: ['interactionDateTime', 'properties', 'vid'], example: null })
  .openapi('MarketingEventSubscriber')

const BatchInputMarketingEventSubscriberSchema = z
  .object({
    inputs: z
      .array(MarketingEventSubscriberSchema)
      .openapi({
        description: 'List of HubSpot contacts to subscribe to the marketing event',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputMarketingEventSubscriber')

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
    category: z.string().openapi({ description: 'The category of the error', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({ description: 'The object that contains details of the errors', example: null }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects providing further information about the error.',
        example: null,
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the request', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({ description: 'Results of the request', example: null }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    status: z.string().openapi({ description: 'Status of the response', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The Sub-category of the error', example: null }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const MarketingEventPublicDefaultResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The creation date and time of the marketing event.',
        example: null,
      }),
    customProperties: z
      .array(PropertyValueSchema)
      .openapi({
        description:
          "A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.\nIn order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.\n",
        example: null,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date and time of the marketing event.', example: null }),
    eventCancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been cancelled.',
        example: null,
      }),
    eventCompleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been completed.',
        example: null,
      }),
    eventDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the marketing event.', example: null }),
    eventName: z
      .string()
      .openapi({ description: 'The name of the marketing event.', example: null }),
    eventOrganizer: z
      .string()
      .openapi({ description: 'The name of the organizer of the marketing event.', example: null }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the marketing event.', example: null }),
    eventUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL in the external event application where the marketing event can be managed.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The ID of the marketing event CRM object.', example: null }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the marketing event CRM object.', example: null }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date and time of the marketing event.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The update date and time of the marketing event.', example: null }),
  })
  .openapi({
    required: ['createdAt', 'customProperties', 'eventName', 'eventOrganizer', 'id', 'updatedAt'],
    example: null,
  })
  .openapi('MarketingEventPublicDefaultResponse')

const BatchResponseMarketingEventPublicDefaultResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of when the request was completed.', example: null }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of errors encountered during the batch operation, each item detailing a specific error.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Result of the request.', example: null }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors that occurred during the request.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of when the request was sent.', example: null }),
    results: z
      .array(MarketingEventPublicDefaultResponseSchema)
      .openapi({
        description:
          'An array of results from the batch operation, each item representing a response for an individual marketing event.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of when the request started processing.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'Status of the response.', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseMarketingEventPublicDefaultResponse')

const CrmPropertyWrapperSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the property in the CRM', example: null }),
    value: z
      .string()
      .openapi({ description: 'The value of the property in the CRM', example: null }),
  })
  .openapi({ required: ['name', 'value'], example: null })
  .openapi('CrmPropertyWrapper')

const MarketingEventPublicDefaultResponseV2Schema = z
  .object({
    appInfo: AppInfoSchema.exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The creation date and time of the marketing event', example: null }),
    customProperties: z
      .array(CrmPropertyWrapperSchema)
      .openapi({
        description:
          'An array of custom properties associated with the marketing event, each represented by a CrmPropertyWrapper object.',
        example: null,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date and time of the marketing event', example: null }),
    eventCancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been cancelled',
        example: null,
      }),
    eventCompleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been completed',
        example: null,
      }),
    eventDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the marketing event', example: null }),
    eventName: z
      .string()
      .openapi({ description: 'The name of the marketing event', example: null }),
    eventOrganizer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the organizer of the marketing event', example: null }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the marketing event', example: null }),
    eventUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL in the external event application where the marketing event can be managed',
        example: null,
      }),
    objectId: z
      .string()
      .openapi({ description: 'The internal ID of the marketing event in HubSpot', example: null }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date and time of the marketing event', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The update date and time of the marketing event', example: null }),
  })
  .openapi({
    required: ['createdAt', 'customProperties', 'eventName', 'objectId', 'updatedAt'],
    example: null,
  })
  .openapi('MarketingEventPublicDefaultResponseV2')

const BatchResponseMarketingEventPublicDefaultResponseV2Schema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of when the request was processed.', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Result object of the request.', example: null }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of when the request was sent.', example: null }),
    results: z
      .array(MarketingEventPublicDefaultResponseV2Schema)
      .openapi({
        description:
          'An array containing the results of the batch operation, with each item representing a marketing event response.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of when the request started processing.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'The status of the response.', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseMarketingEventPublicDefaultResponseV2')

const BatchResponseMarketingEventPublicDefaultResponseV2WithErrorsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp that represents when the request finished processing',
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
      .openapi({ description: 'Result of the request', example: null }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors that occurred during the processing',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp that represents when the request was made',
        example: null,
      }),
    results: z
      .array(MarketingEventPublicDefaultResponseV2Schema)
      .openapi({
        description:
          'An array containing the results of the batch operation, each represented as a MarketingEventPublicDefaultResponseV2 object.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp that represents when the request started processing',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'The status of the request processing', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseMarketingEventPublicDefaultResponseV2WithErrors')

const SubscriberEmailResponseSchema = z
  .object({
    email: z.string().openapi({ description: 'The email of the contact', example: null }),
    vid: z
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
        description: 'The internal ID of the contact',
        example: null,
      }),
  })
  .openapi({ required: ['email', 'vid'], example: null })
  .openapi('SubscriberEmailResponse')

const BatchResponseSubscriberEmailResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp that represents when the request finished processing',
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
      .openapi({ description: 'Result of the request', example: null }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors that occurred during the processing',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp that represents when the request was made',
        example: null,
      }),
    results: z
      .array(SubscriberEmailResponseSchema)
      .openapi({
        description:
          'An array of results from the batch operation, each containing details about a subscriber email response.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp that represents when the request started processing',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'The status of the request processing', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseSubscriberEmailResponse')

const SubscriberVidResponseSchema = z
  .object({
    vid: z
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
        description: 'The internal ID of the contact',
        example: null,
      }),
  })
  .openapi({ required: ['vid'], example: null })
  .openapi('SubscriberVidResponse')

const BatchResponseSubscriberVidResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp that represents when the request finished processing',
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
      .openapi({ description: 'Result of the request', example: null }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors that occurred during the processing',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp that represents when the request was made',
        example: null,
      }),
    results: z
      .array(SubscriberVidResponseSchema)
      .openapi({
        description:
          'An array of SubscriberVidResponse objects, each representing the result of processing an individual subscriber VID.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp that represents when the request started processing',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'The status of the request processing', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseSubscriberVidResponse')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({ description: 'The ID element at the start of the page', example: null }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to the next page', example: null }),
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

const MarketingEventPublicReadResponseV2Schema = z
  .object({
    appInfo: AppInfoSchema.exactOptional(),
    attendees: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of attended contact records of a marketing event',
        example: null,
      }),
    cancellations: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of cancelled contact records of a marketing event',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The creation date and time of the marketing event', example: null }),
    customProperties: z
      .array(CrmPropertyWrapperSchema)
      .openapi({
        description: 'An array of custom properties associated with the event.',
        example: null,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date and time of the marketing event', example: null }),
    eventCancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been cancelled',
        example: null,
      }),
    eventCompleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been completed',
        example: null,
      }),
    eventDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the marketing event', example: null }),
    eventName: z
      .string()
      .openapi({ description: 'The name of the marketing event', example: null }),
    eventOrganizer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the organizer of the marketing event', example: null }),
    eventStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of the marketing event', example: null }),
    eventStatusV2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The version 2 status of the event, represented as a string.',
        example: null,
      }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the marketing event', example: null }),
    eventUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL in the external event application where the marketing event can be managed',
        example: null,
      }),
    externalEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that is associated with this marketing event in the external event application',
        example: null,
      }),
    noShows: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of no-show contact records of a marketing event',
        example: null,
      }),
    objectId: z
      .string()
      .openapi({ description: 'The internal ID of the marketing event in HubSpot', example: null }),
    registrants: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of registered contact records of a marketing event',
        example: null,
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date and time of the marketing event', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The update date and time of the marketing event', example: null }),
  })
  .openapi({
    required: ['createdAt', 'customProperties', 'eventName', 'objectId', 'updatedAt'],
    example: null,
  })
  .openapi('MarketingEventPublicReadResponseV2')

const CollectionResponseMarketingEventPublicReadResponseV2ForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(MarketingEventPublicReadResponseV2Schema)
      .openapi({
        description:
          'An array of marketing event public read responses, each containing details about a specific marketing event.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging')

const SearchPublicResponseWrapperSchema = z
  .object({
    appId: z
      .int32()
      .openapi({
        description: 'The ID of the source application of the marketing event',
        example: null,
      }),
    externalAccountId: z
      .string()
      .openapi({
        description:
          'The account ID associated with this marketing event in the external application',
        example: null,
      }),
    externalEventId: z
      .string()
      .openapi({
        description: 'The ID of the marketing event in the external event application',
        example: null,
      }),
    objectId: z
      .string()
      .openapi({ description: 'The internal ID of the marketing event in HubSpot', example: null }),
  })
  .openapi({
    required: ['appId', 'externalAccountId', 'externalEventId', 'objectId'],
    example: null,
  })
  .openapi('SearchPublicResponseWrapper')

const CollectionResponseSearchPublicResponseWrapperNoPagingSchema = z
  .object({
    results: z
      .array(SearchPublicResponseWrapperSchema)
      .openapi({
        description:
          'An array of search result objects, each represented by a SearchPublicResponseWrapper. This property contains the search results returned by the API.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseSearchPublicResponseWrapperNoPaging')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description:
          'A string that serves as a cursor indicating the position before the first item in the current set of results, used to fetch the previous set of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the URL link to the previous page of results.',
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

const MarketingEventIdentifiersResponseSchema = z
  .object({
    appInfo: AppInfoSchema.exactOptional(),
    externalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The accountId that is associated with this marketing event in the external event application',
        example: null,
      }),
    externalEventId: z
      .string()
      .openapi({
        description:
          'The ID that is associated with this marketing event in the external event application',
        example: null,
      }),
    marketingEventName: z
      .string()
      .openapi({ description: 'The name of the marketing event', example: null }),
    objectId: z
      .string()
      .openapi({
        description: 'The internal ID of the marketing event in HubSpot CRM',
        example: null,
      }),
  })
  .openapi({ required: ['externalEventId', 'marketingEventName', 'objectId'], example: null })
  .openapi('MarketingEventIdentifiersResponse')

const CollectionResponseWithTotalMarketingEventIdentifiersResponseSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(MarketingEventIdentifiersResponseSchema)
      .openapi({
        description:
          'An array containing the marketing event identifiers. Each item in the array is a MarketingEventIdentifiersResponse object.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'An integer representing the total number of marketing event identifiers.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalMarketingEventIdentifiersResponse')

const ContactAssociationSchema = z
  .object({
    contactId: z
      .string()
      .openapi({ description: 'The internal ID of the contact in HubSpot', example: null }),
    email: z
      .string()
      .openapi({ description: 'The email of the contact in HubSpot', example: null }),
    firstname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the contact in HubSpot', example: null }),
    lastname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the contact in HubSpot', example: null }),
  })
  .openapi({ required: ['contactId', 'email'], example: null })
  .openapi('ContactAssociation')

const MarketingEventAssociationSchema = z
  .object({
    externalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account ID that is associated with this marketing event in the external event application',
        example: null,
      }),
    externalEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The event ID that is associated with this marketing event in the external event application',
        example: null,
      }),
    marketingEventId: z
      .string()
      .openapi({ description: 'The internal ID of the marketing event in HubSpot', example: null }),
    name: z
      .string()
      .openapi({ description: 'The name of the marketing event in HubSpot', example: null }),
  })
  .openapi({ required: ['marketingEventId', 'name'], example: null })
  .openapi('MarketingEventAssociation')

const ParticipationAssociationsSchema = z
  .object({ contact: ContactAssociationSchema, marketingEvent: MarketingEventAssociationSchema })
  .openapi({ required: ['contact', 'marketingEvent'], example: null })
  .openapi('ParticipationAssociations')

const ParticipationPropertiesSchema = z
  .object({
    attendanceDurationSeconds: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of seconds the participation lasted', example: null }),
    attendancePercentage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Percentage of the participation duration relative to the event duration',
        example: null,
      }),
    attendanceState: z
      .enum(['ATTENDED', 'CANCELLED', 'EMPTY', 'NO_SHOW', 'REGISTERED'])
      .openapi({ description: 'The state of the participation', example: null }),
    occurredAt: z
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
        description: 'Timestamp of when the participation occurred',
        example: null,
      }),
  })
  .openapi({ required: ['attendanceState', 'occurredAt'], example: null })
  .openapi('ParticipationProperties')

const ParticipationBreakdownSchema = z
  .object({
    associations: ParticipationAssociationsSchema,
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The creation time and date of the target marketing event',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The internal ID of the target marketing event', example: null }),
    properties: ParticipationPropertiesSchema,
  })
  .openapi({ required: ['associations', 'createdAt', 'id', 'properties'], example: null })
  .openapi('ParticipationBreakdown')

const CollectionResponseWithTotalParticipationBreakdownSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(ParticipationBreakdownSchema)
      .openapi({
        description:
          'An array of participation breakdown objects, each detailing a specific participation instance.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description:
          'An integer representing the total number of participation breakdowns available.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalParticipationBreakdown')

const PublicListSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of the creation of the list', example: null }),
    createdById: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user who created the list', example: null }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of the deletion of the list', example: null }),
    filtersUpdatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of the last update of the list filters', example: null }),
    listId: z.string().openapi({ description: 'An internal ID of the list', example: null }),
    listVersion: z
      .int32()
      .openapi({ description: 'A number that represents a version of the list', example: null }),
    name: z.string().openapi({ description: 'The name of the list', example: null }),
    objectTypeId: z
      .string()
      .openapi({ description: 'The internal ID of the object type of the list', example: null }),
    processingStatus: z
      .string()
      .openapi({
        description: 'Represents the current processing status of the list',
        example: null,
      }),
    processingType: z
      .string()
      .openapi({ description: 'Processing type of the list', example: null }),
    size: z
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
        description: 'The size of the result list',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of the last update of the list', example: null }),
    updatedById: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user who last updated the list', example: null }),
  })
  .openapi({
    required: [
      'listId',
      'listVersion',
      'name',
      'objectTypeId',
      'processingStatus',
      'processingType',
    ],
    example: null,
  })
  .openapi('PublicList')

const CollectionResponseWithTotalPublicListSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicListSchema)
      .openapi({
        description:
          'An array of public lists, where each list contains details such as list ID, version, name, and processing status.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'The total number of public lists available. It is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicList')

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

const EventDetailSettingsSchema = z
  .object({
    appId: z
      .int32()
      .openapi({ description: 'The id of the application the settings are for', example: null }),
    eventDetailsUrl: z
      .string()
      .openapi({
        description: 'The url that will be used to fetch marketing event details by id',
        example: null,
      }),
  })
  .openapi({ required: ['appId', 'eventDetailsUrl'], example: null })
  .openapi('EventDetailSettings')

const EventDetailSettingsUrlSchema = z
  .object({
    eventDetailsUrl: z
      .string()
      .openapi({
        description:
          'The url that will be used to fetch marketing event details by id. Must contain a `%s` character sequence that will be substituted with the event id. For example: `https://my.event.app/events/%s`',
        example: null,
      }),
  })
  .openapi({ required: ['eventDetailsUrl'], example: null })
  .openapi('EventDetailSettingsUrl')

const MarketingEventCompleteRequestParamsSchema = z
  .object({
    endDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The end date and time of the marketing event in ISO 8601 format',
        example: null,
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start date and time of the marketing event in ISO 8601 format',
        example: null,
      }),
  })
  .openapi({ required: ['endDateTime', 'startDateTime'], example: null })
  .openapi('MarketingEventCompleteRequestParams')

const MarketingEventDefaultResponseSchema = z
  .object({
    customProperties: z
      .array(PropertyValueSchema)
      .openapi({
        description:
          "A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.\nIn order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.\n",
        example: null,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date and time of the marketing event.', example: null }),
    eventCancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been cancelled.',
        example: null,
      }),
    eventCompleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been completed.',
        example: null,
      }),
    eventDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the marketing event.', example: null }),
    eventName: z
      .string()
      .openapi({ description: 'The name of the marketing event.', example: null }),
    eventOrganizer: z
      .string()
      .openapi({ description: 'The name of the organizer of the marketing event.', example: null }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the marketing event.', example: null }),
    eventUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL in the external event application where the marketing event can be managed.',
        example: null,
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the marketing event CRM object', example: null }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date and time of the marketing event.', example: null }),
  })
  .openapi({ required: ['customProperties', 'eventName', 'eventOrganizer'], example: null })
  .openapi('MarketingEventDefaultResponse')

const MarketingEventPublicReadResponseSchema = z
  .object({
    attendees: z
      .int32()
      .openapi({
        description: 'The number of HubSpot contacts that attended this marketing event.',
        example: null,
      }),
    cancellations: z
      .int32()
      .openapi({
        description:
          'The number of HubSpot contacts that registered for this marketing event, but later cancelled their registration.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The creation date and time of the marketing event.',
        example: null,
      }),
    customProperties: z
      .array(PropertyValueSchema)
      .openapi({
        description:
          "A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.\nIn order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.\n",
        example: null,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date and time of the marketing event.', example: null }),
    eventCancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been cancelled.',
        example: null,
      }),
    eventCompleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been completed.',
        example: null,
      }),
    eventDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the marketing event.', example: null }),
    eventName: z
      .string()
      .openapi({ description: 'The name of the marketing event.', example: null }),
    eventOrganizer: z
      .string()
      .openapi({ description: 'The name of the organizer of the marketing event.', example: null }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the marketing event.', example: null }),
    eventUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL in the external event application where the marketing event can be managed.',
        example: null,
      }),
    externalEventId: z
      .string()
      .openapi({
        description: 'The id of the marketing event in the external event application.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The ID of the marketing event CRM object.', example: null }),
    noShows: z
      .int32()
      .openapi({
        description:
          'The number of HubSpot contacts that registered for this marketing event, but did not attend. This field only had a value when the event is over.',
        example: null,
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the marketing event CRM object.', example: null }),
    registrants: z
      .int32()
      .openapi({
        description: 'The number of HubSpot contacts that registered for this marketing event.',
        example: null,
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date and time of the marketing event.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The update date and time of the marketing event.', example: null }),
  })
  .openapi({
    required: [
      'attendees',
      'cancellations',
      'createdAt',
      'customProperties',
      'eventName',
      'eventOrganizer',
      'externalEventId',
      'id',
      'noShows',
      'registrants',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('MarketingEventPublicReadResponse')

const MarketingEventPublicUpdateRequestV2Schema = z
  .object({
    customProperties: z
      .array(PropertyValueSchema)
      .openapi({
        description: 'An array of custom properties associated with the event.',
        example: null,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date and time of the marketing event', example: null }),
    eventCancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been cancelled',
        example: null,
      }),
    eventDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the marketing event', example: null }),
    eventName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the marketing event', example: null }),
    eventOrganizer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the organizer of the marketing event', example: null }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the marketing event', example: null }),
    eventUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL in the external event application where the marketing event can be managed',
        example: null,
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date and time of the marketing event', example: null }),
  })
  .openapi({ required: ['customProperties'], example: null })
  .openapi('MarketingEventPublicUpdateRequestV2')

const MarketingEventUpdateRequestParamsSchema = z
  .object({
    customProperties: z
      .array(PropertyValueSchema)
      .openapi({
        description:
          "A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.\nIn order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.\n",
        example: null,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date and time of the marketing event.', example: null }),
    eventCancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been cancelled. Defaults to `false`',
        example: null,
      }),
    eventCompleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the marketing event has been completed. Defaults to `false`',
        example: null,
      }),
    eventDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the marketing event.', example: null }),
    eventName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the marketing event.', example: null }),
    eventOrganizer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the organizer of the marketing event.', example: null }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP`',
        example: null,
      }),
    eventUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL in the external event application where the marketing event can be managed.',
        example: null,
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date and time of the marketing event.', example: null }),
  })
  .openapi({ required: ['customProperties'], example: null })
  .openapi('MarketingEventUpdateRequestParams')

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
      scopes: { 'crm.objects.marketing_events.read': '', 'crm.objects.marketing_events.write': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getMarketingMarketingEvents202609Route = createRoute({
  method: 'get',
  path: '/marketing/marketing-events/2026-09',
  tags: ['Basic'],
  summary: 'List',
  description:
    'Retrieve a list of marketing events for the specified API version. This endpoint supports pagination to navigate through large sets of data. Use this to access marketing event details in a paginated format.',
  operationId: 'get-/marketing/marketing-events/2026-09_/marketing/marketing-events/v3',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description: 'The cursor indicating the position of the last retrieved item.',
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
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The limit for response size. The default value is 10, the max number is 100',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null, default: 10 },
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
          schema: CollectionResponseMarketingEventPublicReadResponseV2ForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
})

export const getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsRoute =
  createRoute({
    method: 'get',
    path: '/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists',
    tags: ['List Associations'],
    summary: 'Get lists associated with a marketing event',
    description:
      'Gets lists associated with a marketing event by external account id and external event id',
    operationId:
      'get-/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds',
    request: {
      params: z.object({
        externalAccountId: z
          .string()
          .openapi({
            param: {
              name: 'externalAccountId',
              in: 'path',
              description:
                'The accountId that is associated with this marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        externalEventId: z
          .string()
          .openapi({
            param: {
              name: 'externalEventId',
              in: 'path',
              description: 'The id of the marketing event in the external event application.',
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
            schema: CollectionResponseWithTotalPublicListSchema,
            example: null,
          },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const putMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdRoute =
  createRoute({
    method: 'put',
    path: '/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}',
    tags: ['List Associations'],
    summary: 'Associate a list with a marketing event',
    description:
      'Associates a list with a marketing event by external account id, external event id, and ILS list id',
    operationId:
      'put-/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds',
    request: {
      params: z.object({
        externalAccountId: z
          .string()
          .openapi({
            param: {
              name: 'externalAccountId',
              in: 'path',
              description:
                'The accountId that is associated with this marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        externalEventId: z
          .string()
          .openapi({
            param: {
              name: 'externalEventId',
              in: 'path',
              description: 'The id of the marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        listId: z
          .string()
          .openapi({
            param: {
              name: 'listId',
              in: 'path',
              description: 'The ILS ID of the list.',
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
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const deleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdRoute =
  createRoute({
    method: 'delete',
    path: '/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}',
    tags: ['List Associations'],
    summary: 'Disassociate a list from a marketing event',
    description:
      'Disassociates a list from a marketing event by external account id, external event id, and ILS list id',
    operationId:
      'delete-/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds',
    request: {
      params: z.object({
        externalAccountId: z
          .string()
          .openapi({
            param: {
              name: 'externalAccountId',
              in: 'path',
              description:
                'The accountId that is associated with this marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        externalEventId: z
          .string()
          .openapi({
            param: {
              name: 'externalEventId',
              in: 'path',
              description: 'The id of the marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        listId: z
          .string()
          .openapi({
            param: {
              name: 'listId',
              in: 'path',
              description: 'The ILS ID of the list.',
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
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const getMarketingMarketingEvents202609AssociationsMarketingEventIdListsRoute = createRoute({
  method: 'get',
  path: '/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists',
  tags: ['List Associations'],
  summary: 'Get lists associated with a marketing event',
  description: 'Gets lists associated with a marketing event by marketing event id',
  operationId:
    'get-/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists_getAllByMarketingEventId',
  request: {
    params: z.object({
      marketingEventId: z
        .string()
        .openapi({
          param: {
            name: 'marketingEventId',
            in: 'path',
            description: 'The internal id of the marketing event in HubSpot.',
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
        'application/json': { schema: CollectionResponseWithTotalPublicListSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const putMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdRoute =
  createRoute({
    method: 'put',
    path: '/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}',
    tags: ['List Associations'],
    summary: 'Associate a list with a marketing event',
    description: 'Associates a list with a marketing event by marketing event id and ILS list id',
    operationId:
      'put-/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId',
    request: {
      params: z.object({
        listId: z
          .string()
          .openapi({
            param: {
              name: 'listId',
              in: 'path',
              description: 'The ILS ID of the list.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        marketingEventId: z
          .string()
          .openapi({
            param: {
              name: 'marketingEventId',
              in: 'path',
              description: 'The internal id of the marketing event in HubSpot.',
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
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const deleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdRoute =
  createRoute({
    method: 'delete',
    path: '/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}',
    tags: ['List Associations'],
    summary: 'Disassociate a list from a marketing event',
    description:
      'Disassociates a list from a marketing event by marketing event id and ILS list id',
    operationId:
      'delete-/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId',
    request: {
      params: z.object({
        listId: z
          .string()
          .openapi({
            param: {
              name: 'listId',
              in: 'path',
              description: 'The ILS ID of the list.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        marketingEventId: z
          .string()
          .openapi({
            param: {
              name: 'marketingEventId',
              in: 'path',
              description: 'The internal id of the marketing event in HubSpot.',
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
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const postMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreateRoute =
  createRoute({
    method: 'post',
    path: '/marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/create',
    tags: ['Event Attendees'],
    summary: 'Record Participants by ContactId with Marketing Event External Ids',
    description:
      'Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.\n\nAdditional Functionality:\n- Adds a timeline event to the contacts.\n\nAllowed Properties:\nFor the state "attend":\n- joinedAt\n- leftAt',
    operationId:
      'post-/marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds',
    request: {
      params: z.object({
        externalEventId: z
          .string()
          .openapi({
            param: {
              name: 'externalEventId',
              in: 'path',
              description: 'The ID of the marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        subscriberState: z
          .string()
          .openapi({
            param: {
              name: 'subscriberState',
              in: 'path',
              description:
                "The state of the subscriber's attendance, such as 'register', 'attend', or 'cancel'.",
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        externalAccountId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'externalAccountId',
              in: 'query',
              description:
                'The account ID associated with the marketing event in the external event application.',
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
          'application/json': { schema: BatchInputMarketingEventSubscriberSchema, example: null },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': { schema: BatchResponseSubscriberVidResponseSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const postMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreateRoute =
  createRoute({
    method: 'post',
    path: '/marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/email-create',
    tags: ['Event Attendees'],
    summary: 'Record Participants by Email with Marketing Event External Ids',
    description:
      'Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.\n\nIf a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.\n\nAdditional Functionality:\n- Adds a timeline event to the contacts.\n\nAllowed Properties:\nFor the state "attend":\n- joinedAt\n- leftAt',
    operationId:
      'post-/marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails',
    request: {
      params: z.object({
        externalEventId: z
          .string()
          .openapi({
            param: {
              name: 'externalEventId',
              in: 'path',
              description: 'The ID of the marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        subscriberState: z
          .string()
          .openapi({
            param: {
              name: 'subscriberState',
              in: 'path',
              description:
                'The state of the subscriber, which can be used to indicate their attendance status.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        externalAccountId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'externalAccountId',
              in: 'query',
              description:
                'The account ID associated with the marketing event in the external event application.',
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
          'application/json': {
            schema: BatchInputMarketingEventEmailSubscriberSchema,
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
          'application/json': { schema: BatchResponseSubscriberEmailResponseSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const postMarketingMarketingEvents202609BatchArchiveRoute = createRoute({
  method: 'post',
  path: '/marketing/marketing-events/2026-09/batch/archive',
  tags: ['Batch'],
  summary: 'Delete Multiple Marketing Events by ObjectId',
  description:
    'Deletes multiple Marketing Events from the portal based on their objectId, if they exist.\n\nResponses:\n204: Returned if all specified Marketing Events were successfully deleted.\n207: Returned if some objectIds did not correspond to any existing Marketing Events.',
  operationId: 'post-/marketing/marketing-events/2026-09/batch/archive_archiveByObjectId',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BatchInputMarketingEventPublicObjectIdDeleteRequestSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const postMarketingMarketingEvents202609BatchUpdateRoute = createRoute({
  method: 'post',
  path: '/marketing/marketing-events/2026-09/batch/update',
  tags: ['Batch'],
  summary: 'Update Multiple Marketing Events by ObjectId',
  description:
    'Updates multiple Marketing Events on the portal based on their objectId, if they exist.',
  operationId: 'post-/marketing/marketing-events/2026-09/batch/update_updateByObjectId',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BatchInputMarketingEventPublicUpdateRequestFullV2Schema,
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
        'application/json': {
          schema: BatchResponseMarketingEventPublicDefaultResponseV2Schema,
          example: null,
        },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseMarketingEventPublicDefaultResponseV2WithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const postMarketingMarketingEvents202609EventsRoute = createRoute({
  method: 'post',
  path: '/marketing/marketing-events/2026-09/events',
  tags: ['Basic'],
  summary: 'Create a marketing event',
  description: 'Creates a new marketing event in HubSpot',
  operationId: 'post-/marketing/marketing-events/2026-09/events_create',
  request: {
    body: {
      content: {
        'application/json': { schema: MarketingEventCreateRequestParamsSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: MarketingEventDefaultResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const postMarketingMarketingEvents202609EventsDeleteRoute = createRoute({
  method: 'post',
  path: '/marketing/marketing-events/2026-09/events/delete',
  tags: ['Batch'],
  summary: 'Delete Multiple Marketing Events by External Ids',
  description:
    'Deletes multiple Marketing Events based on externalAccountId, externalEventId, and appId.\n\nOnly Marketing Events created by the same apps will be deleted; events from other apps cannot be removed by this endpoint. ',
  operationId: 'post-/marketing/marketing-events/2026-09/events/delete_archive',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BatchInputMarketingEventExternalUniqueIdentifierSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const getMarketingMarketingEvents202609EventsSearchRoute = createRoute({
  method: 'get',
  path: '/marketing/marketing-events/2026-09/events/search',
  tags: ['Identifiers'],
  summary: 'Find App-Specific Marketing Events by External Event Id',
  description:
    'Retrieves Marketing Events where the externalEventId matches the value provided in the request, limited to events created by the app making the request.\n\nMarketing Events created by other apps will not be included in the results.',
  operationId: 'get-/marketing/marketing-events/2026-09/events/search_doSearch',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description: 'The search query string used to filter marketing events.',
            required: true,
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
          schema: CollectionResponseSearchPublicResponseWrapperNoPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
})

export const postMarketingMarketingEvents202609EventsUpsertRoute = createRoute({
  method: 'post',
  path: '/marketing/marketing-events/2026-09/events/upsert',
  tags: ['Batch'],
  summary: 'Create or Update Multiple Marketing Events',
  description:
    'Upserts multiple Marketing Events. If a Marketing Event with the specified ID already exists, it will be updated; otherwise, a new event will be created.\n\nOnly Marketing Events originally created by the same app can be updated.',
  operationId: 'post-/marketing/marketing-events/2026-09/events/upsert_upsert',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BatchInputMarketingEventCreateRequestParamsSchema,
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
        'application/json': {
          schema: BatchResponseMarketingEventPublicDefaultResponseSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const getMarketingMarketingEvents202609EventsExternalEventIdRoute = createRoute({
  method: 'get',
  path: '/marketing/marketing-events/2026-09/events/{externalEventId}',
  tags: ['Basic'],
  summary: 'Get Marketing Event by External IDs',
  description:
    'Returns the details of a Marketing Event with the specified externalAccountId, externalEventId, if it exists.\n\nOnly Marketing Events created by the same app making the request can be retrieved.',
  operationId: 'get-/marketing/marketing-events/2026-09/events/{externalEventId}_getDetails',
  request: {
    params: z.object({
      externalEventId: z
        .string()
        .openapi({
          param: {
            name: 'externalEventId',
            in: 'path',
            description: 'The ID of the marketing event in the external event application.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      externalAccountId: z
        .string()
        .openapi({
          param: {
            name: 'externalAccountId',
            in: 'query',
            description:
              'The accountId associated with the marketing event in the external event application.',
            required: true,
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
        'application/json': { schema: MarketingEventPublicReadResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
})

export const putMarketingMarketingEvents202609EventsExternalEventIdRoute = createRoute({
  method: 'put',
  path: '/marketing/marketing-events/2026-09/events/{externalEventId}',
  tags: ['Basic'],
  summary: 'Create or update a marketing event',
  description:
    'Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.',
  operationId: 'put-/marketing/marketing-events/2026-09/events/{externalEventId}_upsert',
  request: {
    params: z.object({
      externalEventId: z
        .string()
        .openapi({
          param: {
            name: 'externalEventId',
            in: 'path',
            description: 'The id of the marketing event in the external event application.',
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
        'application/json': { schema: MarketingEventCreateRequestParamsSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: MarketingEventPublicDefaultResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const deleteMarketingMarketingEvents202609EventsExternalEventIdRoute = createRoute({
  method: 'delete',
  path: '/marketing/marketing-events/2026-09/events/{externalEventId}',
  tags: ['Basic'],
  summary: 'Delete Marketing Event by External Ids',
  description:
    'Deletes the existing Marketing Event with the specified externalAccountId, externalEventId, if it exists.\n\nOnly Marketing Events created by the same app can be deleted.',
  operationId: 'delete-/marketing/marketing-events/2026-09/events/{externalEventId}_archive',
  request: {
    params: z.object({
      externalEventId: z
        .string()
        .openapi({
          param: {
            name: 'externalEventId',
            in: 'path',
            description:
              'The ID of the marketing event in the external event application. This parameter is required.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      externalAccountId: z
        .string()
        .openapi({
          param: {
            name: 'externalAccountId',
            in: 'query',
            description:
              'The account ID associated with the marketing event in the external event application. This parameter is required.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const patchMarketingMarketingEvents202609EventsExternalEventIdRoute = createRoute({
  method: 'patch',
  path: '/marketing/marketing-events/2026-09/events/{externalEventId}',
  tags: ['Basic'],
  summary: 'Update Marketing Event by External IDs',
  description:
    'Updates the details of an existing Marketing Event identified by its externalAccountId, externalEventId if it exists.\n\nOnly Marketing Events created by the same app can be updated.',
  operationId: 'patch-/marketing/marketing-events/2026-09/events/{externalEventId}_update',
  request: {
    params: z.object({
      externalEventId: z
        .string()
        .openapi({
          param: {
            name: 'externalEventId',
            in: 'path',
            description: 'The ID of the marketing event in the external event application.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      externalAccountId: z
        .string()
        .openapi({
          param: {
            name: 'externalAccountId',
            in: 'query',
            description:
              'The account ID associated with this marketing event in the external event application.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: MarketingEventUpdateRequestParamsSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: MarketingEventPublicDefaultResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const postMarketingMarketingEvents202609EventsExternalEventIdCancelRoute = createRoute({
  method: 'post',
  path: '/marketing/marketing-events/2026-09/events/{externalEventId}/cancel',
  tags: ['Event Status'],
  summary: 'Mark a marketing event as cancelled',
  description: 'Mark a marketing event as cancelled.',
  operationId: 'post-/marketing/marketing-events/2026-09/events/{externalEventId}/cancel_cancel',
  request: {
    params: z.object({
      externalEventId: z
        .string()
        .openapi({
          param: {
            name: 'externalEventId',
            in: 'path',
            description:
              'The unique identifier of the marketing event in the external event application.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      externalAccountId: z
        .string()
        .openapi({
          param: {
            name: 'externalAccountId',
            in: 'query',
            description:
              'The unique identifier for the account associated with the marketing event in the external event application.',
            required: true,
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
        'application/json': { schema: MarketingEventDefaultResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const postMarketingMarketingEvents202609EventsExternalEventIdCompleteRoute = createRoute({
  method: 'post',
  path: '/marketing/marketing-events/2026-09/events/{externalEventId}/complete',
  tags: ['Event Status'],
  summary: 'Mark a marketing event as completed',
  description: 'Mark a marketing event as completed',
  operationId:
    'post-/marketing/marketing-events/2026-09/events/{externalEventId}/complete_complete',
  request: {
    params: z.object({
      externalEventId: z
        .string()
        .openapi({
          param: {
            name: 'externalEventId',
            in: 'path',
            description: 'The ID of the marketing event in the external event application.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      externalAccountId: z
        .string()
        .openapi({
          param: {
            name: 'externalAccountId',
            in: 'query',
            description: 'The ID of the external account associated with the marketing event.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: MarketingEventCompleteRequestParamsSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: MarketingEventDefaultResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const postMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsertRoute =
  createRoute({
    method: 'post',
    path: '/marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/email-upsert',
    tags: ['Subscriber State Changes'],
    summary: 'Record a subscriber state by contact email',
    description:
      'Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. ',
    operationId:
      'post-/marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail',
    request: {
      params: z.object({
        externalEventId: z
          .string()
          .openapi({
            param: {
              name: 'externalEventId',
              in: 'path',
              description: 'The ID of the marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        subscriberState: z
          .string()
          .openapi({
            param: {
              name: 'subscriberState',
              in: 'path',
              description:
                'The state of the subscriber, which can be used to categorize subscribers based on their engagement with the event.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        externalAccountId: z
          .string()
          .openapi({
            param: {
              name: 'externalAccountId',
              in: 'query',
              description:
                'The account ID associated with the marketing event in the external event application. This parameter is required.',
              required: true,
              style: 'form',
              explode: true,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: BatchInputMarketingEventEmailSubscriberSchema,
            example: null,
          },
        },
        required: true,
      },
    },
    responses: { default: ErrorResponse },
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const postMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsertRoute =
  createRoute({
    method: 'post',
    path: '/marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/upsert',
    tags: ['Subscriber State Changes'],
    summary: 'Record a subscriber state by contact ID',
    description:
      'Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.',
    operationId:
      'post-/marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId',
    request: {
      params: z.object({
        externalEventId: z
          .string()
          .openapi({
            param: {
              name: 'externalEventId',
              in: 'path',
              description: 'The ID of the marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        subscriberState: z
          .string()
          .openapi({
            param: {
              name: 'subscriberState',
              in: 'path',
              description:
                "The state of the subscriber, which may include values such as 'register', 'attend', or 'cancel'.",
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        externalAccountId: z
          .string()
          .openapi({
            param: {
              name: 'externalAccountId',
              in: 'query',
              description:
                'The account ID associated with the marketing event in the external event application.',
              required: true,
              style: 'form',
              explode: true,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      body: {
        content: {
          'application/json': { schema: BatchInputMarketingEventSubscriberSchema, example: null },
        },
        required: true,
      },
    },
    responses: { default: ErrorResponse },
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownRoute =
  createRoute({
    method: 'get',
    path: '/marketing/marketing-events/2026-09/participations/contacts/{contactIdentifier}/breakdown',
    tags: ['Participant State'],
    summary: 'Read participations breakdown by Contact identifier',
    description: "Read Contact's participations by identifier - email or internal id.",
    operationId:
      'get-/marketing/marketing-events/2026-09/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId',
    request: {
      params: z.object({
        contactIdentifier: z
          .string()
          .openapi({
            param: {
              name: 'contactIdentifier',
              in: 'path',
              description: 'The identifier of the Contact. It may be email or internal id.',
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
              description: 'The cursor indicating the position of the last retrieved item.',
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
          .default(10)
          .exactOptional()
          .openapi({
            param: {
              name: 'limit',
              in: 'query',
              description:
                'The limit for response size. The default value is 10, the max number is 100',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'integer', format: 'int32', example: null, default: 10 },
            },
            example: null,
          }),
        state: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'state',
              in: 'query',
              description:
                'The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW',
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
            schema: CollectionResponseWithTotalParticipationBreakdownSchema,
            example: null,
          },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
  })

export const getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdRoute =
  createRoute({
    method: 'get',
    path: '/marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}',
    tags: ['Participant State'],
    summary: 'Read participations counters by Marketing Event external identifier',
    description:
      "Read Marketing event's participations counters by externalAccountId and externalEventId pair.",
    operationId:
      'get-/marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId',
    request: {
      params: z.object({
        externalAccountId: z
          .string()
          .openapi({
            param: {
              name: 'externalAccountId',
              in: 'path',
              description:
                'The accountId that is associated with this marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        externalEventId: z
          .string()
          .openapi({
            param: {
              name: 'externalEventId',
              in: 'path',
              description: 'The id of the marketing event in the external event application.',
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
        content: { 'application/json': { schema: AttendanceCountersSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
  })

export const getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownRoute =
  createRoute({
    method: 'get',
    path: '/marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}/breakdown',
    tags: ['Participant State'],
    summary: 'Read participations breakdown by Marketing Event external identifier',
    description:
      "Read Marketing event's participations breakdown with optional filters by externalAccountId and externalEventId pair.",
    operationId:
      'get-/marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId',
    request: {
      params: z.object({
        externalAccountId: z
          .string()
          .openapi({
            param: {
              name: 'externalAccountId',
              in: 'path',
              description:
                'The accountId that is associated with this marketing event in the external event application.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        externalEventId: z
          .string()
          .openapi({
            param: {
              name: 'externalEventId',
              in: 'path',
              description: 'The id of the marketing event in the external event application.',
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
              description: 'The cursor indicating the position of the last retrieved item.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        contactIdentifier: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'contactIdentifier',
              in: 'query',
              description: 'The identifier of the Contact. It may be email or internal id.',
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
          .default(10)
          .exactOptional()
          .openapi({
            param: {
              name: 'limit',
              in: 'query',
              description:
                'The limit for response size. The default value is 10, the max number is 100',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'integer', format: 'int32', example: null, default: 10 },
            },
            example: null,
          }),
        state: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'state',
              in: 'query',
              description:
                'The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW',
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
            schema: CollectionResponseWithTotalParticipationBreakdownSchema,
            example: null,
          },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
  })

export const getMarketingMarketingEvents202609ParticipationsMarketingEventIdRoute = createRoute({
  method: 'get',
  path: '/marketing/marketing-events/2026-09/participations/{marketingEventId}',
  tags: ['Participant State'],
  summary: 'Read participations counters by Marketing Event internal identifier',
  description:
    "Read Marketing event's participations counters by internal identifier marketingEventId.",
  operationId:
    'get-/marketing/marketing-events/2026-09/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId',
  request: {
    params: z.object({
      marketingEventId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'marketingEventId',
            in: 'path',
            description: 'The internal id of the marketing event in HubSpot.',
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
      content: { 'application/json': { schema: AttendanceCountersSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
})

export const getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownRoute =
  createRoute({
    method: 'get',
    path: '/marketing/marketing-events/2026-09/participations/{marketingEventId}/breakdown',
    tags: ['Participant State'],
    summary: 'Read participations breakdown by Marketing Event internal identifier',
    description:
      "Read Marketing event's participations breakdown with optional filters by internal identifier marketingEventId.",
    operationId:
      'get-/marketing/marketing-events/2026-09/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId',
    request: {
      params: z.object({
        marketingEventId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'marketingEventId',
              in: 'path',
              description: 'The internal id of the marketing event in HubSpot.',
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
              description: 'The cursor indicating the position of the last retrieved item.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        contactIdentifier: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'contactIdentifier',
              in: 'query',
              description: 'The identifier of the Contact. It may be email or internal id.',
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
          .default(10)
          .exactOptional()
          .openapi({
            param: {
              name: 'limit',
              in: 'query',
              description:
                'The limit for response size. The default value is 10, the max number is 100',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'integer', format: 'int32', example: null, default: 10 },
            },
            example: null,
          }),
        state: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'state',
              in: 'query',
              description:
                'The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW',
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
            schema: CollectionResponseWithTotalParticipationBreakdownSchema,
            example: null,
          },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
  })

export const getMarketingMarketingEvents202609AppIdSettingsRoute = createRoute({
  method: 'get',
  path: '/marketing/marketing-events/2026-09/{appId}/settings',
  tags: ['Settings'],
  summary: 'Retrieve the application settings',
  description: 'Retrieve the current settings for the application.',
  operationId: 'get-/marketing/marketing-events/2026-09/{appId}/settings_getAll',
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
              'The unique identifier of the application for which settings are being retrieved. It is an integer value.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: EventDetailSettingsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postMarketingMarketingEvents202609AppIdSettingsRoute = createRoute({
  method: 'post',
  path: '/marketing/marketing-events/2026-09/{appId}/settings',
  tags: ['Settings'],
  summary: 'Update the application settings',
  description: 'Create or update the current settings for the application.',
  operationId: 'post-/marketing/marketing-events/2026-09/{appId}/settings_update',
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
              'The unique identifier of the marketing event application whose settings are to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: EventDetailSettingsUrlSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: EventDetailSettingsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getMarketingMarketingEvents202609ExternalEventIdIdentifiersRoute = createRoute({
  method: 'get',
  path: '/marketing/marketing-events/2026-09/{externalEventId}/identifiers',
  tags: ['Identifiers'],
  summary: 'Find Marketing Events by External Event Id',
  description:
    'This endpoint searches the portal for all Marketing Events whose externalEventId matches the value provided in the request.\n\nIt retrieves the objectId and additional event details for each matching Marketing Event.\n\nSince multiple Marketing Events can have the same externalEventId, the endpoint returns all matching results.\n\nNote: Marketing Events become searchable by externalEventId a few minutes after creation.',
  operationId:
    'get-/marketing/marketing-events/2026-09/{externalEventId}/identifiers_searchPortalEvents',
  request: {
    params: z.object({
      externalEventId: z
        .string()
        .openapi({
          param: {
            name: 'externalEventId',
            in: 'path',
            description: 'The id of the marketing event in the external event application.',
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
          schema: CollectionResponseWithTotalMarketingEventIdentifiersResponseSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
})

export const getMarketingMarketingEvents202609ObjectIdRoute = createRoute({
  method: 'get',
  path: '/marketing/marketing-events/2026-09/{objectId}',
  tags: ['Basic'],
  summary: 'Get Marketing Event by objectId',
  description:
    'Returns the details of a Marketing Event with the specified objectId, if it exists.',
  operationId: 'get-/marketing/marketing-events/2026-09/{objectId}_getByObjectId',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The internal id of the marketing event in HubSpot.',
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
        'application/json': { schema: MarketingEventPublicReadResponseV2Schema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.read'] }],
})

export const deleteMarketingMarketingEvents202609ObjectIdRoute = createRoute({
  method: 'delete',
  path: '/marketing/marketing-events/2026-09/{objectId}',
  tags: ['Basic'],
  summary: 'Delete Marketing Event by objectId',
  description: 'Deletes the existing Marketing Event with the specified objectId, if it exists.',
  operationId: 'delete-/marketing/marketing-events/2026-09/{objectId}_archiveByObjectId',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The internal id of the marketing event in HubSpot.',
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
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const patchMarketingMarketingEvents202609ObjectIdRoute = createRoute({
  method: 'patch',
  path: '/marketing/marketing-events/2026-09/{objectId}',
  tags: ['Basic'],
  summary: 'Update Marketing Event by objectId',
  description:
    'Updates the details of an existing Marketing Event identified by its objectId, if it exists.',
  operationId: 'patch-/marketing/marketing-events/2026-09/{objectId}_updateByObjectId',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The internal id of the marketing event in HubSpot.',
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
        'application/json': { schema: MarketingEventPublicUpdateRequestV2Schema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: MarketingEventPublicDefaultResponseV2Schema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
})

export const postMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreateRoute =
  createRoute({
    method: 'post',
    path: '/marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/create',
    tags: ['Event Attendees'],
    summary: 'Record Participants by ContactId with Marketing Event Object Id',
    description:
      'Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.\n\nAdditional Functionality:\n- Adds a timeline event to the contacts.\n\nAllowed Properties:\nFor the state "attend":\n- joinedAt\n- leftAt',
    operationId:
      'post-/marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/create_recordByContactId',
    request: {
      params: z.object({
        objectId: z
          .string()
          .openapi({
            param: {
              name: 'objectId',
              in: 'path',
              description: 'The internal id of the marketing event in HubSpot.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        subscriberState: z
          .string()
          .openapi({
            param: {
              name: 'subscriberState',
              in: 'path',
              description: "The attendance state value. It may be 'register', 'attend' or 'cancel'",
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
          'application/json': { schema: BatchInputMarketingEventSubscriberSchema, example: null },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': { schema: BatchResponseSubscriberVidResponseSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })

export const postMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreateRoute =
  createRoute({
    method: 'post',
    path: '/marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/email-create',
    tags: ['Event Attendees'],
    summary: 'Record Participants by Email with Marketing Event Object Id',
    description:
      'Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.\n\nIf a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.\n\nAdditional Functionality:\n- Adds a timeline event to the contacts.\n\nAllowed Properties:\nFor the state "attend":\n- joinedAt\n- leftAt',
    operationId:
      'post-/marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/email-create_recordByEmail',
    request: {
      params: z.object({
        objectId: z
          .string()
          .openapi({
            param: {
              name: 'objectId',
              in: 'path',
              description: 'The internal id of the marketing event in HubSpot.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        subscriberState: z
          .string()
          .openapi({
            param: {
              name: 'subscriberState',
              in: 'path',
              description: "The attendance state value. It may be 'register', 'attend' or 'cancel'",
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
            schema: BatchInputMarketingEventEmailSubscriberSchema,
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
          'application/json': { schema: BatchResponseSubscriberEmailResponseSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.objects.marketing_events.write'] }],
  })
