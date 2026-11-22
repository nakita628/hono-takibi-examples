declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/jb2008': {
      $get: {
        input: {
          query: {
            year: number
            month: number
            day: number
            altitude: number
            geodetic_latitude: number
            geodetic_longitude: number
            utc: number
          }
        }
        output: {
          at_alt_temp?: { units?: string | undefined; value?: number | undefined } | undefined
          exospheric_temp?: { units?: string | undefined; value?: number | undefined } | undefined
          total_mass_density?:
            | { units?: string | undefined; value?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nrlmsise00': {
      $get: {
        input: {
          query: {
            year: number
            month: number
            day: number
            altitude: number
            geodetic_latitude: number
            geodetic_longitude: number
            utc: number
            f107a?: number | undefined
            f107?: number | undefined
            ap?: number | undefined
          }
        }
        output: {
          Ar_density?: { units?: string | undefined; value?: number | undefined } | undefined
          H_density?: { units?: string | undefined; value?: number | undefined } | undefined
          He_density?: { units?: string | undefined; value?: number | undefined } | undefined
          N2_density?: { units?: string | undefined; value?: number | undefined } | undefined
          N_density?: { units?: string | undefined; value?: number | undefined } | undefined
          O2_density?: { units?: string | undefined; value?: number | undefined } | undefined
          O_density?: { units?: string | undefined; value?: number | undefined } | undefined
          anomalous_O_density?:
            | { units?: string | undefined; value?: number | undefined }
            | undefined
          ap?: { value?: number | undefined } | undefined
          at_alt_temp?: { units?: string | undefined; value?: number | undefined } | undefined
          exospheric_temp?: { units?: string | undefined; value?: number | undefined } | undefined
          f107?: { units?: string | undefined; value?: number | undefined } | undefined
          f107a?: { units?: string | undefined; value?: number | undefined } | undefined
          total_mass_density?:
            | { units?: string | undefined; value?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wam-ipe': {
      $get: {
        input: {
          query: {
            latitude: number
            longitude: number
            altitude: number
            year: number
            month: number
            day: number
            hour: number
            minute: number
          }
        }
        output: {
          N2_density?: { units?: string | undefined; value?: number | undefined } | undefined
          O2_density?: { units?: string | undefined; value?: number | undefined } | undefined
          O_density?: { units?: string | undefined; value?: number | undefined } | undefined
          eastward_wind_neutral?:
            | { units?: string | undefined; value?: number | undefined }
            | undefined
          northward_wind_neutral?:
            | { units?: string | undefined; value?: number | undefined }
            | undefined
          point?:
            | {
                altitude?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
              }
            | undefined
          temp_neutral?: { units?: string | undefined; value?: number | undefined } | undefined
          total_mass_density?:
            | { units?: string | undefined; value?: number | undefined }
            | undefined
          upward_wind_neutral?:
            | { units?: string | undefined; value?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
