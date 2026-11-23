import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebhooksFirehoseTestRoute, putWebhooksFirehoseRoute } from '../routes'

export const putWebhooksFirehoseRouteHandler: RouteHandler<
  typeof putWebhooksFirehoseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksFirehoseTestRouteHandler: RouteHandler<
  typeof postWebhooksFirehoseTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
