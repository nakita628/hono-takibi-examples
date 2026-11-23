type PublicBusinessUnitLogoMetadata = {
  logoAltText?: string | undefined
  logoUrl?: string | undefined
  resizedUrl?: string | undefined
}
type PublicBusinessUnit = {
  id: string
  logoMetadata?: PublicBusinessUnitLogoMetadata | undefined
  name: string
}
type CollectionResponsePublicBusinessUnitNoPaging = { results: PublicBusinessUnit[] }
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
    '/business-units/public/2026-09/business-units/user/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: { name?: string[] | undefined; properties?: string[] | undefined }
            }
            output: CollectionResponsePublicBusinessUnitNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { name?: string[] | undefined; properties?: string[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
