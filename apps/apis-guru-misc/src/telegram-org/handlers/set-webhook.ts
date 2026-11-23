import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetWebhookRoute } from '../routes'

export const postSetWebhookRouteHandler: RouteHandler<typeof postSetWebhookRoute> = async (c) => {
  throw new Error('Not implemented')
}
