import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSelectRoute, postActionSelectRoute } from '../routes'

export const getActionSelectRouteHandler: RouteHandler<typeof getActionSelectRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSelectRouteHandler: RouteHandler<typeof postActionSelectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
