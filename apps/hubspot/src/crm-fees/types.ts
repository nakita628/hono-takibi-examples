type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type PreviousPage = { before: string; link?: string | undefined }
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
type PublicObjectId = { id: string }
type AssociationSpec = {
  associationCategory: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  associationTypeId: number
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
type CollectionResponseMultiAssociatedObjectWithLabelForwardPaging = {
  paging?: ForwardPaging | undefined
  results: MultiAssociatedObjectWithLabel[]
}
type PublicDefaultAssociation = {
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
  results: PublicDefaultAssociation[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type LabelsBetweenObjectPair = {
  fromObjectId: string
  fromObjectTypeId: string
  labels: string[]
  toObjectId: string
  toObjectTypeId: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/objects/2026-09/fees': {
      $get:
        | {
            input: {
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
            input: {
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
            input: { json: SimplePublicObjectInputForCreate }
            output: SimplePublicObject
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SimplePublicObjectInputForCreate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/fees/batch/archive': {
      $post:
        | {
            input: { json: BatchInputSimplePublicObjectId }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: BatchInputSimplePublicObjectId }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/fees/batch/create': {
      $post:
        | {
            input: { json: BatchInputSimplePublicObjectBatchInputForCreate }
            output: BatchResponseSimplePublicObject
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BatchInputSimplePublicObjectBatchInputForCreate }
            output: BatchResponseSimplePublicObjectWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: BatchInputSimplePublicObjectBatchInputForCreate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/fees/batch/read': {
      $post:
        | {
            input: { query: { archived?: boolean | undefined } } & {
              json: BatchReadInputSimplePublicObjectId
            }
            output: BatchResponseSimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { archived?: boolean | undefined } } & {
              json: BatchReadInputSimplePublicObjectId
            }
            output: BatchResponseSimplePublicObjectWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { query: { archived?: boolean | undefined } } & {
              json: BatchReadInputSimplePublicObjectId
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/fees/batch/update': {
      $post:
        | {
            input: { json: BatchInputSimplePublicObjectBatchInput }
            output: BatchResponseSimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchInputSimplePublicObjectBatchInput }
            output: BatchResponseSimplePublicObjectWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: BatchInputSimplePublicObjectBatchInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/fees/batch/upsert': {
      $post:
        | {
            input: { json: BatchInputSimplePublicObjectBatchInputUpsert }
            output: BatchResponseSimplePublicUpsertObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchInputSimplePublicObjectBatchInputUpsert }
            output: BatchResponseSimplePublicUpsertObjectWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: BatchInputSimplePublicObjectBatchInputUpsert }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/fees/gdpr-delete': {
      $post:
        | { input: { json: PublicGdprDeleteInput }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: PublicGdprDeleteInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/fees/merge': {
      $post:
        | {
            input: { json: PublicMergeInput }
            output: SimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PublicMergeInput }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/objects/2026-09/fees/search': {
      $post:
        | {
            input: { json: PublicObjectSearchRequest }
            output: CollectionResponseWithTotalSimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublicObjectSearchRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/fees/:feeId': {
      $get:
        | {
            input: { param: { feeId: string } } & {
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
            input: { param: { feeId: string } } & {
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
      $delete:
        | { input: { param: { feeId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { feeId: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $patch:
        | {
            input: { param: { feeId: string } } & { query: { idProperty?: string | undefined } } & {
              json: SimplePublicObjectInput
            }
            output: SimplePublicObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feeId: string } } & { query: { idProperty?: string | undefined } } & {
              json: SimplePublicObjectInput
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/objects/2026-09/fees/:feeId/associations/:toObjectType': {
      $get:
        | {
            input: { param: { feeId: string; toObjectType: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: CollectionResponseMultiAssociatedObjectWithLabelForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feeId: string; toObjectType: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
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
      $delete:
        | {
            input: {
              param: {
                objectId: string
                objectType: string
                toObjectId: string
                toObjectType: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                objectId: string
                objectType: string
                toObjectId: string
                toObjectType: string
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
