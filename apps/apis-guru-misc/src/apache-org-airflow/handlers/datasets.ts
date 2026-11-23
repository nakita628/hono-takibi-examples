import type { RouteHandler } from '@hono/zod-openapi'
import type { getDatasetsEventsRoute, getDatasetsRoute, getDatasetsUriRoute } from '../routes'

export const getDatasetsRouteHandler: RouteHandler<typeof getDatasetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatasetsEventsRouteHandler: RouteHandler<typeof getDatasetsEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDatasetsUriRouteHandler: RouteHandler<typeof getDatasetsUriRoute> = async (c) => {
  throw new Error('Not implemented')
}
