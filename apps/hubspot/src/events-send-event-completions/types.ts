type BehavioralEventHttpCompletionRequest = {
  email?: string | undefined
  eventName: string
  objectId?: string | undefined
  occurredAt?: string | undefined
  properties: { [x: string]: string }
  utk?: string | undefined
  uuid?: string | undefined
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
type BatchedBehavioralEventHttpCompletionRequest = {
  inputs: BehavioralEventHttpCompletionRequest[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/events/2026-09/send': {
      $post: {
        input: { json: BehavioralEventHttpCompletionRequest }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/events/2026-09/send/batch': {
      $post: {
        input: { json: BatchedBehavioralEventHttpCompletionRequest }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
