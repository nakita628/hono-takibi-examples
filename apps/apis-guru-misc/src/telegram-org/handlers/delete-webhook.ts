import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteWebhookRoute } from '../routes'

export const postDeleteWebhookRouteHandler: RouteHandler<typeof postDeleteWebhookRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
