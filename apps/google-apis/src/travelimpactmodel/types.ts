type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type Flight = {
  departureDate?: Date | undefined
  destination?: string | undefined
  flightNumber?: number | undefined
  operatingCarrierCode?: string | undefined
  origin?: string | undefined
}
type ComputeFlightEmissionsRequest = { flights?: Flight[] | undefined }
type EmissionsGramsPerPax = {
  business?: number | undefined
  economy?: number | undefined
  first?: number | undefined
  premiumEconomy?: number | undefined
}
type FlightWithEmissions = {
  emissionsGramsPerPax?: EmissionsGramsPerPax | undefined
  flight?: Flight | undefined
}
type ModelVersion = {
  dated?: string | undefined
  major?: number | undefined
  minor?: number | undefined
  patch?: number | undefined
}
type ComputeFlightEmissionsResponse = {
  flightEmissions?: FlightWithEmissions[] | undefined
  modelVersion?: ModelVersion | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/flights:computeFlightEmissions': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ComputeFlightEmissionsRequest }
        output: ComputeFlightEmissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
