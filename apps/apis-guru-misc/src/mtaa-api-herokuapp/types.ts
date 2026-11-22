declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:country': {
      $get: { input: { param: { country: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/:country/:region': {
      $get:
        | {
            input: { param: { country: string; region: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { country: string; region: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/:country/:region/:district': {
      $get:
        | {
            input: { param: { country: string; region: string; district: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { country: string; region: string; district: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/:country/:region/:district/:ward': {
      $get:
        | {
            input: { param: { country: string; region: string; district: string; ward: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { country: string; region: string; district: string; ward: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/:country/:region/:district/:ward/:street': {
      $get:
        | {
            input: {
              param: {
                country: string
                region: string
                district: string
                ward: string
                street: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                country: string
                region: string
                district: string
                ward: string
                street: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
