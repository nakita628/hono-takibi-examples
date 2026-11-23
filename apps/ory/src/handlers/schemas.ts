import type { RouteHandler } from '@hono/zod-openapi'
import type { getSchemasIdRoute, getSchemasRoute } from '../routes'

export const getSchemasRouteHandler: RouteHandler<typeof getSchemasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemasIdRouteHandler: RouteHandler<typeof getSchemasIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
