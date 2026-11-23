import type { RouteHandler } from '@hono/zod-openapi'
import type { getTypesRoute, getTypesTypeRoute } from '../routes'

export const getTypesRouteHandler: RouteHandler<typeof getTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTypesTypeRouteHandler: RouteHandler<typeof getTypesTypeRoute> = async (c) => {
  throw new Error('Not implemented')
}
