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
type CollectionResponseWithTotalSimplePublicObject = {
  paging?: Paging | undefined
  results: SimplePublicObject[]
  total: number
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
    }
  },
  '/'
>
export default routes
