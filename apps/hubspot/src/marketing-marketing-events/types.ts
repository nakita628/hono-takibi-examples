type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type AppInfo = { id: string; name: string }
type CrmPropertyWrapper = { name: string; value: string }
type MarketingEventPublicReadResponseV2 = {
  appInfo?: AppInfo | undefined
  attendees?: number | undefined
  cancellations?: number | undefined
  createdAt: string
  customProperties: CrmPropertyWrapper[]
  endDateTime?: string | undefined
  eventCancelled?: boolean | undefined
  eventCompleted?: boolean | undefined
  eventDescription?: string | undefined
  eventName: string
  eventOrganizer?: string | undefined
  eventStatus?: string | undefined
  eventStatusV2?: string | undefined
  eventType?: string | undefined
  eventUrl?: string | undefined
  externalEventId?: string | undefined
  noShows?: number | undefined
  objectId: string
  registrants?: number | undefined
  startDateTime?: string | undefined
  updatedAt: string
}
type CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging = {
  paging?: ForwardPaging | undefined
  results: MarketingEventPublicReadResponseV2[]
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type PublicList = {
  createdAt?: string | undefined
  createdById?: string | undefined
  deletedAt?: string | undefined
  filtersUpdatedAt?: string | undefined
  listId: string
  listVersion: number
  name: string
  objectTypeId: string
  processingStatus: string
  processingType: string
  size?: bigint | undefined
  updatedAt?: string | undefined
  updatedById?: string | undefined
}
type CollectionResponseWithTotalPublicList = {
  paging?: Paging | undefined
  results: PublicList[]
  total: number
}
type MarketingEventSubscriber = {
  interactionDateTime: bigint
  properties: { [x: string]: string }
  vid: bigint
}
type BatchInputMarketingEventSubscriber = { inputs: MarketingEventSubscriber[] }
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type SubscriberVidResponse = { vid: bigint }
type BatchResponseSubscriberVidResponse = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: SubscriberVidResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type MarketingEventEmailSubscriber = {
  contactProperties: { [x: string]: string }
  email: string
  interactionDateTime: bigint
  properties: { [x: string]: string }
}
type BatchInputMarketingEventEmailSubscriber = { inputs: MarketingEventEmailSubscriber[] }
type SubscriberEmailResponse = { email: string; vid: bigint }
type BatchResponseSubscriberEmailResponse = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: SubscriberEmailResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type MarketingEventPublicObjectIdDeleteRequest = { objectId: string }
type BatchInputMarketingEventPublicObjectIdDeleteRequest = {
  inputs: MarketingEventPublicObjectIdDeleteRequest[]
}
type MaskedSubstring = { end: number; label: string; start: number }
type MaskedSubstrings = { substrings: MaskedSubstring[] }
type PropertyValue = {
  dataSensitivity: 'high' | 'none' | 'standard'
  isEncrypted: boolean
  isLargeValue: boolean
  maskedSubstrings: MaskedSubstrings
  name: string
  persistenceTimestamp: bigint
  requestId: string
  selectedByUser: boolean
  selectedByUserTimestamp: bigint
  source:
    | 'ACADEMY'
    | 'ACCEPTANCE_TEST'
    | 'ACTIVITY_AUTO_ASSOCIATE'
    | 'ACTIVITY_LOG_REVERT'
    | 'ADS'
    | 'AI_GROUP'
    | 'ANALYTICS'
    | 'API'
    | 'APPROVALS'
    | 'ASSISTS'
    | 'ASSOCIATIONS'
    | 'AUTO_ASSOCIATE_BY_DOMAIN'
    | 'AUTOMATION_JOURNEY'
    | 'AUTOMATION_PLATFORM'
    | 'AVATARS_SERVICE'
    | 'BATCH_UPDATE'
    | 'BCC_TO_CRM'
    | 'BEHAVIORAL_EVENTS'
    | 'BET_ASSIGNMENT'
    | 'BET_CRM_CONNECTOR'
    | 'BIDEN'
    | 'BILLING'
    | 'BOT'
    | 'BREEZE_AGENT'
    | 'CALCULATED'
    | 'CENTRAL_EXCHANGE_RATES'
    | 'CHATSPOT'
    | 'CLONE_OBJECTS'
    | 'COMMUNICATOR'
    | 'COMPANIES'
    | 'COMPANY_FAMILIES'
    | 'COMPANY_INSIGHTS'
    | 'CONNECTED_ACCOUNT'
    | 'CONTACTS'
    | 'CONTACTS_WEB'
    | 'CONTENT_MEMBERSHIP'
    | 'CONVERSATIONAL_ENRICHMENT'
    | 'CONVERSATIONS'
    | 'CRM_PROCESSES_PLATFORM'
    | 'CRM_UI'
    | 'CRM_UI_BULK_ACTION'
    | 'CUSTOMER_AGENT'
    | 'CUSTOMER_PORTAL'
    | 'DATA_ENRICHMENT'
    | 'DATA_QUALITY'
    | 'DATASET'
    | 'DEALS'
    | 'DEFAULT'
    | 'DELETE_OBJECTS'
    | 'DI_WRITE_TO_CRM'
    | 'EMAIL'
    | 'EMAIL_INBOX_IMPORT'
    | 'EMAIL_INTEGRATION'
    | 'ENGAGEMENTS'
    | 'EXTENSION'
    | 'FILE_MANAGER'
    | 'FLYWHEEL_PRODUCT_DATA_SYNC'
    | 'FORECASTING'
    | 'FORM'
    | 'FORWARD_TO_CRM'
    | 'GMAIL_INTEGRATION'
    | 'GOALS'
    | 'HEISENBERG'
    | 'HELP_DESK'
    | 'HELP_DESK_AI'
    | 'IMPORT'
    | 'INTEGRATION'
    | 'INTEGRATIONS_PLATFORM'
    | 'INTEGRATIONS_SYNC'
    | 'INTENT'
    | 'INTERNAL_PROCESSING'
    | 'LEADIN'
    | 'LEGAL_BASIS_REMEDIATION'
    | 'MARKET_SOURCING'
    | 'MARKETPLACE'
    | 'MARKETS'
    | 'MEETINGS'
    | 'MERGE_COMPANIES'
    | 'MERGE_CONTACTS'
    | 'MERGE_OBJECTS'
    | 'MERGE_REVERT_OBJECTS'
    | 'MICROAPPS'
    | 'MIGRATION'
    | 'MOBILE_ANDROID'
    | 'MOBILE_IOS'
    | 'PAYMENTS'
    | 'PIPELINE_SETTINGS'
    | 'PLAYBOOKS'
    | 'PORTAL_OBJECT_SYNC'
    | 'PORTAL_USER_ASSOCIATOR'
    | 'PRESENTATIONS'
    | 'PRIMARY_AUTOMATION'
    | 'PROPERTY_DEFAULT_VALUE'
    | 'PROPERTY_RESTORE'
    | 'PROPERTY_SETTINGS'
    | 'PROSPECTING_AGENT'
    | 'QUOTAS'
    | 'QUOTES'
    | 'RECYCLING_BIN'
    | 'RESTORE_OBJECTS'
    | 'REVENUE_PLATFORM'
    | 'SALES'
    | 'SALES_MESSAGES'
    | 'SALESFORCE'
    | 'SEQUENCES'
    | 'SETTINGS'
    | 'SIDEKICK'
    | 'SIGNALS'
    | 'SLACK_INTEGRATION'
    | 'SMART_DATA_CAPTURE'
    | 'SOCIAL'
    | 'SUCCESS'
    | 'TALLY'
    | 'TASK'
    | 'UNKNOWN'
    | 'WAL_INCREMENTAL'
    | 'WORK_UI'
    | 'WORKFLOW_CONTACT_DELETE_ACTION'
    | 'WORKFLOWS'
  sourceId: string
  sourceLabel: string
  sourceMetadata: string
  sourceUpstreamDeployable: string
  sourceVid: bigint[]
  timestamp: bigint
  unit: string
  updatedByUserId: number
  useTimestampAsPersistenceTimestamp: boolean
  value: string
}
type MarketingEventPublicUpdateRequestFullV2 = {
  customProperties: PropertyValue[]
  endDateTime?: string | undefined
  eventCancelled?: boolean | undefined
  eventDescription?: string | undefined
  eventName?: string | undefined
  eventOrganizer?: string | undefined
  eventType?: string | undefined
  eventUrl?: string | undefined
  objectId: string
  startDateTime?: string | undefined
}
type BatchInputMarketingEventPublicUpdateRequestFullV2 = {
  inputs: MarketingEventPublicUpdateRequestFullV2[]
}
type MarketingEventPublicDefaultResponseV2 = {
  appInfo?: AppInfo | undefined
  createdAt: string
  customProperties: CrmPropertyWrapper[]
  endDateTime?: string | undefined
  eventCancelled?: boolean | undefined
  eventCompleted?: boolean | undefined
  eventDescription?: string | undefined
  eventName: string
  eventOrganizer?: string | undefined
  eventType?: string | undefined
  eventUrl?: string | undefined
  objectId: string
  startDateTime?: string | undefined
  updatedAt: string
}
type BatchResponseMarketingEventPublicDefaultResponseV2 = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: MarketingEventPublicDefaultResponseV2[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponseMarketingEventPublicDefaultResponseV2WithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: MarketingEventPublicDefaultResponseV2[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type MarketingEventCreateRequestParams = {
  customProperties: PropertyValue[]
  endDateTime?: string | undefined
  eventCancelled?: boolean | undefined
  eventCompleted?: boolean | undefined
  eventDescription?: string | undefined
  eventName: string
  eventOrganizer: string
  eventType?: string | undefined
  eventUrl?: string | undefined
  externalAccountId: string
  externalEventId: string
  startDateTime?: string | undefined
}
type MarketingEventDefaultResponse = {
  customProperties: PropertyValue[]
  endDateTime?: string | undefined
  eventCancelled?: boolean | undefined
  eventCompleted?: boolean | undefined
  eventDescription?: string | undefined
  eventName: string
  eventOrganizer: string
  eventType?: string | undefined
  eventUrl?: string | undefined
  objectId?: string | undefined
  startDateTime?: string | undefined
}
type MarketingEventExternalUniqueIdentifier = {
  appId: number
  externalAccountId: string
  externalEventId: string
}
type BatchInputMarketingEventExternalUniqueIdentifier = {
  inputs: MarketingEventExternalUniqueIdentifier[]
}
type SearchPublicResponseWrapper = {
  appId: number
  externalAccountId: string
  externalEventId: string
  objectId: string
}
type CollectionResponseSearchPublicResponseWrapperNoPaging = {
  results: SearchPublicResponseWrapper[]
}
type BatchInputMarketingEventCreateRequestParams = { inputs: MarketingEventCreateRequestParams[] }
type MarketingEventPublicDefaultResponse = {
  createdAt: string
  customProperties: PropertyValue[]
  endDateTime?: string | undefined
  eventCancelled?: boolean | undefined
  eventCompleted?: boolean | undefined
  eventDescription?: string | undefined
  eventName: string
  eventOrganizer: string
  eventType?: string | undefined
  eventUrl?: string | undefined
  id: string
  objectId?: string | undefined
  startDateTime?: string | undefined
  updatedAt: string
}
type BatchResponseMarketingEventPublicDefaultResponse = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: MarketingEventPublicDefaultResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type MarketingEventPublicReadResponse = {
  attendees: number
  cancellations: number
  createdAt: string
  customProperties: PropertyValue[]
  endDateTime?: string | undefined
  eventCancelled?: boolean | undefined
  eventCompleted?: boolean | undefined
  eventDescription?: string | undefined
  eventName: string
  eventOrganizer: string
  eventType?: string | undefined
  eventUrl?: string | undefined
  externalEventId: string
  id: string
  noShows: number
  objectId?: string | undefined
  registrants: number
  startDateTime?: string | undefined
  updatedAt: string
}
type MarketingEventUpdateRequestParams = {
  customProperties: PropertyValue[]
  endDateTime?: string | undefined
  eventCancelled?: boolean | undefined
  eventCompleted?: boolean | undefined
  eventDescription?: string | undefined
  eventName?: string | undefined
  eventOrganizer?: string | undefined
  eventType?: string | undefined
  eventUrl?: string | undefined
  startDateTime?: string | undefined
}
type MarketingEventCompleteRequestParams = { endDateTime: string; startDateTime: string }
type ContactAssociation = {
  contactId: string
  email: string
  firstname?: string | undefined
  lastname?: string | undefined
}
type MarketingEventAssociation = {
  externalAccountId?: string | undefined
  externalEventId?: string | undefined
  marketingEventId: string
  name: string
}
type ParticipationAssociations = {
  contact: ContactAssociation
  marketingEvent: MarketingEventAssociation
}
type ParticipationProperties = {
  attendanceDurationSeconds?: number | undefined
  attendancePercentage?: string | undefined
  attendanceState: 'ATTENDED' | 'CANCELLED' | 'EMPTY' | 'NO_SHOW' | 'REGISTERED'
  occurredAt: bigint
}
type ParticipationBreakdown = {
  associations: ParticipationAssociations
  createdAt: string
  id: string
  properties: ParticipationProperties
}
type CollectionResponseWithTotalParticipationBreakdown = {
  paging?: Paging | undefined
  results: ParticipationBreakdown[]
  total: number
}
type AttendanceCounters = {
  attended: number
  cancelled: number
  noShows: number
  registered: number
}
type EventDetailSettings = { appId: number; eventDetailsUrl: string }
type EventDetailSettingsUrl = { eventDetailsUrl: string }
type MarketingEventIdentifiersResponse = {
  appInfo?: AppInfo | undefined
  externalAccountId?: string | undefined
  externalEventId: string
  marketingEventName: string
  objectId: string
}
type CollectionResponseWithTotalMarketingEventIdentifiersResponse = {
  paging?: Paging | undefined
  results: MarketingEventIdentifiersResponse[]
  total: number
}
type MarketingEventPublicUpdateRequestV2 = {
  customProperties: PropertyValue[]
  endDateTime?: string | undefined
  eventCancelled?: boolean | undefined
  eventDescription?: string | undefined
  eventName?: string | undefined
  eventOrganizer?: string | undefined
  eventType?: string | undefined
  eventUrl?: string | undefined
  startDateTime?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/marketing/marketing-events/2026-09': {
      $get:
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/associations/:externalAccountId/:externalEventId/lists': {
      $get:
        | {
            input: { param: { externalAccountId: string; externalEventId: string } }
            output: CollectionResponseWithTotalPublicList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalAccountId: string; externalEventId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/associations/:externalAccountId/:externalEventId/lists/:listId': {
      $put:
        | {
            input: { param: { externalAccountId: string; externalEventId: string; listId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { externalAccountId: string; externalEventId: string; listId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { externalAccountId: string; externalEventId: string; listId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { externalAccountId: string; externalEventId: string; listId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/associations/:marketingEventId/lists': {
      $get:
        | {
            input: { param: { marketingEventId: string } }
            output: CollectionResponseWithTotalPublicList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketingEventId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/associations/:marketingEventId/lists/:listId': {
      $put:
        | {
            input: { param: { listId: string; marketingEventId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { listId: string; marketingEventId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { listId: string; marketingEventId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { listId: string; marketingEventId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/attendance/:externalEventId/:subscriberState/create': {
      $post:
        | {
            input: { param: { externalEventId: string; subscriberState: string } } & {
              query: { externalAccountId?: string | undefined }
            } & { json: BatchInputMarketingEventSubscriber }
            output: BatchResponseSubscriberVidResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalEventId: string; subscriberState: string } } & {
              query: { externalAccountId?: string | undefined }
            } & { json: BatchInputMarketingEventSubscriber }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/attendance/:externalEventId/:subscriberState/email-create': {
      $post:
        | {
            input: { param: { externalEventId: string; subscriberState: string } } & {
              query: { externalAccountId?: string | undefined }
            } & { json: BatchInputMarketingEventEmailSubscriber }
            output: BatchResponseSubscriberEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalEventId: string; subscriberState: string } } & {
              query: { externalAccountId?: string | undefined }
            } & { json: BatchInputMarketingEventEmailSubscriber }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/batch/archive': {
      $post: {
        input: { json: BatchInputMarketingEventPublicObjectIdDeleteRequest }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/marketing/marketing-events/2026-09/batch/update': {
      $post:
        | {
            input: { json: BatchInputMarketingEventPublicUpdateRequestFullV2 }
            output: BatchResponseMarketingEventPublicDefaultResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchInputMarketingEventPublicUpdateRequestFullV2 }
            output: BatchResponseMarketingEventPublicDefaultResponseV2WithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: BatchInputMarketingEventPublicUpdateRequestFullV2 }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/events': {
      $post:
        | {
            input: { json: MarketingEventCreateRequestParams }
            output: MarketingEventDefaultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MarketingEventCreateRequestParams }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/events/delete': {
      $post: {
        input: { json: BatchInputMarketingEventExternalUniqueIdentifier }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/marketing/marketing-events/2026-09/events/search': {
      $get:
        | {
            input: { query: { q: string } }
            output: CollectionResponseSearchPublicResponseWrapperNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { q: string } }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/marketing/marketing-events/2026-09/events/upsert': {
      $post:
        | {
            input: { json: BatchInputMarketingEventCreateRequestParams }
            output: BatchResponseMarketingEventPublicDefaultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchInputMarketingEventCreateRequestParams }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/events/:externalEventId': {
      $get:
        | {
            input: { param: { externalEventId: string } } & { query: { externalAccountId: string } }
            output: MarketingEventPublicReadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalEventId: string } } & { query: { externalAccountId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { externalEventId: string } } & {
              json: MarketingEventCreateRequestParams
            }
            output: MarketingEventPublicDefaultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalEventId: string } } & {
              json: MarketingEventCreateRequestParams
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { externalEventId: string } } & { query: { externalAccountId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { externalEventId: string } } & { query: { externalAccountId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { externalEventId: string } } & {
              query: { externalAccountId: string }
            } & { json: MarketingEventUpdateRequestParams }
            output: MarketingEventPublicDefaultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalEventId: string } } & {
              query: { externalAccountId: string }
            } & { json: MarketingEventUpdateRequestParams }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/events/:externalEventId/cancel': {
      $post:
        | {
            input: { param: { externalEventId: string } } & { query: { externalAccountId: string } }
            output: MarketingEventDefaultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalEventId: string } } & { query: { externalAccountId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/events/:externalEventId/complete': {
      $post:
        | {
            input: { param: { externalEventId: string } } & {
              query: { externalAccountId: string }
            } & { json: MarketingEventCompleteRequestParams }
            output: MarketingEventDefaultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalEventId: string } } & {
              query: { externalAccountId: string }
            } & { json: MarketingEventCompleteRequestParams }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/events/:externalEventId/:subscriberState/email-upsert': {
      $post: {
        input: { param: { externalEventId: string; subscriberState: string } } & {
          query: { externalAccountId: string }
        } & { json: BatchInputMarketingEventEmailSubscriber }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/marketing/marketing-events/2026-09/events/:externalEventId/:subscriberState/upsert': {
      $post: {
        input: { param: { externalEventId: string; subscriberState: string } } & {
          query: { externalAccountId: string }
        } & { json: BatchInputMarketingEventSubscriber }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/marketing/marketing-events/2026-09/participations/contacts/:contactIdentifier/breakdown': {
      $get:
        | {
            input: { param: { contactIdentifier: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                state?: string | undefined
              }
            }
            output: CollectionResponseWithTotalParticipationBreakdown
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contactIdentifier: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                state?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/participations/:externalAccountId/:externalEventId': {
      $get:
        | {
            input: { param: { externalAccountId: string; externalEventId: string } }
            output: AttendanceCounters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalAccountId: string; externalEventId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/participations/:externalAccountId/:externalEventId/breakdown': {
      $get:
        | {
            input: { param: { externalAccountId: string; externalEventId: string } } & {
              query: {
                after?: string | undefined
                contactIdentifier?: string | undefined
                limit?: number | undefined
                state?: string | undefined
              }
            }
            output: CollectionResponseWithTotalParticipationBreakdown
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalAccountId: string; externalEventId: string } } & {
              query: {
                after?: string | undefined
                contactIdentifier?: string | undefined
                limit?: number | undefined
                state?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/participations/:marketingEventId': {
      $get:
        | {
            input: { param: { marketingEventId: bigint } }
            output: AttendanceCounters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketingEventId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/participations/:marketingEventId/breakdown': {
      $get:
        | {
            input: { param: { marketingEventId: bigint } } & {
              query: {
                after?: string | undefined
                contactIdentifier?: string | undefined
                limit?: number | undefined
                state?: string | undefined
              }
            }
            output: CollectionResponseWithTotalParticipationBreakdown
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketingEventId: bigint } } & {
              query: {
                after?: string | undefined
                contactIdentifier?: string | undefined
                limit?: number | undefined
                state?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/:appId/settings': {
      $get:
        | {
            input: { param: { appId: number } }
            output: EventDetailSettings
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { appId: number } } & { json: EventDetailSettingsUrl }
            output: EventDetailSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: EventDetailSettingsUrl }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/:externalEventId/identifiers': {
      $get:
        | {
            input: { param: { externalEventId: string } }
            output: CollectionResponseWithTotalMarketingEventIdentifiersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalEventId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/:objectId': {
      $get:
        | {
            input: { param: { objectId: string } }
            output: MarketingEventPublicReadResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | { input: { param: { objectId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { objectId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { objectId: string } } & { json: MarketingEventPublicUpdateRequestV2 }
            output: MarketingEventPublicDefaultResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string } } & { json: MarketingEventPublicUpdateRequestV2 }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/:objectId/attendance/:subscriberState/create': {
      $post:
        | {
            input: { param: { objectId: string; subscriberState: string } } & {
              json: BatchInputMarketingEventSubscriber
            }
            output: BatchResponseSubscriberVidResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; subscriberState: string } } & {
              json: BatchInputMarketingEventSubscriber
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/marketing-events/2026-09/:objectId/attendance/:subscriberState/email-create': {
      $post:
        | {
            input: { param: { objectId: string; subscriberState: string } } & {
              json: BatchInputMarketingEventEmailSubscriber
            }
            output: BatchResponseSubscriberEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; subscriberState: string } } & {
              json: BatchInputMarketingEventEmailSubscriber
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
