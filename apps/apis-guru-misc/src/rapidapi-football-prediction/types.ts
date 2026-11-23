declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v2/list-federations': {
      $get:
        | {
            input: { header: { 'X-RapidApi-Key'?: string | undefined } }
            output: { data?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-RapidApi-Key'?: string | undefined } }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/list-markets': {
      $get:
        | {
            input: { header: { 'X-RapidApi-Key'?: string | undefined } }
            output: {
              data?:
                | {
                    all?: string[] | undefined
                    allowed_for_your_subscription?: string[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-RapidApi-Key'?: string | undefined } }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/performance-stats': {
      $get:
        | {
            input: { header: { 'X-RapidApi-Key'?: string | undefined } }
            output: {
              data?:
                | {
                    accuracy?:
                      | {
                          last_14_days?: number | undefined
                          last_30_days?: number | undefined
                          last_7_days?: number | undefined
                          yesterday?: number | undefined
                        }
                      | undefined
                    details?:
                      | {
                          last_14_days?:
                            | {
                                lost?: number | undefined
                                pending?: number | undefined
                                postponed?: number | undefined
                                total?: number | undefined
                                won?: number | undefined
                              }
                            | undefined
                          last_30_days?:
                            | {
                                lost?: number | undefined
                                pending?: number | undefined
                                postponed?: number | undefined
                                total?: number | undefined
                                won?: number | undefined
                              }
                            | undefined
                          last_7_days?:
                            | {
                                lost?: number | undefined
                                pending?: number | undefined
                                postponed?: number | undefined
                                total?: number | undefined
                                won?: number | undefined
                              }
                            | undefined
                          yesterday?:
                            | {
                                lost?: number | undefined
                                pending?: number | undefined
                                postponed?: number | undefined
                                total?: number | undefined
                                won?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    market?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-RapidApi-Key'?: string | undefined } }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/predictions': {
      $get:
        | {
            input: { header: { 'X-RapidApi-Key'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-RapidApi-Key'?: string | undefined } }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/predictions/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: { [x: string]: unknown }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
