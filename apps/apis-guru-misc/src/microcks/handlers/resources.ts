import type { RouteHandler } from '@hono/zod-openapi'
import type { getResourcesNameRoute, getResourcesServiceServiceIdRoute } from '../routes'

export const getResourcesServiceServiceIdRouteHandler: RouteHandler<
  typeof getResourcesServiceServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getResourcesNameRouteHandler: RouteHandler<typeof getResourcesNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
