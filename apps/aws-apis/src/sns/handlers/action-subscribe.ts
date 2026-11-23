import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSubscribeRoute, postActionSubscribeRoute } from '../routes'

export const getActionSubscribeRouteHandler: RouteHandler<typeof getActionSubscribeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionSubscribeRouteHandler: RouteHandler<
  typeof postActionSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
