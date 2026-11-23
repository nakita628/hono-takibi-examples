type FluxAtEnergy = {
  flux?: { units?: string | undefined; value?: number | undefined } | undefined
}
type Flux = {
  energies?: { data?: number[] | undefined; units?: string | undefined } | undefined
  flux?: { data?: number[] | undefined; units?: string | undefined } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/gcr/flux_dlr': {
      $get: {
        input: { query: { year: number; month: number; day: number; z: number; energy: number } }
        output: FluxAtEnergy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/trapped/flux_mean': {
      $get: {
        input: {
          query: {
            model: 'AE9' | 'AP9' | 'SPME' | 'SPMH' | 'SPMHE' | 'SPMO'
            coord_sys: 'GDZ' | 'GEO' | 'GEI'
            coord_units: 'KM' | 'RE'
            coord1: number
            coord2: number
            coord3: number
            year: number
            month: number
            day: number
            hour: number
            minute: number
            second: number
          }
        }
        output: Flux
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/trapped/flux_percentile': {
      $get: {
        input: {
          query: {
            model: 'AE9' | 'AP9' | 'SPME' | 'SPMH' | 'SPMHE' | 'SPMO'
            coord_sys: 'GDZ' | 'GEO' | 'GEI'
            coord_units: 'KM' | 'RE'
            coord1: number
            coord2: number
            coord3: number
            year: number
            month: number
            day: number
            hour: number
            minute: number
            second: number
            percentile: number
          }
        }
        output: Flux
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
