declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/analytics': {
      $get: {
        input: {
          query: {
            start?: string | undefined
            end?: string | undefined
            label?: string | undefined
            subaccounts?: string | undefined
            group_by?: 'date' | 'label' | 'subaccount' | 'country' | undefined
          }
        }
        output: {
          date?: string | undefined
          direct?: number | undefined
          economy?: number | undefined
          hlr?: number | undefined
          inbound?: number | undefined
          mnp?: number | undefined
          usage_eur?: number | undefined
          voice?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/balance': { $get: { input: {}; output: number; outputFormat: 'text'; status: 200 } } } & {
    '/contacts': {
      $get:
        | {
            input: { query: { action: 'read'; json?: 0 | 1 | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { action: 'read'; json?: 0 | 1 | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                action: 'del' | 'write'
                json?: 0 | 1 | undefined
                id?: string | undefined
                nick?: string | undefined
                empfaenger?: string | undefined
                email?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                action: 'del' | 'write'
                json?: 0 | 1 | undefined
                id?: string | undefined
                nick?: string | undefined
                empfaenger?: string | undefined
                email?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/hooks': {
      $get: {
        input: { query: { action: 'read' } }
        output: {
          hooks?:
            | {
                created?: string | undefined
                event_type?: string | undefined
                id?: string | undefined
                request_method?: string | undefined
                target_url?: string | undefined
              }[]
            | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            action: 'subscribe' | 'unsubscribe'
            id?: number | undefined
            target_url?: string | undefined
            event_type?: 'all' | 'sms_mo' | 'dlr' | 'voice_status' | undefined
            request_method?: 'POST' | 'JSON' | 'GET' | undefined
          }
        }
        output: { id?: number | undefined; success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lookup': {
      $post: {
        input: { query: { type: string; number: string[]; json?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lookup/cnam': {
      $post: {
        input: { query: { number: string[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lookup/format': {
      $post: {
        input: { query: { number: string[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lookup/hlr': {
      $post: {
        input: { query: { number: string[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lookup/mnp': {
      $post: {
        input: { query: { number: string[]; json?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing': {
      $get: {
        input: { query: { country?: string | undefined; format?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms': {
      $post:
        | {
            input: {
              query: {
                text: string
                to: string
                from?: string | undefined
                foreign_id?: string | undefined
                label?: string | undefined
                udh?: string | undefined
                delay?: string | undefined
                debug?: 1 | 0 | undefined
                no_reload?: 1 | 0 | undefined
                unicode?: 1 | 0 | undefined
                flash?: 1 | 0 | undefined
                utf8?: 1 | 0 | undefined
                details?: 1 | 0 | undefined
                return_msg_id?: 1 | 0 | undefined
                json?: 1 | 0 | undefined
                performance_tracking?: 1 | 0 | undefined
              }
            }
            output: {
              balance?: number | undefined
              debug?: string | undefined
              messages?:
                | {
                    encoding?: string | undefined
                    error?: string | undefined
                    error_text?: string | undefined
                    id?: string | undefined
                    messages?: string[] | undefined
                    parts?: number | undefined
                    price?: number | undefined
                    recipient?: string | undefined
                    sender?: string | undefined
                    success?: boolean | undefined
                    text?: string | undefined
                  }[]
                | undefined
              sms_type?: 'economy' | 'direct' | undefined
              success?: string | undefined
              total_price?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                text: string
                to: string
                from?: string | undefined
                foreign_id?: string | undefined
                label?: string | undefined
                udh?: string | undefined
                delay?: string | undefined
                debug?: 1 | 0 | undefined
                no_reload?: 1 | 0 | undefined
                unicode?: 1 | 0 | undefined
                flash?: 1 | 0 | undefined
                utf8?: 1 | 0 | undefined
                details?: 1 | 0 | undefined
                return_msg_id?: 1 | 0 | undefined
                json?: 1 | 0 | undefined
                performance_tracking?: 1 | 0 | undefined
              }
            }
            output: {
              balance?: number | undefined
              debug?: string | undefined
              messages?:
                | {
                    encoding?: string | undefined
                    error?: string | undefined
                    error_text?: string | undefined
                    id?: string | undefined
                    messages?: string[] | undefined
                    parts?: number | undefined
                    price?: number | undefined
                    recipient?: string | undefined
                    sender?: string | undefined
                    success?: boolean | undefined
                    text?: string | undefined
                  }[]
                | undefined
              sms_type?: 'economy' | 'direct' | undefined
              success?: string | undefined
              total_price?: number | undefined
            }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/status': {
      $get: {
        input: { query: { msg_id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/validate_for_voice': {
      $post: {
        input: { query: { number: string; callback?: string | undefined } }
        output: {
          code?: string | undefined
          error?: string | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice': {
      $post: {
        input: {
          query: { to: string; text: string; xml?: 1 | 0 | undefined; from?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
