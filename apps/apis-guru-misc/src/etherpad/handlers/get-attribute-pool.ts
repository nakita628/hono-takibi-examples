import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetAttributePoolRoute, postGetAttributePoolRoute } from '../routes'

export const getGetAttributePoolRouteHandler: RouteHandler<
  typeof getGetAttributePoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetAttributePoolRouteHandler: RouteHandler<
  typeof postGetAttributePoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
