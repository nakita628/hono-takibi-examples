type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
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
type PublicSubscriptionTranslation = {
  createdAt: bigint
  description: string
  languageCode: string
  name: string
  subscriptionId: bigint
  updatedAt: bigint
}
type SubscriptionDefinition = {
  businessUnitId?: bigint | undefined
  communicationMethod?: string | undefined
  createdAt: string
  description: string
  id: string
  isActive: boolean
  isDefault: boolean
  isInternal: boolean
  name: string
  purpose?: string | undefined
  subscriptionTranslations?: PublicSubscriptionTranslation[] | undefined
  updatedAt: string
}
type ActionResponseWithResultsSubscriptionDefinition = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: SubscriptionDefinition[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
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
type LinkGenerationRequest = {
  language?: string | undefined
  subscriberIdString: string
  subscriptionId?: bigint | undefined
}
type LinkGenerationResponse = {
  managePreferencesUrl: string
  subscriberIdString: string
  unsubscribeAllUrl: string
  unsubscribeSingleUrl?: string | undefined
}
type BatchInputString = { inputs: string[] }
type PublicStatus = {
  businessUnitId?: bigint | undefined
  channel: 'EMAIL'
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE'
    | undefined
  legalBasisExplanation?: string | undefined
  setStatusSuccessReason?:
    | 'NO_STATUS_CHANGE'
    | 'REQUESTED_CHANGE_OCCURRED'
    | 'RESUBSCRIBE_OCCURRED'
    | 'UNSUBSCRIBE_FROM_ALL_OCCURRED'
    | undefined
  source: string
  status: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED'
  subscriberIdString: string
  subscriptionId: bigint
  subscriptionName?: string | undefined
  timestamp: string
}
type PublicStatusBulkResponse = { statuses: PublicStatus[]; subscriberIdString: string }
type BatchResponsePublicStatusBulkResponse = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicStatusBulkResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponsePublicStatusBulkResponseWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicStatusBulkResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicBulkOptOutFromAllResponse = {
  statuses?: PublicStatus[] | undefined
  subscriberIdString: string
}
type BatchResponsePublicBulkOptOutFromAllResponse = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicBulkOptOutFromAllResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicWideStatus = {
  businessUnitId?: bigint | undefined
  channel: 'EMAIL'
  status: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED'
  subscriberIdString: string
  timestamp: string
  wideStatusType: 'BUSINESS_UNIT_WIDE' | 'PORTAL_WIDE'
}
type PublicWideStatusBulkResponse = { subscriberIdString: string; wideStatuses: PublicWideStatus[] }
type BatchResponsePublicWideStatusBulkResponse = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicWideStatusBulkResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponsePublicWideStatusBulkResponseWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicWideStatusBulkResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicStatusRequest = {
  channel: 'EMAIL'
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE'
    | undefined
  legalBasisExplanation?: string | undefined
  statusState: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED'
  subscriberIdString: string
  subscriptionId: bigint
}
type BatchInputPublicStatusRequest = { inputs: PublicStatusRequest[] }
type BatchResponsePublicStatus = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicStatus[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type ActionResponseWithResultsPublicStatus = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicStatus[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PartialPublicStatusRequest = {
  channel: 'EMAIL'
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE'
    | undefined
  legalBasisExplanation?: string | undefined
  statusState: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED'
  subscriptionId: bigint
}
type ActionResponseWithResultsPublicWideStatus = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicWideStatus[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/communication-preferences/2026-09/definitions': {
      $get:
        | {
            input: {
              query: {
                businessUnitId?: bigint | undefined
                includeTranslations?: boolean | undefined
              }
            }
            output: ActionResponseWithResultsSubscriptionDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                businessUnitId?: bigint | undefined
                includeTranslations?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/communication-preferences/2026-09/links/generate': {
      $post:
        | {
            input: { query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined } } & {
              json: LinkGenerationRequest
            }
            output: LinkGenerationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined } } & {
              json: LinkGenerationRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/communication-preferences/2026-09/statuses/batch/read': {
      $post:
        | {
            input: { query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined } } & {
              json: BatchInputString
            }
            output: BatchResponsePublicStatusBulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined } } & {
              json: BatchInputString
            }
            output: BatchResponsePublicStatusBulkResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined } } & {
              json: BatchInputString
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/communication-preferences/2026-09/statuses/batch/unsubscribe-all': {
      $post:
        | {
            input: {
              query: {
                channel: 'EMAIL'
                businessUnitId?: bigint | undefined
                verbose?: boolean | undefined
              }
            } & { json: BatchInputString }
            output: BatchResponsePublicBulkOptOutFromAllResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channel: 'EMAIL'
                businessUnitId?: bigint | undefined
                verbose?: boolean | undefined
              }
            } & { json: BatchInputString }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read': {
      $post:
        | {
            input: { query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined } } & {
              json: BatchInputString
            }
            output: BatchResponsePublicWideStatusBulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined } } & {
              json: BatchInputString
            }
            output: BatchResponsePublicWideStatusBulkResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined } } & {
              json: BatchInputString
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/communication-preferences/2026-09/statuses/batch/write': {
      $post:
        | {
            input: { json: BatchInputPublicStatusRequest }
            output: BatchResponsePublicStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchInputPublicStatusRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/communication-preferences/2026-09/statuses/:subscriberIdString': {
      $get:
        | {
            input: { param: { subscriberIdString: string } } & {
              query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined }
            }
            output: ActionResponseWithResultsPublicStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberIdString: string } } & {
              query: { channel: 'EMAIL'; businessUnitId?: bigint | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { subscriberIdString: string } } & { json: PartialPublicStatusRequest }
            output: ActionResponseWithResultsPublicStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberIdString: string } } & { json: PartialPublicStatusRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/communication-preferences/2026-09/statuses/:subscriberIdString/unsubscribe-all': {
      $get:
        | {
            input: { param: { subscriberIdString: string } } & {
              query: {
                channel: 'EMAIL'
                businessUnitId?: bigint | undefined
                verbose?: boolean | undefined
              }
            }
            output: ActionResponseWithResultsPublicWideStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberIdString: string } } & {
              query: {
                channel: 'EMAIL'
                businessUnitId?: bigint | undefined
                verbose?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { subscriberIdString: string } } & {
              query: {
                channel: 'EMAIL'
                businessUnitId?: bigint | undefined
                verbose?: boolean | undefined
              }
            }
            output: ActionResponseWithResultsPublicStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberIdString: string } } & {
              query: {
                channel: 'EMAIL'
                businessUnitId?: bigint | undefined
                verbose?: boolean | undefined
              }
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
