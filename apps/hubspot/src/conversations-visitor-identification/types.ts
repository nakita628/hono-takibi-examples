type IdentificationTokenGenerationRequest = {
  email: string
  firstName?: string | undefined
  hsCustomerAgentContext: { [x: string]: string }
  lastName?: string | undefined
}
type IdentificationTokenResponse = { token: string }
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/visitor-identification/2026-09/tokens/create': {
      $post:
        | {
            input: { json: IdentificationTokenGenerationRequest }
            output: IdentificationTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentificationTokenGenerationRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
