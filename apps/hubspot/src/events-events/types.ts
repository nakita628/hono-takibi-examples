type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type ExternalUnifiedEvent = {
  eventType: string
  id: string
  objectId: string
  objectType: string
  occurredAt: string
  properties: { [x: string]: string }
}
type CollectionResponseExternalUnifiedEvent = {
  paging?: Paging | undefined
  results: ExternalUnifiedEvent[]
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
type VisibleExternalEventTypeNames = { eventTypes: string[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/events/event-occurrences/2026-09': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                eventType?: string | undefined
                id?: string[] | undefined
                limit?: number | undefined
                objectId?: bigint | undefined
                'objectProperty.{propname}'?: { [x: string]: unknown } | undefined
                objectType?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                properties?: string[] | undefined
                'property.{propname}'?: { [x: string]: unknown } | undefined
                sort?: string[] | undefined
              }
            }
            output: CollectionResponseExternalUnifiedEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                eventType?: string | undefined
                id?: string[] | undefined
                limit?: number | undefined
                objectId?: bigint | undefined
                'objectProperty.{propname}'?: { [x: string]: unknown } | undefined
                objectType?: string | undefined
                occurredAfter?: string | undefined
                occurredBefore?: string | undefined
                properties?: string[] | undefined
                'property.{propname}'?: { [x: string]: unknown } | undefined
                sort?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/events/event-occurrences/2026-09/event-types': {
      $get:
        | { input: {}; output: VisibleExternalEventTypeNames; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  },
  '/'
>
export default routes
