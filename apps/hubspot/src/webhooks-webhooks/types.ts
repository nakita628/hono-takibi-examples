type ThrottlingSettings = { maxConcurrentRequests: number }
type SettingsResponse = {
  createdAt: string
  targetUrl: string
  throttling: ThrottlingSettings
  updatedAt?: string | undefined
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
type SettingsChangeRequest = { targetUrl: string; throttling: ThrottlingSettings }
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
type SubscriptionCreateRequest = {
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
  eventTypeName?: string | undefined
  objectTypeId?: string | undefined
  propertyName?: string | undefined
}
type SubscriptionBatchUpdateRequest = { active: boolean; id: number }
type BatchInputSubscriptionBatchUpdateRequest = { inputs: SubscriptionBatchUpdateRequest[] }
type BatchResponseSubscriptionResponse = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: SubscriptionResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
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
type BatchResponseSubscriptionResponseWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: SubscriptionResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type SubscriptionPatchRequest = { active?: boolean | undefined }
type JournalFetchResponse = { currentOffset: string; expiresAt: string; url: string }
type BatchResponseJournalFetchResponse = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: JournalFetchResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchInputString = { inputs: string[] }
type BatchResponseJournalFetchResponseWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
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
type CrmObjectSnapshotRequest = {
  objectId: bigint
  objectTypeId: string
  portalId: bigint
  properties: string[]
}
type CrmObjectSnapshotBatchRequest = { snapshotRequests: CrmObjectSnapshotRequest[] }
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
  actionOverrides?: { [x: string]: ActionOverrideRequest } | undefined
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
type ObjectSubscriptionUpsertRequest = {
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
type AssociationSubscriptionUpsertRequest = {
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
type AppLifecycleEventSubscriptionUpsertRequest = {
  eventTypeId: string
  properties: string[]
  subscriptionType: 'APP_LIFECYCLE_EVENT'
}
type ListMembershipSubscriptionUpsertRequest = {
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
type GdprPrivacyDeletionSubscriptionUpsertRequest = {
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
type SubscriptionUpsertRequest =
  | ObjectSubscriptionUpsertRequest
  | AssociationSubscriptionUpsertRequest
  | AppLifecycleEventSubscriptionUpsertRequest
  | ListMembershipSubscriptionUpsertRequest
  | GdprPrivacyDeletionSubscriptionUpsertRequest
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
type FilterCreateRequest = { filter: Filter; subscriptionId: bigint }
type FilterCreateResponse = { filterId: bigint }
type FilterResponse = { createdAt: bigint; filter: Filter; id: bigint }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/app-webhooks/2026-09/:appId/settings': {
      $get:
        | {
            input: { param: { appId: number } }
            output: SettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: { param: { appId: number } } & { json: SettingsChangeRequest }
            output: SettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: SettingsChangeRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { appId: number } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/app-webhooks/2026-09/:appId/subscriptions': {
      $get:
        | {
            input: { param: { appId: number } }
            output: SubscriptionListResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { appId: number } } & { json: SubscriptionCreateRequest }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { appId: number } } & { json: SubscriptionCreateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/app-webhooks/2026-09/:appId/subscriptions/batch/update': {
      $post:
        | {
            input: { param: { appId: number } } & { json: BatchInputSubscriptionBatchUpdateRequest }
            output: BatchResponseSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: BatchInputSubscriptionBatchUpdateRequest }
            output: BatchResponseSubscriptionResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { appId: number } } & { json: BatchInputSubscriptionBatchUpdateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/app-webhooks/2026-09/:appId/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { appId: number; subscriptionId: number } }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; subscriptionId: number } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { appId: number; subscriptionId: number } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { appId: number; subscriptionId: number } } & {
              json: SubscriptionPatchRequest
            }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; subscriptionId: number } } & {
              json: SubscriptionPatchRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/batch/earliest/:count': {
      $get:
        | {
            input: { param: { count: number } } & {
              query: { installPortalId?: number | undefined }
            }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: number } } & {
              query: { installPortalId?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/batch/latest/:count': {
      $get:
        | {
            input: { param: { count: number } } & {
              query: { installPortalId?: number | undefined }
            }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: number } } & {
              query: { installPortalId?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/batch/read': {
      $post:
        | {
            input: { query: { installPortalId?: number | undefined } } & { json: BatchInputString }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: number | undefined } } & { json: BatchInputString }
            output: BatchResponseJournalFetchResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { query: { installPortalId?: number | undefined } } & { json: BatchInputString }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/batch/:offset/next/:count': {
      $get:
        | {
            input: { param: { count: number; offset: string } } & {
              query: { installPortalId?: number | undefined }
            }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: number; offset: string } } & {
              query: { installPortalId?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/earliest': {
      $get:
        | {
            input: { query: { installPortalId?: number | undefined } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/latest': {
      $get:
        | {
            input: { query: { installPortalId?: number | undefined } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal-local/2026-09/offset/:offset/next': {
      $get:
        | {
            input: { param: { offset: string } } & {
              query: { installPortalId?: number | undefined }
            }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offset: string } } & {
              query: { installPortalId?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
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
        | {
            input: { param: { statusId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/batch/earliest/:count': {
      $get:
        | {
            input: { param: { count: number } } & {
              query: { installPortalId?: number | undefined }
            }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: number } } & {
              query: { installPortalId?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/batch/latest/:count': {
      $get:
        | {
            input: { param: { count: number } } & {
              query: { installPortalId?: number | undefined }
            }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: number } } & {
              query: { installPortalId?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/batch/read': {
      $post:
        | {
            input: { query: { installPortalId?: number | undefined } } & { json: BatchInputString }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: number | undefined } } & { json: BatchInputString }
            output: BatchResponseJournalFetchResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { query: { installPortalId?: number | undefined } } & { json: BatchInputString }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/batch/:offset/next/:count': {
      $get:
        | {
            input: { param: { count: number; offset: string } } & {
              query: { installPortalId?: number | undefined }
            }
            output: BatchResponseJournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { count: number; offset: string } } & {
              query: { installPortalId?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/earliest': {
      $get:
        | {
            input: { query: { installPortalId?: number | undefined } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/latest': {
      $get:
        | {
            input: { query: { installPortalId?: number | undefined } }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { installPortalId?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/journal/2026-09/offset/:offset/next': {
      $get:
        | {
            input: { param: { offset: string } } & {
              query: { installPortalId?: number | undefined }
            }
            output: JournalFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offset: string } } & {
              query: { installPortalId?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
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
        | {
            input: { param: { statusId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/snapshots/2026-09/crm': {
      $post:
        | {
            input: { json: CrmObjectSnapshotBatchRequest }
            output: CrmObjectSnapshotBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CrmObjectSnapshotBatchRequest }
            output: Error
            outputFormat: 'text'
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
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: SubscriptionUpsertRequest }
            output: SubscriptionResponse_1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubscriptionUpsertRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/filters': {
      $post:
        | {
            input: { json: FilterCreateRequest }
            output: FilterCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: FilterCreateRequest }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/filters/subscription/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: bigint } }
            output: FilterResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/filters/:filterId': {
      $get:
        | {
            input: { param: { filterId: bigint } }
            output: FilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { filterId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { filterId: bigint } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/portals/:portalId': {
      $delete: {
        input: { param: { portalId: bigint } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/webhooks-journal/subscriptions/2026-09/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: bigint } }
            output: SubscriptionResponse_1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { subscriptionId: bigint } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
