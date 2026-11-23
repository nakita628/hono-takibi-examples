declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | {
            input: {
              query: {
                hypermedia?: 'yes' | 'no' | undefined
                'content-type'?:
                  | 'application/json'
                  | 'text/html'
                  | 'text/xml'
                  | 'application/xml'
                  | undefined
              }
            }
            output: { status?: 'OK' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                hypermedia?: 'yes' | 'no' | undefined
                'content-type'?:
                  | 'application/json'
                  | 'text/html'
                  | 'text/xml'
                  | 'application/xml'
                  | undefined
              }
            }
            output: { status?: 'OK' | undefined }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/announcements': {
      $get:
        | { input: {}; output: { status?: 'OK' | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { status?: 'OK' | undefined }; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { form: { description?: string | undefined; file?: string | undefined } }
            output: {
              announcement?:
                | {
                    creation_date?: string | undefined
                    description?: string | undefined
                    file_internal?: string | undefined
                    filename?: string | undefined
                    id?: string | undefined
                    size?: number | undefined
                    src_ip_address?: string | undefined
                    url?:
                      | {
                          download?: string | undefined
                          href?: string | undefined
                          title?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { form: { description?: string | undefined; file?: string | undefined } }
            output: { errors: { field: string; message: string[] }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { description?: string | undefined; file?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { form: { description?: string | undefined; file?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & { '/areacodes': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/billing': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/calls': {
      $get:
        | {
            input: { query: { validate?: number | undefined } }
            output: { status?: 'OK' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { validate?: number | undefined } }
            output: { errors: { field: string; message: string[] }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { validate?: number | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: {
              json: {
                announcement_at?: string | undefined
                announcement_id?: string | undefined
                caller_id: string
                from: string
                hangup_announcement_id?: string | undefined
                hangup_at?: string | undefined
                options?:
                  | {
                      a_leg_caller_id?: string | undefined
                      a_leg_only?: number | undefined
                      cancel_key?: number | undefined
                      connect_key?: number | undefined
                      play_audio?: { announcement_id?: string | undefined }[] | undefined
                    }
                  | undefined
                to: string
              }
            }
            output: { Call?: string | undefined; Location?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                announcement_at?: string | undefined
                announcement_id?: string | undefined
                caller_id: string
                from: string
                hangup_announcement_id?: string | undefined
                hangup_at?: string | undefined
                options?:
                  | {
                      a_leg_caller_id?: string | undefined
                      a_leg_only?: number | undefined
                      cancel_key?: number | undefined
                      connect_key?: number | undefined
                      play_audio?: { announcement_id?: string | undefined }[] | undefined
                    }
                  | undefined
                to: string
              }
            }
            output: { errors: { field: string; message: string[] }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                announcement_at?: string | undefined
                announcement_id?: string | undefined
                caller_id: string
                from: string
                hangup_announcement_id?: string | undefined
                hangup_at?: string | undefined
                options?:
                  | {
                      a_leg_caller_id?: string | undefined
                      a_leg_only?: number | undefined
                      cancel_key?: number | undefined
                      connect_key?: number | undefined
                      play_audio?: { announcement_id?: string | undefined }[] | undefined
                    }
                  | undefined
                to: string
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                announcement_at?: string | undefined
                announcement_id?: string | undefined
                caller_id: string
                from: string
                hangup_announcement_id?: string | undefined
                hangup_at?: string | undefined
                options?:
                  | {
                      a_leg_caller_id?: string | undefined
                      a_leg_only?: number | undefined
                      cancel_key?: number | undefined
                      connect_key?: number | undefined
                      play_audio?: { announcement_id?: string | undefined }[] | undefined
                    }
                  | undefined
                to: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/charges': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 201 }
    }
  } & { '/contacts': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/customers': {
      $get: {
        input: {}
        output: { location?: string | undefined }
        outputFormat: 'json'
        status: 302
      }
    }
  } & {
    '/customers/:account': {
      $get: {
        input: { param: { account: number } }
        output: {
          address?: string | undefined
          balance?: number | undefined
          city?: string | undefined
          company_name?: string | undefined
          company_website?: string | undefined
          country?: string | undefined
          creditlimit?: string | undefined
          email?: string | undefined
          fax?: string | undefined
          firstname?: string | undefined
          lastname?: string | undefined
          phone?: string | undefined
          postcode?: string | undefined
          state?: string | undefined
          username?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customers/:account/announcements': {
      $get:
        | {
            input: { param: { account: number } }
            output: {
              list?:
                | {
                    announcement?:
                      | {
                          creation_date?: string | undefined
                          description?: string | undefined
                          file_internal?: string | undefined
                          filename?: string | undefined
                          id?: string | undefined
                          size?: number | undefined
                          src_ip_address?: string | undefined
                          url?:
                            | {
                                download?: string | undefined
                                href?: string | undefined
                                title?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:account/announcements/:announcement_id': {
      $delete:
        | {
            input: { param: { account: number; announcement_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account: number; announcement_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 410
          }
      $get:
        | {
            input: { param: { account: number; announcement_id: string } }
            output: {
              announcement?:
                | {
                    creation_date?: string | undefined
                    description?: string | undefined
                    file_internal?: string | undefined
                    filename?: string | undefined
                    id?: string | undefined
                    size?: number | undefined
                    src_ip_address?: string | undefined
                    url?:
                      | {
                          download?: string | undefined
                          href?: string | undefined
                          title?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: number; announcement_id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & { '/faxes': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/hosted': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/ip-address': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/mobile': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/numbers': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/numbers/areacodes': {
      $get: { input: {}; output: { id: bigint; name: string }; outputFormat: 'json'; status: 200 }
    }
  } & { '/partners': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/porting': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/service-status': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/sip': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/sms': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/support/echo': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/support/ip-address': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/support/service-status': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/topups': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes
