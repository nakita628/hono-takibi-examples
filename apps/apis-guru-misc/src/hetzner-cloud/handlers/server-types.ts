import type { RouteHandler } from '@hono/zod-openapi'
import type { getServerTypesIdRoute, getServerTypesRoute } from '../routes'

export const getServerTypesRouteHandler: RouteHandler<typeof getServerTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getServerTypesIdRouteHandler: RouteHandler<typeof getServerTypesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
