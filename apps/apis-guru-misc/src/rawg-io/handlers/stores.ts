import type { RouteHandler } from '@hono/zod-openapi'
import type { getStoresIdRoute, getStoresRoute } from '../routes'

export const getStoresRouteHandler: RouteHandler<typeof getStoresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStoresIdRouteHandler: RouteHandler<typeof getStoresIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
