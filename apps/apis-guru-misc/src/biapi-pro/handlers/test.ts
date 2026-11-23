import type { RouteHandler } from '@hono/zod-openapi'
import type { postTestSyncRoute, postTestWebhooksRoute } from '../routes'

export const postTestSyncRouteHandler: RouteHandler<typeof postTestSyncRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTestWebhooksRouteHandler: RouteHandler<typeof postTestWebhooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
