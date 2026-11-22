type SortDirection = 'asc' | 'desc'
type CollectionsSort = {
  by?: 'name' | 'created_at' | 'updated_at' | undefined
  direction?: SortDirection | undefined
}
type CreatedAt = string
type Id = string
type UpdatedAt = string | null
type Collection = {
  created_at?: CreatedAt | undefined
  description?: string | undefined
  id: Id
  name?: string | undefined
  parent_id?: string | undefined
  type?: string | undefined
  updated_at?: UpdatedAt | undefined
}
type Links = {
  current?: string | undefined
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type Meta = {
  cursors?:
    | {
        current?: (string | null) | undefined
        next?: (string | null) | undefined
        previous?: (string | null) | undefined
      }
    | undefined
  items_on_page?: number | undefined
}
type GetCollectionsResponse = {
  data: Collection[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type BadRequestResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnauthorizedResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type PaymentRequiredResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type NotFoundResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnprocessableResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnexpectedErrorResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type GetCollectionResponse = {
  data: Collection
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CollectionTag = { id: string; name?: string | undefined }
type GetCollectionTagsResponse = {
  data: CollectionTag[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type TicketsSort = {
  by?: 'created_at' | 'updated_at' | undefined
  direction?: SortDirection | undefined
}
type IssuesFilter = {
  assignee_id?: string | undefined
  since?: string | undefined
  status?: string[] | undefined
}
type Assignee = { id: string; username?: string | undefined }
type CreatedBy = string | null
type Ticket = {
  assignees?: Assignee[] | undefined
  collection_id?: string | undefined
  completed_at?: (string | null) | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  description?: string | undefined
  due_date?: (string | null) | undefined
  id: Id
  parent_id?: string | undefined
  priority?: 'low' | 'normal' | 'high' | 'urgent' | undefined
  status?: (string | null) | undefined
  subject?: string | undefined
  tags?: CollectionTag[] | undefined
  type?: string | undefined
  updated_at?: UpdatedAt | undefined
}
type GetTicketsResponse = {
  data: Ticket[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UnifiedId = { id: string }
type CreateTicketResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteTicketResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetTicketResponse = {
  data: Ticket
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateTicketResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CommentsSort = {
  by?: 'created_at' | 'updated_at' | undefined
  direction?: SortDirection | undefined
}
type CollectionTicketComment = {
  body?: string | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  id?: Id | undefined
  updated_at?: UpdatedAt | undefined
}
type GetCommentsResponse = {
  data: CollectionTicketComment[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CreateCommentResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteCommentResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetCommentResponse = {
  data: CollectionTicketComment
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateCommentResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type PhotoUrl = string | null
type CollectionUser = {
  created_at?: CreatedAt | undefined
  email?: (string | null) | undefined
  first_name?: (string | null) | undefined
  id?: Id | undefined
  last_name?: (string | null) | undefined
  name?: string | undefined
  photo_url?: PhotoUrl | undefined
  updated_at?: UpdatedAt | undefined
}
type GetCollectionUsersResponse = {
  data: CollectionUser[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetCollectionUserResponse = {
  data: CollectionUser
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/issue-tracking/collections': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CollectionsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCollectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CollectionsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CollectionsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CollectionsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CollectionsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CollectionsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CollectionsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issue-tracking/collections/:collection_id': {
      $get:
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issue-tracking/collections/:collection_id/tags': {
      $get:
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCollectionTagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issue-tracking/collections/:collection_id/tickets': {
      $get:
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: TicketsSort | undefined
                filter?: IssuesFilter | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetTicketsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: TicketsSort | undefined
                filter?: IssuesFilter | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: TicketsSort | undefined
                filter?: IssuesFilter | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: TicketsSort | undefined
                filter?: IssuesFilter | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: TicketsSort | undefined
                filter?: IssuesFilter | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: TicketsSort | undefined
                filter?: IssuesFilter | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: TicketsSort | undefined
                filter?: IssuesFilter | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: CreateTicketResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id': {
      $delete:
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteTicketResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetTicketResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: UpdateTicketResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { ticket_id: string; collection_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Ticket }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments': {
      $get:
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CommentsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCommentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CommentsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CommentsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CommentsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CommentsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CommentsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: CommentsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: CreateCommentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments/:id': {
      $delete:
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteCommentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCommentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: UpdateCommentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; collection_id: string; ticket_id: string } } & {
              query: { raw?: boolean | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CollectionTicketComment }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issue-tracking/collections/:collection_id/users': {
      $get:
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCollectionUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issue-tracking/collections/:collection_id/users/:id': {
      $get:
        | {
            input: { param: { collection_id: string; id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCollectionUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string; id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_id: string; id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: string; id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { collection_id: string; id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection_id: string; id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { collection_id: string; id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
