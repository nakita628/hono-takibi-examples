declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getzipcodeinfo': {
      $get:
        | {
            input: { query: { license: string; zip: string } }
            output: {
              AreaSquareMiles?: string | undefined
              City?: string | undefined
              Code?: string | undefined
              Credits?: string | undefined
              ElderlyHouseholdPercent?: string | undefined
              FarmerHouseholdPercent?: string | undefined
              IncomePercent100k?: string | undefined
              IncomePercent200k?: string | undefined
              IncomePercent50k?: string | undefined
              Latitude?: string | undefined
              Longitude?: string | undefined
              MarriedHouseholdPercent?: string | undefined
              Population?: string | undefined
              State?: string | undefined
              ZipCode?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; zip: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; zip: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; zip: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; zip: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { license: string; zip: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; zip: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
