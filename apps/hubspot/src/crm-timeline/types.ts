type TimelineEventIFrame = {
  headerLabel: string
  height: number
  linkLabel: string
  url: string
  width: number
}
type AppEventOccurrence = {
  domain?: string | undefined
  email?: string | undefined
  eventTypeName: string
  extraData?: { [x: string]: unknown } | undefined
  id: string
  objectId?: string | undefined
  objectTypeFullyQualifiedName?: string | undefined
  properties: { [x: string]: string }
  timelineIFrame?: TimelineEventIFrame | undefined
  timestamp?: string | undefined
  utk?: string | undefined
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
type BatchInputAppEventOccurrence = { inputs: AppEventOccurrence[] }
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
type BatchResponseAppEventOccurrence = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: AppEventOccurrence[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type ExternalAppEventResolutionRequest = { developerSymbol: string; projectName: string }
type DeveloperQualifiedSymbol = { developerSymbol: string; projectName: string }
type AppEventResolutionResponse = {
  developerQualifiedSymbol: DeveloperQualifiedSymbol
  fullyQualifiedName: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/integrators/timeline/2026-09/events': {
      $post:
        | {
            input: { json: AppEventOccurrence }
            output: AppEventOccurrence
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: AppEventOccurrence }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/integrators/timeline/2026-09/events/batch': {
      $post:
        | {
            input: { json: BatchInputAppEventOccurrence }
            output: BatchResponseAppEventOccurrence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchInputAppEventOccurrence }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/integrators/timeline/2026-09/types/projects': {
      $post:
        | {
            input: { json: ExternalAppEventResolutionRequest }
            output: AppEventResolutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExternalAppEventResolutionRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
