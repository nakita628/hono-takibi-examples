import type { RouteHandler } from '@hono/zod-openapi'
import type { getSelectRoute, postSelectRoute } from '../routes'

export const getSelectRouteHandler: RouteHandler<typeof getSelectRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSelectRouteHandler: RouteHandler<typeof postSelectRoute> = async (c) => {
  throw new Error('Not implemented')
}
