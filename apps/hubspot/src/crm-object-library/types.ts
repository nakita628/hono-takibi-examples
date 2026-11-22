type PortalObjectTypeEnablementPublicResponse = {
  enablementByObjectTypeId: { [x: string]: boolean }
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
type ObjectTypeEnablementPublicResponse = { enablement: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/object-library/2026-09/enablement': {
      $get:
        | {
            input: {}
            output: PortalObjectTypeEnablementPublicResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/object-library/2026-09/enablement/:objectTypeId': {
      $get:
        | {
            input: { param: { objectTypeId: string } }
            output: ObjectTypeEnablementPublicResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
