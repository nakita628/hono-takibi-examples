type Links = { href?: string | undefined }
type ApplicationBaseId = string
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
type ApplicationBaseName = string
type Voice = {
  webhooks?:
    | { endpoint: string; endpoint_type: 'answer_url' | 'event_url'; http_method: 'GET' | 'POST' }[]
    | undefined
}
type Application = {
  _links?: Links | undefined
  id?: ApplicationBaseId | undefined
  keys?: Keys | undefined
  messages: Messages
  name: ApplicationBaseName
  voice: Voice
}
type ApplicationsBaseEmbedded = { applications?: Application[] | undefined }
type ApplicationsBaseCount = number
type ApplicationsBasePageIndex = number
type ApplicationsBasePageSize = number
type Applications = {
  _embedded: ApplicationsBaseEmbedded
  _links: Links
  count: ApplicationsBaseCount
  page_index: ApplicationsBasePageIndex
  page_size: ApplicationsBasePageSize
}
type ApiKey = string
type ApiSecret = string
type KeysWithPrivateKey = { public_key?: string | undefined; private_key?: string | undefined }
type ApplicationCreated = {
  _links?: Links | undefined
  id?: ApplicationBaseId | undefined
  keys?: KeysWithPrivateKey | undefined
  messages: Messages
  name: ApplicationBaseName
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
