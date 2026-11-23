type Address = {
  city?: string | undefined
  country?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
}
type GeoCoordinates = { latitude?: number | undefined; longitude?: number | undefined }
type Location = { address?: Address | undefined; geoCoordinates?: GeoCoordinates | undefined }
type Image = {
  height?: string | undefined
  imageUrl?: string | undefined
  width?: string | undefined
}
type CharityOrg = {
  charityOrgId?: string | undefined
  description?: string | undefined
  location?: Location | undefined
  logoImage?: Image | undefined
  missionStatement?: string | undefined
  name?: string | undefined
  registrationId?: string | undefined
  website?: string | undefined
}
type CharitySearchResponse = {
  charityOrgs?: CharityOrg[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/charity_org': {
      $get:
        | {
            input: {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                q?: string | undefined
                registration_ids?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: CharitySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                q?: string | undefined
                registration_ids?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                q?: string | undefined
                registration_ids?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/charity_org/:charity_org_id': {
      $get:
        | {
            input: { param: { charity_org_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: CharityOrg
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { charity_org_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { charity_org_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { charity_org_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
