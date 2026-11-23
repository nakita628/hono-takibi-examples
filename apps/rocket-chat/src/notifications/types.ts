declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/banners/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { platform: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              banners?: { [x: string]: unknown }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { platform: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { platform: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/banners': {
      $get:
        | {
            input: { query: { platform: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              banners?: { [x: string]: unknown }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { platform: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { platform: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/banners.dismiss': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { bannerId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { bannerId: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { bannerId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/push.get': {
      $get:
        | {
            input: { query: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              data?:
                | {
                    message?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                          _updatedAt?: string | undefined
                        }
                      | undefined
                    notification?:
                      | {
                          from?: string | undefined
                          badge?: number | undefined
                          sound?: string | undefined
                          priority?: number | undefined
                          title?: string | undefined
                          text?: string | undefined
                          payload?:
                            | {
                                host?: string | undefined
                                messageId?: string | undefined
                                notificationType?: string | undefined
                                rid?: string | undefined
                                sender?:
                                  | {
                                      _id?: string | undefined
                                      username?: string | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                                senderName?: string | undefined
                                type?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          userId?: string | undefined
                          notId?: number | undefined
                          gcm?:
                            | { style?: string | undefined; image?: string | undefined }
                            | undefined
                          apn?: { category?: string | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/push.token': {
      $delete:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { token?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { token?: string | undefined }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { token?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                id?: string | undefined
                type: string
                value: string
                appName: string
                voipToken?: string | undefined
              }
            }
            output: {
              result?:
                | {
                    tokenType?: string | undefined
                    tokenValue?: string | undefined
                    appName?: string | undefined
                    userId?: string | undefined
                    enabled?: boolean | undefined
                    createdAt?: string | undefined
                    _updatedAt?: string | undefined
                    _id?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                id?: string | undefined
                type: string
                value: string
                appName: string
                voipToken?: string | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                id?: string | undefined
                type: string
                value: string
                appName: string
                voipToken?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/push.info': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              pushGatewayEnabled?: boolean | undefined
              defaultPushGateway?: boolean | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/push.test': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { tokensCount: number; message: string; params: number[]; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
