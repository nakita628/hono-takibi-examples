type PublicAssociationDefinitionUserConfiguration = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  label?: string | undefined
  typeId: number
  userEnforcedMaxToObjectIds?: number | undefined
}
type CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging = {
  results: PublicAssociationDefinitionUserConfiguration[]
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
type PublicAssociationDefinitionConfigurationCreateRequest = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  maxToObjectIds: number
  typeId: number
}
type BatchInputPublicAssociationDefinitionConfigurationCreateRequest = {
  inputs: PublicAssociationDefinitionConfigurationCreateRequest[]
}
type BatchResponsePublicAssociationDefinitionUserConfiguration = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicAssociationDefinitionUserConfiguration[]
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
type BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicAssociationDefinitionUserConfiguration[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicAssociationSpec = { category: string; typeId: number }
type BatchInputPublicAssociationSpec = { inputs: PublicAssociationSpec[] }
type BatchResponse = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: { [x: string]: unknown }[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicAssociationDefinitionConfigurationUpdateRequest = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  maxToObjectIds: number
  typeId: number
}
type BatchInputPublicAssociationDefinitionConfigurationUpdateRequest = {
  inputs: PublicAssociationDefinitionConfigurationUpdateRequest[]
}
type PublicAssociationDefinitionConfigurationUpdateResult = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  typeId: number
  userEnforcedMaxToObjectIds?: number | undefined
}
type BatchResponsePublicAssociationDefinitionConfigurationUpdateResult = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicAssociationDefinitionConfigurationUpdateResult[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicAssociationDefinitionConfigurationUpdateResult[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type DateTime = { dateOnly: boolean; timeZoneShift: number; value: bigint }
type ReportCreationResponse = { enqueueTime: DateTime; userEmail: string; userId: number }
type PublicObjectId = { id: string }
type PublicAssociationMultiArchive = { from: PublicObjectId; to: PublicObjectId[] }
type BatchInputPublicAssociationMultiArchive = { inputs: PublicAssociationMultiArchive[] }
type PublicDefaultAssociationMultiPost = { from: PublicObjectId; to: PublicObjectId }
type BatchInputPublicDefaultAssociationMultiPost = { inputs: PublicDefaultAssociationMultiPost[] }
type AssociationSpec = {
  associationCategory: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  associationTypeId: number
}
type PublicDefaultAssociation_1 = {
  associationSpec: AssociationSpec
  from: PublicObjectId
  to: PublicObjectId
}
type BatchResponsePublicDefaultAssociation = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicDefaultAssociation_1[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicAssociationMultiPost = {
  from: PublicObjectId
  to: PublicObjectId
  types: AssociationSpec[]
}
type BatchInputPublicAssociationMultiPost = { inputs: PublicAssociationMultiPost[] }
type LabelsBetweenObjectPair = {
  fromObjectId: string
  fromObjectTypeId: string
  labels: string[]
  toObjectId: string
  toObjectTypeId: string
}
type BatchResponseLabelsBetweenObjectPair = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: LabelsBetweenObjectPair[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponseLabelsBetweenObjectPairWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: LabelsBetweenObjectPair[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicFetchAssociationsBatchRequest = { after?: string | undefined; id: string }
type BatchInputPublicFetchAssociationsBatchRequest = {
  inputs: PublicFetchAssociationsBatchRequest[]
}
type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging_1 = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type AssociationSpecWithLabel = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  fromObjectTypeId?: string | undefined
  label?: string | undefined
  toObjectTypeId?: string | undefined
  typeId: number
}
type MultiAssociatedObjectWithLabel = {
  associationTypes: AssociationSpecWithLabel[]
  toObjectId: string
}
type PublicAssociationMultiWithLabel = {
  from: PublicObjectId
  paging?: Paging_1 | undefined
  to: MultiAssociatedObjectWithLabel[]
}
type BatchResponsePublicAssociationMultiWithLabel = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicAssociationMultiWithLabel[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponsePublicAssociationMultiWithLabelWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicAssociationMultiWithLabel[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type CollectionResponseAssociationSpecWithLabelNoPaging = { results: AssociationSpecWithLabel[] }
type PublicAssociationDefinitionUpdateRequest = {
  associationTypeId: number
  inverseLabel?: string | undefined
  label: string
}
type PublicAssociationDefinitionCreateRequest = {
  inverseLabel?: string | undefined
  label: string
  name: string
}
type ForwardPaging = { next?: NextPage | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type AssociatedId = { id: string; type: string }
type CollectionResponseAssociatedId = { paging?: Paging | undefined; results: AssociatedId[] }
type ValueWithTimestamp = {
  sourceId?: string | undefined
  sourceLabel?: string | undefined
  sourceType: string
  timestamp: string
  updatedByUserId?: number | undefined
  value: string
}
type PublicObjectWarning = { category: string; context: { [x: string]: string }; message: string }
type SimplePublicObjectWithAssociations = {
  archived: boolean
  archivedAt?: string | undefined
  associations?: { [x: string]: CollectionResponseAssociatedId } | undefined
  createdAt: string
  id: string
  objectWriteTraceId?: string | undefined
  properties: { [x: string]: string }
  propertiesWithHistory?: { [x: string]: ValueWithTimestamp[] } | undefined
  updatedAt: string
  url?: string | undefined
  warnings?: PublicObjectWarning[] | undefined
}
type CollectionResponseSimplePublicObjectWithAssociationsForwardPaging = {
  paging?: ForwardPaging | undefined
  results: SimplePublicObjectWithAssociations[]
}
type PublicAssociationsForObject = { to: PublicObjectId; types: AssociationSpec[] }
type SimplePublicObjectInputForCreate = {
  associations: PublicAssociationsForObject[]
  properties: { [x: string]: string }
}
type SimplePublicObject = {
  archived: boolean
  archivedAt?: string | undefined
  createdAt: string
  id: string
  objectWriteTraceId?: string | undefined
  properties: { [x: string]: string }
  propertiesWithHistory?: { [x: string]: ValueWithTimestamp[] } | undefined
  updatedAt: string
  url?: string | undefined
  warnings?: PublicObjectWarning[] | undefined
}
type SimplePublicObjectId = { id: string }
type BatchInputSimplePublicObjectId = { inputs: SimplePublicObjectId[] }
type SimplePublicObjectBatchInputForCreate = {
  associations: PublicAssociationsForObject[]
  objectWriteTraceId?: string | undefined
  properties: { [x: string]: string }
}
type BatchInputSimplePublicObjectBatchInputForCreate = {
  inputs: SimplePublicObjectBatchInputForCreate[]
}
type BatchResponseSimplePublicObject = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: SimplePublicObject[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponseSimplePublicObjectWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: SimplePublicObject[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchReadInputSimplePublicObjectId = {
  idProperty?: string | undefined
  inputs: SimplePublicObjectId[]
  properties: string[]
  propertiesWithHistory: string[]
}
type SimplePublicObjectBatchInput = {
  id: string
  idProperty?: string | undefined
  objectWriteTraceId?: string | undefined
  properties: { [x: string]: string }
}
type BatchInputSimplePublicObjectBatchInput = { inputs: SimplePublicObjectBatchInput[] }
type SimplePublicObjectBatchInputUpsert = {
  id: string
  idProperty?: string | undefined
  objectWriteTraceId?: string | undefined
  properties: { [x: string]: string }
}
type BatchInputSimplePublicObjectBatchInputUpsert = { inputs: SimplePublicObjectBatchInputUpsert[] }
type SimplePublicUpsertObject = {
  archived: boolean
  archivedAt?: string | undefined
  createdAt: string
  id: string
  new: boolean
  objectWriteTraceId?: string | undefined
  properties: { [x: string]: string }
  propertiesWithHistory?: { [x: string]: ValueWithTimestamp[] } | undefined
  updatedAt: string
  url?: string | undefined
  warnings?: PublicObjectWarning[] | undefined
}
type BatchResponseSimplePublicUpsertObject = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: SimplePublicUpsertObject[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponseSimplePublicUpsertObjectWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: SimplePublicUpsertObject[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicGdprDeleteInput = { idProperty?: string | undefined; objectId: string }
type PublicMergeInput = { objectIdToMerge: string; primaryObjectId: string }
type Filter = {
  highValue?: string | undefined
  operator:
    | 'BETWEEN'
    | 'CONTAINS_TOKEN'
    | 'EQ'
    | 'GT'
    | 'GTE'
    | 'HAS_PROPERTY'
    | 'IN'
    | 'LT'
    | 'LTE'
    | 'NEQ'
    | 'NOT_CONTAINS_TOKEN'
    | 'NOT_HAS_PROPERTY'
    | 'NOT_IN'
  propertyName: string
  value?: string | undefined
  values?: string[] | undefined
}
type FilterGroup = { filters: Filter[] }
type PublicObjectSearchRequest = {
  after: string
  filterGroups: FilterGroup[]
  limit: number
  properties: string[]
  query?: string | undefined
  sorts: string[]
}
type CollectionResponseWithTotalSimplePublicObject = {
  paging?: Paging | undefined
  results: SimplePublicObject[]
  total: number
}
type SimplePublicObjectInput = { properties: { [x: string]: string } }
type CollectionResponseMultiAssociatedObjectWithLabelForwardPaging = {
  paging?: ForwardPaging | undefined
  results: MultiAssociatedObjectWithLabel[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/associations/2026-09/definitions/configurations/all': {
      $get:
        | {
            input: {}
            output: CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType': {
      $get:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } }
            output: CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/create': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationCreateRequest
            }
            output: BatchResponsePublicAssociationDefinitionUserConfiguration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationCreateRequest
            }
            output: BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationCreateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/purge': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationSpec
            }
            output: BatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationSpec
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/update': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
            }
            output: BatchResponsePublicAssociationDefinitionConfigurationUpdateResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
            }
            output: BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/usage/high-usage-report/:userId': {
      $post:
        | {
            input: { param: { userId: number } }
            output: ReportCreationResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: number } }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/archive': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationMultiArchive
            }
            output: BatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationMultiArchive
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/associate/default': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicDefaultAssociationMultiPost
            }
            output: BatchResponsePublicDefaultAssociation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicDefaultAssociationMultiPost
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/create': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationMultiPost
            }
            output: BatchResponseLabelsBetweenObjectPair
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationMultiPost
            }
            output: BatchResponseLabelsBetweenObjectPairWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationMultiPost
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/labels/archive': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationMultiPost
            }
            output: BatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationMultiPost
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/read': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicFetchAssociationsBatchRequest
            }
            output: BatchResponsePublicAssociationMultiWithLabel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicFetchAssociationsBatchRequest
            }
            output: BatchResponsePublicAssociationMultiWithLabelWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicFetchAssociationsBatchRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels': {
      $get:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } }
            output: CollectionResponseAssociationSpecWithLabelNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { fromObjectType: string; toObjectType: string } } & {
          json: PublicAssociationDefinitionUpdateRequest
        }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: PublicAssociationDefinitionCreateRequest
            }
            output: CollectionResponseAssociationSpecWithLabelNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: PublicAssociationDefinitionCreateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels/:associationTypeId': {
      $delete: {
        input: {
          param: { associationTypeId: number; fromObjectType: string; toObjectType: string }
        }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/objects/2026-09/:fromObjectType/:fromObjectId/associations/default/:toObjectType/:toObjectId': {
      $put:
        | {
            input: {
              param: {
                fromObjectId: string
                fromObjectType: string
                toObjectId: string
                toObjectType: string
              }
            }
            output: BatchResponsePublicDefaultAssociation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                fromObjectId: string
                fromObjectType: string
                toObjectId: string
                toObjectType: string
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType': {
      $get:
        | {
            input: { param: { objectType: string } } & {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                associations?: string[] | undefined
                limit?: number | undefined
                properties?: string[] | undefined
                propertiesWithHistory?: string[] | undefined
              }
            }
            output: CollectionResponseSimplePublicObjectWithAssociationsForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                associations?: string[] | undefined
                limit?: number | undefined
                properties?: string[] | undefined
                propertiesWithHistory?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { objectType: string } } & { json: SimplePublicObjectInputForCreate }
            output: SimplePublicObject
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { objectType: string } } & { json: SimplePublicObjectInputForCreate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType/batch/archive': {
      $post: {
        input: { param: { objectType: string } } & { json: BatchInputSimplePublicObjectId }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/objects/2026-09/:objectType/batch/create': {
      $post:
        | {
            input: { param: { objectType: string } } & {
              json: BatchInputSimplePublicObjectBatchInputForCreate
            }
            output: BatchResponseSimplePublicObject
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { objectType: string } } & {
              json: BatchInputSimplePublicObjectBatchInputForCreate
            }
            output: BatchResponseSimplePublicObjectWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { objectType: string } } & {
              json: BatchInputSimplePublicObjectBatchInputForCreate
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType/batch/read': {
      $post:
        | {
            input: { param: { objectType: string } } & {
              query: { archived?: boolean | undefined }
            } & { json: BatchReadInputSimplePublicObjectId }
            output: BatchResponseSimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & {
              query: { archived?: boolean | undefined }
            } & { json: BatchReadInputSimplePublicObjectId }
            output: BatchResponseSimplePublicObjectWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { objectType: string } } & {
              query: { archived?: boolean | undefined }
            } & { json: BatchReadInputSimplePublicObjectId }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType/batch/update': {
      $post:
        | {
            input: { param: { objectType: string } } & {
              json: BatchInputSimplePublicObjectBatchInput
            }
            output: BatchResponseSimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & {
              json: BatchInputSimplePublicObjectBatchInput
            }
            output: BatchResponseSimplePublicObjectWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { objectType: string } } & {
              json: BatchInputSimplePublicObjectBatchInput
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType/batch/upsert': {
      $post:
        | {
            input: { param: { objectType: string } } & {
              json: BatchInputSimplePublicObjectBatchInputUpsert
            }
            output: BatchResponseSimplePublicUpsertObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & {
              json: BatchInputSimplePublicObjectBatchInputUpsert
            }
            output: BatchResponseSimplePublicUpsertObjectWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { objectType: string } } & {
              json: BatchInputSimplePublicObjectBatchInputUpsert
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType/gdpr-delete': {
      $post: {
        input: { param: { objectType: string } } & { json: PublicGdprDeleteInput }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/objects/2026-09/:objectType/merge': {
      $post:
        | {
            input: { param: { objectType: string } } & { json: PublicMergeInput }
            output: SimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & { json: PublicMergeInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType/search': {
      $post:
        | {
            input: { param: { objectType: string } } & { json: PublicObjectSearchRequest }
            output: CollectionResponseWithTotalSimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & { json: PublicObjectSearchRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType/:objectId': {
      $get:
        | {
            input: { param: { objectId: string; objectType: string } } & {
              query: {
                archived?: boolean | undefined
                associations?: string[] | undefined
                idProperty?: string | undefined
                properties?: string[] | undefined
                propertiesWithHistory?: string[] | undefined
              }
            }
            output: SimplePublicObjectWithAssociations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; objectType: string } } & {
              query: {
                archived?: boolean | undefined
                associations?: string[] | undefined
                idProperty?: string | undefined
                properties?: string[] | undefined
                propertiesWithHistory?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { objectId: string; objectType: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { objectId: string; objectType: string } } & {
              query: { idProperty?: string | undefined }
            } & { json: SimplePublicObjectInput }
            output: SimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; objectType: string } } & {
              query: { idProperty?: string | undefined }
            } & { json: SimplePublicObjectInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType': {
      $get:
        | {
            input: { param: { objectId: string; objectType: string; toObjectType: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: CollectionResponseMultiAssociatedObjectWithLabelForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; objectType: string; toObjectType: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId': {
      $put:
        | {
            input: {
              param: {
                objectId: string
                objectType: string
                toObjectId: string
                toObjectType: string
              }
            } & { json: AssociationSpec[] }
            output: LabelsBetweenObjectPair
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                objectId: string
                objectType: string
                toObjectId: string
                toObjectType: string
              }
            } & { json: AssociationSpec[] }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: {
          param: { objectId: string; objectType: string; toObjectId: string; toObjectType: string }
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
