type LiffView = { type: 'compact' | 'tall' | 'full'; url: string; moduleMode?: boolean | undefined }
type LiffFeatures = { ble?: boolean | undefined; qrCode?: boolean | undefined }
type LiffScope = 'openid' | 'email' | 'profile' | 'chat_message.write'
type LiffBotPrompt = 'normal' | 'aggressive' | 'none'
type AddLiffAppRequest = {
  view: LiffView
  description?: string | undefined
  features?: LiffFeatures | undefined
  permanentLinkPattern?: string | undefined
  scope?: LiffScope[] | undefined
  botPrompt?: LiffBotPrompt | undefined
}
type AddLiffAppResponse = { liffId: string }
type LiffApp = {
  liffId?: string | undefined
  view?: LiffView | undefined
  description?: string | undefined
  features?: LiffFeatures | undefined
  permanentLinkPattern?: string | undefined
  scope?: LiffScope[] | undefined
  botPrompt?: LiffBotPrompt | undefined
}
type GetAllLiffAppsResponse = { apps?: LiffApp[] | undefined }
type UpdateLiffView = {
  type?: 'compact' | 'tall' | 'full' | undefined
  url?: string | undefined
  moduleMode?: boolean | undefined
}
type UpdateLiffAppRequest = {
  view?: UpdateLiffView | undefined
  description?: string | undefined
  features?: LiffFeatures | undefined
  permanentLinkPattern?: string | undefined
  scope?: LiffScope[] | undefined
  botPrompt?: LiffBotPrompt | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/liff/v1/apps': {
      $post:
        | {
            input: { json: AddLiffAppRequest }
            output: AddLiffAppResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AddLiffAppRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: AddLiffAppRequest }; output: {}; outputFormat: string; status: 401 }
      $get:
        | { input: {}; output: GetAllLiffAppsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/liff/v1/apps/:liffId': {
      $put:
        | {
            input: { param: { liffId: string } } & { json: UpdateLiffAppRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { liffId: string } } & { json: UpdateLiffAppRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { liffId: string } } & { json: UpdateLiffAppRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { liffId: string } } & { json: UpdateLiffAppRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { liffId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { liffId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { liffId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
