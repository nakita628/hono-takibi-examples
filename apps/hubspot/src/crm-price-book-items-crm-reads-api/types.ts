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
type SimplePublicObjectId = { id: string }
type BatchReadInputSimplePublicObjectId = {
  idProperty?: string | undefined
  inputs: SimplePublicObjectId[]
  properties: string[]
  propertiesWithHistory: string[]
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
    }
  },
  '/'
>
export default routes
