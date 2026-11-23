import type { RouteHandler } from '@hono/zod-openapi'
import type { getSchemasDtoDataTypeRoute, getSchemasRoute } from '../routes'

export const getSchemasRouteHandler: RouteHandler<typeof getSchemasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemasDtoDataTypeRouteHandler: RouteHandler<
  typeof getSchemasDtoDataTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
