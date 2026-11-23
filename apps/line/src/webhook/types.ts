type Source = { type: string }
type EventMode = 'active' | 'standby'
type DeliveryContext = { isRedelivery: boolean }
type Event = {
  type: string
  source?: Source | undefined
  timestamp: bigint
  mode: EventMode
  webhookEventId: string
  deliveryContext: DeliveryContext
}
type CallbackRequest = { destination: string; events: Event[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/callback': {
      $post: { input: { json: CallbackRequest }; output: string; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
