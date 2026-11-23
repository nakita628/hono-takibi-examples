import type { RouteHandler } from '@hono/zod-openapi'
import type { getDevelopersIdRoute, getDevelopersRoute } from '../routes'

export const getDevelopersRouteHandler: RouteHandler<typeof getDevelopersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevelopersIdRouteHandler: RouteHandler<typeof getDevelopersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
