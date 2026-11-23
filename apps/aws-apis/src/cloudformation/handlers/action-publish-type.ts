import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPublishTypeRoute, postActionPublishTypeRoute } from '../routes'

export const getActionPublishTypeRouteHandler: RouteHandler<
  typeof getActionPublishTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPublishTypeRouteHandler: RouteHandler<
  typeof postActionPublishTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
