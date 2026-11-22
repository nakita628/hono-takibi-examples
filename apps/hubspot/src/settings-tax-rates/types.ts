type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type PublicTaxRateGroup = {
  active: boolean
  createdAt: string
  id: string
  label: string
  name: string
  percentageRate: number
  updatedAt: string
}
type CollectionResponsePublicTaxRateGroupForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicTaxRateGroup[]
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
    '/tax-rates/2026-09/tax-rates': {
      $get:
        | {
            input: {
              query: {
                active?: boolean | undefined
                after?: string | undefined
                limit?: number | undefined
              }
            }
            output: CollectionResponsePublicTaxRateGroupForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                active?: boolean | undefined
                after?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tax-rates/2026-09/tax-rates/:taxRateGroupId': {
      $get:
        | {
            input: { param: { taxRateGroupId: string } }
            output: PublicTaxRateGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxRateGroupId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
