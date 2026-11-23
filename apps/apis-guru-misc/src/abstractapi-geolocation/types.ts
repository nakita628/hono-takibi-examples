type InlineResponse_200 = {
  city?: string | undefined
  city_geoname_id?: number | undefined
  connection?:
    | {
        autonomous_system_number?: number | undefined
        autonomous_system_organization?: string | undefined
        connection_type?: string | undefined
        isp_name?: string | undefined
        organization_name?: string | undefined
      }
    | undefined
  continent?: string | undefined
  continent_code?: string | undefined
  continent_geoname_id?: number | undefined
  country?: string | undefined
  country_code?: string | undefined
  country_geoname_id?: number | undefined
  country_is_eu?: boolean | undefined
  currency?: { currency_code?: string | undefined; currency_name?: string | undefined } | undefined
  flag?:
    | {
        emoji?: string | undefined
        png?: string | undefined
        svg?: string | undefined
        unicode?: string | undefined
      }
    | undefined
  ip_address?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  postal_code?: string | undefined
  region?: string | undefined
  region_geoname_id?: number | undefined
  region_iso_code?: string | undefined
  security?: { is_vpn?: boolean | undefined } | undefined
  timezone?:
    | {
        abbreviation?: string | undefined
        current_time?: string | undefined
        gmt_offset?: number | undefined
        is_dst?: boolean | undefined
        name?: string | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/': {
      $get: {
        input: {
          query: { api_key: string; ip_address?: string | undefined; fields?: string | undefined }
        }
        output: InlineResponse_200
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
