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
type SimplePublicObjectWithAssociations = {
  archived: boolean
  archivedAt?: string | undefined
  associations?: { [x: string]: CollectionResponseAssociatedId } | undefined
  createdAt: string
  id: string
  objectWriteTraceId?: string | undefined
  properties: { [x: string]: string | null }
  propertiesWithHistory?: { [x: string]: ValueWithTimestamp[] } | undefined
  updatedAt: string
  url?: string | undefined
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
  properties: { [x: string]: string | null }
  propertiesWithHistory?: { [x: string]: ValueWithTimestamp[] } | undefined
  updatedAt: string
  url?: string | undefined
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
type BatchResponseSimplePublicObject = {
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
}
type BatchResponseSimplePublicUpsertObject = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: SimplePublicUpsertObject[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
      $post:
        | {
            input: { param: { objectType: string } } & { json: BatchInputSimplePublicObjectId }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
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
      $delete:
        | {
            input: { param: { objectId: string; objectType: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
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
  },
  '/'
>
export default routes
