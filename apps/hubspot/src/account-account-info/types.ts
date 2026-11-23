type ApiUsage = {
  collectedAt: string
  currentUsage: number
  fetchStatus: 'CACHED' | 'FAILURE' | 'NOTFOUND' | 'SUCCESS' | 'TIMEOUT'
  name: string
  resetsAt?: string | undefined
  usageLimit: number
}
type CollectionResponseApiUsageNoPaging = { results: ApiUsage[] }
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
type PortalInformationResponseSeptember2026 = {
  accountType: 'APP_DEVELOPER' | 'DEVELOPER_TEST' | 'SANDBOX' | 'STANDARD'
  additionalCurrencies: string[]
  companyCurrency: string
  createdAt?: bigint | undefined
  dataHostingLocation: string
  portalId: number
  portalName?: string | undefined
  timeZone: string
  uiDomain: string
  utcOffset: string
  utcOffsetMilliseconds: bigint
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account-info/2026-09/api-usage/daily/private-apps': {
      $get:
        | {
            input: {}
            output: CollectionResponseApiUsageNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/account-info/2026-09/details': {
      $get:
        | {
            input: {}
            output: PortalInformationResponseSeptember2026
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  },
  '/'
>
export default routes
