type NewMessage = {
  'account-ref'?: string | undefined
  api_key: string
  api_secret?: string | undefined
  body?: string | undefined
  callback?: string | undefined
  'client-ref'?: string | undefined
  'content-id'?: string | undefined
  'entity-id'?: string | undefined
  from: string
  'message-class'?: 0 | 1 | 2 | 3 | undefined
  'protocol-id'?: number | undefined
  sig?: string | undefined
  'status-report-req'?: boolean | undefined
  text?: string | undefined
  to: string
  ttl?: number | undefined
  type?: 'text' | 'binary' | 'unicode' | undefined
  udh?: string | undefined
}
type Message = {
  'account-ref'?: string | undefined
  'client-ref'?: string | undefined
  'message-id'?: string | undefined
  'message-price'?: string | undefined
  network?: string | undefined
  'remaining-balance'?: string | undefined
  status?: string | undefined
  to?: string | undefined
}
type SMS = { 'message-count'?: string | undefined; messages?: Message[] | undefined }
type ErrorMessage = { 'error-text'?: string | undefined; status?: string | undefined }
type Error = { 'message-count'?: string | undefined; messages?: ErrorMessage[] | undefined }
type SMSXml = { messages?: Message[] | undefined }
type ErrorXml = { messages?: ErrorMessage[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format': {
      $post:
        | {
            input: { param: { format: 'json' | 'xml' } } & { json: NewMessage } & {
              form: NewMessage
            }
            output: SMS | Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & { json: NewMessage } & {
              form: NewMessage
            }
            output: SMSXml | ErrorXml
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
