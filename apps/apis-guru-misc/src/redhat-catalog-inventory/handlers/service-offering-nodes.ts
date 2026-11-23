import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceOfferingNodesIdRoute, getServiceOfferingNodesRoute } from '../routes'

export const getServiceOfferingNodesRouteHandler: RouteHandler<
  typeof getServiceOfferingNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceOfferingNodesIdRouteHandler: RouteHandler<
  typeof getServiceOfferingNodesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
