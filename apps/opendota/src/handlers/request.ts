import type { RouteHandler } from '@hono/zod-openapi'
import type { getRequestJobIdRoute, postRequestMatchIdRoute } from '../routes'

export const getRequestJobIdRouteHandler: RouteHandler<typeof getRequestJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequestMatchIdRouteHandler: RouteHandler<typeof postRequestMatchIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
