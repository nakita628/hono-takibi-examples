type ExternalSettings = {
  createMeetingUrl: string
  deleteMeetingUrl?: string | undefined
  fetchAccountsUri?: string | undefined
  updateMeetingUrl?: string | undefined
  userVerifyUrl?: string | undefined
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/extensions/videoconferencing/2026-09/settings/:appId': {
      $get:
        | {
            input: { param: { appId: number } }
            output: ExternalSettings
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: { param: { appId: number } } & { json: ExternalSettings }
            output: ExternalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: ExternalSettings }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { appId: number } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
