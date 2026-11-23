import type { RouteHandler } from '@hono/zod-openapi'
import type { getPayItemsRoute, postPayItemsRoute } from '../routes'

export const getPayItemsRouteHandler: RouteHandler<typeof getPayItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayItemsRouteHandler: RouteHandler<typeof postPayItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}
