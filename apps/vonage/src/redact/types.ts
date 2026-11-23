type RedactTransaction = {
  id: string
  product: 'sms' | 'voice' | 'number-insight' | 'verify' | 'verify-sdk' | 'messages'
  type: 'inbound' | 'outbound'
}
type ErrorUnauthorized = { error_title: string; type: string }
type ErrorPrematureRedaction = { detail: string; instance: string; title: string; type: string }
type ErrorUnprovisioned = { detail: string; instance: string; title: string; type: string }
type ErrorInvalidId = { detail: string; instance: string; title: string; type: string }
type ErrorInvalidJson = { detail: string; instance: string; title: string; type: string }
type ErrorUnsupportedProduct = { detail: string; instance: string; title: string; type: string }
type ErrorThrottled = { detail: string; instance: string; title: string; type: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/transaction': {
      $post:
        | { input: { json: RedactTransaction }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: RedactTransaction }
            output: ErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RedactTransaction }
            output: ErrorPrematureRedaction | ErrorUnprovisioned
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RedactTransaction }
            output: ErrorInvalidId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RedactTransaction }
            output: ErrorInvalidJson | ErrorUnsupportedProduct
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RedactTransaction }
            output: ErrorThrottled
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
