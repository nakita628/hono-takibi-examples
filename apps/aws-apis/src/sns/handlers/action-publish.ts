import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPublishRoute, postActionPublishRoute } from '../routes'

export const getActionPublishRouteHandler: RouteHandler<typeof getActionPublishRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionPublishRouteHandler: RouteHandler<typeof postActionPublishRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
