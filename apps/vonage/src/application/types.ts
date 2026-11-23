type Links = { href?: string | undefined }
type Applications = {
  _embedded: unknown
  _links: Links
  count: unknown
  page_index: unknown
  page_size: unknown
}
type ApiKey = string
type ApiSecret = string
type Keys = { public_key?: string | undefined }
type Messages = {
  webhooks?:
    | {
        endpoint: string
        endpoint_type: 'inbound_url' | 'status_url'
        http_method: 'GET' | 'POST'
      }[]
    | undefined
}
type Voice = {
  webhooks?:
    | { endpoint: string; endpoint_type: 'answer_url' | 'event_url'; http_method: 'GET' | 'POST' }[]
    | undefined
}
type KeysWithPrivateKey = { public_key?: string | undefined; private_key?: string | undefined }
type ApplicationCreated = {
  _links?: Links | undefined
  id?: unknown | undefined
  keys?: KeysWithPrivateKey | undefined
  messages: Messages
  name: unknown
  voice: Voice
}
type Application = {
  _links?: Links | undefined
  id?: unknown | undefined
  keys?: Keys | undefined
  messages: Messages
  name: unknown
  voice: Voice
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: {
          query: {
            api_key: string
            api_secret: string
            page_size?: number | undefined
            page_index?: number | undefined
          }
        }
        output: Applications
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            answer_method?: string | undefined
            answer_url?: string | undefined
            api_key: ApiKey
            api_secret: ApiSecret
            event_method?: string | undefined
            event_url?: string | undefined
            inbound_method?: string | undefined
            inbound_url?: string | undefined
            name: string
            status_method?: string | undefined
            status_url?: string | undefined
            type: 'voice' | 'messages'
          }
        }
        output: ApplicationCreated
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/:app_id': {
      $delete: {
        input: { param: { app_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { app_id: string } } & { query: { api_key: string; api_secret: string } }
        output: Application
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { app_id: string } } & {
          json: {
            answer_method?: string | undefined
            answer_url?: string | undefined
            api_key: ApiKey
            api_secret: ApiSecret
            event_method?: string | undefined
            event_url?: string | undefined
            name: string
            type: 'voice' | 'messages'
          }
        }
        output: Application
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
