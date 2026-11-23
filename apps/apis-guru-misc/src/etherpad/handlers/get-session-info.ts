import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetSessionInfoRoute, postGetSessionInfoRoute } from '../routes'

export const getGetSessionInfoRouteHandler: RouteHandler<typeof getGetSessionInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGetSessionInfoRouteHandler: RouteHandler<typeof postGetSessionInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
