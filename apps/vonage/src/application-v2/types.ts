type MeetingsCapability = {
  webhooks?:
    | {
        recording_changed?:
          | { address?: string | undefined; http_method?: 'GET' | 'POST' | 'PUT' | undefined }
          | undefined
        room_changed?:
          | { address?: string | undefined; http_method?: 'GET' | 'POST' | 'PUT' | undefined }
          | undefined
        session_changed?:
          | { address?: string | undefined; http_method?: 'GET' | 'POST' | 'PUT' | undefined }
          | undefined
      }
    | undefined
}
type MessagesCapability = {
  version?: string | undefined
  webhooks?:
    | {
        inbound_url?: { address?: string | undefined; http_method?: 'POST' | undefined } | undefined
        status_url?: { address?: string | undefined; http_method?: 'POST' | undefined } | undefined
      }
    | undefined
}
type RtcCapability = {
  leg_persistence_time?: number | undefined
  signed_callbacks?: boolean | undefined
  webhooks?:
    | {
        event_url?:
          | { address?: string | undefined; http_method?: 'GET' | 'POST' | undefined }
          | undefined
      }
    | undefined
}
type VerifyCapability = {
  version?: 'v2' | undefined
  webhooks?:
    | {
        status_url?: { address?: string | undefined; http_method?: 'POST' | undefined } | undefined
      }
    | undefined
}
type VoiceCapability = {
  conversation_ttl?: number | undefined
  payments?:
    | {
        gateways?:
          | {
              credential?: string | undefined
              mode?: 'test' | 'live' | undefined
              type?: string | undefined
            }[]
          | undefined
      }
    | undefined
  signed_callbacks?: boolean | undefined
  webhooks?:
    | {
        answer_url?:
          | {
              address?: string | undefined
              connection_timeout?: number | undefined
              http_method?: 'GET' | 'POST' | undefined
              socket_timeout?: number | undefined
            }
          | undefined
        event_url?:
          | {
              address?: string | undefined
              connection_timeout?: number | undefined
              http_method?: 'GET' | 'POST' | undefined
              socket_timeout?: number | undefined
            }
          | undefined
        fallback_answer_url?:
          | {
              address?: string | undefined
              connection_timeout?: number | undefined
              http_method?: 'GET' | 'POST' | undefined
              socket_timeout?: number | undefined
            }
          | undefined
      }
    | undefined
}
type Capabilities = {
  meetings?: MeetingsCapability | undefined
  messages?: MessagesCapability | undefined
  rtc?: RtcCapability | undefined
  vbc?: { [x: string]: unknown } | undefined
  verify?: VerifyCapability | undefined
  voice?: VoiceCapability | undefined
}
type ApplicationResponse = {
  capabilities?: Capabilities | undefined
  id?: string | undefined
  name?: string | undefined
  privacy?: { improve_ai?: boolean | undefined } | undefined
}
type ApplicationResponseCollection = {
  _embedded?: { applications?: ApplicationResponse[] | undefined } | undefined
  page?: number | undefined
  page_size?: number | undefined
  total_items?: number | undefined
  total_pages?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | {
            input: { query: { page_size?: number | undefined; page?: number | undefined } }
            output: ApplicationResponseCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page_size?: number | undefined; page?: number | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              invalid_parameters?:
                | { name?: string | undefined; reason?: string | undefined }[]
                | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page_size?: number | undefined; page?: number | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page_size?: number | undefined; page?: number | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { page_size?: number | undefined; page?: number | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
      $post:
        | {
            input: {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              capabilities?: Capabilities | undefined
              id?: string | undefined
              name?: string | undefined
              privacy?: { improve_ai?: boolean | undefined } | undefined
              keys?:
                | { private_key?: string | undefined; public_key?: string | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              invalid_parameters?:
                | { name?: string | undefined; reason?: string | undefined }[]
                | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              capabilities?: Capabilities | undefined
              id?: string | undefined
              name?: string | undefined
              privacy?: { improve_ai?: boolean | undefined } | undefined
              keys?:
                | { private_key?: string | undefined; public_key?: string | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              invalid_parameters?:
                | { name?: string | undefined; reason?: string | undefined }[]
                | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string } } & {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: string } } & {
              json: {
                capabilities?: Capabilities | undefined
                keys?: { public_key?: string | undefined } | undefined
                name: string
                privacy?: { improve_ai?: boolean | undefined } | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  },
  '/'
>
export default routes
