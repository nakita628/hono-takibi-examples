import type { RouteHandler } from '@hono/zod-openapi'
import type { getExtensionSchemasRoute, getExtensionSchemasIdRoute } from '../routes'

export const getExtensionSchemasRouteHandler: RouteHandler<
  typeof getExtensionSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExtensionSchemasIdRouteHandler: RouteHandler<
  typeof getExtensionSchemasIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
