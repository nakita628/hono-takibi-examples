type DetachModuleRequest = { botId?: string | undefined }
type AcquireChatControlRequest = { expired?: boolean | undefined; ttl?: number | undefined }
type ModuleBot = {
  userId: string
  basicId: string
  premiumId?: string | undefined
  displayName: string
  pictureUrl?: string | undefined
}
type GetModulesResponse = { bots: ModuleBot[]; next?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/bot/channel/detach': {
      $post: { input: { json: DetachModuleRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/bot/chat/:chatId/control/acquire': {
      $post: {
        input: { param: { chatId: string } } & { json: AcquireChatControlRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/chat/:chatId/control/release': {
      $post: { input: { param: { chatId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/bot/list': {
      $get: {
        input: { query: { start?: string | undefined; limit?: number | undefined } }
        output: GetModulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
