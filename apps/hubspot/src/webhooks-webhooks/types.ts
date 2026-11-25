type ThrottlingSettings = { maxConcurrentRequests: number }
type SettingsResponse = {
  createdAt: string
  targetUrl: string
  throttling: ThrottlingSettings
  updatedAt?: string | undefined
}
type ThrottlingSettingsInput = { maxConcurrentRequests: number }
type SettingsChangeRequestInput = { targetUrl: string; throttling: ThrottlingSettingsInput }
type SubscriptionResponse = {
  active: boolean
  createdAt: string
  eventType:
    | 'company.associationChange'
    | 'company.creation'
    | 'company.deletion'
    | 'company.merge'
    | 'company.propertyChange'
    | 'company.restore'
    | 'contact.associationChange'
    | 'contact.creation'
    | 'contact.deletion'
    | 'contact.merge'
    | 'contact.privacyDeletion'
    | 'contact.propertyChange'
    | 'contact.restore'
    | 'conversation.creation'
    | 'conversation.deletion'
    | 'conversation.newMessage'
    | 'conversation.privacyDeletion'
    | 'conversation.propertyChange'
    | 'deal.associationChange'
    | 'deal.creation'
    | 'deal.deletion'
    | 'deal.merge'
    | 'deal.propertyChange'
    | 'deal.restore'
    | 'event.completed'
    | 'line_item.associationChange'
    | 'line_item.creation'
    | 'line_item.deletion'
    | 'line_item.merge'
    | 'line_item.propertyChange'
    | 'line_item.restore'
    | 'object.associationChange'
    | 'object.creation'
    | 'object.deletion'
    | 'object.merge'
    | 'object.propertyChange'
    | 'object.restore'
    | 'product.creation'
    | 'product.deletion'
    | 'product.merge'
    | 'product.propertyChange'
    | 'product.restore'
    | 'ticket.associationChange'
    | 'ticket.creation'
    | 'ticket.deletion'
    | 'ticket.merge'
    | 'ticket.propertyChange'
    | 'ticket.restore'
  eventTypeName?: string | undefined
  id: string
  objectTypeId?: string | undefined
  propertyName?: string | undefined
  updatedAt?: string | undefined
}
type SubscriptionListResponse = { results: SubscriptionResponse[] }
type SubscriptionCreateRequestInput = {
  active: boolean
  eventType:
    | 'company.associationChange'
    | 'company.creation'
    | 'company.deletion'
    | 'company.merge'
    | 'company.propertyChange'
    | 'company.restore'
    | 'contact.associationChange'
    | 'contact.creation'
    | 'contact.deletion'
    | 'contact.merge'
    | 'contact.privacyDeletion'
    | 'contact.propertyChange'
    | 'contact.restore'
    | 'conversation.creation'
    | 'conversation.deletion'
    | 'conversation.newMessage'
    | 'conversation.privacyDeletion'
    | 'conversation.propertyChange'
    | 'deal.associationChange'
    | 'deal.creation'
    | 'deal.deletion'
    | 'deal.merge'
    | 'deal.propertyChange'
    | 'deal.restore'
    | 'event.completed'
    | 'line_item.associationChange'
    | 'line_item.creation'
    | 'line_item.deletion'
    | 'line_item.merge'
    | 'line_item.propertyChange'
    | 'line_item.restore'
    | 'object.associationChange'
    | 'object.creation'
    | 'object.deletion'
    | 'object.merge'
    | 'object.propertyChange'
    | 'object.restore'
    | 'product.creation'
    | 'product.deletion'
    | 'product.merge'
    | 'product.propertyChange'
    | 'product.restore'
    | 'ticket.associationChange'
    | 'ticket.creation'
    | 'ticket.deletion'
    | 'ticket.merge'
    | 'ticket.propertyChange'
    | 'ticket.restore'
  eventTypeName?: string
  objectTypeId?: string
  propertyName?: string
}
type SubscriptionBatchUpdateRequestInput = { active: boolean; id: number }
type BatchInputSubscriptionBatchUpdateRequestInput = {
  inputs: SubscriptionBatchUpdateRequestInput[]
}
type BatchResponseSubscriptionResponse = {
  completedAt: string
  links?: { [key: string]: string } | undefined
  requestedAt?: string | undefined
  results: SubscriptionResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [key: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type StandardError = {
  category: string
  context: { [key: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [key: string]: string }
  message: string
  status: string
  subCategory?: { [key: string]: unknown } | undefined
}
type BatchResponseSubscriptionResponseWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [key: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: SubscriptionResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type SubscriptionPatchRequestInput = { active?: boolean; enabled?: boolean }
type JournalFetchResponse = { currentOffset: string; expiresAt: string; url: string }
type BatchResponseJournalFetchResponse = {
  completedAt: string
  links?: { [key: string]: string } | undefined
  requestedAt?: string | undefined
  results: JournalFetchResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchInputStringInput = { inputs: string[] }
type BatchResponseJournalFetchResponseWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [key: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: JournalFetchResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type SnapshotStatusResponse = {
  completedAt?: bigint | undefined
  errorCode?: 'INTERNAL_ERROR' | 'PERMISSION_DENIED' | 'TIMEOUT' | 'VALIDATION_ERROR' | undefined
  id: string
  initiatedAt: bigint
  message?: string | undefined
  status: 'EXPIRED' | 'FAILED' | 'IN_PROGRESS' | 'PENDING' | 'SUCCESS'
}
type CrmObjectSnapshotRequestInput = {
  objectId: bigint
  objectTypeId: string
  portalId: bigint
  properties: string[]
}
type CrmObjectSnapshotBatchRequestInput = { snapshotRequests: CrmObjectSnapshotRequestInput[] }
type CrmObjectSnapshotResponse = {
  objectId: bigint
  objectTypeId: string
  portalId: bigint
  snapshotStatusId: string
}
type CrmObjectSnapshotBatchResponse = { snapshotResponses: CrmObjectSnapshotResponse[] }
type ActionOverrideRequest = {
  associatedObjectTypeIds?: string[] | undefined
  listIds?: bigint[] | undefined
  objectIds?: bigint[] | undefined
  properties?: string[] | undefined
}
type SubscriptionResponse_1 = {
  actionOverrides?: { [key: string]: ActionOverrideRequest } | undefined
  actions: (
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
    | 'GDPR_DELETE'
  )[]
  appId: bigint
  associatedObjectTypeIds?: string[] | undefined
  createdAt: string
  createdBy?: bigint | undefined
  deletedAt?: string | undefined
  id: bigint
  listIds?: bigint[] | undefined
  objectIds?: bigint[] | undefined
  objectTypeId: string
  portalId?: bigint | undefined
  properties?: string[] | undefined
  subscriptionType:
    | 'APP_LIFECYCLE_EVENT'
    | 'ASSOCIATION'
    | 'EVENT'
    | 'GDPR_PRIVACY_DELETION'
    | 'LIST_MEMBERSHIP'
    | 'OBJECT'
  updatedAt: string
}
type CollectionResponseSubscriptionResponseNoPaging = { results: SubscriptionResponse_1[] }
type ObjectSubscriptionUpsertRequestInput = {
  actions: (
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
    | 'GDPR_DELETE'
  )[]
  objectIds: bigint[]
  objectTypeId: string
  portalId: bigint
  properties: string[]
  subscriptionType: 'OBJECT'
}
type AssociationSubscriptionUpsertRequestInput = {
  actions: (
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
    | 'GDPR_DELETE'
  )[]
  associatedObjectTypeIds: string[]
  objectIds: bigint[]
  objectTypeId: string
  portalId: bigint
  subscriptionType: 'ASSOCIATION'
}
type AppLifecycleEventSubscriptionUpsertRequestInput = {
  eventTypeId: string
  properties: string[]
  subscriptionType: 'APP_LIFECYCLE_EVENT'
}
type ListMembershipSubscriptionUpsertRequestInput = {
  actions: (
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
    | 'GDPR_DELETE'
  )[]
  listIds: bigint[]
  objectIds: bigint[]
  portalId: bigint
  subscriptionType: 'LIST_MEMBERSHIP'
}
type GdprPrivacyDeletionSubscriptionUpsertRequestInput = {
  actions: (
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
    | 'GDPR_DELETE'
  )[]
  objectTypeId: string
  portalId: bigint
  subscriptionType: 'GDPR_PRIVACY_DELETION'
}
type SubscriptionUpsertRequestInput =
  | ObjectSubscriptionUpsertRequestInput
  | AssociationSubscriptionUpsertRequestInput
  | AppLifecycleEventSubscriptionUpsertRequestInput
  | ListMembershipSubscriptionUpsertRequestInput
  | GdprPrivacyDeletionSubscriptionUpsertRequestInput
type ConditionInput = {
  filterType: 'CRM_OBJECT_PROPERTY'
  operator:
    | 'CONTAINS'
    | 'ENDS_WITH'
    | 'EQ'
    | 'GT'
    | 'GTE'
    | 'IN'
    | 'IS_EMPTY'
    | 'IS_NOT_EMPTY'
    | 'LT'
    | 'LTE'
    | 'N_EQ'
    | 'NOT_IN'
    | 'STARTS_WITH'
  property: string
  value?: string
  values?: string[]
}
type FilterInput = { conditions: ConditionInput[] }
type FilterCreateRequestInput = { filter: FilterInput; subscriptionId: bigint }
type FilterCreateResponse = { filterId: bigint }
type Condition = {
  filterType: 'CRM_OBJECT_PROPERTY'
  operator:
    | 'CONTAINS'
    | 'ENDS_WITH'
    | 'EQ'
    | 'GT'
    | 'GTE'
    | 'IN'
    | 'IS_EMPTY'
    | 'IS_NOT_EMPTY'
    | 'LT'
    | 'LTE'
    | 'N_EQ'
    | 'NOT_IN'
    | 'STARTS_WITH'
  property: string
  value?: string | undefined
  values?: string[] | undefined
}
type Filter = { conditions: Condition[] }
type FilterResponse = { createdAt: bigint; filter: Filter; id: bigint }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/app-webhooks/2026-09/:appId/settings': {
      $get:
        | {
            input: { param: { appId: unknown } }
            output: SettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: unknown } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { appId: unknown } } & { json: SettingsChangeRequestInput }
            output: SettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: unknown } } & { json: SettingsChangeRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
      $delete:
        | { input: { param: { appId: unknown } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { appId: unknown } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/app-webhooks/2026-09/:appId/subscriptions': {
      $get:
        | {
            input: { param: { appId: unknown } }
            output: SubscriptionListResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: unknown } }; output: {}; outputFormat: string; status: 200 }
      $post:
        | {
            input: { param: { appId: unknown } } & { json: SubscriptionCreateRequestInput }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { appId: unknown } } & { json: SubscriptionCreateRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/app-webhooks/2026-09/:appId/subscriptions/batch/update': {
      $post:
        | {
            input: { param: { appId: unknown } } & {
              json: BatchInputSubscriptionBatchUpdateRequestInput
            }
            output: BatchResponseSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: unknown } } & {
              json: BatchInputSubscriptionBatchUpdateRequestInput
            }
            output: BatchResponseSubscriptionResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { appId: unknown } } & {
              json: BatchInputSubscriptionBatchUpdateRequestInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/app-webhooks/2026-09/:appId/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { appId: unknown; subscriptionId: unknown } }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: unknown; subscriptionId: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
      $delete:
        | {
            input: { param: { appId: unknown; subscriptionId: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { appId: unknown; subscriptionId: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { appId: unknown; subscriptionId: unknown } } & {
              json: SubscriptionPatchRequestInput
            }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: unknown; subscriptionId: unknown } } & {
              json: SubscriptionPatchRequestInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/batch/earliest/:count': {
      $get:
        | {
            input: { param: { count: unknown } } & { query: { installPortalId?: unknown } }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: unknown } } & { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/batch/latest/:count': {
      $get:
        | {
            input: { param: { count: unknown } } & { query: { installPortalId?: unknown } }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: unknown } } & { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/batch/read': {
      $post:
        | {
            input: { query: { installPortalId?: unknown } } & { json: BatchInputStringInput }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: unknown } } & { json: BatchInputStringInput }
            output: BatchResponseJournalFetchResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { query: { installPortalId?: unknown } } & { json: BatchInputStringInput }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/batch/:offset/next/:count': {
      $get:
        | {
            input: { param: { count: unknown; offset: string } } & {
              query: { installPortalId?: unknown }
            }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: unknown; offset: string } } & {
              query: { installPortalId?: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/earliest': {
      $get:
        | {
            input: { query: { installPortalId?: unknown } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/latest': {
      $get:
        | {
            input: { query: { installPortalId?: unknown } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/offset/:offset/next': {
      $get:
        | {
            input: { param: { offset: string } } & { query: { installPortalId?: unknown } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offset: string } } & { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { offset: string } } & { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/status/:statusId': {
      $get:
        | {
            input: { param: { statusId: string } }
            output: SnapshotStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { statusId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/webhooks-journal/journal/2026-09/batch/earliest/:count': {
      $get:
        | {
            input: { param: { count: unknown } } & { query: { installPortalId?: unknown } }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: unknown } } & { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/batch/latest/:count': {
      $get:
        | {
            input: { param: { count: unknown } } & { query: { installPortalId?: unknown } }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: unknown } } & { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/batch/read': {
      $post:
        | {
            input: { query: { installPortalId?: unknown } } & { json: BatchInputStringInput }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: unknown } } & { json: BatchInputStringInput }
            output: BatchResponseJournalFetchResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { query: { installPortalId?: unknown } } & { json: BatchInputStringInput }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/batch/:offset/next/:count': {
      $get:
        | {
            input: { param: { count: unknown; offset: string } } & {
              query: { installPortalId?: unknown }
            }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: unknown; offset: string } } & {
              query: { installPortalId?: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/earliest': {
      $get:
        | {
            input: { query: { installPortalId?: unknown } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/latest': {
      $get:
        | {
            input: { query: { installPortalId?: unknown } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/offset/:offset/next': {
      $get:
        | {
            input: { param: { offset: string } } & { query: { installPortalId?: unknown } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offset: string } } & { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { offset: string } } & { query: { installPortalId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/status/:statusId': {
      $get:
        | {
            input: { param: { statusId: string } }
            output: SnapshotStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { statusId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/webhooks-journal/snapshots/2026-09/crm': {
      $post:
        | {
            input: { json: CrmObjectSnapshotBatchRequestInput }
            output: CrmObjectSnapshotBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CrmObjectSnapshotBatchRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09': {
      $get:
        | {
            input: {}
            output: CollectionResponseSubscriptionResponseNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
      $post:
        | {
            input: { json: SubscriptionUpsertRequestInput }
            output: SubscriptionResponse_1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubscriptionUpsertRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/filters': {
      $post:
        | {
            input: { json: FilterCreateRequestInput }
            output: FilterCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FilterCreateRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/filters/subscription/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: unknown } }
            output: FilterResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/filters/:filterId': {
      $get:
        | {
            input: { param: { filterId: unknown } }
            output: FilterResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { filterId: unknown } }; output: {}; outputFormat: string; status: 200 }
      $delete:
        | { input: { param: { filterId: unknown } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { filterId: unknown } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/portals/:portalId': {
      $delete:
        | { input: { param: { portalId: unknown } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { portalId: unknown } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: unknown } }
            output: SubscriptionResponse_1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
      $delete:
        | {
            input: { param: { subscriptionId: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriptionId: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  },
  '/'
>
export default routes
