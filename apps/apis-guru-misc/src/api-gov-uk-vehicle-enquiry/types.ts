type VehicleRequest = { registrationNumber?: string | undefined }
type Vehicle = {
  artEndDate?: string | undefined
  co2Emissions?: number | undefined
  colour?: string | undefined
  dateOfLastV5CIssued?: string | undefined
  engineCapacity?: number | undefined
  euroStatus?: string | undefined
  fuelType?: string | undefined
  make?: string | undefined
  markedForExport?: boolean | undefined
  monthOfFirstDvlaRegistration?: string | undefined
  monthOfFirstRegistration?: string | undefined
  motExpiryDate?: string | undefined
  motStatus?: 'No details held by DVLA' | 'No results returned' | 'Not valid' | 'Valid' | undefined
  realDrivingEmissions?: string | undefined
  registrationNumber: string
  revenueWeight?: number | undefined
  taxDueDate?: string | undefined
  taxStatus?: 'Not Taxed for on Road Use' | 'SORN' | 'Taxed' | 'Untaxed' | undefined
  typeApproval?: string | undefined
  wheelplan?: string | undefined
  yearOfManufacture?: number | undefined
}
type Errors = {
  code?: string | undefined
  detail?: string | undefined
  status?: string | undefined
  title: string
}
type ErrorResponse = { errors?: Errors[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/vehicles': {
      $post:
        | {
            input: { header: { 'x-api-key': string; 'X-Correlation-Id'?: string | undefined } } & {
              json: VehicleRequest
            }
            output: Vehicle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key': string; 'X-Correlation-Id'?: string | undefined } } & {
              json: VehicleRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'x-api-key': string; 'X-Correlation-Id'?: string | undefined } } & {
              json: VehicleRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'x-api-key': string; 'X-Correlation-Id'?: string | undefined } } & {
              json: VehicleRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'x-api-key': string; 'X-Correlation-Id'?: string | undefined } } & {
              json: VehicleRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  },
  '/'
>
export default routes
