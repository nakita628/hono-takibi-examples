import type { RouteHandler } from '@hono/zod-openapi'
import type { getApisApiVersionRestRoute, getApisRoute } from '../routes'

export const getApisRouteHandler: RouteHandler<typeof getApisRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApisApiVersionRestRouteHandler: RouteHandler<
  typeof getApisApiVersionRestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
