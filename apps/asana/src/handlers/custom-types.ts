import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomTypesCustomTypeGidRoute, getCustomTypesRoute } from '../routes'

export const getCustomTypesRouteHandler: RouteHandler<typeof getCustomTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomTypesCustomTypeGidRouteHandler: RouteHandler<
  typeof getCustomTypesCustomTypeGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
