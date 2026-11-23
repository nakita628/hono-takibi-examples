type Subscription = {
  '@context'?: string | undefined
  active: boolean
  id: string
  lastEventID?: string | undefined
  payload?: { [x: string]: unknown } | undefined
  subscriber: string
  topic: string
  type: string
}
type Subscriptions = {
  '@context': string
  id: string
  lastEventID: string
  subscriptions: Subscription[]
  type: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/.well-known/mercure': {
      $get:
        | {
            input: { query: { topic: string[]; 'Last-Event-ID'?: string | undefined } } & {
              header: { 'Last-Event-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { topic: string[]; 'Last-Event-ID'?: string | undefined } } & {
              header: { 'Last-Event-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { topic: string[]; 'Last-Event-ID'?: string | undefined } } & {
              header: { 'Last-Event-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                data: string
                id?: string | undefined
                private?: boolean | undefined
                retry?: number | undefined
                topic: string[]
                type?: string | undefined
              }
            } & {
              form: {
                data: string
                id?: string | undefined
                private?: boolean | undefined
                retry?: number | undefined
                topic: string[]
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                data: string
                id?: string | undefined
                private?: boolean | undefined
                retry?: number | undefined
                topic: string[]
                type?: string | undefined
              }
            } & {
              form: {
                data: string
                id?: string | undefined
                private?: boolean | undefined
                retry?: number | undefined
                topic: string[]
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                data: string
                id?: string | undefined
                private?: boolean | undefined
                retry?: number | undefined
                topic: string[]
                type?: string | undefined
              }
            } & {
              form: {
                data: string
                id?: string | undefined
                private?: boolean | undefined
                retry?: number | undefined
                topic: string[]
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/.well-known/mercure/subscriptions': {
      $get:
        | { input: {}; output: Subscriptions; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/.well-known/mercure/subscriptions/:topic': {
      $get:
        | {
            input: { param: { topic: string } }
            output: Subscriptions
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { topic: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/.well-known/mercure/subscriptions/:topic/:subscriber': {
      $get:
        | {
            input: { param: { topic: string; subscriber: string } }
            output: Subscriptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topic: string; subscriber: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
