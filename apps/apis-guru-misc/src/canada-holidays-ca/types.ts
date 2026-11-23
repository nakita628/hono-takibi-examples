type Province = {
  id: 'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NS' | 'NT' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT'
  nameEn: string
  nameFr: string
  nextHoliday?: Holiday | undefined
  optional?: 1 | undefined
  provinces?: Holiday[] | undefined
  sourceEn: string
  sourceLink: string
}
type Holiday = {
  date: string
  federal: 1 | 0
  id: number
  nameEn: string
  nameFr: string
  observedDate: string
  optional?: 1 | undefined
  provinces?: Province[] | undefined
}
type Error = {
  message?: string | undefined
  status?: number | undefined
  timestamp?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1': {
      $get: {
        input: {}
        output: {
          _links?:
            | {
                holidays?: { href?: string | undefined } | undefined
                provinces?: { href?: string | undefined } | undefined
                self?: { href?: string | undefined } | undefined
                spec?: { href?: string | undefined } | undefined
              }
            | undefined
          message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/holidays': {
      $get: {
        input: {
          query: {
            year?: number | undefined
            federal?: '1' | '0' | 'true' | 'false' | undefined
            optional?: '1' | '0' | 'true' | 'false' | undefined
          }
        }
        output: { holidays?: Holiday[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/holidays/:holidayId': {
      $get:
        | {
            input: { param: { holidayId: number } } & {
              query: {
                year?: number | undefined
                optional?: '1' | '0' | 'true' | 'false' | undefined
              }
            }
            output: { holiday?: Holiday | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { holidayId: number } } & {
              query: {
                year?: number | undefined
                optional?: '1' | '0' | 'true' | 'false' | undefined
              }
            }
            output: { error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/provinces': {
      $get: {
        input: {
          query: { year?: number | undefined; optional?: '1' | '0' | 'true' | 'false' | undefined }
        }
        output: { provinces?: Province[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/provinces/:provinceId': {
      $get:
        | {
            input: {
              param: {
                provinceId:
                  | 'AB'
                  | 'BC'
                  | 'MB'
                  | 'NB'
                  | 'NL'
                  | 'NS'
                  | 'NT'
                  | 'NU'
                  | 'ON'
                  | 'PE'
                  | 'QC'
                  | 'SK'
                  | 'YT'
              }
            } & {
              query: {
                year?: number | undefined
                optional?: '1' | '0' | 'true' | 'false' | undefined
              }
            }
            output: { province?: Province | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                provinceId:
                  | 'AB'
                  | 'BC'
                  | 'MB'
                  | 'NB'
                  | 'NL'
                  | 'NS'
                  | 'NT'
                  | 'NU'
                  | 'ON'
                  | 'PE'
                  | 'QC'
                  | 'SK'
                  | 'YT'
              }
            } & {
              query: {
                year?: number | undefined
                optional?: '1' | '0' | 'true' | 'false' | undefined
              }
            }
            output: { error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & { '/api/v1/spec': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes
