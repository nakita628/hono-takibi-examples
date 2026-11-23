import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTestTypeRoute, postActionTestTypeRoute } from '../routes'

export const getActionTestTypeRouteHandler: RouteHandler<typeof getActionTestTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionTestTypeRouteHandler: RouteHandler<typeof postActionTestTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
