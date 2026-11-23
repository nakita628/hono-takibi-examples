declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/cari7/ambient_dose': {
      $get: {
        input: {
          query: {
            altitude: number
            latitude: number
            longitude: number
            year: number
            month: number
            day: number
            utc: number
            particle:
              | 'total'
              | 'neutron'
              | 'photon'
              | 'e-'
              | 'e+'
              | 'mu-'
              | 'mu+'
              | 'proton'
              | 'pi-'
              | 'pi+'
              | 'deuteron'
              | 'triton'
              | 'helion'
              | 'alpha'
              | 'Li'
              | 'Be'
              | 'B'
              | 'C'
              | 'N'
              | 'O'
              | 'F'
              | 'Ne'
              | 'Na'
              | 'Mg'
              | 'Al'
              | 'Si'
              | 'P'
              | 'S'
              | 'Cl'
              | 'Ar'
              | 'K'
              | 'Ca'
              | 'Sc'
              | 'Ti'
              | 'V'
              | 'Cr'
              | 'Mn'
              | 'Fe'
          }
        }
        output: {
          'dose rate'?: { units?: string | undefined; value?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cari7/effective_dose': {
      $get: {
        input: {
          query: {
            altitude: number
            latitude: number
            longitude: number
            year: number
            month: number
            day: number
            utc: number
            particle:
              | 'total'
              | 'neutron'
              | 'photon'
              | 'e-'
              | 'e+'
              | 'mu-'
              | 'mu+'
              | 'proton'
              | 'pi-'
              | 'pi+'
              | 'deuteron'
              | 'triton'
              | 'helion'
              | 'alpha'
              | 'Li'
              | 'Be'
              | 'B'
              | 'C'
              | 'N'
              | 'O'
              | 'F'
              | 'Ne'
              | 'Na'
              | 'Mg'
              | 'Al'
              | 'Si'
              | 'P'
              | 'S'
              | 'Cl'
              | 'Ar'
              | 'K'
              | 'Ca'
              | 'Sc'
              | 'Ti'
              | 'V'
              | 'Cr'
              | 'Mn'
              | 'Fe'
          }
        }
        output: {
          'dose rate'?: { units?: string | undefined; value?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/parma/ambient_dose': {
      $get: {
        input: {
          query: {
            altitude?: number | undefined
            atmospheric_depth?: number | undefined
            latitude: number
            longitude: number
            year: number
            month: number
            day: number
            particle:
              | 'total'
              | 'e-'
              | 'e+'
              | 'mu+'
              | 'mu-'
              | 'gamma'
              | 'neutron'
              | 'proton'
              | 'alpha'
          }
        }
        output: {
          'dose rate'?: { units?: string | undefined; value?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/parma/differential_intensity': {
      $get: {
        input: {
          query: {
            altitude?: number | undefined
            atmospheric_depth?: number | undefined
            latitude: number
            longitude: number
            year: number
            month: number
            day: number
            particle:
              | 'total'
              | 'e-'
              | 'e+'
              | 'mu+'
              | 'mu-'
              | 'gamma'
              | 'neutron'
              | 'proton'
              | 'alpha'
            angle: number
          }
        }
        output: {
          energies?: { data?: number[] | undefined; units?: string | undefined } | undefined
          intensities?: { data?: number[] | undefined; units?: string | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/parma/effective_dose': {
      $get: {
        input: {
          query: {
            altitude?: number | undefined
            atmospheric_depth?: number | undefined
            latitude: number
            longitude: number
            year: number
            month: number
            day: number
            particle:
              | 'total'
              | 'e-'
              | 'e+'
              | 'mu+'
              | 'mu-'
              | 'gamma'
              | 'neutron'
              | 'proton'
              | 'alpha'
          }
        }
        output: {
          'dose rate'?: { units?: string | undefined; value?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/route/ambient_dose': {
      $get: {
        input: {
          query: {
            origin: string
            destination: string
            altitude?: number | undefined
            duration?: number | undefined
            initial_altitude?: number | undefined
            cruising_altitudes?: number[] | undefined
            climb_times?: number[] | undefined
            cruising_times?: number[] | undefined
            descent_time?: number | undefined
            final_altitude?: number | undefined
            year: number
            month: number
            day: number
          }
        }
        output: {
          dose?:
            | {
                date?: string | undefined
                destination?: string | undefined
                origin?: string | undefined
                units?: string | undefined
                value?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/route/effective_dose': {
      $get: {
        input: {
          query: {
            origin: string
            destination: string
            altitude?: number | undefined
            duration?: number | undefined
            initial_altitude?: number | undefined
            cruising_altitudes?: number[] | undefined
            climb_times?: number[] | undefined
            cruising_times?: number[] | undefined
            descent_time?: number | undefined
            final_altitude?: number | undefined
            year: number
            month: number
            day: number
          }
        }
        output: {
          dose?:
            | {
                date?: string | undefined
                destination?: string | undefined
                origin?: string | undefined
                units?: string | undefined
                value?: number | undefined
              }
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
