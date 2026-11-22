type MissionStickerRequest = {
  to: string
  productId: string
  productType: string
  sendPresentMessage: boolean
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/shop/v3/mission': {
      $post: {
        input: { json: MissionStickerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
