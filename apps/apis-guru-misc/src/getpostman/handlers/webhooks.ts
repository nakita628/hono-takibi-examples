import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebhooksRoute } from '../routes'

export const postWebhooksRouteHandler: RouteHandler<typeof postWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}
