import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomTypesRoute, getCustomTypesCustomTypeGidRoute } from '../routes'

export const getCustomTypesRouteHandler: RouteHandler<typeof getCustomTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomTypesCustomTypeGidRouteHandler: RouteHandler<
  typeof getCustomTypesCustomTypeGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
