type TranslateRequest = {
  from?: string | undefined
  text?: string[] | undefined
  to?: string | undefined
  translationContext?: string | undefined
}
type Translation = {
  from?: string | undefined
  originalText?: string | undefined
  to?: string | undefined
  translatedText?: string | undefined
}
type TranslateResponse = { translations?: Translation[] | undefined }
type ErrorParameter = { name?: string | undefined; value?: string | undefined }
type Error = {
  category?: string | undefined
  domain?: string | undefined
  errorId?: number | undefined
  inputRefIds?: string[] | undefined
  longMessage?: string | undefined
  message?: string | undefined
  outputRefIds?: string[] | undefined
  parameters?: ErrorParameter[] | undefined
  subdomain?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/translate': {
      $post:
        | {
            input: { json: TranslateRequest }
            output: TranslateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TranslateRequest }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TranslateRequest }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
